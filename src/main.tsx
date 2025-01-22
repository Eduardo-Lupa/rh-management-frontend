import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App.tsx";
import './index.css';

// oidc configuration
const oidcConfig = {
  // authority: `${import.meta.env.VITE_SSO_ROOT_URL}/auth/realms/visagio`,
  // client_id: "visagio-apps-portal-ui",
  // redirect_uri: window.location.origin,
  // response_type: "code",
  // scope: "openid profile roles web-origins",
  // post_logout_redirect_uri: window.location.origin,
  // automaticSilentRenew: true,
  // metadata: {
  //   authorization_endpoint: `${import.meta.env.VITE_SSO_ROOT_URL}/auth/realms/visagio/protocol/openid-connect/auth`,
  //   token_endpoint: `${import.meta.env.VITE_SSO_ROOT_URL}/auth/realms/visagio/protocol/openid-connect/token`,
  // }
  // ...
};

//utilização do react query
export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
