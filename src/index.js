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
  const component = routes.find(route => route.path === path).component || NotFound;
  root.replaceChildren(new component(1));
};

navigation.onclick = e => {
  if (!e.target.matches('#navigation > li > a')) return;
  e.preventDefault();
  const path = e.target.getAttribute('href');
  render(path);
};

// TODO: 주소창의 url이 변경되지 않기 때문에 새로고침 시 현재 렌더링된 페이지가 아닌 루트 페이지가 요청된다.
window.addEventListener('DOMContentLoaded', () => render('/'));
