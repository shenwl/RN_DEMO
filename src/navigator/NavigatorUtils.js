/**
全局导航工具类
*/

export default class NavigatorUtils {
  /**
   * 跳转到指定链接
   * @param params: 跳转的参数，必须包含navigation对象
   * @param page: 跳转的页名
   */
  static goPage(params, page) {
    // 在HomePage设置NavigatorUtils.navigation
    const navigation = NavigatorUtils.navigation;
    if(!navigation) {
      console.warn('NavigatorUtils.navigation cant be null');
      return;
    }
    navigation.navigate(page, {...params});
  }
  /**
   * 返回上一页
   * @param navigation: navigation对象
   */
  static goBack(navigation) {
    navigation.goBack();
  }
  /**
   * 跳转到主页
   * @param params: 跳转的参数，必须包含navigation对象
   */
  static resetToHomePage(params) {
    const {navigation} = params;
    if(!navigation) {
      console.warn('navigation不能为空');
      return;
    }
    navigation.navigate('Main');
  }
}
