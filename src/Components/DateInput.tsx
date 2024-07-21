import React from 'react'

type IDate = React.ComponentProps<"input"> & {label: string};

const DateInput = ({label, ...props}:  IDate) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} id={label} {...props} />
    </div>
  )
}

export default DateInput