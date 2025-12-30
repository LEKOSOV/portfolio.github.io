var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

;(function($) {
    window.stopToTopScroll = false;
    window.mobileAndTabletcheck = function() {
        var check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    function initJqueryPlugins() {
        new WOW().init();
        $('.header__nav').navbarScroll({
            onlyLastActive: true,
            beforeSpace: -100,
            uniqueSpaces: {
                'header': {
                    afterSpace: 400
                },
                'about': {
                    offsetScroll: function() {
                        return 40
                    }
                },
                'map': {
                    offsetScroll: function() {
                        return $('#map').outerHeight();
                    }
                }
            },
            inViewport: function(link) {
                var href = link.attr('href');
                if (href === '#recalls') {
                    var recalls = $('.header__nav a[href="#recalls"]');
                    var map = $('.header__nav a[href="#map"]');
                    var bool = ($(window).scrollTop() + window.innerHeight) > document.body.scrollHeight - 100;
                    if (!bool) {
                        recalls.addClass('active');
                    } else {
                        recalls.removeClass('active');
                        setTimeout(function() {
                            map.addClass('active');
                        });
                    }
                }
                if (href !== '#recalls') return true;
            }
        });
        $('#recalls-owl').owlCarousel({
            items: 4,
            loop: true,
            margin: 27,
            nav: true,
            navText: ['', ''],
            autoplay: false,
            autoplaySpeed: 800,
            smartSpeed: 400,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false
                },
                450: {
                    items: 2,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        });
        $('#apply-owl').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
            responsive: {
                650: {
                    items: 2
                },
                1000: {
                    items: 3,
                    margin: 60,
                }
            }
        });
        var owlBanner = $('#owl-banner').owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayTimeout: 15000,
            autoplayHoverPause: true
        });
        owlBanner.on('changed.owl.carousel', function(elem) {
            var bg = $('#owl-banner').find('.owl-item.active > .container').data('bg');
            $('.header__bg').fadeOut(100, function() {
                $('.header__bg').css('background-image', 'url(' + bg + ')');
                $(this).fadeIn(300);
            });
        });
        $('.factures__img a').each(function() {
            var self = $(this);
            self.append('<div class="bg-img" style="' + 'background-image: url(' + self.data('mini') + ')' + '"></div>');
        }).fancybox({
            beforeShow: function() {
                $('.header__nav').hide();
                if (window.innerWidth > 1201) return;
                $('.slicknav_menu').hide();
            },
            afterClose: function() {
                setTimeout(function() {
                    $('.header__nav').show();
                    if (window.innerWidth > 1201) return;
                    $('.slicknav_menu').show();
                });
            }
        });
        $('#my-button1, #my-button2').bind('click', function(e) {
            e.preventDefault();
            $('#element_to_pop_up, #element_to_pop_up2').bPopup({
                modalClose: true,
                opacity: 0.6,
                positionStyle: 'fixed',
                transitionClose: true,
                closeClass: 'b-close',
                zIndex: 999999999999999
            });
        });
        $('#menu').slicknav({
            label: '',
            init: function() {
                var html = '<div class="menu-group">';
                html += $('.header__logo').clone().wrap("<div />").parent().html();
                html += $('.header__info_address').clone().wrap("<div />").parent().html();
                html += $('.header__info_phone').clone().wrap("<div />").parent().html();
                html += '<div class="nav-mob-icons"></div>';
                html += '</div>';
                $('div.slicknav_menu').prepend(html);
            }
        });
    }

    function initSpincrement() {
        var show = true;
        var countbox = "#counts";
        $(window).on("scroll load resize", function() {
            if (!show) return false;
            var w_top = $(window).scrollTop();
            var e_top = $(countbox).offset().top;
            var w_height = $(window).height();
            var d_height = $(document).height();
            var e_height = $(countbox).outerHeight();
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(".spincrement").spincrement({
                    thousandSeparator: "",
                    duration: 1100
                });
                show = false;
            }
        });
    }

    function initCalc() {
        var inputs = {};
        $('.tab-layer').hide();
        $('.tab-layer_1').show();
        $('.form-calc input[data-price]').keypress(function(e) {
            if ((e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57)) === true) {
                e.preventDefault();
                return false;
            }
        });
        $('.form-calc input[data-price]').keyup(function(e) {
            var warp = $(this).closest('.form-calc');
            var resEl = warp.find('.result');
            var result = 0;
            warp.find('input[data-price]').each(function() {
                var v = Math.abs($(this).val());
                var len = (v == '') ? 0 : v;
                var after = $(this).data('after');
                if (typeof after !== 'undefined') {
                    if (len <= after) len = 0;
                    else
                        len -= parseInt(after);
                }
                result += len * $(this).data('price');
                inputs[$(this).attr('name')] = Math.abs($(this).val());
            });
            if (result > 999999) resEl.addClass('result_minimun');
            else
                resEl.removeClass('result_minimun');
            resEl.text(result);
        });
        var tabsCallbacks = {
            'showProcent': function() {
                $('section.calculator .calculator__discount').show();
            },
            'hideProcent': function() {
                $('section.calculator .calculator__discount').hide();
            }
        };
        $('.nav_tabs li:first').addClass('active');
        $('.nav_tabs li').click(function() {
            var block = $(this).data('block');
            $('.nav_tabs li').removeClass('active');
            $(this).addClass('active');
            $('.tab-layer').hide();
            $('.' + block).show();
            $('.' + block + ' input[data-price]').each(function() {
                var name = $(this).attr('name');
                if (name in inputs) {
                    $(this).val(inputs[name] ? inputs[name] : '');
                }
            }).each(function() {
                $(this).trigger('keyup')
            });
            var callback = $(this).data('callback');
            if (callback in tabsCallbacks) tabsCallbacks[callback]();
        });
        var href = window.location.href;
        if (href.indexOf('#calculator-') > -1) {
            var tab = href.split('#');
            tab = tab[tab.length - 1];
            tab = tab.replace('calculator-', '');
            $('.nav_tabs li[data-block="' + tab + '"]').trigger('click');
        }
    }

    function flexboxNavbarIE() {
        function isIE() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        }

        function emulate() {
            var warpElem = $('.header__nav ul');
            var contentElem = $('.header__nav ul > li');
            warpElem.attr('style', '');
            contentElem.attr('style', '');
            var warpWidth = warpElem.outerWidth();
            var itemLength = contentElem.length;
            var contentWidth = 0;
            var padding = 0;
            contentElem.each(function(i, el) {
                contentWidth += parseInt($(el).outerWidth());
            });
            padding = (100 * (warpWidth - contentWidth) / warpWidth) / itemLength;
            warpElem.width(warpWidth);
            contentElem.css({
                'padding-left': padding / 1.74 + '%',
                'padding-right': padding / 1.74 + '%'
            });
            warpElem.addClass('emulate-flaxbox');
        }
        if ((isIE() == 9 || isIE() == 10) || (document.documentMode || /Edge/.test(navigator.userAgent))) {
            emulate();
            $.fn.navbarScroll.updateFixedClass = emulate;
        }
    }

    function feedback() {
        var el = {
            form: $('.js-from form.ajax-feedback'),
            inputName: $('.js-from form.ajax-feedback input[name="name"]'),
            inputPhone: $('.js-from form.ajax-feedback input[name="phone"]'),
            inputMessage: $('.js-from form.ajax-feedback textarea[name="message"]'),
            inputSecret: $('.js-from input[name="af_action"]'),
            loader: $('.js-from .warp-loader'),
            warpForm: $('.js-from .warp-form-content'),
            resultSuccess: $('.js-from .success-result'),
            resultError: $('.js-from .success-error-result'),
            btnCustomClose: $('.js-from .success-error-result input, .js-from .success-result input'),
            btnClose: $('.js-from b-close')
        };
        var phonePattern = /^\+7\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;
        el.inputPhone.mask('+7 (999) 999 99 99');
        el.btnCustomClose.click(function() {
            setTimeout(function() {
                el.resultSuccess.hide();
                el.resultError.hide();
                el.warpForm.show();
            }, 500);
        });
        el.form.submit(function(e) {
            e.preventDefault();
            el.form.find('.error').remove();
            var values = {
                name: el.inputName.val(),
                phone: el.inputPhone.val(),
                message: el.inputMessage.val(),
                af_action: el.inputSecret.val()
            };
            if (values.name.trim() === '') {
                el.form.prepend('<div class="error">Пожалуйста, заполните поле с вашим именем!</div>');
                el.inputName.focus();
                return false;
            }
            if (values.phone.trim() === '') {
                el.form.prepend('<div class="error">Пожалуйста, заполните поле с вашим мобильным номером!</div>');
                el.inputPhone.focus();
                return false;
            }
            el.loader.show();
            setTimeout(function() {
                $.post(el.form.attr('action'), values, function(data) {
                    data = JSON.parse(data);
                    el.loader.hide();
                    el.warpForm.hide();
                    if (data.success) {
                        el.resultSuccess.show();
                        el.inputName.val('');
                        el.inputPhone.val('');
                        el.inputMessage.val('');
                    } else {
                        el.resultError.show();
                    }
                });
            }, 2000);
        });
    }
    $('#owl-banner .container[data-bg]').each(function() {
        var bg = $(this).data('bg');
        var img = new Image();
        img.src = bg;
        img.onload = function() {
            console.log('Loaded - ' + img.src);
        };
    });
    $(document).ready(function() {
        var idTimeout = null;
        $(window).on("scroll load resize", function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 96) {
                $('.header').css('padding-top', 63);
            } else {
                $('.header').css('padding-top', 0);
            }
        });
        $('a.section-scroll, a.section-scroll-link').click(function(e) {
            e.preventDefault();
            var self = $(this);
            var id = self.attr('href');
            var scrollTo = $(id).offset().top;
            $('html, body').animate({
                scrollTop: scrollTo
            }, 1000);
        });
        var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
        $('body').on(touchEvent, '.nav-mob-icons', function() {
            $('.slicknav_menu').toggleClass('slicknav_menu_open-tel');
        });
        $(window).resize(function() {
            if (window.innerWidth > 450) $('.slicknav_menu').removeClass('slicknav_menu_open-tel');
        });
        initJqueryPlugins();
        initSpincrement();
        initCalc();
        flexboxNavbarIE();
        feedback();
    });
    $(window).on('beforeunload', function() {
        if (!window.stopToTopScroll) $(window).scrollTop(0);
    });
})(jQuery);

}
/*
     FILE ARCHIVED ON 19:59:09 Jan 05, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:16:11 Oct 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 283.078
  exclusion.robots: 0.284
  exclusion.robots.policy: 0.273
  RedisCDXSource: 23.052
  esindex: 0.008
  LoadShardBlock: 235.549 (3)
  PetaboxLoader3.datanode: 221.455 (4)
  CDXLines.iter: 21.281 (3)
  load_resource: 94.194
  PetaboxLoader3.resolve: 55.025
*/