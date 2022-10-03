export const createElement = stringElement => {
  const temp = document.createElement('template');
  temp.innerHTML = stringElement;
  return temp.content;
};
