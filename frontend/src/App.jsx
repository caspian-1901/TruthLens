import { useState, useEffect } from "react";
import ResultsCard from "./components/ResultsCard";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [url, setUrl] = useState("");
  const [articleText, setArticleText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [loadingText, setLoadingText] = useState(
    "Analyzing with Gemini AI..."
  );

  useEffect(() => {
  if (!loading) return;

  const loadingMessages = [
    "Analyzing with Gemini AI...",
    "Cross-checking fact databases...",
    "Calculating credibility score...",
    "Generating TruthScore..."
  ];

  let index = 0;

  const interval = setInterval(() => {
    index = (index + 1) % loadingMessages.length;
    setLoadingText(loadingMessages[index]);
  }, 1500);

  return () => clearInterval(interval);
}, [loading]);




const handleAnalyze = async () => {
  try {
    setLoading(true);
    const endpoint = url.trim()
  ? "/analyze/url"
  : "/analyze/text";

const payload = url.trim()
  ? { url: url }
  : { text: articleText };

const response = await fetch(
  `https://outstanding-fascination-production-11b9.up.railway.app${endpoint}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }
);

    const data = await response.json();

    setResult(data);
    setShowResults(true);
    setLoading(false);

  } catch (error) {
  console.error("API Error:", error);
  setLoading(false);
}
};
    
  return (
    
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#061327] to-[#0a1f4d]">
    
    
    {/* AI Grid Background */}
<div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `
      linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
/>

{/* Large glow */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full" />

{/* Floating Orbs */}
<div className="absolute top-32 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-heartbeat opacity-70" />
<div className="absolute top-80 right-32 w-3 h-3 bg-blue-400 rounded-full animate-heartbeat opacity-70" />
<div className="absolute bottom-40 left-1/3 w-4 h-4 bg-cyan-300 rounded-full animate-heartbeat opacity-70" />
<div className="absolute bottom-20 right-1/4 w-6 h-6 bg-blue-500 rounded-full animate-heartbeat opacity-50" />


    {/* Background Glows */}
<div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

<div className="absolute top-80 right-10 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[160px] rounded-full"></div>
      {/* Floating Feature Icons */}

{/* Left Top */}
<div className="absolute top-44 left-56 text-6xl opacity-90 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]">
  🛡️
</div>

{/* Right Top */}
<div className="absolute top-44 right-56 text-6xl opacity-90 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]">
  🧠
</div>

{/* Left Bottom */}
<div className="absolute top-[520px] left-64 text-6xl opacity-90 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]">
  🔍
</div>

{/* Right Bottom */}
<div className="absolute top-[520px] right-64 text-6xl opacity-90 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]">
  📄
</div>
      
      {/* Left Side Glow */}
<div className="absolute left-10 top-40 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[180px]"></div>

{/* Right Side Glow */}
<div className="absolute right-32 top-64 w-72 h-72 bg-purple-500/20 rounded-full blur-[140px]"></div>

{/* Lower Left Glow */}
<div className="absolute left-40 bottom-40 w-64 h-64 bg-blue-500/15 rounded-full blur-[120px]"></div>

{/* Lower Right Glow */}
<div className="absolute right-40 bottom-40 w-64 h-64 bg-indigo-500/15 rounded-full blur-[120px]"></div>
      
{/* AI Connection Lines */}

<div className="absolute top-[220px] left-[25%] w-[250px] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/60 to-cyan-500/0 blur-[1px]" />

<div className="absolute top-[320px] right-[25%] w-[250px] h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-400/60 to-blue-500/0 blur-[1px]" />

<div className="absolute top-[270px] left-[40%] w-[180px] h-[180px] border border-cyan-500/10 rounded-full"></div>

<div className="absolute top-[290px] left-[47%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,1)] animate-pulse"></div>

<div className="absolute top-[350px] left-[52%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse"></div>

{/* Central AI Ring */}
<div className="absolute top-[240px] left-1/2 -translate-x-1/2 w-72 h-72 rounded-full border border-cyan-500/20"></div>

<div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-80 h-80 rounded-full border border-cyan-400/10"></div>

<div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-96 h-96 rounded-full border border-blue-500/5"></div>

<div className="absolute top-[250px] left-[47%] w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,211,238,1)]"></div>

<div className="absolute top-[350px] left-[58%] w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(59,130,246,1)]"></div>

<div className="absolute top-[430px] left-[50%] w-3 h-3 bg-cyan-300 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,211,238,1)]"></div>

<div className="absolute top-[350px] left-[42%] w-3 h-3 bg-indigo-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(99,102,241,1)]"></div>


      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">

        <div className="text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
    Powered by Gemini AI + Fact Check API
  </div>

         <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tight">
  <div className="inline-flex items-center justify-center mr-4 w-24 h-24 rounded-full border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.8)]">
  👁️
</div>
  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]">
    TruthLens
  </span>
</h1>
<p className="text-xl text-cyan-300 font-medium mb-3">
  See Beyond the Headlines
</p>

          <p className="text-2xl text-slate-300 mb-4">
            AI-Powered Fake News & Misinformation Detector
          </p>
         <div className="flex justify-center gap-6 mt-6 mb-8 flex-wrap">
  <div className="px-4 py-2 rounded-xl bg-slate-900/70 border border-cyan-500/30">
    <span className="text-cyan-300 font-bold">AI Analysis</span>
  </div>

  <div className="px-4 py-2 rounded-xl bg-slate-900/70 border border-cyan-500/30">
    <span className="text-cyan-300 font-bold">Fact Verification</span>
  </div>

  <div className="px-4 py-2 rounded-xl bg-slate-900/70 border border-cyan-500/30">
    <span className="text-cyan-300 font-bold">TrustScore™</span>
  </div>
</div>


          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Analyze news articles, social media claims, and online content with AI-driven fact checking, source verification, and trust scoring.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

  <div className="bg-slate-900/40 backdrop-blur-xl
border border-cyan-500/30
shadow-[0_0_30px_rgba(34,211,238,0.15)]">
    <h3 className="text-xl font-semibold mb-3">
      🔍 AI Analysis
    </h3>
    <p className="text-slate-400">
      Detect misleading claims and misinformation using Gemini AI.
    </p>
  </div>

  <div className="bg-slate-900/40 backdrop-blur-xl
border border-cyan-500/30
shadow-[0_0_30px_rgba(34,211,238,0.15)]">
    <h3 className="text-xl font-semibold mb-3">
      ✅ Fact Verification
    </h3>
    <p className="text-slate-400">
      Cross-check claims against trusted fact-check databases.
    </p>
  </div>

  <div className="bg-slate-900/40 backdrop-blur-xl
border border-cyan-500/30
shadow-[0_0_30px_rgba(34,211,238,0.15)]">
    <h3 className="text-xl font-semibold mb-3">
      📊 Trust Score
    </h3>
    <p className="text-slate-400">
      Get reliability, confidence, and credibility scores instantly.
    </p>
  </div>

</div>

        </div>

        <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700">

          <label className="block mb-2 text-slate-300">
            News URL
          </label>

          <input
  type="text"
  placeholder="Paste article URL here..."
  value={url}
  onChange={(e) => setUrl(e.target.value)}
  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

          <label className="block mb-2 text-slate-300">
            Article Text
          </label>

          <textarea
  rows="6"
  placeholder="Paste news article text..."
  value={articleText}
  onChange={(e) => setArticleText(e.target.value)}
  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<div className="flex flex-wrap gap-3 mb-6">
  <button
    onClick={() => setArticleText("5G towers cause cancer")}
    className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20"
  >
    5G towers cause cancer
  </button>

  <button
    onClick={() => setArticleText("Drinking hot water cures cancer")}
    className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20"
  >
    Drinking hot water cures cancer
  </button>

  <button
    onClick={() => setArticleText("Scientists discover water on Mars")}
    className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20"
  >
    Scientists discover water on Mars
  </button>
</div>

          <button
          onClick={handleAnalyze}
  className="w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 hover:scale-[1.03] transition-all duration-300 p-4 rounded-xl font-bold shadow-[0_0_30px_rgba(34,211,238,0.4)]"
>
  {loading ? loadingText : "✨ Analyze with TruthLens AI →"}
</button>

       </div>

{showResults && result && (
  <ResultsCard
  truthScore={result.analysis.score}
    confidence={100}
    sourcesChecked={result.fact_checks?.length || 0}
    verdict={result.analysis.verdict}
    reasoning={result.analysis.reasoning}
    redFlags={result.analysis.red_flags}
    factChecks={result.fact_checks}

  />
)}

</div>
    </div>
  )
}

export default App
