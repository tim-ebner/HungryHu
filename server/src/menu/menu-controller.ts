import express from 'express'
import { menues } from './menues'

const router = express.Router()

router.get('/', function (req, res) {
  res.send(menues)
})

export default router
