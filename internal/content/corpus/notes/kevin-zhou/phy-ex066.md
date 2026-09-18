---
id: kevin-zhou-notes-phy-ex066
source: kevin-zhou-notes
native_id: "phy Example 066"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex066
topic: [quantum-physics]
subtopic: [wave-mechanics, infinite-square-well]
math_tools: [differential-equations, calculus]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7239-7419"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Consider the stationary states of the infinite square well,
                                          (
                                            0 a ≤ x ≤ b,
                                  V (x) =
                                            ∞ otherwise.

At the boundaries, ψ ′ can be discontinuous, though the Schrodinger equation ensures ψ is continuous.
Now suppose we wanted to compute the standard deviation of the energy for some state. This
requires computing ⟨ψ|H 2 |ψ⟩ ∝ ⟨ψ|p4 |ψ⟩. But since ψ ′ can be discontinuous at the boundaries,
ψ ′′ can contain delta functions at the boundaries, which means this expectation value can contain
squares of delta functions, and is thus infinite!
     There are a few ways to fix the problem. First, one can note that iterating derivatives makes
functions nastier, so the right definition of H 2 shouldn’t involve differentiating four times. Instead,
since H is perfectly nice, we use the spectral decomposition: we simply define the eigenvectors of H 2
to be the same as H, with squared eigenvalues, and avoid thinking about evaluating H 2 “directly”.
(Or, more formally, many familiar states, such as the energy eigenstates, are simply declared to be
outside the domain of definition of H 2 .) Alternatively, we can regularize the problem by making
the depth of the well finite. Now ψ ′ is always continuous, though it has a small exponential tail
outside the well, and ⟨ψ|H 2 |ψ⟩ is perfectly well defined. We get back the expected results when we
take the well depth to infinity. This kind of physicist’s regulator is extremely reliable, since it is in
accord with how nature actually works, but it’s also very clunky to use in practice.


   Here’s another issue that tends to trouble mathematicians, though it doesn’t trouble physicists.
In mathematics, we often want to take an “intrinsic” perspective. That is, it would be nice to set
up the problem on the interval [a, b], without invoking the entire real line. The potential on this
interval is exactly zero. However, it becomes subtle to define the momentum operator. The crux of
the problem is that the momentum operator should generate translations, but there is no obvious
notion of translations on a finite interval: if you start at x = a and translate left, where do you go?
   We can phrase this problem more formally as follows. To check that the momentum operator is
Hermitian, we need to show that

                                      (ψ, −iℏDϕ) = (−iℏDψ, ϕ)

where D is the derivative operator. By a simple calculation, this happens when

                                        ψ ∗ (b)ϕ(b) = ψ ∗ (a)ϕ(a).

Thus, we have to restrict the domain of definition of p and p† , i.e. put conditions on the allowed ϕ(x)
and ψ(x), respectively. Clearly one possibility is to demand ϕ(a) = ϕ(b) = 0, which is motivated by
the original physical setup, but then this leaves no condition at all for ψ(x), making p† defined on
a larger domain than p. We say that p is self-adjoint if it is Hermitian and has the same domain of
definition as p† , and under this choice p is not self-adjoint. This leads to a number of pathologies.
For example, the spectral theorem doesn’t work, as p has no eigenfunctions with real eigenvalues.
   In order to solve this problem, we need to define a self-adjoint extension of p. That is, we need
to enlarge the domain of definition of p, thereby shrinking the domain of definition of p† , until the
two match. The most general choice that makes p self-adjoint is

                                   ϕ(b) = eiθ ϕ(a),   ψ(b) = eiθ ψ(a).

The choice θ = 0 corresponds to the familiar periodic boundary conditions. Conceptually, what’s
going on is that translation at x = a is now defined to teleport you to x = b with a phase shift.
Mathematically, everything is now well, and p now has a complete set of eigenfunctions as expected
for a self-adjoint operator. (It’s not always possible to do this; if we had worked on the interval [0, ∞)
there is no self-adjoint extension of the momentum operator, since there’s no where to “teleport to”
from zero.)
    Of course, for a finite square well in real life, this is all just an irrelevant formal game, because
the intrinsic perspective doesn’t work: a real translation just takes you out of the well. On the other
hand, sometimes quantities really are meaningful only on finite intervals, such as angles, which are
defined on [0, 2π] with periodic boundary conditions. As another application, we can run the same
analysis for the 1/r2 potential. Here the interval r ∈ [0, ∞) is certainly meaningful, since r can’t be
negative. It turns out in this case that the Hamiltonian has a continuum of self-adjoint extensions,
which can be interpreted as describing what physically happens when the particle hits r = 0. The
choice of self-adjoint extension sets the ground state energy, just like the choice of regularization.

5.3   The Adiabatic Theorem
We now review the adiabatic theorem, which describes the result of slowly changing the Hamiltonian.

  • Suppose we have a Hamiltonian H(xa , λi ) with control parameters λi . If the energies never cross,
    we can index the eigenstates as a function of λ as |n(λ)⟩. If the space of control parameters is
    contractible, the |n(λ)⟩ can be taken to be smooth, though we will see cases where they cannot.


 • The adiabatic theorem states that if the λi are changed sufficiently slowly, a state initially
   in |n(λ(ti ))⟩ will end up in the state |n(λ(tf ))⟩, up to an extra phase called the Berry phase.
   This is essentially because the rapid phase oscillations of the coefficients prevent transition
   amplitudes from accumulating, as we’ve seen in time-dependent perturbation theory.
 • The phase oscillations between two energy levels have timescale ℏ/∆E, so the adiabatic theorem
   holds if the timescale of the change in the Hamiltonian is much greater than this; it fails if
   energy levels become degenerate with the occupied one.
 • The quantum adiabatic theorem implies that quantum numbers n are conserved, and in the
   semiclassical limit                  I
                                           p dq = nh

   which implies the classical adiabatic theorem. Additionally, since the occupancy of quantum
   states is preserved, the entropy stays the same, linking to the thermodynamic definition of an
   adiabatic process.
 • To parametrize the error in the adiabatic theorem, we could write the time dependence as
   H = H(τ ) with τ = ϵt and take ϵ → 0 and t → ∞, holding τ fixed. We can then expand the
   coefficients in a power series in ϵ.
 • When this is done carefully, we find that as long as the energy levels are nondegenerate, the
   adiabatic theorem holds to all orders in ϵ. To see why, note that the error terms will look like
                                          Z τf
                                               dτ eiωτ /ϵ f (τ )
                                               τi

    If the levels are nondegenerate, then the integral must be evaluated by the saddle point approx-
    imation, giving a result of the form e−ωτ /ϵ , which vanishes faster than any power of ϵ.
 • For comparison, note that for a constant perturbation, time-dependent perturbation theory
   gives a transition amplitude that goes as ϵ, rather than e−1/ϵ . This discrepancy is because
   the constant perturbation is suddenly added, rather than adiabatically turned on; if all time
   derivatives of the Hamiltonian are smooth, we get e−1/ϵ .

We now turn to Berry’s phase.

 • We assume the adiabatic theorem holds and plug the ansatz
                                          |ψ(t)⟩ = eiγ(t) |n(λ(t))⟩
    into the Schrodinger equation,
                                          ∂|ψ⟩
                                           i     = H(λ(t))|ψ⟩
                                            ∂t
   where γ(t) is a phase to be determined. For simplicity we ignore all other states, and set the
   energy of the current state to zero at all times to ignore the dynamical phase.
 • Plugging in the ansatz and operating with ⟨ψ|, we find
                                               iγ̇ + ⟨n|ṅ⟩ = 0.
   The quantity γ is real because
                                     d
                              0=        ⟨n|n⟩ = ⟨ṅ|n⟩ + ⟨n|ṅ⟩ = 2 Re⟨n|ṅ⟩.
                                     dt


 • Using the chain rule, we find
                                       Z
                                                                              ∂
                              γ(t) =        Ai (λ) dλi ,   Ai (λ) = i⟨n|         |n⟩
                                                                             ∂λi
   where A is called the Berry connection, and implicitly depends on n. However, this phase is
   only meaningful for a closed path in parameter space, because the Berry connection has a gauge
   redundancy from the fact that we can redefine the states |n(λ)⟩ by phase factors.

 • More explicitly, we may redefine the states by the ‘gauge transformation’

                                             |n′ (λ)⟩ = eiω(λ) n(λ)

   in which case the Berry connection is changed to

                                                A′i = Ai + ∂i ω.

   This is just like a gauge transformation in electromagnetism, except there, the parameters λi are
   replaced by spatial coordinates. Geometrically, Ai is a one-form over the space of parameters,
   like Ai is a one-form over Minkowski space.

 • Hence we can define a gauge-invariant curvature

                                            Fij (λ) = ∂i Aj − ∂j Ai

   called the Berry curvature. Using Stokes’ theorem, we may write the Berry phase as
                                        Z           Z
                                    γ=     Ai dλi =    Fij dS ij
                                               C             S

   where S is a surface bounding the closed curve C.

 • Geometrically, we can describe this situation using a U (1) bundle over M , the parameter space.
   The Berry connection is simply a connection on this bundle; picking a phase convention amounts
   to choosing a section.

 • More generally, if our state has n-fold degeneracy, we have a non-abelian Berry connection for
   a U (n) bundle. The equations pick up more indices; we have
                                                                  ∂
                                           (Ai )(λ)ba = i⟨na |       |nb ⟩
                                                                 ∂λi
   while a gauge transformation |n′ (λ)⟩ = Ωab (λ)|nb (λ)⟩ produces
                                                              ∂Ω †
                                           A′i = ΩAi Ω† − i       Ω.
                                                              ∂λi

 • The field strength is

                           Fij = ∂i Aj − ∂j Ai − i[Ai , Aj ],         Fij′ = ΩFij Ω†

   and the generalization of the Berry phase, called the Berry holonomy, is
                                                  I
                                                           i
                                     U = P exp i Ai dλ .


