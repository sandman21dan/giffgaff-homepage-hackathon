(function ($) {
    var oldGetEditor = $.fn.getEditor;
    $.fn.size = function() {

        console.info('test length' + $.length);
        return $.length;
    };
})(jQuery);