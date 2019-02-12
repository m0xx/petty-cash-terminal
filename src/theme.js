import { createMuiTheme, Theme } from '@material-ui/core/styles';

const primary = ['#5555FF', '#5757FF', '#9787FF'];
const secondary = ['#FF55B8', '#FF61AB', '#FF8787'];

// navbar box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
// card box-shadow: 0 2px 20px rgba(0,0,0,.06);
const theme = {
    palette: {
        // secondary: {
        //     main: '#D81F3F'
        // }
        background: {
            default: '#FFF'
        }
    },
    typography: {
        fontFamily: "\"Montserrat\", \"Helvetica\", \"Arial\", \"sans-serif\"",
        fontSize: 18,
        headline: {
            fontWeight: 800,
            fontSize: '2rem'
        }
        // fontFamily: "\"Karla\", \"Helvetica\", \"Arial\", \"sans-serif\""
    }
}

export default createMuiTheme(theme);