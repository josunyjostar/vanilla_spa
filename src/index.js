// import App from '../App.js';
import {CartPage, ProductDetailPage, ProductListPage, NotFound} from './pages/index.js';
const root = document.getElementById('App');
const navigation = document.getElementById('navigation');

const routes = [
  {path: '/', component: ProductListPage},
  {path: '/cart', component: CartPage},
  {path: '/detail', component: ProductDetailPage},
];

const render = path => {
  const _path = path ?? window.location.pathname;
  const component = routes.find(route => route.path === _path).component || NotFound;
  root.replaceChildren(new component(1));
};

navigation.addEventListener('click', e => {
  if (!e.target.matches('#navigation > li > a')) return;
  e.preventDefault();

  const path = e.target.getAttribute('href');

  if (path === window.location.pathname) return;

  window.history.pushState(null, null, path);
  render(path);
});

window.addEventListener('popstate', () => {
  console.log('popstate:', window.location.pathname);
  render();
});
window.addEventListener('DOMContentLoaded', () => {
  render();
});
