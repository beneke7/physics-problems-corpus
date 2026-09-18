---
id: kevin-zhou-notes-phy-ex078
source: kevin-zhou-notes
native_id: "phy Example 078"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex078
topic: [quantum-physics]
subtopic: [angular-momentum, group-representations]
math_tools: [linear-algebra, calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9028-9171"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Variants of the adjoint representation. Exponentiating the above gives the formula for
the adjoint action on the group,

                                   R0 R(n̂, θ)R0−1 = R(R0 (n̂), θ).

We can also derive the adjoint action of an algebra on itself, which yields a representation of the
Lie algebra. First consider conjugation acting on an infinitesimal group element,

                          A(1 + ϵh)A−1 = 1 + ϵAhA−1 ,       A ∈ G,    h ∈ g.

This shows that the adjoint action also conjugates algebra elements. Then if A = 1 + ϵg with g ∈ g,

                              h → (1 + ϵg)h(1 − ϵg) = h + ϵ(gh − hg).

Taking the derivative with respect to ϵ to define the algebra’s adjoint action, we find that g acts
on h by sending it to [g, h]. Incidentally, this is also a proof that the Lie algebra is closed under
commutators, since we know the algebra is closed under the adjoint action.
   As a direct example, consider the matrix Lie group SO(3). Since the operation is matrix
multiplication, the commutator above is just the matrix commutator. Our above calculations shows
that the adjoint action of the Lie algebra so(3) on itself is the cross product.

Note. Noncommutativity in the Lie group reflects a nontrivial Lie bracket. The first manifestation
of this is the fact that
                             etg eth e−tg e−th = 1 + t2 [g, h] + . . .


This tells us that a nonzero Lie bracket causes the corresponding group elements to not commute;
as a simple example, the commutator of small rotations about x̂ and ŷ is a rotation about x̂ × ŷ = ẑ.
Conversely, the Lie bracket is zero, the commutator is zero.
   Another form of the above statement is the Baker–Campbell–Hausdorff theorem, which is the
matrix identity
                                        1         1               1
              eX eY = eZ ,   Z = X + Y + [X, Y ] + [X, [X, Y ]] + [Y, [Y, X]] + . . .
                                        2         12             12
where all the following terms are built solely out of commutators of X and Y . Therefore, if we can
compute the commutator in the algebra, we can in principle compute multiplication in the group.

   The group SO(3) is a compact connected three-dimensional manifold; it is also the configuration
space for a rigid body, so wavefunctions for rigid bodies are defined on the SO(3) manifold. As
such, it’s useful to have coordinates for it; one set is the Euler angles.

Note. The Euler angles. A rotation corresponds to an orientation of a coordinate system; therefore,
we can specify a rotation uniquely by defining axes x̂′ , ŷ′ , ẑ′ that we would like to rotate our original
axes into. Suppose the spherical coordinates of ẑ′ in the original frame are α and β. Then the
rotation
                                           R(ẑ, α)R(ŷ, β)
will put a vector originally pointing along ẑ along ẑ′ . However, the x̂ and ŷ axes won’t be in the
right place. To fix this, we can perform a pre-rotation about ẑ before any of the other rotations;
therefore, any rotation may be written as

                                  R(α, β, γ) = R(ẑ, α)R(ŷ, β)R(ẑ, γ).

This is the zyz convention for the Euler angles. We see that α and γ range from 0 to 2π, while β
ranges from 0 to π. The group manifold SO(3), however, is not S 1 × S 1 × [0, π]. This is reflected
in the fact that for extremal values of the angles, the Euler angle parametrization is not unique.

7.2     Representations of su(2)
Next we consider quantum spin, focusing on the case of spin 1/2.

  • Given a quantum mechanical system with an associated Hilbert space, we expect rotations R
    are realized by unitary operators U (R) on the space. It is reasonable to expect that R → U (R)
    is a group homomorphism, so we have a representation of SO(3) on the Hilbert space.

  • Given a representation of a Lie group, we automatically have a representation of the Lie algebra.
    Specifically, we define
                                                   ∂U (θ)
                                           Jk = iℏ
                                                    ∂θk θ=0
      where U (θ) is the rotation with axis θ̂ and angle θ. Then we must have

                                              [Ji , Jj ] = iℏϵijk Jk .

      This can be shown directly by considering the commutator of infinitesimal rotations.


 • The operators J generate rotations, the factor of i makes them Hermitian, and the factor of
   ℏ makes them have dimensions of angular momentum. We hence define J to be the angular
   momentum operator of the system.

 • With this definition, near-identity rotations take the form

                                    i                                     i
                     U (n̂, θ) = 1 − θn̂ · J + . . . ,   U (n̂, θ) = exp − θn̂ · J .
                                    ℏ                                     ℏ

   Since we can recover a representation of the group by exponentiation, it suffices to find repre-
   sentations of the algebra, i.e. triplets of matrices that satisfy the above commutation relations.

 • One possible representation is
                                                         ℏ
                                                  J=       σ
                                                         2
   in which case
                                                         θ                θ
                             U (n̂, θ) = e−iθn̂· σ/2 = cos − i(n̂ · σ) sin .
                                                         2                2
   This gives the spin 1/2 representation; it tells us how states transform under rotations.

 • Even though the angular momentum of a spin 1/2 particle is not a vector, we still expect that
   angular momentum behaves like a vector under rotations, in the sense that the expectation
   value ⟨J⟩ transforms as a vector. Then we require

                                ⟨U ψ|σ|U ψ⟩ = ⟨ψ|U † σU |ψ⟩ = R⟨ψ|σ|ψ⟩

   which implies that
                                               U † σU = Rσ.
   This may be verified directly using our explicit formula for U above.

 • The above formula is equivalent to our earlier adjoint formula. Inverting and dotting with a,
   we find
                                      U (a · σ)U † = (Ra) · σ.
   This is just another formula for the adjoint action; conjugation by the group takes a to Ra.

 • Using our explicit formula above, we notice that

                                              U (n̂, 2π) = −1.

   This phase is physically observable; in neutron inferferometry, we may observe it by splitting
   a beam, rotating by a relative 2π, and recombining it. Then our representation is actually
   one-to-two. Mathematically, this tells us we actually want projective representations of SO(3),
   which turns out to be equivalent to representations of SU (2), the double cover of SO(3). In
   the case of spin 1/2, we’re simply working with the fundamental representation of SU (2).

 • Using the definition of SU (2), we find that for any U ∈ SU (2),
                                                        X
                                    U = x0 + ix · σ,       x2i = 1

   so SU (2) is topologically S 3 . The xi are called the Cayley-Klein parameters.


Note. Euler angle decomposition also works for spinor rotations, with
                                                                                        −iθ/2
               cos θ/2   −i sin θ/2                 cos θ/2 − sin θ/2                  e        0
 U (x̂, θ) =                         , U (ŷ, θ) =                      , U (ẑ, θ) =                 .
              −i sin θ/2  cos θ/2                    sin θ/2 cos θ/2                     0    eiθ/2
Then a general rotation may be written as
                                 U (α, β, γ) = U (ẑ, α)U (ŷ, β)U (ẑ, γ)
where α ∈ [0, 2π], β ∈ [0, π], γ ∈ [0, 4π]. The extended range of γ accounts for the double cover.
To see that this gives all rotations, note that classical rotations R are a representation of spinor
rotations U with kernel ±I. Then with the extended range of γ, which provides the −1, we get
everything.
