const casl = require('casl');

module.exports = function defineAbilitiesFor(user) {
  return casl.AbilityBuilder.define(can => {
    can(['read', 'create'], 'all');
    can(['update', 'delete'], 'all', { user: user });
  });
};
