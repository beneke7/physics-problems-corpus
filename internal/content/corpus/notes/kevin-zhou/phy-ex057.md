---
id: kevin-zhou-notes-phy-ex057
source: kevin-zhou-notes
native_id: "phy Example 057"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex057
topic: [quantum-physics]
subtopic: [quantum-foundations, hilbert-spaces, operators]
math_tools: [linear-algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6548-6735"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Not all countably infinite-dimensional spaces are complete: consider the space V of
infinite vectors with a finite number of nonzero entries. Then the sequence

                            (1, 0, . . .), (1, 1/2, 0, . . .), (1, 1/2, 1/3, 0, . . .), . . .

is Cauchy but does not converge in V .

Next, we consider operators on the Hilbert space.
123 5. Fundamentals of Quantum Mechanics


 • Given an operator A : V → W , we may define the pullback operator A∗ : W ∗ → V ∗ by

                                        A∗ (⟨β|)|α⟩ = ⟨β|(A|α⟩).

   Since we can always construct the pullback (which does not even require an inner product),
   it is convenient to use a notation where both side above are represented in the same way. In
   Dirac notation, both sides are written as ⟨β|A|α⟩, where the leftward action of A on bras is
   just that of A∗ above.

 • For V = W , we define the Hermitian adjoint A† of A by

                                             A† |α⟩ ↔ ⟨α|A

   where the ↔ means the bra/ket correspondence from the inner product. Writing the bra
   associated with A|α⟩ = |Aα⟩ as ⟨Aα|, the above condition says ⟨A† α| = ⟨α|A.

 • Here, Dirac notation is a bit awkward. In standard linear algebra notation, we can make the
   inner products more explicit. Writing ⟨β|α⟩ = (β, α), the definition of A† is

                                          (A† β, α) = (β, Aα).

   Note that this can formally be applied to any map A : V → V , but for linear operators, there
   always exists a unique A† satisfying the above condition.

 • The simplest equivalent way to define the adjoint in Dirac notation is by

                                         (⟨β|A|α⟩)∗ = ⟨α|A† |β⟩.

   Since the adjoint of a number is its complex conjugate, this suggests how to take the adjoint of
   a general expression: conjugate all numbers, flip bras and kets, and take adjoints of operators.

 • We say A is Hermitian if A = A† , plus certain technical conditions which we’ll tacitly ignore.
   Observables are Hermitian operators on H.

 • We say A is an isometry if A† A = 1, so that A preserves inner products, and A is unitary if it is
   an invertible isometry, A† = A−1 , which implies AA† = 1 as well. Note that not all isometries
   are unitary: if |n⟩ is an orthonormal basis with n ∈ Z, the shift operator A|n⟩ = |n + 1⟩ is an
   isometry, but AA† ̸= 1.

 • Operators can be written in Dirac notation as well. For example, given two kets |α⟩ and |β⟩,
   we can define an operator |β⟩⟨α|. In ordinary notation, this operator T would be defined by

                                         T (α, β)(γ) = β(α, γ).

   This might be clear to a mathematician, but doing anything nontrivial will quickly create huge
   piles of nested parentheses, a notational nightmare that Dirac notation is designed to avoid.
   Dirac notation also makes it obvious that the adjoint is |α⟩⟨β|.

 • The spectral theorem states that if A = A† , then all eigenvalues of A are real, and all eigenspaces
   with distinct ai are orthogonal. If the space is separable, every eigenspace has finite dimension,
   so we can construct an orthonormal eigenbasis by Gram-Schmidt.
124 5. Fundamentals of Quantum Mechanics


  • An operator A is a projection if A2 = A. For example, A = |α⟩⟨α| is a projection if ⟨α|α⟩ = 1.
  • A basis |ϕi ⟩ is complete if i |ϕi ⟩⟨ϕi | = 1. The sum of projections is the identity.
                                P

  • Given a complete orthonormal basis, we can decompose operators and vectors into matrix
    elements. For example,
                                                                                      
                         X                               ⟨ϕ1 |A|ϕ1 ⟩ ⟨ϕ1 |A|ϕ2 ⟩ . . .
                     A=        |ϕi ⟩⟨ϕi |A|ϕj ⟩⟨ϕj | ∼ ⟨ϕ2 |A|ϕ1 ⟩      ...     . . . .
                           i,j                               ...         ...     ...
    In this matrix notation, A† is the conjugate transpose of A.
  • If we consider infinite-dimensional spaces, not all Hermitian operators have a complete eigenbasis.
    Let H = L2 ([0, 1]) and let A = x̂. Then A has no eigenvectors in H. This is worrying, because
    we physically prefer observables with a complete eigenbasis.
  • We say A is bounded if
                                                     ⟨α|A|α⟩
                                              sup            < ∞.
                                          |α⟩∈H/{|0⟩} ⟨α|α⟩

    We say A is compact if every bounded sequence {|αn ⟩} (with ⟨αn |αn ⟩ < β for some fixed β)
    has a subsequence {|αnk ⟩} so that {A|αnk ⟩} is norm-convergent in H.
  • One can show that if A is compact, A is bounded. Compactness is sufficient for a Hermitian
    operator to be complete, but boundedness is neither necessary not sufficient. However, we will
    still consider observables that are neither bounded nor compact, when it turns out to be useful.
  • If |ai ⟩ and |bi ⟩ are two complete orthonormal bases, then U defined by U |ai ⟩ = |bi ⟩ is unitary.
    This yields the change of basis formula,
                            X = Xij |ai ⟩⟨aj | = Ykl |bk ⟩⟨bl |,   Xij = Uik Ykl Ulj† .

  • Using the above formula, a finite-dimensional Hermitian matrix can always be diagonalized by
    a unitary, i.e. a matrix that changes basis to an orthonormal eigenbasis.
  • If A and B are diagonalizable, they are simultaneously diagonalizable iff [A, B] = 0, in which
    case we say A and B are compatible. The forward direction is easy. For the converse, let
    A|αi ⟩ = ai |αi ⟩. Then AB|αi ⟩ = ai B|αi ⟩ so B preserves A’s eigenspaces. Therefore when A is
    diagonalized, B is block diagonal, and we can make B diagonal by diagonalizing within each
    eigenspace of A.
We gather here for later reference a few useful commutator identities.
  • The Hadamard lemma states that for operators A and B, we have
                                                1               1
                    eA Be−A = B + [A, B] +         [A, [A, B]] + [A, [A, [A, B]]] + · · · .
                                                2!              3!
    Intuitively, this is simply the adjoint action of A on B, which infinitesimally is the commutator
    [A, B]. Therefore the operation of eA on B must be the exponential of the commutator operation.
    Defining adA (B) = [A, B], this means
                                              eA Be−A = eadA B
    which is exactly the desired identity.
125 5. Fundamentals of Quantum Mechanics


 • The more straightforward way of proving this is to define

                                           F (λ) = eλA Be−λA

    and finding a differential equation for F ; this is the same idea in different notation.

 • Glauber’s theorem states that if [A, B] commutes with both A and B, then
                                                             
                                  A B                  1
                                 e e = exp A + B + [A, B] .
                                                       2
    To see this, define

                           F (λ) = eλA eλB ,    F ′ (λ) = (A + eλA Be−λA )F (λ).

    However, using the previous theorem, we have

                                    F ′ (λ) = (A + B + λ[A, B])F (λ).

   We therefore guess the solution
                                                        λ2
                                                                        
                                  F (λ) = exp λ(A + B) + [A, B]
                                                        2
    This solution satisfies the differential equation as long as the argument of the exponential
    commutes with its derivative, which we can quickly verify. Setting λ = 1 gives the result.

 • A special case of Glauber’s theorem is that if [A, B] = cI, then

                                     eA+B = eB eA ec/2 = eA eB e−c/2 .

    This tells us how to multiply things that “almost commute”.

 • In the case of general [A, B], eA eB can still be expressed as a single exponential in a more
   complicated way, using the full Baker–Campbell–Hausdorff theorem, which subsumes Glauber’s
   theorem as a special case.

 • Note that the exponential of an operator A can be defined in two ways: through the series
   P n
     n A /n!, or, if A has a complete eigenbasis, through the spectral decomposition. That is, if
   the eigenvalues of A are λi , then eA has the same eigenvectors but with eigenvalues eλi . Our
   proofs above are agnostic to the definition used, but the series definition can fail to converge
   even in simple situations; the spectral decomposition is more reliable for Hermitian operators.

We are now ready to state the postulates of quantum mechanics.

  1. The state of a system at time t is given by a ray in a Hilbert space H. By convention, we
     normalize states to unit norm.

  2. Observable quantities correspond to Hermitian operators whose eigenstates are complete.
     These quantities may be measured in experiments.

  3. A observable H called the Hamiltonian defines time evolution by
                                               d
                                          iℏ      |ψ(t)⟩ = H|ψ(t)⟩.
                                               dt
126 5. Fundamentals of Quantum Mechanics


   4. If an observable A is measured when the system is in a state |α⟩, where A has an orthonormal
      basis of eigenvectors |αi ⟩ with eigenvalues ai , the probability of observing A = a is
                                X                                  X
                                    |⟨aj |α⟩|2 = ⟨α|Pa |α⟩, Pa =       |aj ⟩⟨aj |.
                                aj =a                                   aj =a

      After this occurs, the (unnormalized) state of the system is Pa |α⟩.
                                                                                           (i)
   5. If two individual systems have Hilbert spaces H(i) with orthonormal bases |ϕn ⟩, then the
      composite system describing both of them has Hilbert space H(1) ⊗ H(2) , with orthonormal
                       (1)     (2)
      basis |ϕij ⟩ = |ϕi ⟩ ⊗ |ϕj ⟩. An operator A on H(1) is promoted to A ⊗ I, and so on.

The fourth postulate implies the state of a system can change in an irreversible, discontinuous way.
There are other formalisms that do not have this feature, though we’ll take it as truth here.

