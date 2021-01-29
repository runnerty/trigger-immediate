<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Immediate Trigger for [Runnerty]
Trigger for Runnerty internal testing use.

### Installation:
Through NPM

```bash
npm i @runnerty/trigger-immediate
```

You can also add modules to your project with [runnerty-cli]

```bash
npx runnerty-cli add @runnerty/trigger-immediate
```

This command installs the module in your project, adds example configuration in your `config.json`.

If you have installed [runnerty-cli] globally you can include the module with this command:

```bash
rty add @runnerty/trigger-immediate
```
### Configuration:
Add in [config.json]:
```json
{
  "triggers": [
    {
      "id": "immediate",
      "type": "@runnerty-trigger-immediate"
    }
  ]
}
```

### Plan sample:
Add in [plan.json]:
```json
{
  "triggers": [
    {
      "id":"immediate"
    }
  ]
}
```


[Runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/trigger-immediate.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/trigger-immediate
[npm-image]: https://img.shields.io/npm/v/@runnerty/trigger-immediate.svg
[david-badge]: https://david-dm.org/runnerty/trigger-immediate.svg
[david-badge-url]: https://david-dm.org/runnerty/trigger-immediate
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
[runnerty-cli]: https://www.npmjs.com/package/runnerty-cli