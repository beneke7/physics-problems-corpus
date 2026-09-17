---
id: kevin-zhou-notes-phy-ex071
source: kevin-zhou-notes
native_id: "phy Example 071"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex071
topic: [quantum-physics]
subtopic: [path-integrals, propagator]
math_tools: [calculus, differential-equations, fourier-ideas]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8435-8787"
archive_layer: reference_notes
source_role: explanatory_example
---
Example. The propagator for the free particle. Since the problem is time-independent, we set
t0 = 0 and drop it. Then
                            K(x, x0 , t) = ⟨x| exp(−itp̂2 /2mℏ)|x0 ⟩
                                           Z
                                         = dp ⟨x| exp(−itp̂2 /2mℏ)|p⟩⟨p|x0 ⟩

                                                                           p2 t
                                           Z                                  
                                               dp        i
                                         =         exp       p(x − x0 ) −
                                              2πℏ        ℏ                 2m
                                                                        2
                                           r                             
                                                m          i m(x − x0 )
                                         =          exp
                                              2πiℏt        ℏ     2t
where we performed a Gaussian integral. The limit t → 0 is somewhat singular; we expect it is
a delta function, yet the magnitude of the propagator is equal for all x. The resolution is that
the phase oscillations in x get faster and faster, so that K(x, t) behaves like a delta function when
integrated against a test function.
The path integral is an approach for calculating the propagator in more complicated settings. We
work with the Hamiltonian H = T + V = p2 /2m + V (x), as more general Hamiltonians with higher
powers of p are more difficult to handle.
    • The time evolution for a small time ϵ is
                                     iϵ
                        U (ϵ) = 1 − (T + V ) + O(ϵ2 ) = e−iϵT /ℏ e−iϵV /ℏ + O(ϵ2 ).
                                     ℏ
      Therefore the time evolution for a time t = N ϵ is
                                                            N
                                             −iϵT /ℏ −iϵV /ℏ
                                  U (t) = e         e           + O(1/N ).

      This is a special case of the Lie product formula; the error vanishes as N → ∞.
158 6. Path Integrals


  • Using this decomposition, we insert the identity N − 1 times for
                                    Z                      N
                                                           Y −1
              K(x, x0 , t) = lim        dx1 . . . dxN −1         ⟨xj+1 |e−iϵT /ℏ e−iϵV /ℏ |xj ⟩,   x = xN .
                             N →∞
                                                           j=0

    Within each factor, we insert a resolution of the identity in momentum space for

                                                                              (xj+1 − xj )2
      Z                                                      r                                       
                     −iϵp̂2 /2mℏ         −iϵV (x̂)/ℏ            m         i
         dp ⟨xj+1 |e             |p⟩⟨p|e             |xj ⟩ =         exp    m               − ϵV (xj )
                                                               2πiϵℏ      ℏ        2ϵ

    where we performed a Gaussian integral almost identical to the free particle case. Then
                                                                                                 
                                                                N −1                2          
                          m N/2 Z                          iϵ X       (xj+1 − xj )
      K(x, x0 , t) = lim              dx1 . . . dxN −1 exp           m                − V (xj ) 
                    N →∞ 2πiℏϵ                               ℏ              2ϵ2
                                                                             j=0


  • Recognizing a Riemann sum, the above formula shows that
                                           Z            Z t      
                                                         i
                           K(x, x0 , t) = C Dx(τ ) exp       L dτ
                                                         ℏ 0

    where C is a normalization constant and Dx(τ ) is the volume element in “path space”.

  • For each √
             time interval ∆t, the range of positions that contributes significantly to the amplitude
    is ∆x ∼ ∆t, since rapid oscillations cancel the contribution outside this range. This implies
    that typical path integral paths are continuous but not differentiable. This is problematic for the
    compact action integral notation above, since the Lagrangian formalism assumes differentiable
    paths, but we ignore it for now.

  • If we don’t perform the momentum integration, we get the phase space path integral,
                                       Z                  Z t              
                                                          i
                       K(x, x0 , t) = C Dx(τ )Dp(τ ) exp       (pẋ − H) dτ
                                                          ℏ 0

    where x is constrained at the endpoints but p is not. This form is less common, but more
    general, as it applies even when the kinetic energy is not quadratic in momentum. In such cases
    the momentum integrals are not Gaussian and cannot be performed. Luckily, the usual path
    integral will work in all the cases we care about.

  • The usual path integral can also accommodate terms linear in p, as these are shifted Gaussians;
    for example, they arise when coupling to a magnetic field, p2 → (p − eA)2 .

