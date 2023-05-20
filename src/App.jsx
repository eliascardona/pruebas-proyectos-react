import React, { useContext, useEffect } from "react"
import { AuthContext } from "./contexts/AuthContext"
import { ClaimsContext } from "./contexts/ClaimsContext"
import Perfil from "./pages/Perfil"
import Eventos from "./pages/Eventos"
import Login from "./pages/Login"

function App () {
	let arr = []
	const authData = useContext(AuthContext)
	const userCurrentClaim = useContext(ClaimsContext)
	const authCurrentUser = authData.user

	useEffect(() => {
		if (authCurrentUser) {
			arr.push(authCurrentUser.email)
			arr.push(userCurrentClaim)
		} else {
			console.log('Nadie ha iniciado sesión')
		}		
		console.log(arr)
	}, [authCurrentUser, userCurrentClaim])
	
	return (
		<section>
			<Login />
			{
				userCurrentClaim === 'cliente' ? (
					<Eventos />
				) : (
					<Perfil />
				)
			}
		</section>
	)
}

export default App