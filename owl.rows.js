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
        this.evenItems = [];
        this.oddItems = [];

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

        var evenItemsArray = [],
            oddItemsArray = [];

        this.carousel = $('.' + this.owl.options.baseClass);
        this.sourceItems = this.carousel.find('.' + this.owl.options.rowsTargetClass);

        $.each(this.sourceItems, function(i, el) {
            if ( i % 2 === 0 ) {
                evenItemsArray.push(el);
            } else {
                oddItemsArray.push(el);
            }
        });

        this.evenItems = evenItemsArray;
        this.oddItems = evenItemsArray;

        this.carousel.empty();
    }

    //destroy:
    Rows.prototype.destroy = function(){
        //events here
    };
    $.fn.owlCarousel.Constructor.Plugins['rows'] = Rows;
})( window.Zepto || window.jQuery, window,  document );
