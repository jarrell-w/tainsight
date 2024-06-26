import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const TaDashboard = async (context) => {
  const session = await getServerSession(authOptions);
  console.log("TA Dashboard", session);
  return <div>TaDashboard</div>;
};

export default TaDashboard;
