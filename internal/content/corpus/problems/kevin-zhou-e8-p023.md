---
id: "kevin-zhou-e8-p023"
source: "kevin-zhou"
native_id: "KZ-E8-P023"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e8-p023"
topic: [electromagnetism, optics]
subtopic: [atomic-polarizability, dispersion, absorption, complex-permittivity]
math_tools: [complex-numbers, differential-equations]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E8.txt"
source_url: "sources/kevin_zhou/site/handouts/E8.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

In most common materials, µ ≈ µ0 while ϵ depends on frequency. We’ll investigate
    the origin of this frequency dependence below.
     (a) Model an electron in an atom as a mass m with charge q attached to a spring, with natural
         angular frequency ω0 and a damping force −mγv, in an electric field E0 e−iωt . Write down
         the equation of motion for the electron.

     (b) The atomic polarizability α is defined by p = αE. Show that

                                                        q 2 /m
                                              α=                   .
                                                   ω02 − ω 2 − iγω

    Now we restrict to a gas with small number density n, so that nα ≪ ϵ0 . For simplicity, you may
    also assume that the damping is weak, γ ≪ ω0 . Now, the Clausius–Mossotti formula reduces to

                                                ϵ = ϵ0 + nα

    and α is a complex number, so we learn that ϵ is also complex.

     (c) The wavevector and angular frequency are related by k 2 = µϵω 2 . Explain why the fact that ϵ
         is complex indicates that waves can be absorbed.

     (d) What value of ω maximizes the absorption rate of the electromagnetic waves? Roughly how
         many wavelengths does such a wave propagate before being mostly absorbed?

     (e) What value of ω maximizes the speed of the electromagnetic waves, and what is that speed?

     (f) Transparent objects such as glass can be modeled as having a very high resonant frequency,
         much higher than that of visible light. Does blue light or red light refract more when passing
         from air to glass?

                                                    16


    The intuitive reason that these electrons can affect the propagation speed of light is because they
    emit secondary electromagnetic waves that are out of phase with the original wave; this “pushes” the
    phase of the composite wave forward or backward, affecting the phase velocity. A nice explanation


                     01h
    of this can be found in chapter I.31 of the Feynman lectures.
