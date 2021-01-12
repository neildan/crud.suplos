# suplosBackEnd
Prueba suplos desarrollador backend

# Daniel Valencia
## Archivos creados:
[JavaScript]
1) filter: Sirve para enviar los filtros desde el frontend al backend.
2) property:
    * Se encarga de obtener las propiedades del json principal.
    * Reemplazar los datos en la plantilla de propiedades.
    * Modificar el formulario para que las ciudades y tipos de bienes tengan opciones que seleccionar
    * Obtiene las propiedades guardadas de la DB.
    * Guarda la propiedad que se seleccione en la DB.

[PHP]
1) filter/Post: Recibe los filtros del frontend y decide que método utilizar de la clase 'Filter'.
2) filter/Filter: Es la clase 'Filter', sirve para filtrar por cuidades, tipos y ids.
3) property/Get: Le solicita a la clase 'SavedProperty' que retorne las propiedades guardadas de la DB.
4) property/Post: Recibe el ID de la propiedad desde el frontend y lo envía a la clase 'SavedProperty' para que lo guarde.
5) property/SavedProperty: Es la clase 'SavedProperty', sirve para guardar y obtener las 'propiedades guardadas'.
6) ConnectionDb: Crea una conexión con la DB para facilitar la obtención e inserción de datos desde la clase 'SavedProperty'.

[SQL]
1) db: Script para crear la DB y la tabla 'saved_properties'.

[ASSETS]
1) template-items: Plantilla para dibujar las propiedades.

## Archivos modificados:
[HTML]
1) index: Modifiqué algunos elementos con atributos y clases, adicional agregué y modifiqué etiquetas <script>.

[CSS]
1) index: Agregué estilos a la tarjeta que contiene las propiedades.

[JavaScript]
1) index: Agregué la clase 'BienesIntelcost' para manipular los datos del JSON más fácilmente.