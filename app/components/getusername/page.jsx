"use client"
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const GetUsername = () => {
    const router = useRouter();
    const {data: session, status} = useSession()
    console.log(status)
    
  return (
    <div className="font-bold text-lg">{session.user.name}</div>
  )
}

export default GetUsername