// HelpModal.js
import React, { useState } from "react";
import "./HelpModal.css"; // Import your custom CSS file

const HelpModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="help-button" onClick={toggleModal}>
        Help
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              ×
            </span>
            <h2 className="modal-title">Shopping Assistance</h2>
            <p className="modal-text">
              Here are some details to assist you with your shopping:
              {/* Add relevant shopping assistance details */}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpModal;
