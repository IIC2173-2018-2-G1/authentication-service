var requestProxy = require("express-request-proxy");

let addTokenAndRedirect = (req, res, next, url) => {
  try {
    const {
      payload: { id }
    } = req;

    let proxy = requestProxy({
      url: url,
      headers: {
        "X-User-ID": id
      }
    });
    proxy(req, res, next);
  } catch (e) {
    let proxy = requestProxy({
      url,
    });
    proxy(req, res, next);
  }
};

module.exports = addTokenAndRedirect;
