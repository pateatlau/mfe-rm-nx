import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host-container',
  remotes: ['cards', 'casa', 'deposits'],
};

export default config;
