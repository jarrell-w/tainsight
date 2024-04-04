import AddNewCourse from "@/app/components/addnewcourse/page";
import GetUsername from "@/app/components/getusername/page";
import ProfessorDashboardNav from "@/app/components/professordashboardnav/ProfessorDashboardNav";
import { useSession } from "next-auth/react";
import Link from "next/link";

const ProfessorDashboard = () => {
  return (
    <div className="h-screen">
      <nav className="bg- w-full h-12 flex justify-around items-center">
        <span className=" font-semibold">Professor Dashboard</span>
        <h1 className="font-bold text-xl">TA Insight</h1>
        <span className="font-semibold">Get Help</span>
      </nav>
      <div className="w-full h-20 bg-orange-100 opacity-75"></div>

      <div className="flex">
        <div className="border-r h-screen">
        <div className="flex flex-col">
          <div className="max-h-96">
            <h3 className="text-center py-5 font-serif">Spring 2024</h3>
            <ProfessorDashboardNav></ProfessorDashboardNav>
          </div>
          <div className="flex flex-col text-center w-44 ">
            <Link href="/" className="text-lg font-sans py-2 cursor-pointer">
              My Account
            </Link>
            <Link
              href="/"
              className="cursor-pointer "
            >
              <span className="border-b py-2 font-sans text-lg">Profile</span>
            </Link>
          </div>
        </div>
      </div>
        <AddNewCourse></AddNewCourse>
      </div>
    </div>
  );
};

export default ProfessorDashboard;
