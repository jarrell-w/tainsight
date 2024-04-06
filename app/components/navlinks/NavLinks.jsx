import Link from "next/link";
import { getUserRole } from "@/lib/data";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const getRoles = async (email) => {
    console.log("get roles email ",email)
    try {
        const res = await fetch(`http://localhost:3000/api/roles?email=${email}`)
        const data = await res.json()
        console.log("API data response: ", data)
        return data
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}

const NavLinks = ({usersRole, user}) => {
     
    const apiRole = getRoles(user.email)

    
    console.log("NavLinks Role: ", usersRole)
    const role = usersRole
  return (
    <div className="flex justify-between align-content-center font-bold text-lg gap-4">
      <Link
        href={`${
          role === "Professor" ? "/dashboard/professor" : "/dashboard/ta"
        }`}
      >
        Dashboard
      </Link>
      <Link href="/">Home</Link>
      <Link href="/allcourses">Courses</Link>
    </div>
  );
};

export default NavLinks;
