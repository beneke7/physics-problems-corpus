---
id: kevin-zhou-notes-phy-ex070
source: kevin-zhou-notes
native_id: "phy Example 070"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex070
topic: [quantum-physics, electromagnetism]
subtopic: [magnetic-monopoles, quantization]
math_tools: [calculus, vector-calculus, geometry-trigonometry]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "7672-8434"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. Dirac quantization of magnetic monopoles. A magnetic monopole has a magnetic field
                                                     gr̂
                                              B=
                                                    4πr2
where the magnetic charge g is its total flux. To get around Gauss’s law (i.e. writing B = ∇ × A),
we must use a singular vector potential. Two possible examples are
                                    g 1 − cos θ                  g 1 + cos θ
                            AN
                             ϕ =                ,   ASϕ = −                  .
                                   4πr sin θ                    4πr sin θ
These vector potentials are singular along the lines θ = π and θ = 0, respectively, which we call
Dirac strings. Physically, we can think of a magnetic monopole as one end of a solenoid that extends
off to infinity that’s too thin to detect; the solenoid then lies on the Dirac string. Note that there
is only one Dirac string, not two, but where it is depends on whether we use AN           S
                                                                                    ϕ or Aϕ .
    To solve the Schrodinger equation for a particle in this field, we must solve it separately in the
Northern hemisphere (where AN    ϕ is nonsingular) and the Southern hemisphere, giving wavefunctions
ψN and ψS . On the equator, where they overlap, they must differ by a gauge transformation
                                                                gϕ
                                      ψN = eiqα/ℏ ψS ,     α=      .
                                                                2π
But since the wavefunction must be single-valued on each hemisphere, g must be a multiple of Φ0 ,
giving the Dirac quantization condition

                                             qg = 2πℏn.

A slight modification of this argument for dyons, with both electric and magnetic charge, gives

                                         q1 g2 − q2 g1 = 2πℏn.


This is the Dirac–Zwanziger quantization condition.
   We see that if a single magnetic monopole exists, charge is quantized! Or, going in the opposite
direction, the experimental observation of quantization of charge tells us that the gauge group of
electromagnetism should be U (1) rather than R, and magnetic monopoles can only exist in the
former. Hence the observed quantization of charge suggests that monopoles might exist.
Note. An alternate derivation of the Dirac quantization condition. Consider a particle that moves
in the field of a monopole, in a closed path that subtends a magnetic flux Φ. As we know already,
the resulting phase shift is ∆θ = qΦ/ℏ. But we could also have taken a surface that wrapped about
the monopole the other way, with a flux Φ − g and phase shift ∆θ′ = q(Φ − g)/ℏ.
   Since we consider the exact same path in both situations (and the phase shift is observable, as
we could interfere it with a state that didn’t move at all), the phase shifts must differ by a multiple
of 2π for consistency. This recovers the Dirac quantization condition.
   The exact same argument applies to the abstract monopole in B-space in the previous section.
This underscores the fact that the quantization of magnetic charge has nothing to do with real
space; it is fundamentally because there are discretely many distinct U (1) bundles on the sphere,
as we show in more detail below.
Note. A heuristic derivation of the Dirac quantization condition. One can show the conserved
angular momentum of the monopole-charge system, with the monopole again fixed, is
                                                    qg
                                     L = r × mv −      r̂.
                                                    4π
The second term is the angular momentum stored in the electromagnetic fields. Using the fact that
angular momentum is quantized in units of ℏ/2 gives the same result.
Note. Formally, a wavefunction is a section of a complex line bundle associated with the U (1)
gauge bundle. In the case of a nontrivial bundle, the wavefunction can only be defined on patches;
naively attempting to define it globally will give a multivalued or singular wavefunction. (This is
why people sometimes carelessly say that wavefunctions can be multivalued.) It turns out that over
a manifold M the equivalence classes of complex line bundles are classified by the Picard group
H 2 (M, Z). This is relevant to our discussion above, even though R3 is topologically trivial, because
a monopole adds a singularity at a point, and R3 minus a point is topologically equivalent to S 2 ,
which is nontrivial.
   The presence of monopoles is really a statement about the topology of the U (1) gauge bundle,
so it can be described without referring to matter at all. The point is that, to have a well-defined
U (1) gauge connection, we must have AN − AS = dλ, where eiqλ is a single-valued function defined
on the equator S 1 . Then
                        Z        Z          Z         Z                Z
                                        N         S         N     S
                            F =     dA +       dA =       (A − A ) =       dλ
                        S2       N             S       S1                S1

