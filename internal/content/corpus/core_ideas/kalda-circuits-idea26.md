---
id: kalda-circuits-idea26
source: kalda
handout: circuits
section: "Circuits with resistors, batteries, ammeters and voltmeters"
kind: idea
meta_technique: [differential-element]
example_problems: [kalda-circuits-pr25]
status: stable
---

In the case of a small variation of the voltage $\tilde{V} \equiv V-V_{0}$ on a nonlinear element, and a small current variation $\tilde{I} \equiv I-I_{0}$ through it, one can linearize the $V-I$ curve as $\tilde{V}=R_{\mathrm{diff}} \tilde{I}$, where $R_{\mathrm{diff}}=\frac{\mathrm{d} V}{\mathrm{~d} I}$ is referred to as the differential resistance. Here, $V_{0}$ and $I_{0}$ are the unperturbed (equilibrium) values of the voltage and current. Then, the total voltage on the nonlinear element $V=V_{0}+R_{\mathrm{diff}} \tilde{I}$. Now, if we write down the Kirhoff's voltage law in terms of the current variation $\tilde{I}$, in addition to the "Ohm's law" for the voltage variation $R_{\text {diff }} \tilde{I}$, we have additional constant term $V_{0}$ which can be inerpreted as an effective electromotive force. On any linear resistor $R$, the voltage is also a sum of a constant term $I_{0} R$ and the variation term $R \tilde{I}$. All the unperturbed constant terms together must cancel out from the Kirchoff's voltage law because $V_{0}$ and $I_{0}$ were assumed to be valid solutions of the Kirchoff's laws. Indeed, if we put all the perturbations equal to zero then $\tilde{I}=0$ and $\tilde{V}=0$ should provide a solution to the Kirchoff's laws, hence all the constant must cancel out.
