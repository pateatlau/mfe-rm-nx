import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host-container',
  remotes: ['cards', 'casa'],
};

export default config;
