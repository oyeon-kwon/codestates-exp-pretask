import user from './data/user';

export default function userDatahandler(req, res) {
    if(req.method === "GET") {
        res.status(200).json(user)
    } else {
        res.status(404).json('Not found')
    }
}