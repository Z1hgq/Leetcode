function BinarySearch(arr, key) {
  let low = 0;
  let high = arr.length;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (key > arr[mid]) {
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
function RecursiveBinarySearch(arr, low, high, key) {
  const mid = Math.floor((high - low) / 2) + low;
  if (arr[mid] == key) return mid;
  if (low >= high) {
    return -1;
  } else if (key > arr[mid]) {
    return RecursiveBinarySearch(arr, mid + 1, high, key);
  } else if (key < arr[mid]) {
    return RecursiveBinarySearch(arr, low, mid - 1, key);
  }
  return -1;
}
