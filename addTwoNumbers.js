/*
 * @Author: Z1hgq
 * @Date: 2019-09-16 14:13:15
 * @LastEditTime: 2019-09-17 14:16:55
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // let arrl1 = [];
    // let arrl2 = [];
    // while(l1){
    //     arrl1.push(l1.val);
    //     l1 = l1.next;
    // }
    // while(l2){
    //     arrl2.push(l2.val);
    //     l2 = l2.next;
    // }
    // l1 = null;
    // l2 = null;
    // arrl1 = arrl1.reverse();
    // arrl2 = arrl2.reverse();
    // let strl1 = '';
    // let strl2 = '';
    // for(let num of arrl1){
    //     strl1 += num;
    // }
    // for(let num of arrl2){
    //     strl2 += num;
    // }
    // arrl1 = null;
    // arrl2 = null;
    let strl1 = '';
    let strl2 = '';
    while(l1){
        strl1 += l1.val;
        l1 = l1.next;
    }
    while(l2){
        strl2 += l2.val;
        l2 = l2.next;
    }
    strl1 = strl1.split('').reverse().join('');
    strl2 = strl2.split('').reverse().join('');
    //注意int有最大安全范围，超过这个范围的运算应使用BigInt，BigInt不受安全范围限制
    let res = (BigInt(strl1) + BigInt(strl2)).toString();
    strl1 = null;
    strl2 = null;
    let resNode = {
        val: res[res.length - 1],
        next: null,
    };
    //构造链表
    for(let i = res.length - 2; i >= 0; i--){
        let node = {
            val: res[i],
            next: null
        };
        let currentNode = resNode;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        node = null;
    }
    return resNode;
};

let l1 = {
    val: '1',
    next: {
        val: '2',
        next : {
            val: '3',
            next: null
        }
    }
}
let l2 = {
    val: '1',
    next: {
        val: '2',
        next : {
            val: '3',
            next: null
        }
    }
}
console.log(addTwoNumbers(l1,l2))









