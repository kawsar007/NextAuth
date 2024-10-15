import Image from "next/image";
import { redirect } from "next/navigation";
import Logout from "../../components/Logout";
import { auth } from "../auth";

const HomePage = async () => {
  const session = await auth();

  if(!session?.user) redirect("/");
  
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-3">{session?.user?.name}</h1>

      <Image 
        src={session?.user?.image}
        alt={session?.user?.name}
        width={100}
        height={100}
        className="rounded-full"
      />
      <Logout />
    </div>
  )
}

export default HomePage