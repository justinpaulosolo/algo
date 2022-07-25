let stack = [];


stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


function reverseArr (arr) {
    let stack = []

    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    let reverse = '';
    while (stack.length > 0){
        reverse += stack.pop();
    }
    return reverse;
}

console.log(reverseArr('justin'));
