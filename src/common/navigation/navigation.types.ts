import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// TODO: Make it accurate.
export type RootStackParamList = {
  DashboardNavigator: undefined;
  Dashboard: undefined;
  ItemDetails: {id: string; title: string};
  Settings: undefined;
  Tools: undefined;
};

export type TNavigationProps = NativeStackScreenProps<RootStackParamList>;

export type TNavigationDashboard = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

export type TNavigationItemDetails = NativeStackScreenProps<
  RootStackParamList,
  'ItemDetails'
>;
