const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
      pool.query(
        `insert into tbl_produk(nama_produk, harga_jual, stok) 
                  values(?,?,?)`,
        [
          data.nama_produk,
          data.harga_jual,
          data.stok
        ],
        (err, results, fields) => {
          if (err) {
            callBack(err);
          }
          return callBack(null, results);
        }
      );
    },
    getProduk: callBack => {
        pool.query(
          `select * from tbl_produk`,
          [],
          (err, results, fields) => {
            if (err) {
              callBack(err);
            }
            return callBack(null, results);
          }
        );
    }
}