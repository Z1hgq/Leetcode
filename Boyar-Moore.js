function Bm(parent, child) {
    let baseP = 0;

    while (true) {
        let badC = '';
        let goodS = '';
        let flag = 0;
        for (let i = child.length - 1; i >= 0; i--) {
            if (child[i] == parent[baseP + i]) {
                flag++;
                if (flag == child.length) {
                    return baseP;
                }
            } else {
                badC = parent[baseP + i];
                goodS = child.substring(i + 1);
                //后移

                baseP += bad(badC, child, i);
                break;
            }
        }
    }
}

function bad(badC, child, i) {
    return i - child.indexOf(badC);
}

function good(goodS, child) {

}