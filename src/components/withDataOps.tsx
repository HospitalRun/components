import React, { useState, useEffect, ReactElement } from 'react'
import { Button } from 'src'

const withDataOps = (
  WrappedComponent: any,
  fetchData: (
    sortBy: string,
    sortAsc: boolean,
    queryKey: string,
    startKey: any,
    endKey: any,
    currentKey: any,
    limit: number,
  ) => [] | undefined,
  queryKey: string,
  otherProps: Record<string, unknown>,
): ReactElement => {
  const [data, setData] = useState<Record<string, unknown>[] | undefined>()
  const [sortBy, setSortBy] = useState(queryKey)
  const [sortAsc, setSortAsc] = useState(true)
  const [startKey, setStartKey] = useState<string | undefined>()
  const [endKey, setEndKey] = useState<string | undefined>()
  const [currentKey, setCurrentKey] = useState<string | undefined>()
  const [limit, setLimit] = useState<number>(3)

  useEffect(() => {
    const newData = fetchData(sortBy, sortAsc, queryKey, startKey, endKey, currentKey, limit)
    if (newData && newData.length > 0) {
      setData(newData)
    }
  }, [sortBy, sortAsc, startKey, endKey, currentKey, limit])

  const resetKeys = () => {
    setStartKey(undefined)
    setEndKey(undefined)
    setCurrentKey(undefined)
  }

  const onLimitClick = (newLimit: number) => {
    if (data && data.length > 0) {
      setLimit(newLimit)
      resetKeys()
      setCurrentKey(data[0][queryKey] as any)
    }
  }

  const onPrevClick = () => {
    if (data && data.length > 0) {
      resetKeys()
      setEndKey(data[0][queryKey] as any)
    }
  }

  const onNextClick = () => {
    if (data) {
      resetKeys()
      setStartKey(data[data.length - 1][queryKey] as any)
    }
  }

  const onSortByClick = (newSortBy: string) => {
    if (data) {
      setSortAsc(sortBy === newSortBy ? !sortAsc : true)
      setSortBy(newSortBy)
      resetKeys()
    }
  }

  const propsForWrappedComponent = {
    data,
    onSortByClick,
    currentSort: { by: sortBy, asc: sortAsc },
    ...otherProps,
  }

  return (
    <>
      <div>
        <Button onClick={() => onLimitClick(1)} color="dark" outlined className="mr-3">
          1
        </Button>
        <Button onClick={() => onLimitClick(3)} color="dark" outlined className="mr-3">
          3
        </Button>
        <Button onClick={() => onLimitClick(5)} color="dark" outlined className="mr-3">
          5
        </Button>
        <Button onClick={() => onLimitClick(10)} color="dark" outlined className="mr-3">
          10
        </Button>
        per page
      </div>

      <div className="mt-2 mb-2">
        <Button onClick={onPrevClick} color="dark" outlined className="mr-3">
          Prev
        </Button>
        <Button onClick={onNextClick} color="dark" outlined>
          Next
        </Button>
      </div>

      <div className="mb-2">
        Sorted by: {sortBy} in {sortAsc ? 'ascending' : 'descending'} order
      </div>

      <WrappedComponent {...propsForWrappedComponent} />
    </>
  )
}

export { withDataOps }
