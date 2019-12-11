const express = require('express')
const bodyParser = require('body-parser')
const configs = require('./src/configs/configs')
const logger = require('morgan')
const cors = require('cors')
const allowedOrigins = ['http://localhost:3000']

const app = express()
const port = configs.port
const routerNav = require('./src/index')

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}))

app.use('/', routerNav)

app.get('*',(req,res)=>{
	res.send('404 not found')
})

module.exports = app
