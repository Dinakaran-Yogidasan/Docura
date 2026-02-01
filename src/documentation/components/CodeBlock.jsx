// /* eslint-disable react/prop-types */

// import { useClipboard } from "../hooks/useClipboard";

// const CodeBlock = ({ filename, language, code }) => {
//   const { copied, copy } = useClipboard();

//   const handleCopy = () => {
//     copy(code);
//   };

//   // Robust syntax highlighting for multiple languages
//   const highlightCode = (inputCode) => {
//     if (!inputCode) return "";

//     // 1. HTML Entity Escape (Safety First)
//     // We escape < and > so the browser renders them as text, not actual HTML tags
//     let safeCode = inputCode
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");

//     // 2. Apply Highlighting via Regex Replacement on the safe string
//     // Note: We are matching the *escaped* versions of symbols now.

//     let formatted = safeCode
//       // Comments (// or # or <!-- -->)
//       .replace(
//         /(\/\/.*$|#\s.*$|&lt;!--[\s\S]*?--&gt;)/gm,
//         '<span class="text-slate-500 italic">$1</span>'
//       )

//       // Strings (Single, Double, Backticks)
//       .replace(
//         /(['"`])(.*?)\1/g,
//         '<span class="text-emerald-400">$1$2$1</span>'
//       )

//       // HTML Tags (e.g., &lt;div&gt;) - catching the opening/closing parts
//       .replace(
//         /(&lt;\/?)(\w+)(.*?)(&gt;)/g,
//         (match, start, tagName, attrs, end) => {
//           // Highlight attributes inside the tag
//           const coloredAttrs = attrs.replace(
//             /([a-zA-Z0-9-]+)(=)/g,
//             '<span class="text-sky-300">$1</span>$2'
//           );
//           return `<span class="text-red-400">${start}${tagName}</span>${coloredAttrs}<span class="text-red-400">${end}</span>`;
//         }
//       )

//       // Keywords (purple)
//       .replace(
//         /\b(const|let|var|export|default|function|return|import|from|async|await|class|interface|type|extends|implements|if|else|for|while|switch|case|break|continue|try|catch|throw|new|void|typeof|doctype|html|head|body|meta|title)\b/g,
//         '<span class="text-purple-400 font-medium">$1</span>'
//       )

//       // Built-in/Types (yellow/orange)
//       .replace(
//         /\b(console|window|document|localStorage|Array|String|Number|Boolean|Object|Promise|Error|React|useState|useEffect|log)\b/g,
//         '<span class="text-yellow-300">$1</span>'
//       )

//       // Function calls (blue) - identifiers followed by (
//       .replace(
//         /([a-zA-Z0-9_]+)(?=\()/g,
//         '<span class="text-blue-400">$1</span>'
//       )

//       // Numbers and Booleans (orange)
//       .replace(
//         /\b(\d+|true|false|null|undefined)\b/g,
//         '<span class="text-orange-400">$1</span>'
//       )

//       // Operators and Punctuation (cyan/light blue)
//       .replace(
//         /(=|:|=>|\+|-|\*|\/|%|&amp;|\||\^|!|\?|\.)/g,
//         '<span class="text-sky-200">$1</span>'
//       );

//     return formatted;
//   };

//   return (
//     <div className="group my-8 overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-2xl dark:bg-slate-900/80 dark:ring-white/10">
//       {filename && (
//         <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-3 backdrop-blur">
//           <div className="flex items-center gap-2">
//             <div className="flex gap-2 mr-2">
//               <div className="h-3 w-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors border border-black/10"></div>
//               <div className="h-3 w-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors border border-black/10"></div>
//               <div className="h-3 w-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors border border-black/10"></div>
//             </div>
//             <span className="text-xs font-medium text-slate-400 font-mono opacity-80">
//               {filename}
//             </span>
//           </div>
//         </div>
//       )}
//       <div className="relative">
//         <div
//           className={`absolute right-4 top-4 z-10 transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
//         >
//           <button
//             onClick={handleCopy}
//             className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border transition-all duration-200 ${
//               copied
//                 ? "text-emerald-400 border-emerald-400/50 bg-emerald-400/10"
//                 : "text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 border-slate-700/50 shadow-sm backdrop-blur"
//             }`}
//             aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
//           >
//             {copied ? (
//               <>
//                 <svg
//                   className="w-3.5 h-3.5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 Copied!
//               </>
//             ) : (
//               <>
//                 <svg
//                   className="w-3.5 h-3.5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
//                   />
//                 </svg>
//                 Copy
//               </>
//             )}
//           </button>
//         </div>

