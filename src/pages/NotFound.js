export default function NotFound() {
  const page = document.createElement('h1');
  page.className = 'NotFound';
  page.innerHTML = '<h1>404 Not Found</h1>';

  return page;
}
