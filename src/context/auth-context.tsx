import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { checkLoginStatus, logoutUser } from "../server/server";

interface IUser {
  _id: string;
  name: string;
  email: string;
}

interface IAuthContext {
  user: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const userData = await checkLoginStatus();

        if (userData && userData.status === "success") {
          setUser(userData.data.user);
        }
        setLoading(false);
      } catch (error) {
        console.error("Authentication error:", error);
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const login = (userData: IUser) => {
    setUser(userData);
  };

  const logout = async () => {
    try {
      const res = await logoutUser();

      if (res.status === "success") {
        setUser(null);
        window.location.href = "/";
      }
      setLoading(false);
    } catch (error) {
      console.error("Authentication error:", error);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
