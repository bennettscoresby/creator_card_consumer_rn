import axios from 'axios';
import Constants from 'expo-constants';
import { CardHolderModel, Configuration, UserCardHolderResponse, UsersApi } from '../marqeta-sdk';
import { resilience } from './axios';

interface MarqetaUserData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address1: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  birth_date: string;
}

class MarqetaService {
  private usersApi: UsersApi;

  constructor() {
    const baseURL = Constants.expoConfig?.extra?.marqetaBaseUrl;
    const apiKey = Constants.expoConfig?.extra?.marqetaApiKey;
    const apiSecret = Constants.expoConfig?.extra?.marqetaApiSecret;

    if (!baseURL || !apiKey || !apiSecret) {
      throw new Error('❌ MARQETA CONFIG NOT FOUND! Add marqeta config to app.config.js');
    }

    // Create axios instance with retry logic
    const axiosWithRetry = axios.create();
    resilience(axiosWithRetry);

    const configuration = new Configuration({
      basePath: baseURL,
      username: apiKey,
      password: apiSecret,
    });

    this.usersApi = new UsersApi(configuration, baseURL, axiosWithRetry);
  }

  async createUser(userData: MarqetaUserData): Promise<UserCardHolderResponse> {
    try {
      const cardHolderData: CardHolderModel = {
        'first_name': userData.first_name,
        'last_name': userData.last_name,
        'email': userData.email,
        'phone': userData.phone,
        'address1': userData.address1,
        'city': userData.city,
        'state': userData.state,
        'postal_code': userData.postal_code,
        'country': userData.country,
        'birth_date': userData.birth_date,
        'active': true,
      };

      console.log('Creating Marqeta user with data:', cardHolderData);

      const response = await this.usersApi.postUsers(cardHolderData);
      return response.data;
    } catch (error) {
      console.error('Marqeta user creation failed:', error);
      throw error;
    }
  }

  async getUser(userToken: string): Promise<UserCardHolderResponse> {
    try {
      console.log('Getting Marqeta user:', userToken);
      const response = await this.usersApi.getUsersToken(userToken);
      return response.data;
    } catch (error) {
      console.error('Marqeta get user failed:', error);
      throw error;
    }
  }

  // Add other methods as needed for cards, etc.
  // async createCard(userToken: string, cardProductToken: string) {
  //   // Implementation would go here using CardsApi
  // }
}

export const marqetaService = new MarqetaService();
