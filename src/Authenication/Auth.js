import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.setItem("token")) {
        setCurrentUser({ id: "1", name: "ashish" });
      }
    }, 2000);
  }, []);

  if (currentUser === undefined) {
    return null;
  }
  if (!currentUser) {
    Navigate("/");
  }

  return children;
};

export default Auth;
