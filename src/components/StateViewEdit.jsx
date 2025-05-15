// import React from "react";
// import "../styles/ViewEdit.css";
import { Link } from "react-router-dom";

const StateViewEdit = ({ onClose }) => {
  return (
    <div class="modal-overlay">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">State</h2>
          <Link to="/state">
          <button class="modal-close-button">&times;</button>
          </Link>
        </div>
        <div class="modal-content">
          <div class="modal-input-row">
            <div class="modal-input-field modal-input-field-compact">
              <label class="modal-label">State ID</label>
              <input type="text" class="modal-input" value="01" readonly />
            </div>
            <div class="modal-input-field modal-input-field-wide">
              <label class="modal-label">State Name</label>
              <input type="text" class="modal-input" value="Andhra Pradesh" />
            </div>
            <div class="modal-input-field modal-input-field-wide">
              <label class="modal-label">Status</label>
              <input type="text" class="modal-input" value="Guntur" />
            </div>
          </div>
          <div class="modal-input-row">
            <div class="modal-input-field modal-input-field-compact">
              <label class="modal-label">Country ID</label>
              <input type="text" class="modal-input" value="01" readonly />
            </div>
            <div class="modal-input-field modal-input-field-wide">
              <label class="modal-label">Sync Status</label>
              <input type="text" class="modal-input" value="Synchronized" />
            </div>
            <div class="modal-input-field modal-input-field-wide">
              <label class="modal-label">Sync Date</label>
              <input type="text" class="modal-input" value="2024-04-28" />
            </div>
          </div>
        </div>
        <div class="modal-actions">
          <button class="modal-delete-button">Delete</button>
          <button class="modal-edit-button">Edit</button>
        </div>
      </div>
    </div>


  );
};

export default StateViewEdit;
