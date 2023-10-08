import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const prodConfig = {
  ...baseConfig,
  // remotes: [
  //   ['casa', 'http://localhost:4600/casa'],
  //   ['cards', 'http://localhost:4500/cards'],
  // ],
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
