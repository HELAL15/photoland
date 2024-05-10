import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: 'bearer ' + 'f6ab9a38a08769d78d8f79d21a23aa0171b8baa0468f94baae63dfbfee62e380fb3158e6ca2bbd5a1ac040045409b781ca1aaafb7a2ecea2460ac7ae290e7603fc5fa225384591d31fdb7b743ca3c1b4dcac25b5507777abcd2bef224e036afc1cfb366a35cefac0dac1a677c7784f5a32ebeaa2debf44876a84b9c6a8c14e8c',
  },
});
