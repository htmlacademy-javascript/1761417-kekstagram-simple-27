export function checkMaxLength(collection, maxLength) {
  return collection.length !== undefined && collection.length <= maxLength;
}
