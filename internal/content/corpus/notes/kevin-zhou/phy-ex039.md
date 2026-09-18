---
id: kevin-zhou-notes-phy-ex039
source: kevin-zhou-notes
native_id: "phy Example 039"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex039
topic: [statistical-mechanics]
subtopic: [thermodynamics, dipoles]
math_tools: [thermodynamic-potentials, maxwell-relations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "3459-3602"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Work for electric dipoles. In the previous section, we argued that the increment of work
for an electric dipole is
                                         dUdip = E · dp
which corresponds directly to the F dx energy when the dipole is stretched. However, one could
also include the potential energy of the dipole in the field,

                              Upot = −p · E,   dUpot = −p · dE − E · dp

which thereby includes some of the electric field energy. Conventions differ over whether this should
be counted as part of the dipole’s “internal” energy, as the electric fields are not localized to the
dipole. If we do count it, we find

                                  dUtot = d(Udip + Upot ) = −p · dE

and similarly dUtot = −m · dB for magnetic dipoles. Ultimately, the definition is simply a matter
of convention, and observable quantities will always agree. For example, the Maxwell relations
associated with the “internal energy” Udip are the same as the Maxwell relations associated with
the “free energy” Utot + p · E. Switching the convention simply swaps what is called the internal
energy and what is called the free energy, with actual results staying the same.

Note. In practice, the main difference between magnets and gases is that m decreases with temper-
ature, while p increases; then cycles involving magnets in (m, B) space run opposite the analogous
direction for gases.
                                                                            P
Note. Chemical reactions. For multiple reactions, we get a contribution i µi dNi to the energy.
Now, consider an isolated system where some particle has no conservation law; then the amount
Ni of that particle is achieved by minimizing the free energy, which sets µ = 0. This is the case for
photons in most situations. More generally, if chemical reactions can occur, then minimizing the
free energy means that chemical potentials are balanced on both sides of the reaction.
   As an example, consider the reaction n A ↔ m B. Then in equilibrium, nµA = mµB . On the
other hand, if the A and B species are both uniformly distributed in space, then
                                                      N
                                      µi = kB T log     + const.
                                                      V
Letting [A] and [B] denote the concentrations of A and B, we thus have the law of mass action,
                                           [A]n
                                                = K(T )
                                           [B]m
which generalizes in the obvious way to more complex reactions. (In introductory chemistry classes,
the law of mass action is often justified by saying that the probability for n A molecules to come
together is proportional to [A]n , but this isn’t a good argument because real reactions occur in
multiple stages. For example, two A molecules could combine into an unstable intermediate, which
then react with a third A molecule, and so on.)

Note. The Clausius–Clapeyron equation. At a phase transition, the chemical potentials of the two
phases (per molecule) are equal. Now consider two nearby points on a coexistence curve in (p, T )
space. If we connect these points by a path in the region with phase i, then

                                       ∆µi = −si dT + vi dP


where we used µ = G/N , and si and vi are the entropy and volume divided by the total particle
number N . Since we must have ∆µ1 = ∆µ2 ,
                                   dP   s2 − s1        L
                                      =         =              .
                                   dT   v2 − v1   T (V2 − V1 )
This can also be derived by demanding that a heat engine running through a phase transition
doesn’t violate the Second Law.
Note. Insight into the Legendre transform. The Legendre transform of a function F (x) is the
function G(s) satisfying
                                                             dF
                                    G(s) + F (x) = sx, s =
                                                             dx
from which one may show that x = dG/ds. The symmetry of the above equation makes it clear
that the Legendre transform is its own inverse. Moreover, the Legendre transform crucially requires
F (x) to be convex, in order to make the function s(x) single-valued. It is useful whenever s is an
easier parameter to control or measure than x.
   However, the Legendre transforms in thermodynamics seem to come with some extra minus
signs. The reason is that the fundamental quantity is entropy, not energy. Specifically, we have
                                                        ∂S          ∂F
                            F (β) + S(E) = βE,     β=      ,   E=      .
                                                        ∂E          ∂β
That is, we are using β and E as conjugate variables, not T and S! Another hint of this comes from
the definition of the partition function,
                         Z
                 Z(β) = Ω(E)e−βE dE, F (β) = − log Z(β), S(E) = log Ω(E)

from which we recover the above result by the saddle point approximation.

3.3   Entropy and Information
In this section, we consider entropy most closely, uniting the two definitions above.

 • In thermodynamics, the entropy satisfies dS = d̄Q/T . Equivalently, a process conserves the
   entropy if it is reversible, with the system in equilibrium throughout, and all energy transfer
   is done through macroscopically observable quantities. In statistical mechanics, the entropy
   quantifies the amount of phase space volume corresponding to the macrostate specified by those
   macroscopic quantities.

 • These two ideas are unified by the adiabatic theorem. An entropy-conserving process in ther-
   modynamics corresponds to a slowly varying Hamiltonian which satisfies the requirements of
   the adiabatic theorem; this leads immediately to the conservation of phase space volume. The
   same idea holds in quantum statistical mechanics, where the entropy quantifies the number of
   possible states, which is conserved by the quantum adiabatic theorem.

 • The general results of thermodynamics are not significantly changed if the underlying microscopic
   physics changes. (Steam engines didn’t stop working when quantum mechanics was discovered!)
   For example, suppose it is discovered that a gas can be magnetized. Subsequently including
   the magnetization in the list of thermodynamic variables would change the numeric values of
   the work, free energy, entropy, and so on.


 • However, this does not invalidate results derived without this variable. Work quantifies how
   much energy is given to a system through macroscopically measurable means. Entropy quantifies
   how many states a system could be in, given the macroscopically measured variables. Free
   energy quantifies how much work we can extract from a system given knowledge of those
   same variables. (In the limit of including all variables, the free energy simply becomes the
   microscopic Hamiltonian.) All of these can perfectly legitimately change if more quantities
   become measurable.

 • A more modern, unifying way to think about entropy is as a measure of our subjective ignorance
   of the state. As we saw above for the canonical ensemble,
                                                X
                                       S = −kB      pn log pn .
                                                       n

    But this is proportional to −⟨log2 pn ⟩, the expected number of bits of information we receive
    upon learning the state n. We can use this to define the entropy for nonequilibrium systems.

 • In the context of Hamiltonian mechanics, the entropy becomes an integral over phase space of
   −ρ log ρ. By Liouville’s theorem, the entropy is thus conserved. However, as mentioned earlier,
   in practice the distribution gets more and more finely foliated, so that time evolution combined
   with coarse-graining increases the entropy.

 • In the context of information theory, the Shannon information −⟨log2 pn ⟩ is the average number
   of bits per symbol needed to transmit a message, if the symbols in the message are independent
   and occur with probabilities pn .

 • More generally, the Shannon information is a unique measure of ignorance, in the sense that it
   is the only function of the {pn } to satisfy the following reasonable criteria.

      1. S({pn }) is maximized when the pn are all equal.
      2. S({pn }) is not changed by the addition of outcomes with zero probability.
      3. Consider any function A(n) of the options n, whose possible values have distribution pAm .
         The expected decrease of S upon learning the value of A should be equal to S({pAm }).
         (Note that this implies the entropy is extensive for noninteracting subsystems.)

 • Extending this reasoning further leads to a somewhat radical reformulation of statistical me-
   chanics, promoted by Jaynes. In this picture, equilibrium distributions maximize entropy not
   because of their dynamics, but because that is simply the least informative guess for what the
   system is doing. This seems to me to be too removed from the physics to actually be a useful
   way of thinking, but it is a neat idea.

