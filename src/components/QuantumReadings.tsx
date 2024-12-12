import React from "react";

const QuantumReadings = () => {
  return (
    <div
      className="info-box"
      style={{
        marginTop: "30px",
        maxWidth: "600px",
        padding: "20px",
        background: "rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        marginInline: '8px'
      }}
    >
      <h3 style={{ color: "#00ffff" }}>
        How is this different from regular computing?
      </h3>
      <p>
        In classical computing (like your phone or laptop), a coin flip would
        use Math.random() - basically picking either 0 or 1. The coin is always
        in one definite state.
      </p>
      <p>
        But in quantum computing:
        <ul>
          <li>We start with a quantum bit (qubit) in state |0⟩</li>
          <li>
            Using a Hadamard gate (H), we create a superposition where the coin
            exists in multiple realities simultaneously!
          </li>
          <li>
            In one &quot;universe&quot; it&apos;s heads, in another it&apos;s
            tails - and these universes coexist until we measure
          </li>
          <li>
            When we measure it, these parallel realities &quot;collapse&quot;
            into our single reality
          </li>
        </ul>
      </p>
      <p style={{ fontStyle: "italic", color: "#00ffff" }}>
        This isn&apos;t just sci-fi - it&apos;s real quantum mechanics! This
        ability to process multiple possibilities simultaneously is what makes
        quantum computers potentially much more powerful than classical
        computers.
      </p>
      <p
        style={{
          background: "rgba(0, 255, 255, 0.1)",
          padding: "10px",
          border: "1px solid rgba(0, 255, 255, 0.1)",
          borderRadius: "5px",
        }}
      >
        <strong>Mind-bending fact:</strong> Until we measure it, our quantum
        coin exists in a superposition of all possible states - it&apos;s both
        heads AND tails at the same time, in parallel universes that temporarily
        coexist!
      </p>

      <h3 style={{ color: "#00ffff", marginTop: "20px" }}>
        What are Quantum Gates?
      </h3>
      <p>
        Quantum gates are like the basic building blocks of quantum circuits -
        similar to how classical computers use AND, OR, and NOT gates. They
        manipulate qubits to perform quantum operations.
      </p>
      <p>
        Common quantum gates and their future applications:
        <ul>
          <li>
            <strong>Hadamard (H) Gate:</strong> Creates superposition by putting
            a qubit in an equal mixture of 0 and 1 states.
            <ul>
              <li>
                Future Use: Quantum Machine Learning could use superposition to
                analyze all possible solutions simultaneously, potentially
                discovering new drug compounds millions of times faster than
                current methods.
              </li>
            </ul>
          </li>
          <li>
            <strong>X Gate (NOT):</strong> Flips a qubit from |0⟩ to |1⟩ or vice
            versa
            <ul>
              <li>
                Future Use: Quantum Error Correction in fault-tolerant quantum
                computers, essential for maintaining quantum states in future
                quantum internet infrastructure.
              </li>
            </ul>
          </li>
          <li>
            <strong>Z Gate:</strong> Adds a phase difference between states
            <ul>
              <li>
                Future Use: Quantum Cryptography systems that could be
                completely unhackable, as any attempt to intercept the message
                would collapse the quantum state.
              </li>
            </ul>
          </li>
          <li>
            <strong>CNOT Gate:</strong> A two-qubit gate for controlled
            operations
            <ul>
              <li>
                Future Use: Quantum Simulation of complex molecular interactions
                could revolutionize materials science, leading to perfect solar
                panels or room-temperature superconductors.
              </li>
            </ul>
          </li>
          <li>
            <strong>Toffoli Gate:</strong> A three-qubit gate that enables
            reversible computing
            <ul>
              <li>
                Future Use: Climate modeling that could process vast amounts of
                data to predict weather patterns and climate change with
                unprecedented accuracy.
              </li>
            </ul>
          </li>
        </ul>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/short-note.jpg"
            width={320}
            height={180}
            alt="short-note-of-quantum-mechanics"
          />
        </div>
      </p>
      <p
        style={{
          background: "rgba(0, 255, 255, 0.1)",
          padding: "10px",
          border: "1px solid rgba(0, 255, 255, 0.1)",
          borderRadius: "5px",
        }}
      >
        <strong>Why aren&apos;t we using these now?</strong> Current quantum
        computers are still in their infancy. They suffer from "decoherence"
        (quantum states breaking down) and require extreme conditions (near
        absolute zero temperatures). Scientists are working to overcome these
        challenges, but it might take 5-10 years before we see practical
        applications.
      </p>
      <p
        style={{
          background: "rgba(0, 255, 255, 0.1)",
          padding: "10px",
          border: "1px solid rgba(0, 255, 255, 0.1)",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <strong>Cool fact:</strong> The Hadamard gate we use puts our qubit in a
        perfect 50-50 superposition, making our quantum coin flip truly random,
        unlike classical random number generators!
      </p>
    </div>
  );
};

export default QuantumReadings;
