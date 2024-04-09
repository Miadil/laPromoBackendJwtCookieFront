import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthRequire = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getVerif = async () => {
      await axios
        .get("http://localhost:4000/api/auth/authVerif", {
          withCredentials: true,
        })
        .catch(() => {
          navigate("/login");
          return null;
        });
    };
    getVerif();
  }, []);
  return children;
};

export default AuthRequire;
