var _body = $('body')

$(document).ready(function() {
    var transitionEnd = (function() {
        var t,
            e = document.createElement('div')

        var transitions = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd'
        }

        for (t in transitions) {
            if (e.style[t] !== undefined) {
                return transitions[t]
            }
        }
    })()

    window.Modal = (function() {
        var obj = function(options) {
            var _ = this

            _.modal = options.modal
            _.openBtn = options.openBtn
            _.closeBtn = options.closeBtn
            _.modal_content = _.modal.find('.modal__content')
            _.isOpen = false
            _.isAnimating = false
            _.fadeDuration = options.fadeDuration || 400

            _.afterClose = options.afterClose || null

            _.init()
        }

        var _proto = obj.prototype

        _proto.init = function() {
            var _ = this

            _.openBtn.click(function(e) {
                e.preventDefault()

                if (!_.isOpen && !_.isAnimating) {
                    _.openModal()
                }
            })

            _.closeBtn.click(function(e) {
                e.preventDefault()

                if (_.isOpen && !_.isAnimating) {
                    _.closeModal()
                }
            })

            _.modal.click(function(e) {
                if (_.isOpen && !_.isAnimating) {
                    if ($(e.target).is(_.modal)) {
                        _.closeModal()
                    }
                }
            })
        }

        _proto.openModal = function() {
            var _ = this

            _.isAnimating = true

            _body.addClass('o-hidden')

            _.modal.fadeIn(_.fadeDuration)

            window.setTimeout(function() {
                _.modal_content
                    .addClass('modal__content--in')
                    .one(transitionEnd, function() {
                        _.isAnimating = false
                        _.isOpen = true
                    })
            }, _.fadeDuration / 1.5)
        }

        _proto.closeModal = function() {
            var _ = this

            _.isAnimating = true

            _.modal_content
                .removeClass('modal__content--in')
                .one(transitionEnd, function() {
                    _.modal.fadeOut(_.fadeDuration, function() {
                        _.isAnimating = false
                        _.isOpen = false
                        if (_body.find('.modal__content--in').length == 0)
                            _body.removeClass('o-hidden')

                        if (_.afterClose != null) _.afterClose()
                    })
                })
        }
        return obj
    })()

    // services-works modal
    var servicesWorksModal = new Modal({
        modal: $('.js-services-works-modal'),
        openBtn: $('.js-services-works-modal-toggler'),
        closeBtn: $('.js-services-works-modal-close')
    })

    // services modal
    var servicesModal = new Modal({
        modal: $('.js-services-modal'),
        openBtn: $('.js-services-modal-toggler'),
        closeBtn: $('.js-services-modal-close')
    })

    // apps modal
    var appsModal = new Modal({
        modal: $('.js-apps-modal'),
        openBtn: $('.js-apps-modal-toggler'),
        closeBtn: $('.js-apps-modal-close')
    })
    // support modal
    window.supportModal = new Modal({
        modal: $('.js-support-modal'),
        openBtn: $('.js-support-modal-toggler'),
        closeBtn: $('.js-support-modal-close')
    })


    // app-log modal
    var appLogModal = new Modal({
        modal: $('.js-app-log-modal'),
        openBtn: $('.js-app-log-modal-toggler'),
        closeBtn: $('.js-app-log-modal-close')
    })


    // app-submit modal
    var appSubmitModal = new Modal({
        modal: $('.js-app-submit-modal'),
        openBtn: $('.js-app-submit-modal-toggler'),
        closeBtn: $('.js-app-submit-modal-close')
    })

    // js-author-claimants-modal
    var authorClaimantsModal = new Modal({
        modal: $('.js-author-claimants-modal'),
        openBtn: $('.js-author-claimants-modal-toggler'),
        closeBtn: $('.js-author-claimants-modal-close')
    })
})
