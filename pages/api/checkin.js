// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import user from './data/user';

export default function chechInHandler(req, res) {
 if(req.method === "POST" && req.body.checkInStatus) {
  // 입실 요청
  user.checkInStatus = req.body.checkInStatus
  user.checkInLog.push({ checkInTime: req.body.checkInTime })
  res.status(200).json(user)
} else if(req.method === "POST" && !req.body.checkInStatus) {
    // 퇴실 요청
    user.checkInStatus = req.body.checkInStatus
    user.checkInLog.push({ checkOutTime: req.body.checkOutTime })
    res.status(200).json(user)
  } else {
    res.status(404).json('Not found')
  }
}
