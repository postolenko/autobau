$(document).ready(function() {


    $(window).resize(function() {


        $(function() {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        });

        // getMainNavLinkHeight();

        getMainNavHeight();


    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    // ------------------------------------------------------


    //  Задать одинаковую высоту колонок

    var countMainNavLinks = $(".main-nav li a").length - 1;
    var countMainNavLinksFor = 0;

    var mainNavLinksHeightArr = [];

    // getMainNavLinkHeight();

    function getMainNavLinkHeight() {

        setTimeout(function() {

            for (countMainNavLinksFor = 0; countMainNavLinksFor <= countMainNavLinks; countMainNavLinksFor++) {

                mainNavLinksHeightArr.push($(".main-nav li a:eq("+ countMainNavLinksFor +")").height());

            }

            $(".main-nav li a").outerHeight(Math.max.apply(null, mainNavLinksHeightArr));

        }, 700);        

    }


    // -----------------------------------------------------

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

    $(function() {

        var indexProductPhoto;
        var imgSrcAttr;

        $(".slider-big .zoom-btn").click(function() {

            $(".preview-box").fadeIn(300);

            indexProductPhoto = $(".slider-big .zoom-btn").index(this);

            imgSrcAttr = $(".slider-big-item img:eq("+ indexProductPhoto +")").attr("src");

            $(".preview-box img").attr("src", imgSrcAttr);

        });

        $(".preview-box .close-btn, .preview-box .preview-bg").click(function() {

            $(".preview-box").fadeOut(300);

        });

    });


// ----------------------------------------------------------



    $(function() {

        $(".respmenubtn").click(function() {            

            $(".header-top-row .header-nav-col").css({"top" : $(".header-top-row").outerHeight(true) + "px" });

            if( $(".respmenubtn").hasClass("active") ) {

                $(".header-top-row .header-nav-col").css({"top" : -1 * ( $(".header-top-row .header-search-responsive").outerHeight(true) + $(".main-nav").outerHeight(true) + 10 ) + "px" });

            }

            $(".respmenubtn").toggleClass("active");

            getMainNavHeight();

        });

    });


    function getMainNavHeight() {


        if( $(".header-top-row .header-nav-col").offset().top + $(".header-top-row .header-nav-col").outerHeight(true) >= $(window).height() ) {

            $(".header-top-row .header-nav-col").height( $(window).height() - $(".logo-col").height() );

            $(".main-nav").height( $(".header-top-row .header-nav-col").height() - $(".header-search-responsive").height() );

        }

        if( !$(".respmenubtn").hasClass("active") ) {

            $(".header-top-row .header-nav-col").css({"top" : -1 * ( $(".header-top-row .header-search-responsive").outerHeight(true) + $(".main-nav").outerHeight(true) + 10 ) + "px" });

        }

    }


});
