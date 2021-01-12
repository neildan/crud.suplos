<?php
/**
 * Filter Properties.
 * @author Daniel Valencia <danielfelipeluis@outlook.com>
 */
Class Filter {
    function __construct($request)
    {
        $this->request = $request;
    }
    /**
     * Filter properties by cities and types
     */
    public function filterPropertiesByCityType()
    {
        $city = $this->request['form']['city'];
        $type = $this->request['form']['type'];
        $result = array_filter(
            (array) $this->request['properties'],
            function ($property) use ($type, $city) {
                return (
                    (empty($type) ? true : $property["Tipo"] == $type) &&
                    (empty($city) ? true : $property["Ciudad"] == $city)
                );
            }
        );
        echo json_encode($result);
    }

    /**
     * Filter properties by ids
     */
    public function filterPropertiesByIds()
    {
        $ids = $this->request['form']['ids'];
        $result = array_filter(
            (array) $this->request['properties'],
            function ($property) use ($ids) {
                $idProperty = $property["Id"];
                return array_filter(
                    $ids, function ($id) use ($idProperty) {
                        return ((int) $id['id_property'] == (int) $idProperty);
                    }
                );
            }
        );
        echo json_encode($result);
    }
}
