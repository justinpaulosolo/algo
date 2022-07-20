const arr = [64, 25, 12, 22, 11];

function selectionSort (arr) {
    let length = arr.length;

    for(let i = 0; i < length; i++){
        let min = i;

        for(let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min=j;
            }
        }
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(arr);
console.log(selectionSort(arr));
