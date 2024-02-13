import "../src/script.jsx";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas/dist/html2canvas.esm.js";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/mode-javascript";
import "../src/main.js";
import github from "../src/img/github.svg";
import telegram from "../src/img/telegram.svg";
import instagram from "../src/img/instagram.svg";

export default function App() {
  const changeFont = (fontFamily) => {
    if (editorRef.current) {
      const editorElement = editorRef.current.editor.container;
      editorElement.style.fontFamily = fontFamily;
    }
  };
  const [backgroundImage, setBackgroundImage] = useState("");
  const [boxShadow, setBoxShadow] = useState("");
  const editorRef = useRef(null);

  useEffect(() => {
    console.log("Background Image:", backgroundImage);
    console.log("Box Shadow:", boxShadow);

    const handleButtonClick = (buttonId) => {
      if (!editorRef.current) return;
      if (buttonId === "button1") {
        setBackgroundImage('url("./images/bg.jpg")');
      } else if (buttonId === "button2") {
        setBackgroundImage('url("./images/bg2.jpg")');
      } else if (buttonId === "button3") {
        setBackgroundImage('url("./images/bg3.jpg")');
      } else if (buttonId === "button4") {
        setBackgroundImage('url("./images/bg4.jpg")');
      } else if (buttonId === "button5") {
        setBackgroundImage('url("./images/bg5.jpg")');
      } else if (buttonId === "button6") {
        setBackgroundImage('url("./images/bg6.jpg")');
      }
    };

    const pageElement = document.getElementById("page");
    const centerElement = document.querySelector(".center");

    document
      .getElementById("button1")
      .addEventListener("click", () => handleButtonClick("button1"));

    document
      .getElementById("button1")
      .addEventListener("click", () => handleButtonClick("button1"));
    document
      .getElementById("button2")
      .addEventListener("click", () => handleButtonClick("button2"));
    document
      .getElementById("button3")
      .addEventListener("click", () => handleButtonClick("button3"));
    document
      .getElementById("button4")
      .addEventListener("click", () => handleButtonClick("button4"));
    document
      .getElementById("button5")
      .addEventListener("click", () => handleButtonClick("button5"));
    document
      .getElementById("button6")
      .addEventListener("click", () => handleButtonClick("button6"));

    if (centerElement) {
      pageElement.style.backgroundImage = backgroundImage;
      // pageElement.style.boxShadow = boxShadow;
      centerElement.style.boxShadow = boxShadow; // Update the box-shadow of the "center" class
    }
  }, [backgroundImage, boxShadow]);

  const handleBoxShadowChange = (shadowId) => {
    let newBoxShadow = "";
    if (shadowId === "box-shadow-1") {
      newBoxShadow =
        "rgba(0, 146, 172, 0.4) 0px 0px 0px 2px, rgb(0, 119, 255) 0px 4px 6px -1px, rgb(170, 169, 169) 0px 1px 0px";
    } else if (shadowId === "box-shadow-2") {
      newBoxShadow = "rgb(0, 0, 0) 0px 22px 70px 4px"; // Replace with the desired box-shadow value
    } else if (shadowId === "box-shadow-3") {
      newBoxShadow =
        "rgba(91, 3, 255, 0.4) -5px 5px, " +
        "rgba(82, 12, 212, 0.3) -10px 10px, " +
        "rgba(92, 18, 153, 0.2) -15px 15px, " +
        "rgba(102, 19, 197, 0.1) -20px 20px, " +
        "rgba(69, 3, 223, 0.05) -25px 25px";
    } else if (shadowId === "box-shadow-4") {
      newBoxShadow =
        "rgba(96, 0, 252, 0.4) 0px 5px, rgba(93, 9, 202, 0.3) 0px 10px, rgba(71, 15, 145, 0.2) 0px 15px, rgba(40, 10, 110, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px";
    } else if (shadowId === "box-shadow-5") {
      newBoxShadow =
        "rgba(98, 0, 255, 0.4) 5px 5px, rgba(83, 10, 201, 0.3) 10px 10px, rgba(85, 15, 150, 0.2) 15px 15px, rgba(40, 14, 83, 0.1) 20px 20px, rgba(27, 7, 46, 0.05) 25px 25px";
    }

    setBoxShadow(newBoxShadow);
  };

  const captureScreenshot = () => {
    html2canvas(document.getElementById("page")).then(function (canvas) {
      var newCanvas = document.createElement("canvas");
      var context = newCanvas.getContext("2d");
      newCanvas.width = canvas.width;
      newCanvas.height = canvas.height;

      context.drawImage(canvas, 0, 0);

      var textarea = document.getElementById("codeInput");

      context.font =
        getComputedStyle(textarea).fontSize +
        " " +
        getComputedStyle(textarea).fontFamily;
      context.fillStyle = getComputedStyle(textarea).color;
      context.fillText(
        textarea.value,
        parseInt(getComputedStyle(textarea).paddingLeft),
        parseInt(getComputedStyle(textarea).paddingBottom)
      );

      // Convert the new canvas to a data URL
      var imgData = newCanvas.toDataURL("image/png");

      var link = document.createElement("a");
      link.href = imgData.replace("image/png", "image/octet-stream");
      link.download = "screenshot.png";
      link.click();
    });
  };

  return (
    <>
      <div className="main">
        <div id="page">
          <div
            className="center"
            style={{ resize: "horizontal", overflow: "auto" }}
          >
            <div className="titlebar">
              <div className="dots">
                <div className="dot close"></div>
                <div className="dot minimise"></div>
                <div className="dot maximise"></div>
              </div>
              <div className="editable-input">
                <input type="text" id="inputName" placeholder="Ergashoff" />
              </div>
            </div>

            <AceEditor
              className="editor"
              ref={editorRef}
              mode="javascript"
              theme="cobalt"
              name="codeInput"
              editorProps={{ $blockScrolling: true }}
              fontSize={24}
              style={{
                width: "100%",
                height: "92%",
              }}
            />
          </div>
        </div>

        <div id="sidebar">
          <div className="bg">
            <h3 className="theme">Background</h3>
            <br />
            <div className="bg-btns">
              <button id="button1"></button>
              <button id="button2"></button>
              <button id="button3"></button>
              <button id="button4"></button>
              <button id="button5"></button>
              <button id="button6"></button>
            </div>
          </div>

          <div className="box-shadow">
            <h3>Change Shadow</h3>
            <br />
            <button
              id="box-shadow-1"
              onClick={() => handleBoxShadowChange("box-shadow-1")}
            >
              1
            </button>
            <button
              id="box-shadow-2"
              onClick={() => handleBoxShadowChange("box-shadow-2")}
            >
              2
            </button>
            <button
              id="box-shadow-3"
              onClick={() => handleBoxShadowChange("box-shadow-3")}
            >
              3
            </button>
            <button
              id="box-shadow-4"
              onClick={() => handleBoxShadowChange("box-shadow-4")}
            >
              4
            </button>
            <button
              id="box-shadow-5"
              onClick={() => handleBoxShadowChange("box-shadow-5")}
            >
              5
            </button>
          </div>

          <div className="fonts">
            <h3>Fonts</h3>
            <br />
            <button className="fonts1" onClick={() => changeFont("Rajdhani")}>
              1
            </button>
            <button
              className="fonts2"
              onClick={() => changeFont("Cormorant Garamond")}
            >
              2
            </button>
            <button className="fonts3" onClick={() => changeFont("Zilla Slab")}>
              3
            </button>
          </div>

          <section>
            <div className="content">
              <h2>Ergashoff</h2>
              <h2>Ergashoff</h2>
            </div>
          </section>

          <button className="screenbtn" onClick={captureScreenshot}>
            Screenshot
          </button>
          <div className="messages">
            <a href="https://github.com/maestrouz/my_code.git">
              <img className="github" src={github} alt="github-icon" />
            </a>
            <a href="https://t.me//ergashoff_dev">
              <img className="telegram" src={telegram} alt="telegram-icon" />
            </a>
            <a href="https://instagram.com/ergashoff_dev">
              <img className="instagram" src={instagram} alt="instagram-icon" />
            </a>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.0/ace.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.5.3/ace.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.0/ace.min.js"></script>
    </>
  );
}
