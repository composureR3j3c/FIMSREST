-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2023 at 02:19 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fims_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `asset`
--

CREATE TABLE `asset` (
  `ID` int(20) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Category` varchar(255) NOT NULL DEFAULT 'Other',
  `acqDate` date NOT NULL,
  `Rate` varchar(255) NOT NULL,
  `orgValue` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset`
--

INSERT INTO `asset` (`ID`, `Name`, `Category`, `acqDate`, `Rate`, `orgValue`) VALUES
(3, 'Desk', 'Furniture', '2023-01-01', '5', '3600'),
(6, 'Office Chairs', 'Furniture', '2023-01-01', '5', '3600'),
(7, 'Office Building', 'Real Estate', '2008-01-10', '2.1', '18000000');

-- --------------------------------------------------------

--
-- Table structure for table `payable`
--

CREATE TABLE `payable` (
  `ID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `DueDate` date NOT NULL,
  `Amount` decimal(10,0) NOT NULL,
  `Invoice` varchar(255) NOT NULL,
  `Supplier` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payable`
--

INSERT INTO `payable` (`ID`, `Date`, `DueDate`, `Amount`, `Invoice`, `Supplier`) VALUES
(2, '2022-02-01', '2024-02-01', '1000', '256-X5', 'CBE'),
(3, '0000-00-00', '2027-02-01', '1020100', '25e6-X5', 'BOA');

-- --------------------------------------------------------

--
-- Table structure for table `profit`
--

CREATE TABLE `profit` (
  `ID` int(255) NOT NULL,
  `Type` varchar(255) NOT NULL DEFAULT 'Expense',
  `Amount` int(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `Description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profit`
--

INSERT INTO `profit` (`ID`, `Type`, `Amount`, `date`, `Description`) VALUES
(20, 'Income', 10, '2023-02-06', 'sales'),
(21, 'Income', 10000, '2023-02-06', 'sales'),
(22, 'Expense', 2056, '2023-02-06', 'Inventory expense'),
(23, 'Expense', 1200, '2023-02-07', 'Inventory expense'),
(29, 'Expense', 20000, '2023-02-07', 'Employee salary'),
(30, 'Income', 254000, '2023-02-07', 'Investment Return');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asset`
--
ALTER TABLE `asset`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `payable`
--
ALTER TABLE `payable`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `profit`
--
ALTER TABLE `profit`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asset`
--
ALTER TABLE `asset`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `payable`
--
ALTER TABLE `payable`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `profit`
--
ALTER TABLE `profit`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
