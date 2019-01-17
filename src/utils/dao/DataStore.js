import {AsyncStorage} from 'react-native';


export default class DataStore {

  static checkTimestampValid(timestamp) {
    const expire = 4 * 60 * 60 * 1000; // 4 hours
    const now = new Date().getTime();
    return (now - timestamp < expire);
  }

  _wrapData(data) {
    return {data: data, timestamp: new Date().getTime()};
  }

  saveData(url, data, callback) {
    if (!data || !url) return;
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback);
  }

  fetchData(url) {
    return new Promise((resolve, reject) => {
      this.fetchLocalData(url).then(wrapData => {
        if (wrapData && DataStore.checkTimestampValid(wrapData.timestamp)) {
          resolve(wrapData);
        } else {
          this.fetchNetData(url).then(data => {
            resolve(this._wrapData(data));
          }).catch(error => {
            reject(error);
          });
        }
      }).catch(() => {
        this.fetchNetData(url).then(data => {
          resolve(this._wrapData(data));
        }).catch(error => {
          reject(error);
        });
      });
    });
  }

  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (error, result) => {
        if (!error) {
          try {
            resolve(JSON.parse(result));
          } catch (error) {
            reject(error);
            console.error(error);
          }
        } else {
          reject(error);
          console.error(error);
        }
      });
    });
  }

  fetchNetData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          this.saveData(url, data);
          resolve(data);
        })
        .catch(error => {
          reject(error);
          console.error(error);
        });
    });
  }
}
