import mongoose, { Schema } from 'mongoose'
import * as Random from '../random/model'

export const create = ({ bodymen: { body } }, res, next) => {
    Random.create(body)
    .then((random) => console.log(random))
    .then(success(res, 201))
    .catch(next)
}

export const show = ({ params, querymen: { query } }, res, next) => {
    Random.find(query)
    .then((random) => console.log(random))
    .then(success(res, 201))
    .catch(next)
}