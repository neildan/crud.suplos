/**
 * Create the DB and table saved_properties
 * @author Daniel Valencia <danielfelipeluis@outlook.com>
 */
CREATE DATABASE `Intelcost_bienes`;

USE `Intelcost_bienes`;

CREATE TABLE `saved_properties` (
  `id` INT NOT NULL auto_increment,
  `id_property` INT UNIQUE NOT NULL,
  PRIMARY KEY  (`id`)
) DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;