import React from 'react';
import Head from 'next/head';
import '../styles/app.css';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<title>CSR V/S SSR</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
