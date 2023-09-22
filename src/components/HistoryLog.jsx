import React from 'react'

const HistoryLog = ( {historyLogMessage, historyLogDate}) => {



  return (
    <div id='historyLog'>
      <div>
        Here are your past events:
        <ul id='historyLogList'>
          <li><span>{`Events: ${historyLogMessage}`}
          <br /> 
          {`Date: ${historyLogDate}`}</span></li>
        </ul>
      </div>
    </div>
  )
}

export default HistoryLog;