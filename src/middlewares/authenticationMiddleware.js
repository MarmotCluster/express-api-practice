import jsonwebtoken from 'jsonwebtoken';
import User from '../models/User';

export default async function (req, res, next) {
    try {
        const token = String(req.headers.authorization).split(' ')[1];
        const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({
            where: {
                username: decoded.username,
            },
        });
        if (!user) {
            return res.status(400).json({ message: 'TOKEN_EXPIRED' });
        }

        req.user = user;
        next();
    } catch (e) {
        res.status(400).json({ message: 'UNKNOWN_USER' });
    }
}
