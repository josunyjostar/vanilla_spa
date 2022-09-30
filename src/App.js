const {pathname} = location;

if (pathname === '/') {
  //상품 목록 페이지
} else if (pathname === '/cart') {
  //장바구니
} else if (pathname === '/products') {
  //상품 상세 페이지
}
import ProductListPage from './ProductListPage.js';
import ProductDetailPage from './ProductDetailPage.js';
import CartPage from './CartPage.js';
import {init} from './router.js';

export default function App({app}) {
  this.route = () => {
    const {pathname} = location;
    app.innerHTML = '';
    if (pathname === '/cart') {
      //cart page
      new CartPage({app}).render();
    } else if (pathname.indexOf('/products/') === 0) {
      const [, , productId] = pathname.split('/');
      new ProductDetailPage({app, productId}).render();
    } else if (pathname === '/') {
      new ProductListPage({app}).render();
    }
  };
  init(this.route);
  this.route();
}
