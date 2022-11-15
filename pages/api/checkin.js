// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// TODO: user 데이터 파일 분리 필요

const user = {
  name: '김코드',
  loginStatus: true,
  checkInStatus: false,
  date: new Date().toUTCString(),
  content: ''
}

export default function handler(req, res) {

  if(req.method === "GET") {
    res.status(200).json(user)
  } else if(req.method === "POST") {
    user.checkInStatus = req.body.checkInStatus
    res.status(200).json(user)
  }
}
