import * as React from 'react'
import { mount } from 'enzyme'
import { Table, Icon } from '../src'
import { TableProperties } from '../src/components/Table/interfaces'

const shortData = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Jack',
    lastName: 'Doe',
    age: 21,
    status: 'single',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Jason',
    lastName: 'Gutemberg',
    age: 22,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
]

const longData = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Jack',
    lastName: 'Doe',
    age: 21,
    status: 'single',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Jason',
    lastName: 'Gutemberg',
    age: 22,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Michael',
    lastName: 'Scott',
    age: 40,
    status: 'single',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Johnny',
    lastName: 'Carpenter',
    age: 21,
    status: 'single',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Mariah',
    lastName: 'Carey',
    age: 22,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Steven',
    lastName: 'Spielberg',
    age: 40,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Marlon',
    lastName: 'Brando',
    age: 25,
    status: 'single',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Andreas',
    lastName: 'Jungdal',
    age: 22,
    status: 'single',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Leonardo',
    lastName: 'Di Caprio',
    age: 40,
    status: 'married',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Brad',
    lastName: 'Pitt',
    age: 42,
    status: 'single',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Spicer',
    lastName: 'Lovejoy',
    age: 55,
    status: 'single',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Jack',
    lastName: 'Dawson',
    age: 22,
    status: 'single',
    admin: true,
    date: new Date().toString(),
  },
  {
    firstName: 'Rose',
    lastName: 'Dewitt',
    age: 20,
    status: 'married',
    admin: false,
    date: new Date().toString(),
  },
  {
    firstName: 'Caledon',
    lastName: 'Hockley',
    age: 32,
    status: 'married',
    admin: true,
    date: new Date().toString(),
  },
]

const tableProperties: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

const customTableProperties: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
      customTrueIcon: (
        <div style={{ color: 'green' }}>
          <Icon icon="appointment" />
        </div>
      ),
      customFalseIcon: (
        <div style={{ color: 'red' }}>
          <Icon icon="calendar" />
        </div>
      ),
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

const customTablePropertiesV2: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
      customTrueIcon: (
        <div style={{ color: 'green' }}>
          <Icon icon="appointment" />
        </div>
      ),
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

const customTablePropertiesV3: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
      customFalseIcon: (
        <div style={{ color: 'red' }}>
          <Icon icon="calendar" />
        </div>
      ),
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

const customTablePropertiesV4: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          conditions: [
            {
              or: [],
            },
          ],
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
      undefinedMeansFalse: false,
      customTrueIcon: (
        <div style={{ color: 'green' }}>
          <Icon icon="appointment" />
        </div>
      ),
      customFalseIcon: (
        <div style={{ color: 'red' }}>
          <Icon icon="calendar" />
        </div>
      ),
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

const customTablePropertiesV5: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          conditions: [
            {
              or: [],
            },
          ],
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
      undefinedMeansFalse: false,
      customTrueIcon: (
        <div style={{ color: 'green' }}>
          <Icon icon="appointment" />
        </div>
      ),
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

const customTablePropertiesV6: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          conditions: [
            {
              or: [],
            },
          ],
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
      undefinedMeansFalse: false,
      customFalseIcon: (
        <div style={{ color: 'red' }}>
          <Icon icon="calendar" />
        </div>
      ),
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

const customTablePropertiesV7: TableProperties = {
  tableClassname: '',
  columns: [
    {
      accessor: 'firstName',
      type: 'string',
      title: 'Nome',
      className: 'pl-3 fixoverflow',
      headerClassName: 'text-info',
      styles: [
        {
          conditions: [
            {
              or: [],
            },
          ],
          style: {
            fontWeight: '600',
          },
        },
      ],
    },
    {
      accessor: 'admin',
      type: 'boolean',
      title: 'Admin',
      className: 'pl-3 fixoverflow',
      undefinedMeansFalse: false,
    },
    {
      accessor: 'date',
      type: 'date',
      title: 'Date',
    },
  ],
}

