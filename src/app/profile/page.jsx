import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DashboardLayout() {

    const { isAuthenticated } = getKindeServerSession();
    const authenticated = await isAuthenticated();
    console.log(authenticated);

    if (!authenticated) {
        redirect('/api/auth/login');
    }

    return <>
        <div className="py-40">
            <h1>Welcome to my profile</h1>
            <h3>I am Imam Hossen</h3>
        </div>
    </>


}
