global.log = (...messages) => {
  messages.map(message => {
    console.log(message);
  });
};

module.exports = require('./tramix');