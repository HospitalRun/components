import React from 'react'
import { shallow } from 'enzyme'
import bootstrapContainer from 'react-bootstrap/Container'
import bootstrapRow from 'react-bootstrap/Row'
import bootstrapColumn from 'react-bootstrap/Col'
import { Container, Row, Column } from '../src'

describe('Container', () => {
  it('renders itself without crashing', () => {
    const containerWrapper = shallow(<Container />)

    expect(containerWrapper.find(bootstrapContainer)).toHaveLength(1)
  })
  it('renders children elements when passed in', () => {
    const containerWrapper = shallow(
      <Container>
        <Row>
          <Column>test 1</Column>
        </Row>
        <Row>
          <Column>test 2</Column>
        </Row>
      </Container>,
    )
    const rowElement = containerWrapper.find(Row)

    expect(rowElement).toHaveLength(2)
    expect(rowElement.find(Column)).toHaveLength(2)
  })
  it('accepts props', () => {
    const containerWrapper = shallow(
      <Container as="section" fluid={false} className="class" style={{ background: 'red' }} />,
    )
    const containerProps = containerWrapper.props()

    expect(containerProps.as).toEqual('section')
    expect(containerProps.fluid).toBeFalsy()
    expect(containerProps.className).toEqual('class')
    expect(containerProps.style).toMatchObject({ background: 'red' })
  })
})

describe('Row', () => {
  it('renders itself without crashing', () => {
    const rowWrapper = shallow(<Row />)

    expect(rowWrapper.find(bootstrapRow)).toHaveLength(1)
  })
  it('accepts props', () => {
    const rowWrapper = shallow(
      <Row as="section" noGutters={false} className="class" style={{ color: 'red' }} />,
    )
    const rowProps = rowWrapper.props()

    expect(rowProps.as).toEqual('section')
    expect(rowProps.noGutters).toBeFalsy()
    expect(rowProps.className).toEqual('class')
    expect(rowProps.style).toMatchObject({ color: 'red' })
  })
})

describe('Column', () => {
  it('renders itself without crashing', () => {
    const columnWrapper = shallow(<Column />)

    expect(columnWrapper.find(bootstrapColumn)).toHaveLength(1)
  })
  it('accepts props', () => {
    const columnWrapper = shallow(
      <Column
        as="section"
        lg
        md="auto"
        sm={10}
        xl={{ span: 20, offset: 2 }}
        xs={{ offset: 3, order: 1 }}
        className="customClass"
        style={{ color: 'red' }}
      />,
    )
    const columnProps = columnWrapper.props()

    expect(columnProps.as).toEqual('section')
    expect(columnProps.lg).toBeTruthy()
    expect(columnProps.md).toEqual('auto')
    expect(columnProps.sm).toEqual(10)
    expect(columnProps.xl).toEqual(expect.objectContaining({ span: 20, offset: 2 }))
    expect(columnProps.xs).toEqual(expect.objectContaining({ offset: 3, order: 1 }))
    expect(columnProps.className).toEqual('customClass')
    expect(columnProps.style).toEqual(expect.objectContaining({ color: 'red' }))
  })
})
