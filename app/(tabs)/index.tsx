import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthContext } from '@/Providers/AuthProvider';
import { useContext, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ?? 'light';
  const { isAuthenticated } = useContext(AuthContext);
  const [cards, setCards] = useState(null);

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
          <ThemedText style={styles.greetingText}>Good morning,</ThemedText>
          <ThemedText style={styles.nameText}>Alex</ThemedText>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <IconSymbol name="bell" size={24} color={Colors[theme].tint} />
        </TouchableOpacity>
      </ThemedView>

      {/* Active Influencer Card Section */}
      <ThemedView style={[styles.section, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
        <ThemedText style={styles.sectionTitle}>Active Influencer Card</ThemedText>
        <ThemedText style={styles.sectionSubtitle}>Choose which influencer to promote with your card</ThemedText>

        <TouchableOpacity style={[styles.dropdown, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff', borderColor: theme === 'dark' ? '#333' : '#e0e0e0' }]}>
          <View style={styles.dropdownContent}>
            <ThemedText style={styles.influencerName}>@TechGuru</ThemedText>
            <ThemedText style={styles.influencerCategory}>Technology</ThemedText>
          </View>
          <IconSymbol name="chevron.down" size={16} color={Colors[theme].text} />
        </TouchableOpacity>
      </ThemedView>

      {/* Card Display */}
      <ThemedView style={[styles.section, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <ThemedText style={styles.balanceLabel}>Balance</ThemedText>
              <ThemedText style={styles.balanceAmount}>$2,847.5</ThemedText>
            </View>
            <View style={styles.influenceSection}>
              <ThemedText style={styles.influenceLabel}>INFLUENCE</ThemedText>
              <ThemedText style={styles.influenceName}>@TechGuru</ThemedText>
            </View>
          </View>

          <View style={styles.cardNumber}>
            <ThemedText style={styles.cardNumberText}>**** **** **** 9012</ThemedText>
            <View style={styles.cardIcons}>
              <IconSymbol name="eye" size={16} color="#ffffff" />
              <IconSymbol name="doc.on.doc" size={16} color="#ffffff" />
            </View>
          </View>

          <View style={styles.cardFooter}>
            <View>
              <ThemedText style={styles.cardholderLabel}>CARDHOLDER</ThemedText>
              <ThemedText style={styles.cardholderName}>Alex Johnson</ThemedText>
            </View>
            <View>
              <ThemedText style={styles.validThruLabel}>Valid Thru</ThemedText>
              <ThemedText style={styles.validThruDate}>12/27</ThemedText>
            </View>
          </View>
        </View>
      </ThemedView>

      {/* Stats Section */}
      <ThemedView style={[styles.statsContainer, { backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f8f9fa' }]}>
        <View style={[styles.statCard, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
          <View style={styles.statHeader}>
            <IconSymbol name="dollarsign.circle" size={20} color={Colors[theme].tint} />
            <ThemedText style={styles.statTitle}>This Month</ThemedText>
          </View>
          <ThemedText style={styles.statAmount}>$1,234</ThemedText>
          <ThemedText style={styles.statSubtext}>Total spent</ThemedText>
          <ThemedText style={[styles.statChange, { color: '#4CAF50' }]}>+12% vs last month</ThemedText>
        </View>

        <View style={[styles.statCard, { backgroundColor: theme === 'dark' ? '#2a2a2a' : '#ffffff' }]}>
          <View style={styles.statHeader}>
            <IconSymbol name="gift" size={20} color="#9C27B0" />
            <ThemedText style={styles.statTitle}>Rewards Earned</ThemedText>
          </View>
          <ThemedText style={styles.statAmount}>$89</ThemedText>
          <ThemedText style={styles.statSubtext}>This month</ThemedText>
          <ThemedText style={[styles.statChange, { color: '#4CAF50' }]}>+8% vs last month</ThemedText>
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
  balanceLabel: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 4,
  },
  balanceAmount: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '600',
  },
  influenceSection: {
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
    fontSize: 16,
    fontWeight: '500',
  },
  cardNumber: {
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
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 24,
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
});
