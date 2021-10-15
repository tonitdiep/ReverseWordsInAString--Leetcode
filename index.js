Leetcode 557 Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

/**
 * @param {string} s
 * @return {string}
 */
//reverse the order of characters in each word
//preserve whitespace and initial word order
var reverseWords = function(s) {

console.log('lin8', s)
    const reverse = function(s){
    
        s = s.split("");

        let start = 0;
        let end = s.length;

        while(start < end){
          //this works 
            // let temp = s[start];
            // s[start] = s[end];
            // s[end] = temp;
            //this also works
            [s[start], s[end]] =  [s[end], s[start]]

            start+=1;
            end-=1;
        }
        return s.join("");
    }
    s = s.split(" ");
    for(let i=0; i<s.length; i+=1){
        s[i] = reverse(s[i]);
    }
    return s.join(" ");



}