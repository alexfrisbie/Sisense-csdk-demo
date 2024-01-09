import React from 'react'
import './LineItem.css'
import * as DM from 'types/sample-ecommerce'
import { LineChart, ColumnChart, DrilldownWidget } from '@sisense/sdk-ui'


const LineItemExpanded = ( {pageDataOptions, lineDataOptions, title, currency } ) => {
  const measure = currency? {
      column: lineDataOptions.measure,
      numberFormatConfig: {
        name: 'Currency',
        prefix: true, 
        symbol: '$',
        decimalScale: 1,
        trillion: true,
        billion: true,
        million: true,
        kilo: true
      }
    }: lineDataOptions.measure

  return (
    <div className='expanded-container'>
      <LineChart
        className='expanded-item'
        dataSet={DM.DataSource}
        dataOptions={{
          category: [DM.Commerce.DateCurrent.Months],
          value: [
            measure
          ],
          breakBy: [DM.Commerce.Gender],
        }}
        filters={lineDataOptions.filters.concat(pageDataOptions.filters)}

        onDataPointClick= {(point, nativeEvent) => {
          console.log('clicked', point, nativeEvent);
        }}
        styleOptions={{
          yAxis: {
            gridLines: false
          },
          xAxis: {
            gridLines: false
          },
          width: 300,
        }}
      />
      <DrilldownWidget
        drilldownDimensions={[DM.Brand.Brand, DM.Category.Category]}
        initialDimension={DM.Commerce.AgeRange}
      >
        {({ drilldownFilters, drilldownDimension, onDataPointsSelected, onContextMenu }) => (
          <ColumnChart 
            dataSet={DM.DataSource}
            dataOptions={{
              category: [drilldownDimension],
              value: [measure],
              breakBy: [DM.Commerce.Gender],
            }}
            filters={lineDataOptions.filters.concat(pageDataOptions.filters, drilldownFilters)}
            onDataPointContextMenu={onContextMenu}
            onDataPointsSelected={onDataPointsSelected}
            onDataPointClick={(point, nativeEvent) => {
              console.log('clicked', point, nativeEvent);
            }}
            styleOptions={{
              subtype: 'column/stackedcolumn',
              yAxis: {
                gridLines: false
              },
              xAxis: {
                gridLines: false
              },
              width: 300,
            }}
          />
        )}
      </DrilldownWidget>
    </div>
  )
}

export default LineItemExpanded