/*
全局导航工具类
 */
export default class NavigatorUtils {
  static goBack(navigation) {
    navigation.goBack();
  }
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('Main');
  }
}
