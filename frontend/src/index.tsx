import { Config, DAppProvider, Gnosis } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

const config: Config = {
  readOnlyChainId: Gnosis.chainId,
  readOnlyUrls: {
    [Gnosis.chainId]: getDefaultProvider(),
  },
}

// @ts-ignore
function NetworkCheck({ children }) {
  return children
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <NetworkCheck>
        <App />
      </NetworkCheck>
    </DAppProvider>
  </React.StrictMode>
)
