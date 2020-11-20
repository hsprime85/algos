
// leetcode algos

// TWO Sum
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
/*
examples
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]
*/

var twoSum = function(nums, target){
    const len = nums.length;
    for(let i = 0; i< len; i++){
        for(let j = i +1; j < len; j++){
            if(nums[i]+nums[j] === target){
                return [i, j];
            }
        }
    }
}

// Valid Parentheses
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
*/

var isValid = function(s){
    let bracket = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let stack = [];

    for(let char of s){
        if(bracket[char]){
            stack.push(bracket[char]);
        } else {
            if(stack.pop() !== char){
                return false
            }
        }
    }
    return (!stack.length);
}

// Merge Two Sorted Lists
/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

example
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
*/

let mergeTwoList = function(l1, l2){
    let dummy = new NodeList()
    let head = dummy

    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            dummy.next = l1;
            l1 = l1.next
        } else {
            dummy.next = l2;
            l2 = l2.next
        }
        dummy = dummy.next
    }
    if (l1!==null){
        dummy.next = l1;
    } else (
        dummy.next = l2;
    )
    return head.next;
}

class ListNode {
    constructor(val = null, next = null){
        this.val = val;
        this.next = next;
    }
}