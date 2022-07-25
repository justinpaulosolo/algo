var isPalindrome = function(x) {
    // 11 true
    // 1212121 true
    let num = x.toString();
    let num2 = "";
    for( let i = num.length-1; i >= 0; i--) {
        num2 += num[i];
    }
    console.log(num);
    console.log(num2);
    if (num === num2){
        return 'yes';
    } else {
        return 'no';
    }

};


x = 12;

console.log(isPalindrome(x));
