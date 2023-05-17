function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let closestSum = Infinity; // Variable to store the closest sum found
  let minDiff = Infinity; // Variable to store the minimum difference between sum and target

  // Iterate through each number as the potential first number of the triplet
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // Pointer to the second number
    let right = arr.length - 1; // Pointer to the third number

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      let diff = Math.abs(sum - target);

      // Check if the current sum is closer to the target than the previous closest sum
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      if (sum === target) {
        // If the sum is equal to the target, return the sum
        return sum;
      } else if (sum < target) {
        // If the sum is less than the target, move the left pointer to the right
        left++;
      } else {
        // If the sum is greater than the target, move the right pointer to the left
        right--;
      }
    }
  }

  return closestSum;
}

// Test case
let arr = [-1, 2, 1, -4];
let target = 1;
let result = threeSum(arr, target);
console.log(result); // Output: 2