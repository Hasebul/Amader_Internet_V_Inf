const express = require('express');
const ispRouter = express.Router();

//middlewares
const authenticate = require('../middlewares/authenticate');

const ispController = require('../controllers/ispController');


ispRouter.post('/insert',ispController.handleIspInsertOne);//ispController.handleIspInsertOne

ispRouter.post('/preferPackages', ispController.handlefetchIspPackages ) ;// dorkar nai eta
ispRouter.post('/fetchOwnPackage',ispController.handlefetchOwnPackage);//dorkar nai ar delete kora lagbe
ispRouter.post('/fetchOwnPackageArray',ispController.handlefetchOwnPackagesArray);//isp fetch his own registered packages


ispRouter.post('/fetchOwnData',ispController.handlefetchOwnData);

ispRouter.get('/fetch',ispController.getIspData);//dorkar nai eta 
ispRouter.post('/buyPackage',ispController.handlebuyPackage);
ispRouter.post('/addPackageToArray',ispController.handleAddPackageToArray);

ispRouter.post('/login',authenticate.handleIspLogIn)
ispRouter.post('/logout',authenticate.handleIspAuthentication,ispController.handleIspLogOut);
ispRouter.post('/logoutAll',authenticate.handleIspAuthentication,ispController.handleIspLogOutAll)
ispRouter.get('/updateConnectionStatus',authenticate.handleIspAuthentication,ispController.handleUpdateConnectionStatus)


module.exports = ispRouter;
