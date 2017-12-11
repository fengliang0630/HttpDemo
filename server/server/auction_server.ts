import * as express from "express";

const app = express();

export class Product{
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,//评分
        public desc:string,
        public categories:Array<string>
    ){}
}

export class Comment {
    constructor(
        public id: number,
        public productId: number,
        public timestamp: string,
        public user: string,
        public rating: number,
        public context: string
    ){}
}

const products : Product[] = [
    new Product(1,'第一个商品',100,3.5,'这是第一个商品，是我在学习慕课网Angular入门实战时创建的',['C语言类型','JAVA类型']),
    new Product(2,'第二个商品',48,1.5,'这是第二个商品，是我在学习慕课网Angular入门实战时创建的',['C语言类型']),
    new Product(3,'第三个商品',60,2.5,'这是第三个商品，是我在学习慕课网Angular入门实战时创建的',['C语言类型','JAVASCRIPT类型']),
    new Product(4,'第四个商品',49.9,3.5,'这是第四个商品，是我在学习慕课网Angular入门实战时创建的',['JAVA类型']),
    new Product(5,'第五个商品',98.5,3.5,'这是第五个商品，是我在学习慕课网Angular入门实战时创建的',['C语言类型','JAVASCRIPT类型']),
    new Product(6,'第六个商品',55.5,1.5,'这是第六个商品，是我在学习慕课网Angular入门实战时创建的',['JAVASCRIPT类型'])
];

const comments : Comment[] = [
    new Comment(1, 1, '2017-05-05', '张三1', 3, '东西不错'),
    new Comment(2, 2, '2017-05-03', '张三2', 2, '东西不错1'),
    new Comment(3, 1, '2017-05-04', '张三3', 1, '东西不错2'),
    new Comment(4, 1, '2017-05-01', '张三4', 5, '东西不错3'),
];

app.get('/api/getAllProducts', (req, res) => {
    let params = req.query;

    let p = products;
    if (params.productName) {
        p = p.filter((product) => product.title.indexOf(params.productName)>-1)
    }

    if (params.productPrice && params.productPrice > -1) {
        p = p.filter((product) => product.price>=params.productPrice)
    }

    if (params.productCategory && params.productCategory != '-1') {
        p = p.filter((product) => product.categories.indexOf(params.productCategory)>-1)
    }
    res.json(p);
});

app.get('/api/getPoductById/:id', (req, res) => {
    res.json(products.find((product) =>
        product.id == req.params['id']
    ));
});

app.get('/api/getCommentsForProductId/:id', (req, res) => {
    res.json(comments.filter(comment => comment.productId=req.params.id));
});

const server = app.listen(8000, 'localhost', () => {
    console.log('服务器已启动，地址是：http://localhost:8000');
});
