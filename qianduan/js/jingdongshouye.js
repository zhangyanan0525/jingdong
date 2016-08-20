(function($){

    //程序的入口
    main();
/**
 * 程序的入口函数
 */
function main(){
    //渲染模板
    renderTemplate();
    //绑定事件
    bindEvent();
    //各个楼层设置轮播效果
    floorCarousel();
}

/**
 * 请求数据，渲染dom
 * @return {[type]} [description]
 */
function renderTemplate(){
    // 焦点图轮播
    autoPlay();
    // 渲染全部商品分类
    makeClassification();
    // 渲染收货地址
    makeAlladress();
    //渲染搜索框下面的推荐
    makePrompts();
    //渲染京东快报
    makeJdkb();
    // 渲染今日推荐
    makeRe();
    //渲染猜你喜欢
    makeGL();
    //渲染品质生活
    makequalityLife();
    //渲染一楼
    rederFloorOne();
    //渲染二楼
    rederFloorTwo();
    //渲染三楼
    rederFloorThree();
    //渲染四楼
    rederFloorFour();
    //渲染五楼
    rederFloorFive();
    //渲染六楼
    rederFloorSix();
    //渲染七楼
    rederFloorSeven();
}

/**
 * 绑定事件
 * @return {[type]} [description]
 */
function bindEvent(){
    // 为头部中我的京东，关注京东，客户服务，网站导航 绑定事件
    headerEvent();
    // 为search中我的购物车绑定事件
    shopCartEvent();
    // 绑定事件。table选项卡的切换
    cloTopBorder();
    //设置clo-bottom中bkgd的闪亮动画
    glisten();
}

// 渲染收货地址
function makeAlladress(){
  var allAdress;
  $.ajax({
            url:"/allAdress",
            type:"get",
            success: function(res){
                    allAdress=res;
                    var source = adressTemplate;
                    var template = Handlebars.compile(source);
                    var html = template(allAdress);
                    $("#hl .all-adress").html(html);
                    
            },
            error:function(error){
                console.log("failed to get allAdress."+error);
            }
        })

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
    $("#hl .all-adress").on("click","div",function(){
        var address= $(this).find("a").html();
        console.log(address);
        $("#hl .adress div span").html(address);
    })
}
//渲染搜索框下面的推荐
function makePrompts(){
     var prompts;
      $.ajax({
                url:"/prompts",
                type:"get",
                success: function(res){
                        prompts=res;
                        var source = promptsTemplate;
                        var template = Handlebars.compile(source);
                        var html = template(prompts);
                        $("#search .prompts").html(html);
                },
                error:function(error){
                    console.log("failed to get prompts."+error);
                }
            })
}
// 焦点图轮播
function autoPlay(){
    var mainImg;
    $.ajax({
            url:"/mainImg",
            type:"get",
            success: function(res){
                        mainImg=res;
                        var source = mainImgTemplate;
                        var template = Handlebars.compile(source);
                        var html = template(mainImg);
                        $("#main .main-left").html(html);

                        var imgs=$("#main .main-left li");
                        var pre=$("#main .pre");
                        var next=$("#main .next");
                        var orders=$("#main .order li");
                        var index=0;
                        $(imgs[0]).css("opacity","1");

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
            },
            error:function(error){
                console.log("failed to get mainImg."+error);
            }
        })
}
// 渲染全部商品分类
function makeClassification(){
      var classification;
            $.ajax({
                url:'/classification',
                type: "get",
                success:function(res){
                    classification=res;  
                },
                error:function(error){
                    console.log("failed to get classification."+error);
                }
            });
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
             });
            $("#classification .class-l").on("mouseout",function(){
                $("#classification .class-r").css('display',"none");
                $("#classification .class-l dd").removeClass("hover");
            });
}
//渲染京东快报
function makeJdkb(){
     var jingdongkuaibao;
            $.ajax({
                url:'/jingdongkuaibao',
                type: "get",
                success:function(res){
                    jingdongkuaibao=res; 
                    var source = jdkbTemplate;
                    var template = Handlebars.compile(source);
                    var html = template(jingdongkuaibao);
                    $("#main .kb-cont-ul").html(html); 
                },
                error:function(error){
                    console.log("failed to get jingdongkuaibao."+error);
                }
            });
}
// 渲染今日推荐
function makeRe(){
    $.ajax({
        url:"/recommend",
        type:"get",
        success: function(res){
            var recommend=res;
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
            carouselRec();
        },
        error:function(error){
            console.log("failed to get recommend."+error);
        }
    })
}
// 给今日推荐做轮播
function carouselRec(){
    var myul=$("#recommend .rec-imgs ul");
    var handle;
    // console.log(myul);
    var idx=1;
    handle=setInterval(carouselAuto,3000);
    function ulCarousel(offsetWidth,min,max,time){
        var ulLeft=idx*offsetWidth;
        if(idx>=min&&idx<=max){
            myul.animate({
                left:ulLeft+'px'
            },time);
            // console.log("1111");
        }else{
            if(idx>max){
                myul.animate({
                    left:ulLeft+'px'
                },time,"linear",function(){
                    myul.css("left",min*offsetWidth+'px');
                    idx=min;
                    console.log("idx");
                });
            }else if(idx<min){
                myul.animate({
                    left:ulLeft+'px'
                },time,"linear",function(){
                    myul.css("left",max*offsetWidth+'px');
                    idx=max;
                    console.log("idx");
                }
                );
            }
        }
    }

    function carouselAuto(){
        idx++;
        ulCarousel(-1004,1,4,2000);
    }
    

    // $("#recommend .pre").on("click",function(){
    //  ulCarousel(-1004,1,4,2000);
    // })
    // $("#recommend .next").on("click",function(){
    //  ulCarousel(-1004,1,4,2000);
    // })
}
//渲染猜你喜欢
function makeGL(){
    $.ajax({
        url:"/guessLike",
        type:"get",
        success: function(res){
            var guessLike=res; 
            var source = guessLikeTemplate;
            var template = Handlebars.compile(source);
            var html = template(guessLike);
            $("#guessLike .bottom-ul").html(html); 
        },
        error:function(error){
                    console.log("failed to get guessLike."+error);
                }
    })
}
//渲染品质生活
function makequalityLife(){
    var qualityLife;
    $.ajax({
            url:"/qualityLife",
            type:"get",
            success: function(res){
                qualityLife=res;
                qualityLife.data.left[0].claz='content-1';
                qualityLife.data.left[0].a[0].claz='item';
                qualityLife.data.left[0].a[0].content.claz='tet-con';
                qualityLife.data.left[0].a[1].claz='small-item';
                qualityLife.data.left[0].a[1].content.claz='tet-con';
                qualityLife.data.left[0].a[2].claz='small-item';
                qualityLife.data.left[0].a[2].content.claz='tet-con';
                qualityLife.data.left[1].claz='content-2';
                qualityLife.data.left[1].a[0].claz='item';
                qualityLife.data.left[1].a[0].content.claz='tet-con';
                qualityLife.data.left[1].a[1].claz='small-item';
                qualityLife.data.left[1].a[1].content.claz='tet-con';
                qualityLife.data.left[2].claz='content-3';
                qualityLife.data.left[2].a[0].claz='item';
                qualityLife.data.left[2].a[0].content.claz='tet-con';
                qualityLife.data.left[2].a[1].claz='small-item';
                qualityLife.data.left[2].a[1].content.claz='tet-con';
                qualityLife.data.left[2].a[2].claz='small-item';
                qualityLife.data.left[2].a[2].content.claz='tet-con';
                qualityLife.data.right.claz='content-4';
                qualityLife.data.right.left.claz='left';
                qualityLife.data.right.right.claz='right';
                var source = qualityLifeTemplate;
                var template = Handlebars.compile(source);
                var html = template(qualityLife);
                $("#qualityLife .qL-content").html(html);
            },
            error:function(error){
                    console.log("failed to get qualityLife."+error);
                }
     })
}
//渲染一楼
function rederFloorOne(){
    //一楼左侧
    floor1Left();
    //一楼normal
    floor1Normal();
    //一楼轮播
    floor1Carousel();
    //一楼mains
    floor1mains();
    //一楼品牌
    floor1brands();

    function floor1Left(){
     var floor1Left;
     $.ajax({
            url:"/floor1Left",
            type:"get",
            success: function(res){
                floor1Left=res;
                // floor1Left.top.claz='side-top';
                // floor1Left.top.bkgd.claz='bkgd';
                // floor1Left.top.themes.claz='themes';
                // floor1Left.top.words.claz='words';
                // floor1Left.bottom.claz='side-bottom';
                var source = floor1LeftTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor1Left);
                $("#floor .floor1 .side").html(html);
            },
            error:function(error){
                    console.log("failed to get floor1Left."+error);
                }

        })
 }

 function floor1Normal(){
     var floor1Normal;
     $.ajax({
            url:"/floor1Normal",
            type:"get",
            success: function(res){
                floor1Normal=res;
                floor1Normal.data[0].claz='normal-l';
                $(floor1Normal.data[0].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor1Normal.data[0].content[index]=a;
                });
                floor1Normal.data[0].content[0].claz="l-1";
                floor1Normal.data[0].content[1].claz="l-2";
                floor1Normal.data[0].content[2].claz="l-3";
                floor1Normal.data[0].content[3].claz="l-4";
                floor1Normal.data[0].content[4].claz="l-5";
                floor1Normal.data[0].content[5].claz="l-6";
                floor1Normal.data[1].claz='normal-r';
                $(floor1Normal.data[1].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor1Normal.data[1].content[index]=a;
                });
                floor1Normal.data[1].content[0].claz="r-1";
                floor1Normal.data[1].content[1].claz="r-2";
                floor1Normal.data[1].content[2].claz="r-3";
                var source = floor1NormalTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor1Normal);
                $("#floor .floor1 .main-normal").html(html);
            },
            error:function(error){
                    console.log("failed to get floor1Normal."+error);
                }

        })
 }

 function floor1Carousel(){
        var floor1Carousel;
        $.ajax({
            url:"/floor1Carousel",
            type:"get",
            success: function(res){
                floor1Carousel=res;
                var source = mainImgTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor1Carousel);
                $("#floor .floor1 .m-c-body").html(html);
            },
            error:function(error){
                        console.log("failed to get floor1Carousel."+error);
                    }
        });
 }
 
 function floor1mains(){
        var floor1mains;
        $.ajax({
            url:"/floor1mains",
            type:"get",
            success: function(res){
                floor1mains=res;
                var source = floorMainsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor1mains);
                $("#floor .floor1 .clo-bottom").append(html);
            },
            error:function(error){
                        console.log("failed to get floor1mains."+error);
                    }
        });
 }
 
 function floor1brands(){
        var floor1brands;
        $.ajax({
            url:"/floor1brands",
            type:"get",
            success: function(res){
                floor1brands=res;
                var source = floorsBrandsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor1brands);
                $("#floor .floor1 .brands").append(html);
            },
            error:function(error){
                        console.log("failed to get floor1brands."+error);
                    }
        });
 }
}
//渲染二楼
function rederFloorTwo(){
    //二楼左侧
    floor2Left();
    //二楼normal
    floor2Normal();
    //二楼轮播
    floor2Carousel();
    //二楼mains
    floor2mains();
    //二楼品牌
    floor2brands();
     function floor2Left(){
     var floor2Left;
     $.ajax({
            url:"/floor2Left",
            type:"get",
            success: function(res){
                floor2Left=res;
                // floor1Left.top.claz='side-top';
                // floor1Left.top.bkgd.claz='bkgd';
                // floor1Left.top.themes.claz='themes';
                // floor1Left.top.words.claz='words';
                // floor1Left.bottom.claz='side-bottom';
                var source = floor2LeftTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor2Left);
                $("#floor .floor2 .side").html(html);
            },
            error:function(error){
                    console.log("failed to get floor2Left."+error);
                }

        })
    }

    function floor2Normal(){
        var floor2Normal;
        $.ajax({
            url:"/floor2Normal",
            type:"get",
            success: function(res){
                floor2Normal=res;
                $(floor2Normal.data[0].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor2Normal.data[0].content[index]=a;
                });
                floor2Normal.data[0].content[0].claz="n-1";
                floor2Normal.data[0].content[1].claz="n-2";
                floor2Normal.data[0].content[2].claz="n-3";
                floor2Normal.data[0].content[3].claz="n-4";
                floor2Normal.data[0].content[4].claz="n-5";
                floor2Normal.data[0].content[5].claz="n-6";
                
                var source = floor2NormalTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor2Normal);
                $("#floor .floor2 .main-normal").html(html);
            },
            error:function(error){
                    console.log("failed to get floor2Normal."+error);
                }

        })
    }
    function floor2Carousel(){
        var floor2Carousel;
        $.ajax({
            url:"/floor2Carousel",
            type:"get",
            success: function(res){
                floor2Carousel=res;
                var source = floor2CarouselTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor2Carousel);
                $("#floor .floor2 .m-c-body").html(html);
            },
            error:function(error){
                        console.log("failed to get floor2Carousel."+error);
                    }
        });
    }
    function floor2mains(){
        var floor2mains;
        $.ajax({
            url:"/floor2mains",
            type:"get",
            success: function(res){
                floor2mains=res;
                var source = floorMainsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor2mains);
                $("#floor .floor2 .clo-bottom").append(html);
            },
            error:function(error){
                        console.log("failed to get floor2mains."+error);
                    }
        });
    }
    function floor2brands(){
        var floor2brands;
        $.ajax({
            url:"/floor2brands",
            type:"get",
            success: function(res){
                floor2brands=res;
                var source = floorsBrandsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor2brands);
                $("#floor .floor2 .brands").append(html);
            },
            error:function(error){
                        console.log("failed to get floor2brands."+error);
                    }
        });
    }
}
//渲染三楼
function rederFloorThree(){
    //三楼左侧
    floor3Left();
    //三楼normal
    floor3Normal();
    //三楼轮播
    floor3Carousel();
    //三楼mains
    floor3mains();
    //三楼品牌
    floor3brands();

    function floor3Left(){
        var floor3Left;
        $.ajax({
            url:"/floor3Left",
            type:"get",
            success: function(res){
                floor3Left=res;
                // floor1Left.top.claz='side-top';
                // floor1Left.top.bkgd.claz='bkgd';
                // floor1Left.top.themes.claz='themes';
                // floor1Left.top.words.claz='words';
                // floor1Left.bottom.claz='side-bottom';
                var source = floor3LeftTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor3Left);
                $("#floor .floor3 .side").html(html);
            },
            error:function(error){
                    console.log("failed to get floor3Left."+error);
                }
        })
    }
    function floor3Normal(){
        var floor3Normal;
        $.ajax({
            url:"/floor3Normal",
            type:"get",
            success: function(res){
                floor3Normal=res;
                floor3Normal.data[0].claz='normal-l';
                floor3Normal.data[1].claz='normal-r';
                $(floor3Normal.data[0].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor3Normal.data[0].content[index]=a;
                });
                floor3Normal.data[0].content[0].claz="l-1";
                floor3Normal.data[0].content[1].claz="l-2";
                $(floor3Normal.data[1].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor3Normal.data[1].content[index]=a;
                });
                floor3Normal.data[1].content[0].claz="l-1";
                floor3Normal.data[1].content[1].claz="l-2";
                floor3Normal.data[1].content[2].claz="l-3";
                floor3Normal.data[1].content[3].claz="l-4";
                floor3Normal.data[1].content[4].claz="l-5";
                floor3Normal.data[1].content[5].claz="l-6";
                
                var source = floor1NormalTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor3Normal);
                $("#floor .floor3 .main-normal").html(html);
            },
            error:function(error){
                    console.log("failed to get floor3Normal."+error);
                }

        })
    }
    function floor3Carousel(){
        var floor3Carousel;
        $.ajax({
            url:"/floor3Carousel",
            type:"get",
            success: function(res){
                floor3Carousel=res;
                var source = mainImgTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor3Carousel);
                $("#floor .floor3 .m-c-body").html(html);
            },
            error:function(error){
                        console.log("failed to get floor3Carousel."+error);
                    }
        });
    }
    function floor3mains(){
        var floor3mains;
        $.ajax({
            url:"/floor3mains",
            type:"get",
            success: function(res){
                floor3mains=res;
                var source = floorMainsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor3mains);
                $("#floor .floor3 .clo-bottom").append(html);
            },
            error:function(error){
                        console.log("failed to get floor3mains."+error);
                    }
        });
    }
    function floor3brands(){
        var floor3brands;
        $.ajax({
            url:"/floor3brands",
            type:"get",
            success: function(res){
                floor3brands=res;
                var source = floorsBrandsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor3brands);
                $("#floor .floor3 .brands").append(html);
            },
            error:function(error){
                        console.log("failed to get floor3brands."+error);
                    }
        });
    }
}
//渲染四楼
function rederFloorFour(){
    //四楼左侧
    floor4Left();
    //四楼normal
    floor4Normal();
    //四楼轮播
    floor4Carousel();
    //四楼mains
    floor4mains();
    //四楼品牌
    floor4brands();

    function floor4Left(){
        var floor4Left;
        $.ajax({
            url:"/floor4Left",
            type:"get",
            success: function(res){
                floor4Left=res;
                // floor1Left.top.claz='side-top';
                // floor1Left.top.bkgd.claz='bkgd';
                // floor1Left.top.themes.claz='themes';
                // floor1Left.top.words.claz='words';
                // floor1Left.bottom.claz='side-bottom';
                var source = floor4LeftTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor4Left);
                $("#floor .floor4 .side").html(html);
            },
            error:function(error){
                    console.log("failed to get floor4Left."+error);
                }

        })
    }
    function floor4Normal(){
        var floor4Normal;
        $.ajax({
            url:"/floor4Normal",
            type:"get",
            success: function(res){
                floor4Normal=res;
                floor4Normal.data[0].claz='normal-l';
                floor4Normal.data[1].claz='normal-r';
                $(floor4Normal.data[0].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor4Normal.data[0].content[index]=a;
                });
                floor4Normal.data[0].content[0].claz="l-1";
                floor4Normal.data[0].content[1].claz="l-2";
                $(floor4Normal.data[1].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor4Normal.data[1].content[index]=a;
                });
                floor4Normal.data[1].content[0].claz="l-1";
                floor4Normal.data[1].content[1].claz="l-2";
                floor4Normal.data[1].content[2].claz="l-3";
                floor4Normal.data[1].content[3].claz="l-4";
                floor4Normal.data[1].content[4].claz="l-5";
                floor4Normal.data[1].content[5].claz="l-6";
                
                var source = floor1NormalTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor4Normal);
                $("#floor .floor4 .main-normal").html(html);
            },
            error:function(error){
                    console.log("failed to get floor4Normal."+error);
                }

        })
    }
    function floor4Carousel(){
        var floor4Carousel;
        $.ajax({
            url:"/floor4Carousel",
            type:"get",
            success: function(res){
                floor4Carousel=res;
                var source = mainImgTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor4Carousel);
                $("#floor .floor4 .m-c-body").html(html);
            },
            error:function(error){
                        console.log("failed to get floor4Carousel."+error);
                    }
        });
    }
    function floor4mains(){
        var floor4mains;
        $.ajax({
            url:"/floor4mains",
            type:"get",
            success: function(res){
                floor4mains=res;
                var source = floorMainsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor4mains);
                $("#floor .floor4 .clo-bottom").append(html);
            },
            error:function(error){
                        console.log("failed to get floor4mains."+error);
                    }
        });
    }
    function floor4brands(){
        var floor4brands;
        $.ajax({
            url:"/floor4brands",
            type:"get",
            success: function(res){
                floor4brands=res;
                var source = floorsBrandsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor4brands);
                $("#floor .floor4 .brands").append(html);
            },
            error:function(error){
                        console.log("failed to get floor4brands."+error);
                    }
        });
    }
}
//渲染五楼
function rederFloorFive(){
    //五楼左侧
    floor5Left();
    //五楼normal
    floor5Normal();
    //五楼轮播
    floor5Carousel();
    //五楼mains
    floor5mains();
    //五楼品牌
    floor5brands();

    function floor5Left(){
        var floor5Left;
        $.ajax({
            url:"/floor5Left",
            type:"get",
            success: function(res){
                floor5Left=res;
                // floor1Left.top.claz='side-top';
                // floor1Left.top.bkgd.claz='bkgd';
                // floor1Left.top.themes.claz='themes';
                // floor1Left.top.words.claz='words';
                // floor1Left.bottom.claz='side-bottom';
                var source = floor5LeftTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor5Left);
                $("#floor .floor5 .side").html(html);
            },
            error:function(error){
                    console.log("failed to get floor5Left."+error);
                }

        })
    }
    function floor5Normal(){
        var floor5Normal;
        $.ajax({
            url:"/floor5Normal",
            type:"get",
            success: function(res){
                floor5Normal=res;
                floor5Normal.data[0].claz='normal-l';
                floor5Normal.data[1].claz='normal-r';
                $(floor5Normal.data[0].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor5Normal.data[0].content[index]=a;
                });
                floor5Normal.data[0].content[0].claz="l-1";
                floor5Normal.data[0].content[1].claz="l-2";
                $(floor5Normal.data[1].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor5Normal.data[1].content[index]=a;
                });
                floor5Normal.data[1].content[0].claz="l-1";
                floor5Normal.data[1].content[1].claz="l-2";
                floor5Normal.data[1].content[2].claz="l-3";
                floor5Normal.data[1].content[3].claz="l-4";
                floor5Normal.data[1].content[4].claz="l-5";
                floor5Normal.data[1].content[5].claz="l-6";
                
                var source = floor1NormalTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor5Normal);
                $("#floor .floor5 .main-normal").html(html);
            },
            error:function(error){
                    console.log("failed to get floor5Normal."+error);
                }

        })
    }
    function floor5Carousel(){
        var floor5Carousel;
        $.ajax({
            url:"/floor5Carousel",
            type:"get",
            success: function(res){
                floor5Carousel=res;
                var source = mainImgTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor5Carousel);
                $("#floor .floor5 .m-c-body").html(html);
            },
            error:function(error){
                        console.log("failed to get floor5Carousel."+error);
                    }
        });
    }
    function floor5mains(){
        var floor5mains;
        $.ajax({
            url:"/floor5mains",
            type:"get",
            success: function(res){
                floor5mains=res;
                var source = floorMainsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor5mains);
                $("#floor .floor5 .clo-bottom").append(html);
            },
            error:function(error){
                        console.log("failed to get floor5mains."+error);
                    }
        });
    }
    function floor5brands(){
                var floor5brands;
                $.ajax({
                    url:"/floor5brands",
                    type:"get",
                    success: function(res){
                        floor5brands=res;
                        var source = floorsBrandsTemplate;
                        var template = Handlebars.compile(source);
                        var html = template(floor5brands);
                        $("#floor .floor5 .brands").append(html);
                    },
                    error:function(error){
                                console.log("failed to get floor5brands."+error);
                            }
                });
         }

}
//渲染六楼
function rederFloorSix(){
    //六楼左侧
    floor6Left();
    //六楼normal
    floor6Normal();
    //六楼轮播
    floor6Carousel();
    //六楼mains
    floor6mains();
    //六楼品牌
    floor6brands();

    function floor6Left(){
        var floor6Left;
        $.ajax({
            url:"/floor6Left",
            type:"get",
            success: function(res){
                floor6Left=res;
                // floor1Left.top.claz='side-top';
                // floor1Left.top.bkgd.claz='bkgd';
                // floor1Left.top.themes.claz='themes';
                // floor1Left.top.words.claz='words';
                // floor1Left.bottom.claz='side-bottom';
                var source = floor6LeftTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor6Left);
                $("#floor .floor6 .side").html(html);
            },
            error:function(error){
                    console.log("failed to get floor6Left."+error);
                }

        })
    }
    function floor6Normal(){
        var floor6Normal;
        $.ajax({
            url:"/floor6Normal",
            type:"get",
            success: function(res){
                floor6Normal=res;
                $(floor6Normal.data[0].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor6Normal.data[0].content[index]=a;
                });
                floor6Normal.data[0].content[0].claz="n-1";
                floor6Normal.data[0].content[1].claz="n-2";
                floor6Normal.data[0].content[2].claz="n-3";
                floor6Normal.data[0].content[3].claz="n-4";
                floor6Normal.data[0].content[4].claz="n-5";
                floor6Normal.data[0].content[5].claz="n-6";
                
                var source = floor2NormalTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor6Normal);
                $("#floor .floor6 .main-normal").html(html);
            },
            error:function(error){
                    console.log("failed to get floor6Normal."+error);
                }

        })
    }
    function floor6Carousel(){
        var floor6Carousel;
        $.ajax({
            url:"/floor6Carousel",
            type:"get",
            success: function(res){
                floor6Carousel=res;
                var source = floor2CarouselTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor6Carousel);
                $("#floor .floor6 .m-c-body").html(html);
            },
            error:function(error){
                        console.log("failed to get floor6Carousel."+error);
                    }
        });
    }
    function floor6mains(){
        var floor6mains;
        $.ajax({
            url:"/floor6mains",
            type:"get",
            success: function(res){
                floor6mains=res;
                var source = floorMainsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor6mains);
                $("#floor .floor6 .clo-bottom").append(html);
            },
            error:function(error){
                        console.log("failed to get floor6mains."+error);
                    }
        });
    }
    function floor6brands(){
        var floor6brands;
        $.ajax({
            url:"/floor6brands",
            type:"get",
            success: function(res){
                floor6brands=res;
                var source = floorsBrandsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor6brands);
                $("#floor .floor6 .brands").append(html);
            },
            error:function(error){
                        console.log("failed to get floor6brands."+error);
                    }
        });
    }
}
//渲染七楼
function rederFloorSeven(){
    //七楼左侧
    floor7Left();
    //七楼normal
    floor7Normal();
    //七楼轮播
    floor7Carousel();
    //七楼mains
    floor7mains();
    //七楼品牌
    floor7brands();

    function floor7Left(){
        var floor7Left;
        $.ajax({
            url:"/floor7Left",
            type:"get",
            success: function(res){
                floor7Left=res;
                // floor1Left.top.claz='side-top';
                // floor1Left.top.bkgd.claz='bkgd';
                // floor1Left.top.themes.claz='themes';
                // floor1Left.top.words.claz='words';
                // floor1Left.bottom.claz='side-bottom';
                var source = floor7LeftTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor7Left);
                $("#floor .floor7 .side").html(html);
            },
            error:function(error){
                    console.log("failed to get floor7Left."+error);
                }

        })
    }
    function floor7Normal(){
        var floor7Normal;
        $.ajax({
            url:"/floor7Normal",
            type:"get",
            success: function(res){
                floor7Normal=res;
                $(floor7Normal.data[0].content).each(function(index,element){
                     a={};
                     a.content=element;
                     floor7Normal.data[0].content[index]=a;
                });
                floor7Normal.data[0].content[0].claz="n-1";
                floor7Normal.data[0].content[1].claz="n-2";
                floor7Normal.data[0].content[2].claz="n-3";
                floor7Normal.data[0].content[3].claz="n-4";
                floor7Normal.data[0].content[4].claz="n-5";
                floor7Normal.data[0].content[5].claz="n-6";
                
                var source = floor2NormalTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor7Normal);
                $("#floor .floor7 .main-normal").html(html);
            },
            error:function(error){
                    console.log("failed to get floor7Normal."+error);
                }

        })
    }
    function floor7Carousel(){
        var floor7Carousel;
        $.ajax({
            url:"/floor7Carousel",
            type:"get",
            success: function(res){
                floor7Carousel=res;
                var source = floor2CarouselTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor7Carousel);
                $("#floor .floor7 .m-c-body").html(html);
            },
            error:function(error){
                        console.log("failed to get floor7Carousel."+error);
                    }
        });
    }
    function floor7mains(){
        var floor7mains;
        $.ajax({
            url:"/floor7mains",
            type:"get",
            success: function(res){
                floor7mains=res;
                var source = floorMainsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor7mains);
                $("#floor .floor7 .clo-bottom").append(html);
            },
            error:function(error){
                        console.log("failed to get floor7mains."+error);
                    }
        });
    }
    function floor7brands(){
        var floor7brands;
        $.ajax({
            url:"/floor7brands",
            type:"get",
            success: function(res){
                floor7brands=res;
                var source = floorsBrandsTemplate;
                var template = Handlebars.compile(source);
                var html = template(floor7brands);
                $("#floor .floor7 .brands").append(html);
            },
            error:function(error){
                        console.log("failed to get floor7brands."+error);
                    }
        });
    }
}


