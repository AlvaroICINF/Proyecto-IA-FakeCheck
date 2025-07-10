import React, { useState } from "react";
import "./home.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("text");
  const [inputValue, setInputValue] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setInputValue("");
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
      console.log("Files dropped:", files);
      // Handle file upload logic here
    }
  };

  const handleFileSelect = (e) => {
    const files = [...e.target.files];
    if (files && files.length > 0) {
      console.log("Files selected:", files);
      // Handle file upload logic here
    }
  };

  const handleAnalyze = () => {
    console.log("Analyzing:", { type: activeTab, content: inputValue });
    // Handle analysis logic here
  };

  return (
    <div className="homeContainer">
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <div className="heroText">
            <h1 className="heroTitle">
              <span className="heroTitleMain">DeepFake</span>
              <span className="heroTitleAccent">Detection</span>
            </h1>
            <p className="heroDescription">
              Advanced AI-powered detection for deepfake content. Analyze text,
              images, and videos with cutting-edge machine learning algorithms
              to identify synthetic media.
            </p>
          </div>
          <div className="heroVisual">
            <div className="heroGlow"></div>
            <div className="heroPattern"></div>
          </div>
        </div>
      </section>

      {/* Detection Interface */}
      <section className="detectionSection">
        <div className="detectionContainer">
          <div className="detectionHeader">
            <h2 className="detectionTitle">AI Detection Interface</h2>
            <p className="detectionSubtitle">
              Choose your input method and let our AI analyze the content
            </p>
          </div>

          {/* Input Type Tabs */}
          <div className="inputTabs">
            <button
              className={`inputTab ${
                activeTab === "text" ? "inputTabActive" : ""
              }`}
              onClick={() => handleTabChange("text")}
            >
              <div className="inputTabIcon">📝</div>
              <span className="inputTabLabel">Text</span>
            </button>
            <button
              className={`inputTab ${
                activeTab === "image" ? "inputTabActive" : ""
              }`}
              onClick={() => handleTabChange("image")}
            >
              <div className="inputTabIcon">🖼️</div>
              <span className="inputTabLabel">Image</span>
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

          {/* Input Area */}
          <div className="inputArea">
            {activeTab === "text" && (
              <div className="textInputContainer">
                <textarea
                  className="textInput"
                  placeholder="Enter the text you want to analyze for deepfake detection..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  rows={8}
                />
                <div className="textInputGlow"></div>
              </div>
            )}

            {(activeTab === "image" || activeTab === "video") && (
              <div className="fileInputContainer">
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
              </div>
            )}
          </div>

          {/* Analyze Button */}
          <div className="analyzeSection">
            <button
              className="analyzeButton"
              onClick={handleAnalyze}
              disabled={!inputValue && activeTab === "text"}
            >
              <span className="analyzeButtonText">Analyze Content</span>
              <div className="analyzeButtonGlow"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="featuresSection">
        <div className="featuresContainer">
          <h2 className="featuresTitle">Detection Capabilities</h2>
          <div className="featuresGrid">
            <div className="featureCard">
              <div className="featureIcon">🧠</div>
              <h3 className="featureTitle">AI-Powered Analysis</h3>
              <p className="featureDescription">
                Advanced neural networks trained on millions of samples to
                detect synthetic content
              </p>
              <div className="featureGlow"></div>
            </div>
            <div className="featureCard">
              <div className="featureIcon">⚡</div>
              <h3 className="featureTitle">Real-time Processing</h3>
              <p className="featureDescription">
                Lightning-fast analysis with results delivered in seconds, not
                minutes
              </p>
              <div className="featureGlow"></div>
            </div>
            <div className="featureCard">
              <div className="featureIcon">🔒</div>
              <h3 className="featureTitle">Secure & Private</h3>
              <p className="featureDescription">
                Your data is processed securely with end-to-end encryption and
                privacy protection
              </p>
              <div className="featureGlow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Effects */}
      <div className="backgroundEffects">
        <div className="backgroundGrid"></div>
        <div className="backgroundGradient"></div>
      </div>
    </div>
  );
}
