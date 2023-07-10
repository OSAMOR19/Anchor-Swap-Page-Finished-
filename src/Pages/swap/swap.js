import React, { useState } from "react";


const SwapPage = () => {
  const tokenOptions = [
    { value: "A", label: "Eth" },
    { value: "B", label: "WBnb" },
    { value: "C", label: "Arb" },
    // Add more token options as needed
  ];

  const slippageTolerances = [
    { value: "0.5", label: "0.5%" },
    { value: "1", label: "1%" },
    { value: "2", label: "2%" },
    // Add more slippage tolerance options as needed
  ];

  const [selectedSlippage, setSelectedSlippage] = useState("");

  const handleSlippageChange = (e) => {
    setSelectedSlippage(e.target.value);
  };

  return (
    <div className="swap-page">
      <h1 className="swap-page-title">Anchor Swap</h1>

      <div className="swap-inputs">
        <div className="input-container">
          <label className="input-label">From</label>
          <div className="token-navigator">
            <select className="token-select" defaultValue="">
              <option value="" disabled>Select token</option>
              {tokenOptions.map((token) => (
                <option key={token.value} value={token.value}>{token.label}</option>
              ))}
            </select>
          </div>
          <input type="text" className="input-field" placeholder="0.0" />
        </div>

        <div className="input-container">
          <label className="input-label">To</label>
          <div className="token-navigator">
            <select className="token-select" defaultValue="">
              <option value="" disabled>Select token</option>
              {tokenOptions.map((token) => (
                <option key={token.value} value={token.value}>{token.label}</option>
              ))}
            </select>
          </div>
          <input type="text" className="input-field" placeholder="0.0" />
        </div>
      </div>

      <div className="swap-action">
        <button className="swap-button">Swap Now</button>
      </div>

      <div className="swap-info">
        <p className="info-text"></p>
        <div className="slippage-container">
          <label className="slippage-label">Slippage Tolerance:</label>
          <select
            className="slippage-select"
            value={selectedSlippage}
            onChange={handleSlippageChange}
          >
            <option value="" disabled>Select</option>
            {slippageTolerances.map((slippage) => (
              <option key={slippage.value} value={slippage.value}>
                {slippage.label}
              </option>
            ))}
          </select>
        </div>
        <p className="info-text">Transaction Fee: 0.3%</p>
      </div>

      <div className="swap-disclaimer">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading"><p className="disclaimer-text">
          By proceeding, you confirm that you understand the risks involved
          and agree to our terms of service.
        </p></h4>
          <p></p>
          <p class="mb-0"></p>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
