-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2019 at 08:22 AM
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
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo` text NOT NULL,
  `location` text NOT NULL,
  `no_contact` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `user_id`, `name`, `logo`, `location`, `no_contact`, `email`, `description`, `date_created`, `date_updated`) VALUES
(10, 4, 'arka', 'logo.jpg', 'location', '08383838', 'arka@mail.com', 'des', '2019-12-13 19:16:02', '2019-12-13 19:16:06'),
(11, 5, 'telkom', 'logo.jpg', 'telkom', '08383838', 'arka@mail.com', 'des', '2019-12-13 19:16:04', '2019-12-13 19:16:11'),
(14, 13, 'arka 7', 'img-20190601-wa0007-1576288655763.jpg', 'tebet', '2321234', 'hyyuu', 'description of company', '2019-12-14 08:57:36', '2019-12-14 08:57:36');

-- --------------------------------------------------------

--
-- Table structure for table `engineers`
--

CREATE TABLE `engineers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `expected_salary` int(11) NOT NULL,
  `description` text NOT NULL,
  `skills` text NOT NULL,
  `no_contact` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `location` text NOT NULL,
  `date_of_birth` date NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `engineers`
--

INSERT INTO `engineers` (`id`, `user_id`, `name`, `photo`, `expected_salary`, `description`, `skills`, `no_contact`, `email`, `location`, `date_of_birth`, `date_created`, `date_updated`) VALUES
(9, 2, 'halim', 'dua.png', 0, 'des', 'skill', '08997', 'mail', 'loc', '1996-08-10', '2019-12-13 11:33:51', '2019-12-13 11:33:53'),
(10, 3, 'hasan', 'poto.jpg', 0, 'deskrpsi', 'php css, js', '9889', 'mail@mail.com', 'garut', '1999-10-10', '2019-12-13 18:36:16', '2019-12-13 18:36:18'),
(11, 15, 'ubah terusss', '1-1576309368938.png', 200000, 'deskripsi yang di ubah', 'php, php, php', '12345678987', 'email@mail.com', 'garut', '1996-10-08', '2019-12-14 14:42:49', '2019-12-14 14:45:40');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `engineer_id` int(11) NOT NULL,
  `sender` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `company_id`, `engineer_id`, `sender`, `message`, `date_created`, `date_updated`) VALUES
(1, 10, 9, 'company', 'hahahaa', '2019-12-13 19:16:24', '2019-12-13 19:16:26'),
(2, 11, 9, 'company', 'apa ini', '2019-12-13 19:16:27', '2019-12-13 19:16:29'),
(3, 10, 9, 'engineer', 'selamat datang', '2019-12-13 19:16:30', '2019-12-13 19:16:31'),
(4, 11, 10, 'engineer', 'hulalala', '2019-12-13 19:16:32', '2019-12-13 19:16:33'),
(5, 11, 10, 'company', 'pesan coba', '2019-12-14 10:37:32', '2019-12-14 10:37:32'),
(6, 11, 10, 'company', 'pesan coba', '2019-12-14 10:40:08', '2019-12-14 10:40:08'),
(7, 11, 10, 'company', 'pesan coba', '2019-12-14 10:40:42', '2019-12-14 10:40:42'),
(9, 14, 11, 'engineer', 'cek engineer', '2019-12-14 15:15:30', '2019-12-14 15:15:30');

-- --------------------------------------------------------

--
-- Table structure for table `showcases`
--

CREATE TABLE `showcases` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `link` text NOT NULL,
  `engineer_id` int(11) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `showcases`
--

INSERT INTO `showcases` (`id`, `name`, `link`, `engineer_id`, `date_created`, `date_updated`) VALUES
(1, 'fb', 'facebook.com', 9, '2019-12-13 19:16:36', '2019-12-13 19:16:37'),
(2, 'tw', 'twitter.com', 9, '2019-12-13 19:16:38', '2019-12-13 19:16:41'),
(3, 'ig', 'instagram.com', 9, '2019-12-13 19:16:39', '2019-12-13 19:16:42'),
(4, 'fb', 'facebook.coom', 10, '2019-12-13 19:16:40', '2019-12-13 19:16:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `role` varchar(20) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `date_created`, `date_updated`) VALUES
(1, 'admin', 'admin', 'admin', '2019-12-13 19:16:47', '2019-12-13 19:16:48'),
(2, 'halim', 'halim', 'engineer', '2019-12-13 19:16:48', '2019-12-13 19:16:51'),
(3, 'hasan', 'hasan', 'engineer', '2019-12-13 19:16:49', '2019-12-13 19:16:52'),
(4, 'arka', 'arka', 'company', '2019-12-13 19:16:50', '2019-12-13 19:16:52'),
(5, 'telkom', 'telkom', 'company', '2019-12-13 19:16:51', '2019-12-13 19:16:53'),
(7, 'checkUser', 'checkUser', 'engineer', '2019-12-14 07:28:03', '2019-12-14 07:28:03'),
(13, 'mycompany', 'mycompany', 'company', '2019-12-14 08:33:58', '2019-12-14 08:33:58'),
(14, 'entah', 'apa', 'company', '2019-12-14 09:23:08', '2019-12-14 09:23:09'),
(15, 'yang', 'merasukimi', 'engineer', '2019-12-14 13:55:01', '2019-12-14 13:55:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `engineers`
--
ALTER TABLE `engineers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `engineer_user` (`user_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `e_m` (`engineer_id`),
  ADD KEY `c_m` (`company_id`);

--
-- Indexes for table `showcases`
--
ALTER TABLE `showcases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enshow` (`engineer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `engineers`
--
ALTER TABLE `engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `showcases`
--
ALTER TABLE `showcases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `company_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `engineers`
--
ALTER TABLE `engineers`
  ADD CONSTRAINT `engineer_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `c_m` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `e_m` FOREIGN KEY (`engineer_id`) REFERENCES `engineers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `showcases`
--
ALTER TABLE `showcases`
  ADD CONSTRAINT `enshow` FOREIGN KEY (`engineer_id`) REFERENCES `engineers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
