"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next-nprogress-bar";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center">Loading...</div>; // Optionally a better loader
  }

  if (!user) {
    return null; // Prevents flashing of content before redirect
  }

  return <>{children}</>;
};

export default ProtectedRoute;
