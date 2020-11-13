import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { theme, useStyles } from "../themes/theme";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiCard-root": {
//       paddingTop: "20px",
//       height: "450px",
//       borderRadius: "30px",
//     },
//     "& .MuiPaper-root": {
//       backgroundColor: "#721099",
//     },
//     flexGrow: 1,
//     padding: "20px",
//     height: "100%",
//   },
//   movie: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header text="SEARCHY" />
        <Search search={search} />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {loading && !errorMessage ? (
              <span>loading... </span>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : (
              movies.map((movie, index) => (
                <Grid item xs={12} sm={6} md={3} lg={2}>
                  <Movie
                    key={`${index}-${movie.Title}`}
                    movie={movie}
                    className={classes.movie}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
