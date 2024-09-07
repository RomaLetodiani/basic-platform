import "./App.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getPlatformTheme } from "./lib";
import { ThemeStore } from "./stores";

import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  const { theme } = ThemeStore();
  const platformTheme = createTheme(getPlatformTheme(theme));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={platformTheme}>
        <CssBaseline />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
