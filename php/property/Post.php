<?php
/**
 * Ask class 'SavedProperty' to save a property
 * @author Daniel Valencia <danielfelipeluis@outlook.com>
 */
require_once './SavedProperty.php';
$property = new SavedProperty;
$property->post($_POST['id']);
