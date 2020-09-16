const { order, getProdukByNama, updateStok } = require("./order.service");
const pool = require("../../config/database");
var Chance = require('chance');
var chance = new Chance();
var status = chance.pickone(['success', 'failed']);

module.exports = {
    orderProduk: (req, res) => {
        const body = req.body;
        getProdukByNama(body, (err, result) => {
            if (err) {
                console.log(err);
              }
            if (!result) {
                return res.json({
                  success: 0,
                  data: "Produk tidak ditemukanl!!!"
                });
            }
            if (result) {
                order(body, (err, results) => {
                    if (err) {
                      console.log(err);
                      return res.status(500).json({
                        success: 0,
                        message: "Order Gagal!!!"
                      });
                    }
                if(results){
                    updateStok(body, (err, results) => {
                        return res.json({
                            message: "Order Sukses!!!",
                            data: results
                          });
                      });
                }});  
            }
        });
      }   
  };