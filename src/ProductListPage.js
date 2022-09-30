export default function ProductListPage({app}) {
  const page = document.createElement('div');
  page.className = 'ProductListPage';
  page.innerHTML = '<h1>상품목록</h1>';

  this.render = () => {
    app.appendChild(page);
  };
}
