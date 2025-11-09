// This file defines a React Context which keeps track of the active card.

import AsyncStore from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Platform } from 'react-native';
import { CardType, getCardTypeFromProductToken } from '../constants/card-config';
import { marqetaService } from '../helpers/marqeta-service';
import { CardProductResponse, CardResponse } from '../marqeta-sdk';
import { AuthContext } from './AuthProvider';

// The key under which the active card token is stored
const activeCardTokenKey = 'active_card_token';

/**
 * Influencer/Brand information associated with a card
 */
export interface InfluencerInfo {
  name: string;
  id: string;
  imageUrl?: string;
  // Add other influencer details as needed
}

/**
 * Active card context interface
 */
interface ActiveCardContextValue {
  // Current active card
  activeCard: CardResponse | null;

  // Card product details (includes type info)
  cardProduct: CardProductResponse | null;

  // Derived properties for convenience
  cardType: CardType | null;
  isCardActive: boolean;

  // Card details
  cardNumber: string | null; // masked PAN
  lastFour: string | null;

  // Custom metadata (influencer info, etc.)
  influencer: InfluencerInfo | null;

  // Actions
  setActiveCard: (cardToken: string) => Promise<void>;
  refreshCard: () => Promise<void>;
  clearActiveCard: () => void;
  updateInfluencer: (cardToken: string, influencerId: string) => Promise<void>;

  // Loading states
  isLoading: boolean;
  error: Error | null;
}

export const ActiveCardContext = createContext<ActiveCardContextValue>({
  activeCard: null,
  cardProduct: null,
  cardType: null,
  isCardActive: false,
  cardNumber: null,
  lastFour: null,
  influencer: null,
  setActiveCard: async () => { },
  refreshCard: async () => { },
  clearActiveCard: () => { },
  updateInfluencer: async () => { },
  isLoading: false,
  error: null,
});

interface ActiveCardProviderProps {
  children: ReactNode;
}

