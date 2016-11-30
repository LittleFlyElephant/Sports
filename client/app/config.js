/**
 * Created by raychen on 2016/10/21.
 */

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {white, cyan500,cyan700,grey400,grey600,grey300,pinkA100,fullWhite,pinkA400,pinkA200,fullBlack,grey100,grey500,darkBlack,lightBlueA100,lightBlueA200} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export const blueLight = '#62b1f0';
export const blue = '#64b1d1';
export const blueDark = '#1893c0';
export const blueDark2 = '#136b8c';
export const blueLight2 = '#53c1e8';

export const whiteGrey = '#f5f0f0';
export const white1 = '#ffffff';

export const red = '#e25454';
export const redLight = '#f84770';

export const green = '#20e39f';
export const greenDark = '#3ecf92';
export const greenLight = '#3df4cf';
export const greenDark2 = '#56b6b7';
export const greenDark3 = '#2e7576';

export const rootUrl = 'http://localhost/Sports/public';
export const SUCCESS = 1;

export const myTheme = getMuiTheme({
    palette: {
        primary1Color: greenLight,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: white,
        canvasColor: darkBlack,
        disabledColor: grey400

        //primary1Color: cyan500,
        //primary2Color: cyan700,
        //primary3Color: grey400,
        //accent1Color: pinkA200,
        //accent2Color: grey100,
        //accent3Color: grey500,
        //textColor: darkBlack,
        //alternateTextColor: white,
        //canvasColor: white,
        //borderColor: grey300,
        //disabledColor: fade(darkBlack, 0.3),
        //pickerHeaderColor: cyan500,
        //clockCircleColor: fade(darkBlack, 0.07),
        //shadowColor: fullBlack

        //primary1Color: cyan700,
        //primary2Color: cyan700,
        //primary3Color: grey600,
        //accent1Color: pinkA200,
        //accent2Color: pinkA400,
        //accent3Color: pinkA100,
        //textColor: fullWhite,
        //secondaryTextColor: fade(fullWhite, 0.7),
        //alternateTextColor: '#303030',
        //canvasColor: '#303030',
        //borderColor: fade(fullWhite, 0.3),
        //disabledColor: fade(fullWhite, 0.3),
        //pickerHeaderColor: fade(fullWhite, 0.12),
        //clockCircleColor: fade(fullWhite, 0.12)
    },
    fontFamily: '\'Segoe UI\', \'HelveticaNeue-Light\', sans-serif',
    svgIcon: {
        color: white1
    }
});