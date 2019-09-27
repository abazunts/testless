var actionBtn = $('.js-action')

actionBtn.on('click', function() {
    actionBtn.removeClass('open')

    $(this).toggleClass('open')
})

var tableHeaderFilter = $('.content-table__h')
// front part of table header filtering
tableHeaderFilter.on('touchend click', function() {
    tableHeaderFilter.removeClass('active')

    $(this).toggleClass('active')
})

$('.js-select2').select2({
    minimumResultsForSearch: -1
})

$('.js-selectable-table tr').on('click', function() {
    var _this = $(this)

    _this.find('input[type=radio]').prop('checked', true)
})