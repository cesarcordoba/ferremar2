# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.35)
# Base de datos: star_starbrand
# Tiempo de Generación: 2019-01-18 00:34:59 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla constelaciones
# ------------------------------------------------------------

DROP TABLE IF EXISTS `constelaciones`;

CREATE TABLE `constelaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPlaneta` int(11) DEFAULT NULL,
  `IdConstelacion` int(11) DEFAULT NULL,
  `IdGalaxia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IdPlaneta` (`IdPlaneta`),
  KEY `IdConstelacion` (`IdConstelacion`),
  KEY `IdGalaxia` (`IdGalaxia`),
  CONSTRAINT `constelaciones_ibfk_1` FOREIGN KEY (`IdPlaneta`) REFERENCES `planetas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `constelaciones_ibfk_2` FOREIGN KEY (`IdConstelacion`) REFERENCES `constelaciones` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `constelaciones_ibfk_3` FOREIGN KEY (`IdGalaxia`) REFERENCES `galaxias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `constelaciones` WRITE;
/*!40000 ALTER TABLE `constelaciones` DISABLE KEYS */;

INSERT INTO `constelaciones` (`id`, `nombre`, `tipo`, `status`, `createdAt`, `updatedAt`, `IdPlaneta`, `IdConstelacion`, `IdGalaxia`)
VALUES
	(1,'home','vista',0,'2019-01-05 21:10:40','2019-01-05 21:10:40',NULL,NULL,1),
	(2,'home','vista',0,'2019-01-05 21:10:45','2019-01-05 21:10:45',NULL,NULL,2),
	(3,'home','vista',0,'2019-01-05 21:10:47','2019-01-05 21:10:47',NULL,NULL,3),
	(4,'home','vista',0,'2019-01-05 21:10:49','2019-01-05 21:10:49',NULL,NULL,4),
	(5,'fichausuario','ficha',0,'2019-01-05 21:56:02','2019-01-05 22:03:28',1,NULL,2),
	(6,'vistaproyectos','vista',1,'2019-01-06 07:23:36','2019-01-06 07:24:37',NULL,NULL,2),
	(7,'vistamodulos','vista',1,'2019-01-06 07:23:50','2019-01-06 07:24:38',NULL,NULL,2),
	(8,'vistamodelos','vista',1,'2019-01-06 07:23:58','2019-01-06 07:24:38',NULL,NULL,2),
	(9,'vistaarticulos','vista',1,'2019-01-06 07:24:03','2019-01-06 07:24:38',NULL,NULL,2),
	(10,'vistausuarios','vista',0,'2019-01-06 07:24:56','2019-01-06 07:24:56',NULL,NULL,2),
	(11,'perfilproyecto','perfil',1,'2019-01-06 07:25:19','2019-01-08 19:48:28',5,NULL,2),
	(12,'perfilusuario','perfil',1,'2019-01-06 07:25:34','2019-01-08 19:48:27',1,NULL,2),
	(13,'perfilmodulo','perfil',1,'2019-01-06 07:25:47','2019-01-08 19:48:27',9,NULL,2),
	(14,'perfilmodelo','perfil',1,'2019-01-06 07:25:51','2019-01-08 19:48:26',10,NULL,2),
	(15,'perfilarticulo','perfil',1,'2019-01-06 07:25:56','2019-01-08 19:48:26',16,NULL,2),
	(16,'paginacionusuarios','paginacion',0,'2019-01-06 20:53:50','2019-01-06 20:53:50',1,10,2),
	(17,'paginacionproyectos','paginacion',1,'2019-01-06 20:54:11','2019-01-06 20:59:03',5,6,2),
	(18,'paginacionmodulos','paginacion',1,'2019-01-06 20:54:43','2019-01-06 20:58:19',9,7,2),
	(19,'paginacionmodelos','paginacion',1,'2019-01-06 20:54:57','2019-01-06 20:54:57',10,8,2),
	(20,'paginacionarticulos','paginacion',1,'2019-01-06 20:55:16','2019-01-06 20:55:16',16,9,2),
	(21,'creacionproyecto','creacion',0,'2019-01-06 20:56:58','2019-01-06 20:56:58',5,17,2),
	(22,'creacionmodulo','creacion',0,'2019-01-06 20:57:15','2019-01-06 20:57:15',9,18,2),
	(23,'creacionmodelo','creacion',0,'2019-01-06 20:57:23','2019-01-06 20:57:23',10,19,2),
	(24,'creacionarticulos','creacion',0,'2019-01-06 20:57:35','2019-01-06 20:57:35',16,20,2),
	(25,'formulariousuario','formulario',1,'2019-01-06 21:01:45','2019-01-06 21:01:45',1,12,2),
	(26,'formulariomodelo','formulario',1,'2019-01-06 21:01:58','2019-01-06 21:01:58',10,14,2),
	(27,'formulariomodulo','formulario',1,'2019-01-06 21:02:05','2019-01-06 21:02:05',9,13,2),
	(28,'formularioarticulo','formulario',1,'2019-01-06 21:04:27','2019-01-06 21:04:27',16,15,2),
	(29,'chipstags','chip',0,'2019-01-08 17:25:22','2019-01-08 17:30:24',20,15,2),
	(30,'portadaarticulos','imagen',0,'2019-01-08 18:13:34','2019-01-08 18:13:34',28,15,2),
	(31,'portadaproyectos','imagen',0,'2019-01-08 18:13:48','2019-01-08 18:13:48',27,11,2),
	(32,'paginacionsets','paginacion',1,'2019-01-08 18:24:30','2019-01-11 23:57:41',7,11,2),
	(33,'set','componente',1,'2019-01-08 18:24:51','2019-01-12 00:19:02',7,32,2),
	(34,'formularioset','formulario',1,'2019-01-08 18:25:47','2019-01-12 00:19:02',7,33,2),
	(35,'paginacionimagenes','paginacion',0,'2019-01-08 18:26:14','2019-01-08 18:26:33',17,33,2),
	(36,'paginacionventajas','paginacion',1,'2019-01-08 18:35:25','2019-01-11 23:45:09',11,14,2),
	(37,'formularioventaja','formulario',1,'2019-01-08 18:35:58','2019-01-11 23:45:09',11,36,2),
	(38,'chipmodulo','chip',1,'2019-01-08 18:36:22','2019-01-11 17:40:24',9,14,2),
	(39,'chipmodelo','chip',1,'2019-01-08 18:36:30','2019-01-11 23:47:31',10,13,2),
	(40,'paginacionproductos','paginacion',1,'2019-01-08 18:36:46','2019-01-11 23:47:31',13,13,2),
	(41,'formularioproducto','formulario',1,'2019-01-08 18:38:22','2019-01-12 00:18:29',13,40,2),
	(42,'formularioproyecto','formulario',1,'2019-01-09 20:20:42','2019-01-09 20:20:42',5,11,2),
	(43,'chipmodelo','chip',1,'2019-01-11 17:28:51','2019-01-11 19:35:30',10,11,2),
	(44,'chipmodulo','chip',1,'2019-01-11 17:28:58','2019-01-11 19:35:31',9,11,2),
	(45,'creacionimagen','creacion',0,'2019-01-11 18:55:06','2019-01-11 19:35:30',17,35,2),
	(46,'creacionproducto','creacion',0,'2019-01-11 22:51:38','2019-01-11 22:51:38',13,40,2),
	(47,'creacionventaja','creacion',0,'2019-01-11 22:51:56','2019-01-11 22:51:56',11,36,2),
	(48,'creacionset','creacion',0,'2019-01-11 23:54:49','2019-01-11 23:54:49',7,32,2),
	(49,'formularioimagen','formulario',0,'2019-01-12 00:16:30','2019-01-12 00:16:30',17,35,2);

