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

//= require jquery
//= require popper
//= require bootstrap-sprockets

//= require moment
//= require fullcalendar

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//アコーディオンをクリックした時の動作
$(document).on('turbolinks:load', function() {
  $('.l-menu-index_page-title').on('click', function() {//タイトル要素をクリックしたら
    $('.l-menu-index_section-list').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる

    var findElm = $(this).next(".l-menu-index_section-list");//タイトル直後のアコーディオンを行うエリアを取得

    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去
    }else{//それ以外は
      $('.close').removeClass('close'); //クラス名closeを全て除去した後
      $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
      $(findElm).slideDown(500);//アコーディオンを開く
    }

    $(".l-app_navigation").toggleClass('menu-active-complete');
    $(".l-menu-title").toggleClass('menu-active-complete');
    $(".l-menu-contents").toggleClass('menu-active-complete');

  });
});

$(document).on('turbolinks:load', function() {
  $(".l-app_navigation").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $(".l-app_navigation").toggleClass('menu-active-complete');//ナビゲーションにmenu-active-completeクラスを付与
      $(".l-menu-title").toggleClass('menu-active-complete');
      $(".l-menu-contents").toggleClass('menu-active-complete');
  });

  // $(".l-menu-index a").click(function () {//ナビゲーションのリンクがクリックされたら
  //     $(".l-app_navigation").removeClass('active');//ボタンの activeクラスを除去し
  //     $(".l-app_navigation").removeClass('menu-active-complete');//ナビゲーションのmenu-active-completeクラスも除去
  //     $(".l-menu-title").removeClass('menu-active-complete');
  //     $(".l-menu-contents").removeClass('menu-active-complete');
  // });

  // $(".l-menu-index_section-link").click(function () {//ナビゲーションのリンクがクリックされたら
  //     $(".l-app_navigation").removeClass('active');//ボタンの activeクラスを除去し
  //     $(".l-app_navigation").removeClass('menu-active-complete');//ナビゲーションのmenu-active-completeクラスも除去
  //     $(".l-menu-title").removeClass('menu-active-complete');
  //     $(".l-menu-contents").removeClass('menu-active-complete');
  // });
});


$(function () {
    $(document).on('turbolinks:load', function () {
        function eventCalendar() {
            return $('#calendar').fullCalendar({});
        };
        function clearCalendar() {
            $('#calendar').html('');
        };
        $(document).on('turbolinks:load', function () {
          eventCalendar();
        });
        $(document).on('turbolinks:before-cache', clearCalendar);
        //以下を追加
        $('#calendar').fullCalendar({
          events: '/seminars.json'
        });
    });
});