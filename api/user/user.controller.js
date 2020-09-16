const { JsonWebTokenError } = require("jsonwebtoken");
const { getUserByUserEmail } = require("./user.service");
//const { compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    getUsers: (req, res) => {
        getUsers((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body, (err, results) => {
            if (err) {
                console.log(err);
              }
            if (!results) {
                return res.json({
                  success: 0,
                  data: "Login Gagal!!!"
                });
            }
            if (results) {
                const jsontoken = jwt.sign({results}, 'qwer123', {
                    expiresIn: "24h"
                })
                return res.json({
                  success: 1,
                  data: "Login Sue!!!",
                  token: jsontoken
                });
            }
        });
      }    
  };