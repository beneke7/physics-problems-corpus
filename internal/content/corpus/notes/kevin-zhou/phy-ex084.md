---
id: kevin-zhou-notes-phy-ex084
source: kevin-zhou-notes
native_id: "phy Example 084"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex084
topic: [quantum-mechanics]
subtopic: [discrete-symmetries]
math_tools: [angular-momentum, group-theory]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "10111-10471"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The Landau–Yang theorem states that a massive, spin 1 particle can’t decay into two
photons. This places restrictions on the decay of, e.g. some states of positronium and charmonium,
and the weak gauge bosons. To demonstrate this, work in the rest frame of the decaying particle. By
energy and momentum conservation, after some time, the state of the system will be a superposition
of the particle still being there, and terms involving photons coming out back to back in various
directions and polarizations, |k, e1 , −k, e2 ⟩.
   Now, pick an arbitrary z-axis. We will show that photons can’t come out back to back along
this axis, i.e. that terms |kẑ, e1 , −kẑ, e2 ⟩ cannot appear in the state. Since ẑ is arbitrary, this shows
that the decay can’t occur at all. The ei can be expanded into circular polarizations,

                               e1R = e2L = x̂ + iŷ,    e1L = e2R = x̂ − iŷ

where these two options have Jz eigenvalues ±1. Since |Jz | ≤ 1 for a spin 1 particle, the Jz
eigenvalues of the two photons must be opposite, so the allowed polarization combinations are
|kẑ, e1R , −kẑ, e2R ⟩ and |kẑ, e1L , −kẑ, e2L ⟩, giving Jz = 0. Now consider the effect of a rotation
Ry (π). Both of these states are eigenstates of this rotation, with an eigenvalue of 1. But the Jz = 0
state of a spin 1 irrep flips sign, as can be seen by considering the transformation of Y10 (θ, ϕ), so the
term is forbidden. Similar reasoning can be used to restrict various other decays; further constraints
come from parity.
188 7. Angular Momentum


Note. Why did we “ignore” the orbital angular momentum in the above argument? Actually, we
didn’t. We decomposed the final state in eigenvectors of the photon momentum and spin. These
states do carry orbital angular momentum, or more precisely their orbital angular momentum is not
defined: |k, e1 , −k, e2 ⟩ is not an eigenvector of general spatial rotations. To see the orbital angular
momentum explicitly, we would decompose the state in a different basis, namely the partial waves.
In that case the linear momentum would not be defined, in the sense that each orbital angular
momentum state has indefinite linear momentum. The eventual conclusion would be the same, but
it would be much harder to reach. (understand better) Our particular argument used the former
basis, and considered the properties of the state under rotations, which automatically account for
both spin and orbital angular momentum.


7.6     Tensor Operators
Classically, we say the position x is a vector because of how it transforms under rotations. In
quantum mechanics, observables correspond to operators, motivating us to consider how operators
transform under rotations.

  • States transform as |ψ⟩ → |ψ ′ ⟩ = U (R)|ψ⟩. Under a rotation, an operator A becomes

                                                A′ = U (R)AU (R)†

      so that ⟨ψ ′ |A′ |ψ ′ ⟩ = ⟨ψ|A|ψ⟩.

  • A scalar operator K is any operator invariant under rotations, K ′ = K. Therefore K commutes
    with all rotations, or, taking the case of an infinitesimal rotation, K commutes with J. One
    important example is the Hamiltonian in a central force problem.

  • A vector operator V is a triplet of operators satisfying

                                             ⟨ψ ′ |V|ψ ′ ⟩ = R⟨ψ|V|ψ⟩.

      That is, V corresponds to a classical vector quantity. Expanding in components yields

                                             U (R)Vi U (R)† = Vj Rji .

      Taking infinitesimal rotations on both sides gives the commutation relations

                                                [Ji , Vj ] = iℏϵijk Vk

      which serves as an alternate definition of a vector operator.

  • Similarly, we may show that the dot product of vector operators is a scalar operator, the cross
    product is a vector operator, and so on. For example, p2 is a scalar operator and L = r × p
    is a vector operator. The adjoint formula shows that angular momentum is always a vector
    operator.

  • Similarly, we define a rank-2 tensor operator as one that transforms by

                                           U (R)Tij U (R)† = Tkl Rki Rlj .

      For example, the outer product of vector operators Tij = Vi Wj is a tensor operator. A physical
      example of a rank-2 tensor operator is the quadrupole moment.
