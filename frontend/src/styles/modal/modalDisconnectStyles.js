const newLocal = `
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 250;
              backdrop-filter: blur(2px);
              background-color: rgba(0, 0, 0, 0.8);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 100;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #0a0b0bcc;
              position: relative;
              margin: auto;
              border: 0.15rem solid #fc4f0c;
              border-radius: 15px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-name {
              align-content: center;
              text-align: center;
              color: #ff7402;
              font-size: large;
            }

            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: #fc4f0c;
              cursor: pointer;
              border: none;
              background: transparent;
            }

            .modal-body {
              margin: 1rem;
              font-family: "Noto Sans", sans-serif;
              font-size: 1rem;
              color: rgb(255, 255, 255);
              line-height: 1.6rem;
              letter-spacing: 0.05rem;
            }

            .buttons-confirm {
              display: flex;
              justify-content: space-around;
              padding: 0.5rem;
            }

            .yes {
              color: green;
              font-size: 1.1rem;
              background-color: transparent;
              border: none;
            }

            .no {
              color: red;
              font-size: 1.1rem;
              background-color: transparent;
              border: none;
            }

            .yes:hover, .no:hover {
              cursor: pointer;
            }
          `;

export default newLocal;
