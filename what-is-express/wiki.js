const express = require('express');
const router = express.Router();

// 首页路由
router.get('/', (req, res) => {
    console.log('wiki首页');
    res.send('wiki首页')
})

//“关于”页面路由
router.get('/about', (req, res) => {
    console.log('wiki关于');
    res.send('wiki关于')

})
module.exports = router;