describe('Table', () => {
  it('Table renders itself without crashing', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    expect(tableWrapper.find('table')).toBeTruthy()
  })

  it('Data cell is rendered correctly', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    expect(tableWrapper.containsMatchingElement(<div>John</div>)).toBeTruthy()
  })

  it('Pagination section is rendered correctly', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    expect(tableWrapper.containsMatchingElement(<strong>1 of 1</strong>)).toBeTruthy()
  })

  it('Column header classes are applied correctly', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    const headerWrapper = tableWrapper.find('.text-info')
    expect(headerWrapper).toBeTruthy()
  })

  it('Boolean column is rendered in green', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    expect(
      tableWrapper.containsMatchingElement(<div style={{ color: 'green' }}>true</div>),
    ).toBeTruthy()
  })

  it('Pagination buttons are disabled due to results fitting in one page', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    const paginationWrapper = tableWrapper.find('.pagination')
    const nextPageButton = paginationWrapper.find('#nextPageButton')
    expect(nextPageButton.props().disabled).toBe(true)
  })

  it('Column filter is rendered correctly', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    const headerWrapper = tableWrapper.find('.text-info')
    const inputWrapper = headerWrapper.find('input')
    expect(inputWrapper).toBeTruthy()
  })

  it('Column styles are applied correctly', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    const cellWrapper = tableWrapper.find('.fixoverflow')
    const divWrapper = cellWrapper.find('div').first()
    expect(divWrapper.props().style).toMatchObject({ fontWeight: '600' })
  })

  it('DatePicker filter is rendered correctly', () => {
    const tableWrapper = mount(<Table data={shortData} tableProperties={tableProperties} />)
    const datePickerWrapper = tableWrapper.find('.react-datepicker-wrapper')
    const inputWrapper = datePickerWrapper.find('input')
    expect(inputWrapper).toBeTruthy()
    const prependWrapper = tableWrapper.find('.input-group-prepend')
    const prependSpan = prependWrapper.find('span')
    expect(prependSpan).toBeTruthy()
  })

  it('Pagination buttons are enabled due to results not fitting in one page', () => {
    const tableWrapper = mount(<Table data={longData} tableProperties={tableProperties} />)
    const paginationWrapper = tableWrapper.find('.pagination')
    const nextPageButton = paginationWrapper.find('#nextPageButton')
    expect(nextPageButton.props().disabled).toBe(false)
  })

  it('Clicking on previous/next page button changes results', () => {
    let bodyWrapper = null
    let rows = null
    const tableWrapper = mount(<Table data={longData} tableProperties={tableProperties} />)
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(10)
    const paginationWrapper = tableWrapper.find('.pagination')
    const nextPageButton = paginationWrapper.find('#nextPageButton')
    nextPageButton.simulate('click')
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(5)
    const previousPageButton = paginationWrapper.find('#previousPageButton')
    previousPageButton.simulate('click')
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(10)
  })

  it('Clicking on first/last page button changes results', () => {
    let bodyWrapper = null
    let rows = null
    const tableWrapper = mount(<Table data={longData} tableProperties={tableProperties} />)
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(10)
    const paginationWrapper = tableWrapper.find('.pagination')
    const lastPageButton = paginationWrapper.find('#lastPageButton')
    lastPageButton.simulate('click')
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(5)
    const firstPageButton = paginationWrapper.find('#firstPageButton')
    firstPageButton.simulate('click')
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(10)
  })

  it('Changing page number changes results', () => {
    const tableWrapper = mount(<Table data={longData} tableProperties={tableProperties} />)
    const paginationWrapper = tableWrapper.find('.pagination')
    const pageNumberInput = paginationWrapper.find('input')
    pageNumberInput.simulate('change', { target: { value: 2 } })
    const bodyWrapper = tableWrapper.find('tbody')
    const rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(5)
  })

  it('Changing page size changes results', () => {
    const tableWrapper = mount(<Table data={longData} tableProperties={tableProperties} />)
    const paginationWrapper = tableWrapper.find('.pagination')
    const pageSizeSelect = paginationWrapper.find('select')
    pageSizeSelect.simulate('change', { target: { value: 20 } })
    const bodyWrapper = tableWrapper.find('tbody')
    const rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(15)
  })

  it('Filtering changes results', () => {
    let bodyWrapper = null
    let rows = null
    const tableWrapper = mount(<Table data={longData} tableProperties={customTableProperties} />)
    const tableWrapperV3 = mount(
      <Table data={longData} tableProperties={customTablePropertiesV3} />,
    )
    expect(tableWrapperV3).toBeTruthy()
    const tableWrapperV4 = mount(
      <Table data={longData} tableProperties={customTablePropertiesV4} />,
    )
    expect(tableWrapperV4).toBeTruthy()
    const tableHeaderWrapper = tableWrapper.find('thead')
    const nameColumnWrapper = tableHeaderWrapper.find('th').first()
    const inputFilter = nameColumnWrapper.find('input')
    inputFilter.simulate('change', { target: { value: 'mariah' } })
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(1)
    inputFilter.simulate('change', { target: { value: null } })
    const selectFilter = tableHeaderWrapper.find('select')
    selectFilter.simulate('change', { target: { value: true } })
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(9)
    selectFilter.simulate('change', { target: { value: 'All' } })
    const dateFilterWrapper = tableHeaderWrapper.find('.react-datepicker-wrapper')
    const dateFilter = dateFilterWrapper.find('input')
    dateFilter.simulate('change', { target: { value: '01/01/2020' } })
    bodyWrapper = tableWrapper.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(0)
  })

  it('Filtering changes results, testing with undefinedMeansFalse', () => {
    let bodyWrapper = null
    let rows = null
    const tableWrapperV2 = mount(
      <Table data={longData} tableProperties={customTablePropertiesV2} />,
    )
    const tableWrapperV5 = mount(
      <Table data={longData} tableProperties={customTablePropertiesV5} />,
    )
    expect(tableWrapperV5).toBeTruthy()
    const tableWrapperV6 = mount(
      <Table data={longData} tableProperties={customTablePropertiesV6} />,
    )
    expect(tableWrapperV6).toBeTruthy()
    const tableWrapperV7 = mount(
      <Table data={longData} tableProperties={customTablePropertiesV7} />,
    )
    expect(tableWrapperV7).toBeTruthy()
    const tableHeaderWrapper = tableWrapperV2.find('thead')
    const nameColumnWrapper = tableHeaderWrapper.find('th').first()
    const inputFilter = nameColumnWrapper.find('input')
    inputFilter.simulate('change', { target: { value: 'mariah' } })
    bodyWrapper = tableWrapperV2.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(1)
    inputFilter.simulate('change', { target: { value: null } })
    const selectFilter = tableHeaderWrapper.find('select')
    selectFilter.simulate('change', { target: { value: true } })
    bodyWrapper = tableWrapperV2.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(9)
    selectFilter.simulate('change', { target: { value: 'All' } })
    const dateFilterWrapper = tableHeaderWrapper.find('.react-datepicker-wrapper')
    const dateFilter = dateFilterWrapper.find('input')
    dateFilter.simulate('change', { target: { value: '01/01/2020' } })
    bodyWrapper = tableWrapperV2.find('tbody')
    rows = bodyWrapper.find('tr')
    expect(rows).toHaveLength(0)
  })
})
