import React from 'react';
import { useDispatch } from 'react-redux';
import { useMetaMask } from 'metamask-react';
import Image from 'next/image';
import { walletModalShow } from '../../../store/componentsSlice';
import { ButtonWallet } from '../../buttons/buttonWallet';
import { ButtonMetamaskWallet } from '../../buttons/buttonMetamaskWallet';

const MetamaskButtonWalletIcon = () => {
  const dispatch = useDispatch();
  const { status, connect } = useMetaMask();

  if (status === 'initializing' || status === 'unavailable' || status === 'connecting') return <ButtonWallet />;
  if (status === 'notConnected') return <ButtonWallet onClick={connect} />;
  if (status === 'connected') return <ButtonWallet onClick={() => dispatch(walletModalShow())} />;
};

const MetamaskButtonWallet = () => {
  const dispatch = useDispatch();
  const { status, connect } = useMetaMask();

  if (status === 'initializing') return <ButtonMetamaskWallet readonly text="MetaMask Initializing..." />;
  if (status === 'unavailable') return <ButtonMetamaskWallet readonly text="MetaMask not available..." />;
  if (status === 'notConnected') return <ButtonMetamaskWallet onClick={connect} />;
  if (status === 'connecting') return <ButtonMetamaskWallet readonly text="MetaMask connecting..." />;
  if (status === 'connected')
    return <ButtonMetamaskWallet onClick={() => dispatch(walletModalShow())} text="Disconnect Wallet" />;
};

export { MetamaskButtonWalletIcon, MetamaskButtonWallet };