/*!40000 ALTER TABLE `constelaciones` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla dimensiones
# ------------------------------------------------------------

DROP TABLE IF EXISTS `dimensiones`;

CREATE TABLE `dimensiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPreConstelacion` int(11) DEFAULT NULL,
  `IdSubConstelacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dimensiones_IdSubConstelacion_IdPreConstelacion_unique` (`IdPreConstelacion`,`IdSubConstelacion`),
  KEY `IdSubConstelacion` (`IdSubConstelacion`),
  CONSTRAINT `dimensiones_ibfk_1` FOREIGN KEY (`IdPreConstelacion`) REFERENCES `constelaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `dimensiones_ibfk_2` FOREIGN KEY (`IdSubConstelacion`) REFERENCES `constelaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Volcado de tabla galaxias
# ------------------------------------------------------------

DROP TABLE IF EXISTS `galaxias`;

CREATE TABLE `galaxias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `galaxias` WRITE;
/*!40000 ALTER TABLE `galaxias` DISABLE KEYS */;

INSERT INTO `galaxias` (`id`, `nombre`, `tipo`, `createdAt`, `updatedAt`)
VALUES
	(1,'main',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(2,'admin',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(3,'asesor',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00'),
	(4,'usuario',NULL,'0000-00-00 00:00:00','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `galaxias` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla meteoros
# ------------------------------------------------------------

DROP TABLE IF EXISTS `meteoros`;

CREATE TABLE `meteoros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPlaneta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IdPlaneta` (`IdPlaneta`),
  CONSTRAINT `meteoros_ibfk_1` FOREIGN KEY (`IdPlaneta`) REFERENCES `planetas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `meteoros` WRITE;
/*!40000 ALTER TABLE `meteoros` DISABLE KEYS */;

INSERT INTO `meteoros` (`id`, `nombre`, `tipo`, `createdAt`, `updatedAt`, `IdPlaneta`)
VALUES
	(1,'status','INTEGER','2019-01-05 22:27:15','2019-01-05 22:27:15',1),
	(2,'tipo','STRING','2019-01-05 22:27:30','2019-01-05 22:27:30',1),
	(3,'IdFacebook','STRING','2019-01-05 22:31:32','2019-01-05 22:31:32',2),
	(4,'IdGoogle','STRING','2019-01-05 22:31:40','2019-01-05 22:31:40',2),
	(5,'IdInstagram','STRING','2019-01-05 22:31:57','2019-01-05 22:31:57',2),
	(6,'correo','STRING','2019-01-05 22:33:21','2019-01-05 22:33:21',1),
	(7,'nombre','STRING','2019-01-05 22:33:27','2019-01-05 22:33:27',1),
	(8,'apellido','STRING','2019-01-05 22:33:34','2019-01-05 22:33:34',1),
	(9,'password','STRING','2019-01-06 00:04:00','2019-01-06 00:04:00',2),
	(10,'pagina','STRING','2019-01-06 05:37:12','2019-01-06 05:37:12',12),
	(11,'tiempo','STRING','2019-01-06 05:37:21','2019-01-06 05:37:21',12),
	(12,'status','INTEGER','2019-01-06 05:44:52','2019-01-06 05:44:52',9),
	(13,'requerido','INTEGER','2019-01-06 05:45:11','2019-01-06 05:45:11',9),
	(14,'corto','INTEGER','2019-01-06 05:58:12','2019-01-06 05:58:12',13),
	(15,'mediano','INTEGER','2019-01-06 05:58:16','2019-01-06 05:58:16',13),
	(16,'largo','INTEGER','2019-01-06 05:58:22','2019-01-06 05:58:22',13),
	(17,'complejidad','INTEGER','2019-01-06 05:58:31','2019-01-06 05:58:31',13),
	(18,'status','INTEGER','2019-01-06 05:58:53','2019-01-06 05:58:53',13),
	(19,'contenido','STRING','2019-01-06 05:59:16','2019-01-06 05:59:16',21),
	(20,'edad','STRING','2019-01-06 06:00:00','2019-01-06 06:00:00',1),
	(21,'empresa','STRING','2019-01-06 06:00:06','2019-01-06 06:00:06',1),
	(22,'puesto','STRING','2019-01-06 06:00:13','2019-01-06 06:00:13',1),
	(23,'contenido','STRING','2019-01-06 06:00:29','2019-01-06 06:00:29',23),
	(24,'contenido','STRING','2019-01-06 06:00:38','2019-01-06 06:00:38',24),
	(25,'contenido','STRING','2019-01-06 06:00:48','2019-01-06 06:00:48',25),
	(26,'contenido','STRING','2019-01-06 06:00:57','2019-01-06 06:00:57',26),
	(27,'imagen','STRING','2019-01-08 20:21:50','2019-01-08 20:21:50',19),
	(28,'nombre','STRING','2019-01-08 20:26:18','2019-01-08 20:26:18',19),
	(29,'clave','STRING','2019-01-08 20:26:23','2019-01-08 20:26:23',19),
	(30,'contenido','STRING','2019-01-09 07:56:11','2019-01-09 07:56:11',22),
	(31,'video','STRING','2019-01-12 00:24:04','2019-01-12 00:24:04',17),
	(32,'imagen','STRING','2019-01-12 00:24:08','2019-01-12 00:24:08',17);

/*!40000 ALTER TABLE `meteoros` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla orbitas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `orbitas`;

CREATE TABLE `orbitas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdSubPlaneta` int(11) DEFAULT NULL,
  `IdPrePlaneta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `orbitas_IdPrePlaneta_IdSubPlaneta_unique` (`IdSubPlaneta`,`IdPrePlaneta`),
  KEY `IdPrePlaneta` (`IdPrePlaneta`),
  CONSTRAINT `orbitas_ibfk_1` FOREIGN KEY (`IdSubPlaneta`) REFERENCES `planetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orbitas_ibfk_2` FOREIGN KEY (`IdPrePlaneta`) REFERENCES `planetas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `orbitas` WRITE;
/*!40000 ALTER TABLE `orbitas` DISABLE KEYS */;

INSERT INTO `orbitas` (`id`, `nombre`, `tipo`, `alias`, `createdAt`, `updatedAt`, `IdSubPlaneta`, `IdPrePlaneta`)
VALUES
	(1,'HasOne',3,NULL,'2019-01-05 22:02:21','2019-01-05 22:02:21',2,1),
	(2,'BelongsTo',1,NULL,'2019-01-05 22:02:21','2019-01-05 22:02:21',1,2),
	(3,'HasMany',2,NULL,'2019-01-05 22:16:55','2019-01-05 22:16:55',3,1),
	(4,'BelongsTo',1,NULL,'2019-01-05 22:16:55','2019-01-05 22:16:55',1,3),
	(5,'HasMany',2,NULL,'2019-01-05 22:17:25','2019-01-05 22:17:25',4,1),
	(6,'BelongsTo',1,NULL,'2019-01-05 22:17:25','2019-01-05 22:17:25',1,4),
	(7,'HasMany',2,NULL,'2019-01-06 02:01:48','2019-01-06 02:01:48',9,8),
	(8,'BelongsTo',1,NULL,'2019-01-06 02:01:48','2019-01-06 02:01:48',8,9),
	(9,'BelongsToMany',4,NULL,'2019-01-06 02:02:05','2019-01-06 02:02:05',5,8),
	(10,'BelongsToMany',4,NULL,'2019-01-06 02:02:05','2019-01-06 02:02:05',8,5),
	(11,'BelongsToMany',4,NULL,'2019-01-06 02:02:32','2019-01-06 02:02:32',16,8),
	(12,'BelongsToMany',4,NULL,'2019-01-06 02:02:32','2019-01-06 02:02:32',8,16),
	(13,'HasMany',2,NULL,'2019-01-06 02:02:49','2019-01-06 02:02:49',17,8),
	(14,'BelongsTo',1,NULL,'2019-01-06 02:02:49','2019-01-06 02:02:49',8,17),
	(15,'HasMany',2,NULL,'2019-01-06 02:03:11','2019-01-06 02:03:11',18,8),
	(16,'BelongsTo',1,NULL,'2019-01-06 02:03:11','2019-01-06 02:03:11',8,18),
	(17,'BelongsToMany',4,NULL,'2019-01-06 02:03:33','2019-01-06 02:03:33',10,8),
	(18,'BelongsToMany',4,NULL,'2019-01-06 02:03:33','2019-01-06 02:03:33',8,10),
	(19,'HasMany',2,NULL,'2019-01-06 02:03:53','2019-01-06 02:03:53',6,5),
	(20,'BelongsTo',1,NULL,'2019-01-06 02:03:53','2019-01-06 02:03:53',5,6),
	(21,'BelongsToMany',4,NULL,'2019-01-06 02:50:11','2019-01-06 03:02:28',20,16),
	(22,'BelongsToMany',4,NULL,'2019-01-06 02:50:11','2019-01-06 02:50:11',16,20),
	(23,'HasMany',2,NULL,'2019-01-06 02:52:07','2019-01-06 02:52:07',14,8),
	(24,'BelongsTo',1,NULL,'2019-01-06 02:52:07','2019-01-06 02:52:07',8,14),
	(25,'HasMany',2,NULL,'2019-01-06 02:52:42','2019-01-06 02:52:42',13,9),
	(26,'BelongsTo',1,NULL,'2019-01-06 02:52:42','2019-01-06 02:52:42',9,13),
	(27,'BelongsToMany',4,NULL,'2019-01-06 02:53:01','2019-01-06 02:53:01',12,13),
	(28,'BelongsToMany',4,NULL,'2019-01-06 02:53:01','2019-01-06 02:53:01',13,12),
	(29,'HasMany',2,NULL,'2019-01-06 02:53:39','2019-01-06 02:53:39',11,10),
	(30,'BelongsTo',1,NULL,'2019-01-06 02:53:39','2019-01-06 02:53:39',10,11),
	(31,'BelongsToMany',4,NULL,'2019-01-06 02:53:56','2019-01-06 02:53:56',9,10),
	(32,'BelongsToMany',4,NULL,'2019-01-06 02:53:56','2019-01-06 02:53:56',10,9),
	(33,'HasMany',2,NULL,'2019-01-06 02:54:20','2019-01-06 02:55:02',17,7),
	(34,'BelongsTo',1,NULL,'2019-01-06 02:54:20','2019-01-06 02:55:02',7,17),
	(35,'HasMany',2,NULL,'2019-01-06 02:55:23','2019-01-06 02:55:23',7,5),
	(36,'BelongsTo',1,NULL,'2019-01-06 02:55:23','2019-01-06 02:55:23',5,7),
	(39,'BelongsToMany',4,NULL,'2019-01-06 03:06:28','2019-01-06 03:06:28',5,1),
	(40,'BelongsToMany',4,NULL,'2019-01-06 03:06:28','2019-01-06 03:06:28',1,5),
	(41,'BelongsToMany',4,NULL,'2019-01-06 03:06:50','2019-01-06 03:06:50',16,1),
	(42,'BelongsToMany',4,NULL,'2019-01-06 03:06:50','2019-01-06 03:06:50',1,16),
	(43,'BelongsToMany',4,NULL,'2019-01-06 03:06:56','2019-01-06 03:06:56',12,1),
	(44,'BelongsToMany',4,NULL,'2019-01-06 03:06:56','2019-01-06 03:06:56',1,12),
	(45,'HasMany',2,NULL,'2019-01-06 04:11:41','2019-01-06 04:11:41',21,5),
	(46,'BelongsTo',1,NULL,'2019-01-06 04:11:41','2019-01-06 04:11:41',5,21),
	(47,'HasMany',2,NULL,'2019-01-06 04:11:53','2019-01-06 04:11:53',21,8),
	(48,'BelongsTo',1,NULL,'2019-01-06 04:11:53','2019-01-06 04:11:53',8,21),
	(49,'HasMany',2,NULL,'2019-01-06 04:12:00','2019-01-06 04:12:00',21,9),
	(50,'BelongsTo',1,NULL,'2019-01-06 04:12:00','2019-01-06 04:12:00',9,21),
	(51,'HasMany',2,NULL,'2019-01-06 04:13:04','2019-01-06 04:13:04',21,10),
	(52,'BelongsTo',1,NULL,'2019-01-06 04:13:04','2019-01-06 04:13:04',10,21),
	(53,'HasMany',2,NULL,'2019-01-06 04:13:23','2019-01-06 04:13:23',21,11),
	(54,'BelongsTo',1,NULL,'2019-01-06 04:13:23','2019-01-06 04:13:23',11,21),
	(55,'HasMany',2,NULL,'2019-01-06 04:13:30','2019-01-06 04:13:30',21,13),
	(56,'BelongsTo',1,NULL,'2019-01-06 04:13:30','2019-01-06 04:13:30',13,21),
	(57,'HasMany',2,NULL,'2019-01-06 04:13:49','2019-01-06 04:13:49',21,14),
	(58,'BelongsTo',1,NULL,'2019-01-06 04:13:49','2019-01-06 04:13:49',14,21),
	(59,'HasMany',2,NULL,'2019-01-06 04:13:58','2019-01-06 04:13:58',21,16),
	(60,'BelongsTo',1,NULL,'2019-01-06 04:13:58','2019-01-06 04:13:58',16,21),
	(61,'HasMany',2,NULL,'2019-01-06 04:14:10','2019-01-06 04:14:10',21,20),
	(62,'BelongsTo',1,NULL,'2019-01-06 04:14:10','2019-01-06 04:14:10',20,21),
	(63,'HasMany',2,NULL,'2019-01-06 05:10:37','2019-01-06 05:10:37',21,19),
	(64,'BelongsTo',1,NULL,'2019-01-06 05:10:37','2019-01-06 05:10:37',19,21),
	(65,'HasMany',2,NULL,'2019-01-06 05:19:41','2019-01-06 05:19:41',22,19),
	(66,'BelongsTo',1,NULL,'2019-01-06 05:19:41','2019-01-06 05:19:41',19,22),
	(67,'HasMany',2,NULL,'2019-01-06 05:20:25','2019-01-06 05:20:25',22,5),
	(68,'BelongsTo',1,NULL,'2019-01-06 05:20:25','2019-01-06 05:20:25',5,22),
	(69,'HasMany',2,NULL,'2019-01-06 05:20:38','2019-01-06 05:30:47',22,7),
	(70,'HasMany',2,NULL,'2019-01-06 05:20:55','2019-01-06 05:30:43',21,7),
	(71,'HasMany',2,NULL,'2019-01-06 05:27:01','2019-01-06 05:27:25',22,8),
	(72,'HasMany',2,NULL,'2019-01-06 05:27:10','2019-01-06 05:27:21',22,9),
	(73,'HasMany',2,NULL,'2019-01-06 05:27:18','2019-01-06 05:27:18',22,10),
	(74,'BelongsTo',1,NULL,'2019-01-06 05:27:18','2019-01-06 05:27:18',10,22),
	(75,'BelongsTo',1,NULL,'2019-01-06 05:27:21','2019-01-06 05:27:21',9,22),
	(76,'BelongsTo',1,NULL,'2019-01-06 05:27:25','2019-01-06 05:27:25',8,22),
	(77,'HasMany',2,NULL,'2019-01-06 05:27:33','2019-01-06 05:27:33',22,11),
	(78,'BelongsTo',1,NULL,'2019-01-06 05:27:33','2019-01-06 05:27:33',11,22),
	(79,'HasMany',2,NULL,'2019-01-06 05:29:01','2019-01-06 05:29:01',22,13),
	(80,'BelongsTo',1,NULL,'2019-01-06 05:29:01','2019-01-06 05:29:01',13,22),
	(81,'BelongsTo',1,NULL,'2019-01-06 05:30:43','2019-01-06 05:30:43',7,21),
	(82,'BelongsTo',1,NULL,'2019-01-06 05:30:47','2019-01-06 05:30:47',7,22),
	(83,'HasMany',2,NULL,'2019-01-06 05:38:43','2019-01-06 05:38:43',23,9),
	(84,'BelongsTo',1,NULL,'2019-01-06 05:38:43','2019-01-06 05:38:43',9,23),
	(85,'HasMany',2,NULL,'2019-01-06 05:38:49','2019-01-06 05:38:49',23,19),
	(86,'BelongsTo',1,NULL,'2019-01-06 05:38:49','2019-01-06 05:38:49',19,23),
	(87,'HasMany',2,NULL,'2019-01-06 05:40:37','2019-01-06 05:40:37',24,19),
	(88,'BelongsTo',1,NULL,'2019-01-06 05:40:37','2019-01-06 05:40:37',19,24),
	(89,'HasMany',2,NULL,'2019-01-06 05:40:51','2019-01-06 05:57:00',24,5),
	(90,'HasMany',2,NULL,'2019-01-06 05:42:07','2019-01-06 05:42:20',24,16),
	(91,'HasMany',2,NULL,'2019-01-06 05:42:13','2019-01-06 05:42:15',22,16),
	(92,'BelongsTo',1,NULL,'2019-01-06 05:42:15','2019-01-06 05:42:15',16,22),
	(93,'BelongsTo',1,NULL,'2019-01-06 05:42:20','2019-01-06 05:42:20',16,24),
	(94,'BelongsTo',1,NULL,'2019-01-06 05:57:00','2019-01-06 05:57:00',5,24),
	(95,'HasMany',2,NULL,'2019-01-06 05:57:02','2019-01-06 05:57:02',25,5),
	(96,'BelongsTo',1,NULL,'2019-01-06 05:57:02','2019-01-06 05:57:02',5,25),
	(97,'HasMany',2,NULL,'2019-01-06 05:57:04','2019-01-06 05:57:04',26,5),
	(98,'BelongsTo',1,NULL,'2019-01-06 05:57:04','2019-01-06 05:57:04',5,26),
	(99,'HasMany',2,NULL,'2019-01-06 06:01:19','2019-01-06 06:01:19',25,19),
	(100,'BelongsTo',1,NULL,'2019-01-06 06:01:19','2019-01-06 06:01:19',19,25),
	(101,'HasMany',2,NULL,'2019-01-06 06:01:21','2019-01-06 06:01:21',26,19),
	(102,'BelongsTo',1,NULL,'2019-01-06 06:01:21','2019-01-06 06:01:21',19,26),
	(103,'HasMany',2,NULL,'2019-01-08 17:42:41','2019-01-08 17:42:41',28,16),
	(104,'BelongsTo',1,NULL,'2019-01-08 17:42:41','2019-01-08 17:42:41',16,28),
	(105,'HasMany',2,NULL,'2019-01-08 17:42:57','2019-01-08 17:42:57',27,5),
	(106,'BelongsTo',1,NULL,'2019-01-08 17:42:57','2019-01-08 17:42:57',5,27),
	(107,'BelongsToMany',4,NULL,'2019-01-11 18:08:11','2019-01-11 18:08:11',9,5),
	(108,'BelongsToMany',4,NULL,'2019-01-11 18:08:11','2019-01-11 18:08:11',5,9),
	(109,'BelongsToMany',4,NULL,'2019-01-11 18:08:13','2019-01-11 18:08:13',10,5),
	(110,'BelongsToMany',4,NULL,'2019-01-11 18:08:13','2019-01-11 18:08:13',5,10);

/*!40000 ALTER TABLE `orbitas` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla planetas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `planetas`;

CREATE TABLE `planetas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orden` int(11) DEFAULT NULL,
  `plural` varchar(255) DEFAULT NULL,
  `singular` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `planetas` WRITE;
/*!40000 ALTER TABLE `planetas` DISABLE KEYS */;

INSERT INTO `planetas` (`id`, `orden`, `plural`, `singular`, `createdAt`, `updatedAt`)
VALUES
	(1,NULL,'usuarios','usuario','2019-01-05 22:01:59','2019-01-05 22:01:59'),
	(2,NULL,'llaves','llave','2019-01-05 22:02:03','2019-01-05 22:02:03'),
	(3,NULL,'avatares','avatar','2019-01-05 22:16:47','2019-01-05 22:16:47'),
	(4,NULL,'logs','log','2019-01-05 22:17:17','2019-01-05 22:17:17'),
	(5,NULL,'proyectos','proyecto','2019-01-06 01:39:24','2019-01-06 01:39:24'),
	(6,NULL,'logos','logo','2019-01-06 01:45:48','2019-01-06 01:45:48'),
	(7,NULL,'sets','set','2019-01-06 01:46:05','2019-01-06 01:46:05'),
	(8,NULL,'areas','area','2019-01-06 01:46:14','2019-01-06 01:46:14'),
	(9,NULL,'modulos','modulo','2019-01-06 01:46:24','2019-01-06 01:46:24'),
	(10,NULL,'modelos','modelo','2019-01-06 01:46:33','2019-01-06 01:46:33'),
	(11,NULL,'ventajas','ventaja','2019-01-06 01:46:42','2019-01-06 01:46:42'),
	(12,NULL,'cotizaciones','cotizacion','2019-01-06 01:46:54','2019-01-06 01:46:54'),
	(13,NULL,'productos','producto','2019-01-06 01:48:23','2019-01-06 01:48:23'),
	(14,NULL,'herramientas','herramienta','2019-01-06 01:51:00','2019-01-06 01:51:00'),
	(16,NULL,'articulos','articulo','2019-01-06 01:53:51','2019-01-06 01:53:51'),
	(17,NULL,'imagenes','imagen','2019-01-06 01:54:16','2019-01-06 01:54:16'),
	(18,NULL,'fotos','foto','2019-01-06 02:02:55','2019-01-06 02:02:55'),
	(19,NULL,'idiomas','idioma','2019-01-06 02:36:16','2019-01-06 02:36:16'),
	(20,NULL,'tags','tag','2019-01-06 02:49:42','2019-01-06 02:49:42'),
	(21,NULL,'nombres','nombre','2019-01-06 04:09:28','2019-01-06 04:09:28'),
	(22,NULL,'descripciones','descripcion','2019-01-06 05:19:23','2019-01-06 05:19:23'),
	(23,NULL,'preguntas','pregunta','2019-01-06 05:38:31','2019-01-06 05:38:31'),
	(24,NULL,'resumenes','resumen','2019-01-06 05:40:27','2019-01-06 05:40:27'),
	(25,NULL,'problematicas','problematica','2019-01-06 05:56:37','2019-01-06 05:56:37'),
	(26,NULL,'soluciones','solucion','2019-01-06 05:56:44','2019-01-06 05:56:44'),
	(27,NULL,'portadasproyectos','portadaproyecto','2019-01-08 17:42:11','2019-01-08 17:42:11'),
	(28,NULL,'portadasarticulos','portadaarticulo','2019-01-08 17:42:25','2019-01-08 17:42:25');

/*!40000 ALTER TABLE `planetas` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla satelites
# ------------------------------------------------------------

DROP TABLE IF EXISTS `satelites`;

CREATE TABLE `satelites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `params` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `ruta_back` varchar(255) DEFAULT NULL,
  `ruta_front` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `contenido` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `IdPlaneta` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IdPlaneta` (`IdPlaneta`),
  CONSTRAINT `satelites_ibfk_1` FOREIGN KEY (`IdPlaneta`) REFERENCES `planetas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `satelites` WRITE;
/*!40000 ALTER TABLE `satelites` DISABLE KEYS */;

INSERT INTO `satelites` (`id`, `status`, `tipo`, `params`, `nombre`, `ruta_back`, `ruta_front`, `descripcion`, `contenido`, `createdAt`, `updatedAt`, `IdPlaneta`)
VALUES
	(7,1,'put','idioma, item , peticion','buscarycrearXidioma','buscarycrearXidioma/:idioma/:item','buscarycrearXidioma/\' + idioma + \'/\' + item, peticion','Se busca el contenido mediante dos id, si no existe se crea, despues de edita','Nombre.findOrCreate({\n                where : { IdIdioma : req.params.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.params.item }\n            })\n            .spread((item : Nombre, created) => item.update({contenido : req.body.contenido }))','2019-01-09 05:26:59','2019-01-09 05:26:59',21),
	(8,1,'put','idioma, item , peticion','buscarycrearXidioma','buscarycrearXidioma/:idioma/:item','buscarycrearXidioma/\' + idioma + \'/\' + item, peticion','Se busca el contenido mediante dos id, si no existe se crea, despues de edita','Descripcion.findOrCreate({\n                where : { IdIdioma : req.params.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.params.item }\n            })\n            .spread((item : Descripcion, created) => item.update({contenido : req.body.contenido }))','2019-01-09 05:27:16','2019-01-09 05:27:16',22),
	(9,1,'put','idioma, item , peticion','buscarycrearXidioma','buscarycrearXidioma/:idioma/:item','buscarycrearXidioma/\' + idioma + \'/\' + item, peticion','Se busca el contenido mediante dos id, si no existe se crea, despues de edita','Pregunta.findOrCreate({\n                where : { IdIdioma : req.params.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.params.item }\n            })\n            .spread((item : Pregunta, created) => item.update({contenido : req.body.contenido }))','2019-01-09 05:27:56','2019-01-09 05:27:56',23),
	(10,1,'put','idioma, item , peticion','buscarycrearXidioma','buscarycrearXidioma/:idioma/:item','buscarycrearXidioma/\' + idioma + \'/\' + item, peticion','Se busca el contenido mediante dos id, si no existe se crea, despues de edita','Resumen.findOrCreate({\n                where : { IdIdioma : req.params.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.params.item }\n            })\n            .spread((item : Resumen, created) => item.update({contenido : req.body.contenido }))','2019-01-09 05:28:16','2019-01-09 05:28:16',24),
	(11,1,'put','idioma, item , peticion','buscarycrearXidioma','buscarycrearXidioma/:idioma/:item','buscarycrearXidioma/\' + idioma + \'/\' + item, peticion','Se busca el contenido mediante dos id, si no existe se crea, despues de edita','Problematica.findOrCreate({\n                where : { IdIdioma : req.params.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.params.item }\n            })\n            .spread((item : Problematica, created) => item.update({contenido : req.body.contenido }))','2019-01-09 05:28:46','2019-01-09 05:28:46',25),
	(12,1,'put','idioma, item , peticion','buscarycrearXidioma','buscarycrearXidioma/:idioma/:item','buscarycrearXidioma/\' + idioma + \'/\' + item, peticion','Se busca el contenido mediante dos id, si no existe se crea, despues de edita','Solucion.findOrCreate({\n                where : { IdIdioma : req.params.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.params.item }\n            })\n            .spread((item : Solucion, created) => item.update({contenido : req.body.contenido }))','2019-01-09 05:29:04','2019-01-09 05:29:04',26),
	(13,1,'put','peticion','buscarColumna','buscarColumna','buscarColumna\', peticion','Se busca dependiente de la columna y el idioma','Nombre.find({\n                where : { IdIdioma : req.body.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.body.item }\n            })\n            .then(item => resolve(  item  ))','2019-01-09 06:46:01','2019-01-09 06:46:01',21),
	(14,1,'put','peticion','buscarColumna','buscarColumna','buscarColumna\', peticion','Se busca dependiente de la columna y el idioma','Descripcion.find({\n                where : { IdIdioma : req.body.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.body.item }\n            })\n            .then(item => resolve(  item  ))','2019-01-09 06:46:21','2019-01-09 06:46:21',22),
	(15,1,'put','peticion','buscarColumna','buscarColumna','buscarColumna\', peticion','Se busca dependiente de la columna y el idioma','Pregunta.find({\n                where : { IdIdioma : req.body.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.body.item }\n            })\n            .then(item => resolve(  item  ))','2019-01-09 06:46:37','2019-01-09 06:46:37',23),
	(16,1,'put','peticion','buscarColumna','buscarColumna','buscarColumna\', peticion','Se busca dependiente de la columna y el idioma','Resumen.find({\n                where : { IdIdioma : req.body.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.body.item }\n            })\n            .then(item => resolve(  item  ))','2019-01-09 06:46:51','2019-01-09 06:46:51',24),
	(17,1,'put','peticion','buscarColumna','buscarColumna','buscarColumna\', peticion','Se busca dependiente de la columna y el idioma','Problematica.find({\n                where : { IdIdioma : req.body.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.body.item }\n            })\n            .then(item => resolve(  item  ))','2019-01-09 06:47:08','2019-01-09 06:47:08',25),
	(18,1,'put','peticion','buscarColumna','buscarColumna','buscarColumna\', peticion','Se busca dependiente de la columna y el idioma','Solucion.find({\n                where : { IdIdioma : req.body.idioma, [ \'Id\' + _.capitalize( req.body.modelo ) ] : req.body.item }\n            })\n            .then(item => resolve(  item  ))','2019-01-09 06:47:25','2019-01-09 06:47:25',26),
	(19,1,'get',NULL,'froala','froala/','froala/\'','Jala las llaves','var configs = {\n            bucket: \'colnal-imagenes\',\n            region: \'us-east-1\',\n            keyStart: \'froala-tryadd/\',\n            acl: \'public-read\',\n            accessKey: \'AKIAJEYX66PCBH6V4VHQ\',\n            secretKey: \'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\',\n        }\n        var s3Hash = FroalaEditor.S3.getHash(configs);\n        res.status(200).jsonp(s3Hash);','2019-01-11 19:48:49','2019-01-11 19:48:49',5);

/*!40000 ALTER TABLE `satelites` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
