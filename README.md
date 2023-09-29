# MfeRmNx

Micro Frontend in React Monorepo using Nx Integrated-style repo.

## Main functional Repo structure (note each folder is a separate project)
`mfe-rm-nx`
`  |-- aps`
`  |   |-- cards (remote React MFE)`
`  |   |-- casa (remote React MFE)`
`  |   |-- host-container (host React MFE)`
`  |-- libs`
`  |   |-- shared-ui-components (React UI library)`
`  |   |-- utils (JS/TS utility library)`

## Start the app in local
- To start the Cards Remote MFE development server run `nx serve cards`. Open your browser and navigate to http://localhost:4500/.
- To start the Casa Remote MFE development server run `nx serve casa`. Open your browser and navigate to http://localhost:4600/.
- To start the Host Container MFE development server run `nx serve host-container`. Open your browser and navigate to http://localhost:4300/.

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

Note: Utils & shared-ui-components need not be built as they are libraries & not apps.

## Project dependency graph
`nx dep-graph`. It will open the graph in the browser at http://127.0.0.1:4211/projects. Click at "Show all projects" in the left panel to view the graph.

## TBD: More details to be added.
