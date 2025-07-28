import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, showSidebar = false }) => {
  return (
     <div className="min-h-screen flex flex-col md:flex-row bg-base-200">
      {/* Sidebar */}
      {showSidebar && <Sidebar />}

      {/* Main Section */}
      <div className="flex-1 flex flex-col md:ml-0">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-base-100 shadow-md">
          <Navbar />
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
