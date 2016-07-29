(function($){
      // 为#head hl 中的‘送至北京’绑定hover事件和click事件
      $("#hl .adress div").on("mouseover",function(){
      	$("#hl .all-adress").css("display","block");
      	$("#hl .adress div").addClass("hover");
      	$("#hl .adress .jiantou-copy").css({
      		transform:"rotate(180deg)",
      		transitionDuration:"0.5s"
      	});
      })
      $("#hl .adress div").on("mouseout",function(){
      	$("#hl .all-adress").css("display","none");
      	$("#hl .adress div").removeClass("hover");
      	$("#hl .adress .jiantou-copy").css({
      		transform:"rotate(0deg)",
      		transitionDuration:"0.5s"
      	});

      })
      
      $("#hl .all-adress").on("mouseover",function(){
      	$("#hl .all-adress").css("display","block");
      	$("#hl .adress div").addClass("hover");
      	$("#hl .adress .jiantou-copy").css({
      		transform:"rotate(180deg)",
      		transitionDuration:"0.5s"
      	});
      }) 

      $("#hl .all-adress").on("mouseout",function(){
      	$("#hl .all-adress").css("display","none");
      	$("#hl .adress div").removeClass("hover");
      	$("#hl .adress .jiantou-copy").css({
      		transform:"rotate(0deg)",
      		transitionDuration:"0.5s"
      	});
      })

      $("#hl .all-adress div").on("click",function(){
      	var address= $(this).find("a").html();
      	$("#hl .adress div span").html(address);
      })


        // 为hl中我的京东绑定mouseover事件
        $("#hr .my-jingdong .my-jd-t").on("mouseover",function(){
        	$("#hr .my-jingdong .my-jd-b").css("display","block");
        	$("#hr .my-jingdong .my-jd-t").addClass("hover");
        	$("#hr .my-jingdong .my-jd-t .jiantou-copy").css({
        		transform:"rotate(90deg)",
        		transitionDuration:"0.5s"
        	});
        })


        $("#hr .my-jingdong .my-jd-t").on("mouseout",function(){
        	$("#hr .my-jingdong .my-jd-b").css("display","none");
        	$("#hr .my-jingdong .my-jd-t").removeClass("hover");
        	$("#hr .my-jingdong .my-jd-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })



        $("#hr .my-jingdong .my-jd-b").on("mouseover",function(){
        	$("#hr .my-jingdong .my-jd-b").css("display","block");
        	$("#hr .my-jingdong .my-jd-t").addClass("hover");
        	$("#hr .my-jingdong .my-jd-t .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        }) 

        $("#hr .my-jingdong .my-jd-b").on("mouseout",function(){
        	$("#hr .my-jingdong .my-jd-b").css("display","none");
        	$("#hr .my-jingdong .my-jd-t").removeClass("hover");
        	$("#hr .my-jingdong .my-jd-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })
        // 为hl中关注京东绑定mouseover事件
        
        $("#hr .focus-jingdong .focus-jd-text").on("mouseover",function(){
        	$("#hr .focus-jingdong .focus-jd-img").css("display","block");
        	$("#hr .focus-jingdong .focus-jd-text").addClass("hover");
        	$("#hr .focus-jingdong .focus-jd-text .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        })


        $("#hr .focus-jingdong .focus-jd-text").on("mouseout",function(){
        	$("#hr .focus-jingdong .focus-jd-img").css("display","none");
        	$("#hr .focus-jingdong .focus-jd-text").removeClass("hover");
        	$("#hr .focus-jingdong .focus-jd-text .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })


        $("#hr .focus-jingdong .focus-jd-img").on("mouseover",function(){
        	$("#hr .focus-jingdong .focus-jd-img").css("display","block");
        	$("#hr .focus-jingdong .focus-jd-text").addClass("hover");
        	$("#hr .focus-jingdong .focus-jd-text .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        }) 

        $("#hr .focus-jingdong .focus-jd-img").on("mouseout",function(){
        	$("#hr .focus-jingdong .focus-jd-img").css("display","none");
        	$("#hr .focus-jingdong .focus-jd-text").removeClass("hover");
        	$("#hr .focus-jingdong .focus-jd-text .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })
        // 为hl中客户服务绑定mouseover事件
        
        $("#hr .customer-service .customer-service-t").on("mouseover",function(){
        	$("#hr .customer-service .customer-service-b").css("display","block");
        	$("#hr .customer-service .customer-service-t").addClass("hover");
        	$("#hr .customer-service .customer-service-t .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        })


        $("#hr .customer-service .customer-service-t").on("mouseout",function(){
        	$("#hr .customer-service .customer-service-b").css("display","none");
        	$("#hr .customer-service .customer-service-t").removeClass("hover");
        	$("#hr .customer-service .customer-service-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })

        $("#hr .customer-service .customer-service-b").on("mouseover",function(){
        	$("#hr .customer-service .customer-service-b").css("display","block");
        	$("#hr .customer-service .customer-service-t").addClass("hover");
        	$("#hr .customer-service .customer-service-t .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        }) 

        $("#hr .customer-service .customer-service-b").on("mouseout",function(){
        	$("#hr .customer-service .customer-service-b").css("display","none");
        	$("#hr .customer-service .customer-service-t").removeClass("hover");
        	$("#hr .customer-service .customer-service-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })
        // 为hl中网站导航绑定mouseover事件
        
        $("#hr .site-map .site-map-t").on("mouseover",function(){
        	$("#hr .site-map .site-map-b").css("display","block");
        	$("#hr .site-map .site-map-t").addClass("hover");
        	$("#hr .site-map .site-map-t .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        })


        $("#hr .site-map .site-map-t").on("mouseout",function(){
        	$("#hr .site-map .site-map-b").css("display","none");
        	$("#hr .site-map .site-map-t").removeClass("hover");
        	$("#hr .site-map .site-map-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })
        

        $("#hr .site-map .site-map-b").on("mouseover",function(){
        	$("#hr .site-map .site-map-b").css("display","block");
        	$("#hr .site-map .site-map-t").addClass("hover");
        	$("#hr .site-map .site-map-t .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        }) 

        $("#hr .site-map .site-map-b").on("mouseout",function(){
        	$("#hr .site-map .site-map-b").css("display","none");
        	$("#hr .site-map .site-map-t").removeClass("hover");
        	$("#hr .site-map .site-map-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })
        // 为search中我的购物车绑定mouseover事件
        
        $("#search .my-shop-cart .my-shop-cart-t").on("mouseover",function(){
        	$("#search .my-shop-cart .my-shop-cart-b").css("display","block");
        	$("#search .my-shop-cart .my-shop-cart-t").addClass("hover");
        	$("#search .my-shop-cart .my-shop-cart-t .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        })


        $("#search .my-shop-cart .my-shop-cart-t").on("mouseout",function(){
        	$("#search .my-shop-cart .my-shop-cart-b").css("display","none");
        	$("#search .my-shop-cart .my-shop-cart-t").removeClass("hover");
        	$("#search .my-shop-cart .my-shop-cart-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })

        $("#search .my-shop-cart .my-shop-cart-b").on("mouseover",function(){
        	$("#search .my-shop-cart .my-shop-cart-b").css("display","block");
        	$("#search .my-shop-cart .my-shop-cart-t").addClass("hover");
        	$("#search .my-shop-cart .my-shop-cart-t .jiantou-copy").css({
        		transform:"rotate(180deg)",
        		transitionDuration:"0.5s"
        	});
        }) 

        $("#search .my-shop-cart .my-shop-cart-b").on("mouseout",function(){
        	$("#search .my-shop-cart .my-shop-cart-b").css("display","none");
        	$("#search .my-shop-cart .my-shop-cart-t").removeClass("hover");
        	$("#search .my-shop-cart .my-shop-cart-t .jiantou-copy").css({
        		transform:"rotate(0deg)",
        		transitionDuration:"0.5s"
        	});
        })
        



        // 焦点图轮播
        autoPlay();
        function autoPlay(){
        	var imgs=$("#main .main-left li");
	        var pre=$("#main .pre");
	        var next=$("#main .next");
	        var orders=$("#main .order li");
	        var index=0;

		    next.on("click",function(){
	        	if (index==4) {
	        		index=0;
	        	}else{
	        		index++;
	        	};
	        	circulation();
	        });
	        pre.on("click",function(){
	        	if (index==0) {
	        		index=4;
	        	}else{
	        		index--;
	        	};
	        	circulation();
	        });
	        orders.on("mouseover",function(){
	        	index=$(this).html()-1;
	        	circulation();
	        	clearInterval(handle);
	        })
	        orders.on("mouseover",function(){
	        	handle=setInterval(carousel,3000);
	        })

	        var handle=setInterval(carousel,3000);

	        function carousel(){
	        	if (index==4) {
	        		index=0;
	        	}else{
	        		index++;
	        	};
	        	circulation();
	        	console.log("1111");
	        }
	        function circulation(){
	        	for(var i=0;i<orders.length;i++){
	        		$(orders[i]).removeClass("foucus");
	        		$(imgs[i]).css("opacity","0");
	        	}
	        	$(orders[index]).addClass("foucus");
	        	$(imgs[index]).css({
	        		opacity:"1",
	        		transitionDuration:"1s"
	        	});
	        }  
	              
        }
        



        
        

        // 给全部商品分类添加动画
        
        
        
	$("#classification .class-l dd").on("mouseover",function(){
		    $("#classification .class-r").css('display',"block");
            var titleDd=$("#classification .class-l dd");
            var title=$(this).find("a").html();
            createSlideOut(findContent(title,classification));
            //设置标题的css属性
            titleDd.removeClass("hover");
            $(this).addClass("hover");
            var perHeight=parseInt(titleDd.height());
            var height=perHeight*titleDd.length-20;
            $("#classification .class-r").css("min-height",height);
            /**
             * 找到对应类别的content数据
             * @param  {[type]} title          [需要找的标题，鼠标指着的标题]
             * @param  {[type]} classification [所有数据]
             * @return {[type]}                [标题对应的content内容，想要找的数据]
             */
            function findContent(title,classification){
            	var content;
            	for(var i=0;i<classification.data.length;i++){
	        	var dataNow=classification.data[i]
	        	var name=dataNow.name;
				if(title==name){
					content=dataNow.content;
	        	   }
				}
				return content;
            }
            /**
             * 对content数据进行渲染
             * @param  {[type]} content [需要渲染的数据]
             */
			function createSlideOut(content){
				var head=content.head;
				var bd=content.body;
				$("#classification .class-r").html("");
				var str='<div class="text-classify">'+
				'<div class="hotClass">';
				for(var i=0;i<head.length;i++){
					str+='<a href="#"><span>'+head[i]+'</span><i>></i></a>';
				}
				str+='</div>'+
				'<div>';


				for(var i=0;i<bd.length;i++){
					str+='<dl>'+
					'<dt><a href="#"><span>'+bd[i].bold+'</span><i>></i></a></dt>'+
					'<dd>';
					for(var j=0;j<bd[i].normal.length;j++){
						str+='<a href="#">'+bd[i].normal[j]+'</a>';
					}
					str+='</dd>'+
					'</dl>';
				}
				str+='</div>'+
				'</div>';
				$("#classification .class-r").html(str);
			}
	})
             
    $("#classification .class-l").on("mouseout",function(){
        $("#classification .class-r").css('display',"none");
        $("#classification .class-l dd").removeClass("hover");
    })
    

})(jQuery);
