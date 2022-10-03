// import App from '../App.js';
import {CartPage, ProductDetailPage, ProductListPage, NotFound} from './pages/index.js';
const root = document.getElementById('App');
const navigation = document.getElementById('navigation');

const routes = [
  {path: '', component: ProductListPage},
  {path: 'cart', component: CartPage},
  {path: 'detail', component: ProductDetailPage},
];

const render = () => {
  const hash = window.location.hash.replace('#', '');
  const component = routes.find(route => route.path === hash).component || NotFound;
  root.replaceChildren(new component(1));
};

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