// 为头部中我的京东，关注京东，客户服务，网站导航 绑定事件
function headerEvent(){
    // 头部 我的京东 绑定事件
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

    // 为头部的 关注京东 绑定事件
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

    // 为头部的 客户服务 绑定事件
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

        // 为头部中 网站导航 绑定事件
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
}
// 为search中我的购物车绑定事件
function shopCartEvent(){
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
}
// 绑定事件。table选项卡的切换
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
function glisten(){
    $("body").on("mouseover","#floor .side-top .bkgd",function(){
        var self=$(this);
        self.find("i").animate({
            left:'411px'
        },500,function(){
            self.find("i").css({"left":"-150px"})
        });
    })
}
//各个楼层设置轮播效果
function floorCarousel(){
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
        //  clearInterval(handle);
        //  var num=$(this).attr("data-index");
        //  idx=num;
        //  ulCarousel(offsetWidth,min,max,time);
        // })
        // buttons.on("mouseout",function(){
        //  handle=setInterval(carouselAuto,1500);
        // })
        // mainCarousel.find(".pre").on("click",function(){
        //  console.log("1111");
        //  clearInterval(handle);
        //  idx--;
        //  ulCarousel(offsetWidth,min,max,time);
        //  handle=setInterval(carouselAuto,1500);
        // })
        // mainCarousel.find(".next").on("click",function(){
        //  console.log("2222");
        //  clearInterval(handle);
        //  idx++;
        //  ulCarousel(offsetWidth,min,max,time);
        //  handle=setInterval(carouselAuto,1500);
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
}

 })(jQuery);
