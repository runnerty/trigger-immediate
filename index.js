'use strict';

const Trigger = require('@runnerty/module-core').Trigger;

class triggerImmediate extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  start() {
    // Start Chain:
    const checkCalendar = true;
    const inputValues = [params?.input_values];
    const customValues = params?.custom_values;

    this.startChain(checkCalendar, inputValues, customValues).catch(err => {
      _this.logger.error('startChain error (triggerImmediate):', err);
    });
  }
}

module.exports = triggerImmediate;
