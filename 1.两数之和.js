let nums = [3,2,4];
let target = 6;
var twoSum = function(nums, target) {
  for(let i = 0; i< nums.length; i++){
      let num = target - nums[i];
      let index = nums.indexOf(num)
      if(index != -1 && i != index){
          return [i, index];
      }
  }
  return false;
};

console.log(twoSum(nums, target));;