which is quantized. This quantity is called the first Chern class of the U (1) bundle. Similar
arguments can be made for manifolds of other topologies. For much more about these ideas, see
the notes on Geometry.
                                                                                   √
Note. The behavior of a wavefunction has a neat analogy with fluid flow. We let ψ = ρ eiθ . Then
the Schrodinger equation is
                      ∂ρ                      ∂θ    mv 2        ℏ2 1 2 √
                         = −∇ · (ρv),     ℏ      =−      − qϕ +    √ ∇ ( ρ)
                      ∂t                      ∂t     2          2m ρ


where the velocity is v = (ℏ∇θ − qA)/m. The first equation is simply the continuity equation, while
the second is familiar from hydrodynamics if ℏθ is identified as the “velocity potential”, and the
right-hand side is identified as the negative of the energy. We see there is an additional “quantum”
contribution to the energy, which can be interpreted as the energy required to compress the fluid.
   The second equation becomes a bit more intuitive by taking the gradient, giving
                                                                      ℏ2

             ∂v      q            ∂A                                          1 2√
                 =       −∇ϕ −         − v × (∇ × v) − (v · ∇)v + ∇         √    ∇  ρ   .
             ∂t     m             ∂t                                  2m       ρ
Note that the definition of the velocity relates the vorticity with the magnetic field,
                                                       q
                                           ∇ × v = − B.
                                                      m
Then the first two terms on the right-hand side are simply the Lorentz force. The third simply
converts the partial time derivative to a convective derivative. Now in general this picture isn’t
physical, because we can’t think of the wavefunction ψ as a classical field, identifying the probability
density with charge density. However, it is a perfectly good picture when ψ is a macroscopic
wavefunction, as is the case for superconductivity.

5.5     Harmonic Oscillator and Coherent States
We now consider the model system of the harmonic oscillator.

  • The Hamiltonian
                                                   p̂2   mω 2 x̂2
                                              H=       +
                                                   2m       2
                                 p                                    √
      has a characteristic length ℏ/mω, characteristic momentum mℏω, and characteristic energy
      ℏω. Setting all of these quantities to one, or equivalently setting ω = ℏ = m = 1,
                                             p̂2 x̂2
                                          H=    + , [x̂, p̂] = i.
                                              2    2
      We can later recover all units by dimensional analysis.
  • Since the potential goes to infinity at infinity, there are only bound states, and hence the
    spectrum of H is discrete. Moreover, since we are working in one dimension, the eigenfunctions
    of H are nondegenerate.
  • Classically, the Hamiltonian may be factored as
                                         1 2          x + ip x − ip
                                           (x + p2 ) = √      √ .
                                         2               2      2
      This motivates the definitions
                                        1                     1
                                    a = √ (x̂ + ip̂),    a† = √ (x̂ − ip̂).
                                         2                     2
      However, these two operators have the nontrivial commutation relation
                                                                 1    1
                                    [a, a† ] = 1,   H = a† a +     =N+ .
                                                                 2    2
      The addition of the 1/2 is thus an inherently quantum effect. Incidentally, a nice heuristic for
      using the commutation relation above is that [a, f (a, a† )] = ∂f /∂a† , where the right-hand side
      is a formal derivative that acts on strings of a’s and a† ’s.


  • We note that the operator N is positive, because

                                            ⟨ϕ|N |ϕ⟩ = ∥a|ϕ⟩∥2 ≥ 0.

    Therefore, N only has nonnegative eigenvalues; we let the eigenvectors be

                                             N |ν⟩ = ν|ν⟩,    ν ≥ 0.

  • Applying the commutation relations, we find

                                  N a = a(N − 1),         N a† = a† (N + 1).

    This implies that a|ν⟩ is an eigenket of N with eigenvalue ν −1, and similarly a† |ν⟩ has eigenvalue
    ν + 1. Therefore, starting with a single eigenket, we can get a ladder of eigenstates.

  • This ladder terminates if a|ν⟩ or a† |ν⟩ vanishes. But note that

                               ∥a|ν⟩∥2 = ⟨ν|a† a|ν⟩ = ν,       ∥a† |ν⟩∥ = ν + 1.

    Therefore, the ladder terminates on the bottom with ν = 0 and doesn’t terminate on the top.
    Moreover, all eigenvalues ν must be integers; if not, we could lower until the eigenvalue was
    negative, contradicting the positive definiteness of N . We can show there aren’t multiple copies
    of the ladder by switching to wavefunctions and using uniqueness, as shown below.

  • Therefore, the eigenstates of the harmonic oscillator are indexed by integers,
                                                                     1
                                         H|n⟩ = En |n⟩,      En = n + .
                                                                     2

  • Using the equations above, we find that for the |n⟩ to be normalized, we have
                                    √                     √
                            a|n⟩ = n|n − 1⟩, a† |n⟩ = n + 1|n + 1⟩.

    There can in principle be a phase factor, but we use our phase freedom in the eigenkets to
    rotate it to zero. Repeating this, we find

                                                       (a† )n
                                                 |n⟩ = √ |0⟩.
                                                         n!

