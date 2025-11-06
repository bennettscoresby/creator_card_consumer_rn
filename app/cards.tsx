import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useCards } from '@/hooks/use-cards';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CardResponse } from '@/marqeta-sdk';
import { ActiveCardContext } from '@/Providers/ActiveCardProvider';
import { useContext, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CardsScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  const { data: cardsData, isLoading, error } = useCards();
  const { activeCard, setActiveCard } = useContext(ActiveCardContext);
  const [selectingCard, setSelectingCard] = useState<string | null>(null);

  const handleSelectCard = async (card: CardResponse) => {
    if (!card.token) return;

    try {
      setSelectingCard(card.token);
      await setActiveCard(card.token);
    } catch (error) {
      console.error('Failed to set active card:', error);
      alert('Failed to set active card. Please try again.');
    } finally {
      setSelectingCard(null);
    }
  };

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color={Colors[theme].tint} />
          <ThemedText style={styles.loadingText}>Loading your cards...</ThemedText>
        </View>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.container}>
        <View style={styles.centerContent}>
          <IconSymbol name="exclamationmark.triangle" size={48} color={Colors[theme].tint} />
          <ThemedText style={styles.errorTitle}>Failed to load cards</ThemedText>
          <ThemedText style={styles.errorText}>{error.message}</ThemedText>
        </View>
      </ThemedView>
    );
  }

  const cards = cardsData?.data || [];

  if (cards.length === 0) {
    return (
      <ThemedView style={styles.container}>
        <View style={styles.centerContent}>
          <IconSymbol name="creditcard" size={48} color={Colors[theme].tint} />
          <ThemedText style={styles.emptyTitle}>No Cards Found</ThemedText>
          <ThemedText style={styles.emptyText}>
            You don't have any cards yet. Contact support to get started.
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ThemedText type="title">Select Your Card</ThemedText>
          <ThemedText style={styles.subtitle}>
            Choose which card you want to use as your active card
          </ThemedText>
        </View>

        <View style={styles.cardsList}>
          {cards.map((card: CardResponse) => {
            const isActive = activeCard?.token === card.token;
            const isSelecting = selectingCard === card.token;

            return (
              <TouchableOpacity
                key={card.token}
                style={[
                  styles.cardItem,
                  {
                    backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff',
                    borderColor: isActive ? Colors[theme].tint : theme === 'dark' ? '#333' : '#e0e0e0',
                    borderWidth: isActive ? 2 : 1,
                  },
                ]}
                onPress={() => handleSelectCard(card)}
                disabled={isSelecting}
              >
                <View style={styles.cardContent}>
                  <View style={styles.cardIcon}>
                    <IconSymbol
                      name="creditcard.fill"
                      size={32}
                      color={isActive ? Colors[theme].tint : Colors[theme].text}
                    />
                  </View>

                  <View style={styles.cardInfo}>
                    <ThemedText style={styles.cardNumber}>
                      •••• •••• •••• {card.last_four}
                    </ThemedText>
                    <ThemedText style={styles.cardState}>
                      {card.state || 'Unknown'}
                    </ThemedText>
                    {card.metadata?.influencer_name && (
                      <ThemedText style={[styles.cardInfluencer, { color: Colors[theme].tint }]}>
                        {card.metadata.influencer_name}
                      </ThemedText>
                    )}
                  </View>

                  <View style={styles.cardAction}>
                    {isSelecting ? (
                      <ActivityIndicator size="small" color={Colors[theme].tint} />
                    ) : isActive ? (
                      <View style={[styles.activeBadge, { backgroundColor: Colors[theme].tint }]}>
                        <ThemedText style={styles.activeBadgeText}>Active</ThemedText>
                      </View>
                    ) : (
                      <IconSymbol name="chevron.right" size={20} color={Colors[theme].text} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 8,
  },
  loadingText: {
    marginTop: 16,
    opacity: 0.7,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
  },
  errorText: {
    marginTop: 8,
    opacity: 0.7,
    textAlign: 'center',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
  },
  emptyText: {
    marginTop: 8,
    opacity: 0.7,
    textAlign: 'center',
  },
  cardsList: {
    padding: 24,
    paddingTop: 0,
    gap: 12,
  },
  cardItem: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    flex: 1,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardState: {
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 2,
  },
  cardInfluencer: {
    fontSize: 14,
    fontWeight: '500',
  },
  cardAction: {
    width: 60,
    alignItems: 'flex-end',
  },
  activeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  activeBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});

