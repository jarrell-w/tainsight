"use client";
import HomepageNav from "@/app/components/homepagenav/HomepageNav";
import GoogleButton from "react-google-button";
import { signIn, useSession} from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    router.push('/')
  }
  return (
    <main>
      <div className="h-screen max-w-6xl mx-auto ">
        <HomepageNav/>
        <div className="flex flex-col justify-center items-center w-96 border border-slate-500 rounded h-96 m-auto my-10 gap-5">
          <GoogleButton onClick={() => signIn("google")} className="" />
          <form className="flex flex-col gap-7 text-left">
            <input
              name="username"
              placeholder="username"
              className="border w-60 rounded py-1 px-2"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="border py-1 px-2"
            />
            <button className="text-align-left border w-20 rounded bg-blue-500 opacity-85 cursor-pointer text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
