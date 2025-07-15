import React, { useState } from "react";
import "./textBox.css";

export default function TextBox() {
  const [activeTab, setActiveTab] = useState("text");
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setInputValue("");
    setSelectedFile(null);
    setError(null);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = [...e.dataTransfer.files];
    if (files && files.length > 0) {
      if (!isValidFileType(files[0])) {
        setError(`Please select a ${activeTab} file`);
        return;
      }
      setSelectedFile(files[0]);
      setError(null);
    }
  };

  const handleFileSelect = (e) => {
    const files = [...e.target.files];
    if (files && files.length > 0) {
      if (!isValidFileType(files[0])) {
        setError(`Please select a ${activeTab} file`);
        return;
      }
      setSelectedFile(files[0]);
      setError(null);
    }
    e.target.value = "";
  };

  const isValidFileType = (file) => {
    if (activeTab === "image") {
      return file.type.startsWith("image/");
    } else if (activeTab === "video") {
      return file.type.startsWith("video/");
    }
    return false;
  };

  const currentDate = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  const handleAnalyze = async () => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    const formData = new FormData();

    if (activeTab === "text") {
      formData.append("type", "text");
      formData.append("prompt", inputValue);
    } else if (activeTab === "image" || activeTab === "video") {
      formData.append("type", activeTab);
      formData.append("file", selectedFile);
      formData.append(
        "prompt",
        `Analyze this ${activeTab} for manipulation signs`
      );
    }

    try {
      const response = await fetch(
        "https://bulllt.app.n8n.cloud/webhook-test/deepfakeDetection",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Analysis failed");
      setAnalysisResult(result.output);
    } catch (error) {
      setError(error.message);
      console.error("Analysis error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const FilePreview = () => {
    if (!selectedFile) return null;

    return (
      <div className="filePreviewContainer">
        {activeTab === "image" && selectedFile.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            className="filePreviewImage"
          />
        ) : (
          <div className="fileInfo">
            <div className="fileIcon">
              {activeTab === "image" ? "🖼️" : "🎥"}
            </div>
            <div className="fileDetails">
              <div className="fileName">{selectedFile.name}</div>
              <div className="fileSize">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </div>
            </div>
          </div>
        )}
        <button
          className="removeFileButton"
          onClick={() => setSelectedFile(null)}
        >
          ×
        </button>
      </div>
    );
  };

  return (
    <div className="textBoxContainer">
      {/* Interfaz de Detección */}
      <section className="detectionSection">
        <div className="detectionContainer">
          <div className="detectionHeader">
            <h2 className="detectionTitle">Interfaz de Detección IA</h2>
            <p className="detectionSubtitle">
              Elige tu método de entrada y deja que nuestra IA analice el contenido
            </p>
          </div>

          {/* Pestañas de tipo de entrada */}
          <div className="inputTabs">
            <button
              className={`inputTab ${
                activeTab === "text" ? "inputTabActive" : ""
              }`}
              onClick={() => handleTabChange("text")}
            >
              <div className="inputTabIcon">📝</div>
              <span className="inputTabLabel">Texto</span>
            </button>
            <button
              className={`inputTab ${
                activeTab === "image" ? "inputTabActive" : ""
              }`}
              onClick={() => handleTabChange("image")}
            >
              <div className="inputTabIcon">🖼️</div>
              <span className="inputTabLabel">Imagen</span>
            </button>
            <button
              className={`inputTab ${
                activeTab === "video" ? "inputTabActive" : ""
              }`}
              onClick={() => handleTabChange("video")}
            >
              <div className="inputTabIcon">🎥</div>
              <span className="inputTabLabel">Video</span>
            </button>
          </div>

          {/* Área de entrada */}
          <div className="inputArea">
            {activeTab === "text" && (
              <div className="textInputContainer">
                <textarea
                  className="textInput"
                  placeholder="Introduce el texto que deseas analizar para detección de deepfakes..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  rows={8}
                />
                <div className="textInputGlow"></div>
              </div>
            )}

            {(activeTab === "image" || activeTab === "video") && (
              <div className="fileInputContainer">
                {selectedFile ? (
                  <FilePreview />
                ) : (
                  <div
                    className={`fileDropZone ${
                      dragActive ? "fileDropZoneActive" : ""
                    }`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <div className="fileDropContent">
                      <div className="fileDropIcon">
                        {activeTab === "image" ? "🖼️" : "🎥"}
                      </div>
                      <h3 className="fileDropTitle">
                        Drop your {activeTab} here
                      </h3>
                      <p className="fileDropText">or click to browse files</p>
                      <input
                        type="file"
                        className="fileInput"
                        accept={activeTab === "image" ? "image/*" : "video/*"}
                        onChange={handleFileSelect}
                        multiple={false}
                      />
                    </div>
                    <div className="fileDropGlow"></div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Analyze Button */}
          <div className="analyzeSection">
            <button
              className="analyzeButton"
              onClick={handleAnalyze}
              disabled={
                (activeTab === "text" && !inputValue) ||
                ((activeTab === "image" || activeTab === "video") &&
                  !selectedFile)
              }
            >
              <span className="analyzeButtonText">Analizar Contenido</span>
              <div className="analyzeButtonGlow"></div>
            </button>
          </div>
        </div>

        {/* Display results */}
        {analysisResult && (
          <div
            className={`resultContainer ${
              analysisResult.isFake ? "fakeResult" : "realResult"
            }`}
          >
            <div className="resultHeader">
              <h3 className="resultTitle">
                {analysisResult.isFake ? (
                  <>
                    <span className="resultIcon">⚠️</span> Potential Fake
                    Content Detected
                  </>
                ) : (
                  <>
                    <span className="resultIcon">✓</span> Content Appears
                    Authentic
                  </>
                )}
              </h3>
              <div className="resultConfidence">
                Confidence: <span>{analysisResult.confidence}%</span>
              </div>
            </div>

            <div className="resultDetails">
              <h4 className="resultSubtitle">Analysis Breakdown:</h4>
              <p className="resultText">{analysisResult.details}</p>

              {analysisResult.evidence && (
                <div className="resultEvidence">
                  <h4 className="resultSubtitle">Key Evidence:</h4>
                  <ul className="evidenceList">
                    {analysisResult.evidence.map((item, index) => (
                      <li key={index} className="evidenceItem">
                        <span className="evidenceMarker">▹</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="resultFooter">
              <div className="resultTimestamp">
                Analyzed at: {currentDate()}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="errorContainer">
            <div className="errorIcon">✗</div>
            <div className="errorText">{error}</div>
          </div>
        )}

        {isLoading && (
          <div className="cyberLoaderContainer">
            <div className="cyberLoader">
              <div className="cyberLoaderInner"></div>
              <div className="cyberLoaderGlow"></div>
              <div className="cyberLoaderText">Analyzing Content</div>
            </div>
          </div>
        )}
      </section>

      {/* Background Effects */}
      <div className="backgroundEffects">
        <div className="backgroundGrid"></div>
        <div className="backgroundGradient"></div>
      </div>
    </div>
  );
}
