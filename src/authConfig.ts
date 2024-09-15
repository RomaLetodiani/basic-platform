import env from "@env";

export const msalConfig = {
  auth: {
    clientId: env.VITE_MSAL_CLIENT_ID,
    authority: "https://login.microsoftonline.com/common",
    // redirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};


