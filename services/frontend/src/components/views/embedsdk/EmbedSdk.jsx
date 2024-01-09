import React from 'react'
import SisenseDashboardEmbed from 'sisense-embedsdk-react'
import './EmbedSdk.css'

const ComposeSdk = () => {
  const dashboardId = ''

  return (
    <div className='container-2'>
      <h1>Embed SDK</h1>
      <SisenseDashboardEmbed
        sisenseUrl={process.env.REACT_APP_SISENSE_URL}
        dashboardId={dashboardId}
        showLeftPane={false}
        showRightPane={true}
        showToolbar={false}
      />
    </div>
  )
}

export default ComposeSdk
