import React from "react";
import "./home.css";

export default function Home() {
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
