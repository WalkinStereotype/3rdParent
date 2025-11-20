import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/contexts/useAuth";

export default function ProtectedRoutes() {
  const { user, loading } = useAuth();

  if (loading) return null; // or a spinner

  return user ? <Outlet /> : <Navigate to="/" replace />;
}