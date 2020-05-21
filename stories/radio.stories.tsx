import { storiesOf } from '@storybook/react'
import React from 'react'

import { Radio } from '../src'

storiesOf('Radio', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'left', paddingLeft: 40 }}>{storyFn()}</div>)
  .add('Radio', () => (
    <div>
      <Radio label="Marshmallow" name="sweets" id="marshmallow" value="marshmallow" />
      <Radio label="Ice cream" name="sweets" id="icecream" value="marshmallow" />
      <Radio label="Gingerbread" name="sweets" id="gingerbread" />
    </div>
  ))
  .add('Inline mode', () => (
    <div>
      <Radio inline label="Marshmallow" name="sweets" id="marshmallow" value="marshmallow" />
      <Radio inline label="Ice cream" name="sweets" id="icecream" value="marshmallow" />
      <Radio inline label="Gingerbread" name="sweets" id="gingerbread" />
    </div>
  ))
  .add('HTML in label', () => (
    <div>
      <Radio
        inline
        id="marshmallow"
        value="marshmallow"
        label={
          <span>
            I agree with the <a href="https://www.example.com">licence</a>.
          </span>
        }
      />
    </div>
  ))
  .add('Disabled radio', () => (
    <div>
      <Radio label="Disabled radio" disabled />
    </div>
  ))
  .add('Checked radio', () => (
    <div>
      <Radio defaultChecked label="Checked radio" id="checked" />
    </div>
  ))
  .add('No label radio', () => (
    <div>
      <Radio />
    </div>
  ))
  .add('Valid radio', () => (
    <div>
      <Radio isValid label="Valid radio" id="radio-1" />
      <Radio label="Neutral radio" id="radio-2" />
      <Radio label="Neutral radio" id="radio-3" />
    </div>
  ))
  .add('Valid radio with feedback', () => (
    <div>
      <Radio
        isValid
        label="Valid with feedback"
        id="valid-feedback"
        feedback="Everything looks good!"
      />
      <Radio
        isValid
        label="Custom feedback with HTML"
        id="invalid-custom-feedback"
        feedback={
          <span>
            Everything looks ok! <a href="https://www.example.com">More</a>
          </span>
        }
      />
    </div>
  ))
  .add('Invalid radio', () => (
    <div>
      <Radio isInvalid label="Invalid radio" id="invalid" />
      <Radio label="Neutral radio" id="radio-2" />
      <Radio label="Neutral radio" id="radio-3" />
    </div>
  ))
  .add('Invalid radio with feedback', () => (
    <div>
      <Radio
        isInvalid
        label="Invalid with feedback"
        id="invalid-feedback"
        feedback="Oups, something went wrong..."
      />
      <Radio
        isInvalid
        label="Custom feedback with HTML"
        id="invalid-custom-feedback"
        feedback={
          <span>
            Oups, something went wrong. <a href="https://www.example.com">More</a>
          </span>
        }
      />
    </div>
  ))
  .add('Radio with custom class', () => (
    <div>
      <Radio className="customClass" label="Custom Class radio" />
    </div>
  ))
  .add('Radio with custom style', () => (
    <div>
      <Radio style={{ color: 'red', textTransform: 'uppercase' }} label="Custom style radio" />
    </div>
  ))
