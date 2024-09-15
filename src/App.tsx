import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getPlatformTheme } from "./lib";
import { ThemeStore } from "./stores";

import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { msalConfig } from "@/authConfig.ts";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import env from "@env";

// Create a client
const queryClient = new QueryClient();
const msalInstance = new PublicClientApplication(msalConfig);

const App = () => {
  const { theme } = ThemeStore();
  const platformTheme = createTheme(getPlatformTheme(theme));

  return (
    <MsalProvider instance={msalInstance}>
      <GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={platformTheme}>
            <CssBaseline />
            <ReactQueryDevtools initialIsOpen={false} position="bottom" />
            <RouterProvider router={Router} />
          </ThemeProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </MsalProvider>
  );
};

export default App;
