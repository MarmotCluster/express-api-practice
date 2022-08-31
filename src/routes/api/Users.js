import { Router } from 'express';
import User from '../../models/User';
import jsonwebtoken from 'jsonwebtoken';

const router = Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    await User.create({
        username,
        password,
    });

    res.json({
        message: 'SUCCEED_SELECT_USER_INFO',
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({
        where: {
            username,
        },
    });
    console.log('유저 출력 : ', user);

    if (user && user.password === password) {
        const privateKey = process.env.SECRET_KEY;
        const token = jsonwebtoken.sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
                username: user.username,
            },
            privateKey
        );

        res.status(200).json({
            message: 'SUCCEED_LOGIN_USER',
            accessToken: token,
        });
    } else {
        res.status(400).json({
            message: 'NON_EXIST_ACCOUNT',
        });
    }
});

export default router;
