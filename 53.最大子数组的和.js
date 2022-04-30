/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //  db[i]:表示以nums第i个元素结尾的最大连续子数据集的值
    const db = [];
    db[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (db[i - 1] <= 0) {
            db.push(nums[i])
        } else {
            db.push(db[i - 1] + nums[i])
        }
    }

    let result = db[0];
    for (let i = 1; i < db.length; i++) {
        if (db[i] > result) {
            result = db[i]
        }
    }

    return result
};