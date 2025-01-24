"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();

        if (!data.authenticated) {
          router.push('/api/auth/login');
        } else {
          router.push('/dashboard/profile');
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default Layout;
