// A helper file that simplifies using the wallet selector

// near api js
import { providers } from 'near-api-js';

// wallet selector UI
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupNearFi } from "@near-wallet-selector/nearfi";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupWelldoneWallet } from "@near-wallet-selector/welldone-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupOptoWallet } from "@near-wallet-selector/opto-wallet";


// wallet selector options
import { Network, NetworkId, setupWalletSelector } from '@near-wallet-selector/core';
import { setupLedger } from '@near-wallet-selector/ledger';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { QueryResponseKind } from 'near-api-js/lib/providers/provider';

// interface QueryResponse extends QueryResponseKind{
//   result: any;
// }

const THIRTY_TGAS = '30000000000000';
const NO_DEPOSIT = '0';

// Wallet that simplifies using the wallet selector
export class Wallet {
  walletSelector!: any;
  wallet!: any;
  network!: any;
  createAccessKeyFor!: any;
  accountId?: any;

  constructor({ createAccessKeyFor = undefined, network = 'testnet' }: { createAccessKeyFor?: any, network?: string }) {
    // Login to a wallet passing a contractId will create a local
    // key, so the user skips signing non-payable transactions.
    // Omitting the accountId will result in the user being
    // asked to sign all transactions.
    this.createAccessKeyFor = createAccessKeyFor
    this.network = network
  }

  // To be called when the website loads
  async startUp(): Promise<boolean> {
    this.walletSelector = await setupWalletSelector({
      network: this.network,
      modules: [
        setupMyNearWallet(),
        setupLedger(),
        setupCoin98Wallet(),
        setupNearFi(),
        setupHereWallet(),
        setupSender(),
        setupNearWallet(),
        setupMathWallet(),
        setupNightly(),
        setupMeteorWallet(),
        setupWelldoneWallet(),
        setupNeth(),
        setupOptoWallet()
    ],
    });

    const isSignedIn = this.walletSelector.isSignedIn();

    if (isSignedIn) {
      this.wallet = await this.walletSelector.wallet();
      this.accountId = this.walletSelector.store.getState().accounts[0].accountId;
    }


    return isSignedIn;
  }

  // Sign-in method
  signIn() {
    const description = 'Please select a wallet to sign in.';
    const modal = setupModal(this.walletSelector, { contractId: this.createAccessKeyFor, description });
    modal.show();
  }

  // Sign-out method
  signOut() {
    this.wallet.signOut();
    this.wallet = this.accountId = this.createAccessKeyFor = null;
    window.location.replace(window.location.origin + window.location.pathname);
  }

  async viewMethod({ contractId, method, args = {} }: { contractId: string; method: string; args?: object; }): Promise<any> {
    const { network } = this.walletSelector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });
  
    let res: any  = await provider.query({
      request_type: 'call_function',
      account_id: contractId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
      finality: 'optimistic',
    });

    return JSON.parse(Buffer.from((res as any).result).toString());
  }
  
  async callMethod({ contractId, method, args = {}, gas = Number(THIRTY_TGAS), deposit = Number(NO_DEPOSIT) }: 
    { contractId: string; method: string; args?: object; gas?: number; deposit?: number; }): Promise<any> {
    return await this.wallet.signAndSendTransaction({
      signerId: this.accountId,
      receiverId: contractId,
      actions: [
        {
          type: 'FunctionCall',
          params: {
            methodName: method,
            args,
            gas,
            deposit,
          },
        },
      ],
    });
  }

  // Get transaction result from the network
  async getTransactionResult(txhash: any) {
    const { network } = this.walletSelector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    // Retrieve transaction result from the network
    const transaction = await provider.txStatus(txhash, 'unnused');
    return providers.getTransactionLastResult(transaction);
  }
}