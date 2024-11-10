import { useRouter } from "next/router";

import { useEffect } from "react";
import { getCookie } from "@/utils/cookie";

function AuthProvider({ children }) {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie("token");
    if (!token) router.push("/signup");
  }, []);

  return children;
}

export default AuthProvider;
