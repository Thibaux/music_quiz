import React, {useEffect, useState} from "react";
import {useHttp} from "./Hooks/useHttp";
import axios from "axios";

export const Home = () => {
	const code = new URLSearchParams(window.location.search).get("code")

	useEffect(() => {
		axios.post("http://localhost:3000/login", {	code})
			.then(res => {
				localStorage.setItem('token', res.data.access_token)
			})
	}, [code])

	return (
		<div>
			{code && code}
		</div>
	)
}