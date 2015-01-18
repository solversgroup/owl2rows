/**
 * Owl Rows
 * @since 2.0.0
 */
;(function ( $, window, document, undefined ) {
    Rows = function(scope){
        this.owl = scope;
        this.owl.options = $.extend(Rows.Defaults, this.owl.options);

        this.carousel = {};
        this.sourceItems = {};

        this.handlers = {
            'initialize.owl.carousel' : $.proxy(function (e) {
                if (this.owl.options.rows) {
                    this.startup();
                }
            }, this)
        };

        this.owl.dom.$el.on(this.handlers);
    }

    Rows.Defaults = {
        rows: true,
        rowsCount: 2,
        rowsTargetClass: 'item'
    }

    //mehtods:
    Rows.prototype.startup = function(){

        var carousel = $('.' + this.owl.options.baseClass),
            column = $('<div/>'),
            rowsCount = this.owl.options.rowsCount,
            counter = 0;

        this.sourceItems = carousel.find('.' + this.owl.options.rowsTargetClass);

        carousel.empty();

        $.each(this.sourceItems, function(i, el) {
            counter++;

            if (counter < rowsCount) {
                column.append(el);
            } else if (counter = rowsCount) {
                column.append(el);
                carousel.append(column);
                column = $('<div/>');
                counter = 0;
            }


        });
    }

    //destroy:
    Rows.prototype.destroy = function(){
        //events here
    };
    $.fn.owlCarousel.Constructor.Plugins['rows'] = Rows;
})( window.Zepto || window.jQuery, window,  document );