Note. Explicit wavefunctions. The ground state wavefunction satisfies a|0⟩ = 0, so
                            1                                         1          2
                            √ (x + ∂x )ψ0 (x) = 0,        ψ0 (x) =           e−x /2 .
                             2                                       π 1/4
Similarly, the excited states satisfy
                                               1    1                 2
                                 ψn (x) =         √     (x − ∂x )n e−x /2
                                             π 1/4 n!2n
To simplify, we “move the derivatives past the exponential”, using the identity
                                                   2           2
                                        (x − ∂x )ex /2 f = e−x /2 ∂x f.


Therefore we find
                                           1 (−1)n x2 /2 n −x2
                                              √
                                       ψn (x) =     e   ∂x e .
                                         π 1/4 n!2n
This can be expressed simply in terms of the Hermite polynomials,
                                1          1             2                             2        2
                    ψn (x) =           √        Hn (x)e−x /2 ,     Hn (x) = (−1)n ex ∂xn e−x .
                               π 1/4       n!2n


Generally the nth state is an nth degree polynomial times a Gaussian.

Note. Similarly, we can find the momentum space wavefunction ψen (p) by writing a† in momentum
space. The result turns out to be identical up to phase factors and scaling; this is because unitary
evolution with the harmonic oscillator potential for time π/2 Fourier transforms the wavefunction
(as shown below), and this evolution leaves ψn (x) unchanged up to a phase factor.

Next we turn to coherent states, where it’s easiest to work in Heisenberg picture.

  • The Hamiltonian is still H = (x̂2 + p̂2 )/2, but the operators have time-dependence equivalent
    to the classical equations of motion,
                                                    dx̂          dp̂
                                                        = p̂,        = −x̂.
                                                    dt           dt
    The solution to this is simply clockwise circular motion in phase space, as it is classically,

                                     x̂(t)       cos t sin t    x̂0
                                            =                       .
                                     p̂(t)      − sin t cos t   p̂0

    Then the expectation values of position and momentum behave as they do classically.

  • Moreover, the time evolution for π/2 turns position eigenstates into momentum eigenstates. To
    see this, let U = e−iH(π/2) and let x0 |x⟩ = x|x⟩. Then

                                                  U x0 U −1 U |x⟩ = U x|x⟩

    which implies that
                                                   p0 (U |x⟩) = x(U |x⟩).
    Hence U |x⟩ is a momentum eigenstate with (dimensionless) momentum x. A corollary is that
    time evolution for π/2 applies a Fourier transform to the wavefunction in Schrodinger picture.
    Evolving for a general time implements a general rotation in phase space, i.e. the wavefunction
    experiences a fractional Fourier transform.

  • Classically, it is convenient to consider the complex variable
                                           1                          1
                                       z = √ (x + ip),           z = √ (x − ip).
                                            2                          2
    Expressing the Hamiltonian in terms of these new degrees of freedom gives H = zz, so ż = −iz
    and ż = iz. As a result, the variable z rotates clockwise in the complex plane.

  • The quantum analogues of z and z are a and a† , satisfying

                         ȧ = −ia,         ȧ† = ia† ,   a(t) = e−it a(0),    a† (t) = eit a† (0).


  • We define a coherent state as one satisfying
                                                       1
                                             ∆x = ∆p = √
                                                         2
    which saturates the uncertainty relation. These states as ‘are classical as possible’, in the sense
    that they have maximally well defined position and momentum. Semiclassically, thinking of a
    quantum state as a phase space distribution, a coherent state is a circle in phase space with the
    minimum area h. In addition, there are ‘squeezed states’ that saturate the uncertainty relation
    but are ellipses in phase space. We cover applications of such states in the notes on Optics.

  • Not all “nearly classical” states are coherent states, but it’s also also true that not all states
    with high occupancy numbers look nearly classical. For example, |n⟩ for high n doesn’t look
    classical, since it is completely delocalized.

  • The state |0⟩ is a coherent state, and we can generate others by applying the position and
    momentum translation operators

                                       T (a) = e−iap̂ ,    S(b) = eibx̂

  • By expanding in a Taylor series, or applying the Hadamard lemma,

                           (T (a)ψ)(x) = ψ(x − a),        (T (a)ϕ)(p) = e−iap ϕ(p)

    and
                            (S(b)ψ)(x) = eibx ψ(x),       (S(b)ϕ)(p) = ϕ(p − b).
    Therefore the translation operators shift expectation values and keep dispersions constant.
    Moreover, they don’t commute; using the above relations, we instead have

                                        S(b)T (a) = eiab T (a)S(b)

    so we pick up a phase factor unless ab = nh.

  • Due to the noncommutativity, the order of the position and momentum translations matters.
    To put them on an equal footing, we define the displacement operator

                                           W (a, b) = ei(bx̂−ap̂) .

    By Glauber’s theorem, we have

                              W (a, b) = eiab/2 T (a)S(b) = e−iab/2 S(b)T (a),

    so this definition simply averages the phase between the two ordering.

  • We define coherent states by
                                           |a, b⟩ = W (a, b)|0⟩.
    We visualize this state as a circle centered at (x, p) = (a, b) in phase space; the position space
    and momentum space wavefunctions are Gaussians.

