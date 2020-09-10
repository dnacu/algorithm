const validString = (str) => {
  let count = 0,
    valid = true;
  str.some((s) => {
    if (count === 0 && s === ")") {
      valid = false;
      return true;
    }

    if (s === "(") count++;
    else count--;
  });

  return valid;
};

function solution(p) {
  const bfs = (str) => {
    if (!str.length) return "";
    if (validString(str)) return str.join("");

    let count = 0,
      idx = 0;

    str.some((s, i) => {
      count += s === "(" ? 1 : -1;
      if (count === 0) {
        idx = i;
        return true;
      }
    });

    if (idx === 0 || idx === str.length) return "";

    const u = str.slice(0, idx + 1);
    const v = str.slice(idx + 1, str.length);

    if (validString(u)) return u.join("") + bfs(v);
    else {
      return (
        "(" +
        bfs(v) +
        ")" +
        u
          .slice(1, u.length - 1)
          .map((x) => (x === "(" ? ")" : "("))
          .join("")
      );
    }
  };

  return bfs(p.split(""));
}
