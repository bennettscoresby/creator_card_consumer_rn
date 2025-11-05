import Constants from 'expo-constants';

/**
 * Card types supported by the application
 */
export enum CardType {
  PREPAID = 'PREPAID',
  CREDIT = 'CREDIT',
}

/**
 * Load card product tokens from environment
 */
function loadTokensFromEnv(key: string): string[] {
  const tokensStr = Constants.expoConfig?.extra?.[key] || '';
  return tokensStr
    .split(',')
    .map((token: string) => token.trim())
    .filter((token: string) => token.length > 0);
}

/**
 * Prepaid card product tokens
 * Add your prepaid card product tokens here or via CARD_PRODUCT_TOKENS_PREPAID env var
 */
export const PREPAID_PRODUCT_TOKENS = loadTokensFromEnv('cardProductTokensPrepaid');

/**
 * Credit card product tokens
 * Add your credit card product tokens here or via CARD_PRODUCT_TOKENS_CREDIT env var
 * Empty for now - populate when you're ready to support credit cards
 */
export const CREDIT_PRODUCT_TOKENS = loadTokensFromEnv('cardProductTokensCredit');

/**
 * Get card type from card product token
 */
export function getCardTypeFromProductToken(cardProductToken: string): CardType | null {
  if (PREPAID_PRODUCT_TOKENS.includes(cardProductToken)) {
    return CardType.PREPAID;
  }
  if (CREDIT_PRODUCT_TOKENS.includes(cardProductToken)) {
    return CardType.CREDIT;
  }
  return null;
}

