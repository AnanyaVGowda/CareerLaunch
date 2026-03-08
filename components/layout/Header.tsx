"use client";

import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase/config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="backdrop-blur-md px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            {/* <img src="/icons/logo.svg" className="mr-3 h-7 sm:h-9" alt="logo" /> */}
            <span className="self-center text-xl font-bold whitespace-nowrap">
              CareerLaunch
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {!loading && !user ? (
              <Link
                href="/sign-in"
                className="text-gray-800 hover:bg-primary-700/10 duration-300 focus:ring-4 focus:ring-primary-700/30 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
            ) : (
              !loading && user && (
                <>
                  <div className="mr-4 h-full items-center align-middle flex max-md:hidden justify-center">
                    <Button variant="ghost" onClick={handleLogout} className="text-sm font-medium">Log out</Button>
                  </div>
                  <div className="mr-2 h-full items-center align-middle hidden max-md:flex justify-center">
                     <Button variant="ghost" size="sm" onClick={handleLogout} className="text-sm font-medium">Log out</Button>
                  </div>
                </>
              )
            )}
            <Link
              href={`${!user ? "/sign-up" : "/dashboard"}`}
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              {!user ? "Get started" : "Dashboard"}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
