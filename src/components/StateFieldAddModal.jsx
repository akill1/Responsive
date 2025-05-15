import React from "react";
import "../styles/StateFieldAddModal.css";
import { Link } from "react-router-dom";

const StateFieldAddModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Add State Field</h2>
          <Link to="/state">
          <button className="modal-close-button" onClick={onClose}>&times;</button>
          </Link>
        </div>
        <div className="modal-content">
          <div className="modal-input-row">
            <div className="modal-input-field modal-input-field-compact">
              <label className="modal-label">State ID</label>
              <input type="text" className="modal-input" value="01" readOnly />
            </div>
            <div className="modal-input-field modal-input-field-wide">
              <label className="modal-label">State Name</label>
              <input type="text" className="modal-input" value="Andhra Pradesh" />
            </div>
            <div className="modal-input-field modal-input-field-wide">
              <label className="modal-label">Status</label>
              <input type="text" className="modal-input" value="Guntur" />
            </div>
          </div>
          <div className="modal-input-row">
            <div className="modal-input-field modal-input-field-compact">
              <label className="modal-label">Country ID</label>
              <input type="text" className="modal-input" value="01" readOnly />
            </div>
            <div className="modal-input-field modal-input-field-wide">
              <label className="modal-label">Sync Status</label>
              <input type="text" className="modal-input" value="Synchronized" />
            </div>
            <div className="modal-input-field modal-input-field-wide">
              <label className="modal-label">Sync Date</label>
              <input type="text" className="modal-input" value="2024-04-28" />
            </div>
          </div>
        </div>
        <div className="modal-actions">
          <button className="modal-delete-button">Delete</button>
          <button className="modal-edit-button">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default StateFieldAddModal;