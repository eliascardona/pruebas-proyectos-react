import React, { useContext, useEffect } from "react"
import { AuthContext } from "./contexts/AuthContext"
import { ClaimsContext } from "./contexts/ClaimsContext"
import Perfil from "./pages/Perfil"
import Eventos from "./pages/Eventos"
import Login from "./pages/Login"
import "./App.css"

function App () {
	const authData = useContext(AuthContext)
	const userCurrentClaim = useContext(ClaimsContext)

	let arr = []
	arr.push(authData.user.email)
	arr.push(userCurrentClaim)
	
	useEffect(() => {
		console.log(arr)
	}, [userCurrentClaim])
	
	return (
		<section>
			{
				userCurrentClaim === "cliente" ? (
					<Perfil />
				) : userCurrentClaim === "invitado" ? (
					<Eventos />
				) : (
					<Login />
				)
			}
		</section>
	)
}

export default App