# MfeRmNx

Micro Frontend in React Monorepo using Nx Integrated-style repo.

## Main functional Repo structure (note each folder is a separate project)

```
mfe-rm-nx
  |-- aps
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

- To start the Cards Remote MFE development server run `nx serve cards`. Open your browser and navigate to http://localhost:4500/.
- To start the Casa Remote MFE development server run `nx serve casa`. Open your browser and navigate to http://localhost:4600/.
- To start the Host Container MFE development server with hot reload, run `nx serve host-container devRemotes=cards, casa`. Open your browser and navigate to http://localhost:4300/. (NOTE: `nx serve host-container` runs without hot reload when changes are made to the remote MFE's)

## Linting

- To lint Cards: `nx lint cards`
- To lint Casa: `nx lint casa`
- To lint Host Container: `nx lint host-container`
- To lint Utils: `nx lint utils`
- To lint shared-ui-components: `nx lint shared-ui-components`

## Unit Testing

- To run unit test for Cards: `nx test cards`
- To run unit test for Casa: `nx test casa`
- To run unit test for Host Container: `nx test host-container`
- To run unit test for Utils: `nx test utils`
- To run unit test for shared-ui-components: `nx test shared-ui-components`

## Build for production deploy

- To build Cards: `nx build cards`. It will generate output in dist/apps/cards.
- To build Casa: `nx build casa`. It will generate output in dist/apps/casa.
- To build Host Container: `nx build host-container`. It will generate output in dist/apps/host-container.
- To build utils: `nx build utils`. It will generate output in dist/libs/utils.
- To build shared-ui-components: `nx build shared-ui-components`. It will generate output in dist/libs/shared-ui-components.

Notes:

- Utils & shared-ui-components need not be built as they are libraries & not apps.
- shared-ui-components use `vite` as build tool, instead of `webpack`.

## Run-many

- `nx run-many -t lint`: Run all lints
- `nx run-many -t test`: Run all tests
- `nx run-many -t build`: Run all builds
- `nx run-many -t test -p proj1 proj2`: Test proj1 and proj2
- `nx run-many -t test -p proj1 proj2 --parallel=5`: Test proj1 and proj2 in parallel of 5 tasks
- `nx run-many -t test -p proj1 proj2 --parallel=false`: Tet proj1 and proj2 in sequence

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

## Additional Reading

- Micro Frontend Anarchy (https://www.thoughtworks.com/en-ca/radar/techniques/micro-frontend-anarchy)

## TBD: More details to be added.
