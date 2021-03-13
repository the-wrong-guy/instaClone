import React, { useEffect } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/header";
import LoginPage from "./components/Login page/login";
import MainPage from "./components/Main Page/main";
import IndividualPostPage from "./components/Individual Post/individual_post_page";

function App() {
  const GlobalTheme = useSelector((state) => state.CONFIG.GlobalTheme);

  const darkTheme = createMuiTheme({
    overrides: {
      MuiCard: {
        root: {
          backgroundColor: "rgb(43 43 43)",
        },
      },
    },
    palette: {
      type: "dark",
      primary: {
        main: "rgb(43 43 43)",
      },
      secondary: {
        main: "rgb(138 70 255)",
        text: "#fff",
      },
      text: {
        primary: "#bbbbbb",
        secondary: "#7c7c7c",
      },
    },
  });

  const lightTheme = createMuiTheme({
    overrides: {
      MuiCard: {
        root: {
          backgroundColor: "rgb(228, 228, 228)",
        },
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#FAFAFA",
      },
      secondary: {
        main: "#00ac7c",
      },
      text: {
        primary: "#7c7c7c",
        secondary: "#bbbbbb",
      },
    },
  });

  const remixTheme = createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: "#cdc3ff",
        },
      },
      MuiCard: {
        root: {
          backgroundColor: "#a974ff",
        },
      },
    },

    palette: {
      background: {
        default: "#873dff",
      },
      primary: {
        main: "#873dff",
      },
      secondary: {
        main: "#ffb800",
      },
      text: {
        primary: "#3f3f3f",
        secondary: "rgb(143 143 143)",
      },
    },
  });
  const themeFunc = () => {
    if (GlobalTheme === "dark") {
      return darkTheme;
    } else if (GlobalTheme === "light") {
      return lightTheme;
    } else if (GlobalTheme === "remix") {
      return remixTheme;
    }
  };

  return (
    <ThemeProvider theme={themeFunc()}>
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route path='/home'>
          <MainPage />
        </Route>
        <Route path='/:id' children={<IndividualPostPage />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
