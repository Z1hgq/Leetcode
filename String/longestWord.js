/**
 * 给出一个字符串数组words组成的一本英语词典。从中找出最长的一个单词，
 * 该单词是由words词典中其他单词逐步添加一个字母组成。若其中有多个可行的答案，
 * 则返回答案中字典序最小的单词。
 * 若无答案，则返回空字符串。
 * 输入：
 * words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
 * 输出："apple"
 * 解释：
 * "apply"和"apple"都能由词典中的单词组成。但是"apple"的字典序小于"apply"。
 * 
 * @param {*} words 
 */
function longestWord(words) {
    words.sort();
    let obj = {
        '': true
    };
    let maxwords = '';
    for (const item of words) {
        // 从第一个字母开始 obj[''] === true
        // 如果obj的key是item的前缀，那么item符合条件
        if(obj[item.substr(0,item.length - 1)]){
            obj[item] = true;
            maxwords = maxwords.length < item.length ? item : maxwords;
        }
    }
    return maxwords;
}

const words = ["yo","ew","fc","zrc","yodn","fcm","qm","qmo","fcmz","z","ewq","yod","ewqz","y"];
console.log(longestWord(words));