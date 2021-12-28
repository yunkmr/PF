// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


$(".l-app_navigation").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".l-app_navigation").toggleClass('menu-active-complete');//ナビゲーションにmenu-active-completeクラスを付与
    $(".l-menu-title").toggleClass('menu-active-complete');
    $(".l-menu-contents").toggleClass('menu-active-complete');
});

$(".l-menu-index a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".l-app_navigation").removeClass('active');//ボタンの activeクラスを除去し
    $(".l-app_navigation").removeClass('menu-active-complete');//ナビゲーションのmenu-active-completeクラスも除去
    $(".l-menu-title").removeClass('menu-active-complete');
    $(".l-menu-contents").removeClass('menu-active-complete');
});