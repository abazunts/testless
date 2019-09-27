var _body = $('body'),
    sidebar = $('.js-sidebar'),
    bodyOverlay = $('.js-overlay'),
    hamburger = $('.hamburger'),
    profileToggler = $('.js-profile-toggler'),
    notificationsToggler = $('.js-notifications-toggler'),
    is_animating = false

$(document).ready(function() {
    // Hamburger
    hamburger.on('touchend click', function(e) {
        e.preventDefault()
        $(this).toggleClass('open')
        sidebar.toggleClass('open')
        _body.toggleClass('o-hidden')
        bodyOverlay.toggleClass('open')
    })

    // hide sidebar
    $('.js-sidebar-dismisser').on('touchend click', function(e) {
        e.preventDefault()
        hamburger.removeClass('open')
        sidebar.removeClass('open')
        _body.removeClass('o-hidden')
        bodyOverlay.removeClass('open')
    })

    // turn on custom accordion on submenu links
    if ($(window).width() < 768) {
        $('.js-submenu-toggler').on('touchend click', function(e) {
            e.preventDefault()

            var _this = $(this)

            if (
                (e.type == 'touchend' || e.type == 'click') &&
                !$(e.target).closest('.header-submenu').length
            ) {
                _this.toggleClass('open')
                _this.find('.header-submenu').slideToggle(200)
            }
        })

        $('.header-submenu a').on('touchend click', function() {
            window.location.href = $(this).attr('href')
        })
    }

    // Hide certain elements on body click
    _body.on('touchend click', function(e) {
        if (
            (e.type == 'touchend' || e.type == 'click') &&
            !$(e.target).closest(
                '.hamburger, .modal, .js-sidebar, .header, .js-modal-toggler, .js-action'
            ).length
        ) {
            hamburger.removeClass('open')
            sidebar.removeClass('open')
            bodyOverlay.removeClass('open')
            _body.removeClass('o-hidden')
            profileToggler.removeClass('open')
            notificationsToggler.removeClass('open')
            $('.js-action').removeClass('open')
        }
    })

    // user profile settings dropdown
    profileToggler.on('touchend click', function(e) {
        e.preventDefault()
        $(this).toggleClass('open')
        notificationsToggler.removeClass('open')
    })

    // header notifications toggle
    notificationsToggler.on('touchend click', function(e) {
        e.preventDefault()
        $(this).toggleClass('open')
        profileToggler.removeClass('open')
    })
})

// TEMP language-switch script, DELETE when backend integrated
var engText = 'English',
    arabText = 'عربي'

$('.js-lang-toggler').on('touchend click', function(e) {
    e.preventDefault()

    var _this = $(this)

    if (!_body.hasClass('rtl')) {
        _body.addClass('rtl')
        _this.text(engText)
    } else {
        _body.removeClass('rtl')
        _this.text(arabText)
    }
})