export default function ActiveCardProvider({ children }: ActiveCardProviderProps) {
  const { isAuthenticated, session } = useContext(AuthContext);
  const [activeCard, setActiveCardState] = useState<CardResponse | null>(null);
  const [cardProduct, setCardProduct] = useState<CardProductResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Derived state
  const cardType = cardProduct?.token
    ? getCardTypeFromProductToken(cardProduct.token)
    : null;
  const isCardActive = activeCard?.state === 'ACTIVE';
  const cardNumber = activeCard?.last_four ? `**** **** **** ${activeCard.last_four}` : null;
  const lastFour = activeCard?.last_four || null;

  // Parse influencer info from card metadata
  const influencer: InfluencerInfo | null = activeCard?.metadata
    ? parseInfluencerFromMetadata(activeCard.metadata)
    : null;

  /**
   * Load active card token from storage
   */
  const loadActiveCardToken = async (): Promise<string | null> => {
    try {
      if (Platform.OS === 'web') {
        return await AsyncStore.getItem(activeCardTokenKey);
      }
      return await SecureStore.getItemAsync(activeCardTokenKey);
    } catch (error) {
      console.error('Failed to load active card token:', error);
      return null;
    }
  };

  /**
   * Save active card token to storage
   */
  const saveActiveCardToken = async (cardToken: string): Promise<void> => {
    try {
      if (Platform.OS === 'web') {
        await AsyncStore.setItem(activeCardTokenKey, cardToken);
      } else {
        await SecureStore.setItemAsync(activeCardTokenKey, cardToken);
      }
    } catch (error) {
      console.error('Failed to save active card token:', error);
      throw error;
    }
  };

  /**
   * Remove active card token from storage
   */
  const removeActiveCardToken = async (): Promise<void> => {
    try {
      if (Platform.OS === 'web') {
        await AsyncStore.removeItem(activeCardTokenKey);
      } else {
        await SecureStore.deleteItemAsync(activeCardTokenKey);
      }
    } catch (error) {
      console.error('Failed to remove active card token:', error);
    }
  };

  /**
   * Fetch card and card product details
   */
  const fetchCardDetails = async (cardToken: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch card details
      const card = await marqetaService.getCard(cardToken);
      setActiveCardState(card);

      // Fetch card product details
      if (card.card_product_token) {
        const product = await marqetaService.getCardProduct(card.card_product_token);
        setCardProduct(product);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch card details');
      setError(error);
      console.error('Failed to fetch card details:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Set the active card
   */
  const setActiveCard = async (cardToken: string): Promise<void> => {
    try {
      await fetchCardDetails(cardToken);
      await saveActiveCardToken(cardToken);
    } catch (error) {
      console.error('Failed to set active card:', error);
      throw error;
    }
  };

  /**
   * Refresh the current active card
   */
  const refreshCard = async (): Promise<void> => {
    if (!activeCard?.token) {
      return;
    }
    await fetchCardDetails(activeCard.token);
  };

  /**
   * Clear the active card
   */
  const clearActiveCard = (): void => {
    setActiveCardState(null);
    setCardProduct(null);
    setError(null);
    removeActiveCardToken();
  };

  /**
   * Update influencer for a specific card
   */
  const updateInfluencer = async (cardToken: string, influencerId: string): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      // Get current card to preserve existing metadata
      const currentCard = await marqetaService.getCard(cardToken);

      // Update metadata with new influencer_id
      const updatedMetadata = {
        ...currentCard.metadata,
        influencer_id: influencerId,
      };

      // Update the card
      await marqetaService.updateCard(cardToken, {
        token: cardToken,
        metadata: updatedMetadata,
      });

      // Refresh card details to get updated data
      await fetchCardDetails(cardToken);

      console.log('Successfully updated influencer to ID:', influencerId);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to update influencer');
      setError(error);
      console.error('Failed to update influencer:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Load active card on mount or when authentication changes
   */
  useEffect(() => {
    const loadActiveCard = async () => {
      if (!isAuthenticated) {
        clearActiveCard();
        setIsLoading(false);
        return;
      }

      const marqetaToken = session?.identity?.traits?.marqeta_token;
      if (!marqetaToken) {
        setIsLoading(false);
        return;
      }

      const savedCardToken = await loadActiveCardToken();
      if (savedCardToken) {
        try {
          await fetchCardDetails(savedCardToken);
        } catch (error) {
          console.error('Failed to load saved card:', error);
          // Clear invalid saved card token
          await removeActiveCardToken();
          setIsLoading(false);
        }
      } else {
        // No saved card - fetch all cards and set first one as active
        try {
          console.log('No saved card found, fetching all cards...');
          const cardsData = await marqetaService.getUserCards(marqetaToken);

          if (cardsData?.data && cardsData.data.length > 0) {
            const firstCard = cardsData.data[0];
            if (firstCard.token) {
              console.log('Setting first card as active:', firstCard.token);
              await setActiveCard(firstCard.token);
            } else {
              setIsLoading(false);
            }
          } else {
            console.log('No cards found for user');
            setIsLoading(false);
          }
        } catch (error) {
          console.error('Failed to fetch cards:', error);
          setIsLoading(false);
        }
      }
    };

    loadActiveCard();
  }, [isAuthenticated, session]);

  return (
    <ActiveCardContext.Provider
      value={{
        activeCard,
        cardProduct,
        cardType,
        isCardActive,
        cardNumber,
        lastFour,
        influencer,
        setActiveCard,
        refreshCard,
        clearActiveCard,
        updateInfluencer,
        isLoading,
        error,
      }}
    >
      {children}
    </ActiveCardContext.Provider>
  );
}

/**
 * Parse influencer information from card metadata
 */
function parseInfluencerFromMetadata(metadata: any): InfluencerInfo | null {
  if (!metadata) {
    return null;
  }

  // Assuming metadata structure like:
  // { influencer_name: "John Doe", influencer_id: "123", influencer_image_url: "..." }
  if (metadata.influencer_name && metadata.influencer_id) {
    return {
      name: metadata.influencer_name,
      id: metadata.influencer_id,
      imageUrl: metadata.influencer_image_url,
    };
  }

  return null;
}

