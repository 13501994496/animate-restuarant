var cookerUl=document.getElementById('cooker-ul');
var eatingHouse=document.getElementById('eating-house');
var restuarantCash=document.getElementById('cash');
var waiter=document.getElementById('waiter');
var eatingUl=document.getElementById('eating-ul');
var btn=document.querySelector('button');
var customer=document.getElementsByClassName('customer');
var n=0;
//2.run
btn.addEventListener('click',run);
function sleep(t){
    var now=new Date().getTime();
    var exitTime=now+t;
    while(true){
        now=new Date().getTime();
        if(now>exitTime){
            return;
        }
    }
}
function run(){
    //total:1.cash,waiter,cooker 2.customer-order-waiter_cooker-eating-leave
    //1.waiter,cooker;
    var r=restuarant_instance.getRestaurant(10000,[]);
    var w=waiter_instance.getWaiter('waiter',3000);//waiter
    var cook=cooker_instance.getCooker('cooker',5000);//cooker
    var c=customer_instance.getCustomer('顾客');//customer
    r.hire(w);
    r.hire(cook);
    //console.log(r.cash);
    restuarantCash.innerHTML=r.cash-w.salary-cook.salary;//cash
    //2.customer
    eatingHouse.appendChild(customer[0]);
    c._door();
    setTimeout(function(){
        w._table();
    },500);
    new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(w.work(dish));
        },500);
    }).then(function(e){
        //console.log(e);
        setTimeout(function(){
            w._cooker();
            eatingUl.innerHTML=`<li>${e.name}等菜中……</li>`;
        },1000);
        setTimeout(function(){
            var cTime=e.cookTime;
            var s=setInterval(function(){
                cookerUl.innerHTML=`${e.name}做菜中，还剩${cTime}秒`;
                cTime--;
                if(cTime==-1){
                    cookerUl.innerHTML=`${e.name}做好了，服务员上菜！`;
                }else if(cTime<-1){
                    clearInterval(s);
                    cookerUl.innerHTML='休息中！';
                }
            },1000);           
        },1000);
        var g=e;
        return g;
    }).then(function(g){
        setTimeout(function(){
            w._table();
        },g.cookTime*1000+2500);
        setTimeout(function(){
            w._cashier();
            var d=3;
            var t=setInterval(function(){
                eatingUl.innerHTML=`正在吃${g.name}，还剩${d}秒`;
                d--;
                if(d==0){
                    eatingUl.innerHTML=`吃完走人！！`;
                }else if(d<0){
                    clearInterval(t);
                    eatingUl.innerHTML='';
                }
            },1000);    
        },g.cookTime*1000+2800);
        var f=g;
        return f;
    }).then(function(f){
        setTimeout(function(){
            c._leave();
            n++
            if(n<3){
                var t=setTimeout(run,500);
            }
            else{
                clearTimeout(t);
            }
        },f.cookTime*1000+6500);
    });
}