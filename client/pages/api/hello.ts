// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connect } from 'http2'
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../database/conn'
import connectMongoose from '../../database/conn'
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectMongo()
  res.status(200).json({ name: 'John Doe' })
}
