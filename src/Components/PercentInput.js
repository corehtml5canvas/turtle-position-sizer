import { forwardRef } from "react"
import PercentSign from "./PercentSign"

const PercentInput = forwardRef(({
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

      <td className='percent-input-input'>
        <PercentSign />
        <input
          key={key}
          type='number'
          min='1'
          step='any'
          className='field'
          style={{fontSize: '0.75em'}}
          ref={ref}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={() => onBlur()}
        />
      </td>
    </>
  )
})

export default PercentInput