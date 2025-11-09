import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { getCardTypeFromProductToken } from '@/constants/card-config';
import { Colors } from '@/constants/theme';
import { useCards } from '@/hooks/use-cards';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ActiveCardContext } from '@/Providers/ActiveCardProvider';
import { AuthContext } from '@/Providers/AuthProvider';
import { useContext, useRef, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

// Helper function to parse influencer info from metadata
interface InfluencerInfo {
  name: string;
  id: string;
  imageUrl?: string;
}

function parseInfluencerFromMetadata(metadata: any): InfluencerInfo | null {
  if (!metadata) {
    return null;
  }

  if (metadata.influencer_name && metadata.influencer_id) {
    return {
      name: metadata.influencer_name,
      id: metadata.influencer_id,
      imageUrl: metadata.influencer_image_url,
    };
  }

  return null;
}

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  const { isAuthenticated, session } = useContext(AuthContext);
  const {
    activeCard,
    cardType,
    influencer,
    setActiveCard,
    updateInfluencer,
  } = useContext(ActiveCardContext);

  // Fetch all cards for carousel
  const { data: cardsData, isLoading: cardsLoading } = useCards();
  const cards = (cardsData as any)?.data || [];

  // Add "add new card" item to the end of the cards array
  const addNewCardItem = { token: 'ADD_NEW_CARD', isAddNewCard: true };
  const cardsWithAddNew = [...cards, addNewCardItem];

  // Carousel state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const carouselRef = useRef<FlatList>(null);
  const screenWidth = Dimensions.get('window').width;



  // Handle carousel scroll end
  const handleScrollEnd = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);

    if (pageNum !== currentCardIndex && pageNum < cardsWithAddNew.length) {
      setCurrentCardIndex(pageNum);
      // Update active card when user swipes (silently) - but not for "add new card"
      const newActiveCard = cardsWithAddNew[pageNum];
      if (newActiveCard?.token && newActiveCard.token !== activeCard?.token && !newActiveCard.isAddNewCard) {
        setActiveCard(newActiveCard.token)
          .catch(error => {
            console.error('Failed to set active card:', error);
          });
      }
    }
  };

  // Render individual card
  const renderCard = ({ item: card }: { item: any }) => {
    // Handle "add new card" case
    if (card.isAddNewCard) {
      return (
        <View style={[styles.cardContainer, { width: screenWidth - 48 }]}>
          <TouchableOpacity style={[styles.card, styles.addNewCard]}>
            <View style={styles.addNewCardContent}>
              <IconSymbol name="plus.circle" size={48} color={Colors[theme].tint} />
              <ThemedText style={[styles.addNewCardText, { color: Colors[theme].tint }]}>
                Add New Card
              </ThemedText>
              <ThemedText style={styles.addNewCardSubtext}>
                Tap to add a new influencer card
              </ThemedText>
            </View>
          </TouchableOpacity>
        </View>
      );
    }

    // Get card type and influencer info for this specific card
    const cardTypeForCard = card.card_product_token
      ? getCardTypeFromProductToken(card.card_product_token)
      : null;
    const influencerForCard = card.metadata
      ? parseInfluencerFromMetadata(card.metadata)
      : null;
    const cardNumberForCard = card.last_four ? `**** **** **** ${card.last_four}` : null;

    // Handler for influencer click
    const handleInfluencerClick = async () => {
      try {
        await updateInfluencer(card.token, '1');
        console.log('Influencer updated to ID 1 for card:', card.token);
      } catch (error) {
        console.error('Failed to update influencer:', error);
      }
    };

    return (
      <View style={[styles.cardContainer, { width: screenWidth - 48 }]}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <TouchableOpacity style={styles.influenceSection} onPress={handleInfluencerClick}>
              <ThemedText style={styles.influenceName}>
                {influencerForCard?.name || 'No Influencer'}
              </ThemedText>
            </TouchableOpacity>
            <View style={styles.cardTypeSection}>
              <ThemedText style={styles.influenceLabel}>
                {cardTypeForCard === 'CREDIT' ? 'CREDIT' : 'PREPAID'}
              </ThemedText>
            </View>
          </View>

          <View style={styles.cardNumberContainer}>
            <ThemedText style={styles.cardNumberText}>
              {cardNumberForCard || 'Card Number N/A'}
            </ThemedText>
            <View style={styles.cardIcons}>
              <IconSymbol name="eye" size={16} color="#ffffff" />
              <IconSymbol name="doc.on.doc" size={16} color="#ffffff" />
            </View>
          </View>

          <View style={styles.cardFooter}>
            <View>
              <ThemedText style={styles.cardholderLabel}>CARDHOLDER</ThemedText>
              <ThemedText style={styles.cardholderName}>
                {session?.identity?.traits?.first_name} {session?.identity?.traits?.last_name}
              </ThemedText>
            </View>
            <View>
              <ThemedText style={styles.validThruLabel}>Valid Thru</ThemedText>
              <ThemedText style={styles.validThruDate}>
                {card.expiration ?
                  `${card.expiration.slice(0, 2)}/${card.expiration.slice(2)}` :
                  'N/A'
                }
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    );
  };

  // Render card indicators
  const renderCardIndicators = () => {
    if (cardsWithAddNew.length <= 1) return null;

    return (
      <View style={styles.indicatorsContainer}>
        {cardsWithAddNew.map((_: any, index: number) => (
          <View
            key={index}
            style={[
              styles.indicator,
              {
                backgroundColor: index === currentCardIndex
                  ? Colors[theme].tint
                  : theme === 'dark' ? '#444' : '#ccc'
              }
            ]}
          />
        ))}
      </View>
    );
  };

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <ThemedView style={styles.container}>
        <ThemedView style={styles.loginPrompt}>
          <ThemedText type="title">Welcome!</ThemedText>
          <ThemedText style={styles.loginText}>
            Please log in to access your influencer card dashboard.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
      {/* Header */}
      <ThemedView style={[styles.header, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
        <View style={styles.greeting}>
          <ThemedText style={styles.greetingText}>Welcome,</ThemedText>
          <ThemedText style={styles.nameText}>{session?.identity?.traits?.first_name}</ThemedText>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <IconSymbol name="bell" size={24} color={Colors[theme].tint} />
        </TouchableOpacity>
      </ThemedView>

      {/* Card Carousel */}
      <ThemedView style={[styles.section, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
        {!cardsLoading || cardsData ? (
          <>
            <FlatList
              ref={carouselRef}
              data={cardsWithAddNew}
              renderItem={renderCard}
              keyExtractor={(item: any) => item.token || ''}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={handleScrollEnd}
              getItemLayout={(_data, index) => ({
                length: screenWidth - 48,
                offset: (screenWidth - 48) * index,
                index,
              })}
              removeClippedSubviews={true}
              maxToRenderPerBatch={3}
              windowSize={3}
            />
            {renderCardIndicators()}
          </>
        ) : (
          <ThemedText style={styles.loadingText}>Loading cards...</ThemedText>
        )}
      </ThemedView>

      {/* Stats Section */}
      <ThemedView style={[styles.statsSection, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
            <View style={styles.statHeader}>
              <IconSymbol name="creditcard" size={20} color="#2196F3" />
              <ThemedText style={styles.statTitle}>GPA Balance</ThemedText>
            </View>
            <ThemedText style={styles.statAmount}>$2,847.50</ThemedText>
            <ThemedText style={styles.statSubtext}>Available balance</ThemedText>
          </View>

          <View style={[styles.statCard, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
            <View style={styles.statHeader}>
              <IconSymbol name="dollarsign.circle" size={20} color={Colors[theme].tint} />
              <ThemedText style={styles.statTitle}>This Month</ThemedText>
            </View>
            <ThemedText style={styles.statAmount}>$1,234</ThemedText>
            <ThemedText style={styles.statSubtext}>Total spent</ThemedText>
            <ThemedText style={[styles.statChange, { color: '#4CAF50' }]}>+12% vs last month</ThemedText>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
            <View style={styles.statHeader}>
              <IconSymbol name="gift" size={20} color="#9C27B0" />
              <ThemedText style={styles.statTitle}>Rewards Earned</ThemedText>
            </View>
            <ThemedText style={styles.statAmount}>$89</ThemedText>
            <ThemedText style={styles.statSubtext}>This month</ThemedText>
            <ThemedText style={[styles.statChange, { color: '#4CAF50' }]}>+8% vs last month</ThemedText>
          </View>

          <View style={[styles.statCard, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
            <View style={styles.statHeader}>
              <IconSymbol name="person.fill" size={20} color="#FF9800" />
              <ThemedText style={styles.statTitle}>Top Creator</ThemedText>
            </View>
            <ThemedText style={styles.statAmount}>@TechGuru</ThemedText>
            <ThemedText style={styles.statSubtext}>Most used</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Recent Transactions */}
      <ThemedView style={[styles.section, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
        <View style={styles.sectionHeader}>
          <ThemedText style={styles.sectionTitle}>Recent Transactions</ThemedText>
          <TouchableOpacity>
            <ThemedText style={[styles.viewAllText, { color: Colors[theme].tint }]}>View All</ThemedText>
          </TouchableOpacity>
        </View>

        <ThemedView style={styles.transactionsList}>
          <View style={[styles.transactionItem, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
            <View style={styles.transactionLeft}>
              <View style={[styles.transactionIcon, { backgroundColor: '#FF9800' }]}>
                <IconSymbol name="arrow.down" size={16} color="#ffffff" />
              </View>
              <View>
                <ThemedText style={styles.transactionTitle}>Coffee Shop</ThemedText>
                <ThemedText style={styles.transactionSubtitle}>Food</ThemedText>
                <ThemedText style={[styles.transactionInfluencer, { color: '#9C27B0' }]}>@FoodieBlogger</ThemedText>
              </View>
            </View>
            <View style={styles.transactionRight}>
              <ThemedText style={styles.transactionAmount}>$4.50</ThemedText>
              <ThemedText style={styles.transactionDate}>2024-01-15</ThemedText>
            </View>
          </View>

          <View style={[styles.transactionItem, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
            <View style={styles.transactionLeft}>
              <View style={[styles.transactionIcon, { backgroundColor: '#4CAF50' }]}>
                <IconSymbol name="arrow.up" size={16} color="#ffffff" />
              </View>
              <View>
                <ThemedText style={styles.transactionTitle}>Reward Cashback</ThemedText>
                <ThemedText style={styles.transactionSubtitle}>Rewards</ThemedText>
                <ThemedText style={[styles.transactionInfluencer, { color: Colors[theme].tint }]}>@TechGuru</ThemedText>
              </View>
            </View>
            <View style={styles.transactionRight}>
              <ThemedText style={[styles.transactionAmount, { color: '#4CAF50' }]}>+$25.00</ThemedText>
              <ThemedText style={styles.transactionDate}>2024-01-14</ThemedText>
            </View>
          </View>

          <View style={[styles.transactionItem, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
            <View style={styles.transactionLeft}>
              <View style={[styles.transactionIcon, { backgroundColor: '#FF9800' }]}>
                <IconSymbol name="arrow.down" size={16} color="#ffffff" />
              </View>
              <View>
                <ThemedText style={styles.transactionTitle}>Online Shopping</ThemedText>
                <ThemedText style={styles.transactionSubtitle}>Shopping</ThemedText>
                <ThemedText style={[styles.transactionInfluencer, { color: '#E91E63' }]}>@fashionista</ThemedText>
              </View>
            </View>
            <View style={styles.transactionRight}>
              <ThemedText style={styles.transactionAmount}>$89.99</ThemedText>
              <ThemedText style={styles.transactionDate}>2024-01-14</ThemedText>
            </View>
          </View>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginPrompt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 16,
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  greeting: {
    flex: 1,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '300',
    opacity: 0.8,
  },
  notificationButton: {
    padding: 8,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '500',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  dropdownContent: {
    flex: 1,
  },
  influencerName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  influencerCategory: {
    fontSize: 14,
    opacity: 0.6,
  },
  card: {
    backgroundColor: '#4A5568',
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  influenceSection: {
    alignItems: 'flex-start',
  },
  cardTypeSection: {
    alignItems: 'flex-end',
  },
  influenceLabel: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 4,
  },
  influenceName: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  cardNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  cardNumberText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 2,
  },
  cardIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardholderLabel: {
    color: '#ffffff',
    fontSize: 10,
    opacity: 0.8,
    marginBottom: 4,
  },
  cardholderName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  validThruLabel: {
    color: '#ffffff',
    fontSize: 10,
    opacity: 0.8,
    marginBottom: 4,
    textAlign: 'right',
  },
  validThruDate: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  statsSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.8,
  },
  statAmount: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  statSubtext: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 8,
  },
  statChange: {
    fontSize: 12,
    fontWeight: '500',
  },
  transactionsList: {
    gap: 12,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  transactionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  transactionSubtitle: {
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 2,
  },
  transactionInfluencer: {
    fontSize: 12,
    fontWeight: '500',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  transactionDate: {
    fontSize: 12,
    opacity: 0.6,
  },
  loadingText: {
    textAlign: 'center',
    padding: 16,
    opacity: 0.7,
  },
  noCardText: {
    textAlign: 'center',
    padding: 16,
    opacity: 0.7,
    fontStyle: 'italic',
  },
  cardContainer: {
    paddingHorizontal: 24,
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  addNewCard: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ccc',
  },
  addNewCardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  addNewCardText: {
    fontSize: 18,
    fontWeight: '600',
  },
  addNewCardSubtext: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
});
