import { Router } from 'express';
import Main from './api/Main';
import Users from './api/Users';
import Posts from './api/Posts';

const router = Router();

router.use('/', Main);
router.use('/users', Users);
router.use('/posts', Posts);

export default router;
