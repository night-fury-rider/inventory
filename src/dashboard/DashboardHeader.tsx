import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {COLORS} from '$common/constants/colors.constants';
import {useAppSelector} from '$common/redux/redux.hooks';

const DashboardHeader = () => {
  const lastModifiedTime = useAppSelector(
    state => state.dashboard.lastModifiedTime,
  );

  // Reset the search string whenever there is update in main item list
  useEffect(() => {}, [lastModifiedTime]);

  return <View style={[styles.view]}></View>;
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchBarContainer: {
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.transparent,
    flex: 8,
  },
  searchBarInputContainer: {
    flexBasis: 40,
  },
  searchBarInput: {},
  searchBar: {},
  avatar: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default DashboardHeader;
