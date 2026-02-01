/* eslint-disable react/prop-types */
import { useTheme } from "../context/ThemeContext";
import { useScroll } from "../hooks/useScroll";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export const Header = ({ onMenuClick, onSearchClick }) => {
  const { isDark, toggleTheme } = useTheme();
  const isScrolled = useScroll(0);

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] ${
        isScrolled
          ? "bg-white/75 dark:bg-slate-900/75 supports-backdrop-blur:bg-white/95"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            {/* Logo */}
            <a
              className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
              href="/"
            >
              <div className="flex items-center gap-3">
                <img src="./logo.svg" alt="Logo" className="h-8 w-8" />
                <span className="hidden md:inline text-slate-900 dark:text-white font-bold text-lg tracking-tight">
                  TechWiz
                </span>
              </div>
            </a>

            <div className="relative hidden lg:flex items-center ml-3">
              <Badge>v2.0.4</Badge>
            </div>

            {/* Mobile Search Trigger */}
            <div className="relative lg:hidden ml-auto flex items-center">
              <Button
                variant="icon"
                size="icon"
                onClick={onSearchClick}
                aria-label="Search"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </Button>
            </div>

            {/* Desktop Controls */}
            <div className="relative ml-auto hidden lg:flex items-center gap-6">
              <button
                type="button"
                className="hidden lg:flex items-center w-64 text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800/75 dark:highlight-white/5 dark:hover:bg-slate-700/40 dark:ring-inset dark:ring-white/5 dark:hover:ring-slate-500 transition-all group"
                onClick={onSearchClick}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-3 flex-none text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400"
                >
                  <path
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Quick search...
                <span className="ml-auto pl-3 flex-none text-xs font-semibold text-slate-400">
                  ⌘K
                </span>
              </button>

              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <li>
                    <a
                      href="#"
                      className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                      API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <Button
                  variant="icon"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                >
                  {isDark ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </Button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Menu Trigger */}
            <Button
              variant="icon"
              size="icon"
              className="ml-6 lg:hidden"
              onClick={onMenuClick}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
