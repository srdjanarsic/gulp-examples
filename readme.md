# Gulp examples

Testing gulp features.

## Installation && Usage

1. Clone this repo.
2. Run `npm install` inside `gulp_examples` directory.
3. Execute `glup` inside particular example directory (jshint, async-execution ...).

## Examples

### [async-execution](./async-execution) - async execution using callback

Shows how to inform gulp when task is done. this example uses callback. Also we can return Stream or Promise.

### [custom-task](./custom-task) - take nodejs power to create custom task

Shows how to use nodejs to execute task.

### [debug](./debug) - output stream events to console.

This example log events to console in order to show streams behavior

### [jshint](./jshint) - jshint example (jshint and jshint-stylish), including watcher.

Shows how to use jshint plugin to validate js code

### [pipe-function](./pipe-function) - inline "pipe function" - quick and dirty

This example shows inline pipe function. Instead of creating plugin we can use this approach to pipe custom alter to gulp pipeline.

### [plumber](./plumber) - handling stream errors with plumber

Sometimes, usally during development it is useful to get all errors instead of getting one and then break task pipeline. Plumber plugin prevents pipe break on error so task continues its execution.

### [shell-exec](./shell-exec) - spawn process using child_process.exec

Shows how to execute shell command (or cli tool).



TODO: TRANSFORMABLE STREAM, node stream, readable stream, STREAM !!!!!

