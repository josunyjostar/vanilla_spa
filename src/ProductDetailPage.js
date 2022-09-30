export default function ProductDatailPage({app, productId}) {
  this.state = {
    productId,
  };

  const page = document.createElement('div');
  page.className = 'ProductDatailPage';
  page.innerHTML = `<h1>상품 정보</h1>`;

  this.render = () => {
    app.appendChild(page);
  };
}
