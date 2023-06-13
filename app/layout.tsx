"use client";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import "@styles/globals.css";
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
            <Navbar />
             {children}
            <Footer />
        </body>
    </html>
)

export default RootLayout