With this setup, it’s easy to show some important properties of coherent states.


 • From our Heisenberg picture results, we know that the expectation values of |a, b⟩ will evolve
   classically. To show that the dispersions are constant over time, it’s convenient to switch to
   raising and lowering operators. Defining the complex variable z as before, we have
                         W (x, p) = exp (i(px̂ − xp̂)) = exp(za† − za) ≡ D(z)
   Applying Glauber’s theorem implies
                                                     2
                                   D(z) = e−|z| /2 exp(za† ) exp(−za).

 • Therefore, the coherent state |z⟩ = D(z)|0⟩ is
                                                                             ∞
                                     −|z|2 /2            †       −|z|2 /2
                                                                            X   zn
                           |z⟩ = e              exp(za )|0⟩ = e                 √ |n⟩.
                                                                            n=0  n!
   Then |z⟩ is an eigenstate of the lowering operator with eigenvalue z.
 • This makes it easy to compute properties of the coherent states; for example,
                                  ⟨z|n̂|z⟩ = ⟨z|a† a|z⟩ = z ∗ z⟨z|z⟩ = |z|2
   as well as
                         ⟨z|n̂2 |z⟩ = ⟨z|a† aa† a|z⟩ = |z|2 ⟨z|aa† |z⟩ = |z|4 + |z|2 .
   In particular, this means var(n̂) = |z|2 . All these results are consistent with the fact that the
   number distribution is Poisson with mean |z|2 .
 • The time evolution of the coherent state is
                                            U (t)|z⟩ = e−it/2 |e−it z⟩
   in accordance with the classical z(t) evolution we saw before. This implies the coherent state
   remains coherent. We can also see this result from the Heisenberg time evolution of a and a† .
 • In the z/z variables, the uncertainty relation is ∆n∆φ ≳ 1, where φ is the uncertainty on the
   phase of z. Physically, if we consider the quantum electromagnetic field, this relation bounds
   the uncertainty on the number of photons and the phase of the corresponding classical wave.
 • Since a is not Hermitian, its eigenvectors are not a complete set, nor are they even orthogonal.
   By using Glauber’s theorem again, we have the overlap
                                                         ∗   2          2
                                        ⟨w|z⟩ = ew z e−|z| /2 e−|w| /2
   which is a bit more transparent when squared,
                                                                    2
                                                |⟨w|z⟩|2 = e−|w−z| .

 • However, the coherent states form an “overcomplete” set, in the sense that
                                        Z
                                          dxdp
                                               |z⟩⟨z| = 1.
                                           2π
   To see this, act with ⟨m| on the left and |n⟩ on the right and use the overlap to find
                        1
                          Z               n ∗ m    Z              Z
                                                                    dφ z n (z ∗ )m
                                   −|z|2 z (z )           2 −|z|2
                             dxdp e       √      = d|z| e               √          .
                       2π                   n!m!                    2π n!m!
   The phase integral is zero unless n = m. When n = m, the phase integral is 1, and the d|z|2
   integral also gives 1, showing the result.


