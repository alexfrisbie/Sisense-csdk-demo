import React, { useState } from 'react'
import './Main.css'
import ExecSummary from './execsummary/ExecSummary'
import { MemberFilterTile, RelativeDateFilterTile } from '@sisense/sdk-ui'
import * as DM from 'types/sample-ecommerce'
import { filterFactory } from '@sisense/sdk-data'

const Main = () => {
  const [filterDateRange, setFilterDateRange] = useState(
    filterFactory.dateRelative(DM.Commerce.DateCurrent.Quarters, -1, 1)
  );
  const [filterCountry, setFilterCountry] = useState(
    filterFactory.members(DM.Country.Country, [])
  )
  const pageDataOptions = {
    timeDimensions: [DM.Commerce.DateCurrent],
    filters: [filterDateRange, filterCountry]
  }
  
  return (
    <>
      <aside className='csdk-filters'>
        <RelativeDateFilterTile
          className="csdk-filter"
          title="Date Range"
          arrangement='vertical'
          dataSource={DM.DataSource}
          attribute={DM.Commerce.DateCurrent}
          filter={filterDateRange}
          onUpdate={(filter) => {
            setFilterDateRange(filter);
          }}
        />
        <MemberFilterTile
          className="csdk-filter"
          title="Country"
          dataSource={DM.DataSource}
          attribute={DM.Country.Country} 
          filter={filterCountry}
          onChange={(filter) => {
            setFilterCountry(filter);
          }}
        />
      </aside>
      <ExecSummary pageDataOptions={pageDataOptions}/>
    </>
  )
}

export default Main