/*���幺�ﳵ����*/
function Cart(){
    this.products=[]
    this.sum=0
    this.allPrice=0
}
Cart.prototype={
    bindBasic:function(){
        //��
        $('.cartsum').html(this.getSum())
        $('#cartprice').html(this.getAllPrice())
    },
    //�󶨲�Ʒ�б�,ÿ�ε�������ﳵִ�еķ���
    bindList:function(){
        var str=''
        for(var i= 0,len=this.products.length;i<len;i++){
            str+='<div class="cart_box">'
            str+='<div class="message">'
            str+=' <div class="alert-close"> </div>'
            str+=' <div class="list_img"> <img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/> </div>'
            str+=' <div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4><span class="actual">'+ this.products[i].youhuijia+'</span></div>'
            str+=' <div class="clearfix"></div>'
            str+='  <div class="clearfix"></div>'
            str+='  </div>'
            str+='   </div>'
        }
        $('.shopping_cart').html(str)

    },
    /*����*/
    calcalate:function(){},
    /*��ȡ��Ʒ����*/
    getSum:function(){
        var sum = 0;
        sum=this.products.length;
        return sum;
    },
    /*��ȡ��Ʒ�ܼ�*/
    getAllPrice:function(){
        var sum= 0;
        for(var i= 0,len=this.products.length;i<len;i++){
            //������ü����������
            //$$.isString()
            sum+=parseInt(this.products[i].youhuijia);

            /*parseInt(xiaoli)*/
        }
        return sum;
    }

}