// @ts-ignore
import { Contract } from "@/near-interface";
// @ts-ignore
import { Wallet } from "@/near-wallet";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

export const Web3Context = createContext(null);

const CONTRACT_ID = import.meta.env.CONTRACT_ID;

interface PropsWeb3Provider extends PropsWithChildren<unknown> {};

interface Web3State {
    wallet: any;
    contract: any ;
    isSignedIn: any;
}

function Web3Provider({ children }: PropsWeb3Provider) {

    const [web3, setWeb3] = useState<Web3State | any>({
        wallet: null,
        contract: null,
        isSignedIn: null,
    });

    useEffect(() => {

        const loadProvider = async () => {
            const wallet = new Wallet({
                createAccessKeyFor: CONTRACT_ID,
                network: "testnet",
            });
            const contract = new Contract({
                contractId: CONTRACT_ID,
                walletToUse: wallet
            });
            const isSignedIn = await wallet.startUp();
            setWeb3({
                wallet,
                contract,
                isSignedIn
            });
        };
        loadProvider();
    }, []);


    return (
        <Web3Context.Provider value={web3}>
            {children}
        </Web3Context.Provider>
    );
}

export const useWeb3 = () => {
    return useContext(Web3Context);
};

export default Web3Provider;