import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

const ColorButton = withStyles(theme => ({
    root: {
        height:"8vh",
        color:"#fff",
        backgroundColor: "#e6005c",
        '&:hover': {
            backgroundColor: "#e6005c"
        },
        
    },
}))(Button);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default ({ text }) => {
    const classes = useStyles();
    return (
        <div>
            <ColorButton
                variant="contained"
                color="primary"
                className={classes.margin}
                startIcon={<SearchIcon/>}

            >
                {text}
        </ColorButton>
        </div>
    )
}