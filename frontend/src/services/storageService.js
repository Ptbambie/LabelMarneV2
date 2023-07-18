const storageService = {
  setItem(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  },

  getItem(key) {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  },
};
export default storageService;