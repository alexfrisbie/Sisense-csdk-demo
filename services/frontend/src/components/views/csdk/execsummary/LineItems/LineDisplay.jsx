import React from 'react'

const LineDisplay = ( {expanded, setExpanded, title, desc, imageUrl, kpi, kpiPm, kpiGrowth, currency} ) => {
  var formatOptions = currency ? {style: 'currency', currency: 'USD', notation: 'compact'} : {notation: 'compact'}
  const kpiFormatted = kpi.toLocaleString('en-US', formatOptions)
  const kpiPmFormatted = kpiPm.toLocaleString('en-US', formatOptions)
  const kpiGrowthFormatted = kpiGrowth.toLocaleString('en-US', {style: 'percent'})

  return (
    <div className='lineContainer'>
      <div className='lineText'>
        <p className='lineTitle' onClick={() => expanded === title? setExpanded(null): setExpanded(title)}>{title}</p>
        <p className='lineSummary'>Based on the reporting period and filtered criteria, the {desc} changed by {kpiFormatted} or {kpiGrowthFormatted} compared to the prior period.</p>
      </div>
      <img src={imageUrl} alt='' className='lineIcon'/>
      <div className='lineMetricContainer'>
        <div className="metricContainerVals">
          <p className="valsCurrentPeriod">{kpiFormatted}</p>
          <p className="valsPriorPeriod">{kpiPmFormatted}</p>
        </div>
        <div className="metricContainerGrowth">
          <p className='growthPctChangeText'>% Change:</p>
          <p className='growthPctChange'>{kpiGrowthFormatted}</p>
        </div>
      </div>
    </div>
  )
}

export default LineDisplay