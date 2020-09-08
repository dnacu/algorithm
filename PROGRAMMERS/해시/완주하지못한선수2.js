function solution(participant, completion) {
  const cmap = new Map();
  completion.forEach((c) => cmap.set(c, (cmap.get(c) || 0) + 1));

  for (const p of participant) {
    const val = cmap.get(p);
    if (!val) return p;
    else cmap.set(p, val - 1);
  }
}
