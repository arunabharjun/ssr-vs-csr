import Document, { Head, Main, NextScript, Html } from 'next/document';
import logo from '../assets/images/logo.png';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='UTF-8' />
					<meta
						name='description'
						content='CSR V/S SSR By Arunabh Arjun'
					/>
					<meta name='keywords' content='SSR CSR ARUNABH ARJUN' />
					<meta name='author' content='Arunabh Arjun' />
					<link rel='shortcut icon' href={logo} />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<link rel='shortcut icon' href={logo} />

					<link rel='apple-touch-startup-image' href={logo} />
					<meta
						name='apple-mobile-web-app-title'
						content='CSR V/S SSR By Arunabh Arjun'
					/>

					<meta name='msapplication-TileColor' content='#000000' />
					<meta name='msapplication-TileImage' content={logo} />
					<meta name='theme-color' content='#000000' />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
