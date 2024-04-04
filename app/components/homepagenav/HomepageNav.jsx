"use client";
import NavLinks from "../navlinks/NavLinks";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import GetUsername from "../getusername/page";

const HomepageNav = () => {
  const { data: session } = useSession();

  let isLoggedIn;
  if (session) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return (
    <nav className="flex justify-between py-3 px-3">
      <div className="cursor-pointer">
        <Link href="/" className="font-bold text-lg">
          Ta Insight
        </Link>
      </div>
      <div className="">
        <NavLinks></NavLinks>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex gap-4">
            <div className="font-bold text-lg flex gap-2">
              <span>Hi,</span>
              <GetUsername></GetUsername>
            </div>
            <div
              className="font-bold text-lg cursor-pointer"
              onClick={async () => {
                await signOut();
                router.push("/login");
              }}
            >
              Logout
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="cursor-pointer">
              <Link href="/login" className="font-bold text-lg">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomepageNav;
