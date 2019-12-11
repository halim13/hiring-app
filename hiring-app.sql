-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 11, 2019 at 02:57 AM
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
-- Database: `hiring-app`
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
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `logo`, `location`, `description`) VALUES
(3, 'ubah 2', 'akta-1575982262251.jpg', 'jakarta', 'des'),
(4, 'arka', 'akta-1575967770983.jpg', 'garut', 'arka'),
(5, 'arka3', 'akta-1575974281722.jpg', 'garut', 'arka'),
(6, 'baru', 'e-ktp-1576021282590.jpg', 'jakarta', 'des'),
(7, 'new company', '1-1576021349783.png', 'bogor', 'description');

-- --------------------------------------------------------

--
-- Table structure for table `engineers`
--

CREATE TABLE `engineers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `skills` text NOT NULL,
  `location` text NOT NULL,
  `date_of_birth` date NOT NULL,
  `date_created` date NOT NULL,
  `date_updated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `engineers`
--

INSERT INTO `engineers` (`id`, `name`, `description`, `skills`, `location`, `date_of_birth`, `date_created`, `date_updated`) VALUES
(1, 'halim h', 'des', 'html, php, css', 'garut', '1996-08-10', '2019-12-09', '2019-12-09'),
(2, 'udin', 'des', 'php,js', 'bandung', '1996-08-10', '2019-12-09', '2019-12-09'),
(3, 'maman', 'des', 'java, javascript', 'tangerang', '1996-08-10', '2019-12-09', '2019-12-09'),
(5, 'mulan ', 'des', 'node js', 'bekasi', '1996-08-10', '2019-12-10', '2019-12-10'),
(6, 'sari', 'des', 'kotlin', 'jakarta', '1995-04-11', '2019-12-10', '2019-12-10');

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
  `engineer_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `showcases`
--

INSERT INTO `showcases` (`id`, `name`, `link`, `engineer_id`) VALUES
(1, 'fb', 'facebok.com', '1'),
(2, 'tw', 'twiter.com', '1'),
(3, 'facebook', 'fb.com', '2');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`) VALUES
(1, 'php'),
(2, 'css'),
(3, 'html'),
(4, 'js'),
(6, 'node js');

-- --------------------------------------------------------

--
-- Table structure for table `skills_of_engineers`
--

CREATE TABLE `skills_of_engineers` (
  `id` int(11) NOT NULL,
  `engineer_id` varchar(50) NOT NULL,
  `skill_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skills_of_engineers`
--

INSERT INTO `skills_of_engineers` (`id`, `engineer_id`, `skill_id`) VALUES
(1, '1', '1'),
(2, '1', '2'),
(3, '1', '3'),
(4, '2', '3'),
(5, '2', '1'),
(6, '3', '1');

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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills_of_engineers`
--
ALTER TABLE `skills_of_engineers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `engineers`
--
ALTER TABLE `engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `messages_to_engineers`
--
ALTER TABLE `messages_to_engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `showcases`
--
ALTER TABLE `showcases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `skills_of_engineers`
--
ALTER TABLE `skills_of_engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages_to_engineers`
--
ALTER TABLE `messages_to_engineers`
  ADD CONSTRAINT `company` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `engineer` FOREIGN KEY (`engineer_id`) REFERENCES `engineers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
