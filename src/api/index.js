import { Router } from 'express'
import random from './random'

const router = new Router()

router.use('/random', random)

export default router