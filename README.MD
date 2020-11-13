# lerna exec

`lerna exec --parallel -- babel --root-mode upward src -d lib --ignore **/*.stories.js,**/*.spec.js`

Let’s dissect this command. lerna exec will take any command and run it over all of the different packages. This command instructs Babel to run in parallel over every package, pulling from the /src folder and compiling into the /lib folder. We don’t want to include any tests or stories (which we’ll get to later) in the compiled output.

Using --root-mode upward is the special sauce to using Yarn workspaces. This tells Babel the node_modules are located in the root instead of nested inside each of the individual packages. This prevents each package from having the same node_modules and extracts them up to the root. We’ll be utilizing a similar approach for testing later.
