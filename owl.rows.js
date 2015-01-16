/**
 * Owl Rows
 * @since 2.0.0
 */
;(function ( $, window, document, undefined ) {
    Rows = function(scope){
        this.owl = scope;
        this.owl._options = $.extend(Rows.Defaults, this.owl.options);
        //link callback events with owl carousel here
    }
    Rows.Defaults = {
        rows: true
    }

    //mehtods:
    Rows.prototype.method = function(){
    }

    //destroy:
    Rows.prototype.destroy = function(){
        //events here
    };
    $.fn.owlCarousel.Constructor.Plugins['rows'] = Rows;
})( window.Zepto || window.jQuery, window,  document );
