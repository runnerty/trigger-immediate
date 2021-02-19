'use strict';

const Trigger = require('@runnerty/module-core').Trigger;
const ms = require('ms');

class triggerImmediate extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  async start() {
    // Start Chain:
    const checkCalendar = false;
    const inputValues = [this.params?.input_values];
    const customValues = this.params?.custom_values;
    const sleep = require('util').promisify(setTimeout);

    // Wait Plan is ready:
    while (!this.runtime.plan) {
      await sleep(5);
    }

    // Times:
    const times = this.params.times || 1;
    for (let i = 0; i < times; i++) {
      // Delay
      await sleep(ms('' + this.params.delay) || 0);

      try {
        this.startChain(checkCalendar, inputValues, customValues);
      } catch (err) {
        this.logger.error('StartChain error (triggerImmediate):', err);
      }
    }
  }
}

module.exports = triggerImmediate;
