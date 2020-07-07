import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import '../tailwind.css'
import Meta from '../components/head/Meta'
import Styles from '../components/head/Styles'

class _App extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<div>
				<Meta/>
				<Styles/>

				<Component {...pageProps} />
			</div>
		)
	}
}

export default _App
