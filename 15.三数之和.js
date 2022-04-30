/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    const length = nums.length;
    if (!nums || length < 3) return result;
    // 对数组升序排列
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) break;
        // 防止重复
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let L = i + 1;
        let R = length - 1;
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                result.push([nums[i], nums[L], nums[R]]);
                // 去重
                while (L < R && nums[L] === nums[L + 1]) L++;
                // 去重
                while (L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) {
                L++;
            } else {
                R--;
            }
        }
    }

    return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));