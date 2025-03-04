const debug = function (arg) {
  console.log(arg);
  return arg;
};

const addStyles = (node, style) =>
  Object.keys(style).map((key) => (node.style[key] = style[key]));

const addAttributes = (node, attributes) => {
  const { style, ...rest } = attributes;

  if (style) addStyles(node, style);

  Object.keys(rest).forEach((property) => {
    node[property] = rest[property];
  });
};

const createNode = (nodeName, attributes = {}, textContent = "") => {
  const node = document.createElement(nodeName);

  node.textContent = textContent;
  addAttributes(node, attributes);

  return node;
};

const createDot = () => createNode("div", { className: "dot" });

const startGame = () => {
  const cell = createNode("div", { className: "cell" });

  cell.onclick = () => cell.appendChild(createDot());

  document.body.appendChild(cell);
};

window.onload = startGame;
