# ember-intl-cp-validations

Adds support for [ember-intl](https://github.com/yahoo/ember-intl) in ember-cp-validations

## Requirements

* >= [ember-intl](https://github.com/yahoo/ember-intl) 2.0.0-rc.5

## Installation

* `ember install ember-intl-cp-validations`

## Configuring

Implement the following validation messages across your translations:

```yaml
# <project root>/translations/en.yaml
errors:
  description: "This field"
  inclusion: "{description} is not included in the list"
  exclusion: "{description} is reserved"
  invalid: "{description} is invalid"
  confirmation: "{description} doesn't match {on}"
  accepted: "{description} must be accepted"
  empty: "{description} can't be empty"
  blank: "{description} can't be blank"
  present: "{description} must be blank"
  collection: "{description} must be a collection"
  singular: "{description} can't be a collection"
  tooLong: "{description} is too long (maximum is {max} characters)"
  tooShort: "{description} is too short (minimum is {min} characters)"
  before: "{description} must be before {before}"
  after: "{description} must be after {after}"
  wrongDateFormat: "{description} must be in the format of {format}"
  wrongLength: "{description} is the wrong length (should be {is} characters)"
  notANumber: "{description} must be a number"
  notAnInteger: "{description} must be an integer"
  greaterThan: "{description} must be greater than {gt}"
  greaterThanOrEqualTo: "{description} must be greater than or equal to {gte}"
  equalTo: "{description} must be equal to {is}"
  lessThan: "{description} must be less than {lt}"
  lessThanOrEqualTo: "{description} must be less than or equal to {lte}"
  otherThan: "{description} must be other than {value}"
  odd: "{description} must be odd"
  even: "{description} must be even"
  positive: "{description} must be positive"
  date: "{description} must be a valid date"
  email: "{description} must be a valid email address"
  phone: "{description} must be a valid phone number"
  url: "{description} must be a valid url"
```

### Customizing the prefix

To change the errors prefix key from `errors` to any other key, such as `validationErrors` you simply add the following to `app/validators/messages.js`.  Now just ammend your translation files to be nested under the `validationErrors` object instead of `errors`.

```js
// app/validators/messages.js

import ValidatorsMessages from 'ember-cp-validations/validators/messages';

export default ValidatorsMessages.extend({
  prefix: 'validationErrors'
});
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
