import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking} from 'react-native';

export default class CommonDataManager {
  static myInstance = null;
  baseurl = 'https://semi.pythonanywhere.com/';
  // baseurl = 'http://104.248.144.49:5000/api/v1/';

  /**
   * @returns {CommonDataManager}
   */
  static getInstance() {
    if (CommonDataManager.myInstance == null) {
      CommonDataManager.myInstance = new CommonDataManager();
    }
    return this.myInstance;
  }

  getUrl() {
    return this.baseurl;
  }
  async setURL(url) {
    await AsyncStorage.setItem('api_url', url);
    this.baseurl = url;
  }
}
