import { forwardRef } from "react"
import PercentSign from "./PercentSign"

const PercentInput = forwardRef(({
  key = '',
  title,
  value,
  setValue,
  style = {},
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
          ref={ref}
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={() => onBlur()}
          style={{...style}}
        />
      </td>
    </>
  )
})

export default PercentInput