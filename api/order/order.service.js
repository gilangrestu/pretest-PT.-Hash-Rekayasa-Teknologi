const pool = require("../../config/database");

module.exports = {
    order: (data, callBack) => {
        pool.query(
          `insert into tbl_transaksi(nama_produk, jumlah) 
                    values(?,?)`,
          [
            data.nama_produk,
            data.jumlah
          ],
          (err, results, fields) => {
            if (err) {
              callBack(err);
            }
            return callBack(null, results);
          }
        );
      },
    getProdukByNama: (data, callBack) => {
        pool.query(
          `select nama_produk from tbl_produk where nama_produk = ?`,
          [
              data.nama_produk
          ],
          (err, results, fields) => {
            if (err) {
              callBack(err);
            }
            return callBack(null, results[0]);
          }
        );
      },
      updateStok: (data, callBack) => {
        pool.query(
          `UPDATE tbl_produk SET stok = (stok - ?) WHERE nama_produk=?`,
          [
            data.jumlah,
            data.nama_produk
          ],
          (err, results, fields) => {
            if (err) {
              callBack(err);
            }
            return callBack(null, results[0]);
          }
        );
      }
}