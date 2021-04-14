/**
 * 前缀树
 * https://leetcode-cn.com/problems/implement-trie-prefix-tree/
/**
 * Initialize your data structure here.
 */
 var Trie = function () {
    this.value = '';
    this.isWord = false;
    this.children = new Array(26);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curLetter = this;
    for (let i = 0; i < word.length; i++) {
        const index = word[i].charCodeAt() - 'a'.charCodeAt();
        if (!curLetter.children[index]) {
            curLetter.children[index] = new Trie();
            curLetter.children[index].value = word[i];
        }
        curLetter = curLetter.children[index];
    }
    curLetter.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    return this.find(word).flag && this.find(word).curLetter.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.find(prefix).flag;
};

Trie.prototype.find = function (prefix) {
    let curLetter = this;
    let flag = true;
    for (let i = 0; i < prefix.length; i++) {
        const index = prefix[i].charCodeAt() - 'a'.charCodeAt();
        if (curLetter.children[index]) {
            curLetter = curLetter.children[index];
            continue;
        }
        flag = false;
        break;
    }
    return { flag, curLetter };
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var obj = new Trie()
obj.insert('apple')
var param_2 = obj.search('app')
var param_3 = obj.startsWith('app')

console.log(obj, param_2, param_3);
