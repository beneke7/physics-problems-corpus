---
id: kevin-zhou-notes-phy-ex043
source: kevin-zhou-notes
native_id: "phy Example 043"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex043
topic: [statistical-mechanics]
subtopic: [ideal-gases, equipartition]
math_tools: [counting, equipartition]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3794-3950"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Counting degrees of freedom. A monatomic gas has three degrees of freedom; the atom
has kinetic energy (3/2)kB T . The diatomic gas has seven: the three translational degrees of freedom
of the center of mass, the two rotations, and the vibrational mode, which counts twice due to the
potential energy of the bond, but is frozen out at room temperature.
    An alternating counting method is to simply assign (3/2)kB T kinetic energy to every atom; this
is correct because the derivation of the monatomic gas’s energy holds for each atom separately, in
the moment it collides with another. The potential energy then adds (1/2)kB T .

We now consider the effects of weak interactions.

  • Corrections to the ideal gas law are often expressed in terms of a density expansion,

                                  p     N          N2          N3
                                      =   + B2 (T ) 2 + B3 (T ) 3 + · · ·
                                 kB T   V          V           V
    where the Bi (T ) are called the virial coefficients.

  • To calculate the coefficients, we need an ansatz for the interaction potential. We suppose the
    density is relatively low, so only pairwise interactions matter, so
                                                    X
                                            Hint =      U (rij ).
                                                     i<j


  • If the atoms are neutral with no permanent dipole moment, they will have an attractive 1/r6
    van der Waals interactions. Atoms will also have a strong repulsion at short distances; in the
    Lennard–Jones potential, we take it to be 1/r12 for convenience. In our case, we will take the
    even simpler choice of a hard core repulsion,
                                            (
                                              ∞            r < r0
                                    U (r) =              6
                                              −U0 (r0 /r) r ≥ r0 .

  • Performing the momentum integral as usual, the partition function is
                                               Z Y
                                          1                   P
                                                            −β j<k U (rjk )
                         Z(N, V, T ) =               dr i e                 .
                                       N !λ3N
                                                            i
73 3. Statistical Mechanics


    It is tempting to expand in βU , but this doesn’t work because U is large (infinite!). Instead
    we define the Mayer f function
                                         f (r) = e−βU (r) − 1
    which is bounded here between −1 and 0. Then
                                                 Z Y
                                             1           Y
                            Z(N, V, T ) =            dri   (1 + fjk ).
                                          N !λ3N
                                                          i     j>k

    An expansion of powers in f is thus more sensible. This is an expansion in ‘perturbations to
    occupancy probabilities/densities’ rather than perturbations to energies.

 • The zeroth order term recovers V N . The first order term gives

                                   N 2 N −2                         N 2 N −1
                Z Y       X                  Z                               Z
                      dri    fjk ≈     V         dr1 dr2 f (r12 ) ≈    V       drf (r)
                                    2                                2
                      i       j>k

    where we integrated out the center of mass coordinate. We don’t have to worry about bounds
    of integration on the r integral, as most of its contribution comes from atomic-scale r.

 • Denoting the integral as f , we find that to first order in f ,
                                                                      N
                                  VN           N 2f      VN
                                                             
                                                                   Nf
                              Z=            1+        ≈         1+
                                 N !λ3N        2V       N !λ3N     2V
    so that
                                                                             N 2 kB T
                          F = Fideal − N kB T log(1 + N f /2V ) ≈ Fideal −            f.
                                                                               2V
    Since f ∼ r03 , the ratio of the first and zeroth order terms goes as N r03 /V , giving us a measure
    of what “low density” means. On the other hand, f diverges if the potential falls off as 1/r3 or
    slower, meaning that our expansion breaks down for long-range forces.

 • Calculating the pressure as p = −∂F/∂V , we find

                                               pV        Nf
                                                     =1−    .
                                              N kB T     2V

    Evidently, we have computed the virial coefficient B2 (T ). Finding f explicitly yields the van
    der Waals equations of state.

Higher order corrections can be found efficiently using the cluster expansion.

 • Consider a generic term O(f E ) term in the full expansion of Z above. Such a term can be
   represented by a graph G with N vertices and E edges, with no edges repeated. Denoting the
   value of a graph by W [G], we have
                                                    1 X
                                           Z=           W [G].
                                                 N !λ3N
                                                         G


 • Each graph G factors into connected components called clusters, each of which contributes an
   independent multiplicative factor to W [G].
74 3. Statistical Mechanics


  • The most convenient way to organize the expansion is by the number and sizes of the clusters.
    Let Ul denote the contribution from all l-clusters,
                                              l
                                            Z Y                 X
                                     Ul =            dri                    W [G].
                                              i=1          G is l−cluster
                                                                                        P
    Now consider the contributions of all graphs with ml l-clusters, so that                ml l = N . They have
    the value
                                             Y N ! U ml
                                                       l
                                                            .
                                                (l!)m
                                                    l m  l!
                                                 l

    where the various factorials prevent overcounting within and between l-clusters.

  • Summing over {ml }, the partition function is

                                                1     XY             Ulml
                                        Z=
                                              λ3N                 (l!)ml ml !
                                                      {ml } l

    where the N ! factor has been canceled.

  • The annoying part is the restriction
                                          P
                                            ml l = N , which we eliminate by going to the grand
    canonical ensemble. Defining the fugacity z = eβµ , we have
                          X               X Y 1  z l Ul ml Y          
                                                                          Ul 3l
                                                                                  
                  Z(µ) =      z n Z(N ) =                       =   exp      λ  l!  .
                                                 ml ! λ3l l!              zl
                            N               {ml } l                                 l


  • Defining bl = (λ3 /V )(Ul /l!λ3l ), our expression reduces to
                                                                            !
                                                             V X l
                                        Z(µ) = exp              bl z            .
                                                             λ3
                                                                  l

    We see that if we take the log to get the free energy, only bl appears, not higher powers of bl .
    This reduces a sum over all diagrams to a sum over only connected diagrams. Expanding in
    powers of z allows us to find the virial coefficients.

