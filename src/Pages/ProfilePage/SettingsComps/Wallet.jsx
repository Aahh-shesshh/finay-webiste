import React, { useState } from "react";

const Wallet = () => {

  const [selectedWallet, setSelectedWallet] = useState(1);
  return (
    <div className="account">
      <h4>Wallet</h4>
      <div className="flex flex-row gap-[30px] mt-[30px]">
        <div className="wallet" onClick={() => setSelectedWallet(1)} style={{border:selectedWallet === 1 ? "1px solid #ff8200" : null}}>
          <img src="/images/metamask.jpg" alt="adjkfa"></img>
          <p>MetaMask</p>
        </div>
        <div className="wallet" onClick={() => setSelectedWallet(2)} style={{border:selectedWallet === 2 ? "1px solid #ff8200" : null}}>
        <img src="/images/trustwallet.jpg" alt="adjkfa"></img>
        <p>TrustWallet</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
