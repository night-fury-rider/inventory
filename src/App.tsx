import React from 'react';
import {BottomNavigation, useTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ErrorBoundary from '$common/components/ErrorBoundary';
import StorageService from '$common/services/StorageService';
import DashboardScreen from '$dashboard/DashboardScreen';
import SettingsScreen from '$settings/SettingsScreen';
import {BLUE_COLOR_THEME} from '$common/constants/colors.constants';

StorageService.init();

function App() {
  const theme = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'dashboard',
      title: 'Dashboard',
      focusedIcon: 'currency-inr',
      unfocusedIcon: 'currency-inr',
    },

    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'wrench',
      unfocusedIcon: 'wrench-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardScreen,
    settings: SettingsScreen,
  });

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{
            backgroundColor: theme.dark
              ? theme.colors.inverseOnSurface
              : BLUE_COLOR_THEME.background4,
          }}
          activeIndicatorStyle={{
            backgroundColor: theme.dark
              ? theme.colors.surface
              : BLUE_COLOR_THEME.background3,
          }}
        />
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
export default App;
