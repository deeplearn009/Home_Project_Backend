export function addToObject(obj) {
  const object = {};
  for (const key in obj) {
    if (!obj[key]) continue;

    object[key] = obj[key];
  }
}
