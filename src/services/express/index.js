import express from 'express'
import path from 'path'
import cookieParser from'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'


export default (routes) => {
var app = express();




app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(routes)
app.use(queryErrorHandler())
app.use(bodyErrorHandler())

 return app;
}
