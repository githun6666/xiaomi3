/**
 * Created by Administrator on 2017/7/11 0011.
 */
$(document).ready(function () {
    $("#shopcart").mousemove(function () {
        $(".shopping-cart").stop().slideDown(50)
        $("#shopcart").css({"color":"orange","background":"#fff"})
    })
    $(".shopping-cart").mousemove(function () {
        $(this).stop().slideDown(50)
        $("#shopcart").css({"color":"orange","background":"#fff"})
    })
    $(".shopping-cart").mouseout(function () {
        $(this).stop().slideUp(50)
        $("#shopcart").css({"color":" #8B988D","background":"#424242"})
    })
    $("#shopcart").mouseout(function () {
        $(".shopping-cart").stop().slideUp(50)
        $("#shopcart").css({"color":" #8B988D","background":"#424242"})
    })
    $("#banner_nav li").mousemove(function () {
        $(this).css({"background":"orange"}).siblings().css({"background":"rgba(26,26,26,0)"})
    })
    $("#banner_nav li").mouseout(function () {
        $(this).css({"background":"rgba(26,26,26,0)"})
    })
    $(".box_nav li").hover(function () {
        $(this).css({"color":"#FF6709","cursor":"pointer"}).siblings().css({"color":"rgba(26,26,26,1)"})
    })
    $(".box_nav .box_navxiala").mousemove(function () {
    $("#boxnav_cont").stop().slideDown(50)
    })
    $(".box_nav li").mouseout(function () {
        $("#boxnav_cont").stop().slideUp()
    })
    $('#nav_ul li').mouseover(function () {
        $(this).find('a').css({'color':'#ffffff'}).parent().siblings().find('a').css({'color':'#B0B0B0'})
    })
    $('#nav_ul li').mouseout(function () {
        $(this).find('a').css({'color':'#B0B0B0'})
    })
    $('#r-boxUl li').mouseover(function () {
        $(this).find('a').css({'color':'#ffffff'}).parent().siblings().find('a').css({'color':'#B0B0B0'})
    })
    $('#r-boxUl li').mouseout(function () {
        $(this).find('a').css({'color':'#B0B0B0'})
    })
    for(var i=0;i< $(".box_nav li").length;i++){
    	var aaa=$(".box_nav li").eq(i).index()
    	$(".box_nav li").eq(aaa).mousemove(function(){
        var ind=$(this).index()
        $("#boxnav_cont ul").eq(ind).css({"display":"block"}).siblings().css({"display":"none"})
    		return;
    	})
    }
    $("#boxnav_cont ul").mousemove(function () {
        $("#boxnav_cont").stop().slideDown(100)
        $(this).css({"display":"block"})
    })
    $("#boxnav_cont ul").mouseout(function () {
        $("#boxnav_cont").stop().slideUp(100)
        $(this).css({"display":"none"})
    })
})