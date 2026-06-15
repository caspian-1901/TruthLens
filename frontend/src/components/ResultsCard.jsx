function ResultsCard() {
  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-800 mt-10">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Analysis Results
      </h2>

      <div className="text-center mb-6">
        <p className="text-5xl font-bold text-cyan-400">
          82/100
        </p>

        <p className="text-slate-400 mt-2">
          TruthScore™
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <h3 className="font-semibold mb-2">
            Verdict
          </h3>

          <p className="text-green-400">
            Mostly Reliable
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Confidence
          </h3>

          <p className="text-cyan-400">
            87%
          </p>
        </div>

      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-2">
          AI Summary
        </h3>

        <p className="text-slate-400">
          This article appears to contain mostly accurate
          information with no major misinformation signals detected.
        </p>
      </div>

    </div>
  );
}

export default ResultsCard;