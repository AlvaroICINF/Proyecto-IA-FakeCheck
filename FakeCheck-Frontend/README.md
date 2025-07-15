# DeepGuard - Detector de Deepfakes

DeepGuard es una aplicación web desarrollada con React y Vite que permite analizar texto, imágenes y videos para detectar posibles manipulaciones mediante inteligencia artificial. El sistema está enfocado en la facilidad de uso, la rapidez y la privacidad del usuario.

---

## Tabla de Contenidos

- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionamiento General](#funcionamiento-general)
- [Componentes Principales y Código Clave](#componentes-principales-y-código-clave)
- [Flujo de Análisis](#flujo-de-análisis)
- [Notas y Mejoras Futuras](#notas-y-mejoras-futuras)

---

## Instalación

1. Clona el repositorio y entra en la carpeta del frontend:
   ```bash
   git clone <url-del-repo>
   cd FakeCheck-Frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```

3. Ejecuta el entorno de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`.

---

## Estructura del Proyecto

```
src/
├── app/
│   ├── App.jsx         # Enrutador principal
│   ├── Layout.jsx      # Estructura base
│   └── main.jsx        # Punto de entrada
├── components/
│   └── navbar.jsx      # Barra de navegación
├── screens/
│   ├── home.jsx        # Pantalla de inicio
│   └── textBox.jsx     # Detector de deepfakes
├── constants/
│   └── root.css        # Variables globales de estilos
└── ...
```

---

## Funcionamiento General

La aplicación tiene dos rutas principales:

- `/` (**Home**): Presenta el objetivo y las características del sistema.
- `/fakeCheck` (**Detector**): Permite analizar texto, imágenes o videos.

La navegación se gestiona con React Router y la interfaz es responsiva, adaptándose a escritorio y móvil.

---

## Componentes Principales y Código Clave

### 1. **Enrutamiento y Layout**

El archivo `App.jsx` define las rutas y el layout general:

```jsx
// src/app/App.jsx
<Router>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/fakeCheck" element={<TextBox />} />
    </Route>
  </Routes>
</Router>
```

El layout incluye la barra de navegación y el contenido dinámico:

```jsx
// src/app/Layout.jsx
<>
  <Navbar />
  <main>
    <Outlet />
  </main>
</>
```

---

### 2. **Barra de Navegación**

El componente `navbar.jsx` ofrece navegación entre las páginas y es responsivo:

```jsx
// src/components/navbar.jsx
<Link to="/" className="navigationLink">Home</Link>
<Link to="/fakeCheck" className="navigationLink">Detector</Link>
```

---

### 3. **Pantalla de Inicio**

La pantalla principal (`home.jsx`) explica el propósito y las capacidades del sistema:

```jsx
// src/screens/home.jsx
<h1 className="heroTitle">
  <span className="heroTitleMain">DeepFake</span>
  <span className="heroTitleAccent">Detection</span>
</h1>
<p className="heroDescription">
  Advanced AI-powered detection for deepfake content...
</p>
```

---

### 4. **Detector de Deepfakes**

El componente clave es `textBox.jsx`, que permite analizar texto, imágenes o videos:

#### Selección de tipo de entrada:

```jsx
// src/screens/textBox.jsx
<div className="inputTabs">
  <button onClick={() => handleTabChange("text")}>Text</button>
  <button onClick={() => handleTabChange("image")}>Image</button>
  <button onClick={() => handleTabChange("video")}>Video</button>
</div>
```

#### Manejo de archivos y texto:

```jsx
// Para texto:
<textarea
  className="textInput"
  placeholder="Enter the text you want to analyze..."
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>

// Para imágenes/videos:
<input
  type="file"
  accept={activeTab === "image" ? "image/*" : "video/*"}
  onChange={handleFileSelect}
/>
```

#### Envío al backend de análisis:

```jsx
// src/screens/textBox.jsx
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
    formData.append("prompt", `Analyze this ${activeTab} for manipulation signs`);
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
  } finally {
    setIsLoading(false);
  }
};
```

#### Visualización del resultado:

```jsx
{analysisResult && (
  <div className="analysisResult">
    <h3>Resultado del análisis:</h3>
    <p>{analysisResult}</p>
  </div>
)}
```

---

## Flujo de Análisis

1. El usuario selecciona el tipo de contenido (texto, imagen, video).
2. Ingresa el texto o sube el archivo correspondiente.
3. Al hacer clic en "Analizar", el contenido se envía a un endpoint externo que realiza el análisis de deepfake.
4. El resultado se muestra en pantalla, indicando si el contenido es real o manipulado.

---

## Notas y Mejoras Futuras

- Actualmente, el análisis depende de un servicio externo. Se recomienda implementar un backend propio para mayor control y privacidad.
- El README original era el predeterminado de Vite; este archivo lo reemplaza y documenta el funcionamiento real del sistema.
- Se pueden agregar más validaciones y feedback visual para mejorar la experiencia de usuario.

---

## Créditos

Desarrollado con [React](https://react.dev/) y [Vite](https://vitejs.dev/).

---
