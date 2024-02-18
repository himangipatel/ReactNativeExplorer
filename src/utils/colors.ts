import { Appearance } from 'react-native';

const lightColors = {
	primary:'white',
	secondary:'white',
    lightTextColor:'black',
	darkTextColor:'white',
	buttonBg:'gray',
	barStyle:'dark-content'
};

const darkColors = {
	primary:'black',
	secondary:'white',
    lightTextColor:'white',
	darkTextColor:'white',
	buttonBg:'gray',
	barStyle:'light-content'


};


const getThemeColors = darkColors
	// Appearance.getColorScheme() === 'dark' ? darkColors : lightColors;

export const colors = {
	primary: getThemeColors.primary,
	secondary: getThemeColors.secondary,
	barStyle:getThemeColors.barStyle,
    lightTextColor:getThemeColors.lightTextColor,
	darkTextColor:getThemeColors.darkTextColor,
	buttonBg:getThemeColors.buttonBg,
	gray:'#ccc'
	
};
