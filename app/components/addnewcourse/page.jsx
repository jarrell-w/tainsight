import { addCourse } from "@/lib/addcourseaction"
import { authOptions } from "@/lib/auth"
import { getProfessorID } from "@/lib/data"
import { getServerSession } from "next-auth"

const AddNewCourse = async () => {
    const session = await getServerSession(authOptions)
    const professorID = await getProfessorID(session.user.email)
  return (
    <div className="text-center max-w-64 mx-10">
        <h1 className="my-5 text-xl font-bold text-gray-800">
          Add a new Course
        </h1>
        <form action={addCourse} className="flex flex-col gap-5 ">
          <input
            type="text"
            placeholder="Course Name"
            name="name"
            required
            className="border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md p-1 w-full max-w-md outline-none transition duration-200 ease-in-out"
          ></input>
          <input
            type="text"
            placeholder="Course Code"
            name="code"
            required
            className="border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md p-1 w-full max-w-md outline-none transition duration-200 ease-in-out"
          ></input>
          <input
            type="text"
            placeholder="professorID"
            name="professor"
            value={`${professorID}`}
            readOnly
            required
            className="hidden border-none background-bg-white"
          ></input>
          <button
            type="submit"
            className="py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 ease-in-out max-w-36"
          >
            Add Course
          </button>
        </form>
      </div>
  )
}

export default AddNewCourse