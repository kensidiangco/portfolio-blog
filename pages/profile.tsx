import Head from "next/head";
import Image from "next/image";

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <div className="container mx-auto md:py-6">
                <div className="flex justify-center">
                    <Image src={"/banner.png"} width={1000} height={250} objectFit="contain" loading="eager" alt="ken"/>
                </div>
            </div>
        </>
    )
}