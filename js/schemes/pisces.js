// build time:Mon Sep 16 2019 18:06:40 GMT+0800 (GMT+08:00)
$(document).ready(function(){var t=$(".sidebar-inner");var i=CONFIG.sidebar.offset||12;function e(){return $(".header-inner").height()+i}function o(){var t=$("#footer");var i=$(".footer-inner");var e=t.outerHeight()-i.outerHeight();var o=t.outerHeight()+e;return o}function a(){var a=e();var f=o();t.affix({offset:{top:a-i,bottom:f}});t.affix("checkPosition");$("#sidebar").css({"margin-top":a,"margin-left":"auto"})}function f(){$(window).off(".affix");t.removeData("bs.affix").removeClass("affix affix-top affix-bottom");a()}function r(){var t=window.matchMedia("(min-width: 992px)");t.addListener(function(t){if(t.matches){f()}})}a();r()});
//rebuild by neat 