import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = () => {
  const location = useLocation();

  // Only make header sticky if not on course pages
  const isSticky = !location.pathname.startsWith("/course");

  // ✅ Smooth scroll to top when route changes
  useEffect(() => {
    // Use a timeout to ensure the new page is rendered before scrolling
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // slight delay improves UX for dynamic pages

    return () => clearTimeout(scrollTimeout);
  }, [location.pathname]);

  return (
    <>
      <div
        className={
          isSticky
            ? "w-full shadow-md bg-white sticky top-0 z-50"
            : "w-full bg-white"
        }
      >
        <Header />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
