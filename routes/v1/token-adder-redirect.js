const mongoose = require('mongoose');
const Users = mongoose.model('Users');
var requestProxy = require("express-request-proxy");

let addTokenAndRedirect = (req, res, next, url) => {
  try {
    const { payload: { id } } = req;
    return Users.findById(id)
      .then((user) => {
        let proxy = requestProxy({
          url: url,
          headers: {
            "current-user": JSON.stringify(user)
          }
        })
        console.log(`redirecting to: ${url}`);
        proxy(req, res, next);

      });
  } catch (e) {
    let proxy = requestProxy({
      url: url,
      headers: {
        "current-user": ''
      }
    })
    console.log(`redirecting to: ${url}`);
    console.log(`no user found`);
    proxy(req, res, next);
  }

}

module.exports = addTokenAndRedirect;