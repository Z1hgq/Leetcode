function generateLinkList(arr = []) {
  let head = {}
  const res = head
  for (let index = 0; index < arr.length; index++) {
    const cur = arr[index]
    head.val = cur
    head.next = index === arr.length - 1 ? null : {}
    head = head.next
  }
  return res
}

function outputLinkList(head) {
  const res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  return res
}

module.exports = {
  outputLinkList,
  generateLinkList
}