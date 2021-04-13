
const data = [
    { id: 2, name: '部门B', parentId: 0 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 1, name: '部门A', parentId: 2 },
    { id: 4, name: '部门D', parentId: 1 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
    { id: 7, name: '部门G', parentId: 2 },
    { id: 8, name: '部门H', parentId: 4 }
];
const arr2obj = (arr, parentId) => {
    let map = {};
    let res = [];
    // 将数据存入map
    for (let i = 0; i < arr.length; i++) {
        map[arr[i].id] = arr[i];
    }
    // 
    for (let i = 0; i < arr.length; i++) {
        const id = arr[i].parentId;
        if (id === parentId) {
            res.push(arr[i]);
            continue;
        }
        // 如果这个元素有children，那么就加入arr[i]，因为arr[i]的parentId等于map[id]的id
        if (map[id].children) {
            map[id].children.push(arr[i]);
        } else {
            // 如果没有的话，就新建一个children对象存储子元素
            map[id].children = [arr[i]];
        }
    }
    console.log(JSON.stringify(res[0]));
}
arr2obj(data, 0);
/**
 * 数组转树  递归求解
 */
function toTree(list, parId) {
    let len = list.length
    function loop(parId) {
        let res = [];
        for (let i = 0; i < len; i++) {
            let item = list[i]
            if (item.parentId === parId) {
                item.children = loop(item.id)
                res.push(item)
            }
        }
        return res
    }
    return loop(parId)
}