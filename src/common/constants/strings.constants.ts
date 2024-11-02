// This file is intended to serve as the single source of truth for all strings/messages which are visible to user (including error messages)
// Prefer keeping strings inside appropriate module objects

export const COMMON = {
  errorsMsg: {
    itemNotFound: 'Unable to find the item',
    emailNotAvailable: 'Email ID is not available',
    incorrectEmptySpacesFile: 'Unnable to load Empty Spaces File',
  },
  permissions: {
    status: {
      granted: 'granted',
      denied: 'denied',
      never_ask_again: 'never_ask_again',
    },
  },
  colorScheme: {
    light: 'light',
    dark: 'dark',
  },
};

export const DASHBOARD = {
  emptyMsg: 'Dashboard is coming Soon',
  comingSoon: 'Dashboard is coming Soon',
  title: 'Items',
  searchBox: {
    placeholder: 'Search Item',
    noResults: 'No Results',
  },
  itemDetails: {
    about: 'about',
  },
  editItem: {
    addPicture: 'Add picture',
  },
};

export const SETTINGS = {
  title: 'Settings',
  comingSoon: 'Settings are coming soon',
  totalItems: 'Total Items',
  appVersion: 'App Version',
  chooseColorTheme: 'Choose Color Theme',
  developerOptions: 'Enable Developer Options',
};

export const TOOLS = {
  title: 'Tools',
  comingSoon: 'Tools are coming soon',
  deleteData: {
    title: 'Delete Data',
    successMsg: 'Data deleted Successfully',
    prompt: {
      cancel: 'Cancel',
      delete: 'Delete',
      message:
        'We are not keeping your data on server. Please backup your data using Save Items option. \n\nData from app will be deleted.',
      title: 'Delete Data from mobile ?',
    },
  },
  importData: {
    title: 'Import \n Items',
  },
};
