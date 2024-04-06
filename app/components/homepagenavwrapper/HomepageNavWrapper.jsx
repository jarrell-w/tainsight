import { getServerSession } from 'next-auth'
import HomepageNav from '../homepagenav/HomepageNav'
import { authOptions } from '@/lib/auth'
import { getUserRole } from '@/lib/data'

const HomepageNavWrapper = async () => {
    const session = await getServerSession(authOptions)
    if(session) {
    let user = session.user
    let usersRole = await getUserRole(user.email)
    console.log("Homepage Nav Wrapper, role grab from DB in server Component: ", await getUserRole(user.email))
    console.log("Homepage nav Component", session)
    return (
        <><HomepageNav user={user} usersRole={usersRole}></HomepageNav></>
      )
    }
  return (
    <><HomepageNav></HomepageNav></>
  )
}

export default HomepageNavWrapper