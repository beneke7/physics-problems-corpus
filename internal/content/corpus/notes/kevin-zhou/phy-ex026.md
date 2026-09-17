---
id: kevin-zhou-notes-phy-ex026
source: kevin-zhou-notes
native_id: "phy Example 026"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex026
topic: [electromagnetism, special relativity]
subtopic: [deriving magnetism, Faraday tensor, Helmholtz decomposition]
math_tools: [special relativity, linear algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1913-1986"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. Deriving magnetism. Consider a wire with positive charges q moving with velocity v
and negative charges −q moving with velocity −v. Then

                                              I = 2nAqv.

Now consider a particle moving in the same direction with velocity u, who measures the velocities
of the charges to be v± = u ⊕ (∓v). Let n0 be the number density in the rest frame of each kind of
charge, so that n = γ(v)n0 . Using the property

                                      γ(u ⊕ v) = γ(u)γ(v)(1 + uv)

we can show the particle sees a total charge density of

                                  ρ′ = q(n+ − n− ) = −q(uvγ(u))n

in its rest frame. It thus experiences an electric force of magnitude F ′ ∼ uvγ(u). Transforming
back to the original frame gives F ∼ uv, in agreement with our results from magnetostatics.
We now consider gauge transformations and the Faraday tensor.

  • The fields are defined in terms of potentials as
                                                  ∂A
                                      E = −∇ϕ −      ,     B = ∇ × A.
                                                  ∂t
    Gauge transformations are of the form
                                                ∂χ
                                       ϕ→ϕ−        ,   A → A + ∇χ
                                                ∂t
    and leave the fields invariant.

  • In relativistic notation, we define Aµ = (ϕ, A) (noting that this makes the components of Aµ
    metric dependent), and gauge transformations are

                                             Aµ → Aµ − ∂µ χ.
38 2. Electromagnetism


  • The Faraday tensor is defined as

                                              Fµν = ∂µ Aν − ∂ν Aµ

    and is gauge invariant. It contains the electric and magnetic fields in its components,
                                                                  
                                            0      Ex    Ey    Ez
                                        −Ex        0   −Bz By 
                                 Fµν = −Ey Bz
                                                                   .
                                                          0   −Bx 
                                          −Ez −By Bx            0

  • In terms of indices or matrix multiplications,

                                       F ′µν = Λµρ Λν σ F ρσ    F ′ = ΛF ΛT .

    In the latter, F has both indices up, and Λ is the matrix that transforms vectors, v → Λv.

  • Under rotations, E and B also rotate. Under boosts along the x direction,

                          Ex′ = Ex ,     Ey′ = γ(Ey − vBz ),       Ez′ = γ(Ez + vBy ),

                          Bx′ = Bx ,     By′ = γ(By + vEz ),       Bz′ = γ(Bz − vEy ).

  • We can construct the Lorentz scalars

                                 Fµν F µν ∝ E2 − B2 ,          Fµν Feµν ∝ E · B.

    A quick way to arrive at the second result is to note that taking the dual maps E → B → −E.

Note. The Helmholtz decomposition states that a general vector field can be written as a curl-free
part plus a divergence-free part, as long as the field falls faster than 1/r at infinity. The slickest
way to show this is to take the Fourier transform F̃(k), which is guaranteed to exist by the decay
condition. Then the curl-free part is the part parallel to k (i.e. (F̃(k) · k̂)k̂), and the divergence-
free part is the part perpendicular to k. Since A can always be taken to be divergence-free, our
expression for E above is an example of the Helmholtz decomposition.