//         <span className="sr-only" role="status" aria-live="polite">
//           {copied ? "Code copied to clipboard" : ""}
//         </span>

//         <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-50 tab-[4] scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
//           <code className={`language-${language || "text"} font-mono`}>
//             {code.split("\n").map((line, i) => (
//               <div
//                 key={i}
//                 className="table-row hover:bg-white/5 transition-colors"
//               >
//                 <span className="table-cell select-none pr-6 text-right text-slate-600 opacity-40 w-8 text-xs pt-1">
//                   {i + 1}
//                 </span>
//                 <span
//                   className="table-cell"
//                   dangerouslySetInnerHTML={{
//                     __html: highlightCode(line) || " ",
//                   }}
//                 />
//               </div>
//             ))}
//           </code>
//         </pre>
//       </div>
//     </div>
//   );
// };
// export default CodeBlock;

/* eslint-disable react/prop-types */

import { useClipboard } from "../hooks/useClipboard";

const CodeBlock = ({ filename, language = "text", code = "" }) => {
  const { copied, copy } = useClipboard();

  const handleCopy = () => copy(code);

  // Extended multi-language regex highlighter (heuristic)
  const highlightCode = (inputCode, lang) => {
    if (!inputCode) return "";

    // Escape
    let safe = inputCode
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // COMMON MULTI-LINE COMMENTS (process before line splitting)
    safe = safe.replace(/\/\*[\s\S]*?\*\//g, m => `<span class="text-slate-500 italic">${m}</span>`);
    safe = safe.replace(/("""|''')[\s\S]*?\1/g, m => `<span class="text-emerald-400">${m}</span>`);

    // HTML comments
    safe = safe.replace(/&lt;!--[\s\S]*?--&gt;/g, m => `<span class="text-slate-500 italic">${m}</span>`);

    // SINGLE-LINE COMMENTS (js/ts/bash/python)
    safe = safe.replace(/(\/\/.*$|#.*$)/gm, m => `<span class="text-slate-500 italic">${m}</span>`);

    // STRINGS (cover escaped quotes)
    safe = safe.replace(/(['"`])(?:(?=(\\?))\2.)*?\1/g, m => `<span class="text-emerald-400">${m}</span>`);

    // JSX / HTML TAGS
    safe = safe.replace(/(&lt;\/?)([A-Za-z][A-Za-z0-9:-]*)([^&]*?)(&gt;)/g, (_m, start, tag, attrs, end) => {
      const isComponent = /^[A-Z]/.test(tag);
      const tagColor = isComponent ? "text-pink-300" : "text-red-400";
      const attrColored = attrs.replace(/([a-zA-Z_:][-a-zA-Z0-9_:]*)(=)/g, `<span class="text-sky-300">$1</span>$2`);
      return `<span class="${tagColor}">${start}${tag}</span>${attrColored}<span class="${tagColor}">${end}</span>`;
    });

    // CSS (only if lang === 'css')
    if (lang === "css") {
      // Comments already done; highlight selectors (start of line until {)
      safe = safe.replace(/^([^{]+){/gm, (m, sel) => {
        const coloredSel = sel
          .replace(/(\.[A-Za-z0-9_-]+)/g, '<span class="text-purple-300">$1</span>')
          .replace(/(#[A-Za-z0-9_-]+)/g, '<span class="text-purple-300">$1</span>')
          .replace(/(\b[a-z_-]+\b)(?=[\s>*+])/g, '<span class="text-purple-300">$1</span>');
        return `${coloredSel}{`;
      });
      // Properties
      safe = safe.replace(/([a-z-]+)(\s*:\s*)([^;{}]+)/g, (_m, prop, sep, val) => {
        const propSpan = `<span class="text-yellow-300">${prop}</span>${sep}`;
        const valSpan = val
          .replace(/(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}))/g, '<span class="text-emerald-400">$1</span>')
          .replace(/\b(\d+(\.\d+)?)(px|rem|em|vh|vw|%)\b/g, '<span class="text-orange-400">$1$3</span>')
          .replace(/\b(rgba?|hsla?)\([^)]*\)/g, '<span class="text-emerald-400">$&</span>');
        return `${propSpan}${valSpan}`;
      });
      // !important
      safe = safe.replace(/!important/g, '<span class="text-red-300 font-medium">!important</span>');
    }

    // KEYWORDS BY LANGUAGE
    const keywordMap = {
      javascript: [
        "const","let","var","function","return","import","from","export","default","async","await",
        "class","extends","implements","new","try","catch","throw","if","else","for","while","switch",
        "case","break","continue","typeof","instanceof","in","delete","this","await","yield"
      ],
      jsx: [
        "const","let","var","function","return","import","from","export","default","async","await",
        "class","extends","new","try","catch","throw","if","else","for","while","switch","case",
        "break","continue","typeof","in","this"
      ],
      html: [
        "!DOCTYPE","html","head","body","meta","title","script","link","style","div","span","section",
        "header","footer","nav","main","article","aside","h1","h2","h3","h4","h5","h6","p","a","ul","ol","li","img"
      ],
      css: [
        "display","position","flex","grid","block","inline","relative","absolute","fixed","sticky",
        "content","repeat","auto","minmax"
      ]
    };

    const reactExtras = [
      "React","useState","useEffect","useRef","useMemo","useCallback","useContext",
      "useReducer","useLayoutEffect","Suspense","Fragment"
    ];

    const targetLang = lang === "js" ? "javascript" : lang;
    const kw = keywordMap[targetLang] || [];
    const allKw = targetLang === "jsx" ? [...kw, ...reactExtras] : kw;

    if (allKw.length) {
      const kwRegex = new RegExp(`\\b(${allKw.join("|")})\\b`, "g");
      safe = safe.replace(kwRegex, '<span class="text-purple-400 font-medium">$1</span>');
    }

    // BUILT-INS / GLOBALS
    safe = safe.replace(
      /\b(Array|String|Number|Boolean|Object|Promise|Error|Map|Set|Date|Math|console|window|document)\b/g,
      '<span class="text-yellow-300">$1</span>'
    );

    // NUMBERS + BOOLEAN + NULLISH
    safe = safe.replace(
      /\b(0x[a-fA-F0-9]+|0b[01]+|\d+\.\d+|\d+|true|false|null|undefined)\b/g,
      '<span class="text-orange-400">$1</span>'
    );

    // OPERATORS
    safe = safe.replace(
      /(===|==|!=|!==|=>|<=|>=|\+|-|\*|\/|%|\||&&|!|\?|:|\.|,|;)/g,
      '<span class="text-sky-200">$1</span>'
    );

    // FUNCTION NAMES (heuristic)
    safe = safe.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\s*(?=\()/g, '<span class="text-blue-400">$1</span>');

    return safe;
  };

  // Highlight entire block first (supports multi-line)
  const highlightedWhole = highlightCode(code, language);

  const lines = highlightedWhole.split("\n");

  return (
    <div className="group my-8 overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-900/5 transition-all">
      {filename && (
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-3">
          <span className="text-xs font-medium text-slate-400 font-mono">{filename}</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500">{language}</span>
        </div>
      )}
      <div className="relative">
        <div
          className={`absolute right-4 top-4 z-10 transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border transition ${
              copied
                ? "text-emerald-400 border-emerald-400/50 bg-emerald-400/10"
                : "text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 border-slate-700/50 shadow-sm"
            }`}
            aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Code copied to clipboard" : ""}
        </span>

        <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <code className={`language-${language} font-mono`}>
            {lines.map((line, i) => (
              <div key={i} className="table-row hover:bg-white/5 transition-colors">
                <span className="table-cell select-none pr-6 text-right text-slate-600 opacity-40 w-8 text-xs pt-1">
                  {i + 1}
                </span>
                <span
                  className="table-cell"
                  dangerouslySetInnerHTML={{ __html: line || " " }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;