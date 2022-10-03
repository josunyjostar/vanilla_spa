// import ProductListPage from './pages/ProductListPage.js';
// import ProductDetailPage from './pages/ProductDetailPage.js';
// import CartPage from './pages/CartPage.js';
// import {init} from './utils/router.js';

// export default function App({app}) {
//   this.route = () => {
//     const {pathname} = location;
//     app.innerHTML = '';

//     if (pathname === '/cart') {
//       //cart page
//       new CartPage({app}).render();
//     } else if (pathname.indexOf('/products/') === 0) {
//       const [, , productId] = pathname.split('/');
//       new ProductDetailPage({app, productId}).render();
//     } else if (pathname === '/') {
//       new ProductListPage({app}).render();
//     }
//     //
//   };
//   init(this.route);
//   this.route();
// }
