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
    //最长的好后缀至在字串中出现了一次
    if(child.lastIndexOf(goodS) == child.indexOf(goodS)){
        let tmp = "";
        for(let i = 1; i < goodS.length; i--){
            tmp = goodS.slice(i);
            if(child.indexOf(tmp) == 0){
                let str = child.slice(0,child.length - goodS.length);
                let newChild = str + child;
                return newChild.length - goodS.length;
            }
        }
        return child.length;
    } else 
    //最长的好后缀至在字串中出现了多次
    {
        let str = child.slice(0,child.length - goodS.length); //去除字串末尾的最长好后缀
        let lastIndex = str.lastIndexOf(goodS) + goodS.length - 1; //最长好后缀的最后一个字符上一次出现的位置
        return goodS.length - lastIndex;
    }   
}