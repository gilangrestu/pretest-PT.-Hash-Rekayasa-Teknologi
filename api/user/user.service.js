const pool = require("../../config/database");

module.exports = {
    getUsers: callBack => {
        pool.query(
          `select * from tbl_user`,
          [],
          (err, results, fields) => {
            if (err) {
              callBack(err);
            }
            return callBack(null, results);
          }
        );
    },
    getUserByUserEmail: (data, callBack) => {
        pool.query(
          `select * from tbl_user where email = ? and password = ?`,
          [
              data.email,
              data.password
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