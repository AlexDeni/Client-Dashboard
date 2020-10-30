import Home from './pages/Home';
import { Author } from './pages/Author';
import { Registration } from './pages/Registration';
import Editor from './pages/Editor';

export default [
    {
        path: '/registration',
        component: Registration,
        exact: true,
    },
    {
        path: '/author',
        component: Author,
        exact: true,
    },
    {
        path: '/editor',
        component: Editor,
        exact: true,
    },
    {
        path: '/',
        component: Home,
        exact: true,
    },
];
