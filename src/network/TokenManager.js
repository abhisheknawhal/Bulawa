import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from './ApiManager';

const TOKEN = 'token';
const FCM_TOKEN = 'fcmToken';
const REFRESHTOKEN = 'refreshToken';

class TokenManager {
  static async setTokens(tokens) {
    try {
      await AsyncStorage.setItem(TOKEN, JSON.stringify(tokens));
    } catch (error) {
      console.log('Error saving data' + error);
    }
  }

  static async getTokens() {
    try {
      const value = await AsyncStorage.getItem(TOKEN);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  static async setRefreshTokens(refreshToken) {
    console.warn('resfs', refreshToken);
    try {
      await AsyncStorage.setItem(REFRESHTOKEN, JSON.stringify(refreshToken));
    } catch (error) {
      console.log('Error saving data' + error);
    }
  }

  static async getRefreshTokens() {
    try {
      const value = await AsyncStorage.getItem(REFRESHTOKEN);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  static async getAccessToken() {
    try {
      const tokens = await this.getTokens();
      if (tokens) {
        return tokens.access;
      } else {
        return null;
      }
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  static async getRefresh() {
    try {
      const tokens = await AsyncStorage.getRefreshTokens();
      if (tokens) {
        return tokens.refresh;
      }
      return null;
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  static async getNewAccessToken() {
    return new Promise(async (resolve, reject) => {
      try {
        const url = BASE_URL + 'verifyToken';
        const refresh = await this.getRefreshTokens();

        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({token: refresh}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          const tokens = await response.json();
          this.setTokens(tokens.accessToken);
          resolve(tokens.accessToken);
        } else {
          reject('Refresh token request failed');
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  static async setFCMToken(token) {
    try {
      await AsyncStorage.setItem(FCM_TOKEN, JSON.stringify(token));
    } catch (error) {
      console.log('Error saving data' + error);
    }
  }

  static async getFCMToken() {
    try {
      const value = await AsyncStorage.getItem(FCM_TOKEN);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }

  static async clearTokens() {
    try {
      await AsyncStorage.removeItem(TOKEN);
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  }
}

export default TokenManager;
