const Header = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS, PATCH");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-Length, Accept, Authorization');
    if (req.method == 'OPTIONS') {
      res.sendStatus(200);
  } else {
    next();
  }
  };
  



// (req, res, next) => {
//     res.header('access-control-allow-origin', '*');
//     res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
//     res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     return next();
// };

module.exports = Header;