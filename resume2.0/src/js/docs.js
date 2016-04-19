$(function() {
    $(window).bind('scroll', function() {

        if ($(window).scrollTop() > 50) {
            $('.naver').addClass('docs-naver-fixed');
        } else {
            $('.naver').removeClass('docs-naver-fixed');
        }
    });
    $('#btnDown').click(function() {
        open("http://www.vastskycc.com/resume.doc");
    });
    $('#page3 .info_text_2').hover(function () {
    	$(this).children().removeClass('hidden')
    },function () {
    	$(this).children().addClass('hidden')
    });
    console.log("bootstrap和scrollify.js布的局，gulp打包合并压缩，主流移动端显示还行（触摸滚动没做），桌面小于21寸效果没问题，再大没测；");
console.log("自己demo做也做了一些，不过感觉都是商场首页程度的东西，就不拿出来了，能说道的也只有跟着敲了遍jq;");
console.log("犀牛书红皮书看的差不多了，也开始系统的补习html+css；");
console.log("没了，2016年3月8日22:43:22.");
// console.log($("#page1 img").css("margin-left"));
console.log($("#btn").text());
});
