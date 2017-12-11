"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, //评分
        desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '第一个商品', 9.55, 3.5, '这是第一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件产品']),
    new Product(2, '第二个商品', 9.45, 1.5, '这是第二个商品，是我在学习慕课网Angular入门实战时创建的', ['图书']),
    new Product(3, '第三个商品', 9.15, 2.5, '这是第三个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件产品']),
    new Product(4, '第四个商品', 9.35, 3.5, '这是第四个商品，是我在学习慕课网Angular入门实战时创建的', ['产品']),
    new Product(5, '第五个商品', 9.95, 3.5, '这是第五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件产品']),
    new Product(6, '第六个商品', 9.95, 1.5, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['电'])
];
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    websocket.send('这个消息是服务器推送的');
    websocket.on("message", function (message) {
        console.log("接收到消息" + message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("这是服务器定时推送的信息");
        });
    }
}, 2000);
