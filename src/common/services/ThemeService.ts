// This file is inteneded to contain all theming (custom fonts, coloring, dark mode, light mode etc.) related stuff in this file.

import {StyleSheet} from 'react-native';
import {Appearance} from 'react-native';

import {
  BLUE_COLOR_THEME,
  DARK_BLUE_COLOR_THEME,
  DARK_ORANGE_COLOR_THEME,
  ORANGE_COLOR_THEME,
} from '$common/constants/colors.constants';
import {COMMON} from '$common/constants/strings.constants';

let selectedLightColors;
let selectedDarkColors;
let customTextColor1;
let customTextColor2;
let customBackgroundColor;

const getStyles = (
  textColor1?: string,
  textColor2?: string,
  backgroundColor?: string,
) => {
  const customTextColor1 = textColor1 ? textColor1 : 'black';
  const customTextColor2 = textColor2 ? textColor2 : 'black';
  const customBackgroundColor = backgroundColor ? backgroundColor : 'white';

  const styles = StyleSheet.create({
    customText1: {
      color: customTextColor1,
    },
    customText2: {
      color: customTextColor2,
    },
    normalFont: {
      fontFamily: 'IBMPlexSerif',
    },
    boldFont: {
      fontFamily: 'IBMPlexSerif-Bold',
      fontWeight: '600',
    },
    boldItalicFont: {
      fontFamily: 'IBMPlexSerif-BoldItalic',
      fontWeight: '600',
    },
    centerAlign: {
      textAlign: 'center',
    },
    background1: {
      backgroundColor: customBackgroundColor,
    },
  });

  return styles;
};

// Keep all font family info in this function only
const getTheme = (selectedColorThemeIndex: number) => {
  switch (selectedColorThemeIndex) {
    case 1:
      selectedLightColors = ORANGE_COLOR_THEME;
      selectedDarkColors = DARK_ORANGE_COLOR_THEME;
      break;

    case 0:
    default:
      selectedLightColors = BLUE_COLOR_THEME;
      selectedDarkColors = DARK_BLUE_COLOR_THEME;
  }

  customTextColor1 = isDarkModeON()
    ? selectedDarkColors.text1
    : selectedLightColors.text1;

  customTextColor2 = isDarkModeON()
    ? selectedDarkColors.text2
    : selectedLightColors.text2;

  customBackgroundColor = isDarkModeON()
    ? selectedDarkColors.background1
    : selectedLightColors.background1;

  const styles = getStyles(
    customTextColor1,
    customTextColor2,
    customBackgroundColor,
  );

  return {darkColors: {}, lightColors: {}};
};

const getColors = (selectedColorThemeIndex: number) => {
  const theme = getTheme(selectedColorThemeIndex);

  if (isDarkModeON()) {
    return theme.darkColors;
  }
  return theme.lightColors;
};

const isDarkModeON = () =>
  Appearance.getColorScheme() === COMMON.colorScheme.dark;

export {getTheme, getColors, isDarkModeON};
