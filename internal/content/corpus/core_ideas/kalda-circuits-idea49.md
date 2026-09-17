---
id: kalda-circuits-idea49
source: kalda
handout: circuits
section: "Alternating current"
kind: idea
meta_technique: [exploit-symmetry, extremization]
example_problems: [kalda-circuits-pr89]
status: stable
---

When finding the natural frequencies of a circuit obeying certain symmetries while using the idea 48, it is useful to exploit the symmetry: select symmetric positions for the fictitious terminals (for which $Z=\infty$ ), or select symmetric point for "cutting" ( $Z=0$ ). This will lead to the loss of one or more solutions which can be found as the natural frequencies of a simplified circuit - we either short-circuit the fictitious terminals (if $Z=\infty$ was used), or we leave the "cut" wire broken (if $Z=0$ was used). NB! count carefully the number of solutions ${ }^{36}$ : if the number of degrees of freedom of the simplified circuit exceeds the number of "lost" solutions then some of the natural frequencies of the simplified circuit may differ from the frequencies of the original circuit.
