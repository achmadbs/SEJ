import BookmarkList from '../pages/bookmark-list';
import DetailCategory from '../pages/detail-category';
import Home from '../pages/home';

const routes = [
  { path: '/', element: Home },
  { path: '/:categoryName', element: DetailCategory },
  { path: '/bookmark-list', element: BookmarkList },
];

export default routes;
