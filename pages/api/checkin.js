// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import user from './data/user';

export default function handler(req, res) {

  if(req.method === "GET") {
    res.status(200).json(user)
  } else if(req.method === "POST") {
    user.checkInStatus = req.body.checkInStatus
    res.status(200).json(user)
  } else {
    res.status(404).json('Not found')
  }
}
