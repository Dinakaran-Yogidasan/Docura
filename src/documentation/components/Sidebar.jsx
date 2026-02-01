// import React, { useState, useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import { navigationData } from '../data/navigation';

// export const Sidebar = ({ isOpen, onClose }) => {
//   const [activeHref, setActiveHref] = useState('#getting-started');
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleLinkClick = (href) => {
//     setActiveHref(href);
//     onClose();
//   };

//   const NavigationLinks = () => (
//     <nav className="lg:text-sm lg:leading-6 relative">
//       <ul className="mt-8 lg:mt-0">
//         {navigationData.map((section) => (
//           <li key={section.title} className="mt-10 first:mt-0 lg:mt-8">
//             <h3 className="font-semibold text-slate-900 dark:text-slate-200">{section.title}</h3>
//             <ul className="mt-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:border-l lg:border-slate-200 lg:dark:border-slate-800">
//               {section.items.map((item) => {
//                 const isActive = activeHref === item.href;
//                 return (
//                   <li key={item.title} className="relative">
//                     <a
//                       href={item.href}
//                       onClick={() => handleLinkClick(item.href)}
//                       className={`block w-full border-l pl-3.5 py-1 transition-colors duration-200 ${
//                         isActive
//                           ? '-ml-[2px] border-sky-500 text-sky-500 font-semibold'
//                           : 'border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300'
//                       }`}
//                     >
//                       {item.title}
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );

//   const MobileDrawer = () => (
//     <>
//       <div
//         className={`fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//         onClick={onClose}
//         aria-hidden="true"
//       />
//       <div className={`fixed inset-y-0 left-0 z-[70] w-72 overflow-y-auto bg-white px-6 pb-4 pt-6 shadow-2xl ring-1 ring-slate-900/10 transition-transform dark:bg-slate-900 dark:ring-slate-800 lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//         <div className="mb-8 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="h-8 w-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold">S</div>
//             <span className="text-lg font-semibold text-slate-900 dark:text-white">Syntax</span>
//           </div>
//           <button onClick={onClose} className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
//             <span className="sr-only">Close sidebar</span>
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <NavigationLinks />
//       </div>
//     </>
//   );

//   return (
//     <>
//       {mounted && createPortal(<MobileDrawer />, document.body)}

//       {/* Desktop Sidebar */}
//       <div className="hidden lg:block lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:w-64 lg:shrink-0 lg:overflow-y-auto lg:pb-10 lg:pt-12 lg:pr-6">
//          <NavigationLinks />
//       </div>
//     </>
//   );
// };

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { navigationData } from "../data/navigation";

export const Sidebar = ({ isOpen, onClose, activeRoute, onNavigate }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onNavigate(href);
    onClose();
  };

  const NavigationLinks = () => (
    <nav className="lg:text-sm lg:leading-6 relative">
      <ul className="mt-8 lg:mt-0">
        {navigationData.map((section) => (
          <li key={section.title} className="mt-10 first:mt-0 lg:mt-8">
            <h3 className="font-semibold text-slate-900 dark:text-slate-200">
              {section.title}
            </h3>
            <ul className="mt-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:border-l lg:border-slate-200 lg:dark:border-slate-800">
              {section.items.map((item) => {
                const isActive = activeRoute === item.href;
                return (
                  <li key={item.title} className="relative">
                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={`block w-full border-l pl-3.5 py-1 transition-colors duration-200 ${
                        isActive
                          ? "-ml-[2px] border-sky-500 text-sky-500 font-semibold"
                          : "border-transparent text-slate-500 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300"
                      }`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );

  const MobileDrawer = () => (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur transition-opacity lg:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-y-0 left-0 z-[70] w-72 overflow-y-auto bg-white px-6 pb-4 pt-6 shadow-2xl ring-1 ring-slate-900/10 transition-transform dark:bg-slate-900 dark:ring-slate-800 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              Syntax
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <NavigationLinks />
      </div>
    </>
  );

  return (
    <>
      {mounted && createPortal(<MobileDrawer />, document.body)}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:w-64 lg:shrink-0 lg:overflow-y-auto lg:pb-10 lg:pt-12 lg:pr-6">
        <NavigationLinks />
      </div>
    </>
  );
};
