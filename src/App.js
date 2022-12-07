import {
  useEffect,
  useRef,
  useState
} from 'react'

import Dropdown from './Components/Dropdown'
import EditingPencil from './Components/EditingPencil'
import DollarInput from './Components/DollarInput'
import DollarSign from './Components/DollarSign'

import { FaBars } from 'react-icons/fa'

import './App.css'

const money = n => parseFloat(n).toFixed(2)

function App() {
  // STATE......................................................................

  const [accountValue, setAccountValue] = useState(7757.00)
  const [sharePrice, setSharePrice] = useState(32.92)
  const [atr, setAtr] = useState(0.57)

  const [unitSize, setUnitSize] = useState(null)
  const [stopLoss, setStopLoss] = useState(null)
  const [stopLevel, setStopLevel] = useState(null)

  const [editingStopLoss, setEditingStopLoss] = useState(false)

  const accountValueRef = useRef()
  const stopLossRef = useRef()

  const [atrPercent, setAtrPercent] = useState(100)
  let atrPercents = [
    { id: 200, name: 200 },
    { id: 100, name: 100 },
    { id: 90, name: 90 },
    { id: 80, name: 80 },
    { id: 70, name: 70 },
    { id: 60, name: 60 },
    { id: 50, name: 50 },
    { id: 40, name: 40 },
    { id: 30, name: 30 },
    { id: 20, name: 20 },
    { id: 10, name: 10 },
  ]

  const [riskPerTrade, setRiskPerTrade] = useState(0.75)
  const percents = [
    { id: 2, name: 2 },
    { id: 1, name: 1 },
    { id: 0.75, name: .75 },
    { id: 0.5, name: .50 },
    { id: 0.25, name: .25 },
  ]

  // EFFECTS....................................................................

  useEffect(() => {
    accountValueRef.current.focus()
  }, [])

  useEffect(() => {
    if (stopLossRef.current) {
      stopLossRef.current.focus()
    }
  }, [editingStopLoss])

  useEffect(() => {
    const stopLoss = editingStopLoss && stopLevel && !Number.isNaN(stopLevel) ?
                     sharePrice - stopLevel :
                     atr * atrPercent / 100

    setStopLoss(stopLoss)
    setUnitSize((accountValue * riskPerTrade / 100) / stopLoss)
  }, [
    accountValue,
    atr,
    atrPercent,
    editingStopLoss,
    riskPerTrade,
    sharePrice,
    stopLevel,
  ])

  // EVENT HANDLERS.............................................................

  const atrPercentChanged = (e) => {
    setAtrPercent(parseFloat(e.target.value))
  }

  const riskPerTradeChanged = (e) => {
    setRiskPerTrade(parseFloat(e.target.value))
  }

  const editStopLoss = () => {
    setStopLevel(sharePrice - stopLoss)
    setEditingStopLoss(true)
  }

  const barsClicked = () => {
    setEditingStopLoss(false)
  }

  const openGame = () => {
    const snailBait = "http://gearysite.com/game/snailbait-chapter-versions/ch18/index.html"
    const bodega = "http://gearysite.com/game/bodegas-revenge/index.html"

    if (Math.random() < 0.5) {
      window.open(bodega, '_blank', 'width=900,height=600 top=500,left=500')
    }
    else {
      window.open(snailBait, '_blank', 'width=900,height=600 top=500,left=500')
    }
  }

  // COMPONENTS.................................................................

  const PositionSizeRow = ({
    units,
    numShares,
    cost,
    risk,
  }) =>
    <tr className='position-size'>
      <td className='position-size-units'>{units}</td>

      <td>
        <span className='position-size-shares'>
          {numShares}
        </span>
      </td>

      <td className='position-size-cost'>
        <DollarSign />
        {money(cost)}
      </td>

      <td className='position-size-risk'>
        <DollarSign />
        {money(risk)}
      </td>
    </tr>

  const StopLossDisplay = () =>
    <div className='stop-loss'>
      <span className='stop-loss-title'>Stop Loss</span>
      <DollarSign />

      <span className='stop-loss-amount'>
        {stopLoss.toFixed(2)}
        <span className='stop-loss-percent'>
          ({(stopLoss / sharePrice * 100).toFixed(2)}%)
          </span>
      </span>

      <p className='stop-level-container'>
        <span className='stop-level'>
          Stop Level
        </span>

        <DollarSign />
        <span className='stop-loss-amount'>
          {money(sharePrice - stopLoss)}
        </span>
      </p>
    </div>

  // MARKUP.....................................................................

  return (
    <div className="App fadein">
      <div>
        <div className='title'>
          Turtle Position Sizing
        </div>
        <hr className='separator'/>
      </div>

      <table className='account-percents'>
        <tr>
          <td>
            <div>
              <span className='risk-per-trade'>Risk per Trade</span>
              <Dropdown
                items={percents}
                value={riskPerTrade}
                valueProperty='id'
                displayProperty='name'
                handleOnChange={riskPerTradeChanged}
                width='4em'
              /> <span className='risk-per-trade-percent'>%</span>
            </div>
          </td>
        </tr>

        { editingStopLoss ?
          <tr>
            <td>
              <div className='stoploss-explicit'>
                <span className='stoploss-explicit-title'>Stop Level</span>
                <span className='stoploss-explicit-dollar'>
                  <DollarInput
                    ref={stopLossRef}
                    className='stoploss-explicit-value'
                    value={stopLevel}
                    setValue={setStopLevel}
                  />
                </span>
              </div>
            </td>

            <td style={{paddingTop: '0.55em'}}>
              <FaBars
                className='bars'
                onClick={barsClicked}
              />
            </td>
          </tr>

          :
          
          <tr>
            <td>
              <div>
                <span className='stoploss-computed-title'>
                  Stop Loss <span className='stoploss-computed-percent'>(% ATR)</span>
                </span>
                <Dropdown
                  label=''
                  items={atrPercents}
                  value={atrPercent}
                  valueProperty='id'
                  displayProperty='name'
                  handleOnChange={atrPercentChanged}
                  width='4em'
                />
              </div>
            </td>

            <td className='editing-pencil-container'>
              <EditingPencil
                edit={editStopLoss}
                className='editing-pencil'
                tooltipText='Edit stop level explicitly'
                tooltipPlacement='bottom'
              />
            </td>
          </tr>
        }
      </table>

      <table className='account-info'>
        <tr>
          <DollarInput
            title='Account Value'
            value={accountValue}
            setValue={setAccountValue}
            ref={accountValueRef} />
        </tr>

        <tr>
          <DollarInput
            title='Share Price'
            value={sharePrice}
            setValue={setSharePrice} />
        </tr>

        <tr>
          <DollarInput
            title='ATR'
            value={atr}
            setValue={setAtr} />

          <span className='atr-percent' >
            {(atr / sharePrice * 100).toFixed(2)} %
          </span>
        </tr>
      </table>

      { accountValue && accountValue != 0 && atr && atr != 0 && unitSize && stopLoss &&
        <div>
          <div className='position-display'>
            <hr className='separator'/>
            <table>
              <thead className='position-display-heading'>
                <tr>
                  <th className='units-display'>Units</th>
                  <th className='shares-display'>Shares</th>
                  <th className='cost-display'>Cost</th>
                  <th className='risk-display'>Risk</th>
                </tr>
              </thead>

              <tbody>
                <PositionSizeRow
                  units = '1'
                  numShares = {unitSize.toFixed()}
                  cost = {sharePrice * unitSize}
                  risk = {unitSize.toFixed() * stopLoss}
                />

                <PositionSizeRow
                  units = '1/2'
                  numShares = {unitSize.toFixed()/2}
                  cost = {sharePrice * unitSize / 2}
                  risk = {unitSize.toFixed() * stopLoss / 2}
                />

                <PositionSizeRow
                  units = '1/4'
                  numShares = {unitSize.toFixed()/4}
                  cost = {sharePrice * unitSize / 4}
                  risk = {unitSize.toFixed() * stopLoss / 4}
                />
              </tbody>
            </table>
          </div>
          <hr className='separator'/>
          <StopLossDisplay />
        </div>
      }
      { /*<button className='break-button' onClick={openGame}> Take a Break </button>*/ }
    </div>
  )
}

export default App;