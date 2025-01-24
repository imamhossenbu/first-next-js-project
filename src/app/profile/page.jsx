import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DashboardLayout() {
    const { isAuthenticated } = getKindeServerSession();
    const authenticated = await isAuthenticated();
    console.log(authenticated);

    if (!authenticated) {
        redirect('/api/auth/login');
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 mt-4">Welcome to my profile</h1>
                <h3 className="text-lg text-gray-600 mt-2">I am Imam Hossen</h3>

                <div className="mt-6 space-y-4">
                    <p className="text-gray-700">
                        Passionate web developer with a focus on creating interactive and
                        user-friendly applications.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
