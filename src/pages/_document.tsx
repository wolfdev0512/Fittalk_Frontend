import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
// styled-component
import { ServerStyleSheet } from "styled-components";

// ----------------------------------------------------------------------

export default class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props: any) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Changa:wght@500;600;700&family=Roboto:wght@400;500;600;700;900&family=Inter:wght@400;500;600;700;800&display=swap"
						rel="stylesheet"
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Exo:wght@500;600;700&display=swap"
						rel="stylesheet"
					></link>
					<link
						rel="shortcut icon"
						href="https://fittalk.vercel.app/favicon.ico"
						type="image/png"
					></link>
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
						crossOrigin="anonymous"
					></link>
					<script
						async
						type="text/javascript"
						src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Uy3VY2"
					></script>
				</Head>
				<body>
					<div className="klaviyo-form-Rjdpju"></div>
					<Main />
					<noscript>Sorry, your browser does not support JavaScript!</noscript>
					<NextScript />
				</body>
			</Html>
		);
	}
}
