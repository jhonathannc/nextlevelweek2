const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const cors = require('cors')
const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageLogin } = require('./pages')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
    .use(cors())
    .use(express.urlencoded({ extended: true }))
    .use(express.static('public'))
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .get('/login', pageLogin)
    .listen(process.env.PORT || 5500)