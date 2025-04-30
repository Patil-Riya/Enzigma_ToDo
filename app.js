const express = require('express')
const path = require('path')
const cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const loginRouter = require("./routers/login")  // ./ means current folder
const registerRouter = require("./routers/register")  // ./ means current folder

const app = express()