More properties of coherent states are discussed in the notes on Optics.

Note. Coherent states are ubiquitous in nature, because they are generically produced by classically
driving a harmonic oscillator. For a harmonic oscillator experiencing force f (t), we have
                                           Z
                            x(t) = x0 (t) + dt′ sin(t − t′ )θ(t − t′ )f (t′ )

by Green’s functions, where x0 (t) is a homogeneous solution. Then in Heisenberg picture,

                           âe−it + â† eit               iθ(t − t′ )f (t′ ) −i(t−t′ )
                                                Z
                                                                                                ′
                   x̂(t) =       √          +       dt′                     (e         − e−i(t−t ) )
                                   2                            2

where we fix â and â† to be the Heisenberg operators at time t = 0. Now we focus on times t after
the driving ends. The step function is just 1, so denoting a Fourier transform with a tilde,

                               1          i                      i
                      x̂(t) = √     â + √ f˜(1) e−it + â† − √ f˜(−1) eit
                                2          2                      2
where the expressions look a little strange because we have set ω = 1. However, for all times,

                                                          â(t) + â† (t)
                                            x̂(t) =             √
                                                                 2

so the final expressions for â(t) and â† (t) must be the factors in parentheses above. The ground
state evolves into a state annihilated by â(t), which is precisely a coherent state. The other states
evolve into this state, raised by powers of â† (t).
   This result can also be derived directly at the level of the states. Setting ℏ = ω = 1 again, let
the Hamiltonian be
                                      H = a† a + f ∗ (t)a + f (t)a†
where we have generalized the forcing term to the most general one, which is Hermitian and linear
in x and p. In interaction picture,

                                       HI = e−it f ∗ (t)a + eit f (t)a† .

Solving the Schrodinger equation then yields a time evolution operator whose form is an exponential
of a linear combination of a and a† . But this is precisely the form of the operators D(z) defined
above, so it turns the vacuum into a coherent state.

Note. The classical electromagnetic field in a laser is really a coherent state of the quantum
electromagnetic field; in general classical fields emerge from quantum ones by stacking many quanta
together. A more exotic example occurs for superfluids, where the excitations are bosons which
form a coherent field state, ψ̂(x)|ψ⟩ = ψ(x)|ψ⟩. In the limit of large occupancies, we may treat the
state as a classical field ψ(x), which is often called a “macroscopic wavefunction”.

Note. As we’ve seen, coherent states simply oscillate indefinitely, with their wavefunctions never
spreading out. This is special to the harmonic oscillator, and it is because its frequencies have integer
spacing, which makes all frequency differences multiples of ℏω. Forming analogues of coherent states
in general potentials, such as the Coulomb potential, is much harder.


5.6     The WKB Approximation
In this section, we introduce the WKB approximation and connect it to classical mechanics.

 • We consider the standard “kinetic-plus-potential” Hamiltonian, and attempt to solve the time-
   independent Schrodinger equation. For a constant potential, the solutions are plane waves,

                                     ψ(x) = AeiS(x)/ℏ ,   S(x) = p · x.

      The length scale here is the de Broglie wavelength λ = h/p.

 • Now consider a potential that varies on scales L ≫ λ. Then we have

                                            ψ(x) = A(x)eiS(x)/ℏ

      where we expect A(x) varies slowly, on the scale L, while S(x) still varies rapidly, on the scale
      λ. Then the solution locally looks like a plane wave with momentum

                                               p(x) = ∇S(x).

      Hence S(x) is analogous to Hamilton’s principal function.

 • Our approximation may also be thought of as an expansion in ℏ, because L ≫ λ is equivalent
   to pL ≫ ℏ. However, the WKB approximation is fundamentally about widely separated length
   scales; it is also useful in classical mechanics.

 • To make this more quantitative, we write the logarithm of the wavefunction as a series in ℏ,

                           i
              ψ(x) = exp     W (x) , W (x) = W0 (x) + ℏW1 (x) + ℏ2 W2 (x) + . . . .
                           ℏ

      Comparing this to our earlier ansatz, we identify W0 with S and W1 with −i log A, though the
      true S and A receive higher-order corrections.

 • Plugging this into the Schrodinger equation gives
                                      1          iℏ 2
                                        (∇W )2 −    ∇ W + V = E.
                                     2m          2m
      At lowest order in ℏ, this gives the time-independent Hamilton–Jacobi equation
                                            1
                                              (∇S)2 + V (x) = E
                                           2m
      which describes particles of energy E.

 • At the next order,
                       1              i 2                                1
                         ∇W0 · ∇W1 −    ∇ W0 = 0,          ∇S · ∇ log A + ∇2 S = 0
                       m             2m                                  2
      which is equivalent to
                                               ∇ · (A2 ∇S) = 0.
      This is called the amplitude transport equation.


  • To see the meaning of this result, define a velocity field and density
                                          ∂H   p(x)
                                 v(x) =      =      ,       ρ(x) = A(x)2 .
                                          ∂p    m
    Then the amplitude transport equation says

                                      ∇ · J = 0,    J(x) = ρ(x)v(x)

    which is simply conservation of probability in a static situation.

  • Semiclassically, we can think of a stationary state as an ensemble of classical particles with
    momentum field p(x), where ∇ × p = 0, and the particle density is constant in time. This
    picture is correct up to O(ℏ2 ) corrections.

  • The same reasoning can be applied to the time-dependent Schrodinger equation with a time-
    dependent Hamiltonian, giving
                                      1                    ∂S
                                        (∇S)2 + V (x, t) +    = 0.
                                     2m                    ∂t
    This is simply the time-dependent Hamilton–Jacobi equation.

