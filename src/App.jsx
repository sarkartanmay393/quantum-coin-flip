import "./App.css";
import QuantumCircuit from "quantum-circuit";
import QuantumReadings from './components/QuantumReadings';
import Outro from './components/Outro';
import { useRef } from "react";

function App() {
  const quantumStateDiv = useRef();
  const circuitDiagramDiv = useRef();
  const circuit = new QuantumCircuit();

  const flipCoin = async () => {
    // Disable button during flip
    const button = document.querySelector("button");
    button.disabled = true;

    // Clear and prepare quantum state display
    quantumStateDiv.current.innerHTML = `
        <div class="fade-in" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left;">
            <div id="initial-state">
                <div style="color: #00ffff; margin-bottom: 10px">Initial State:</div>
                <div style="font-family: monospace;">|ψ⟩ = |0⟩</div>
            </div>
            <div id="superposition-state" style="opacity: 0">
                <div style="color: #00ffff; margin-bottom: 10px">Superposition:</div>
                <div style="font-family: monospace;">H|0⟩ → |ψ⟩ = (|H⟩ + |T⟩)/√2</div>
                <div style="font-size: 0.8em; margin-top: 5px">Both heads and tails at once!</div>
            </div>
            <div id="final-state" style="opacity: 0">
                <div style="color: #00ffff; margin-bottom: 10px">Measurement:</div>
                <div id="measurement-result"></div>
            </div>
        </div>
    `;

    // Add circuit diagram
    circuitDiagramDiv.current.innerHTML = `
        <svg width="400" height="100" viewBox="0 0 400 100">
            <!-- Main quantum wire -->
            <line class="quantum-wire" x1="50" y1="50" x2="350" y2="50" />
            
            <!-- Initial state -->
            <text x="30" y="55" fill="white">|0⟩</text>
            
            <!-- H gate -->
            <rect class="gate" x="100" y="35" width="30" height="30" />
            <text x="108" y="55" fill="white">H</text>
            
            <!-- Parallel universe representation -->
            <g class="parallel-universe">
                <line class="parallel-lines" x1="150" y1="30" x2="250" y2="30" />
                <line class="parallel-lines" x1="150" y1="70" x2="250" y2="70" />
                <text x="180" y="25" fill="#00ffff" font-size="12">|H⟩</text>
                <text x="180" y="90" fill="#00ffff" font-size="12">|T⟩</text>
            </g>
            
            <!-- Measurement symbol -->
            <path class="measurement" d="M270,35 L290,35 L290,65 L270,65 Z" />
            <text x="320" y="55" fill="white" id="measurementText">?</text>
        </svg>
    `;
    circuitDiagramDiv.current.style.opacity = "1";

    // Show superposition after initial delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    document.getElementById("superposition-state").style.opacity = "1";

    // Add flipping animation with quantum "glitch" effect
    const coin = document.querySelector(".coin");
    coin.classList.add("flipping");
    coin.style.animation =
      "flip 1.5s ease-in-out, quantum-glitch 0.2s infinite";

    try {
      // Create quantum circuit with 1 qubit
      circuit.addGate("h", 0, [0]);
      circuit.run();
      const measurement = circuit.measure(0);

      // Wait for animation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update measurement result without additional delay
      const finalState = document.getElementById("final-state");
      const measurementResult = document.getElementById("measurement-result");
      finalState.style.opacity = "1";

      if (measurement === 0) {
        measurementResult.innerHTML = `
                <div style="color: #00ff00">Heads!</div>
                <div style="font-size: 0.8em">State: |H⟩</div>
            `;
        coin.style.transform = "rotateY(0deg)";
        document.getElementById("measurementText").textContent = "H";
      } else {
        measurementResult.innerHTML = `
                <div style="color: #00ff00">Tails!</div>
                <div style="font-size: 0.8em">State: |T⟩</div>
            `;
        coin.style.transform = "rotateY(180deg)";
        document.getElementById("measurementText").textContent = "T";
      }
    } catch (error) {
      quantumStateDiv.current.textContent = "Error: " + error.message;
    }

    // Remove animations and enable button
    coin.style.animation = "";
    coin.classList.remove("flipping");
    button.disabled = false;
  };

  return (
    <div
      className="App"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Quantum Coin Flip</h1>
      <p style={{ marginTop: "-24px", fontFamily: 'monospace' }}>Truely random coin flip experiment</p>
      <div className="coin">
        <div className="coin-face heads">H</div>
        <div className="coin-face tails">T</div>
      </div>
      <button onClick={flipCoin} style={{ fontWeight: 600 }}>
        Flip Quantum Coin
      </button>
      <div className="quantum-state" ref={quantumStateDiv}>
        Click to flip the quantum coin!
      </div>
      <div className="quantum-circuit" ref={circuitDiagramDiv}></div>
      <QuantumReadings />
      <Outro />
    </div>
  );
}
export default App;
