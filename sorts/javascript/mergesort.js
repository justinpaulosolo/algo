function merge(left, right) {
  let leftIndex = 0;
  let rightIndex = 0;
  let result = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
    } else {
      result.push(right[rightIndex]);
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    result.push(left[i]);
  }

  for (let i = rightIndex; i < right.length; i++) {
    result.push(right[i]);
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let middle = Math.floor(arr.length/2);

  let left = merge(arr.slice(0, middle));
  let right = merge(arr.slice(middle));

  return merge(left, right);
}

function main() {
  console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));
}

main();
