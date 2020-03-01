import * as React from 'react'
import * as Spinners from 'react-spinners'
import { shallow } from 'enzyme'
import { Spinner } from '../src'
import * as strings from '../src/components/Spinner/strings'

describe('Spinner', () => {
  it('Spinner renders itself without crashing', () => {
    const barLoaderWrapper = shallow(<Spinner type="BarLoader" loading color="orange" />)
    expect(barLoaderWrapper.find(Spinners.BarLoader)).toHaveLength(1)

    const beatLoaderWrapper = shallow(<Spinner type="BeatLoader" loading color="orange" />)
    expect(beatLoaderWrapper.find(Spinners.BeatLoader)).toHaveLength(1)

    const bounceLoaderWrapper = shallow(<Spinner type="BounceLoader" loading color="orange" />)
    expect(bounceLoaderWrapper.find(Spinners.BounceLoader)).toHaveLength(1)

    const climbingBoxLoaderWrapper = shallow(
      <Spinner type="ClimbingBoxLoader" loading color="orange" />,
    )
    expect(climbingBoxLoaderWrapper.find(Spinners.ClimbingBoxLoader)).toHaveLength(1)

    const clipLoaderWrapper = shallow(<Spinner type="ClipLoader" loading color="orange" />)
    expect(clipLoaderWrapper.find(Spinners.ClipLoader)).toHaveLength(1)

    const dotLoaderWrapper = shallow(<Spinner type="DotLoader" loading color="orange" />)
    expect(dotLoaderWrapper.find(Spinners.DotLoader)).toHaveLength(1)

    const fadeLoaderWrapper = shallow(<Spinner type="FadeLoader" loading color="orange" />)
    expect(fadeLoaderWrapper.find(Spinners.FadeLoader)).toHaveLength(1)

    const pulseLoaderWrapper = shallow(<Spinner type="PulseLoader" loading color="orange" />)
    expect(pulseLoaderWrapper.find(Spinners.PulseLoader)).toHaveLength(1)

    const rotateLoaderWrapper = shallow(<Spinner type="RotateLoader" loading color="orange" />)
    expect(rotateLoaderWrapper.find(Spinners.RotateLoader)).toHaveLength(1)

    const scaleLoaderWrapper = shallow(<Spinner type="ScaleLoader" loading color="orange" />)
    expect(scaleLoaderWrapper.find(Spinners.ScaleLoader)).toHaveLength(1)

    const syncLoaderWrapper = shallow(<Spinner type="SyncLoader" loading color="orange" />)
    expect(syncLoaderWrapper.find(Spinners.SyncLoader)).toHaveLength(1)

    const defaultLoaderWrapper = shallow(<Spinner type={'default' as any} loading color="orange" />)
    expect(defaultLoaderWrapper.find(<div>{strings.invalidSpinner}</div>)).toBeTruthy()
  })
})
