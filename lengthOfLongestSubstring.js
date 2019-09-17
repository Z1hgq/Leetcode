/*
 * @Author: Z1hgq
 * @Date: 2019-09-17 14:26:50
 * @LastEditTime: 2019-09-17 18:07:46
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var res = 0,
        i = 0;
    var temp = [];
    while(i < s.length) {
        if(temp.indexOf(s[i]) === -1) { //如果不存在的话向数组里继续添加
            temp.push(s[i]);
        } else {
            temp.shift(); //如果存在的话表明当前这个子串不符合无重复字符的要求，删除队头的元素，跳出这次循环
            continue;
        }
        res = Math.max(res, temp.length);
        i++;
    }
    return res;
};

//超时
var lengthOfLongestSubstringII = function(s) {
    if(s === "") return 0;
    for(let i = s.length; i > 0; i--){
        let j = 0;
        while(j + i <= s.length){
            let str = s.slice(j, j + i);
            if(s.indexOf(str) != -1){
                let strSet = new Set(str);
                if(Array.from(strSet).length === str.length){
                    return str.length;
                }else{
                    j++;
                }
            }else{
                j++;
            }
        }
    } 
};
console.log(lengthOfLongestSubstring("dvuadbiabkhbcacbnaosbduioheqwoehoiqwjojojaddddddddddddddohwdoboubqibibiuabisbdoahdiqowhdpqwpojlcnklasnclknalkdf"));