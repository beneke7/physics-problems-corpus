---
id: "kevin-zhou-e1-p020"
difficulty_level: 4
source: "kevin-zhou"
native_id: "KZ-E1-P020"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-e1-p020"
topic: [electrostatics]
subtopic: [electric-potential, electrostatic-energy, continuous-charge-distributions]
math_tools: [integration]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E1.txt"
source_url: "sources/kevin_zhou/site/handouts/E1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Consider a uniformly charged ball of total charge Q and radius R. Decompose this
    ball into two parts, A and B, where B is a ball of radius R/2 whose center is a distance R/2 of the
    ball’s center, and A is everything else. Find the potential energy due to the interaction of A and B,
    i.e. the work necessary to bring in B from infinity, against the field of A.

       Example 9

       Since Newton’s law of gravity is so similar to Coulomb’s law, the results we’ve seen so far
       should have analogues in Newtonian gravity. What are they? For example, what’s the
       gravitational Gauss’s law?

       Solution
       The fundamental results to compare are
                                                 Gm1 m2              q1 q2
                                        F =−            ,   F =
                                                   r2               4πϵ0 r2
       where the minus sign indicates that the gravitational force is attractive, while the electrostatic
       force between like charges is repulsive. Then we can transform a question involving (only
       positive) electric charges to one involving masses if we map
                                                   1
                                      q → m,           → −G,        E → g.
                                                  4πϵ0
       Thus, while electrostatics is described by
                                                     ρ                          Q
                                                                I
                                 ∇ × E = 0,      ∇·E= ,              E · dS =      ,
                                                     ϵ0                         ϵ0
       the gravitational field is described by
                                                                I
                           ∇ × g = 0,    ∇ · g = −4πGρm ,            g · dS = −4πGM



                                                       11


Kevin Zhou                                                               Physics Olympiad Handouts



  where ρm is the mass density. Similarly, the potential energy can be written in two ways,
                               Z                          Z
                             1                3        1
                        U=        ρm (r)ϕ(r) d r = −         |g(r)|2 d3 r
                             2                       8πG

  where ϕ(x) is the gravitational potential. This result was first written down by Maxwell.

  Remark
  Here’s a philosophical question: is potential energy “real”? You likely think the answer
  is obvious, but about half of your friends probably think the opposite answer is obviously
  correct! In fact, in the 1700s, there was a lively debate over whether the ideas of kinetic
  energy and momentum, which at the time were given various other names, were worthwhile.
  Which one of the two was the true measure of motion? In our modern language, proponents
  of energy pointed out that the momentum always vanished in the center of mass frame,
  which made it “trivial”, while supporters of momentum replied that kinetic energy was
  clearly not conserved in even the simplest of cases, like inelastic collisions.

  In the 1800s, thermodynamics was developed, allowing the energy seemingly lost in inelastic
  collisions to be accounted for as internal energy. But there still remained the problem that
  kinetic energy was lost in simple situations, such as when balls are thrown upward. By the
  mid-1800s, the modern language that “kinetic energy is converted to potential energy” was
  finally standardized, but it was still common to read in textbooks that potential energy was
  fake, a mathematical trick used to patch up energy conservation. After all, potential energy
  has some suspicious qualities. If a ball has lots of potential energy, you can’t see or feel it, or
  even know it’s there by considering the ball alone. It doesn’t seem to be located anywhere
  in space, and its amount is arbitrary, as a constant can always be added.

  In the late 1800s, a revolution in physics answered some of these questions. Maxwell and his
  successors recast electromagnetism as a theory of fields, and showed that the dynamics of
  charges and currents were best understood by allowing the fields themselves to carry energy
  and momentum. We’ll cover this in detail in E7, but for now, it implies that electrostatic
  potential energy is fundamentally stored in the field, with a density of ϵ0 E 2 /2. This implies
  that its location and total amount are directly measurable.

  Maxwell believed that the dynamics of fields emerged from the microscopic motions and
  elastic deformations of an all-pervading ether, in the same way that, say, a fluid’s velocity
  field emerges from the average motion of fluid molecules. This makes it manifestly positive,
  so he was disturbed to find that the energy density of a gravitational field is negative! He
  therefore concluded that gravity could not be described as a vector field.

  A few decades later, the arrival of special relativity answered some questions and reopened
  others. On one hand, it demolished Maxwell’s vision of the ether. On the other hand, it finally
  answered the question of whether all kinds of potential energy are “real”, and it got rid of
  the freedom to add arbitrary constants. That’s because in special relativity, the total energy
  of a system at rest is related to its mass by E = mc2 , and the mass is directly measurable.



                                                  12


