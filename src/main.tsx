import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CatBrandProvider from "./services/catbrand-provider.tsx";
import AuthProvider from "./services/auth-provider.tsx";
import SiteInfoProvider from "./services/siteinfo-provider.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      gcTime: 2 * 60000,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SiteInfoProvider>
        <CatBrandProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CatBrandProvider>
      </SiteInfoProvider>
    </AuthProvider>
  </QueryClientProvider>
);
