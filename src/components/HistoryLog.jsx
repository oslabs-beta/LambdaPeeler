import React from 'react'

const HistoryLog = ( {historyLogMessage, historyLogDate}) => {



  return (
    <div className='historyLog'>
      <div>
        <ul className='historyLogList'>
          <li><span>{`Event: ${historyLogMessage}`}
          <br /> 
          {`Date: ${historyLogDate}`}</span></li>
        </ul>
      </div>
    </div>
  )
}

export default HistoryLog;