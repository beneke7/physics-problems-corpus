---
id: kevin-zhou-notes-phy-ex096
source: kevin-zhou-notes
native_id: "phy Example 096"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex096
topic: [quantum-mechanics]
subtopic: [atom-light-interaction]
math_tools: [perturbation-theory, differential-equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13937-14022"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The AC Stark shift. Consider a two-state atom driven off resonance,

                                 0       Ω cos(ωd t)
                    H=ℏ                               , ω1 − ωd = ∆.
                             Ω cos(ωd t)     ω1
If ∆ ≪ ω1 , then the atom is near resonance, but as long as Ω ≪ ∆, the perturbation cannot cause
substantial transitions from |0⟩ to |1⟩. The amplitude to end up in |1⟩ is at most Ω/∆, corresponding
to a probability of (Ω/∆)2 . In experiments, we typically don’t care about this; what is much more
interesting is that at second order, the perturbation shifts the oscillation frequencies of the two
states by an amount of order Ω2 /∆. This is a tiny amount, but can be significant because in practice
we have very good frequency precision.
   To analyze this system we go into a frame “rotating with the drive”,

                                        −iωd t|1⟩⟨1|            0   Ω/2
                             UT (t) = e              , HT = ℏ
                                                               Ω/2 ∆
where we also applied the rotating wave approximation. At this point it would be trivial to
diagonalize the matrix, but we do something different to illustrate a technique. For a constant
perturbation, we found that the result of time-dependent perturbation theory up to second order
only depended on the combination
                                            X ⟨n|H1 |k⟩⟨k|H1 |i⟩
                                ⟨n|H1 |i⟩ +                      .
                                                   Ei − Ek
                                              k
Therefore, if we could construct an effective perturbation H1,eff such that
                                                X ⟨n|H1 |k⟩⟨k|H1 |i⟩
                                ⟨n|H1,eff |i⟩ =
                                                      Ei − Ek
                                                  k
then its first-order results would match the second-order results we’re looking for here. We have
                                               −Ω2 /4∆

                                                            0
                                   H1,eff = ℏ
                                                  0     Ω2 /4∆
so the splitting is ℏΩ2 /2∆. Of course, this agrees with the exact result to O(Ω2 ).


Next, we discuss a powerful general method to construct effective Hamiltonians.

 • In many situations, the dynamics have a rapidly oscillating component we don’t care about,
   and a slower component that we want to isolate. That is, we care about the time average ⟨ψ(t)⟩
   of the state over some suitable timescale τ , which is longer than the fast dynamics and shorter
   than the slow dynamics.

 • We work in interaction picture, where the evolution operator obeys

                          iℏ ∂t U (t, t0 ) = HI (t)U (t, t0 ),   |ψI (t)⟩ = U (t, t0 )|ψI (t0 )⟩

    and we suppose that HI is small. We would like to construct an effective Hamiltonian that
    describes the evolution of ⟨ψI (t)⟩. Naively, we could do this by simply averaging HI (t), but
    this is too crude of an approximation; for instance, doing that in the previous example would
    have just thrown out the AC Stark shift altogether.

 • Instead, we note that

                             iℏ ∂t ⟨|ψI (t)⟩⟩ = iℏ ∂t ⟨U (t, t0 )⟩|ψI (t0 )⟩
                                              = ⟨HI (t)U (t, t0 )⟩|ψI (t0 )⟩
                                              = ⟨HI (t)U (t, t0 )⟩⟨U (t, t0 )⟩−1 ⟨|ψI (t)⟩⟩

    where we used the time-averaged versions of the above two equations. Therefore,

                iℏ ∂t ⟨|ψI (t)⟩⟩ = Heff (t)⟨|ψI (t)⟩⟩,      Heff (t) = ⟨HI (t)U (t, t0 )⟩⟨U (t, t0 )⟩−1 .

 • We can now expand U (t, t0 ) with the Dyson series, giving a perturbative expansion for Heff . For
   our purposes, we only care about going to second order in HI , and since Heff already contains
   a factor of HI , this means we can expand the U (t, t0 ) to first order,

                                                                  1 t ′
                                                                   Z
                          U (t, t0 ) = 1 + U1 (t), U1 (t, t0 ) =       dt HI (t′ ).
                                                                 iℏ t0
    Performing this expansion and suppressing the t0 argument,

                             Heff (t) = ⟨HI (t)⟩ + ⟨HI (t)U1 (t)⟩ − ⟨HI (t)⟩⟨U1 (t)⟩.

 • Now, while |ψI (t)⟩ maintains its normalization, ⟨|ψI (t)⟩⟩ doesn’t, because the averaging removes
   the rapidly oscillating parts of the amplitudes. Thus, Heff (t) is not Hermitian. Since we don’t
   care about the rapidly oscillating parts, we suppress this issue by taking the Hermitian part,
                                     †
                         Heff (t) + Heff (t)             1
            Heff (t) =                       = ⟨HI (t)⟩ + (⟨[HI (t), U1 (t)]⟩ − [⟨HI (t)⟩, ⟨U1 (t)⟩])
                                  2                      2
    where we used the fact that U1 (t) is anti-Hermitian.

