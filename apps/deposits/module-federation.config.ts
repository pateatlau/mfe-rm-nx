import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'deposits',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
