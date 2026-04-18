import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { axiosInstance } from "@/lib/axios";
import type { ReactNode } from "react";

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<"loading" | "authed" | "unauthed">("loading");

  useEffect(() => {
    axiosInstance.get("/auth/me")
      .then(() => setStatus("authed"))
      .catch(() => setStatus("unauthed"));
  }, []);

  if (status === "loading") return null;
  if (status === "unauthed") return <Navigate to="/signin" replace />;
  return <>{children}</>;
};

export default AuthGuard;