189 7. Angular Momentum


Next, we turn to an apparently unrelated subject: the spherical basis of R3 .

 • Starting with the Cartesian basis x̂, ŷ, ẑ, we define the spherical basis vectors
                                      x̂ + iŷ                            x̂ − iŷ
                               ê1 = − √ ,          ê0 = ẑ,    ê−1 =      √ .
                                          2                                   2
    We may expand vectors in this basis (or technically, the basis ê∗q ) by

                                        X = ê∗q Xq ,    Xq = êq · X

 • As an example application, consider calculating the dipole transition rate, which is proportional
   to ⟨n′ ℓ′ m′ |x|nℓm⟩. This is messy, but a simplification occurs if we expand x in the spherical
   basis, because                                            r
                                                                 3
                                              rY1q (Ω) =           xq .
                                                                4π
   Then the matrix element factors into an angular and radial part,
                                 Z ∞                               r Z
                                                                     4π
           ⟨n′ ℓ′ m′ |xq |nℓm⟩ =     r2 dr Rn∗ ′ ℓ′ (r)rRnℓ (r) ×        dΩ Yℓ∗′ m′ (Ω)Y1q (Ω)Yℓm (Ω).
                                  0                                    3
    This is a substantial improvement: we see that n and n′ only appear in the first factor, while
    m and m′ only appear in the second. Furthermore, the integral vanishes automatically unless
    m′ = q + m, which significantly reduces the work that must be done. Even better, the angular
    part is the same for all rotationally symmetric systems; the radial part factors out what is
    specific to hydrogen.

 • The ‘coincidence’ arises because both the spherical harmonics and spherical basis arise out of
   the representation theory of SU (2). The Ylm ’s are the standard angular momentum basis for
   the action of rotations on functions on the sphere. Similarly, the spherical basis is the standard
   angular momentum basis for the action of rotations in space, which carries the representation
   j = 1.

 • More generally, tensor quantities carry representations of SO(3) classically, and hence tensor
   operators carry representations of SU (2) in quantum mechanics. Hence it is natural for the
   photon, which is represented by the vector A classically, to have spin 1.

 • Tensor operators can be broken down into irreps. Scalar and vector operators are already irreps,
   but the tensor operator Tij = Vi Wj contains the scalar and vector irreps

                                     tr T = V · W,        X = V × W.

    The remaining degrees of freedom form a five-dimensional irrep, the symmetric traceless part
    of Tij . This is in accordance with the Clebsch–Gordan decomposition 1 ⊗ 1 = 0 ⊕ 1 ⊕ 2. The
    same decomposition holds for arbitrary Tij by linearity.

 • Irreps in the standard basis transform by the same D matrices that we introduced earlier. For
   example, an irreducible tensor operator of order k is a set of 2k + 1 operators Tqk satisfying

                                          U Tqk U † = Tqk′ Dqk′ q (U ).

    An irreducible tensor operator of order k transforms like a spin j particle. In our new language,
    writing x in terms of the xq is just writing it as an irreducible tensor operator of order 1.
190 7. Angular Momentum


  • Rotations act on kets by multiplication by U (R), while rotation act on operators by conjugation,
    which turns into commutation for infinitesimal rotations. Therefore the angular momentum
    operators affect the irreducible tensor operator Tqk exactly as they affect the kets |kq⟩, but with
    commutators,
                             [Jz , Tqk ] = ℏkTqk , [Ji , [Ji , Tqk ]] = ℏ2 k(k + 1)Tqk .
    We don’t even have to prove this independently; it just carries over from our previous work.

  • In the case of operators, there’s no simple ‘angular momentum operator’ as in the other cases,
    because it would have to be a superoperator, i.e. a linear map of operators.

