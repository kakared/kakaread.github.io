$(document).ready(function () {
var mySwiper = new Swiper('.swiper-container', {
    spaceBetween: 20,
    slidesPerView: 1.2,
})

var mySwiper2 = new Swiper('#describtionSwiper', {
    slidesPerView: 4, 
    spaceBetween: 30,
    noSwiping : true,
    //设置断点宽度
    breakpoints: {
        768: {
            slidesPerView: 2.2,//取消width，恢复自适应
            noSwiping : false,
            spaceBetween: 5,
        },
        //窗口缩放时设置width
        on: {
            resize: function () {
                this.params.width = window.innerWidth;
                this.update();
            },
        },
    }
})

})

var bannerHeight = $("#banner").height();
if(bannerHeight){
    $("#qrCode").css("height",bannerHeight)
}


function toOther(i){
    if(i==1){
        window.location.href = "www.baidu.com"
    }
}

function toList(i) {
    window.location.href = "list/list-" + i + ".html"
}

function toInfo(i) {
    window.location.href = "../info/info-" + i + ".html"
}