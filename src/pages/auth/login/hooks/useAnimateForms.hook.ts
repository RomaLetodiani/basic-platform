import { AuthStore } from "@/stores";
import { useEffect, useState } from "react";

const useAnimateFormsHook = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [showOrgsCard, setShowOrgsCard] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginCard(false);
      const timeout = setTimeout(() => setShowOrgsCard(true), 300); // Delay to allow OrgsCard to slide out first

      return () => clearTimeout(timeout);
    } else {
      setShowLoginCard(true);
      const timeout = setTimeout(() => setShowOrgsCard(false), 300); // Delay to allow LoginCard to slide out first

      return () => clearTimeout(timeout);
    }
  }, [isLoggedIn]);
  return { showLoginCard, showOrgsCard };
};

export default useAnimateFormsHook;