Note. The ideas above can be used to understand higher spherical harmonics as well. The functions
x, y, and z form an irrep under rotations, and hence the set of homogeneous second-order polynomials
forms a representation as well. Using the decomposition 1 ⊗ 1 = 0 ⊕ 1 ⊕ 2 yields a five-dimensional
irrep, and dividing these functions by r2 yields the ℓ = 2 spherical harmonics.
    This explains the naming of chemical orbitals. The p orbitals are px , py , and pz , corresponding
to angular parts x/r, y/r, and z/r. Note that this is not the standard angular momentum basis;
the functions are instead chosen to be real and somewhat symmetrical. The names of the d orbitals
are similar, though dz 2 should actually be called d3z 2 −r2 . Illustrations of these orbitals, and higher
ones, can be found here.

We now state the Wigner–Eckart theorem, which simplifies matrix elements of irreducible tensor
operators. We won’t bother to prove it, because it gets notationally complex, but it can be relatively
easily shown in special cases, which give the intuition for why it must be true.

  • Consider a setup with rotational symmetry, and work in the basis |γjm⟩. A scalar operator K
    commutes with both Jz and J 2 , and hence preserves j and m. Moreover, since it commutes
    with J± , its matrix elements do not depend on m,

                                       ⟨γ ′ j ′ m′ |K|γjm⟩ = δj ′ j δm′ m Cγj ′ γ .

    This implies, for instance, that the eigenvalues come in multiplets of degeneracy 2j + 1. We’ve
    already seen this reasoning before, for the special case K = H, but the result applies for any
    scalar operator in any rotationally symmetric system.

  • The Wigner–Eckart theorem generalizes this to tensor operators, stating that

                               ⟨γ ′ j ′ m′ |Tqk |γjm⟩ = ⟨γ ′ j ′ ||T k ||γj⟩⟨j ′ m′ |jkmq⟩

    where the first factor is called a reduced matrix element, and the second is a Clebsch–Gordan
    coefficient. The reduced matrix element is not a literal matrix element, but just stands in for a
    quantity that only depends on T k and the γ’s and j’s.

  • The Wigner–Eckart theorem factors the matrix element into a part that depends only on the
    irreps (and hence depends on the detailed dynamics of the system), and a part that depends
    on the m’s that label states inside the irreps (and hence is determined completely by rotational
    symmetry). This simplifies the computation of transition rates, as we saw earlier. Fixing the
    γ’s and j’s, there are generally (2j + 1)(2j ′ + 1)(2k + 1) matrix elements to compute, but we
    can just compute one, to get the reduced matrix element.
191 7. Angular Momentum


 • The intuition for the Clebsch–Gordan coefficient is that Tqk |jm⟩ transforms under rotations just
   like the ket |kq⟩|jm⟩. The Clebsch–Gordan factor also provides several selection rules,

                                  m′ = m + q,          j ′ ∈ {|j − k|, . . . , j + k}

    just as we saw for dipole transitions with the spherical basis.

 • If there is only one irrep, then all irreducible tensor operators of order k must be proportional
   to each other. To show this directly, note that all such operators must be built out of linear
   combinations of |m⟩⟨m′ |. This set of operators transforms as

                                           j ⊗ j = 0 ⊕ 1 ⊕ . . . ⊕ 2j.

   Hence there is a unique irreducible tensor operator for all spins up to 2j, and none above that.
   This shows, for example, that we must have µ ∝ S for spins.

 • For example, an alpha particle is a nucleus whose ground state has spin zero. Restricting our
   Hilbert space to this irrep, the selection rules show that every irreducible tensor operator with
   k > 0 must be zero. Thus alpha particles cannot have a magnetic dipole moment.

 • To compute the reduced matrix elements of J itself, note that

                              ⟨γ ′ j ′ m′ |Jz |γjm⟩ = ⟨γ ′ j ′ ||J||γj⟩⟨j ′ m′ |j1m0⟩.

   The left-hand side is easy to evaluate, giving
                                                  δγ ′ γ δj ′ j ℏm
                            ⟨γ ′ j ′ ||J||γj⟩ =
                                                                                    p
                                                                   = δγ ′ γ δj ′ j ℏ ℓ(ℓ + 1)
                                                  ⟨jm|j1m0⟩
   where the last step uses explicit Clebsch–Gordan coefficients for the j ⊗ 1 case.

