import React from 'react'
import * as DM from 'types/sample-ecommerce'
import { measureFactory } from '@sisense/sdk-data';
import { useExecuteQuery } from '@sisense/sdk-ui'
import LineDisplay from './LineDisplay';
import LineItemExpanded from './LineItemExpanded';

const LineItem = ( { expanded, setExpanded, pageDataOptions, measure, measureFilters=[], title, desc, imageUrl, currency=true } ) => {
  const lineDataOptions = {
    measure: measure,
    filters: measureFilters
  }
  // Measures
  const measurePastMonth = measureFactory.pastMonth(measure)
  const measureGrowthPastMonth = measureFactory.growthPastMonth(measure)
  // Filters

  const { data, isLoading, isError } = useExecuteQuery({
    dataSource: DM.DataSource,
    measures: [
      measure, measurePastMonth, measureGrowthPastMonth
    ],
    filters: measureFilters.concat(pageDataOptions.filters),
    timeDimensions: pageDataOptions.timeDimensions
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (data) {
      return (
        <>
        <LineDisplay
          expanded={expanded}
          setExpanded={setExpanded}
          title={title}
          desc={desc}
          imageUrl={imageUrl}
          currency={currency} 
          kpi={data.rows[0][0].data}
          kpiPm={data.rows[0][1].data}
          kpiGrowth={data.rows[0][2].data} 
        />
          {expanded === title? <LineItemExpanded
            pageDataOptions={pageDataOptions}
            lineDataOptions={lineDataOptions}
            title={title}
            currency={currency}
          />: null}
        </>

    )
  }
}

export default LineItem