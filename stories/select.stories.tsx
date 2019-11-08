import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from '../src'

storiesOf('Select', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
  .add('Select', () => (
    <div>
      <Select>
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
  .add('Select multiple', () => (
    <div>
      <Select multiple>
        <option>Marshmallow</option>
        <option selected>Nougat</option>
        <option>Ice cream</option>
        <option selected>Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Disabled select', () => (
    <div>
      <Select disabled>
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
  .add('Invalid select', () => (
    <div>
      <Select isInvalid>
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
  .add('Working with value', () => (
    <div>
      <Select value="nougat">
        <option value="marshmallow">Marshmallow</option>
        <option value="nougat">Nougat</option>
        <option value="icecream">Ice cream</option>
        <option value="gingerbread">Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Small select', () => (
    <div>
      <Select value="nougat" size="small">
        <option value="marshmallow">Marshmallow</option>
        <option value="nougat">Nougat</option>
        <option value="icecream">Ice cream</option>
        <option value="gingerbread">Gingerbread</option>
      </Select>
    </div>
  ))
  .add('Large select', () => (
    <div>
      <Select value="nougat" size="large">
        <option value="marshmallow">Marshmallow</option>
        <option value="nougat">Nougat</option>
        <option value="icecream">Ice cream</option>
        <option value="gingerbread">Gingerbread</option>
      </Select>
    </div>
  ))
