var adressTemplate = ['{{#each data}}',
						'<div><a href="#">{{this}}</a></div>',
					 '{{/each}}'].join(" ");

var promptsTemplate = ['{{#each data}}',
						'<li><a href="#">{{this}}</a></li>',
					 '{{/each}}'].join(" ");

var mainImgTemplate = ['{{#each data}}',
						'<li><a href="#"><img src="{{this}}"></a></li>',
					 '{{/each}}'].join(" ");

var jdkbTemplate = ['{{#each data}}',
						'<li><a href="#"><span>{{this.title}}</span>{{this.content}}</a></li>',
					 '{{/each}}'].join(" ");

var guessLikeTemplate=['{{#each data}}',
						'<li>',
                        '<div><a href="#"><img src="{{src}}"></a></div>',
                        '<div><a href="#">{{name}}</a><span><i>￥</i>{{price}}</span></div>',
						'</li>',
					    '{{/each}}'].join(" ");
var qualityLifeTemplate = ['{{#each data.left}}',
                             '<div class="{{claz}}">',
                                 '{{#each a}}',
                                     '<a href="#" class="{{claz}}">',
                                         '<p>{{title}}</p>',
                                         '<div class="tet-con">',
                                         '{{#each content.p}}',
                                         '<p>{{this}}</p>',
                                         '{{/each}}',   
                                         '</div>',
                                         '<img src="{{img}}">',
                                     '</a>',
                                 '{{/each}}',
                              '</div>',
                            '{{/each}}',
                            '<div class="{{data.right.claz}}">',
                                '<div class="{{data.right.left.claz}}">',
                                '<ul>',
                                    '{{#each data.right.left.src}}',
                                         '<li><a href="#"><img src="{{this}}"></a></li>',
                                    '{{/each}}',
                                '</ul>',
                                '</div>',
                                '<div class="{{data.right.right.claz}}">',
                                '<ul>',
                                    '{{#each data.right.right.src}}',
                                         '<li><a href="#"><img src="{{this}}"></a></li>',
                                    '{{/each}}',
                                '</ul>',
                                '</div>',
                            '</div>'
                          ].join(" ");


Handlebars.registerHelper('compare', function(left, operator, right, options) {
         if (arguments.length < 3) {
           throw new Error('Handlerbars Helper "compare" needs 2 parameters');
         }
         var operators = {
           '==':     function(l, r) {return l == r; },
           '===':    function(l, r) {return l === r; },
           '!=':     function(l, r) {return l != r; },
           '!==':    function(l, r) {return l !== r; },
           '<':      function(l, r) {return l < r; },
           '>':      function(l, r) {return l > r; },
           '<=':     function(l, r) {return l <= r; },
           '>=':     function(l, r) {return l >= r; },
           'typeof': function(l, r) {return typeof l == r; }
         };
         if (!operators[operator]) {
           throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
         }
         var result = operators[operator](left, right);
         if (result) {
           return options.fn(this);
         } else {
           return options.inverse(this);
         }
     });

var floor1LeftTemplate = ['<div class="side-top" style="width:330px;">',
                               '<div class="bkgd">',
                                     '<i></i>',
                                     '<a href="#"><img src="{{top.bkgd.img}}"></a>',
                               '</div>',
                               '<ul class="themes">',
                                      '{{#each top.themes.content}}',
                                            '<li><a href="#"><i class="icon"></i><span>{{this}}</span></a></li>',
                                      '{{/each}}',
                               '</ul>',
                               '<ul class="words">',
                                       '<li>',
                                            '{{#each top.words.left}}',
                                                 '{{#compare this "==" "潮流女装"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "精品男装"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                                       '<li>',
                                            '{{#each top.words.right}}',
                                                 '{{#compare this "==" "水晶手链"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "奢品名表"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                               '</ul>',
                         '</div>',
                         '<div class="side-bottom"><a href="#"><img src="{{bottom.img}}"></a></div>'].join(" ");



var floor1NormalTemplate = ['{{#each data}}',
                                 '<ul class="{{claz}}">',
                                       '{{#each content}}',
                                             '<li class="{{claz}}"><a href="#"><img src="{{content}}"></a></li>',
                                       '{{/each}}',
                                 '</ul>',
                           '{{/each}}'].join(" ");


