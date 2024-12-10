# Quantum Coin Flip Simulator

A visual demonstration of quantum computing principles through an interactive coin flip simulation.

## Overview

This project simulates a quantum coin flip using real quantum computing principles, making complex quantum concepts accessible through an interactive interface.

## How It Works

Unlike classical computing that uses deterministic binary states, quantum computing leverages quantum mechanical phenomena:

1. We start with a quantum bit (qubit) in state |0⟩
2. Using a Hadamard gate (H), we create a superposition where the coin exists in multiple realities simultaneously
3. The coin exists in both heads and tails states until measurement
4. Upon measurement, these parallel realities "collapse" into our single reality

## Quantum Gates Explained

Quantum gates are the building blocks of quantum circuits. Here are some key gates and their future applications:

### Hadamard (H) Gate
Creates superposition by putting a qubit in an equal mixture of 0 and 1 states.
- **Future Use**: Quantum Machine Learning could analyze all possible solutions simultaneously, potentially discovering new drug compounds millions of times faster.

### X Gate (NOT)
Flips a qubit from |0⟩ to |1⟩ or vice versa.
- **Future Use**: Quantum Error Correction in fault-tolerant quantum computers, essential for quantum internet infrastructure.

### Z Gate
Adds a phase difference between states.
- **Future Use**: Quantum Cryptography systems that could be completely unhackable.

### CNOT Gate
A two-qubit gate for controlled operations.
- **Future Use**: Quantum Simulation of complex molecular interactions could revolutionize materials science.

### Toffoli Gate
A three-qubit gate enabling reversible computing.
- **Future Use**: Climate modeling with unprecedented accuracy.

## Current Limitations

Current quantum computers face several challenges:
- Decoherence (quantum states breaking down)
- Require extreme conditions (near absolute zero temperatures)
- Limited practical applications
- 5-10 year estimated timeline for practical applications

## Technical Implementation

Built using HTML, CSS, and JavaScript, utilizing the [Quantum Circuit](https://www.npmjs.com/package/quantum-circuit) library for quantum computations.

## Installation

Simply open `index.html` in a modern web browser.

## Dependencies

- Quantum Circuit Library v0.9.226