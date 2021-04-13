/*
 * @Description: 16进制颜色转rgb
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-29 09:06:08
 */
function hex2rgb(hex) {
    try {
        var chars = hex.split('');
        var first = chars.shift();
        // 判断开头标识
        if (first != '#') {
            return hex;
        }
        // 判断位数, 不是3/6不符合要求
        if (chars.length != 3 && chars.length != 6) {
            return hex;
        }
        // 判断是否为16进制中字符
        var isCorrectChar = function(ch) {
            if (
                (ch >= 'a' && ch <= 'f') ||
                (ch >= 'A' && ch <= 'F') ||
                (ch >= '0' && ch <= '9')
            ) {
                return true;
            }
            return false;
        };
        // 处理三位
        if (chars.length == 3) {
            var rgb = 'rgb(';
            for (var i = 0; i < 3; i++) {
                if (!isCorrectChar(chars[i])) {
                    return hex;
                }
                rgb += parseInt(chars[i] + chars[i], 16).toString();
                if (i < 2) {
                    rgb += ',';
                }
            }
            rgb += ')';
            return rgb;
        }
        // 处理6位
        if (chars.length == 6) {
            var rgb = 'rgb(';
            for (var i = 0; i < 6; i += 2) {
                if (!isCorrectChar(chars[i]) || !isCorrectChar(chars[i + 1])) {
                    return hex;
                }
                rgb += parseInt(chars[i] + chars[i + 1], 16).toString();
                if (i < 4) {
                    rgb += ',';
                }
            }
            rgb += ')';
            return rgb;
        }
    } catch {
        return hex;
    }
}
var hex = "#FFFFFF";
var res = hex2rgb(hex);
console.log(res);