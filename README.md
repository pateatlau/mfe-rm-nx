# MfeRmNx

Micro Frontend in React Monorepo using Nx Integrated-style repo.

## Main functional Repo structure (note each folder is a separate project)

```
mfe-rm-nx
  |-- apps
  |   |-- deposits (remote React MFE)
  |   |-- cards (remote React MFE)
  |   |-- casa (remote React MFE)
  |   |-- loans-angular (remote Angular MFE)
  |   |-- host (host React MFE)
  |-- libs
  |   |-- shared-ui (React UI component library)
  |   |-- utils (JS/TS utility library)
```

## Installing Nx Globally

Run `npm i --global nx@latest`. It is recommended to install it globally as we can then directly run it directly, eg. `nx serve cards` instead of having to use NPX with every command if it is installed locally, eg. `npx nx serve cards`.

## Installing NPM packages

Navigate to the root repo folder (mfe-rm-nx) and run `npm i`. That's it! No need to install the NPM packages to all the different sub-folders (projects) separately. All the NPM packages are installed in the project root only. Once the NPM packages are installed with this single command, you are good to go!

## Start the app in local

- To start the Deposits Remote MFE development server run `nx serve deposits`. Open your browser and navigate to http://localhost:4800/.
- To start the Cards Remote MFE development server run `nx serve cards`. Open your browser and navigate to http://localhost:4500/.
- To start the Casa Remote MFE development server run `nx serve casa`. Open your browser and navigate to http://localhost:4600/.
- To start the Loans Remote MFE development server run `nx serve loans-angular`. Open your browser and navigate to http://localhost:4700/.
- To start the Host Container MFE development server with hot reload, run `nx serve host devRemotes=deposits, cards, casa` (loans-angular is temporarily not linked with the host container). Open your browser and navigate to http://localhost:4300/. (NOTE: `nx serve host` runs without hot reload when changes are made to the remote MFE's)

## Linting

- To lint Deposits : `nx lint deposits`
- To lint Cards: `nx lint cards`
- To lint Casa: `nx lint casa`
- To lint Host Container: `nx lint host-container`
- To lint Utils: `nx lint utils`
- To lint shared-ui-components: `nx lint shared-ui`

## Unit Testing

- To run unit test for Deposits : `nx test deposits`
- To run unit test for Cards: `nx test cards`
- To run unit test for Casa: `nx test casa`
- To run unit test for Loans: `nx test loans-angular`
- To run unit test for Host: `nx test host`
- To run unit test for Utils: `nx test utils`
- To run unit test for shared-ui-components: `nx test shared-ui`

## Build for production deploy

- To build Deposits : `nx build deposits`
- To build Cards: `nx build cards`. It will generate output in dist/apps/cards.
- To build Casa: `nx build casa`. It will generate output in dist/apps/casa.
- To build Loans: `nx build loans-angular`. It will generate output in dist/apps/loans-angular.
- To build Host Container: `nx build host`. It will generate output in dist/apps/host.
- To build utils: `nx build utils`. It will generate output in dist/libs/utils.
- To build shared-ui: `nx build shared-ui`. It will generate output in dist/libs/shared-ui.

Notes:

- Utils & shared-ui need not be built as they are libraries & not apps.
- shared-ui use `vite` as build tool, instead of `webpack`.

## Run-many

- `nx run-many -t lint`: Run all lints
- `nx run-many -t test`: Run all tests
- `nx run-many -t build`: Run all builds
- `nx run-many -t test -p cards casa`: Test cards and casa
- `nx run-many -t test -p cards casa --parallel=5`: Test cards and casa in parallel of 5 tasks
- `nx run-many -t test -p cards casa --parallel=false`: Test cards and casa in sequence

## Affected

- `nx affected -t test`: Run tests on all affected projects
- `nx affected -t lint test build`: Run lints, tests and builds on all affected projects
- `nx affected  --target=lint  --base=HEAD~1`: Run lints on all projects that were affected by last commit.
- `nx affected  --target=test  --base=HEAD~1`: Run tests on all projects that were affected by last commit.
- `nx affected  --target=build  --base=HEAD~1`: Run builds on all projects that were affected by last commit.

## Project dependency graph

- `nx graph`: It will open the graph in the browser at http://127.0.0.1:4211/projects. Click at "Show all projects" in the left panel to view the graph.
- `nx graph --affected --base=HEAD~1`: Same as above, except it will show or highlight the projects that were affected by the last commit.

## References

- Nx official website (https://nx.dev/)
- Nx official documentation (https://nx.dev/getting-started/intro). There's a ton of links in this page, just click at the relevant link / section in left panel.

## Additional Reading

- Micro Frontend Anarchy (https://www.thoughtworks.com/en-ca/radar/techniques/micro-frontend-anarchy)

## TBD: More details to be added.
