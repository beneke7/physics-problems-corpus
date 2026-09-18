---
id: kevin-zhou-notes-phy-ex095
source: kevin-zhou-notes
native_id: "phy Example 095"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex095
topic: [quantum-mechanics]
subtopic: [time-dependent-perturbation-theory]
math_tools: [linear-algebra, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13883-13936"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Consider a three-state system where the second state is a “potential barrier”,
                                                 
                                          0 ϵ 0
                                    H =  ϵ 1 ϵ  ℏω0
                                          0 ϵ 0

and we treat the ϵ terms as a perturbation. If the system is prepared in state |0⟩, then at first order
in perturbation theory, nothing interesting happens: the coefficient of |2⟩ is zero at this order, while
the coefficient of |1⟩ rapidly oscillates, with amplitude ϵ. But at second order, the state can “tunnel”
through |1⟩ to reach |2⟩,
                                                   Z ′
                                      (ϵℏω0 )2 t ′ t ′′ −iω0 t′ iω0 t′′
                                              Z
                              (2)
                             c2 (t) =           dt     dt e    e        .
                                       (iℏ)2 0      0

The integral has one dimension along which it doesn’t oscillate, which means it scales as t/ω0 .
                                  (2)
The coefficient thus grows as c2 (t) ∼ ϵ2 ω0 t, which can become substantial. Summing the full
perturbation series shows that the state flips between |0⟩ and |2⟩ on timescale 1/ϵ2 ω0 , while the
coefficient of |1⟩ always stays small.
    In atomic physics, this kind of setup is unfortunately commonly described by saying something
like: “the system goes to state |2⟩ through a virtual transition, where it climbs up to the virtual state
|1⟩ by violating energy conservation”. Of course, energy is always exactly conserved in quantum
mechanics. The expectation value of the unperturbed Hamiltonian H0 isn’t, but there’s no reason
to expect it to be. Another bad feature of this language is that it suggests that the system’s state
suddenly jumps at some random time, while in reality the coefficient of |2⟩ smoothly goes up. That
language is used because the perturbation series integrals involve H1 evaluated at particular times –
but we smoothly integrate over all those possible times.


Note. Parametric driving is more subtle than ordinary driving, because it is also resonant when
ωd = nω0 , but such an effect seems to be invisible in the above HT , which is very similar to that of
ordinary driving. What’s going on? The problem is that the rotating wave approximation is not
suitable. Taking n = 2 for concreteness and restoring the dropped terms gives
                                       ϵ0                          2
                   H = ℏω0 a† a + ℏω0 (e4iω0 t + e−4iω0 t )(a2 + a† + a† a + aa† ).
                                       8
                                                                              (1)
At first order in perturbation theory, there is no resonance effect; all the ci just oscillate rapidly
with small amplitudes. At second order, there are a few contributions, such as the one from
                            2
(e4iω0 t a2 ) × (e−4iω0 t a† ), but these don’t change the excitation number. The parametric resonance
                                                            2
shows up at third order, through terms like (e−4iω0 t a† )2 × (e4iω0 t aa† ).
    This exhausting analysis illustrates why these kinds of things are usually treated with operators
instead of states. As we saw earlier, driving can be treated exactly fairly easily, because there are
only two operators at play (x and p, or equivalently a and a† ), rather than an infinite number of
state coefficients. Indeed, when you go to quantum field theory, Heisenberg picture is used almost
exclusively. One can even argue that this is the right choice philosophically, because operators
directly represent observable quantities, which physics is all about. But states aren’t useless; for
instance, it would be very hard to understand a quantum computer without invoking states.