Kevin Zhou                                                                Physics Olympiad Handouts



  This finally puts thermal energy, elastic potential energy, and field energy on an equal footing.

  Here’s the most modern view of energy conservation. All particles and their interactions are
  fundamentally described by relativistic quantum fields. A famous result called Noether’s
  theorem implies that whenever such a theory is time-translationally symmetric, there
  is a conserved quantity which we call the energy. (The distinction between kinetic and
  potential energy becomes irrelevant; it’s all just energy.) The density of energy in space
  can be computed from the state of the fields, but it doesn’t need to be explained, as
  Maxwell imagined, by the internal motion of whatever the fields are made of. The fields are
  fundamental: they aren’t made of anything; instead, they make up everything!

  What happens when we throw gravity into the mix? As we’ll discuss further in R3, it turns
  out that at nonrelativistic velocities, the dynamics of gravitating particles can be described
  by “gravitoelectromagnetism”, a theory closely analogous to electromagnetism, where moving
  masses also source “gravitomagnetic” fields Bg , which result in mv × Bg forces. But the
  situation gets much more subtle when we upgrade to full general relativity. Here, the notion
  of a gravitational field disappears completely, and is replaced by the curvature of spacetime,
  making it hard to define an energy density for it at all. For an accessible overview of the
  debate, see this paper. Ultimately, though, it doesn’t matter that much, since it doesn’t
  impair our ability to use either Newtonian gravity or general relativity.

  Example 10

  For an infinite line of linear charge density λ, find the potential V (r) by dimensional analysis.

  Solution
  This example illustrates a famous subtlety of dimensional analysis. The only quantities in
  the problem with dimensions are λ, ϵ0 , and r. To get the electrical units to balance, we have
                                                     λ
                                           V (r) =      f (r)
                                                     ϵ0
  where f (r) is a dimensionless function. But there are no nontrivial dimensionless functions
  of a single dimensionful quantity r. The only possibilities are that f (r) is a dimensionless
  constant, or that f (r) is infinite. In the first case, the electric field would vanish, which can’t
  be right. In the second case, it is unclear how to calculate the electric field at all.

  In fact, the electric potential is infinite, if you insist on the usual convention of setting
  V (∞) = 0. In that case, we have
                                    Z ∞              Z ∞
                                                            λ dr
                            V (r) =       E(r) dr =               =∞
                                      r               r   2πϵ0 r

  for any r. But this is useless; to get a finite result we can actually work with, we need to
  subtract off an infinite constant from the potential. Equivalently, we need to set the potential
  to be zero at some finite distance r = r0 . This is a very simple example of renormalization,



                                                  13


    Kevin Zhou                                                                Physics Olympiad Handouts



        which is an important concept in modern physics. We then have
                                            Z r0
                                                            λ       r0
                                    V (r) =      E(r) dr =      log
                                             r             2πϵ0     r

        which is perfectly consistent with dimensional analysis.

        Notice that in the process of renormalization, a new dimensionful quantity r0 appeared out
        of nowhere. This phenomenon is known as dimensional transmutation. Nothing measurable
        depends on this new scale (e.g. the electric field is independent of r0 ), but you can’t write
        down quantities like the potential without it.


    4    Conductors
