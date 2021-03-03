-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Mar 2021 pada 10.12
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlontong`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_keranjang`
--

CREATE TABLE `tb_keranjang` (
  `id` int(11) NOT NULL,
  `id_pembeli` int(11) DEFAULT NULL,
  `id_penjual` int(11) DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL,
  `qyt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_keranjang`
--

INSERT INTO `tb_keranjang` (`id`, `id_pembeli`, `id_penjual`, `id_produk`, `qyt`) VALUES
(17, 2, 1, 5, 3),
(18, 2, 1, 2, 2),
(19, 2, 1, 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pengguna`
--

CREATE TABLE `tb_pengguna` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `saldo` int(225) DEFAULT NULL,
  `foto` text DEFAULT NULL,
  `no_hp` int(12) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `role` int(11) DEFAULT 100
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_pengguna`
--

INSERT INTO `tb_pengguna` (`id`, `nama`, `email`, `password`, `saldo`, `foto`, `no_hp`, `alamat`, `role`) VALUES
(1, 'Penjual123', 'penjual@gmail.com', '$2b$10$1qL3h1qy7ALJNROD9tuzt.keoIpHaf0TxzHWanksn/mT3w8uTHN26', 20000, '1614759230148-inronman.png', 812121212, 'Jakarta', 200),
(2, 'Pembeli123', 'pembeli@gmail.com', '$2b$10$1qL3h1qy7ALJNROD9tuzt.keoIpHaf0TxzHWanksn/mT3w8uTHN26', 180000, NULL, 812121212, 'Bogor', 100);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pesanan`
--

CREATE TABLE `tb_pesanan` (
  `id` int(11) NOT NULL,
  `kode_pesanan` varchar(225) DEFAULT NULL,
  `id_penjual` int(11) DEFAULT NULL,
  `id_pembeli` int(11) DEFAULT NULL,
  `id_produk` int(11) DEFAULT NULL,
  `qyt` int(11) DEFAULT NULL,
  `status` varchar(225) DEFAULT 'dikemas',
  `tgl` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_pesanan`
--

INSERT INTO `tb_pesanan` (`id`, `kode_pesanan`, `id_penjual`, `id_pembeli`, `id_produk`, `qyt`, `status`, `tgl`) VALUES
(2, 'QLONTONG_1', 1, 2, 6, 1, 'batal', '2021-03-03 08:59:52'),
(3, 'QLONTONG_2', 1, 2, 4, 2, 'selesai', '2021-03-03 09:00:20'),
(4, 'QLONTONG_3', 1, 2, 3, 1, 'dikemas', '2021-03-03 09:00:54'),
(5, 'QLONTONG_4', 1, 2, 2, 2, 'dikirim', '2021-03-03 09:00:55'),
(6, 'QLONTONG_5', 1, 2, 1, 1, 'dikemas', '2021-03-03 09:00:57'),
(7, 'QLONTONG_6', 1, 2, 6, 1, 'selesai', '2021-03-03 09:09:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_produk`
--

CREATE TABLE `tb_produk` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) DEFAULT NULL,
  `foto` text DEFAULT NULL,
  `harga` int(225) DEFAULT NULL,
  `stok` int(11) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `tanggal_input` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_penjual` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_produk`
--

INSERT INTO `tb_produk` (`id`, `nama`, `foto`, `harga`, `stok`, `deskripsi`, `tanggal_input`, `id_penjual`) VALUES
(1, 'AQUA Air Mineral 600ml', '1614759365630-aqua-600ml.png', 4500, 100, 'Air mineral asli langsung dari pegunungan', '2021-03-03 08:16:05', 1),
(2, '2TANG Air Mineral 600ml', '1614759639822-2tang-660-ml.png', 3500, 200, 'Air mineral asli langsung dari pegunungan', '2021-03-03 08:20:39', 1),
(3, 'ABC Kecap Manis', '1614760550223-kecap-abc.png', 6000, 50, 'Kecap manis pilihan', '2021-03-03 08:35:50', 1),
(4, 'BANGO Kecap Manis', '1614760622038-kecap-bango.png', 7000, 48, 'Kecap manis pilihan', '2021-03-03 08:37:02', 1),
(5, 'ABC Saus Sambal', '1614760698480-saus-sambal-abc.png', 5000, 50, 'Saus sambal pilihan', '2021-03-03 08:38:18', 1),
(6, 'Indofood Saus Tomat', '1614760739310-saus-tomat-indofood.png', 6000, 49, 'Saus tomat pilihan', '2021-03-03 08:38:59', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_keranjang`
--
ALTER TABLE `tb_keranjang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pembeli` (`id_pembeli`),
  ADD KEY `id_penjual` (`id_penjual`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indeks untuk tabel `tb_pengguna`
--
ALTER TABLE `tb_pengguna`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_pesanan`
--
ALTER TABLE `tb_pesanan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_penjual` (`id_penjual`),
  ADD KEY `id_pembeli` (`id_pembeli`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indeks untuk tabel `tb_produk`
--
ALTER TABLE `tb_produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_penjual` (`id_penjual`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_keranjang`
--
ALTER TABLE `tb_keranjang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `tb_pengguna`
--
ALTER TABLE `tb_pengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tb_pesanan`
--
ALTER TABLE `tb_pesanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `tb_produk`
--
ALTER TABLE `tb_produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tb_keranjang`
--
ALTER TABLE `tb_keranjang`
  ADD CONSTRAINT `tb_keranjang_ibfk_1` FOREIGN KEY (`id_pembeli`) REFERENCES `tb_pengguna` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tb_keranjang_ibfk_2` FOREIGN KEY (`id_penjual`) REFERENCES `tb_pengguna` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tb_keranjang_ibfk_3` FOREIGN KEY (`id_produk`) REFERENCES `tb_produk` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tb_pesanan`
--
ALTER TABLE `tb_pesanan`
  ADD CONSTRAINT `tb_pesanan_ibfk_1` FOREIGN KEY (`id_penjual`) REFERENCES `tb_pengguna` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tb_pesanan_ibfk_2` FOREIGN KEY (`id_pembeli`) REFERENCES `tb_pengguna` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tb_pesanan_ibfk_3` FOREIGN KEY (`id_produk`) REFERENCES `tb_produk` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tb_produk`
--
ALTER TABLE `tb_produk`
  ADD CONSTRAINT `tb_produk_ibfk_1` FOREIGN KEY (`id_penjual`) REFERENCES `tb_pengguna` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
