import Link from "next/link";

const ProfessorDashboardNav = () => {
  return (
    <div className="min-h-screen w-44 px-5 py-5 flex flex-col gap-5 items-center">
      <Link href="/" className="text-lg font-sans border-b py-2 cursor-pointer">Assignments</Link>
      <Link href="/" className="text-lg font-sans border-b py-2 cursor-pointer ">Courses</Link>
      <Link href="/" className="text-lg font-sans border-b py-2 cursor-pointer">TAs</Link>
    </div>
  );
};

export default ProfessorDashboardNav;