One useful corollary of the Wigner–Eckart theorem is the projection theorem.

 • First, we prove the theorem by brute force. One can show the identity

                           [J 2 , [J 2 , V]] = ℏ2 2(J 2 V + VJ 2 ) − 4(V · J)J
                                                                               


    for any vector operator V, directly using the definitions.

 • We now sandwich this identity between ⟨γ ′ jm′ | and |γjm⟩. Since the same j value is on both
   sides, the left-hand side vanishes, giving

                          2⟨γ ′ jm′ |J 2 V + VJ 2 |γjm⟩ = 4⟨γ ′ jm′ |(V · J)J|γjm⟩.

    Rearranging slightly, this implies that
                                                         1
                           ⟨γ ′ jm′ |V|γjm⟩ =                  ⟨γ ′ jm′ |(V · J)J|γjm⟩
                                                    j(j + 1)ℏ2
   which is known as the projection theorem. Intuitively, the right-hand side is the projection of
   V “in the J direction”, and the result says that the result is the same as V when we restrict to
   a subspace of constant j. This is a generalization of the idea above that, for constant γ and j,
   there is only one vector operator.
192 7. Angular Momentum


 • The projection theorem can also be derived by explicitly evaluating the reduced matrix element
   in the Wigner–Eckart theorem. Since the right-hand side involves the product of a scalar and
   vector operator, we first seek to simplify such products.

 • Let A be a vector operator and let f be a scalar operator. The Wigner–Eckart theorem says

                               ⟨γ ′ j ′ m′ |Aq |γjm⟩ = ⟨γ ′ j ′ ||A||γj⟩⟨j ′ m′ |j1mq⟩

   and
                             ⟨γ ′ j ′ m′ |f Aq |γjm⟩ = ⟨γ ′ j ′ ||f A||γj⟩⟨j ′ m′ |j1mq⟩.
   Furthermore, since f is a scalar, we have

                                  ⟨γ ′ j ′ m′ |f |γjm⟩ = δm′ m δj ′ j ⟨γ ′ j||f ||γj⟩.

   Combining these results gives a decomposition for the reduced matrix elements of f A,
                                                 X
                           ⟨γ ′ j ′ ||f A||γj⟩ =   ⟨γ ′ j ′ ||f ||Γj ′ ⟩⟨Γj ′ ||A||γj⟩
                                                      Γ

   which makes sense: both A and f can move between irreps, though only A can change j.

 • By similar reasoning, for the dot products of vector operators, we have
                                                   X
                           ⟨γ ′ j ′ ||A · B||γj⟩ =  ⟨γ ′ j||A||Γj ′ ⟩⟨Γj ′ ||B||γj⟩
                                                      Γj ′

                              P       †
   where we used A · B =        q Aq Bq and the Wigner–Eckart theorem twice.

 • Now we can simply show the projection theorem directly. We have

           ⟨γ ′ j ′ m′ |(A · J)Jq |γjm⟩ = δj ′ j ℏ j(j + 1)⟨jm′ |j1mq⟩⟨γ ′ j||A · J||γj⟩
                                                  p

                                        = δj ′ j ℏ j(j + 1)⟨jm′ |j1mq⟩⟨γ ′ j||A||γj⟩⟨γj||J||γj⟩
                                                  p

                                         = δj ′ j ℏ2 j(j + 1)⟨jm′ |j1mq⟩⟨γ ′ j||A||γj⟩
                                         = δj ′ j ℏ2 j(j + 1)⟨γ ′ jm′ |Aq |γjm⟩

   where we used the decompositions above and the reduced matrix elements of J.
193 8. Discrete Symmetries