var floor2LeftTemplate = ['<div class="side-top" style="width:210px;">',
                               '<div class="bkgd">',
                                     '<i></i>',
                                     '<a href="#"><img src="{{top.bkgd.img}}"></a>',
                               '</div>',
                               '<ul class="themes">',
                                      '{{#each top.themes.content}}',
                                            '<li><a href="#"><i class="icon"></i><span>{{this}}</span></a></li>',
                                      '{{/each}}',
                               '</ul>',
                               '<ul class="assists">',
                               '{{#each top.assists.content}}',
                                    '<li>',
                                        '<a href="#">{{this}}</a>',
                                        '<i>></i>',
                                    '</li>',
                                '{{/each}}',
                              '</ul>',
                               '<ul class="words">',
                                       '<li>',
                                            '{{#each top.words.content}}',
                                                 '{{#compare this "==" "国际馆"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "清洁管"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                               '</ul>',
                         '</div>'].join(" ");

var floor2NormalTemplate = [     '{{#each data}}',
                                 '<ul>',
                                       '{{#each content}}',
                                             '<li class="{{claz}}"><a href="#"><img src="{{content}}"></a></li>',
                                       '{{/each}}',
                                 '</ul>',
                           '{{/each}}'].join(" "); 

var floor2CarouselTemplate =    ['{{#each data}}',
                                   '<li>',
                                   '{{#each this}}',
                                          '<a href="#"><img src="{{this}}"></a>',
                                   '{{/each}}',
                                   '</li>',
                              '{{/each}}'].join(" ");                  

var floor3LeftTemplate = ['<div class="side-top" style="width:330px;">',
                               '<div class="bkgd">',
                                     '<i></i>',
                                     '<a href="#"><img src="{{top.bkgd.img}}"></a>',
                               '</div>',
                               '<ul class="themes">',
                                      '{{#each top.themes.content}}',
                                            '<li><a href="#"><i class="icon"></i><span>{{this}}</span></a></li>',
                                      '{{/each}}',
                               '</ul>',
                               '<ul class="assists">',
                               '{{#each top.assists.content}}',
                                    '<li>',
                                        '<a href="#">{{this}}</a>',
                                        '<i>></i>',
                                    '</li>',
                                '{{/each}}',
                              '</ul>',
                               '<ul class="words">',
                                       '<li>',
                                            '{{#each top.words.left}}',
                                                 '{{#compare this "==" "以旧换新"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "双卡双待"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                                       '<li>',
                                            '{{#each top.words.right}}',
                                                 '{{#compare this "==" "4G套餐"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "低至五折"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                               '</ul>',
                         '</div>'].join(" ");
var floor4LeftTemplate = ['<div class="side-top" style="width:330px;">',
                               '<div class="bkgd">',
                                     '<i></i>',
                                     '<a href="#"><img src="{{top.bkgd.img}}"></a>',
                               '</div>',
                               '<ul class="themes">',
                                      '{{#each top.themes.content}}',
                                            '<li><a href="#"><i class="icon"></i><span>{{this}}</span></a></li>',
                                      '{{/each}}',
                               '</ul>',
                               '<ul class="assists">',
                               '{{#each top.assists.content}}',
                                    '<li>',
                                        '<a href="#">{{this}}</a>',
                                        '<i>></i>',
                                    '</li>',
                                '{{/each}}',
                              '</ul>',
                               '<ul class="words">',
                                       '<li>',
                                            '{{#each top.words.left}}',
                                                 '{{#compare this "==" "曲面电视"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "滚筒洗衣机"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                                       '<li>',
                                            '{{#each top.words.right}}',
                                                 '{{#compare this "==" "IH电饭煲"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "纯水净水器"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                               '</ul>',
                         '</div>'].join(" ");
