import axios from 'axios';
import { Header } from 'react-native/Libraries/NewAppScreen';
import GlobalUrl from './GlobalUrl';
import TokenManager from './TokenManager';
import { setIsAuthenticated } from '../redux/reducers/UserDataSlice';
import { store } from '../redux/store';

export const BASE_URL = GlobalUrl.getInstance().getUrl();

// axios.interceptors.request.use(async config => {
//   const accessToken = await TokenManager.getTokens();
//   if (accessToken) {
//     config.headers.Authorization = 'Bearer ' + accessToken;
//   }
//   return config;
// });

// axios.interceptors.response.use(Promise.resolve, async error => {
//   if (error?.response?.status === 401) {
//     try {
//       const newAccessToken = await TokenManager.getNewAccessToken();
//       error.config.headers.Authorization = 'Bearer ' + newAccessToken;
//       return axios.request(error.config);
//     } catch (err) {
//       console.warn('eerrr1', error);
//       if (err?.response?.status === 401) {
//         console.warn('eerrr', error);
//         store.dispatch(setIsAuthenticated(false));
//       }
//     }
//   } else {
//     console.warn('errr', error);
//     return Promise.reject(error);
//   }


  // else if (error?.response?.status === 403) {
  //   try {
  //     const newAccessToken = await TokenManager.getTokens();
  //     console.warn('nnnnnn', newAccessToken);
  //     error.config.headers.Authorization = 'Bearer ' + newAccessToken;
  //     return axios.request(error.config);
  //   } catch (err) {
  //     if (err?.response?.status === 401) {
  //       store.dispatch(setIsAuthenticated(false));
  //     }
  //   }
  // }

// });

class ApiManager {
  static endPoints = {
    SIGNUP: 'user-registration/',
  };

  // async handleLogin(params, email, password, full_name,confirm_password,phone) {
  //   const url = GlobalUrl.getInstance().getUrl() + ApiManager.endPoints.SIGNUP;
  //   // console.warn('urllll', url);
  //   return axios.post(url, params, {
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       email: email,
  //       password: password,
  //       full_name: full_name,
  //       confirm_password: confirm_password,
  //       phone: phone
  //     }),
  //   });
  // }

  async handleLogin({email, password, full_name, confirm_password,phone} ) {
    let data = {
      email: email,
      password: password,
      full_name: full_name,
      confirm_password: confirm_password,
      phone: phone
    };
    console.warn('list', data);
    const url =
      GlobalUrl.getInstance().getUrl() + ApiManager.endPoints.SIGNUP;
    return axios.post(url, data);
  }

}

const ApiClient = new ApiManager();
export default ApiClient;
