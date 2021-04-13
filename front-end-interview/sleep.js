/*
 * @Description: 实现一个sleep函数
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-14 21:42:25
 */

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

sleep(1000).then(() => {
    console.log(111);
});