8      Discrete Symmetries
8.1     Parity
In the previous section, we studied proper rotations. We now add in parity, an improper rotation,
and consider its representations. Discrete symmetries are also covered in the context of relativistic
quantum mechanics in the notes on the Standard Model.

    • In classical mechanics, the parity operator P inverts all spatial components. It has matrix
      representation −I, satisfies P 2 = I, and commutes with all proper rotations, P RP −1 = R.

    • In quantum mechanics, we look for a parity operator π = U (P ) which satisfies
                                  π † π = 1,   π 2 = 1,   πU (R)π † = U (R).
      Mathematically, these conditions mean that we are looking for unitary representations of O(3).
      Combining the first postulates show that π is Hermitian, so the parity is observable. The third
      postulate is equivalent to [π, J] = 0, i.e. that π is a scalar operator.

    • The above postulates rule out projective representations. These are allowed in principle, but
      won’t be necessary for any of our applications.

    • For a spinless particle, we have previously defined U (R)|x⟩ = |Rx⟩. Similarly, we may define
      π|x⟩ = −|x⟩, which obeys all of the postulates above. We may also explicitly compute
                                  πxπ † = −x,     πpπ † = −p,     πLπ † = L
      where L is the orbital angular momentum r × p. the parity of the state |lm⟩ is (−1)l .

    • Another example is a spin-s particle with no spatial wavefunction. The states are |sm⟩ for
      m = −s, . . . , s. Since π is a scalar operator, we must have
                                                π|sm⟩ = η|sm⟩
      for some constant η = ±1. In nonrelativistic quantum mechanics, the sign has no physical
      consequences, so we choose η = 1 so that parity does nothing to the spin state. Adding back
      the spatial degrees of freedom gives π|x, m⟩ = |−x, m⟩.

    • In relativistic quantum mechanics, the sign of η makes a physical difference because particle
      number can change, but the overall parity must be conserved; this provides some selection rules.
      For example, the fact that the photon has negative parity is related to the fact that the parity
      of an atom flips during an electric dipole transition, which involves one photon.

    • Given a vector operator V, if
                                                 πVπ † = ±V
      then we say V is a true/polar vector if the sign is −1, and a pseudovector/axial vector if the
      sign is +1. For example, x and p are polar vectors but L is an axial vector.

    • Similarly, for a scalar operator K, if
                                                 πKπ † = ±K
      then K is a true scalar if the sign is +1 and a pseudoscalar if the sign is −1. For example, p · S
      is a pseudoscalar.
194 8. Discrete Symmetries


  • Note that E is a polar vector while B is an axial vector. In particular, adding an external
    magnetic field does not break parity symmetry.
Next, we consider the consequences of parity symmetry of the Hamiltonian.
  • Parity is conserved if [π, H] = 0. This is satisfied by the central force Hamiltonian, and more
    generally to any system of particles interacting by pairwise forces of the form V (|ri − rj |).
  • Parity remains conserved when we account for relativistic effects. For example, such effects
    lead to a spin-orbit coupling L · S, but this term is a true scalar. Parity can appear to be
    violated when photons are emitted (or generally when a system is placed in an external field),
    but remains conserved as long as we account for the parity of the electromagnetic field.
  • Parity is also conserved by the strong interaction, but not by the weak interaction. The weak
    interaction is extremely weak at atomic energy scales, so parity symmetry is extremely accurate
    in atomic physics.
  • Unlike rotational symmetry, parity symmetry by itself doesn’t imply any degeneracy, because its
    irreps are all one-dimensional; for instance, the harmonic oscillator is symmetric under parity but
    has no degeneracy. In order to have higher-dimensional irreps, one needs a nonabelian symmetry
    group. For example, consider the free particle in one dimension. It has both translational and
    parity symmetry, which yield irreps of dimension 2, corresponding to the combinations sin(kx)
    and cos(kx).
  • A more nontrivial example is the degeneracy of states with opposite crystal momentum in
    a parity-symmetric crystal lattice, as described in the notes on Solids. This is due to the
    combination of parity symmetry and discrete translational symmetry.
  • Just as for rotational symmetry, parity symmetry can be useful by lowering the dimensionality
    of the Hilbert space we have to consider. We can split the Hilbert space into representations
    with +1 and −1 parity and diagonalize H within them separately, which is more efficient.
  • In the case of rotational symmetry, every rotational irrep has definite parity since π is a scalar
    operator. In particular, if there is no degeneracy of irreps, then every energy eigenstate is
    automatically a parity eigenstate. (But in hydrogen, the 2s and 2p irreps are degenerate, and
    so a linear combination of these states gives an energy eigenstate without definite parity.)
