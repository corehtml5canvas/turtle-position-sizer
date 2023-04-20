import { forwardRef } from "react"
import DollarSign from "./DollarSign"

const DollarInput = forwardRef(({
  key = '',
  title,
  value,
  setValue,
  onBlur = () => {},
},
  ref,
) => {
  return (
    <>
      <td>
        <span className='dollar-input-title'>
          {title}
        </span>
      </td>

      <td className='dollar-input-input'>
        <DollarSign />
        <input
          key={key}
          type='number'
          min='1'
          step='any'
          className='field'
          style={{fontSize: '0.75em', width: '3.5em'}}
          ref={ref}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={() => onBlur()}
        />
      </td>
    </>
  )
})

export default DollarInput