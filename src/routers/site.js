const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/siteController')

//C
router.post('/create/add',siteController.add)
router.get('/create',siteController.create)
//R
router.get('/manage',siteController.manage)
//U
router.get('/edit/:id',siteController.edit)
router.put('/update/:id',siteController.update)
//D
router.delete('/data/:id',siteController.delete)

//detail
router.get('/detail/:id',siteController.detail)



// router.get('/update',siteController.update)



router.get('/',siteController.index)


module.exports = router;

