-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 11, 2019 at 02:05 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app_hiring_channel`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo` text NOT NULL,
  `location` text NOT NULL,
  `no_contact` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `logo`, `location`, `no_contact`, `email`, `description`) VALUES
(4, 'arka', 'akta-1575967770983.jpg', 'garut', '', '', 'arka'),
(5, 'arka3', 'akta-1575974281722.jpg', 'garut', '', '', 'arka'),
(6, 'baru', 'e-ktp-1576021282590.jpg', 'jakarta', '', '', 'des'),
(7, 'new company', '1-1576021349783.png', 'bogor', '', '', 'description'),
(8, 'arka 7', 'img-20190601-wa0007-1576058657358.jpg', 'tebet', '', '', 'description of company');

-- --------------------------------------------------------

--
-- Table structure for table `engineers`
--

CREATE TABLE `engineers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `skills` text NOT NULL,
  `no_contact` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `location` text NOT NULL,
  `date_of_birth` date NOT NULL,
  `date_created` date NOT NULL,
  `date_updated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `engineers`
--

INSERT INTO `engineers` (`id`, `name`, `description`, `skills`, `no_contact`, `email`, `location`, `date_of_birth`, `date_created`, `date_updated`) VALUES
(1, 'halim h', 'des', 'html, php, css', '0', '', 'garut', '1996-08-10', '2019-12-09', '2019-12-09'),
(2, 'udin', 'des', 'php,js', '0', '', 'bandung', '1996-08-10', '2019-12-09', '2019-12-09'),
(3, 'maman', 'des', 'java, javascript', '0', '', 'tangerang', '1996-08-10', '2019-12-09', '2019-12-09'),
(5, 'mulan ', 'des', 'node js', '0', '', 'bekasi', '1996-08-10', '2019-12-10', '2019-12-10'),
(6, 'sari', 'des', 'kotlin', '0', '', 'jakarta', '1995-04-11', '2019-12-10', '2019-12-10'),
(7, 'ubah terusss', 'deskripsi yang di ubah', 'php, php, php', '12345678987', 'email@mail.com', 'bandung', '1996-10-08', '2019-12-11', '2019-12-11'),
(8, 'halim', 'my descriotion', 'php, css, mysql', '083825391376', 'hasanudinhalim@gmail.com', 'garut', '1996-08-10', '2019-12-11', '2019-12-11');

-- --------------------------------------------------------

--
-- Table structure for table `messages_to_engineers`
--

CREATE TABLE `messages_to_engineers` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `engineer_id` int(11) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages_to_engineers`
--

INSERT INTO `messages_to_engineers` (`id`, `company_id`, `engineer_id`, `message`) VALUES
(1, 4, 2, 'cv anda bagus sekali');

-- --------------------------------------------------------

--
-- Table structure for table `showcases`
--

CREATE TABLE `showcases` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `link` text NOT NULL,
  `engineer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `showcases`
--

INSERT INTO `showcases` (`id`, `name`, `link`, `engineer_id`) VALUES
(1, 'fb', 'facebok.com', 1),
(2, 'tw', 'twiter.com', 1),
(3, 'hahahu', 'gugel.com', 2),
(4, 'github', 'github.com/halim13', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `engineers`
--
ALTER TABLE `engineers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages_to_engineers`
--
ALTER TABLE `messages_to_engineers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company` (`company_id`),
  ADD KEY `engineer` (`engineer_id`);

--
-- Indexes for table `showcases`
--
ALTER TABLE `showcases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enshow` (`engineer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `engineers`
--
ALTER TABLE `engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `messages_to_engineers`
--
ALTER TABLE `messages_to_engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `showcases`
--
ALTER TABLE `showcases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages_to_engineers`
--
ALTER TABLE `messages_to_engineers`
  ADD CONSTRAINT `company` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `engineer` FOREIGN KEY (`engineer_id`) REFERENCES `engineers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `showcases`
--
ALTER TABLE `showcases`
  ADD CONSTRAINT `enshow` FOREIGN KEY (`engineer_id`) REFERENCES `engineers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
