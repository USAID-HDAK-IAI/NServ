const express= require('express');
const router = express.Router();

let AddDeviceInfoApi=require('./AddDeviceInfoHandler/addDeviceInfomodule');

router.get('/deviceInfo',AddDeviceInfoApi.addDeviceInfo); // Testing>>




module.exports=router;