import Ember from 'ember';
import ValidatorsMessages from 'ember-cp-validations/validators/messages';

const { Logger:logger } = Ember;

export default function() {
  ValidatorsMessages.reopen({
    intl: Ember.inject.service(),
    prefix: 'errors',

    getDescriptionFor(attribute, context = {}) {
      const key = `${this.get('prefix')}.description`;
      const intl = this.get('intl');

      if (intl && intl.exists(key)) {
        return intl.t(key, context);
      }

      return this._super(...arguments);
    },

    getMessageFor(type, context = {}) {
      const key = `${this.get('prefix')}.${type}`;
      const intl = this.get('intl');

      if (intl && intl.exists(key)) {
        return this.formatMessage(intl.t(key, context));
      }

      logger.warn(`[ember-intl-cp-validations] Missing translation for validation key: ${key}\nhttp://offirgolan.github.io/ember-cp-validations/docs/messages/index.html`);

      return this._super(...arguments);
    }
  });
}