Note. In the relatively simple case of the point particle, we absorb infinities in the path integral
with a divergent normalization constant. In quantum field theory, we usually think of this constant
as ei∆S , where ∆S is a “counterterm” contribution to the action. Typically, one chooses an energy
cutoff Λ for the validity of the path integral, and shows that there is a way to vary ∆S with Λ so
there is a well-defined limit Λ → ∞. This is known as renormalization. We could also treat our
path integral computations below in the same way, as a quantum mechanical path integral is just a
quantum field theory where the operators have no space dependence, i.e. a one-dimensional quantum
field theory. This point of view is developed further in the notes on Quantum Field Theory.
159 6. Path Integrals


6.2     Gaussian Integrals
One of the strengths of the path integral is that it keeps classical paths in view; this makes it
well-suited for semiclassical approximations. We first review some facts about Gaussian integration.

  • The fundamental result for Gaussian integration is
                                 Z               r
                                       −ax2 /2     2π
                                   dx e        =       ,          Re a > 0.
                                                    a
      All bounds of integration are implicitly from −∞ to ∞. Differentiating this gives
                                         Z                  r
                                                 −ax2 /2 2    2π
                                             dx e       x =      .
                                                              a3

  • By completing the square and shifting,
                                     Z                       r
                                            −ax2 /2+bx           2π b2 /2a
                                         dx e            =          e      .
                                                                  a
      This holds even for complex b, as we can shift the integration contour in the complex plane;
      this is legal since there are no singularities to hit.

  • To generalize the Gaussian integral to complex arguments; the fundamental result is
                                  Z
                                                    π
                                     d(z, z) e−zwz = , Re w > 0.
                                                    w
                       R                                           R
    Here, the notation d(z, z) is a formal notation that stands for dx dy where z = x + iy and
    z = x − iy, and in practice, we always evaluate these integrals by breaking z into real and
    imaginary parts and doing the dx and dy integrals instead. (Note that, in terms of differential
    forms, dzdz = dxdy up a constant.)

  • Similarly, by taking real/imaginary parts, we find
                             Z
                                                      π
                                d(z, z) e−zwz+uz+zv = euv/w ,            Re w > 0.
                                                      w

  • The multidimensional generalization of the real Gaussian integral is
                                                       r
                                                         (2π)N
                                     Z
                                            −vT Av/2
                                       dv e          =
                                                         det A
      where A must be positive definite and real. Then A is symmetric and can be diagonalized,
      separating the integral into N standard Gaussian integrals; the positive definiteness ensures
      that these integrals converge.

  • Similarly, with a linear term in v, we have
                                               r
                                                  (2π)N
                       Z                                           
                                   1 T      T                 1 T −1
                           dv exp − v Av + j v =        exp     j A j .
                                   2              det A       2

      This can be shown using the shift v → v + A−1 j.
