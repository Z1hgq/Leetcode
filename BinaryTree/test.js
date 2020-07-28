"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var node = {
    val: 0,
    left: {
        val: 1,
        left: {
            val: 3,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        },
        right: {
            val: 4,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 10,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 2,
        left: {
            val: 5,
            left: {
                val: 11,
                left: null,
                right: null
            },
            right: {
                val: 12,
                left: null,
                right: null
            }
        },
        right: {
            val: 6,
            left: {
                val: 13,
                left: null,
                right: null
            },
            right: {
                val: 14,
                left: null,
                right: null
            }
        }
    }
};
console.log("\u5148\u5E8F\u9012\u5F52: ", index_1.getPreorderTraversalRec(node));
console.log("\u5148\u5E8F\u975E\u9012\u5F52: ", index_1.preorderTraversal(node));
console.log("\u4E2D\u5E8F\u904D\u5386: ", index_1.inorderTraversal(node));
console.log("\u540E\u5E8F\u904D\u5386: ", index_1.postorderTraversal(node));
