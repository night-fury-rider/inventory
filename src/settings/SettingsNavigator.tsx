import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SETTINGS} from '$constants/strings.constants';
import SettingsScreen from '$settings/SettingsScreen';

const NavigationStack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <NavigationStack.Navigator>
      <NavigationStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: SETTINGS.title,
          statusBarStyle: 'dark',
          headerTitle: () => (
            <ScreenTitle title={SETTINGS.title} variant="h3" />
          ),
        }}
      />
    </NavigationStack.Navigator>
  );
};

export default SettingsNavigator;
