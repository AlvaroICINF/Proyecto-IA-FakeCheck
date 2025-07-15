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
              <span className="heroTitleAccent">Detección</span>
            </h1>
            <p className="heroDescription">
              Detección avanzada de deepfakes impulsada por IA. Analiza texto, imágenes y videos con algoritmos de aprendizaje automático de última generación para identificar contenido sintético.
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
          <h2 className="featuresTitle">Capacidades de Detección</h2>
          <div className="featuresGrid">
            <div className="featureCard">
              <div className="featureIcon">🧠</div>
              <h3 className="featureTitle">Análisis impulsado por IA</h3>
              <p className="featureDescription">
                Redes neuronales avanzadas entrenadas con millones de muestras para detectar contenido sintético
              </p>
              <div className="featureGlow"></div>
            </div>
            <div className="featureCard">
              <div className="featureIcon">⚡</div>
              <h3 className="featureTitle">Procesamiento en tiempo real</h3>
              <p className="featureDescription">
                Análisis ultrarrápido con resultados entregados en segundos, no minutos
              </p>
              <div className="featureGlow"></div>
            </div>
            <div className="featureCard">
              <div className="featureIcon">🔒</div>
              <h3 className="featureTitle">Seguro y Privado</h3>
              <p className="featureDescription">
                Tus datos se procesan de forma segura con cifrado de extremo a extremo y protección de la privacidad
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
