import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import APP_CONFIG from '$common/constants/app.config.constants';
import {SETTINGS} from '$common/constants/strings.constants';
import {useAppDispatch, useAppSelector} from '$common/redux/redux.hooks';
import StorageService from '$common/services/StorageService';
import {
  setColorThemeIndex,
  setDevelopersOptions,
} from '$settings/settingsSlice';
import EmptyScreen from 'common/components/EmptyScreen';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const [isThemeSelectionVisible, setThemeSelectionVisible] = useState(false);

  const colorThemeIndex = useAppSelector(
    state => state.settings.colorThemeIndex,
  );

  const developersOptionsEnabled = useAppSelector(
    state => state.settings.developersOptionsEnabled,
  );

  const totalItems = useAppSelector(state => state.dashboard.items)?.length;

  const [selectedTheme, setSelectedTheme] = useState(
    APP_CONFIG.colorThemes[colorThemeIndex],
  );

  const handleColorThemeChange = (themeIndex: number) => {
    hideColorThemeSelection();
    setSelectedTheme(APP_CONFIG.colorThemes[themeIndex]);
    StorageService.set(`colorThemeIndex`, themeIndex);
    dispatch(setColorThemeIndex(themeIndex));
  };

  const confirmColorThemeSelection = () => {
    setThemeSelectionVisible(true);
  };

  const hideColorThemeSelection = () => {
    setThemeSelectionVisible(false);
  };

  const handleDeveloperOptionsChange = (isEnabled = false) => {
    dispatch(setDevelopersOptions(isEnabled));
  };

  return (
    <View style={[styles.container]}>
      <EmptyScreen message={SETTINGS.comingSoon} iconName="wrench-outline" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  badge: {
    borderRadius: 50,
    height: 30,
    width: 40,
  },
  badgeRound: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  themeColorBadge: {borderRadius: 50, height: 40},
  themeColorBadgeTitle: {marginHorizontal: 10, fontSize: 15},
  themeColorSelectionTitle: {
    fontFamily: 'IBMPlexSerif-Bold',
    fontWeight: '600',
  },
  themeColorSelectionContainer: {borderRadius: 8, marginTop: 5},
});

export default SettingsScreen;
