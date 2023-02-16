-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2023 at 12:46 PM
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
  `orgValue` decimal(10,0) NOT NULL,
  `deleted` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `asset`
--

INSERT INTO `asset` (`ID`, `Name`, `Category`, `acqDate`, `Rate`, `orgValue`, `deleted`) VALUES
(3, 'Desk', 'Furniture', '2023-01-01', '5', '3600', 1),
(6, 'Office Chairs', 'Furniture', '2023-01-01', '5', '3600', 0),
(7, 'Office Building', 'Real Estate', '2008-01-10', '2.1', '18000000', 0),
(9, 'Warehouse', 'Real Estate', '2023-02-15', '2.3', '12000000', 0);

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

CREATE TABLE `currency` (
  `ID` int(11) NOT NULL,
  `Code` varchar(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Rate` decimal(10,4) NOT NULL,
  `Date` date NOT NULL,
  `Sell` decimal(10,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `currency`
--

INSERT INTO `currency` (`ID`, `Code`, `Name`, `Rate`, `Date`, `Sell`) VALUES
(1, 'AED', 'UAE DIRHAM', '12.5152', '2023-02-16', '13.1363'),
(2, 'GBP', 'POUND STERLING', '62.4347', '2023-02-16', '64.6834'),
(3, 'USD', 'US DOLLAR', '54.5435', '2023-02-16', '55.8526'),
(4, 'v_CAD', 'CANADIAN DOLLAR', '36.3695', '2023-02-16', '37.3895'),
(5, 'v_SAR', 'SAUDI RIYAL', '12.5036', '2023-02-16', '12.9586');

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
  `Supplier` varchar(255) NOT NULL,
  `deleted` int(1) DEFAULT 0,
  `type` varchar(255) DEFAULT 'pay'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payable`
--

INSERT INTO `payable` (`ID`, `Date`, `DueDate`, `Amount`, `Invoice`, `Supplier`, `deleted`, `type`) VALUES
(2, '2022-02-01', '2024-02-01', '1000', '256-X5', 'CBE', 0, 'pay'),
(3, '2023-02-01', '2027-02-01', '1020100', '25e6-X5', 'BOA', 1, 'pay'),
(4, '2023-02-07', '2027-02-01', '500000', '2PX-1234', 'Silent Investor II ', 0, 'pay'),
(5, '2023-02-07', '2024-08-08', '4000000', '2PSWE-44', 'Bonds', 0, 'pay'),
(6, '2023-02-02', '2030-01-01', '20500000', 'WPR-2JL', 'Star Corp.', 1, 'pay'),
(7, '2023-02-02', '2024-02-03', '10000', 'IYT-90DE', 'Employee Bonds', 0, 'pay'),
(8, '2023-02-15', '2023-04-13', '20000', 'jsx-11-sa', 'Paertx Commercial PLC.', 1, 'pay'),
(17, '2023-02-01', '2023-05-06', '1000', 'A112', 'THS Corp.', 0, 'rec'),
(19, '2023-02-15', '2023-08-05', '30000', 'A1212', 'Setex PLC', 0, 'rec'),
(20, '0000-00-00', '0000-00-00', '1', 'undefined', 'undefined', 0, 'undefined'),
(21, '0000-00-00', '0000-00-00', '1', 'undefined', 'undefined', 0, 'undefined'),
(22, '0000-00-00', '0000-00-00', '1', 'undefined', 'undefined', 0, 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `ID` int(11) NOT NULL,
  `Amount` decimal(10,4) NOT NULL,
  `date` date NOT NULL,
  `Invoice` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`ID`, `Amount`, `date`, `Invoice`) VALUES
(1, '1000.0000', '2023-02-16', '2PX-1234'),
(2, '9000.0000', '2023-02-16', '2PX-1234');

-- --------------------------------------------------------

--
-- Table structure for table `profit`
--

CREATE TABLE `profit` (
  `ID` int(255) NOT NULL,
  `Type` varchar(255) NOT NULL DEFAULT 'Expense',
  `Amount` int(255) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `Description` varchar(255) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profit`
--

INSERT INTO `profit` (`ID`, `Type`, `Amount`, `date`, `Description`, `deleted`) VALUES
(20, 'Income', 10, '2023-02-06', 'sales', 0),
(21, 'Income', 10000, '2023-02-06', 'sales', 0),
(22, 'Expense', 2056, '2023-02-06', 'Inventory expense', 0),
(23, 'Expense', 1200, '2023-02-07', 'Inventory expense', 0),
(29, 'Expense', 20000, '2023-02-07', 'Employee salary', 0),
(30, 'Income', 254000, '2023-02-07', 'Investment Return', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asset`
--
ALTER TABLE `asset`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `payable`
--
ALTER TABLE `payable`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
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
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `currency`
--
ALTER TABLE `currency`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payable`
--
ALTER TABLE `payable`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profit`
--
ALTER TABLE `profit`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
