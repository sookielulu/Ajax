/**
 * Created by Administrator on 2016/11/2.
 */
//使用对象，搭积木

//绑定产品
$(function () {

    /*

    //实例化一个对象
    var product = new Product();
    product.name = 'hm climb bag';
    product.description = 'best for climb, best for travel, best for you';
    product.price = 1440;
    product.youhuijia = 1120;
    product.images = [
        {small:'../images/s11.jpg',big:'../images/s11.jpg'},
        {small:'../images/s12.jpg',big:'../images/s12.jpg'},
        {small:'../images/s13.jpg',big:'../images/s13.jpg'}
    ];

    //使用
    //绑定基本信息
    product.bindBasic();
    //绑定图片
    product.bindImages();


    //绑定事件
    $('#btnaddcart').click(function () {
        //购物车新增一个产品
        cart.products.push(product);

        //更新购物车，重新绑定购物车
        //绑定基本信息
        cart.bindBasic();
        //绑定购物车里面的产品列表
        cart.bindList();
        $(window).scrollTop(0);
    });


    //实例化一个购物车对象
    var cart = new Cart();


    */



    //Ajax获取数据
    /*$$.myAjax('http://localhost/learn/0020--shop/object/product.json',function (e) {
        var json = JSON.parse(e);
        var product = transformProduct(json);
        //使用对象中的方法属性
        product.bindBasic();
        product.bindImages();
    });
    $$.myAjax('http://localhost/learn/0020--shop/object/cart.json',function (e) {
        var json = JSON.parse(e);
        var cart = transformCart(json);
        cart.bindBasic();
        cart.bindList();
    });*/

    //如果调用两次Ajax则会占用内存，此时可以把后台传过来的数据放在一个json里面，然后采用分流的方式
    $$.myAjax('http://localhost/learn/0020--shop/object/data.json',function (e) {
        var json = JSON.parse(e);
        var product = transformProduct(json.product);
        var cart = transformCart(json.cart);

        product.bindBasic();
        product.bindImages();

        cart.bindBasic();
        cart.bindList();
    })


    //从后台获取的数据不一定符合我们的要求。要进行转换
    function transformProduct(data) {
        var product = new Product();
        product.name = data.name;
        product.price = data.price;
        product.description = data.description;
        product.youhuijia = data.youhuijia;
        product.images = [
            {small:'../images/s11.jpg',big:'../images/s11.jpg'},
            {small:'../images/s12.jpg',big:'../images/s12.jpg'},
            {small:'../images/s13.jpg',big:'../images/s13.jpg'}
        ]

        return product;
    }
    /*
    *
    * {
     "name" : "iphone6s",
     "price" :"6666",
     "description" :"手机中的战斗机",
     "youhuijia" :"5555",
     "sum" :"333"
     }
    * */
    //转换产品列表
    function transformProducts(data) {
        var products = [];
        for (var i=0; i<data.length; i++) {
            var product = transformProduct(data[i]);
            products.push(product);
        }
        return products;
    }

    function transformCart(data) {
        var cart = new Cart();
        cart.sum = data.sum;
        cart.price = data.price;
        cart.products = transformProducts(data.products);
        return cart;
    }
});