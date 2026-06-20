import TruthScoreChart from "./TruthScoreChart";
function ResultsCard({
  truthScore,
  confidence,
  sourcesChecked,
  verdict,
  reasoning,
  redFlags,
  factChecks,
}) {
  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-800 mt-10">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Analysis Results
      </h2>

      <div className="text-center mb-6">
        <p className="text-5xl font-bold text-cyan-400">
         {truthScore}/100
        </p>

        <p className="text-slate-400 mt-2">
          TruthScore™
        </p>
      </div>

     <div className="grid md:grid-cols-3 gap-6 text-center">

  <div
  className={`p-4 rounded-2xl border-2 ${
    verdict === "Fake"
      ? "bg-red-500/20 border-red-500"
      : verdict === "Unverified"
      ? "bg-yellow-500/20 border-yellow-500"
      : "bg-green-500/20 border-green-500"
  }`}
>
  <h3 className="text-slate-300 mb-2">
    Verdict
  </h3>

  <p
    className={`text-2xl font-bold ${
      verdict === "Fake"
        ? "text-red-400"
        : verdict === "Unverified"
        ? "text-yellow-400"
        : "text-green-400"
    }`}
  >
    {verdict}
  </p>
</div>

  <div className="bg-slate-800 p-4 rounded-2xl">
    <h3 className="text-slate-400 mb-2">
      Confidence
    </h3>

    <p className="text-cyan-400 font-bold">
      {confidence}%
    </p>
  </div>

  <div className="bg-slate-800 p-4 rounded-2xl">
    <h3 className="text-slate-400 mb-2">
      Sources Checked
    </h3>

    <p className="text-blue-400 font-bold">
      {sourcesChecked}
    </p>
  </div>

</div>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">
          AI Summary
        </h3>

       <p className="text-slate-400">
  {reasoning}
</p>
      </div>
      <div className="mt-8">
  <h3 className="font-semibold mb-4">
    Detected Claims
  </h3>

  <div className="bg-slate-800 rounded-2xl p-4">
    <ul className="space-y-3 text-slate-300">
  {redFlags?.map((flag, index) => (
    <li key={index}>⚠ {flag}</li>
  ))}
</ul>
  </div>
</div>
<div className="mt-8">
  <h3 className="font-semibold mb-4">
    Fact Check Status
  </h3>

  <div className="bg-slate-800 rounded-2xl p-4">
    {factChecks?.length > 0 ? (
      <ul className="space-y-3">
        {factChecks.map((check, index) => (
          <li key={index}>
            <a
              href={check.url}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              ✓ {check.publisher} — {check.rating}
            </a>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-yellow-400">
        No matching fact-checks found in our database for this claim.
      </p>
    )}
  </div>
</div>

<TruthScoreChart truthScore={truthScore} />
    </div>
  );
}

export default ResultsCard;