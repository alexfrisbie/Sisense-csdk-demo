import React, { useState } from 'react'
import './ExecSummary.css'
import * as DM from 'types/sample-ecommerce'
import { measureFactory, filterFactory } from '@sisense/sdk-data';
import LineItem from './LineItems/LineItem';
// import Summary from './Summary'

const ExecSummary = ( { pageDataOptions } ) => {
  const [expanded, setExpanded] = useState(null)
  return (
    <div className='container'>
      <div className="executiveContainerHeaders">
        <p className="currentPeriod">Prior Period</p>
        <p className="priorPeriod">Current Period</p>
      </div>
      <div className='executiveContainer'>
        <LineItem 
          expanded={expanded} 
          setExpanded={setExpanded} 
          pageDataOptions={pageDataOptions}
          measure={measureFactory.countDistinct(DM.Commerce.BrandID)} 
          title='Enrollment'
          desc='average membership'
          imageUrl='https://cdn-icons-png.flaticon.com/512/711/711168.png'
          currency={false}
          />
        <LineItem 
          expanded={expanded} 
          setExpanded={setExpanded} 
          pageDataOptions={pageDataOptions}
          measure={measureFactory.sum(DM.Commerce.Revenue)} 
          title='Revenue'
          desc='revenue'
          imageUrl='https://cdn-icons-png.flaticon.com/512/925/925748.png'
          />
        <LineItem 
          expanded={expanded} 
          setExpanded={setExpanded} 
          pageDataOptions={pageDataOptions}
          measure={measureFactory.sum(DM.Commerce.Revenue)}
          measureFilters={[filterFactory.members(DM.Commerce.Condition, ['Used'])]}
          title='Cost'
          desc='cost of goods sold'
          imageUrl='https://cdn-icons-png.flaticon.com/512/40/40105.png'
          />
        <LineItem 
          expanded={expanded} 
          setExpanded={setExpanded} 
          pageDataOptions={pageDataOptions}
          measure={measureFactory.sum(DM.Commerce.Revenue)}
          measureFilters={[filterFactory.members(DM.Commerce.Condition, ['Refurbished'])]}
          title='Taxes'
          desc='overall tax impact'
          imageUrl='https://cdn-icons-png.flaticon.com/512/4474/4474140.png'
          />
        <LineItem
          expanded={expanded} 
          setExpanded={setExpanded} 
          pageDataOptions={pageDataOptions}
          measure={measureFactory.sum(DM.Commerce.Revenue)}
          measureFilters={[filterFactory.members(DM.Commerce.Condition, ['New'])]}
          title='Membership'
          desc='annual membership fees'
          imageUrl='https://cdn-icons-png.flaticon.com/512/4117/4117815.png'
          />
        {/* <Summary /> */}
      </div>
    </div>
  )
}

export default ExecSummary