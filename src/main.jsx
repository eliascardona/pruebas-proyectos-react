import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ClaimsProvider } from './contexts/ClaimsContext'
// import { AuthProvider } from './contexts/AuthContext'
import App from './App'

ReactDOM
.createRoot(document.getElementById('root'))
.render(
	// <AuthProvider>
	// 	<ClaimsProvider>
	<App/>
	// 	</ClaimsProvider>
	// </AuthProvider>

)
