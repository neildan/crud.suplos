/**
    |--------------------------------------------------------------------------
    | Code for 'SUPLOS' - Module pattern: Property
    |--------------------------------------------------------------------------
	|
	| 1) Get all data of data-1.json.
	| 2) List the properties in the index.
	| 3) Get all saved properties.
	| 4) Save a property.
    |
    |--------------------------------------------------------------------------
    | @author Daniel Valencia <danielfelipeluis@outlook.com>
    |--------------------------------------------------------------------------
*/
var Property = (function Property() {
    const divAvailableResults = 'divResultadosBusqueda';
    const divMyResult = 'divResultadosBusquedaBienesGuardados';
    /**
     * Get all data of data-1.json
     */
    function getData() {
        const requestURL = '../data-1.json';
        const request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            saveData(request.response);
            createContainer();
            setFilters();
        }
    }

    /**
     * Save the information in a static variable to use it more comfortably.
     * @param JSON data
     */
    function saveData(data) {
        BienesIntelcost.data = data;
    }

    /**
     * Create the list of properties in the div element [divAvailableResults].
     */
    function createContainer(data = null, nameDiv = null) {
        const routeTemplate = '../assets/template-items.html';
        const divResult = (nameDiv) ? $('#' + nameDiv) : $('#' + divAvailableResults);

        divResult.html('');
        $.get(routeTemplate, function(template) {
            $.tmpl(template, { properties: (data) ? data : BienesIntelcost.data }).appendTo(divResult);
        });
    }

    /**
     * Fill the inputs cities and types (without repeat) in the form.
     */
    function setFilters() {
        let data = BienesIntelcost.data;
        let cities = {},
            types = {};
        let option = "<option value='0'>Escoger una opción</option>",
            citiesOptions = option,
            typesOptions = option;
        data.forEach(x => {
            if (!cities.hasOwnProperty(x.Ciudad)) {
                cities[x.Ciudad] = x.Ciudad;
                citiesOptions += "<option value='" + x.Ciudad + "'>" + x.Ciudad + "</option>";
            }
            if (!types.hasOwnProperty(x.Tipo)) {
                types[x.Tipo] = x.Tipo;
                typesOptions += "<option value='" + x.Tipo + "'>" + x.Tipo + "</option>";
            }
        });
        $('#selectCiudad').html(citiesOptions).fadeIn();
        $('#selectTipo').html(typesOptions).fadeIn();
    }

    /**
     * Get all saved properties
     */
    function getSavedProperties() {
        const route = "../php/property/Get.php";
        $.get(route, function(response, status) {
            if (status) {
                result = JSON.parse(response);
                if (result.success == '1' && result.data.length > 0) {
                    filterSavedProperties(result.data);
                }
            }
        });
    }

    /**
     * Create the list of saved properties in the div element [divMyResult]
     * @param {array[int]} filter
     */
    function filterSavedProperties(filter) {
        const routeFilter = "../php/filter/Post.php";
        let data = {
            "properties": BienesIntelcost.data,
            "form": {
                ids: filter
            },
            "action": 'ids'
        };
        $.post(routeFilter, data, function(response, status) {
            if (status) createContainer(JSON.parse(response), divMyResult);
        });
    }

    /**
     * Save the property.
     * @param {int} id.
     */
    function save(id) {
        const route = "../php/property/Post.php";
        if (id) {
            $.post(route, { id: id }, function(response, status) {
                var errorDuplicate = "SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate";
                if (status) {
                    let result = JSON.parse(response);
                    let message = '';
                    if (result.success == 0 && result.message.includes(errorDuplicate)) {
                        message = "No puede guardar la misma propiedad dos veces."
                    } else {
                        message = result.message;
                    }
                    alert(message);
                }
            });
        }
    }

    return {
        getData: getData,
        createContainer: createContainer,
        getSavedProperties: getSavedProperties,
        save: save,
    }
})();