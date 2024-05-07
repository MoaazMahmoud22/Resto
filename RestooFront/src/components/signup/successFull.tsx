import logo from "../../assets/images/small/modal-imf-7.png";

function SuccessFull({
  modalOpen,
  setModal,
}: {
  modalOpen: string;
  setModal: (title: string) => void;
}) {
  return (
    <div
      className="modal show modal-open-animation"
      style={{ display: modalOpen === "success" ? "block" : "" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          background: "rgba(0,0,0,0.5)",
        }}
        onClick={() => setModal("")}
      ></div>
      <div className="modal-dialog modal-dialog-six modal-open-inner">
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-sign-up-img  ">
              <img src={logo} alt="logo" />
            </div>
            <div className="modal-sign-up-text sign-up-text-to  ">
              <h2>Your successfully changed your password</h2>
              <p>Setting up an account takes less than 1 minute.</p>
            </div>

            <div className="btn-one-modal">
              <button
                type="button"
                className=" main-btn-four "
                onClick={() => setModal("")}
              >
                Continue
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_317_13742)">
                      <path
                        d="M1.41972 8.63898L11.0737 8.63898L7.30373 12.379C7.09177 12.5965 6.97314 12.8882 6.97314 13.192C6.97314 13.4957 7.09177 13.7875 7.30373 14.005C7.51841 14.217 7.80799 14.3359 8.10973 14.3359C8.41146 14.3359 8.70105 14.217 8.91573 14.005L14.6477 8.305C14.8528 8.0869 14.9669 7.79885 14.9669 7.49951C14.9669 7.20018 14.8528 6.91207 14.6477 6.69397L8.91573 0.993959C8.70105 0.781929 8.41146 0.663087 8.10973 0.663087C7.80799 0.663087 7.51841 0.781928 7.30373 0.993959C7.09659 1.20969 6.97748 1.49504 6.96973 1.79401C6.97267 2.09575 7.09238 2.3846 7.30373 2.59998L11.0737 6.35498L1.41972 6.35498C1.12309 6.36377 0.84155 6.48776 0.634836 6.70068C0.428121 6.91361 0.312501 7.19872 0.312501 7.49548C0.312501 7.79225 0.428121 8.07736 0.634835 8.29028C0.84155 8.50321 1.12309 8.6272 1.41972 8.63599L1.41972 8.63898Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessFull;
