import Link from "next/link"
const NavLinks = () => {
  return (
    <div className="flex justify-between align-content-center font-bold text-lg gap-4">
        <Link href='/'>Dashboard</Link>
        <Link href='/'>Home</Link>
        <Link href='/allcourses'>Courses</Link>
    </div>
  )
}

export default NavLinks