import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cards',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
