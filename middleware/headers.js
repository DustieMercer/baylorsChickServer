const Header = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers", "Authorization, X-Requested-With, Content-Type, Content-Length, Accept, Origin");
    next();
  
  };

module.exports = Header;