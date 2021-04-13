const data = { "id": 2, "name": "部门B", "parentId": 0, "children": [{ "id": 1, "name": "部门A", "parentId": 2, "children": [{ "id": 3, "name": "部门C", "parentId": 1, "children": [{ "id": 6, "name": "部门F", "parentId": 3 }] }, { "id": 4, "name": "部门D", "parentId": 1, "children": [{ "id": 8, "name": "部门H", "parentId": 4 }] }] }, { "id": 5, "name": "部门E", "parentId": 2 }, { "id": 7, "name": "部门G", "parentId": 2 }] }
const obj2arr = (obj) => {
    const res = [];
    const loop = (obj, res) => {
        res.push({
            id: obj.id,
            parentId: obj.parentId,
            name: obj.name
        })
        if (obj.children && obj.children.length) {
            obj.children.forEach(item => {
                loop(item, res);
            });
        }
    }
    loop(obj, res);
    console.log(res);
    return res;
}
// obj2arr(data);

const deep = (node) => {
    const stack = [node],
        res = [];
    while (stack.length !== 0) {
        const cur = stack.shift();
        res.push({
            id: cur.id,
            parentId: cur.parentId,
            name: cur.name
        })
        const children = cur.children;
        if (children && children.length) [
            children.forEach(item => {
                stack.push(item);
            })
        ]
    }
    console.log(res);
}
deep(data);