160 6. Path Integrals


 • Next, we can differentiate the above identity with respect to j at j = 0. But since
                                             T   −1 j/2                    T   −1 j/2
                                      ∂jm ej A            = (A−1 j)m ej A

   the result vanishes for a single derivative when valuated at j = 0. However, for two derivatives,
   we can get a nonzero result by differentiating the A−1 j term, giving
                                                          r
                                                            (2π)N −1
                                 Z
                                         −vT Av/2
                                    dv e          vm vn =         A .
                                                            det A mn
    Interpreting the Gaussian as a probability distribution, this implies

                                                  ⟨vm vn ⟩ = A−1
                                                              mn .

    Similarly, for any even number of derivatives, we get a sum over all pairings,
                                                  X
                              ⟨vi1 · · · vi2n ⟩ =   A−1           −1
                                                     ik ik . . . Aik ik .
                                                                  1   2            2n−1   2n
                                                   pairings

   This is known as Wick’s theorem.

 • In the complex case, we have
                                                                           πN
                                         Z
                                                              †
                                             d(v† , v) e−v Av =
                                                                          det A
   where A must be positive definite. (The conclusion also holds if A only has positive definite
   Hermitian part.) With a linear term, we have

                                                         π N w† A−1 w′
                         Z
                                          †    †   † ′
                             d(v† , v) e−v Av+w v+v w =       e        .
                                                        det A
    Similarly, we can take derivatives; to get nonzero results, we must pair derivatives with respect
    to v with derivatives with respect to v. Then Wick’s theorem is
                                                                X
                             ⟨v i1 · · · v in vj1 · · · vjn ⟩ =   A−1            −1
                                                                   j 1 iP · · · Aj n i P
                                                                               1               n
                                                              perms

   where the sum is over permutations of N integers.

 • In the continuum limit, the vectors and matrices above become functions and operators, and
   the integral becomes a path integral, giving
                   Z                Z                           Z            
                                   1          ′         ′    ′
                     Dv(x) exp −        dx dx v(x)A(x, x )v(x ) + dx j(x)v(x)
                                   2
                                                 Z                          
                                      1          1         ′     −1   ′    ′
                                ∝√          exp     dx dx j(x)A (x, x )j(x ) .
                                     det A       2

    Here, A−1 is the Green’s function for A, satisfying
                                Z
                                   dx′ A(x, x′ )A−1 (x′ , x′′ ) = δ(x − x′′ )

    and we have thrown away some normalization factors, which drop out of averages. Wick’s
    theorem generalizes to this case straightforwardly.
161 6. Path Integrals


Note. We now review the stationary phase approximation. We consider the integral
                                       Z
                                          dx eiφ(x)/κ

for small κ. Then the integrand oscillates wildly except at points of stationary phase x. Approxi-
mating the exponent as a quadratic there, we have a Gaussian integral, giving
           Z                s                         s
                              2πiκ                        2πκ iφ(x)/κ
              dx eiφ(x)/κ ≈    ′′
                                    eiφ(x)/κ = eiνπ/4             e   , ν = sign(φ′′ (x))
                              φ (x)                     |φ′′ (x)|

If there are multiple points of stationary phase, we must sum over each such point. Similarly, we
can consider the multidimensional integral
                                            Z
                                              dx eiφ(x)/κ

for small κ. Then the stationary points are where ∇φ = 0. Expanding about these points and
applying our multidimensional Gaussian formula,

                                                          ∂ 2 φ(x) −1/2 iφ(x)/κ
             Z                                                                            X
                 dx eiφ(x)/κ = eiνπ/4 (2πκ)n/2 det                     e        ,    ν=          sign(λi ).
                                                          ∂xk ∂xl
                                                                                           i

To get the full result, we sum over all stationary points.

