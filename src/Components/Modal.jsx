import "./Modal.css";

function Modal({paragraph, cancelModal, confirmModal}) {
  console.log(paragraph);
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{paragraph}</p>
        <div className="modal__buttons">
          <button onClick={cancelModal} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={confirmModal} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
