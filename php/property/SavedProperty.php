<?php
/**
 * Table 'saved_properties'
 * @author Daniel Valencia <danielfelipeluis@outlook.com>
 */
include '../ConnectionDb.php';
Class SavedProperty {
    /**
     * Get all favorite (saved) properties.
     */
    function get(){
        try {
            $connection = new ConnectionDb;
            if(!$connection) throw new Exception("Unable to create a connection with DB", 1);
            $result = $connection->query("SELECT * FROM saved_properties;");
            $result = $result->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(array(
                'success' => 1,
                'message' => 'ok',
                'data' => $result,
            ));
        }catch(Exception $e){
            echo json_encode(array(
                'success' => 0,
                'message' => $e->getMessage(),
                'data' => []
            ));
        }
    }
    /**
     * Save a property
     * @param int id
     * @return array
     */
    function post($id){
        try {
            $connection = new ConnectionDb;
            if(!$connection) throw new Exception("No se pudo establecer comuniación con la BD", 1);
            $result = $connection->prepare("INSERT INTO saved_properties (id_property) VALUES (:id)");
            $result->bindValue(':id', (int) $id, PDO::PARAM_INT);
            if (!$result->execute()) throw new Exception("No se pudo guardar la propiedad", 1);
            echo json_encode(array(
                'success' => 1,
                'message' => 'Se guardo correctamente'
            ));
        }catch(Exception $e){
            echo json_encode(array(
                'success' => 0,
                'message' => $e->getMessage()
            ));
        }
    }
}