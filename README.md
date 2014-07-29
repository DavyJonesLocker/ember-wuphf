# Ember Wuphf

[![Build](https://travis-ci.org/dockyard/ember-wuphf.svg?branch=master)](https://travis-ci.org/dockyard/ember-wuphf)

## About ##

Easily add alert messages everywhere in your ember-cli apps

[Learn more about WUPHF!](http://www.youtube.com/embed/8wfG8ngFvPk)

## Install ##

```bash
npm install ember-wuphf --save-dev
```

## Usage ##

In the template you want the alert messages to appear use the
componenent:

```handlebars
{{x-wuphf}}
```

Write a new message to the alert system for it to appear:

```js
this.wuphf.info("Thank you for signing up!");
```

You can access the `wuphf` object from Controllers, Routes, and
Components.

### Message Types ###

#### Danger ####

```js
this.wuphf.danger("Danger message");
```

#### Info ####

```js
this.wuphf.info("Info message");
```

#### Success ####

```js
this.wuphf.success("Success message");
```

#### Warning ####

```js
this.wuphf.warning("Warning message");
```

#### Custom ####

```js
this.wuphf.pushObject({type: 'custom', message: 'Custom Message');
```

##### Register custom types #####

If you have a custom type you want to use often you can register it for
easy use later.

```js
this.wuphf.registerType('emergency');
this.wuphf.emergency('Oh no!');
```

You can register multiple types at once with the plural form:

```js
this.wuphf.registerTypes('emergency', 'normal');
this.wuphf.emergency('Oh no!');
this.wuphf.normal('Back to business');
```

### Styling ###

The alert container has a class of `.wuphf-message-container`. Each
message has a class of `.wuphf-message` as well as the `:type`.

### Customizing ###

By default messages only disappear after a user clicks on it. You can
set an optional timeout for the message to automatically dismiss.


#### Global timeout ####

```js
// dismiss after 5 seconds
this.wuphf.timeout = 5000;
```

#### Per-message timeout ####

```js
// dismiss after 5 seconds
this.wuphf.info('Info message', 5000);
```

```js
// dismiss after 5 seconds
this.wuphf.pushObject({type: 'custom', message: 'Custom Message', timeout: 5000});
```

### Clearing ###

If you don't set a timeout the messages don't disappear automatically
so sometimes you may want to clear them before showing a new message.
As the queue is an Ember.ArrayProxy object you can use its `clear()` method.

```js
// clear messages queue
this.wuphf.clear();
```

## Authors ##

* [Brian Cardarella](http://twitter.com/bcardarella)

[We are very thankful for the many contributors](https://github.com/dockyard/ember-wuphf/graphs/contributors)

## Versioning ##

This library follows [Semantic Versioning](http://semver.org)

## Want to help? ##

Please do! We are always looking to improve this gem. Please see our
[Contribution Guidelines](https://github.com/dockyard/ember-wuphf/blob/master/CONTRIBUTING.md)
on how to properly submit issues and pull requests.

## Legal ##

[DockYard](http://dockyard.com), Inc &copy; 2014

[@dockyard](http://twitter.com/dockyard)

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
