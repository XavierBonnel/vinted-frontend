import React from "react";
import "../styles/publishedModal.style.scss";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function PublishedModal({ setPublishedModalOpen }) {
  const navigate = useNavigate();
  return (
    <div
      className="darkBG"
      onClick={() => {
        setPublishedModalOpen(false);
        navigate("/");
      }}
    >
      <div className="centered">
        <div className="modal3">
          <button
            className="closeBtn"
            onClick={() => {
              navigate("/");
              setPublishedModalOpen(false);
            }}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <h1>Offre Publiée</h1>
          <p>Merci d'utiliser notre service !</p>
          <div className="modalActions">
            <div className="actionsContainer">
              {/* <Link to="/offerconfig" state={resultAndTotal}>
                  <button className="cancelBtn">Selectionner la voiture</button>
                </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishedModal;
