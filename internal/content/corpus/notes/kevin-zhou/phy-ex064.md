---
id: kevin-zhou-notes-phy-ex064
source: kevin-zhou-notes
native_id: "phy Example 064"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex064
topic: [quantum-physics]
subtopic: [wave-mechanics, wave-packets]
math_tools: [differential-equations, calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7173-7214"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. An example of a Gaussian wavepacket is
                                     1/4 −ax2 /(1+2iℏat/m)
                                     2a     e
                          ψ(x, t) =           p
                                      π         1 + 2iℏat/m
which obeys the Schrodinger equation for a free particle. As expected by Ehrenfest’s relations,
⟨x⟩ is constant. Since there is no potential, we can think of this wavepacket as a superposition of
momentum states propagating completely independently. The momentum uncertainty is constant,
but the position uncertainty reaches a minimum at t = 0 as the plane wave components line up, and
the wavepacket then spreads out in both the future and the past. The spread is alarmingly fast: for
                                     √
large t we have spread ∆x ∼ (ℏt/m) a, which means that for an electron with a = (1 nm)−2 after
one second, ∆x ∼ 100 km! The reason we don’t see such macroscopic superpositions is because they
are unstable to decoherence, as covered in the notes on Optics.
   As an followup question, one can ask how the variance of a wavepacket with Gaussian position
distribution can evolve over time. The variance above grows for t > 0, but one can also easily
construct a wavepacket whose variance begins to shrink; on the other hand, there is a limit to how
far it can shrink because of the uncertainty principle. The easiest way to address this question in
general is in Heisenberg picture, where the operators evolve simply as
                                                          pt
                                   p(t) = p0 ,   x(t) =      + x0 .
                                                          m
Therefore, the variance V = ⟨x2 ⟩ − ⟨x⟩2 evolves as
                     dV  1              2         1
                        = ⟨[x2 , p2 ]⟩ − ⟨x⟩⟨p⟩ =   (⟨xp + px⟩ − 2⟨x⟩⟨p⟩) .
                     dt  m              m         m
Taking a second derivative,
                                      d2 V     2⟨p2 ⟩ 2⟨p⟩2
                                            =        −
                                       dt2      m2      m2
which is constant, because the momentum distribution is constant. Therefore, in general V (t) is a
quadratic in time, and furthermore V ′′ (t) > 0, so that all wavepackets eventually spread. There
are a few ways out of this: coherent states don’t spread because they experience an appropriate
potential, and nonspreading wavepackets evade the above argument by having infinite variance.
135 5. Fundamentals of Quantum Mechanics


   This argument also shows a strength of Heisenberg picture: it is ideal if you are mostly interested
in the expectation values of simple operators. On the other hand, if you’re interested in the full
wavefunction, the equivalent information is encoded in the evolution of infinitely many operators.
These are clunky to work with, even for a setup as simple as the free particle.

