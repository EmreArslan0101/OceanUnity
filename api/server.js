require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/errorMiddleware')
const connectDb = require('./config/dbConnection')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const topicRoutes = require('./routes/topic.routes')
const reviewRoutes = require('./routes/review.routes')
const eventRoutes = require('./routes/event.routes')

const morgan = require('morgan')
const path = require('path')

const multer = require('multer')

const fs = require('fs')
const { createEvent } = require('./controller/event.controller')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())
app.use(
  '/blogImages',
  express.static(path.join(__dirname, 'public/blogImages'))
)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/blogImages')
  },
  filename: function (req, file, cb) {
    const filePath = 'public/blogImages/' + file.originalname

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        cb(null, file.originalname)
      } else {
        cb(new Error('Bu isimde bir dosya zaten var. Başka Bir isim deneyin'))
      }
    })
  },
})

const upload = multer({ storage })

// app.post('/create-product', uploadOne.array('pictures[]'), createProduct)
// app.patch('/update-product', updateProduct)

app.post('/create-event', upload.single('img'), createEvent)
// app.post('/create-slider', uploadThree.single('img'), createSlider)

// app.put('/update-category', uploadTwo.single('img'), updateCategory)

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/topic', topicRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/event', eventRoutes)

app.use(errorHandler)
connectDb()
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`)
})
