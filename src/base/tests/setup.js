global.window = global;

window.requestAnimationFrame = () => {
  throw new Error('requestAnimationFrame is not supported in Node');
};

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });
