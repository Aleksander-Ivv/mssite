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

router.get('/info', (req, res) => {
    pool.query('SELECT * from oc_product', function(err, data) {
        if (err) return console.log(err);
        res.render('info', {
            product:data,
            isInfo: true
        });
    });
})

module.exports = router