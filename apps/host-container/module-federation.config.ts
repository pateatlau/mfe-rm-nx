import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host-container',
  remotes: ['cards'],
};

export default config;
