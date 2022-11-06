
function reverseList(head) {
  let cur = head
  let res = null
  while (cur) {
    const next = cur.next
    cur.next = res
    res = cur
    cur = next
  }
  return res
}

const { generateLinkList, outputLinkList } = require('./generateLinkList')

console.log(outputLinkList(reverseList(generateLinkList([1,2,3,4,5]))))