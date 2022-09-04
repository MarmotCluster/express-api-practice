import { Router } from 'express';
import authenticationMiddleware from '../../middlewares/authenticationMiddleware';
import Post from '../../models/Post';

const router = Router();

router.get('/', authenticationMiddleware, async (req, res) => {
    const posts = await Post.findAll();

    res.status(200).json(posts);
});

router.post('/', authenticationMiddleware, async (req, res) => {
    const { title, body } = req.body;

    const post = await Post.create({
        title,
        username: req.user.username,
        body,
    });

    res.json(post);
});

router.delete('/:postId', authenticationMiddleware, async (req, res) => {
    const post = await Post.destroy({
        where: {
            id: req.params.postId,
        },
    });
});

export default router;
