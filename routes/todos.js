const { Router } = require('express')
const router = Router()
const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'alexfi.beget.tech',
    database: "alexfi_ritm",
    user: 'alexfi_ritm',
    password: 'e8&CQiNA'
})


router.get('/', (req, res) => {
    res.render('index', {
        isIndex: true,
        title: 'Список задач'
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        isCreate: true,
        title: 'Новая задача'
    })
})

router.get('/info', async (req, res) => {
    pool.query('SELECT * from oc_product', function(err, data) {
        if (err) return console.log(err);
        res.render('info', {
            product:data,
            isInfo: true
        });
    });
})

router.post('/create', async (req, res) => {
    const product = req.body.title
    console.log(req.body)
    pool.query('INSERT INTO oc_product (sku, price) VALUES (?, ?)', [product, 3], function(err, data){
        if (err) return console.log(err)
    })
    res.redirect('/info')
})

router.post('/info', async (req, res) => {
    console.log(req.body.sku_id)
    pool.query('DELETE FROM oc_product WHERE sku=?', [req.body.sku_id], function(err, data){
        if (err) return console.log(err)
    })
    res.redirect('/info')
})


module.exports = router