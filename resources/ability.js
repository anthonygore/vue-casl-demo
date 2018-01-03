import { AbilityBuilder } from 'casl';

export default function(user) {
  return AbilityBuilder.define(can => {
    can(['read', 'create'], 'all');
    can(['update', 'delete'], 'all', { user: user });
  });
}
