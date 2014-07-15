# Ember Wuph

[See a demo](http://jsbin.com/vijen/1)

[![Build](https://travis-ci.org/dockyard/ember-wuph.svg?branch=master)](https://travis-ci.org/dockyard/ember-wuph)

## About ##

Easily add alert messages to your ember-cli apps

## Install ##

```bash
npm install ember-wuph --save-dev
```

## Usage ##

In the template you want the alert messages to appear use the
componenent:

```handlebars
{{x-wuph}}
```

Write a new message to the alert system for it to appear:

```js
this.wuph.info("Thank you for signing up!");
```

You can access the `wuph` object from Controllers, Routes, and
Components.

### Message Types ###

#### Danger ####

```js
this.wuph.danger("Danger message");
```

#### Info ####

```js
this.wuph.info("Info message");
```

#### Success ####

```js
this.wuph.success("Success message");
```

#### Warning ####

```js
this.wuph.warning("Warning message");
```

#### Custom ####

```js
this.wuph.pushObject({type: 'custom', message: 'Custom Message');
```

### Styling ###

The alert container has a class of `.wuph-message-container`. Each
message has a class of `.wuph-message` as well as the `:type`.

### Customizing ###

By default messages only disappear after a user clicks on it. You can
set an optional timeout for the message to automatically dismiss.

```js
// dismiss after 5 seconds
this.wuph.timeout = 5000;
```

## Authors ##

* [Brian Cardarella](http://twitter.com/bcardarella)

[We are very thankful for the many contributors](https://github.com/dockyard/ember-cli-async-button/graphs/contributors)

## Versioning ##

This library follows [Semantic Versioning](http://semver.org)

## Want to help? ##

Please do! We are always looking to improve this gem. Please see our
[Contribution Guidelines](https://github.com/dockyard/ember-cli-async-button/blob/master/CONTRIBUTING.md)
on how to properly submit issues and pull requests.

## Legal ##

[DockYard](http://dockyard.com), Inc &copy; 2014

[@dockyard](http://twitter.com/dockyard)

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
