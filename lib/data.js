import { User } from "./models"
import { connectToDb } from "./utils"

export const getUserRole = async (email) => {
    connectToDb()
    try{
        const user = await User.findOne({email:email})
        if(!user) {
            return false
        }
        console.log("Get user role function without API", user)
        return user.role
    } catch(e) {
        console.log("Error: ", e)
    }
    return {error: "Couldn't get user role"}
}
export const getProfessorID = async (email) => {
    connectToDb()
    try{
        const user = await User.findOne({email:email})
        if(!user) {
            return false
        }
        return user._id
    } catch(e) {
        console.log("Error: ", e)
    }
    return {error: "Couldn't get user role"}
}

export const getCourse = async () => {

}
export const getCourses = async () => {

}


export const getTA = async () => {

}
export const getTAs = async () => {

}

export const getTest = async () => {

}

export const getUserScore = async () => {

}

