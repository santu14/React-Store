import { makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import theme from './Theme';
const useStyles = makeStyles (() => ({
    typographyStyles :{
        flex: 1
    },
    paper: {
        backgroundColor: blueGrey[800],
        padding: theme.spacing(2),   
    }
}));

export default useStyles;