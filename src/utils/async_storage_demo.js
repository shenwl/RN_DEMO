import {AsyncStorage} from 'react-native';

/**
 * 存储数据
 * @returns {Promise<void>}
 */
const doSave = async () => {
  // 用法1
  AsyncStorage.setItem(KEY, this.value, error => {
    error && console.error(error.toString());
  });

  // 用法2
  AsyncStorage.setItem(KEY, this.value)
    .catch(error => {
      error && console.error(error.toString());
    });

  // 用法3
  try {
    await AsyncStorage.setItem(KEY, this.value);
  } catch (error) {
    error && console.error(error.toString());
  }
};

/**
 * 读取数据
 * @returns {Promise<void>}
 */
const getData = async () => {
  // 用法1
  AsyncStorage.getItem(KEY, (error, value) => {
    console.log(value);
    error && console.error(error.toString());
  });

  // 用法2
  AsyncStorage.getItem(KEY)
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      error && console.error(error.toString());
    });

  // 用法3
  try {
    const value = await AsyncStorage.getItem(KEY);
    console.log(value);
  } catch (error) {
    error && console.error(error.toString());
  }
};
