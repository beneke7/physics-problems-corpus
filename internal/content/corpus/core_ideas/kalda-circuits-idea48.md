---
id: kalda-circuits-idea48
source: kalda
handout: circuits
section: "Alternating current"
kind: idea
meta_technique: [extremization]
example_problems: [kalda-circuits-pr89]
status: stable
---

The natural frequencies can be found as the resonance frequencies; there are two options. First, you can select two points $A$ and $B$ at the circuit, henceforth referred to as the fictitious terminals, and equate the impedance of the circuit between $A$ and $B$ to infinity and solve the equation with respect to the frequency: although there is no input current, there can be voltage oscillations at a resonant frequency, because with $V=I Z, I=0$, and $Z=\infty, V$ can take any value. Second option: select a point $A$ the circuit and cut the circuit fictitiously at that point. Thus, one "half" of the point $A$ becomes the first terminal $A_{1}$ of the new circuit, and another "half" becomes the second terminal $A_{2}$. Since in the original circuit, $A_{1}$ and $A_{2}$ coincide, they must have the same voltage: voltage between $A_{1}$ and $A_{2}$ is zero. Finally, equate the impedance between $A_{1}$ and $A_{2}$ to zero and solve it: although the voltage is zero, there can be a non-zero current $I=U / R$.
