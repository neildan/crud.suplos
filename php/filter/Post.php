<?php
/**
 * It chooses between filter by city and type or ids.
 * @author Daniel Valencia <danielfelipeluis@outlook.com>
 */
require_once './Filter.php';
$filter = new Filter($_POST);
switch ($_POST['action']) {
    case 'cityType':
        $filter->filterPropertiesByCityType();
        break;
    case 'ids':
        $filter->filterPropertiesByIds();
        break;
}
