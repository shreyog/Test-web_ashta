import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { schema } from './model'
import { create, show } from './controller'
// export Random, { schema } from './model'

const router = new Router()

const { text, value } = schema.tree

router.post('/',
  body({ text, value }),
  create)

router.get('/',
    query({}),
    show
)


export default router