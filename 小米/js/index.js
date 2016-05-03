/*

*/

$(function(){
    var ta=getClass('top-middle')[0];
    var ta1=getClass('topmiddleli',ta);
    var tulbox=getClass('toplist',ta);
    for(var i=0;i<ta1.length-2;i++){
        ta1[i].index=i;
        ta1[i].onmouseover=function(){
            for(var j=0;j<tulbox.length;j++){
            	tulbox[j].style.display="none";

            }
            tulbox[this.index].style.display="block";

        } 
        ta1[i].onmouseout=function(){
            for(var j=0;j<tulbox.length;j++){
               
            }
            tulbox[this.index].style.display="none";
        }
         
    }

    
    var bannerleft=getClass('logomiddleleft1')[0];
    var bannerleft1=getClass('logomiddleleft1li',bannerleft);
    var blguanggao=getClass('logomiddleleft1')[0];
    var blguanggao1=getClass('bannerlist',blguanggao);
    for(var i=0;i<bannerleft1.length;i++){
        bannerleft1[i].index=i; 
        bannerleft1[i].onmouseover=function(){

            for(var j=0;j<blguanggao1.length;j++){
                blguanggao1[j].style.display="none";
                bannerleft1[j].style.background="";
            }
            blguanggao1[this.index].style.display="block";
            bannerleft1[this.index].style.background="#ff6700";
        }


        bannerleft1[i].onmouseout=function(){

            for(var j=0;j<blguanggao.length;j++){
                blguanggao1[j].style.display="none";
            }
            bannerleft1[this.index].style.background="";
            blguanggao1[this.index].style.display="none";

        }

 
    }


    /*banner lunbo*/
    
    var box=getClass('banner')[0];
    var lunbotu=getClass('bannerImg',document);
    var t=setInterval(move,2000);
    

    var btn=getClass('btn')[0].getElementsByTagName('li');
    var index=0;
    function move(){
        index++;//每循环一次变量加1
        if(index>lunbotu.length-1){ //如果变量的值大于a标签的个数减一就把0的值赋给它
          index=0;//
        }
          for(var i=0;i<lunbotu.length;i++){//遍历这个变量，找到每一个i
               lunbotu[i].style.display='none';//将这个变量中的每一个都将层级设为最低
               btn[i].style.background="";
          }
        lunbotu[index].style.display='block';//将要显示的层级设置高一些
        btn[index].style.background="red";
        lunbotu[index].style.opacity="0.3";
        animate(lunbotu[index],{opacity:1},1000);
   }

   for(var i=0;i<btn.length;i++){//遍历这个变量，找到这个变量下的每个值
      btn[i].index=i;//将每个变量值存放在btn[i]的index属性中
      btn[i].onclick=function(){//给每个btn都添加上一个单击事件
         for(var j=0;j<lunbotu.length;j++){//遍历这个图片的变量
          lunbotu[j].style.display='none';
          btn[j].style.background="";
          //将每个btn的背景样式都为kong
         }
         lunbotu[this.index].style.display='block';
         //this指的是实例化对象 谁指就是谁
        this.style.background="red";
      }
   }
   

     var btnleft=getClass('btnleft')[0];//找到类名为anniuleft的标签
    var btnright=getClass('btnright')[0];//找到类名为anniuright的标签

    btnright.onclick=function(){//给btnright设置单击事件
      move();
    }
    btnleft.onclick=function(){//利用这个setInterval函数让每隔2秒重复
        index--;//每循环一次变量加1
        if(index==-1){ //如果变量的值等于-1
          index=lunbotu.length-1;//就把轮播图的长度减一赋给index3.2.1.0
        }
          for(var i=0;i<lunbotu.length;i++){//遍历这个变量，找到每一个i
               lunbotu[i].style.display="none";
               btn[i].style.background="";
          }
        lunbotu[index].style.display="block";
        btn[index].style.background="red";
         lunbotu[index].style.opacity="0.3";
        animate(lunbotu[index],{opacity:1},1000);
        this.index=index;
   } 
     box.onmouseover=function(){
          clearInterval(t);//设置鼠标经过事件将上面的t循环清除
          animate(btnright,{opacity:0.5},500);
          animate(btnleft,{opacity:0.5},500);
     }
     box.onmouseout=function(){
          t=setInterval(move,2000);
          //设置鼠标离开事件 将循环再次执行
          animate(btnright,{opacity:0},500);
          animate(btnleft,{opacity:0},500);
    }
 


   /* xuaxiang*/

   var headright=getClass('dpheadright')[0];
   var headright1=headright.getElementsByTagName('li');
   var righttu=getClass('znyjbottom',headright);
   for(var i=0;i<headright1.length;i++){
      headright1[i].index=i;
        
        headright1[i].onclick=function(){
           for(var j=0;j<righttu.length;j++){
             righttu[j].style.display="none";
           }
           righttu[this.index].style.display="block";
        }
   } 




/* xuaxiang*/

   


    var title=getClass('dpheadright')[0];
     var tu=getClass('dp')[0];
    
     /*var tu3=getClass('dp')[2];*/
  
     var link;
     var list;
/*     var bgcolor=['red','green','yellow','blue']*/
        link=title.getElementsByTagName('li');
       
        list=getClass('znyjbottom',tu);
        /*list3=getClass('znyjbottom',tu3);*/
        tab(link,list);
       
      /*  tab(links,list3);*/
  
       
       var link1;
       var list1;
         var title1=getClass('dpheadright')[1];
         var tu1=getClass('dp')[1];
      
        link1=title1.getElementsByTagName('li');
        // console.log(title1[i]);
        list1=getClass('znyjbottom',tu1);

        tab(link1,list1);
        

         var link2;
         var list2;
         var title2=getClass('dpheadright')[2];
         var tu2=getClass('dp')[2];
      
        link2=title2.getElementsByTagName('li');
        // console.log(title2[i]);
        list2=getClass('znyjbottom',tu2);

        tab(link2,list2);



     function tab(link,li,bgcolor){
         
    var bgcolor=bgcolor||"none";
     for(var i=0;i<link.length;i++){
           link[i].index=i;//设了一个名为index的属性让它把每个i的值都存储在index当中
           link[i].onmouseover=function(){
               /*this.index*/
               for(var j=0;j<li.length;j++){

                    li[j].style.display="none";
                    link[j].style.color="#333";
                    link[j].style.borderBottom="none";
               }
               li[this.index].style.display="block";
               this.style.color="#ff6700";
               this.style.borderBottom="2px solid #ff6700";
               this.style.background=bgcolor;

           }
     }


     }





/* 小米明星单品*/

   var listbox=$('.listlunbo')[0];
   var listbottom=$('.list-bottom')[0];
   
   var lis=$('.list-bottom-img')[0].getElementsByTagName('a');
   var lists=$('.list-bottom-bottom',listbox);
   var aw=parseInt(getStyle(lists[0],'width'));
   listbox.style.width=lists.length*aw+'px';

     var ss=0;
      var aa=setInterval(bb,2000);

       for(var i=0;i<lis.length;i++){//遍历li按钮将所有li的类名改为空
                lis[i].className="";
              };
  lis[0].className="img1";
  lis[1].className="img3";
        function bb(){
          ss++;
          if(ss==lists.length){
            ss=0; 
            lis[0].className="img1";
            lis[1].className="img3";
            
          }
          else{
           lis[0].className="img4";
           lis[1].className="img2";
         }
         animate(listbox,{marginLeft:-ss*aw});//利用动画函数将box下的li和as即图和按钮一起变化
        }

    listbottom.onmouseover=function(){
      clearInterval(aa);
    }  
    listbottom.onmouseout=function(){
       aa=setInterval(bb,2000);
    }  
    lis[0].onclick=function(){
        ee(lists);

    }
    lis[1].onclick=function(){
        cc(lists);

    }

     var dd=0;
  function cc(list2){
          
          if(dd==0){
            dd=dd+1;
            }
         else if(dd>=list2.length-1){
         
          }
         animate(listbox,{marginLeft:-dd*aw});
         lis[0].className="img4";
         lis[1].className="img2"; 
        }

  function ee(list3,ii){
          
          if(dd==0){
            
            }
         else if(dd>=list3.length-1){
         dd=dd-1;
          }
         animate(listbox,{marginLeft:-dd*aw});
          lis[0].className="img1";
          lis[1].className="img3";
        }

  /*小米明星单品 end*/ 
 var wntjbox=$('.wntj')[0];
 var wntjbottombox=$('.wntjbottombox')[0];
 var li2=$('.list-bottom-img')[1].getElementsByTagName('a');

  var tus=$('.wntjbottom',wntjbottombox);
   var tuw=parseInt(getStyle(tus[0],'width'));
   wntjbottombox.style.width=tus.length*tuw+'px';
   
     var f=0;
      var tu1=setInterval(yidong,2000);


       for(var i=0;i<li2.length;i++){//遍历li按钮将所有li的类名改为空
                li2[i].className="";
              };
  li2[0].className="img1";
  li2[1].className="img3";

    function yidong(){
        f++;
       /* console.log(f)*/
        if(f==tus.length){
          f=0;
            if(f==tus.length){
            li2[0].className="img1";
            li2[1].className="img3";
            
            }
          else if(f==0){
           li2[0].className="img4";
           li2[1].className="img2";
           }
           else{
              li2[0].className="img4";
              li2[1].className="img3";
           }
        }
       animate(wntjbottombox,{marginLeft:-f*tuw});//利用动画函数将box下的li和as即图和按钮一起变化
      }


    wntjbox.onmouseover=function(){
      clearInterval(tu1);
    }  
    wntjbox.onmouseout=function(){
       tu1=setInterval(yidong,2000);
    }  
 /*   li2[0].onclick=function(){
        ee(tus);
    }
    li2[1].onclick=function(){
        cc(tus);
    }*/

/*图片按需加载*/

 var floor=$('.jiazai');

    var tops=[];//设置一个空数组
      for(var i=0;i<floor.length;i++){
           tops.push(floor[i].offsetTop);//把每一个楼层相对于浏览器的高度存放在tops这个数组中
      }
    // console.log(floor)
window.onscroll=function(){
    /*图片隐藏 按需加载*/
    var lh=document.documentElement.clientHeight;
    // console.log(lh)
     var doc=document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(doc)
    for(var i=0;i<tops.length;i++){
       // console.log()
       if(tops[i]<doc+lh){
          var imgs=$('img',floor[i]);
          // console.log(imgs) 
                for(var j=0;j<imgs.length;j++){
                  imgs[j].src=imgs[j].getAttribute('cc')
                }
           
           
       }
    }
  }

// window.onscroll();

/*   为你推荐   */

function wntj(wntjbigbox){

var wntjbox=$('.wntjbox',wntjbigbox)[0];
/*console.log(wntjbox)*/
var nroutbox=$(".nroutbox",wntjbigbox)[0];
var nrBox=$('.nrBox',nroutbox);
var wntjw=parseInt(getStyle(nrBox[0],"width"));

nroutbox.style.width=wntjw*nrBox.length+"px";

var nrboxbtn=$(".nrboxbtn",wntjbigbox)[0];
var wntjlis=nrboxbtn.getElementsByTagName("span");
/*console.log(wntjlis)*/
var wntjindex=0;
var wntjflag=true;
  function wntjmove(){
     if(!wntjflag){
       return;
     }
     wntjflag=false;
     wntjindex++;
     if(wntjindex>=nrBox.length){
         wntjindex=nrBox.length-1;
     }
     if(wntjindex<=-1){
         wntjindex=0;
     }
     animate(nroutbox,{marginLeft:-wntjindex*wntjw},function(){
         wntjflag=true;
     });
     for(var i=0;i<wntjlis.length;i++){
        wntjlis[i].style.border="";
     }
     wntjlis[wntjindex].style.border="2px solid #ff6700";
  }


    for(var i=0;i<wntjlis.length;i++){
       wntjlis[i].wntjindex=i;
       wntjlis[i].onclick=function(){
          for(var j=0;j<wntjlis.length;j++){
            wntjlis[j].style.border="";
          }
           wntjlis[this.wntjindex].style.border="2px solid #ff6700"
           wntjindex=this.wntjindex;
           animate(nroutbox,{marginLeft:-wntjindex*wntjw})
       }
    };

    var wntjanniu=getClass("nrboxdianji",wntjbigbox)[0];
    var nrdianjileft=getClass("nrdianjileft",wntjanniu)[0];
    var nrdianjiright=getClass("nrdianjiright",wntjanniu)[0];
    nrdianjiright.onclick=function(){
      wntjmove();
    }

     nrdianjileft.onclick=function(){
      if(wntjflag){
        wntjindex-=2;
        wntjmove();
      }else{
        return
      }
    }

    wntjbigbox.onmouseover=function(){
       animate(wntjanniu,{opacity:0.5},500);
    }
    wntjbigbox.onmouseout=function(){
       
       animate(wntjanniu,{opacity:0},500);
    }


}
    
  var nrbox=$(".nrbox");
  for (var i = 0; i < nrbox.length; i++) {
    wntj(nrbox[i]);
    
  };










})

