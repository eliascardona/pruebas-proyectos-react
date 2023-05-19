import React, { createContext, useEffect, useState } from 'react'
import { auth } from "../firebase/base"
import { onIdTokenChanged } from "firebase/auth"
export const ClaimsContext = createContext({ userClaimState: null })

export function ClaimsProvider({ children }) {
	const [userClaimState, setUserClaimState] = useState(null)

	useEffect(() => {
	    const unsubscribe = onIdTokenChanged(auth, (user) => {
			user.getIdTokenResult(true)
			.then(idTokenResult => setUserClaimState(idTokenResult.claims.rol))
			.catch(error => console.log(error))
		})
	    return unsubscribe
	}, [])

	// useEffect(() => {
	// 	const handle = setInterval(async () => {
	// 		const user = auth.currentUser
	// 		if (user) {
	// 			await user.getIdTokenResult(true)
	// 		}
	// 	}, 8*60*1000)

	// 	return () => clearInterval(handle)
	// }, [])

	return (
		<ClaimsContext.Provider value={{userClaimState}}>
			{children}
		</ClaimsContext.Provider>
	)
}
