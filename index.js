const express=require('express');
const app=express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.use('/API', require('./API/index'));



const server=app.listen(8080, () => {
          let host=server.address().address;
          let port=server.address().port;
          console.log("server listening at http://"+host+":"+port+"/");
});