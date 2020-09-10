function solution(record) {
  const userMap = new Map();

  record.forEach((r, i) => {
    const [type, id, name] = r.split(" ");

    if (type !== "Leave") {
      userMap.set(id, name);
    }
  });

  const result = [];
  record.forEach((r, i) => {
    const [type, id, _] = r.split(" ");
    const name = userMap.get(id);
    switch (type) {
      case "Enter": {
        result.push(`${name}님이 들어왔습니다.`);
        break;
      }
      case "Leave": {
        result.push(`${name}님이 나갔습니다.`);
        break;
      }
    }
  });

  return result;
}
