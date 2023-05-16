import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useWeb3React } from 'web3-react/core';
import { injected } from './connectors';

export default function Header() {
  const { activate, active, account } = useWeb3React();

  return (
    <Menu>
      <Menu.Item header>
        <img src="/logo.png" alt="logo" />
        NFT Minting
      </Menu.Item>
      <Menu.Menu position="right">
        {active ? (
          <Menu.Item>
            {account.slice(0, 6)}...{account.slice(38)}
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Button primary onClick={() => activate(injected)}>
              Connect Wallet
            </Button>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
}
