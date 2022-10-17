import React from 'react';

export const ButtonMetamaskWallet = ({ text = 'Connect Wallet', onClick = undefined, readonly = false }) => {
  return readonly ? (
    <div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
      {text}
    </div>
  ) : (
    <button
      className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
