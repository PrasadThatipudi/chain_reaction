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

const startGame = () => {
  const parent = createNode("div", { className: "parent" });
  const dot = createNode("div", { className: "dot" });

  parent.appendChild(dot);
  document.body.appendChild(parent);
};

window.onload = startGame;