var floor5LeftTemplate = ['<div class="side-top" style="width:330px;">',
                               '<div class="bkgd">',
                                     '<i></i>',
                                     '<a href="#"><img src="{{top.bkgd.img}}"></a>',
                               '</div>',
                               '<ul class="themes">',
                                      '{{#each top.themes.content}}',
                                            '<li><a href="#"><i class="icon"></i><span>{{this}}</span></a></li>',
                                      '{{/each}}',
                               '</ul>',
                               '<ul class="assists">',
                               '{{#each top.assists.content}}',
                                    '<li>',
                                        '<a href="#">{{this}}</a>',
                                        '<i>></i>',
                                    '</li>',
                                '{{/each}}',
                              '</ul>',
                               '<ul class="words">',
                                       '<li>',
                                            '{{#each top.words.left}}',
                                                 '{{#compare this "==" "小新Air Pro"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "3D投影电视"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                                       '<li>',
                                            '{{#each top.words.right}}',
                                                 '{{#compare this "==" "相机大促"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "小新Air Pro"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                               '</ul>',
                         '</div>'].join(" "); 
var floor6LeftTemplate = ['<div class="side-top" style="width:210px;">',
                               '<div class="bkgd">',
                                     '<i></i>',
                                     '<a href="#"><img src="{{top.bkgd.img}}"></a>',
                               '</div>',
                               '<ul class="themes">',
                                      '{{#each top.themes.content}}',
                                            '<li><a href="#"><i class="icon"></i><span>{{this}}</span></a></li>',
                                      '{{/each}}',
                               '</ul>',
                               '<ul class="assists">',
                               '{{#each top.assists.content}}',
                                    '<li>',
                                        '<a href="#">{{this}}</a>',
                                        '<i>></i>',
                                    '</li>',
                                '{{/each}}',
                              '</ul>',
                               '<ul class="words">',
                                       '<li>',
                                            '{{#each top.words.content}}',
                                                 '{{#compare this "==" "户外馆"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "羽毛球拍"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                               '</ul>',
                         '</div>'].join(" ");  
 var floor7LeftTemplate = ['<div class="side-top" style="width:210px;">',
                               '<div class="bkgd">',
                                     '<i></i>',
                                     '<a href="#"><img src="{{top.bkgd.img}}"></a>',
                               '</div>',
                               '<ul class="themes">',
                                      '{{#each top.themes.content}}',
                                            '<li><a href="#"><i class="icon"></i><span>{{this}}</span></a></li>',
                                      '{{/each}}',
                               '</ul>',
                               '<ul class="assists">',
                               '{{#each top.assists.content}}',
                                    '<li>',
                                        '<a href="#">{{this}}</a>',
                                        '<i>></i>',
                                    '</li>',
                                '{{/each}}',
                              '</ul>',
                               '<ul class="words">',
                                       '<li>',
                                            '{{#each top.words.content}}',
                                                 '{{#compare this "==" "地板"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '{{#compare this "==" "收纳"}}',
                                                 '<a href="#"><span>{{this}}</span></a>',
                                                 '{{else}}',
                                                 '<a href="#">{{this}}</a>',
                                                 '{{/compare}}',
                                                 '{{/compare}}',
                                            '{{/each}}',
                                       '</li>',
                               '</ul>',
                         '</div>'].join(" ");                                                                                                

var floorMainsTemplate = ['{{#each data}}',
                                 '<div class="main" style="display:none;">',
                                      '<ul class="main-top">',
                                           '{{#each main.top.content}}',
                                                 '<li><a href="#"><div><img src="{{img.cont}}"></div><p class="name">{{name.cont}}</p><p class="price">{{price.cont}}</p></a></li>',
                                           '{{/each}}',
                                      '</ul>',
                                      '{{#if main.bottom}}',
                                      '<ul class="main-bottom">',
                                           '{{#each main.bottom.content}}',
                                                '<li><a href="#"><img src="{{this}}"></a></li>',
                                           '{{/each}}',
                                      '</ul>',
                                      '{{/if}}',
                                 '</div>',
                         '{{/each}}'].join(" ");
var floorsBrandsTemplate=[
                          '<ul>',
                              '{{#each data}}',
                              '<li><a href="#"><img src="{{this}}"></a></li>',
                              '{{/each}}',
                          '</ul>'
                          ].join(" ");