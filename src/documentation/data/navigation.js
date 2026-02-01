export const navigationData = [
  {
    title: "Introduction",
    items: [
      { title: "Getting started", href: "#getting-started" },
      { title: "Installation", href: "#installation" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Understanding Caching", href: "#caching" },
      { title: "Predictive Fetching", href: "#predictive-fetching" },
      { title: "State Management", href: "#state-management" },
    ],
  },
  {
    title: "Advanced Guides",
    items: [
      { title: "Writing Plugins", href: "#plugins" },
      { title: "Middleware", href: "#middleware" },
      { title: "Architecture", href: "#architecture" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "createClient", href: "#create-client" },
      { title: "useQuery", href: "#use-query" },
      { title: "useMutation", href: "#use-mutation" },
    ],
  },
];

export const searchResultsMock = [
  {
    category: "Introduction",
    title: "Getting Started",
    href: "#getting-started",
  },
  { category: "Introduction", title: "Installation", href: "#installation" },
  { category: "Core Concepts", title: "Caching", href: "#caching" },
  {
    category: "Core Concepts",
    title: "Predictive Fetching",
    href: "#predictive-fetching",
  },
  { category: "API", title: "createClient", href: "#create-client" },
];

export function getPageNavigation(currentHref) {
  const flatItems = navigationData.flatMap((section) => section.items);
  const currentIndex = flatItems.findIndex((item) => item.href === currentHref);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0 ? flatItems[currentIndex - 1] : null,
    next:
      currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null,
  };
}
