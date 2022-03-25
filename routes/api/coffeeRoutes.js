const express = require('express')
const router = express.Router()
const fetch =(...args)=> import('node-fetch').then(({default:fetch})=> fetch(...args))

router.get('/', (req,res)=> {
    const URL = 'https://api.sampleapis.com/coffee/hot'
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        res.render('pages/coffee', {
            title: 'All Coffee',
            name: 'Coffee List',
            data
        })
    })
})


router.get('/:id', (req,res)=> {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/coffee/hot/${id}`

    fetch(URL)
    .then(res => res.json())
    .then(data => {
        if(Object.keys(data).length >= 1) {
            res.render('pages/single-coffee', {
                title: `${data.title}`,
                name: `${data.title}`,
                data
            })
        } else {
            res.render('pages/404', {
                title: '404 Error - Page not found',
                name: '404'
            })
        }
    })
    .catch(error => {
        console.log('ERROR', error)
    })
})

module.exports = router