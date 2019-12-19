-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 19, 2019 at 10:00 AM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hiring_app`
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
(1, 45, 'Quipper', 'Quipper.png', 'Jakarta', '2321234', 'cs@quipper.com', 'Quipper is a leading global education technology company who aims to bring the best education to every corner of the world. We believe every child deserves an opportunity to learn - an opportunity to create the future they aspire to. At Quipper, we harness technology to achieve just this.', '2019-12-19 09:23:05', '2019-12-19 09:23:05'),
(3, 46, 'PT. Enlig Mandiri Sejahtera', 'PTEnligMandiriSejahtera.png', 'Bogor', '2321234', 'cs@enling.com', 'Dengan pola kerja yang PROFESIONAL, INTEGRITAS dan TERPERCAYA serta kepedulian kami, agar Top Management pada perusahaan dapat lebih fokus pada Bisnis Utama dan Profit, maka PT. Enlig Mandiri Sejahtera, memberikan solusi serta menjawab kebutuhan klien untuk memikirkan sekaligus menangani perekrutan dan seleksi calon tenaga kerja serta mengambil alih Legalitas Karyawan, mengurus BPJS dan Asuransi Kesehatan, meminimalisasi isu ketenagakerjaan, dan melakukan pembayaran gaji Karyawan.', '2019-12-19 09:24:05', '2019-12-19 09:24:05'),
(4, 47, 'Riglobe Enterprise', 'RiglobeEnterprise.png', 'Bandung', '2321234', 'cs@riglobe.com', 'A cloud-based Wi-Fi hosting & analytical platform providing valuable analytical data to businesses such as F&B, Restaurants, Bars, Office, Hotels, Shopping Malls, Co-working space and many more.', '2019-12-19 09:24:08', '2019-12-19 09:24:08'),
(5, 48, 'Lamudi.co.id', 'Lamudi.co.id.png', 'Jakarta', '2321234', 'cs@lamudi.com', 'Lamudi.co.id is an online real estate platform that offers sellers, buyers, and renters a secure and easy-to-use platform to find or list properties online.', '2019-12-19 09:24:10', '2019-12-19 09:24:10'),
(6, 49, 'HappyFresh', 'HappyFresh.jpg', 'Jakarta', '2321234', 'cs@happy.com', 'At HappyFresh, we build to deliver a simplified life. Every day, our team delivers the freshest, highest quality groceries to thousands of customers in Southeast Asia\'s major cities.', '2019-12-19 09:24:12', '2019-12-19 09:24:12'),
(7, 50, 'WEBARQ', 'WEBARQ.png', 'Jakarta', '2321234', 'cs@webark.com', 'WEBARQ digital agency is a Google Premier Partner & Facebook Partner based in Jakarta, Indonesia.', '2019-12-19 09:24:15', '2019-12-19 09:24:15'),
(8, 51, 'MARKPLUS, INC', 'MARKPLUSINC.png', 'Jakarta', '2321234', 'cs@markplus.com', 'A leading Southeast Asian professional services firm that serves companies and individuals in the areas of consulting, marketing research, education and media community. Founded in 1990 by Hermawan Kartajaya, we have emerged as the trusted advisor and, in many cases, change agents in the areas of strategy and marketing to many businesses and institutions in the Southeast Asia region.', '2019-12-19 09:24:17', '2019-12-19 09:24:17'),
(9, 52, 'HuntStreet', 'HuntStreet.png', 'Jakarta', '2321234', 'cs@hunt.com', 'Based in Jakarta, Indonesia, HuntStreet.com is your one-stop online destination for affordable authentic pre-loved and brand new luxuries. Guided by our 5S (Simple, Sincere, Safe, Service, and Save $$$), we make the process easy and transparent for the buyers and sellers, and while offering the highest level of customer service and the best value, we guarantee that every product featured on our website is 100% authentic or money-back guarantee.', '2019-12-19 09:24:19', '2019-12-19 09:24:19'),
(10, 53, 'Mediatics Digital Indonesia', 'MediaticsDigitalIndonesia.png', 'Jakarta', '2321234', 'cs@mediatics.com', 'Mediatics is an online advertising agency with core services in Google AdWords, Social Advertising, and Influencer Management. With our proven system and certified experts, we’re delivering a customized solutions with guaranteed result for our clients.', '2019-12-19 09:24:21', '2019-12-19 09:24:21'),
(11, 54, 'PT Adicipta Inovasi Teknologi', 'PTAdiciptaInovasiTeknologi.png', 'Jakarta', '2321234', 'cs@adicipta.com', 'Advance Innovations (AdIns) is a dynamic, thriving organization with the mission to deliver business solutions through innovative integration of proven technologies with creativity. The company\'s vision is to become a leading provider of IT solutions in the regional market.\n', '2019-12-19 09:24:23', '2019-12-19 09:24:23');

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
  `specialist` varchar(25) NOT NULL,
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

INSERT INTO `engineers` (`id`, `user_id`, `name`, `photo`, `expected_salary`, `description`, `skills`, `specialist`, `no_contact`, `email`, `location`, `date_of_birth`, `date_created`, `date_updated`) VALUES
(11, 34, 'halim', '1.jpg', 2000000, 'my description', 'php, css, mysql', 'frontend', '083825391376', 'mail@mail.come', 'jakarta', '1996-08-10', '2019-12-18 17:45:23', '2019-12-18 17:45:23'),
(13, 35, 'bambang', '2.jpg', 3000000, 'my description', 'php, css, mysql', 'frontend', '083825391376', 'mail@mail.come', 'jakarta', '1996-08-10', '2019-12-18 17:46:51', '2019-12-18 17:46:51'),
(14, 36, 'alfatah', '3.jpg', 4000000, 'my description', 'php, css, mysql', 'frontend', '083825391376', 'mail@mail.come', 'jakarta', '1996-08-10', '2019-12-18 17:47:30', '2019-12-18 17:47:30'),
(16, 37, 'hapid', '4.jpg', 5000000, 'my description', 'php, css, mysql', 'frontend', '083825391376', 'mail@mail.come', 'jakarta', '1996-08-10', '2019-12-18 17:49:27', '2019-12-18 17:49:27'),
(17, 38, 'iip', '5.jpg', 6000000, 'my description', 'html, css, js', 'frontend', '083825391376', 'mail@mail.com', 'jakarta', '1996-08-10', '2019-12-18 17:50:33', '2019-12-18 17:50:33'),
(18, 39, 'dani', '6.jpg', 7000000, 'my description', 'node js', 'backend', '083825391376', 'mail@mail.com', 'bogor', '1996-08-10', '2019-12-18 17:51:10', '2019-12-18 17:51:10'),
(19, 40, 'danu', '7.jpg', 8000000, 'my description', 'react js', 'backend', '083825391376', 'mail@mail.com', 'leles', '1996-08-10', '2019-12-18 17:52:04', '2019-12-18 17:52:04'),
(20, 41, 'bayu', '8.jpg', 9000000, 'desss', 'c#', 'tidur', '083825391376', 'mail@mail.com', 'kadungora', '1996-08-10', '2019-12-18 17:52:45', '2019-12-18 17:52:45'),
(22, 43, 'ihsan', '9.jpg', 10000000, 'description', 'angular', 'trading', '083825391376', 'mail@mail.com', 'garut', '1996-08-10', '2019-12-18 17:53:36', '2019-12-18 17:53:36'),
(23, 44, 'vika', '10.jpg', 11000000, 'description', 'angular', 'trading', '083825391376', 'mail@mail.com', 'garut', '1996-08-10', '2019-12-18 17:53:54', '2019-12-18 17:53:54');

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
(1, 'github', 'github.com/halim13', 11, '2019-12-19 09:49:10', '2019-12-19 09:49:10'),
(2, 'medium', 'medium.com/halim13', 11, '2019-12-19 09:49:21', '2019-12-19 09:49:21'),
(3, 'google', 'google.com/', 11, '2019-12-19 09:49:35', '2019-12-19 09:49:35'),
(4, 'github', 'github.com/', 13, '2019-12-19 09:49:52', '2019-12-19 09:49:52'),
(5, 'github', 'github.com/', 14, '2019-12-19 09:50:00', '2019-12-19 09:50:00'),
(6, 'github', 'github.com/', 16, '2019-12-19 09:50:07', '2019-12-19 09:50:07'),
(7, 'github', 'github.com/', 17, '2019-12-19 09:50:10', '2019-12-19 09:50:10'),
(8, 'hiring app', 'github.com/', 17, '2019-12-19 09:50:33', '2019-12-19 09:50:33'),
(9, 'linked in', 'github.com/', 18, '2019-12-19 09:50:54', '2019-12-19 09:50:54'),
(10, 'github', 'github.com/', 18, '2019-12-19 09:51:09', '2019-12-19 09:51:09'),
(11, 'github', 'github.com/', 19, '2019-12-19 09:51:19', '2019-12-19 09:51:19'),
(12, 'github', 'github.com/', 20, '2019-12-19 09:51:23', '2019-12-19 09:51:23'),
(13, 'github', 'github.com/', 22, '2019-12-19 09:51:26', '2019-12-19 09:51:26'),
(14, 'github', 'github.com/', 23, '2019-12-19 09:51:33', '2019-12-19 09:51:33');

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
(34, 'halim', '$2a$10$Ms/a3Fx3hJq2tSXuG1UjP.c6h2NgRrRzgGOi7pRpK7BGLGiICU9wG', 'engineer', '2019-12-18 17:39:32', '2019-12-18 17:39:32'),
(35, 'bambang', '$2a$10$jASxJ0tlgI4rAmZYBSHYnO4mPwTGUA9w1eJP58fEJhB.NdiQ7Um8O', 'engineer', '2019-12-18 17:39:38', '2019-12-18 17:39:38'),
(36, 'alfatah', '$2a$10$f4FZd8pSDLG0mCvBxnipo.SQouo/HDJblH5EAnIbBa4N7L5KRJys6', 'engineer', '2019-12-18 17:39:45', '2019-12-18 17:39:45'),
(37, 'hapid', '$2a$10$75z3sl0Cmk.fpDQFi4oOJuivG1a2Mt7FzBKMo.j99o1962IdpcmAK', 'engineer', '2019-12-18 17:39:55', '2019-12-18 17:39:55'),
(38, 'iip', '$2a$10$djbasFwgqZsDngJo7qbPVupIjah9Bx6v/sbU4aUABvrGvl9fXPTdC', 'engineer', '2019-12-18 17:40:08', '2019-12-18 17:40:08'),
(39, 'dani', '$2a$10$Ahm0qMzgDPlI7XCs9YqU3OZNlpu725T9KrIYbz1HbklawsHsj4Ooq', 'engineer', '2019-12-18 17:40:11', '2019-12-18 17:40:11'),
(40, 'danu', '$2a$10$Xr9/ywat/OgMVOnugtOYBe7LvKP2FjMYlitgZCNO96EBoAivF4cre', 'engineer', '2019-12-18 17:40:13', '2019-12-18 17:40:13'),
(41, 'bayu', '$2a$10$aJjE/NQ5wZuste5/voEES.j881FL0subIuSZeoe8XzrO1x6dunF.C', 'engineer', '2019-12-18 17:40:16', '2019-12-18 17:40:16'),
(43, 'ihsan', '$2a$10$wxGyxOLS5fRHyDyV72asX.w12ukx/lr09j33jqpVwid9nySa5Lv8W', 'engineer', '2019-12-18 17:40:23', '2019-12-18 17:40:23'),
(44, 'vika', '$2a$10$KYcsmEYsFby0L/zMtOs3f.huC8z5PFx6Gre8Apzy/Y63voNqdckre', 'engineer', '2019-12-18 17:41:09', '2019-12-18 17:41:09'),
(45, 'quipper', '$2a$10$jQpeAn.IjeTRhwNj/0GhRuwY8rwY4vAXrffGY60mNXhyuRYIfHGR2', 'company', '2019-12-19 09:20:34', '2019-12-19 09:20:34'),
(46, 'enligmandiri', '$2a$10$j9nHcsvzc3.WmpdiomrwaOlM2gblorYxhtgR2bWG6Impst05/hSQ6', 'company', '2019-12-19 09:20:37', '2019-12-19 09:20:37'),
(47, 'riglobe', '$2a$10$OgDRwZP8jt3o/x6FbGggKO7VaVvEnrzzy5YcEZ3bdqTWF3K/NyYaO', 'company', '2019-12-19 09:20:39', '2019-12-19 09:20:39'),
(48, 'lamudi', '$2a$10$WN9tW4CptKKfiRVu4lNaIu407UK..DJFMYHx1rh.zT.HYQbNW9WHW', 'company', '2019-12-19 09:20:41', '2019-12-19 09:20:41'),
(49, 'happyfresh', '$2a$10$mK.9bV5bpExMQ9Pvb931v.BtoXec6X4TO/5dicQzubkKrYSEyOkFq', 'company', '2019-12-19 09:20:43', '2019-12-19 09:20:43'),
(50, 'webarq', '$2a$10$iI6cPgtT6PmBxIl71Wma7eZOqzPf42PFXu97tZ9dCAjS74VHhCjx2', 'company', '2019-12-19 09:20:45', '2019-12-19 09:20:45'),
(51, 'markplus', '$2a$10$2EdBaR.rxLK2zaCJtK9PtO1RurrNiR2k0ZoC9UCPSt94RO2tob9eW', 'company', '2019-12-19 09:20:47', '2019-12-19 09:20:47'),
(52, 'huntstreet', '$2a$10$SmVQLQw3QbuQtEFJebYJReZBsNqbyJJYQQ0tgVCFqh3LLgnwycCF.', 'company', '2019-12-19 09:20:49', '2019-12-19 09:20:49'),
(53, 'mediaticsdigital', '$2a$10$0N8hhywJTTrddalbFA3riepZ1iF.5YV4tFoR0U/Bbk7G101A1B73e', 'company', '2019-12-19 09:20:50', '2019-12-19 09:20:50'),
(54, 'adiciptainovasi', '$2a$10$Wn.7CL20UPDSscv0VAxJE.grWQ7tY0X/fThQYW25YvnJkhwLsJfui', 'company', '2019-12-19 09:20:55', '2019-12-19 09:20:55');

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
  ADD UNIQUE KEY `user_id` (`user_id`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `engineers`
--
ALTER TABLE `engineers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `showcases`
--
ALTER TABLE `showcases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
