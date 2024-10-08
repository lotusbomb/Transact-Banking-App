import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser()

  if(!loggedIn) redirect('/sign-in')
  return (
    //anything here is permanent throughout. Acts as the home page
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}  />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.png" width={50} height={50} alt="Transact"/>
          <div>
            <MobileNavbar user={loggedIn}/>
          </div>
        </div>
      {children}
      </div>
    </main>
  );
}
