'use strict';

const Trigger = require('@runnerty/module-core').Trigger;

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
    while(!this.runtime.plan){
      await sleep(5);
    }

    try {
      this.startChain(checkCalendar, inputValues, customValues);
    } catch (err) {
      this.logger.error('StartChain error (triggerImmediate):', err);
    }
  }
}

module.exports = triggerImmediate;
