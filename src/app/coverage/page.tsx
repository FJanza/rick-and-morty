import React from "react";
const CoverageReport = () => {
  return (
    <iframe
      src={"/rawCoverage/index.html"}
      className="w-dvw h-dvh bg-slate-100/70"
    />
  );
};

export default CoverageReport;
