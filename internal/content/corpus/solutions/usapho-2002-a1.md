---
id: usapho-2002-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2002-a1
solution_type: official
source_document: solution-document-usapho-2002-s
source_pdf: cache/phoxiv/usapho/2002_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2002_S.pdf."
---

A1. a. The magnitude of the magnetic field inside an ideal solenoid is $\quad B=\mu_{0} n I$ where the number of turns per unit length $n$ is the inverse of the length per turn - the diameter $d$ of the wire.

$$
n=\frac{1}{d}=\frac{1}{2 r_{1}}
$$

The total resistance of the wire used to construct the solenoid is

The current

$$
R=\rho \frac{l}{A_{1}}=\rho \frac{l}{\pi r_{1}^{2}} .
$$

Combining to find

$$
B=\mu_{o}\left(\frac{1}{2 r_{1}}\right)\left(\frac{V \pi r_{1}^{2}}{\rho l}\right)=\frac{\mu_{o} \pi V r_{1}}{2 \rho l}
$$

b. The self inductance $L$ can be found from

$$
L l=N \Phi
$$

where $N$ is the total number of turns - the length of the wire divided by the circumference of one turn

$$
N=\frac{l}{2 \pi r_{2}}
$$

and $\Phi$ is the flux through one turn

$$
\Phi=B \pi r_{2}^{2}=\mu_{0} n I \pi r_{2}^{2}=\frac{\mu_{0} \pi r_{2}^{2}}{2 r_{1}} I
$$

combining with (A1-1)

$$
L=\frac{N \Phi}{I}=\left(\frac{l}{2 \pi r_{2}}\right)\left(\frac{\mu_{0} \pi r_{2}^{2}}{2 r_{1}}\right)=\frac{\mu_{0} r_{2} l}{4 r_{1}}
$$

c. The inductive impedance is $Z_{L}=\omega L$. The total impedance of the circuit is $Z=\sqrt{R^{2}+(\omega L)^{2}}$

$$
I_{r m s}=\frac{V_{r m s}}{\sqrt{R^{2}+(\omega L)^{2}}}=\frac{V_{r m s}}{\sqrt{\left(\frac{\rho l}{\pi r_{1}^{2}}\right)^{2}+\left(\frac{2 \pi f \mu_{o} r_{2} l}{4 r_{1}}\right)^{2}}}=\frac{2 r_{1} V_{r m s}}{l \sqrt{\left(\frac{2 \rho}{\pi r_{1}}\right)^{2}+\left(\pi f \mu_{o} r_{2}\right)^{2}}}
$$
