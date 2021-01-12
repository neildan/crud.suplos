/**
    |--------------------------------------------------------------------------
    | Code for 'SUPLOS' - Index
    |--------------------------------------------------------------------------
	|
	| 1) Class 'BienesIntelcost' to manipulate properties more easily.
	| 2) Init the tabs and get all properties.
    |
    |--------------------------------------------------------------------------
    | @author Daniel Valencia <danielfelipeluis@outlook.com>
    |--------------------------------------------------------------------------
*/
/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function() {
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, timeout));
    });
};

/*
  Función que inicializa el elemento Slider
*/
function inicializarSlider() {
    $("#rangoPrecio").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 100000,
        from: 200,
        to: 80000,
        prefix: "$"
    });
}

/**
 * @let Obj _data : All data of "Bienes INTELCOST".
 */
let _data = null;
class BienesIntelcost {
    static get data() {
        return _data;
    }
    static set data(data) {
        return _data = data;
    }
}

$(function() {
    $("#tabs").tabs();
    inicializarSlider();
    Property.getData();
});