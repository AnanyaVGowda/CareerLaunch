"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase/config";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";

const TopBar = () => {
  const router = useRouter();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="flex w-full justify-between items-center py-3 px-5 shadow-md">
      <Link href="/" className="flex gap-2 items-center">
        <Image src="/icons/logo.svg" alt="logo" width={58} height={58} />
        <p className="text-4xl font-nunito font-extrabold text-slate-800">
          CareerLaunch
        </p>
      </Link>

      {user ? (
        <div className="flex gap-3 items-center">
          <Button
            variant="outline"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button variant="ghost" size="icon" onClick={handleLogout} title="Log Out">
            <LogOut className="h-5 w-5 text-gray-600" />
          </Button>
        </div>
      ) : (
        <Button
          className="btn btn-primary"
          onClick={() => {
            router.push("/sign-up");
          }}
        >
          Get Started
        </Button>
      )}
    </div>
  );
};

export default TopBar;
