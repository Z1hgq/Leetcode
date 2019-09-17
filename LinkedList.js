/*
 * @Author: Z1hgq
 * @Date: 2019-09-16 14:18:35
 * @LastEditTime: 2019-09-17 14:08:17
 */
//单向链表构造函数
const LinkedList = function() {
	/**
	 * 单向链表中节点的构造函数
	 * @param {Any} val 要传入链表的节点
	 */
	var Node = function(val) {
			this.val = val;
			this.next = null;
		}
	var length = 0;//单向链表的长度
	var head = null;//单向链表的头结点，初始化为NULL
	/**
	 * 向单向链表尾部添加元素
	 * @param  {Any} val 要加入链表的节点
	 */
	this.append = function(val) {
		var node = new Node(val);
		var current;
		if (head == null) {
			head = node;
		} else {
			// 当前项等于链表头部元素.
			// while循环到最后一个，从而将该节点加入链表尾部。
			current = head;
			// 当next为null时，判定为false。退出循环。
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		length++;
	};
 
	/**
	 * 移除单向链表中某一个元素
	 * @param  {Number} position 要移除元素的位置
	 * @return {Any}          移除成功返回被移除的元素，不成功则返回NULL
	 */
	this.removeAt = function(position) {
		if (position > -1 && position < length) {
			var current = head;
			var previous;
			var index = 0;
 
			if (position == 0) {
				// 因为之前head指向第一个元素，现在把head修改为指向第二个元素。
				// 核心概念在于链表前后全靠指针链接，而非数组一般。
				// 所以只需要改变head的元素。
				head = current.next;
			} else {
				while (index++ < position) {
					// previous指要操作元素位置之前的那个元素，current表示之后的那个元素。
					previous = current;
					current = current.next;
				}
 
				previous.next = current.next;
			}
 
			length--;
 
			return current.val;
		} else {
			return null;
		}
	};
 
	/**
	 * 向单向链表中插入某个元素
	 * @param  {Number} position 要插入的位置
	 * @param  {Any} val  要插入的元素
	 * @return {Boolean}          插入成功返回true，失败返回false
	 */
	this.insert = function(position, val) {
		if (position >= 0 && position <= length) {
			var node = new Node(val);
			var current = head;
			var previous;
			var index = 0;
 
			if (position == 0) {
				node.next = current;
				head = node;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
 
				previous.next = node;
				node.next = current;
			}
 
			length++;
			return true;
		} else {
			return false;
		}
	};
 
	/**
	 * 将链表所有内容以字符串输出
	 * @return {String} 要输出的字符串
	 * current.val+','  这边可以自行加 逗号或是 空格 
	 */
	this.toString = function() {
		var current = head;
		var string = '';
 
		while (current) {
			string += current.val+',';
			current = current.next;
		}
		return string;
	};
 
	/**
	 * 寻找某个元素在单向链表中的位置
	 * @param  {Any} val 要寻找的元素
	 * @return {Number}         返回值>=0则代表找到相应位置
	 */
	this.indexOf = function(val) {
		var current = head;
		var index = 0;
		while (current) {
			if (val === current.val) {
				return index;
			}
			index++;
			current = current.next;
		}
 
		return -1;
	};
	/**
	 * 移除给定的元素
	 * @param  {Any} val 要移除的元素
	 * @return {Number}         返回值>=0表示移除成功
	 */
	this.remove = function(val) {
		var index = this.indexOf(val);
		return this.removeAt(index);
	};
 
	/**
	 * 判断单向链表是否为空
	 * @return {Boolean} 为空则返回true，不为空则返回false
	 */
	this.isAmpty = function() {
		return length === 0
	};
 
	/**
	 * 返回单向链表长度
	 * @return {Number} 单向链表的长度
	 */
	this.size = function() {
		return length;
	};
 
	/**
	 * 获取单向链表的头部
	 * @return {Any} 单向链表的头部
	 */
	this.getHead = function() {
		return head;
	}
}