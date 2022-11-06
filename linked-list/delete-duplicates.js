

function deleteDuplicates(head) {
  let cur = head
  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur.next = cur.next.next
    }
    cur = cur.next
  }
  return head
}

const { generateLinkList, outputLinkList } = require('./generateLinkList')

console.log(outputLinkList(deleteDuplicates(generateLinkList([1, 1, 2, 3, 3, 3, 4, 4, 5]))))