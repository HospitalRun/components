# `Select` (component)

## Props

| property  | propType                                                           | required | default | description                                                                                                |
| --------- | ------------------------------------------------------------------ | -------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| children | `ReactNode`                                                          | -        |         | Yield element as children.                                        |                                     |
| dateFormat | `string`                                                          | -        |         | The format for parsed and displayed dates in internal yeardropdown. |
| dateFormatCalendar | `string` | -        |         | The format for parsed and displayed dates in internal yeardropdown.                                                                |
| disabled | `boolean`                                                | -        |         |  Disable datepicker.                      |
| dropdownMode | `'scroll' | 'select'`                                                           | -        |         | Change selection for internal year/month dropdowns.
| endDate | `Date`                                                 | -         || The end date of the initially selected date range.|
| excludeDates | `Date[]`                                                 | -         || Exclude dates within the specific date range. |
| includeDates | `Date[]`                                                 | -         || Include dates within the specific date range. |
| inline | `boolean`                                                 | -         || Visualize calendar as inline element.|
| locale | `string`                                                 | -         || Set datepicker locale. |
| maxDate | `Date`                                                 | -         || The maximum selectable date. |
| maxTime | `Date`                                                 | -         || The maximum selectable time. |
| minDate | `Date`                                                 | -         || The minimum selectable date. |
| minTime | `Date`                                                 | -         || The minimum selectable time. |
| monthsShown | `number`                                                 | -         || Show more months. |
| className | `string`                                                 | -         || Input.Group class |
| onChange | `(date: Date, event: React.ChangeEvent<HTMLInputElement>) => void`                                                 | -         || Callback when date is changed.|
| selected | `Date`                                                 | -         ||  Selected date value.|
| selectsEnd | `boolean`                                                 | -         || Selected date end.|
| selectsStart | `boolean`                                                 | -         | |Selected date start|
| showMonthDropdown | `boolean`                                                 | -         | |Show dropdown list with all months. |
| showTimeSelect | `boolean`                                                 | -         | |Enable time selection.|
| showYearDropdown | `boolean`                                                 | -         | |Enable only time selection.|
| showTimeSelectOnly | `boolean`                                                 | -         | |The format for parsed and displayed time.|
| startDate | `Date`                                                 | -         || The beginning date of the initially selected date range.|
| timeFormat | `string`                                                 | -         || Configure timer intervals. |
| timeIntervals | `number`                                                 | -         | |Header over the time selector.|
| timeCaption | `string`                                                 | -         | |Enable and set text for today button.|
| todayButton | `string`                                                 | -         | |The beginning date of the initially selected date range.|
| withPortal | `boolean`                                                 | -         | |Visualize calendar as portal.|
| isInvalid | `boolean`                                                 | -         | `false` | Determines whether the Select should be invalid. |
| isValid | `boolean`                                                 | -         | `false` | Determines whether the Select should be rendered as valid or not. |
| invalidFeedback | `string`                                                 | -         | ||Defines the custom error message of the input.|
| validFeedback | `string`                                                 | -         | ||Defines the message for valid input.|
