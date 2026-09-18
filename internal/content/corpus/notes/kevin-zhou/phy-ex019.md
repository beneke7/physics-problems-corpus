---
id: kevin-zhou-notes-phy-ex019
source: kevin-zhou-notes
native_id: "phy Example 019"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex019
topic: [classical mechanics, electromagnetism]
subtopic: [adiabatic invariants, Hamilton–Jacobi equation, geometrical optics]
math_tools: [calculus, partial differential equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "1219-1448"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. A particle in a magnetic field. Consider a particle confined to the xy plane, experiencing
a magnetic field
                                         B = B(x, y, t)ẑ
which is slowly varying. Also assume that B is such that the particle forms closed orbits. If the
variation of the field is slow, then the adiabatic theorem holds. Integrating over a cycle gives
                             I           Z             Z
                           1                                       2π
                     I=         p · dq ∝ mv · dq − e A · dq =         mv 2 − eΦB .
                          2π                                       ω
In the case of a uniform magnetic field, we have
                                                           eB
                                          v = Rω,     ω=
                                                           m
which shows that the two terms are proportional; hence the magnetic flux is conserved. Alternatively,
since ΦB = AB and B ∝ ω, the magnetic moment of the current loop made by the particle is
conserved; this is called the first adiabatic invariant by plasma physicists. One consequence is that
charged particles can be heated by increasing the field.
   Alternatively, suppose that B = B(r) and the particle performs circular orbits centered about
the origin. Then the adiabatic invariant can be written as

                                           I ∝ r2 (2B − Bav )


where Bav is the average field inside the circular orbit. This implies that as B(r, t) changes in time,
the orbit will get larger or smaller unless we have 2B = Bav , a condition which betatron accelerators,
which accelerate particles by changing the magnetic field in this way, are designed to satisfy.
   The first adiabatic invariant is also the principle behind magnetic mirrors. Suppose one has a
magnetic field B(x, y, z) where Bz dominates, and varies slowly in space. Particles can perform
helical orbits, spiraling along magnetic field lines. The speed is invariant, so
                                              vx2 + vy2 + vz2 = const.
On the other hand, if we boost to match the vz of a spiraling particle, then the situation looks just
like a particle in the xy plane with a time-varying magnetic field. Approximating the orbit as small
and the Bz inside as roughly constant, we have
                                               mv 2   vx2 + vy2
                                         I∝         ∝           = const.
                                                ω        Bz
Therefore, as Bz increases, vz decreases, and at some point the particle will be “reflected” and spiral
back in the opposite direction. This is the principle behind magnetic mirrors, which can be used to
confine plasmas in fusion reactors.

1.6     The Hamilton–Jacobi Equation
We begin by defining Hamilton’s principal function.

  • Given initial conditions (qi , ti ) and final conditions (qf , tf ), there can generally be multiple
    classical paths between them. Often, paths are discrete, so we may label them with a branch
    index b. However, note that for the harmonic oscillator we need a continuous branch index.
  • For each branch index, we define Hamilton’s principal function as
                                                               Z tf
                         Sb (qi , ti ; qf , tf ) = A[qb (t)] =      dt L(qb (t), q̇b (t), t)
                                                                  ti

      where A stands for the usual action. We suppress the branch index below, so the four arguments
      of S alone specify the entire path.
  • Consider an infinitesimal change in qf . Then the new path is equal to the old path plus a
    variation δq with δq(tf ) = δqf . Integrating by parts gives an endpoint contribution pf δqf , so
                                                       ∂S
                                                           = pf .
                                                       ∂qf

  • Next, suppose we simply extend the existing path by running it for an additional time dtf .
    Then we can compute the change in S in two ways,
                                                            ∂S        ∂S
                                          dS = Lf dtf =         dtf +     dqf
                                                            ∂tf       ∂qf
      where dqf = q̇f dtf . Therefore,
                                                      ∂S
                                                          = −Hf .
                                                      ∂tf
      By similar reasoning, we have
                                               ∂S               ∂S
                                                   = −pi ,          = Hi .
                                               ∂qi              ∂ti


 • The results above give pi,f in terms of qi,f and ti,f . We can then invert the expression for pi to
   write qf = qf (pi , qi , ti , tf ), and plug this in to get pf = pf (pi , qi , ti , tf ). That is, given an initial
   condition (qi , pi ) at t = ti , we can find (qf , pf ) at t = tf given S.

 • Henceforth we take qi and ti as fixed and implicit, and rename qf and tf to q and t. Then we
   have S(q, t) with
                                         dS = −H dt + p dq
    where qi and ti simply provide the integration constants. The signs here are natural if one
    imagines them descending from special relativity.

 • To evaluate S, we use our result for ∂S/∂t, called the Hamilton–Jacobi equation,

                                                                  ∂S
                                             H(q, ∂S/∂q, t) +        = 0.
                                                                  ∂t
    That is, S can be determined by solving a PDE. The utility of this method is that the PDE can
    be separated whenever the problem has symmetry, reducing the problem to a set of independent
    ODEs. We can also run the Hamilton–Jacobi equation in reverse to solve PDEs by identifying
    them with mechanical systems.

 • For a time-independent Hamiltonian, the value of the Hamiltonian is just the conserved energy,
   so the quantity S 0 = S + Et is time-independent and satisfies the time-independent Hamilton–
   Jacobi equation
                                         H(q, ∂S 0 /∂q) = E.
    The function S 0 can be used to find the paths of particles of energy E.

We now connect Hamilton’s principal function to semiclassical mechanics.

 • We can easily find the paths by solving the first-order equation

                                                          ∂H
                                                   q̇ =              .
                                                          ∂p p=∂S/∂q

    That is, Hamilton’s principal function can reduce the equations of motion to first-order equations
    on configuration space.

 • As a check, we verify that Hamilton’s second equation is satisfied. We have

                                                   d ∂S    ∂2S   ∂2S
                                            ṗ =         =      + 2 q̇
                                                   dt ∂q   ∂t∂q  ∂q

    where the partial derivative ∂/∂q keeps t constant, and

                                  ∂2S     ∂                   ∂H  ∂2S
                                       = − H(q, ∂S/∂q, t) = −    − 2 q̇.
                                  ∂t∂q    ∂q                  ∂q  ∂q

    Hence combining these results gives ṗ = −∂H/∂q as desired. Note that the “active ingredient” in
    this derivation was the equality of mixed partial derivatives, which is why Hamilton’s equations
    kind of look like Maxwell relations.


  • The quantity S(q, t) acts like a real-valued ‘classical wavefunction’. Given a position, its gradient
    specifies the momentum. To see the connection with quantum mechanics, let

                                         ψ(q, t) = R(q, t)eiW (q,t)/ℏ .

    We assume the wavefunction varies slowly, in the sense that

                                                 ∂2W     ∂W
                                             ℏ       2
                                                       ≪     .
                                                  ∂q      ∂q

    Some care needs to be taken here. We assume R and W are analytic in ℏ, but this implies that
    ψ is not.

  • Expanding the Schrodinger equation to lowest order in ℏ gives

                                            ∂W 2

                               ∂W      1
                                   +               + V (q) = O(ℏ).
                                ∂t    2m ∂q

    Then in the semiclassical limit, W obeys the Hamilton–Jacobi equation. The action S(q, t) is
    the semiclassical phase of the quantum wavefunction. This result anticipates the de Broglie
    relations p = ℏk and E = ℏω classically, and inspires the path integral formulation.

  • With this intuition, we can read off the Hamilton–Jacobi equation from a dispersion relation.
    For example, a free relativistic particle has pµ pµ = m2 , which means the Hamilton–Jacobi
    equation is
                                           η µν ∂µ S∂ν S = m2 .
    This generalizes immediately to curved spacetime by using a general metric.

  • To see how classical paths emerge in one dimension, consider forming a wavepacket by superpos-
    ing solutions with the same phase at time ti = 0 but slightly different energies. The solutions
    constructively interfere when ∂S/∂E = 0, because
                                  Z                 Z                  Z
                       ∂S             ∂p                 dq               dq
                           = −t +         dq = −t +            = −t +         =0
                       ∂E            ∂E                ∂H/∂p               q̇

    where we used Hamilton’s equations.

There is also a useful analogy with optics.

  • Fermat’s principle of least time states that light travels between two points in the shortest
    possible time. We consider an inhomogeneous anisotropic medium. Consider the set of all
    points that can be reached from point q0 within time t. The boundary of this set is the
    wavefront Φq0 (t).

  • Huygen’s theorem states that

                      Φq0 (s + t) is the envelope of the fronts Φq (s) for q ∈ Φq0 (t).

    This follows because Φq0 (s + t) is the set of points we need time s + t to reach, and an optimal
    path to one of these points should be locally optimal as well. In particular, note that each of
    the fronts Φq (s) is tangent to Φq0 (s + t).


 • Let Sq0 (q) be the minimum time needed to reach point q from q0 . We define

                                                     ∂S
                                                p=
                                                     ∂q
    to be the vector of normal slowness of the front. It describes the motion of wavefronts, while q̇
    describes the motion of rays of light. We thus have dS = p dq.

 • The quantities p and q̇ can be related geometrically. Let the indicatrix at a point be the
   surface defined by the possible velocity vectors; it is essentially the wavefront at that point for
   infinitesimal time. Define the conjugate of q̇ to be the plane tangent to the indicatrix at q̇.

 • The wave front Φq0 (t) at the point q(t) is conjugate to q̇(t). By decomposing t = (t − ϵ) + ϵ
   and applying the definition of an indicatrix, this follows from Huygen’s theorem.

 • Everything we have said here is perfectly analogous to mechanics; we simply replace the total
   time with the action, and hence the indicatrix with the Lagrangian. The rays correspond to
   trajectories. The main difference is that the speed the rays are traversed is fixed in optics but
   variable in mechanics, so our space is (q, t) rather than just q, and dS = p dq − H dt instead.

  (finish)


2     Electromagnetism
2.1   Electrostatics
      The subject which I am now going to recommend to your attention almost terrifies
      me. The variety it presents is immense, and the enumeration of facts serves rather to
      confound than to inform. The subject I mean is Electricity.
                                              – Euler, Letters to a German Princess (1761)
The fundamental equations of electrostatics are
                                             ρ
                                   ∇·E= ,             ∇ × E = 0.
                                            ϵ0
The latter equation allows us to introduce the potential E = −∇ϕ, giving Poisson’s equation
                                                    ρ
                                           ∇2 ϕ = − .
                                                    ϵ0
The case ρ = 0 is Laplace’s equation and the solutions are called harmonic functions.
