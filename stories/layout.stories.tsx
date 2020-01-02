import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, Row, Column } from '../src/components/Layout'
import './layout.stories.css'

storiesOf('Layout', module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('default', () => (
    <Container>
      <Row>
        <Column>1 of 2</Column>
        <Column>2 of 2</Column>
      </Row>
      <Row>
        <Column>1 of 3</Column>
        <Column>2 of 3</Column>
        <Column>3 of 3</Column>
      </Row>
    </Container>
  ))
  .add('setting one column width', () => (
    <Container>
      <Row>
        <Column>1 of 3</Column>
        <Column xs={6}>2 of 3 (wide 6)</Column>
        <Column>3 of 3</Column>
      </Row>
      <Row>
        <Column>1 of 3</Column>
        <Column xs={5}>2 of 3 (wide 5)</Column>
        <Column>3 of 3</Column>
      </Row>
    </Container>
  ))
  .add('variable width content', () => (
    <Container>
      <Row className="justify-content-md-center">
        <Column xs lg={2}>
          1 of 3
        </Column>
        <Column md="auto">Variable width content</Column>
        <Column xs lg={2}>
          3 of 3
        </Column>
      </Row>
      <Row>
        <Column>1 of 3</Column>
        <Column md="auto">Variable width content</Column>
        <Column xs lg={2}>
          3 of 3
        </Column>
      </Row>
    </Container>
  ))
  .add('responsive grid', () => (
    <Container>
      <Row>
        <Column sm={8}>sm=8</Column>
        <Column sm={4}>sm=4</Column>
      </Row>
      <Row>
        <Column sm>sm=true</Column>
        <Column sm>sm=true</Column>
        <Column sm>sm=true</Column>
      </Row>
    </Container>
  ))
  .add('mixed responsive breakpoints', () => (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Column xs={12} md={8}>
          xs=12 md=8
        </Column>
        <Column xs={6} md={4}>
          xs=6 md=4
        </Column>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Column xs={6} md={4}>
          xs=6 md=4
        </Column>
        <Column xs={6} md={4}>
          xs=6 md=4
        </Column>
        <Column xs={6} md={4}>
          xs=6 md=4
        </Column>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Column xs={6}>xs=6</Column>
        <Column xs={6}>xs=6</Column>
      </Row>
    </Container>
  ))
  .add('using order property', () => (
    <Container>
      <Row>
        <Column xs>First, but unordered</Column>
        <Column xs={{ order: 12 }}>Second, but last</Column>
        <Column xs={{ order: 1 }}>Third, but second</Column>
      </Row>
    </Container>
  ))
  .add('with offset', () => (
    <Container>
      <Row>
        <Column md={4}>md=4</Column>
        <Column md={{ span: 4, offset: 4 }}>{`md={ span: 4, offset: 4 }`}</Column>
      </Row>
      <Row>
        <Column md={{ span: 3, offset: 3 }}>{`md={ span: 3, offset: 3 }`}</Column>
        <Column md={{ span: 3, offset: 3 }}>{`md={ span: 3, offset: 3 }`}</Column>
      </Row>
      <Row>
        <Column md={{ span: 6, offset: 3 }}>{`md={ span: 6, offset: 3 }`}</Column>
      </Row>
    </Container>
  ))
  .add('using a custom style', () => (
    <Container style={{ border: '2px solid red' }}>
      <Row style={{ background: 'blue' }}>
        <Column style={{ background: 'cyan' }}>1 of 2</Column>
        <Column style={{ border: '1px solid green' }}>2 of 2</Column>
      </Row>
    </Container>
  ))
  .add('using a custom class', () => (
    <Container className="customClass">
      <Row className="customClass2">
        <Column className="customClass">1 of 2</Column>
        <Column>2 of 2</Column>
      </Row>
    </Container>
  ))
