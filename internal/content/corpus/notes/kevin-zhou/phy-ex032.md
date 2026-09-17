---
id: kevin-zhou-notes-phy-ex032
source: kevin-zhou-notes
native_id: "phy Example 032"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex032
topic: [statistical-mechanics]
subtopic: [entropy, canonical-ensemble]
math_tools: [gibbs-entropy, combinatorics]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3154-3236"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. We now compute the entropy of the canonical ensemble. Suppose we had W copies
of the canonical ensemble; then there will be pn W systems in state |n⟩. Since W is large, we can
consider all the copies to lie in the microcanonical ensemble, for which the entropy is
                                                 W!               X
                     S = kB log Ω = kB log Q              = −kB W   pn log pn .
                                               n (pn W )!         n

Since entropy is extensive, the entropy of one copy is
                                                 X
                                       S = −kB      pn log pn
                                                     n

and this expression is called the Gibbs entropy. It is proportional to the Shannon entropy of
information theory; it is the amount of information we gain if we learn what the microstate is, given
knowledge of the macrostate.
Next, we define the free energy and other potentials.

 • We define the free energy in the canonical ensemble as

                                              F = E − T S.

    We have tacitly taken the thermodynamic limit, defining E as ⟨E⟩.

 • The differential of F can be written in terms of dT and dV as
                                                           ∂F                ∂F
                          dF = −S dT − p dV,         S=−        ,     p=−         .
                                                           ∂T V              ∂V T
    Sometimes, one hears statements like “F is a natural function of T and V , while E is a natural
    function of S and V ”. Of course, either of these quantities can be written as functions of any
    two of (P, V, T, S), by using the expression for entropy and the equation of state. The language
    just means that when F is regarded as a function of T and V , its differential is very simple.
61 3. Statistical Mechanics


 • To relate F to Z, use our expression for the Gibbs entropy for
                                        X e−βEn                e−βEn
                            S/kB = −                     log         = log Z + ⟨βE⟩.
                                         n
                                                Z                Z

    Rearranging, we find that
                                               F = −kB T log Z.

 • Next, we can allow the particle number N to vary, and define the chemical potential
                                                           ∂S
                                               µ = −T             .
                                                           ∂N E,V

    The total differential of energy becomes
                                                                            ∂E
                                 dE = T dS − p dV + µ dN,             µ=
                                                                            ∂N S,V

    where we used the triple product rule.

 • Note that the chemical potential for an classical gas is negative, because it is the energy cost
   of a particle at fixed S. To keep the entropy the same, we typically have to remove more
   energy than the particle’s presence added. By contrast, for the Fermi gas at zero temperature,
   µ = EF > 0 because the entropy is exactly zero.

 • We may similarly define the grand canonical ensemble by allowing N to vary. Then

                                 e−β(En −µNn )                        X
                          pn =                 ,    Z(T, µ, V ) =           e−β(En −µNn )
                                      Z                                 n

    where Z is the grand canonical partition function.

 • We can extract information about the distribution of N by differentiating Z. The cumulant
   generating function argument goes through as before, giving

                                             ∂ log Z                  ∂ 2 log Z
                                    ⟨N ⟩ =           ,     var N =              .
                                             ∂(βµ)                    ∂(βµ)2
    In particular, as with energy, we see that variance is extensive, so fluctuations disappear in the
    thermodynamic limit.

 • Similarly, we define the grand canonical potential Φ = F − µN , so that

                            dΦ = −S dT − p dV − N dµ,               Φ = −kB T log Z

    by analogous arguments to before. In other words, (E, Z, F ) is analogous to (F, Z, Φ).

