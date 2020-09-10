function solution(word, pages) {
  const linkRegex = /(href="https:\/\/)(.*)(")/gm;
  const wordRegex = new RegExp(`([^a-zA-Z])(${word})([^a-zA-Z])`, "gmi");
  const pageRegex = /(content="https:\/\/)(.*)(")/gm;
  const pageMap = new Map();

  pages.forEach((p) => {
    const pageLink = p.split(pageRegex)[2];
    const matchedWord = p.match(wordRegex);
    const wordCount = matchedWord ? matchedWord.length : 0;

    pageMap.set(pageLink, wordCount);
  });

  const pageList = [...pageMap];

  pages.forEach((p, i) => {
    const matchedLink = p.match(linkRegex) || [];
    const matchedCount = matchedLink.length;

    const linkScore = pageList[i][1] / matchedCount;

    matchedLink.forEach((l) => {
      let link = l.split("//")[1];
      link = link.slice(0, link.length - 1);
      const idx = pageList.findIndex((p) => p[0] === link);
      if (idx < 0) return;

      pageMap.set(link, pageMap.get(pageList[idx][0]) + linkScore);
    });
  });

  const result = [...pageMap].map((p) => p[1]);
  const max = Math.max(...result);
  return result.indexOf(max);
}
