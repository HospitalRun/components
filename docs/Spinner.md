# `Spinner` (component)

A customizable spinner component. It's a wrapper component built upon react-spinners.
## Props
| property | propType | required | default | description |
|----------|----------|----------|---------|-------------|
|color|`string`|-||Choose the spinner color.|
|loading|`boolean`|yes||This prop tells Spinner when to show itself. It should be linked to something dynamic, like a property in the parent component's state.|
|margin|`string`|-||Adds a margin to the Spinner component.|
|size|`number | [number, number]`|-||Declares the size of the spinner. If you choose to declare it, in the following spinners it must be an array of two numbers (for width & height): BarLoader, FadeLoader, ScaleLoader|
|sizeUnit|`SpinnerSizeUnit | [SpinnerSizeUnit, SpinnerSizeUnit]`|-||Declares the unit of measure for the previous size parameter. If you choose to declare it, in the following spinners it must be an array of two strings (respectively for width & height): BarLoader, FadeLoader, ScaleLoader|
|type|`SpinnerType`|yes||The type of spinner to render|