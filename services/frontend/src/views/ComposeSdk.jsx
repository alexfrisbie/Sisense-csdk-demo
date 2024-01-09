import React from 'react'
import { SisenseContextProvider } from '@sisense/sdk-ui';
import Main from 'components/views/csdk/Main'

const ComposeSdk = () => {
  return (
    <div>
      <SisenseContextProvider url={process.env.REACT_APP_SISENSE_URL} token={process.env.REACT_APP_SISENSE_API_TOKEN}>
        <Main />
      </SisenseContextProvider>
    </div>
  )
}

export default ComposeSdk