import {ParamListBase, RouteProp} from '@react-navigation/core';

const getTabBarIconName = (
  route: RouteProp<ParamListBase>,
  focused: boolean,
) => {
  switch (route?.name) {
    case 'DashboardNavigator':
      return focused ? 'people' : 'people-outline';

    case 'SettingsNavigator':
      return focused ? 'settings' : 'settings-outline';

    case 'ToolsNavigator':
      return focused ? 'hammer' : 'hammer-outline';

    default:
      return focused ? 'home' : 'home-outline';
  }
};

export {getTabBarIconName};
