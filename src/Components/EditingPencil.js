import React, { useState } from 'react'
import { Tooltip } from 'reactstrap'

import { FaRegEdit } from 'react-icons/fa';

const EditingPencil = ({
  edit,
  className,
  id,
  tooltipText,
  visible=true,
  tooltipPlacement='top',
  style,
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const ICON_SIZE = '1.2em'

  return (
    visible &&
    <span className='flex-justify-end'>
      <FaRegEdit
        style={{...style}}
        id={id || 'edit'}
        className={className}
        size={ICON_SIZE}
        onClick={edit} />

      { tooltipText &&
        <Tooltip
          placement={tooltipPlacement}
          isOpen={tooltipOpen}
          target={id || 'edit'}
          delay={1500}
          trigger='hover'
          toggle={() => setTooltipOpen(!tooltipOpen)}
        >
          <div className='tooltip-container'>
            <span className='tooltip-text'>{ tooltipText }</span>
          </div>
        </Tooltip>
      }
    </span>
  )
}

export default EditingPencil