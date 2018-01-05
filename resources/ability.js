const casl = require('casl');

module.exports = function defineAbilitiesFor(user) {
  return casl.AbilityBuilder.define(
    { subjectName: item => item.type },
    can => {
      can(['read', 'create'], 'Post');
      can(['update', 'delete'], 'Post', { user: user });
    }
  );
};
