import { useState } from "react";
import ResultsCard from "./components/ResultsCard";
const mockResult = {
  truthScore: 82,
  confidence: 87,
  sourcesChecked: 12,
  verdict: "Mostly Reliable",
};
function App() {
  const [showResults, setShowResults] = useState(false);
  const [url, setUrl] = useState("");
const [articleText, setArticleText] = useState("");
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <div className="text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
    Powered by Gemini AI + Fact Check API
  </div>

         <h1 className="text-7xl font-extrabold mb-6">
  <span className="mr-3">👁️</span>
  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
    TruthLens
  </span>
</h1>
<p className="text-xl text-cyan-300 font-medium mb-3">
  See Beyond the Headlines
</p>

          <p className="text-2xl text-slate-300 mb-4">
            AI-Powered Fake News & Misinformation Detector
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Analyze news articles, social media claims, and online content with AI-driven fact checking, source verification, and trust scoring.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">

  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
    <h3 className="text-xl font-semibold mb-3">
      🔍 AI Analysis
    </h3>
    <p className="text-slate-400">
      Detect misleading claims and misinformation using Gemini AI.
    </p>
  </div>

  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
    <h3 className="text-xl font-semibold mb-3">
      ✅ Fact Verification
    </h3>
    <p className="text-slate-400">
      Cross-check claims against trusted fact-check databases.
    </p>
  </div>

  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
    <h3 className="text-xl font-semibold mb-3">
      📊 Trust Score
    </h3>
    <p className="text-slate-400">
      Get reliability, confidence, and credibility scores instantly.
    </p>
  </div>

</div>

        </div>

        <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-800">

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

          <button
          onClick={() => setShowResults(true)}
  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] transition-all duration-300 p-4 rounded-xl font-semibold shadow-lg"
>
  Analyze News →
</button>

       </div>

{showResults && (
  <ResultsCard
  truthScore={mockResult.truthScore}
  confidence={mockResult.confidence}
  sourcesChecked={mockResult.sourcesChecked}
  verdict={mockResult.verdict}
/>
)}

</div>
    </div>
  )
}

export default App