Note. We can generally define a quantum velocity operator as
                                                   ∂H   ∂ω
                                          v(x) =      =    .
                                                   ∂p   ∂k
This corresponds to the group velocity in wave mechanics, which means that in the classical limit
of a narrow wavepacket, it reduces to the classical velocity. This makes sense, since we also know
that the velocity operator appears in the probability flux. As an application of this, note that for a
free nonrelativistic particle we have v = p/m. This is the correct velocity in the classical limit, in
contrast to the phase velocity, which would instead be p/2m. More generally, for a free relativistic
particle we have E 2 = p2 c2 + m2 c4 , which implies
                                                    pc2
                                              v=        .
                                                     E
Note that since the momentum operator is always a space derivative, the de Broglie wavelength is
always λ = h/p. This implies that it “length contracts” as 1/γ for massive relativistic particles.
We now specialize to one-dimensional problems.

  • In the one-dimensional case, we have, at lowest order,
                                               2
                              iS(x)/ℏ    1    dS                         d           2 dS
                 ψ(x) = A(x)e         ,             + V (x) = E,                 A              = 0.
                                        2m dx                           dx            dx
    The solutions are
                           dS           p                               const
                              = p(x) = ± 2m(E − V (x)),          A(x) = p      .
                           dx                                             p(x)

    Since S is the integral of p(x), it is simply the phase space area swept out by the classical
    particle’s path.


 • Note that in classically forbidden regions, S becomes imaginary, turning oscillation into ex-
   ponential decay. In classically allowed regions, the two signs of S are simply interpreted as
   whether the particle is moving left or right. For concreteness we choose
                                      (p
                                           2m(E − V (x)) E > V (x),
                               p(x) = p
                                        i 2m(V (x) − E) E < V (x).
                     √
 • The result A ∝ 1/ p has a simple classical interpretation. Consider a classical particle oscillating
   in a potential well. Then the amount of time it spends at a point is inversely proportional
   to the velocity at that point, and indeed A2 ∝ 1/p ∝ 1/v. Then the semiclassical swarm of
   particles modeling a stationary state should be uniformly distributed in time.

 • This semiclassical picture also applies to time-independent scattering states, which can be
   interpreted as a semiclassical stream of particles entering and disappearing at infinity.

 • Note that the WKB approximation breaks down for classical turning points (where V (x) = E)
   since the de Broglie wavelength diverges.

We now derive the connection formulas, which deal with turning points.

 • Suppose the classically allowed region is x < xr . In this region, we define
                                                Z x
                                        S(x) =       p(x′ ) dx′ .
                                                      xr

    Then the WKB solution for x < xr is
                                      1   iS(x)/ℏ+iπ/4
                           ψI (x) = p     cr e         + cℓ e−iS(x)/ℏ−iπ/4
                                     p(x)
    where cr and cℓ represent the right-moving and left-moving waves.

 • For the classically forbidden region, we define
                                                 Z x
                                         K(x) =      |p(x′ )| dx′
                                                      xr

    to deal with only real quantities. Then the general WKB solution is
                                           1
                              ψII (x) = p          cg eK(x)/ℏ + cd e−K(x)/ℏ
                                          |p(x)|
    where the solutions grow and decay exponentially, respectively, as we go rightward.

 • The connection formulas relate cr and cℓ with cg and cd . Taylor expanding near the turning
   point, the Schrodinger equation is
                                        ℏ2 d2 ψ
                                    −           + V ′ (xr )(x − xr )ψ = 0.
                                        2m dx2
    To nondimensionalize, we switch to the shifted and scaled variable z defined by
                                                         1/3
                                                 ℏ2            d2 ψ

                       x = xr + az, a =                      ,      − zψ = 0.
                                            2mV ′ (xr )        dz 2
    This differential equation is called Airy’s equation.


 • The two independent solutions to Airy’s equation are Ai(x) and Bi(x). They are the exact
   solutions of Schrodinger’s equation for a particle in a uniform field, such a gravitational or
   electric field. Both oscillate for z ≪ 0, and exponentially decay and grow for z ≫ 0,
                                                             
                                 cos α(z)                         sin α(z)
                               √             z≪0                √            z≪0
                            
                                                             
                                                              
                                        1/4
                                                               π(−z)1/4
                                                             
                             π(−z)
                            
                                                             
                                                              
                    Ai(x) =                          Bi(x) =
                            
                            
                               e −β(z)                       
                                                              
                                                                 eβ(z)
                            
                               √            z ≫ 0,           
                                                               √            z ≫ 0,
                               2 πz 1/4                            πz 1/4
                                                             

   where
                                       2         π      2
                             α(z) = − (−z)3/2 + , β(z) = z 3/2
                                       3         4      3
   as can be shown by the saddle point approximation.
 • Let the solution near the turning point be
                                      ψtp (x) = ca Ai(z) + cb Bi(z).
   We first match this with the solution on the left. Writing the solution in terms of complex
   exponentials,
                               1
                  ψtp (z) = √     1/4
                                      ((ca − icb )eiα(z) + (ca + icb )e−iα(z) ),    z ≪ 0.
                           2 π(−z)
   On the other hand, the phase factors have been chosen so that in the linear approximation, the
   WKB solution is
                                           1
                               ψI (x) = p      (cr eiα(z) + cℓ e−iα(z) ).
                                          p(x)
   Thus we read off the simple result
                                           r                    r
                                ca − icb      a       ca + icb a
                                   √     =      cr ,      √         cℓ .
                                  2 π         ℏ         2 π       ℏ
 • In the classically forbidden region, similar reasoning gives
                                            r                r
                                     ca        a       cb       a
                                     √ =         cd , √ =         cg .
                                    2 π        ℏ        π       ℏ
   Combining these results gives the connection formulas

                                       cg      i −i      cr
                                           = 1 1            .
                                       cd      2   2     cℓ

 • The analysis for a classically forbidden region on the left is very similar. On the left,
                                                                          Z x
                              1
               ψIII (x) = p           cg eK(x)/ℏ + cd e−K(x)/ℏ , K(x) =        |p(x′ )| dx′
                             |p(x)|                                         xℓ

   and on the right,
                                                                                  Z x
                           1   iS(x)−iπ/4
               ψIV (x) = p     cr e       + cℓ e−iS(x)−iπ/4 ,            S(x) =         p(x′ ) dx′
                          p(x)                                                     xℓ

   where the phase factors are again chosen for convenience. Then we find
                                            1 1
                                       cg                cr
                                           = 2 2             .
                                       cd       −i i     cℓ


We now apply the connection formulas to some simple problems.

 • First, consider a classically forbidden region for x > xr that is impenetrable. Then we must
   have cg = 0 in this region, so cr = cℓ and the wavefunction on the left is
                                        1
                             ψI (x) = p     (eiS(x)+iπ/4 + e−iS(x)−iπ/4 ).
                                       p(x)
   Another way to write this is to match the phases at the turning point,
                                       1
                            ψI (x) = p     (eiS(x) + re−iS(x) ),   r = −i.
                                      p(x)

   To interpret this, we picture the wave as accumulating phase dθ = p dx/ℏ as it moves. Then
   the reflection coefficient tells us the ‘extra’ phase accumulated due to the turning point, −π/2.

 • Next, consider a oscillator with turning points xℓ and xr . This problem can be solved by
   demanding exponential decay on both sides. Intuitively, the particle picks up a phase of
                                             I
                                           1
                                               p dx − π
                                           ℏ
    through one oscillation, so demanding the wavefunction be single-valued gives
                                   I
                              2πI = p dx = (n + 1/2)h, n = 0, 1, 2, . . .

   which is the Bohr–Sommerfeld quantization rule. The quantity I is proportional to the phase
   space area of the orbit, and called the action in classical mechanics. The semiclassical estimate
   for the energy of the state is just the energy of the classical solution with action I.

 • In the case of the simple harmonic oscillator, we have
                                             √
                                 I                  r
                                                       2E    2πE
                                   p dx = π 2mE            =
                                                      mω 2    ω
   which yields
                                          En = (n + 1/2)ℏω
   which are the exact energy eigenvalues; however, the energy eigenstates are not exact.

 • We can also consider reflection from a hard wall, i.e. an infinite potential. In this case the
   right-moving and left-moving waves must cancel exactly at the wall, cℓ = −icr , which implies
   that the reflected wave picks up a phase of −π.

 • For example, the quantization condition for a particle in a box is
                                I
                                  p dx = (n + 1)h, n = 0, 1, 2, . . .

    and if the box has length L, then
                                                (n + 1)2 ℏ2 π 2
                                         En =
                                                   2mL2
   which is the exact answer.


  • Finally, we can have periodic boundary conditions, such as when a particleH moves on a ring.
    Then there are no phase shifts at all, and the quantization condition is just p dx = nh.

  • Generally, we find that for a system with an n-dimensional configuration space, each stationary
    state occupies a phase space volume of hn . This provides a quick way to calculate the density
    of states.

Note. Classical and quantum frequencies. The classical frequency ωc is the frequency of the classical
oscillation, and obeys ωc = dE/dI. The quantum frequency ωq is the rate of change of the quantum
phase. These are different; for the harmonic oscillator ωc does not depend on n but ωq does.
   Now, when a quantum oscillator transitions between states with difference ∆ωq in quantum
frequencies, it releases radiation of frequency ∆ωq . On the other hand, we know that a classical
particle oscillating at frequency ωc radiates at frequency ωc . To link these together, suppose a
quantum oscillator has n ≫ 1 and transitions with ∆n = −1. Then
                                          ∆E   ∆E   dE
                                  ∆ωq =      ≈    ≈    = ωc
                                           ℏ   ∆I   dI
which recovers the classical expectation. For higher ∆n, radiation is released at multiples of ωc .
This also fits with the classical expectation, where these harmonics come from the higher Fourier
components of the motion.

Note. The real Bohr model. Typically the Bohr model is introduced by the postulate that L = nℏ
in circular orbits, but this is a simplification; Bohr actually had a better justification. By the
correspondence principle as outlined above, we have ∆ωq = ωc , and Planck had previously motivated
∆E = ℏ∆ωq for matter oscillators. If we assume circular orbits with radii r and r − ∆r, these
                       √
relations give ∆r = 2 a0 r, which implies that r ∝ n2 when n ≫ 1. This is equivalent to L = nℏ.
Bohr’s radical step is then to assume these results hold for all n.


6      Path Integrals
6.1     Formulation
    • Define the propagator as the position-space matrix elements of the time evolution operator,
                                         K(x, t; x0 , t0 ) = ⟨x|U (t, t0 )|x0 ⟩.
      Then we automatically have K(x, t0 ; x0 , t0 ) = δ(x − x0 ). Time evolution is computed by
                                           Z
                                ψ(x, t) = dx0 K(x, t; x0 , t0 )ψ(x0 , t0 ).

    • Since we often work in the position basis, we distinguish the Hamiltonian operator acting on
      kets, |H⟩ and the differential operator acting on wavefunctions, H. They are related by
                                                ⟨x|Ĥ|ψ⟩ = H⟨x|ψ⟩.

    • Using the above, the time evolution of the propagator is
                                       ∂K(x, t; x0 , t0 )
                                    iℏ                    = H(t)K(x, t; x0 , t0 )
                                             ∂t
      so that K(x, t) is just a solution to the Schrodinger equation with initial condition ψ(x, t0 ) =
      δ(x − x0 ). But K(x, t) itself is not a valid wavefunction, as it is non-normalizable. Note that
      since a delta function contains all momenta, K(x, t) is typically nonzero for all x, for any t > t0 .
