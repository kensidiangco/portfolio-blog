import Head from 'next/head'

export default function Gallery() {
    return (
        <>
            <Head>
                <title>Gallery</title>
            </Head>
            <div className="container mx-auto">
                <h1 className="text-center text-2xl">
                    This is Gallery section
                </h1>
            </div>
        </>
    )
}