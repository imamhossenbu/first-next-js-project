// import NavLink from "../components/NavLink";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavLink from "./NavLink";

const Navbar = async () => {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    console.log(user);
    const authenticated = await isAuthenticated();

    return (
        <main>
            <div className="fixed top-0 left-0 h-auto w-full z-50">
                <div className="bg-gray-300 shadow-md">
                    <div className="max-w-screen-xl mx-auto px-6 py-6 flex justify-between items-center">
                        <div>
                            <h2 className="font-bold text-2xl">Logo</h2>
                        </div>
                        <div>
                            <ul className="font-semibold flex gap-6">
                                <li><NavLink href="/">Home</NavLink></li>
                                <li><NavLink href="/profile">Profile</NavLink></li>
                                {authenticated ? (
                                    <a href="/api/auth/logout" className="bg-red-500 text-white px-4 py-2 rounded">
                                        Logout
                                    </a>
                                ) : (
                                    <button onClick={() => login()} className="bg-green-500 text-white px-4 py-2 rounded">
                                        Login
                                    </button>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Navbar;
