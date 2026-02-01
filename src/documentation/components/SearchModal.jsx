import { useEffect, useRef } from "react";
import { searchResultsMock } from "../data/navigation";

export const SearchModal = ({ onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div
        className="fixed inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-2xl transform rounded-xl bg-white shadow-2xl ring-1 ring-black/5 transition-all dark:bg-slate-900 dark:ring-white/10">
        <div className="flex items-center border-b border-slate-100 p-4 dark:border-slate-800">
          <svg
            className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search documentation..."
            className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder-slate-500 dark:text-white dark:placeholder-slate-400 text-sm h-6"
          />
          <button
            onClick={onClose}
            className="ml-3 text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700"
          >
            ESC
          </button>
        </div>

        <div className="px-4 py-2 max-h-96 overflow-y-auto">
          <div className="py-2">
            <h3 className="text-xs font-semibold text-slate-500 mb-2">
              Recent
            </h3>
            <ul>
              {searchResultsMock.map((result, idx) => (
                <li key={idx}>
                  <a
                    href={result.href}
                    className="group flex items-center justify-between rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-slate-400 group-hover:text-sky-500">
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
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          {result.title}
                        </div>
                        <div className="text-xs text-slate-500">
                          {result.category}
                        </div>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl flex justify-end gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <kbd className="font-sans border border-slate-300 dark:border-slate-600 rounded px-1">
              ↑
            </kbd>
            <kbd className="font-sans border border-slate-300 dark:border-slate-600 rounded px-1">
              ↓
            </kbd>{" "}
            to navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="font-sans border border-slate-300 dark:border-slate-600 rounded px-1">
              ↵
            </kbd>{" "}
            to select
          </span>
        </div>
      </div>
    </div>
  );
};
