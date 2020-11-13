import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

export const theme = createMuiTheme({
  typography: {
    h5: {
      color: "#FFFFFF",
    },
  },

  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[900],
    },
    text: {
      main: "#FFFFFF",
    },
  },
  spacing: 4,
});

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiCard-root": {
      paddingTop: "20px",
      height: "450px",
      borderRadius: "30px",
    },
    "& .MuiPaper-root": {
      backgroundColor: "#9c27b0",
    },
    flexGrow: 1,
    padding: "20px",
    height: "100%",
    color: "#FFFFFF",
  },
  movie: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
