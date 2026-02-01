import React, { useState } from "react";
import { useKeyboard } from "./documentation/hooks/useKeyboard";
import Header from "./documentation/components/Header";
import { Sidebar } from "./documentation/components/Sidebar";
import { Content } from "./documentation/components/Content";
import { SearchModal } from "./documentation/components/SearchModal";
import { ThemeProvider } from "./documentation/context/ThemeContext";
import Button from "./documentation/components/ui/Button";
// Inner Layout component that has access to ThemeContext if needed
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("#getting-started");

  // Use custom hook for keyboard shortcuts
  useKeyboard({
    onSearch: () => setIsSearchOpen(true),
    onEscape: () => {
      setIsSearchOpen(false);
      setIsSidebarOpen(false);
    },
  });

  const handleNavigate = (href) => {
    setActiveRoute(href);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-900 transition-colors duration-300  bg-top bg-no-repeat dark:bg-none">
      {/* Grid Background Pattern for that "dev" look */}
      {/* <div
         className="absolute inset-0 z-0 pointer-events-none"
         style={{
           backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
           backgroundSize: "32px 32px",
           opacity: 0.15,
         }}
       ></div> */}

      {/* Header */}

      <Header
        onMenuClick={() => setIsSidebarOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12 lg:items-start">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeRoute={activeRoute}
          onNavigate={handleNavigate}
        />

        <main className="min-w-0 max-w-2xl flex-auto px-4 py-12 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <Content activeRoute={activeRoute} onNavigate={handleNavigate} />
        </main>
      </div>

      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </div>
  );
};

// Root App component wrapping everything in Providers
export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
