// action on file added to the input:file
$('.js-input-file').on('change', function() {
    var _this = $(this),
        textEl = _this.parent().parent().find('.js-input-file-text');

    textEl.text(_this.val());
    textEl.parent().addClass('active');
});

// action on input:file x-mark clicked
$('.js-input-file-dismisser').on('touchend click', function(e) {
    e.preventDefault();

    var _this = $(this);

    _this.parent().removeClass('active');
    _this.prev('span').text('...');
    _this.parent().parent().find('.js-input-file').val('');
});