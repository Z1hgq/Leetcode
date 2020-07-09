class Event {
    constructor() {
        // 用Map结构来存储
        this._events = this._events || new Map();
        this.maxListeners = this.maxListeners || 10;
    }
}

Event.prototype.addListener = function (type, fn) {
    // 不是函数不生效
    if (typeof fn !== "function") return;
    // 如果type已经设置过了也是不生效的
    if (!this._events.get(type)) {
        this._events.set(type, fn);
    }
}

Event.prototype.emit = function (type, ...args) {
    let handler;
    // 获取函数
    handler = this._events.get(type); 
    // 执行函数
    if (args.length > 0) {
        handler.apply(this, args);
    } else {
        handler.call(this);
    }
    return true;
}