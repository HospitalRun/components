import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from '../src'

storiesOf('Select', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: 'center', paddingLeft: 40, paddingRight: 40 }}>{storyFn()}</div>
  ))
  .add('Select', () => (
    <div>
      <Select defaultValue="Marshmallow">
        <option>Choose your sweet</option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Select multiple', () => (
    <div>
      <Select defaultValue={['Nougat', 'Ice cream']} multiple>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Disabled select', () => (
    <div>
      <Select disabled>
        <option disabled>Choose your sweet</option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Valid select', () => (
    <div>
      <Select defaultValue="Choose your sweet" isValid>
        <option disabled>Choose your sweet</option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Valid select with custom message', () => (
    <div>
      <Select
        defaultValue="Choose your sweet"
        isValid
        feedback="This is a valid select input message"
      >
        <option disabled>Choose your sweet</option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Invalid select', () => (
    <div>
      <Select defaultValue="Choose your sweet" isInvalid>
        <option disabled>Choose your sweet</option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Invalid select with custom message', () => (
    <div>
      <Select
        defaultValue="Choose your sweet"
        isInvalid
        feedback="This is an invalid select input error message"
      >
        <option disabled>Choose your sweet</option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))

  .add('Working with value', () => (
    <div>
      <Select defaultValue="nougat">
        <option value="marshmallow">Marshmallow</option>
        <option value="nougat">Nougat</option>
        <option value="icecream">Ice cream</option>
        <option value="gingerbread">Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Small select', () => (
    <div>
      <Select defaultValue="nougat" size="small">
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Large select', () => (
    <div>
      <Select defaultValue="Choose your sweet" size="large">
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Custom class', () => (
    <div>
      <Select defaultValue="Choose your sweet" className="customClass">
        <option disabled>Choose your sweet</option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Custom style', () => (
    <div>
      <Select style={{ background: 'red' }}>
        <option selected disabled>
          Choose your sweet
        </option>
        <option>Marshmallow</option>
        <option>Nougat</option>
        <option>Ice cream</option>
        <option>Gingerbread</option>
      </Select>
    </div>
  ))
