import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&family=Lato:wght@300;400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="font-sans bg-theme-lightest">
                    <Main/>
                    <NextScript/>
                    <div id="modal-root"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument;