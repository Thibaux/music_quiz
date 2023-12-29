import { useState, useEffect } from "react"
import axios from "axios"

type Props  = {
	code?: string | null;
}

export const useAuth = (props: Props) => {
	const {code} = props;
	const [accessToken, setAccessToken] = useState()
	const [refreshToken, setRefreshToken] = useState()
	const [expiresIn, setExpiresIn] = useState()

	const token = localStorage.getItem('token');

	useEffect(() => {
		if (!refreshToken || !expiresIn) return

		const interval = setInterval(() => {
			axios.post("http://localhost:3001/refresh", {
					refreshToken,
				})
				.then(res => {
					setAccessToken(res.data.accessToken)
					setExpiresIn(res.data.expiresIn)
				})
				.catch(() => {
					window.location.replace('/')
				})
		}, (expiresIn - 60) * 1000)

		return () => clearInterval(interval)
	}, [refreshToken, expiresIn])

	return {
		token
	}
}