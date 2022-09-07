import { Router } from 'express';
import Main from './api/Main';
import Users from './api/Users';
import Posts from './api/Posts';
import Refresh from './api/Refresh';

const router = Router();

router.use('/', Main);
router.use('/users', Users);
router.use('/posts', Posts);
router.use('/refresh', Refresh);

export default router;
