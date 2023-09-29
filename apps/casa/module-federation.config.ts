import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'casa',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
