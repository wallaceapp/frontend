import React from 'react'
import { Provider } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'

import RestoreAuth from './auth/restore-auth/RestoreAuth'
import Routes from './routes'
import Store from './shared/store/store'
import Theme from './theme/theme'
import DeveloperModeAlert from './shared/components/DeveloperModeAlert'

const App: React.FC = () => {
  const route = useRoutes(Routes)

  return (
    <Provider store={Store}>
      <ThemeProvider theme={Theme}>
        <RestoreAuth>
          <>
            <DeveloperModeAlert />
            {route}
          </>
        </RestoreAuth>
      </ThemeProvider>
    </Provider>
  )
}

export default App