6.3     Semiclassical Approximation
Given this setup, we now apply the stationary phase approximation to the path integral.

  • In this case, the small parameter is κ = ℏ and the function is the discretized Lagrangian
                                                        N −1 
                                                                 m (xj+1 − xj )2
                                                        X                                  
                           φ(x1 , . . . , xN −1 ) = ϵ                            − V (x j )  .
                                                                 2      ϵ2
                                                        j=0

      Differentiating, we have

                      ∂φ     m
                                                        ′
                                                                                 ∂2φ     m
                          = ϵ 2 (2xk − xk+1 − xk−1 ) − V (xk ) ,                         = Qkℓ
                      ∂xk     ϵ                                                  ∂xk ∂xℓ  ϵ
      where the matrix Qkℓ is tridiagonal,
                                                             
                              2 − c1    −1     0     0 ...
                             −1      2 − c2   −1    0 . . .                           ϵ2 ′′
                     Qkℓ =  0                                  ,                ck =     V (xk ).
                                                             
                                       −1   2 − c3 −1 . . .                          m
                                 ..      ..     ..   .. . .
                                  .       .      .    .     .

  • In the limit N → ∞, the stationary points are simply the classical paths x(τ ), so

                                               lim φ(x) = S(x, x0 , t).
                                              N →∞

      In the case of multiple stationary paths, we add a branch index.
162 6. Path Integrals


 • Next, we must evaluate det Q. This must combine with the path integral prefactor, which is
   proportional to ϵ−N/2 , to give a finite result, so we expect det Q ∝ 1/ϵ. The straightforward
   way to do this would be to diagonalize Q, finding eigenfunctions of the second variation of the
   action. However, we can do the whole computation in one go by a slick method.
 • Letting Dk be the determinant of the upper-left k × k block, we have
                                      Dk+1 = (2 − ck+1 )Dk − Dk−1 .
    This may be rearranged into a difference equation, which becomes, in the continuum limit
                                 d2 F (τ )
                               m           = −V ′′ (x(τ ))F (τ ), Fk = ϵDk .
                                   dτ 2
    We pulled out a factor of ϵ to make F (τ ) regular, with initial conditions
                        F (0) = lim ϵD0 = lim ϵ = 0,         F ′ (0) = lim (D1 − D0 ) = 1.
                               ϵ→0           ϵ→0                     ϵ→0

 • The equation of motion for F is the equation of motion for a small deviation about the classical
   path, x(τ ) = x(τ ) + F (τ ), as the right-hand side is the linearized change in force. Thus F (t) is
   the change in position at time t per unit change in velocity at t = 0, so
                                                                  2 −1
                                                 ∂pi −1
                                                    
                                      ∂x                            ∂ S
                             F (t) =       =m             = −m                .
                                      ∂vi        ∂x                ∂x0 ∂x
    This is regular, as expected, and we switch back to D(t) by dividing by ϵ. Intuitively, this
    factor tells us how many paths near the original classical path contribute. In the case where
    V ′′ (τ ) < 0, nearby paths rapidly diverge away, while for V ′′ (τ ) < 0 a restoring force pushes
    them back, enhancing the contribution.
 • Finally, we need the number of negative eigenvalues, which we call µ. It will turn out that µ
   approaches a definite limit as N → ∞. In that limit, it is the number of perturbations of the
   classical path that further decrease the action, which is typically small.
 • Putting everything together and restoring the branch index gives the Van Vleck formula
                                   X e−iµb π/2 ∂ 2 Sb 1/2     
                                                                i
                                                                                
                    K(x, x0 , t) ≈    √                   exp     Sb (x, x0 , t) .
                                       b
                                        2πiℏ ∂x∂x0              ℏ

    The van Vleck formula expands the action to second order about stationary paths. It is exact
    when the potential energy is at most quadratic, i.e. for a particle that is free, in a uniform
    electric or gravitational field, or in a harmonic oscillator. It is also exact for a particle in a
    magnetic field, since the Lagrangian remains at most quadratic in velocity.
Note. The van Vleck formula has a simple intuitive interpretation. It essentially states that
                                                           ∂2S
                                           P (x, x0 ) ∝         .
                                                          ∂x∂x0
By changing variables, we have
                                                             ∂p0   1 ∂p0
                                P (x, x0 ) = P̃ (x0 , p0 )       =
                                                             ∂x    h ∂x
because the initial phase space distribution P̃ (x0 , p0 ) must always fill a Planck cell. These two
expressions are consistent since p0 = −∂S/∂x0 .
163 6. Path Integrals


