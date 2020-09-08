**Map.prototype.clear()**

- Map 객체의 모든 key/value pair를 제거한다.

**Map.prototype.delete(key)**

- 주어진 키(Key)와 해당되는 값(Value)를 제거하고 제거하기 전에 Map.prototype.has(key)가 반환했던 값을 반환한다. 그 후의 Map.prototype.has(key)는 false를 반환한다.

**Map.prototype.entries()**

- Map 객체 안의 모든 요소들을 [key, value] 형태의 array 로 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.

**Map.prototype.get(key)**

- 주어진 키(Key)에 해당되는 값(value)을 반환하고, 만약 없으면 undefined를 반환한다.

**Map.prototype.has(key)**

- Map 객체 안에 주어진 key/value pair가 있는지 검사하고 Boolean 값을 반환한다.

**Map.prototype.keys()**

- Map 객체 안의 모든 키(Key)들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.

**Map.prototype.set(key, value)**

- Map 객체에 주어진 키(Key)에 값(Value)를 집어넣고, Map 객체를 반환한다.

**Map.prototype.values()**

- Map 객체 안의 모든 값(Value)들을 집어넣은 순서대로 가지고 있는 Iterator 객체를 반환한다.

출처: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map
