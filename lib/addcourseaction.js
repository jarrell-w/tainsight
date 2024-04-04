import { Course } from "./models";
import { connectToDb } from "./utils";

export const addCourse = async (formData) => {
    "use server"
  const { name, code, professor, qualifyingTest, approvedTAs } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const newCourse = new Course({
      name,
      code,
      professor,
      qualifyingTest,
      approvedTAs,
    });
    await newCourse.save()
    console.log("course saved.")
  } catch (e) {
    console.log(e);
  }
  
};
