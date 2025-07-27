import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Sidebar */}
      {showSidebar && (
        <aside className="hidden md:flex w-64 bg-base-100 shadow-lg border-r border-base-300">
          <Sidebar />
        </aside>
      )}

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-20 bg-base-100 shadow-md">
          <Navbar />
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
