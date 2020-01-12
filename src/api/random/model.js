import mongoose, { Schema } from 'mongoose'

const randomSchema = new Schema({
    text: {
      type: String
    },
    value: {
      type: Number
    }
  }, { timestamps: true })

  const model = mongoose.model('Random', randomSchema)

export const schema = model.schema
export default model