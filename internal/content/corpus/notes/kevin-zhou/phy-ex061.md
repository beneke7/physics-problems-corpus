---
id: kevin-zhou-notes-phy-ex061
source: kevin-zhou-notes
native_id: "phy Example 061"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex061
topic: [quantum-physics]
subtopic: [wave-mechanics, Fourier transform]
math_tools: [fourier-ideas, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6859-7000"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The momentum-space wavefunction ϕ(p) = ⟨p|ψ⟩ is related to ψ(x) by Fourier transform,
           Z                      Z                                   Z
                              1         −ipx/ℏ                    1
     ϕ(p) = dx ⟨p|x⟩⟨x|ψ⟩ = √       dx e       ψ(x), ψ(x) = √            dp eipx/ℏ ϕ(p).
                              2πℏ                                 2πℏ
This is the main place where conventions may differ. The original factor of 2π comes from the
representation of the delta function
                                           Z
                                     δ(x) = dξ e2πixξ .

When defining the momentum eigenstates, we have freedom in choosing the scale of p, which can
change the ⟨x′ |p′ ⟩ expression above. This allows us to move the 2π factor around. In field theory
texts, we prefer to define momentum integrals to have a differential of the form dk p/(2π)k .

Note. In general, there is no recipe that determines quantum theories from classical ones, and we
shouldn’t expect any such recipe to exist, because quantum mechanics contains more information
than classical mechanics. Physically distinct quantum systems can have exactly the same classical
limit. For example, consider applying canonical quantization to a Hamiltonian containing q 2 p2 .
Classically, q 2 p2 and p2 q 2 are the same phase space function, but their quantum analogues differ,

                                q̂ 2 p̂2 − p̂2 q̂ 2 = q̂[q̂, p̂2 ] + [q̂, p̂2 ]q̂ = 2iℏ(q̂ p̂ + p̂q̂)

where we’ve used the commutator identity [A, BC] = B[A, C] + [A, B]C. There are many distinct
“ordering prescriptions”. One particularly nice one is Weyl ordering, discussed further in the notes
 on Optics, which essentially symmetrizes the ordering of q and p.


   But even if you fix an ordering prescription, it’s still impossible to canonically quantize all
Hamiltonians in a “nice” way. Specifically, we want to have a linear quantization map Q from phase
space functions f to self-adjoint operators, so that Poisson brackets map to commutators,
                                                          1
                                       Q({f, g}) =          [Q(f ), Q(g)],
                                                         iℏ
the constant function maps to the identity, Q(1) = I, and powers map to powers, Q(f n ) = Q(f )n .
The Groenewold–van Hove theorem shows this is impossible, through a concrete counterexample
for a particle in one dimension. Classically, the Poisson bracket expression
                                                     1
                                    {q 3 , p3 } +      {{p2 , q 3 }, {q 2 , p3 }}
                                                    12
vanishes, as can easily be shown starting from the identity {q n , pm } = nmq n−1 pm−1 . However, the
canonically quantized analogue of this quantity does not vanish,
                              1 3 3             1
                                [q̂ , p̂ ] +         [[p̂2 , q̂ 3 ], [q̂ 2 , p̂3 ]] = −3ℏ2
                             iℏ              12(iℏ)2
as can be shown through an exhausting brute force calculation.
    Therefore, we can only quantize all Hamiltonians if we’re willing to drop some of the conditions
above. One method is deformation quantization, where we replace the product of phase space
functions with a noncommutative “star product”, replicating the noncommutativity of quantum
operators. We can then define an analogue of the Poisson bracket, called the Moyal bracket,
and apply canonical quantization to Moyal brackets instead. Geometric quantization is a more
mathematically complex method which first produces a “prequantization” on a Hilbert space which
is much larger than desired, then reduces to the desired Hilbert space by choosing a “polarization”.
    In practice, this is irrelevant to physics. Quantization problems like those above only show up at
cubic order in p and q, but terms like p3 q 3 are quite rare and unnatural in Hamiltonian mechanics;
in these notes we won’t run into them. However, as we’ve seen above, operator ordering ambiguities
can make a difference, and they do in practical physical situations. Such ambiguities are usually
handled by taking a limit of a more general theory, where they don’t appear. For example, the
fine structure corrections for the hydrogen atom contain a “Darwin term” proportional to ∇2 V (r),
corresponding to a somewhat complicated ordering of p and r. That would be a problem if the
Darwin term was motivated by classical arguments, but it’s not: instead, it arises from taking the
nonrelativistic limit of the Dirac equation. The operator ordering in the Dirac equation is simple
and known, and it tells us the physically correct ordering for the Darwin term.
    In turn, the Dirac equation can be derived by taking a limit of a relativistic quantum field theory,
where the above puzzles play little role, because the canonical momenta of the fields are never used.
But a distinct problem appears: some operators have to be “normal ordered” to avoid ultraviolet
divergences. This leads to renormalization, as discussed in the notes on Quantum Field Theory.
We now cover some facts about one-dimensional wave mechanics.

  • The time-independent Schrodinger equation is
                                         ℏ2 ′′
                                               −
                                            ψ + V ψ = Eψ.
                                         2m
    Consider two degenerate solutions ψ and ϕ. Then combining the equations gives
                                                                        dW
                                              ϕψ ′′ − ψϕ′′ = 0 =
                                                                        dx


   where W is the Wronskian of the solutions,

                                                              ϕ ψ
                                   W = ϕψ ′ − ψϕ′ = det                .
                                                              ϕ′ ψ ′

   In general, the Wronskian determines the independence of a set of solutions of a differential
   equation; if it is zero the solutions are linearly dependent.

 • In this case, if both ψ and ϕ vanish at some point, then W = 0 so the solutions are simply
   multiples of each other. In particular, bound state wavefunctions vanish at infinity, so bound
   states are not degenerate. Unbound states can be two-fold degenerate, such as e±ikx for the
   free particle.

 • Since the Schrodinger equation is real, if ψ is a solution with energy E, then ψ ∗ is a solution
   with energy E. If the solution ψ is not degenerate, then we must have ψ = cψ ∗ , which means
   ψ is real up to a constant phase. Hence bound state wavefunctions can be chosen real. It turns
   out nonbound state wavefunctions can also be chosen real. (This argument is really just using
   time reversal symmetry in disguise, since we are conjugating the wavefunction.)

 • For bound states, the bound state with the nth lowest energy has n − 1 nodes. To justify this,
   suppose that one was trying to numerically find a bound state wavefunction of energy E. Then
   we could use the following “shooting” algorithm.

     1. Pick an energy E and start at some point x− far to the left.
     2. Set ψ(x− ) to an arbitrary real value, and fix ψ ′ (x− ) so that the wavefunction doesn’t blow
        up when we integrate to x → −∞.
     3. Integrate the Schrodinger equation through the potential, all the way to x → ∞.

   For a general value of E, this will give a wavefunction that blows up, to positive or negative
   infinity, at x → ∞. As E is increased, the blowup alternates between going to positive or
   negative infinity. Every time this happens, we find a bound state, and simultaneously the
   number of nodes goes up by one.

 • The hole in the above argument is that, as the energy is adjusted, nodes could also appear in
   pairs at intermediate x. For example, why can’t ψ(x) locally look like x2 − a, thus producing
   two nodes at once when a passes zero? The reason this can’t happen is that when a = 0, we
   have a solution that locally has ψ ′′ ̸= 0 at a point where ψ = 0. This is possible for a general
   differential equation, but not for the Schrodinger equation.

 • We can also use the Wronskian to show that the number of nodes increases with energy. Let
   ψn and ψm be two real, normalized bound state wavefunctions, with energies En > Em . Their
   Wronskian W = ψm  ′ ψ − ψ ψ ′ satisfies
                        n   m n

                                     dW  2m
                                        = 2 (En − Em )ψm ψn .
                                     dx   ℏ
   Let ψm have adjacent nodes at x1 and x2 . Integrating from x1 to x2 gives
                                                                     Z x2
                   ′                  ′                2m
                 ψm  (x2 )ψn (x2 ) − ψm (x1 )ψn (x1 ) = 2 (En − Em )      ψm ψn dx.
                                                        ℏ             x1


    If ψn (x) had no nodes between x1 and x2 , then the two sides would have to have opposite
    signs. Thus, ψn (x) has a node between every pair of adjacent nodes of ψm (x). Since we can
    also set x1 = −∞ or x2 = ∞, this shows that ψn (x) has at least one more node than ψm (x),
    and furthermore that they interleave.

