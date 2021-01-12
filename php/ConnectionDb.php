<?php
/**
 * Create a connection db
 * @author Daniel Valencia <danielfelipeluis@outlook.com>
 */
Class ConnectionDb extends PDO {
    private $typeDB = 'mysql';
    private $server = "localhost";
    private $db = "Intelcost_bienes";
    private $user = "root";

    public function __construct() {
        try {
            parent::__construct("{$this->typeDB}:host={$this->server};dbname={$this->db};charset=utf8", $this->user, '');
            $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
            die('ERROR: '. $e->getMessage());
        }
    }
}