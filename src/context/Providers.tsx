import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import Web3Provider from "./Web3Provider";

interface PropsProviders extends PropsWithChildren<unknown> {};
export default function Providers({ children }: PropsProviders) {
    return (
        <ThemeProvider attribute="class">
            <Web3Provider>
                {children}
            </Web3Provider>
        </ThemeProvider>
    );
}