/**
    |--------------------------------------------------------------------------
    | Code for 'SUPLOS' - Filter
    |--------------------------------------------------------------------------
	|
	| 1) Send a request for filter the properties.
    |
    |--------------------------------------------------------------------------
    | @author Daniel Valencia <danielfelipeluis@outlook.com>
    |--------------------------------------------------------------------------
*/
$(function () {
  const routeFilter = "../crud.suplos/php/filter/Post.php";
  $("#formulario").submit(function (e) {
    e.preventDefault();
    var ciudad = $("#selectCiudad option:selected").val();
    var tipo = $("#selectTipo option:selected").val();
    let data = {
      properties: BienesIntelcost.data,
      form: {
        city: ciudad,
        type: tipo,
      },
      action: "cityType",
    };
    $.post(routeFilter, data, function (response, status) {
      if (status) {
        Property.createContainer(JSON.parse(response));
      }
    });
  });
});
