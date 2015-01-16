/**
 * Owl Rows
 * @since 2.0.0
 */
;(function ( $, window, document, undefined ) {
    Rows = function(scope){
        this.owl = scope;
        this.owl._options = $.extend(Rows.Defaults, this.owl.options);

        this.handlers = {
            'initialize.owl.carousel' : $.proxy(function (e) {
                if (this.owl._options.rows) {
                    this.startup();
                }
            }, this)
        };

        this.owl.dom.$el.on(this.handlers);
    }

    Rows.Defaults = {
        rows: true
    }

    //mehtods:
    Rows.prototype.startup = function(){
        console.info(this);
    }

    //destroy:
    Rows.prototype.destroy = function(){
        //events here
    };
    $.fn.owlCarousel.Constructor.Plugins['rows'] = Rows;
})( window.Zepto || window.jQuery, window,  document );
