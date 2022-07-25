/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2,7,11,15];

//brute force O(n^2)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = 1 + i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

var twoSum2 = function(nums, target) {
    let table = {};
    for (let i = 0; i < nums.length; i++) {
        const sub = target - nums[i];
        if(sub in table) {
            return [table[sub], i]
        } else {
            table[nums[i]] = i;
        }
    }
    return [];
}

console.log(twoSum2(nums, 9))