"use client";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "@styles/globals.css";
import Providers from "@utils/Provider";

interface INodes {
    children: React.ReactNode
}

interface IMetadata {
    title: string;
    description: string
}

export const metadata:IMetadata ={
    title: "Car Hub",
    description: "Discover world's best car showcase application",
}

const RootLayout = ({ children }: INodes) => (
    <html lang="en">
        <body className="relative">
            {/* <!-- Preloader --> */}
            <Providers>
                <Navbar />
                    {children}
                <Footer />
            </Providers>
        </body>
    </html>
)

export default RootLayout