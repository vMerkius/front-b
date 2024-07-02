import { HelmetProvider } from "react-helmet-async";
import ContextProvider from "./context/app-context";
import AppNavigation from "./navigation/app-navigation";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <AuthProvider>
      <ContextProvider>
        <HelmetProvider>
          <AppNavigation />
        </HelmetProvider>
      </ContextProvider>
    </AuthProvider>
  );
}

export default App;
