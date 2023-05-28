import React from "react";

export const makeBlodSearched = (value: string, searchData: string) => {
  const filteredData = searchData.replaceAll("/", "");
  const boldResultPart = (result, query) => {
    const re = new RegExp(query, "ig");
    const results = result.replace(/- /g, "").replace(/\./g, "").split(re);
    return [results, [...result.matchAll(re)].map((x) => x[0])];
  };
  const [resultSplit, resultFind] = boldResultPart(value, filteredData);
  const makeBold = (q) => <span className="searched">{q}</span>;
  const bolded = resultSplit.map((i, c) =>
    c ? (
      <span key={c} className="searchresult">
        {makeBold(resultFind[c - 1])}
        {i}
      </span>
    ) : (
      i
    )
  );

  return bolded;
};
