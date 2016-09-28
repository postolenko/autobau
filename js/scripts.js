$(document).ready(function() {

    //   preload
    // $(window).on('load', function () {

    //     setTimeout(function() {

    //         $(".preload-bg").fadeOut(500);

    //     }, 700);
  

    // });


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        var indexInput;

        $(".search-form-box").click(function() {

            indexInput = $(".search-form-box").index(this);

            $(".search-form-box:eq("+ indexInput +") .search-form").addClass("active");

        });

    });


    // ---------------------------------------------------------

    //  Для Табов
    // Определние активного таба при загрузке страницы

    $(function() {

        var countItemsTabMenuFor;
        var countItemsTabMenu = $(".card_tab_link").length - 1;

        var dataAttrTab;

        for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

                if( $(".card_tab_link:eq("+ countItemsTabMenuFor +")").hasClass("active") ) {

                    dataAttrTab = $(".card_tab_link:eq("+ countItemsTabMenuFor +")").attr("for");

                    for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

                        if ( $(".card_tab:eq("+ countItemsTabMenuFor +")").attr("id") == dataAttrTab ) {

                            $(".card_tab:eq("+ countItemsTabMenuFor +")").addClass("active");

                        }

                    }

                }

        }


        $(".card_tab_link").click(function() {

            if( !$(this).hasClass("active") ) {

                $(".card_tab").removeClass("active");

                $(".card_tab_link").not($(this)).removeClass("active");                             

                $(this).toggleClass("active");

            }

        });

    });

// ---------------------------------------------------------

    var indexProductPhoto;
    var imgSrcAttr;

    $(function() {

        $(".slider-big .zoom-btn").click(function() {

            $(".preview-box").fadeIn(300);

            indexProductPhoto = $(".slider-big .zoom-btn").index(this);

            imgSrcAttr = $(".slider-big > div img:eq("+ indexProductPhoto +")").attr("src");

            $(".preview-box img").attr("src", imgSrcAttr);

        });

        $(".preview-box .close-btn, .preview-box .preview-bg").click(function() {

            $(".preview-box").fadeOut(300);

        });

    });


});
