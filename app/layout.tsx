import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

interface IMetadata {
    title: string;
    description: string
}

export const metadata:IMetadata ={
    title: "Aipropmtia",
    description: "Discover and share AI prompts"
}

type LayoutProps = {
    children: React.ReactNode,
  };

const RootLayout = ({ children }:LayoutProps) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                    <div className="gradient"/>
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
                </Provider>
                
            </body>
        </html>
    )
}

export default RootLayout