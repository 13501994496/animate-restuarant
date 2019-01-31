//1(1)restuarant（2,3）staff,waiter,cooker(4,5)customer,dish
//2.run
//0.defined
var cookerUl=document.getElementById('cooker-ul');
var eatingHouse=document.getElementById('eating-house');
var restuarantCash=document.getElementById('cash');
var waiter=document.getElementById('waiter');
var eatingUl=document.getElementById('eating-ul');
var btn=document.querySelector('button');
var customer=document.getElementsByClassName('customer');
//1(1-5)restuarant
var restuarant_instance=(function(){
    var temp;
    function Restuarant(cashes,staffs){
        this.cash=cashes;
        this.staff=staffs||[];
    }
    Restuarant.prototype.hire=function(Staff){
        this.staff.push(Staff.name);
        this.cash=this.cash;
    }
    return{
        getRestaurant:function(cashes,staffs){
            if(!temp){
                temp=new Restuarant(cashes,staffs)
            }
            return temp;
        }
    }  
})();
//1(2,3-5)staff,waiter,cooker
function Staff(name,salary){
    this.name=name;
    this.salary=salary;
}
var waiter_instance=(function(){
    var temp;
    function Waiter(name,salary){
        Staff.call(this,name,salary);
    }
    Waiter.prototype={
        constructor:Waiter,
        _cashier:function(){
            waiter.style.top=20+'px';
            waiter.style.left=900+'px';
        },
        _table:function(){
            waiter.style.top=150+'px';
            waiter.style.left=700+'px';
        },
        _cooker:function(){
            waiter.style.top=20+'px';
            waiter.style.left=500+'px';
        },
        work:function(menu){
            var e=rand(menu);
            return e;
        }
    }
    return{
        getWaiter:function(name,salary){
            if(!temp){
                temp=new Waiter(name,salary);
            }
            return temp;
        }
    }
})();
var cooker_instance=(function(){
    var temp;
    function Cooker(name,salary){
        Staff.call(this,name,salary);
    }
    Cooker.prototype.work=function(){
        return a;
    }
    return{
        getCooker:function(name,salary){
            if(!temp){
                temp=new Cooker(name,salary);
            }
            return temp;
        }
    }
})();
//1(3-5)cooker

//1(4,5-5)customer,dish
//dish
dish=[{name:'烧白菜',cost:20,cookTime:1},
      {name:'烧土豆',cost:25,cookTime:3},
      {name:'红烧肉',cost:40,cookTime:2},
      {name:'糖醋鱼',cost:60,cookTime:3}];
function rand(dish){
    return dish[Math.floor(Math.random()*4)];
}

//customer
var n=0
var customer_instance=(function(){
    var temp;
    function Customer(name){
        this.name=name;
    }
    Customer.prototype={
        constructor:Customer,
        _door:function(){
            customer[0].style.position='absolute';
            customer[0].style.left=600+'px';
            customer[0].style.top=250+'px';
        },
        _order:function(){
            eatingUl.innerHTML=`<li>顾客点${a.name}</li>`;
            restuarantCash.innerHTML-=a.cost;
        },
        _eat:function(){
            eatingUl.innerHTML=`<li>顾客正在吃${a.name}</li>`;
        },
        _leave:function(){
            eatingHouse.removeChild(customer[0]);
        }
    }
    return{
        getCustomer:function(){
            if(!temp){
                temp=new Customer(name);
            }
            return temp;
        }
    }
})();

