import { ModuleFederationConfig } from '@nx/webpack';

// const config = {
const config: ModuleFederationConfig = {
  name: 'host-container',
  remotes: ['cards', 'casa', 'loans-angular'],
};

export default config;
