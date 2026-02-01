/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getPageNavigation } from "../data/navigation";
import CodeBlock from "./CodeBlock";
import QuickLinkCard from "./QuickLinkCard";
import { BsFiletypeHtml } from "react-icons/bs";

export const Content = ({ activeRoute, onNavigate }) => {
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeRoute]);

  const { prev, next } = getPageNavigation(activeRoute);

  const renderContent = () => {
    switch (activeRoute) {
      case "#getting-started":
        return (
          <>
            <header className="mb-9 space-y-1">
              <p className="font-display text-sm font-medium text-sky-500">
                Introduction
              </p>
              <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Getting Started
              </h1>
              <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <QuickLinkCard
                  title="API reference"
                  href="/"
                  description="Learn to easily customize and modify your app's visual design to fit your brand."
                >
                  <BsFiletypeHtml className="h-8 w-8 dark:text-white" />
                </QuickLinkCard>
                <QuickLinkCard
                  title="API reference"
                  href="/"
                  description="Learn to easily customize and modify your app's visual design to fit your brand."
                >
                  <BsFiletypeHtml className="h-8 w-8 dark:text-white" />
                </QuickLinkCard>
                <QuickLinkCard
                  title="API reference"
                  href="/"
                  description="Learn to easily customize and modify your app's visual design to fit your brand."
                >
                  <BsFiletypeHtml className="h-8 w-8 dark:text-white" />
                </QuickLinkCard>
                <QuickLinkCard
                  title="API reference"
                  href="/"
                  description="Learn to easily customize and modify your app's visual design to fit your brand."
                >
                  <BsFiletypeHtml className="h-8 w-8 dark:text-white" />
                </QuickLinkCard>
              </div>
            </header>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-7">
              <p className="mb-6 text-lg">
                Syntax is a modern documentation theme built with Tailwind CSS.
                It features a sidebar navigation, a sticky header, and a
                beautiful dark mode. This clone replicates the visual fidelity
                of the original theme, focusing on typography, spacing, and
                color balance.
              </p>
              <p className="mb-4">
                The primary goal of this library is to provide a robust
                foundation for building high-performance web applications. It
                leverages advanced caching strategies and predictive fetching to
                ensure your UI feels instantaneous.
              </p>
            </div>
          </>
        );
      case "#installation":
        return (
          <>
            <header className="mb-9 space-y-1">
              <p className="font-display text-sm font-medium text-sky-500">
                Introduction
              </p>
              <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Installation
              </h1>
            </header>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-7">
              <p className="mb-4">
                You can install the package via npm, yarn, or pnpm. We recommend
                using the latest version for the best experience.
              </p>
              <CodeBlock
                filename="Terminal"
                language="bash"
                code={`npm install @syntax/core
# or
yarn add @syntax/core`}
              />
              <p className="mb-4">
                You can install the package via npm, yarn, or pnpm. We recommend
                using the latest version for the best experience.
              </p>
              <CodeBlock
                filename="index.html"
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Boilerplate</title>
</head>
<body>
    <h1>Hello world, hello QuickRef.ME!</h1>
</body>
</html>
`}
              />
              <p className="mb-4 mt-6">
                Once installed, you need to wrap your application with the{" "}
                <code>SyntaxProvider</code>. This handles the global state and
                caching context for your components.
              </p>
              <CodeBlock
                filename="App.jsx"
                language="js"
                code={`import { SyntaxProvider } from '@syntax/core';

export default function App({ children }) {
  return (
    <SyntaxProvider apiKey="sf_8909008">
      {children}
    </SyntaxProvider>
  );
}`}
              />
            </div>
          </>
        );
      case "#caching":
        return (
          <>
            <header className="mb-9 space-y-1">
              <p className="font-display text-sm font-medium text-sky-500">
                Core Concepts
              </p>
              <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Understanding Caching
              </h1>
            </header>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-7">
              <p className="mb-4">
                One of the most powerful features of Syntax is its intelligent
                caching layer. By default, all requests are cached in-memory for
                5 minutes. This prevents unnecessary network requests for data
                that has changed.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 marker:text-sky-500">
                <li>
                  <strong>Stale-while-revalidate</strong>: Content is shown
                  immediately from cache while a background update occurs.
                </li>
                <li>
                  <strong>Deduplication</strong>: Identical requests made
                  simultaneously are merged into a single network call.
                </li>
                <li>
                  <strong>Garbage Collection</strong>: Unused cache entries are
                  automatically removed to free up memory.
                </li>
              </ul>
              <div className="my-8 flex gap-4 rounded-xl bg-sky-50 p-4 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-900/50">
                <div className="text-sky-600 dark:text-sky-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sky-900 dark:text-sky-300">
                    Pro Tip
                  </h3>
                  <p className="mt-1 text-sky-800 dark:text-sky-400 text-sm">
                    You can override the default cache duration on a per-query
                    basis by passing a <code>ttl</code> option.
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      case "#predictive-fetching":
        return (
          <>
            <header className="mb-9 space-y-1">
              <p className="font-display text-sm font-medium text-sky-500">
                Core Concepts
              </p>
              <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Predictive Fetching
              </h1>
            </header>
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-7">
              <p className="mb-4">
                Syntax automatically prefetches data when a user hovers over a
                link. This ensures that by the time they click, the data is
                already available.
              </p>
              <CodeBlock
                filename="components/Link.jsx"
                language="js"
                code={`import { Link } from '@syntax/core';

// Data is fetched when user hovers this link
<Link to="/dashboard" prefetch={true}>
  Dashboard
</Link>`}
              />
            </div>
          </>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Coming Soon
            </h2>
            <p className="mt-2 text-slate-500">
              The documentation for this section is currently being written.
            </p>
            <button
              onClick={() => onNavigate("#getting-started")}
              className="mt-8 text-sky-500 hover:text-sky-400 font-medium"
            >
              Return to Getting Started &rarr;
            </button>
          </div>
        );
    }
  };

  return (
    <article>
      {renderContent()}

      {/* Dynamic Footer Navigation */}
      <div className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
        <div className="flex justify-between">
          {prev ? (
            <button
              onClick={() => onNavigate(prev.href)}
              className="group flex flex-col items-start text-left"
            >
              <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Previous
              </span>
              <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                {prev.title}
              </span>
            </button>
          ) : (
            <div />
          )}

          {next ? (
            <button
              onClick={() => onNavigate(next.href)}
              className="group flex flex-col items-end text-right"
            >
              <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                Next
              </span>
              <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                {next.title}
              </span>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
};
