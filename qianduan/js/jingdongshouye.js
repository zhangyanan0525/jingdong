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
        	orders.on("mouseout",function(){
        		handle=setInterval(carousel,2000);
        	})

        	var handle=setInterval(carousel,2000);

        	function carousel(){
        		if (index==4) {
        			index=0;
        		}else{
        			index++;
        		};
        		circulation();
        	}
        	function circulation(){
        		for(var i=0;i<orders.length;i++){
        			$(orders[i]).removeClass("foucus");
        			$(imgs[i]).css("opacity","0");
        		}
        		$(orders[index]).addClass("foucus");
        		$(imgs[index]).css({
        			opacity:"1",
        			transitionDuration:"1.5s"
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
		             	var top=content.top;
		             	var bottom=content.bottom;

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

		             	str+='<div class="img-classify">'+
		             	'<div class="img-top">';
		             	for(var i=0;i<top.length;i++){
		             		str+='<a href="#"><img src="'+top[i]+'"></a>';
		             	}
		             	str+='</div>'+
		             	'<div class="img-bottom">';
		             	for(var i=0;i<bottom.length;i++){
		             		str+='<a href="#"><img src="'+bottom[i]+'"></a>';
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


     // 渲染recommend数据
     makeRe();
     function makeRe(){
	     	var str='<ul class="clearfloat">';
	     	var dataLength=recommend.data.length;
	     	str+='<li class="clearfloat">';
	     	for(var j=0;j<recommend.data[dataLength-1].src.length;j++){
	     		str+='<a href="#"><img src="'+recommend.data[dataLength-1].src[j]+'"></a>'
	     	}
	     	str+='</li>';
	     	for(var i=0;i<dataLength;i++){
	     		str+='<li class="clearfloat">';
	     		for(var j=0;j<recommend.data[i].src.length;j++){
	     			str+='<a href="#"><img src="'+recommend.data[i].src[j]+'"></a>'
	     		}
	     		str+='</li>'
	     	}
	     	str+='<li class="clearfloat">';
	     	for(var j=0;j<recommend.data[0].src.length;j++){
	     		str+='<a href="#"><img src="'+recommend.data[0].src[j]+'"></a>'
	     	}
	     	str+='</li>'; 
	     	str+='</ul>';
	     	$("#recommend .rec-imgs").html(str);
     }
     // 给今日推荐做轮播
     carouselRec();
     function carouselRec(){
	     	var myul=$("#recommend .rec-imgs ul");
	     	var idx=1;
	    	function ulCarousel(offsetWidth,min,max,time){
	    		var ulLeft=idx*offsetWidth;
	    		if(idx>=min&&idx<=max){
	    			myul.animate({
	    				left:ulLeft+'px'
	    			},time);
	    		}else{
	    			if(idx>max){
	    				myul.animate({
	    					left:ulLeft+'px'
	    				},time,"linear",function(){
	    					myul.css("left",min*offsetWidth+'px');
	    					idx=min;
	    				});
	    			}else if(idx<min){
	    				myul.animate({
	    					left:ulLeft+'px'
	    				},time,"linear",function(){
	    					myul.css("left",max*offsetWidth+'px');
	    					idx=max;
	    				}
	    				);
	    			}
	    		}
	    	}

	    	function carouselAuto(){
	    		idx++;
	    		ulCarousel(-1004,1,4,2000);
	    	}
	    	var handle=setInterval(carouselAuto,3000);

	     	// $("#recommend .pre").on("click",function(){
	     	// 	ulCarousel(-1004,1,4,2000);
	     	// })
	     	// $("#recommend .next").on("click",function(){
	     	// 	ulCarousel(-1004,1,4,2000);
	     	// })
     }

     // 设置楼层中clo-top的边框
     cloTopBorder();
     function cloTopBorder(){
     	    var cloBottoms=$("#floor .clo-bottom");
     	    var cloTop=$("#floor .clo-top");
     	    var uls=$("#floor .clo-top>ul");
     	    var lis=$("#floor .clo-top>ul>li");
	     	lis.on("mouseover",function(){
	     		var parentUl=$(this).parent();
	     		var ulIndex=parentUl.attr("data-index");
	     		parentUl.find("li span").css("visibility","visible");
	     		$(this).find("span").css("visibility","hidden");
	     		parentUl.find("li").removeClass("hover");
	     		$(this).addClass("hover");
	     		var num=$(this).attr("data-index");
	     		cloBottoms.each(function(index,element){
	     			if(index==ulIndex-1){
	     				$(element).find(".main").css("display","none");
		     			$(this).find(".main").each(function(idx,ele){
			     				if(idx==num-1){
		                         $(ele).css("display","block");
			     				}
		     				})
	     			}
	     			})
	     		})
     }

     //设置clo-bottom中bkgd的闪亮动画
     $("#floor .floor1 .side-top .bkgd").on("mouseover",function(){
     	$("#floor .floor1 .side-top .bkgd i").animate({
     		left:'411px'
     	},500,function(){
     		$("#floor .floor1 .side-top .bkgd i").css({"left":"-150px"})
     	});
     })
    // 给main-carousel做轮播
    carouselfloor($("#floor .floor1 .main-carousel"),-439,1,4,1000);
    carouselfloor($("#floor .floor2 .main-carousel"),-339,1,4,1000);
    carouselfloor($("#floor .floor3 .main-carousel"),-439,1,4,1000);
    carouselfloor($("#floor .floor4 .main-carousel"),-439,1,4,1000);
    carouselfloor($("#floor .floor5 .main-carousel"),-439,1,4,1000);
    carouselfloor($("#floor .floor6 .main-carousel"),-339,1,4,1000);
    carouselfloor($("#floor .floor7 .main-carousel"),-339,1,4,1000);
    function carouselfloor(mainCarousel,offsetWidth,min,max,time){
    	var idx=1;
    	var handle;
        var buttons=mainCarousel.find(".m-c-buttons li");
        var myul=mainCarousel.find(".m-c-body");
        
    	handle=setInterval(carouselAuto,1500);

    	// buttons.on("mouseover",function(){
    	// 	clearInterval(handle);
    	// 	var num=$(this).attr("data-index");
    	// 	idx=num;
    	// 	ulCarousel(offsetWidth,min,max,time);
    	// })
    	// buttons.on("mouseout",function(){
    	// 	handle=setInterval(carouselAuto,1500);
    	// })
    	// mainCarousel.find(".pre").on("click",function(){
    	// 	console.log("1111");
    	// 	clearInterval(handle);
    	// 	idx--;
    	// 	ulCarousel(offsetWidth,min,max,time);
    	// 	handle=setInterval(carouselAuto,1500);
    	// })
    	// mainCarousel.find(".next").on("click",function(){
    	// 	console.log("2222");
    	// 	clearInterval(handle);
    	// 	idx++;
    	// 	ulCarousel(offsetWidth,min,max,time);
    	// 	handle=setInterval(carouselAuto,1500);
    	// })


    	function ulCarousel(offsetWidth,min,max,time){
    		var ulLeft=idx*offsetWidth;
    		if(idx>=min&&idx<=max){
    			buttons.removeClass("select");
    			$(buttons[idx-1]).addClass("select");
    			myul.animate({
    				left:ulLeft+'px'
    			},time);
    		}else{
    			if(idx>max){
    				buttons.removeClass("select");
    				$(buttons[min-1]).addClass("select");
    				myul.animate({
    					left:ulLeft+'px'
    				},time,"linear",function(){
    					myul.css("left",min*offsetWidth+'px');
    					idx=min;
    				});
    			}else if(idx<min){
    				buttons.removeClass("select");
    				$(buttons[max-1]).addClass("select");
    				myul.animate({
    					left:ulLeft+'px'
    				},time,"linear",function(){
    					myul.css("left",max*offsetWidth+'px');
    					idx=max;
    				}
    				);
    			}
    		}
    	}

    	function carouselAuto(){
    		idx++;
    		ulCarousel(offsetWidth,min,max,time);
    	}
    }

     
     
 })(jQuery);
