// hooks/useIdleLogout.js
import { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const useIdleLogout = (timeout = 3600000) => { // 1 hour = 3600000 ms
  useEffect(() => {
    let idleTimer;

    const resetTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        handleLogout();
      }, timeout);
    };

    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          console.log("User logged out due to inactivity.");
        })
        .catch((error) => console.error("Error logging out:", error));
    };

    // Listen to user activity
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("scroll", resetTimer);

    // Start the initial timer
    resetTimer();

    // Clean up on component unmount
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, [timeout]);

  return null;
};

export default useIdleLogout;
