var fs = require('fs');
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
                //选择坏字符规则和好后缀规则计算出的较长的后移位数
                let b = bad(badC, child, i);
                let g = good(goodS, child)
                if (b > g) {
                    baseP += b;
                } else {
                    baseP += g;
                }
                break;
            }
        }
        // console.log(baseP);
        if (baseP > parent.length - child.length && baseP < parent.length) baseP = parent.length - child.length; //防止加过的情况
        if (baseP == parent.length ) return -1;
    }
}

function bad(badC, child, i) {
    return i - child.lastIndexOf(badC);
}

function good(goodS, child) {
    if (goodS == "") return 0;
    //最长的好后缀至在字串中出现了一次
    if (child.lastIndexOf(goodS) == child.indexOf(goodS)) {
        let tmp = "";
        for (let i = 1; i < goodS.length; i++) {
            tmp = goodS.slice(i);
            if (child.indexOf(tmp) == 0) {
                let str = child.slice(0, child.length - goodS.length);
                let newChild = str + child;
                return newChild.length - goodS.length;
            }
        }
        return child.length;
    } else
    //最长的好后缀至在字串中出现了多次
    {
        let str = child.slice(0, child.length - goodS.length); //去除字串末尾的最长好后缀
        let lastIndex = str.lastIndexOf(goodS) + goodS.length - 1; //最长好后缀的最后一个字符上一次出现的位置
        return goodS.length - lastIndex;
    }
}

function randomString(len) {
    　　len = len || 32;
    　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    　　var maxPos = $chars.length;
    　　var pwd = '';
    　　for (i = 0; i < len; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return pwd;
}
// fs.writeFile('str.txt', randomString(50000000), function (error) {
//     if (error) {
//       console.log('写入失败')
//     } else {
//       console.log('写入成功了')
//     }
// })
// fs.readFile('str.txt', function (error, data) {
//     if (error) {
//       console.log('读取文件失败了')
//     } else {
//       console.log(data.toString().length);
//       var startTime = new Date();
//       console.log(Bm(data.toString(), "MyKCEi5YBw6DNT4"))
//       var endTime = new Date();
//       console.log(endTime - startTime);
//     }
// })
// fs.readFile('str.txt', function (error, data) {
//     if (error) {
//       console.log('读取文件失败了')
//     } else {
//       console.log(data.toString().length);
//       var startTime = new Date();
//       console.log(data.toString().indexOf("MyKCEi5YBw6DNT4"))
//       var endTime = new Date();
//       console.log(endTime - startTime);
//     }
// })

function Bf(parent,child){
    for(let i = 0;i < parent.length; i++){
        let flag = 0;
        for(let j = 0; j < child.length; j++){
            if(parent[i] == child[j]){
                i++;
                flag++;
            }else{
                break;
            }
        }
        if(flag == child.length) return i-child.length;
    }
    return -1;
}
fs.readFile('str.txt', function (error, data) {
    if (error) {
      console.log('读取文件失败了')
    } else {
      console.log(data.toString().length);
      var startTime = new Date();
      console.log(Bf(data.toString(), "JMQQ6wANC5tKG43hawSFwdKeAYYjz5dyKbC5m3tt"))
      var endTime = new Date();
      console.log(endTime - startTime);
    }
})
