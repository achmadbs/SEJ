import DetailCategory from '../pages/detail-category';
import Home from '../pages/home';

const routes = [
  { path: '/', element: Home },
  { path: '/:categoryName', element: DetailCategory },
];

export default routes;
