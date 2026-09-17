---
id: "kevin-zhou-m6-ex004"
source: "kevin-zhou"
native_id: "KZ-M6-EX004"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-m6-ex004"
topic: [Gravitáció]
subtopic: [pályamozgás, stabilitás, Kepler-törvények, virieltétel]
math_tools: [differenciálszámítás, integrálás, kisparaméteres közelítés]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M6.txt"
source_url: "sources/kevin_zhou/site/handouts/M6.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Binney 5.1

       For over 150 years, most astronomers believed that Saturn’s rings were rigid bodies, until
       Laplace showed that a solid ring would be unstable. The same instability plagues Larry
       Niven’s Ringworld, a science fiction novel once popular among boomer nerds. Following

                                                       5
Kevin Zhou                                                               Physics Olympiad Handouts

  Laplace, tekintsük a rigid, circular ring of radius R and tömeg m, centered on a planet of
  tömegpM ≫ m. The ring rotates around the planet with the Keplerian angular sebesség
  ω = GM/R3 . Show that this configuration is linearly unstable.

  Solution
  One way to understand the stability of an ordinary planetary orbit is angular impulzus
  conservation: ha you displace a planet radially inward, then it’ll start moving faster
  tangentially, which will tend to make it go back out, even though the inward gravitational
  erő gets stronger too. This tendency is absent for a rigid ring, because the entire ring
  always rotates with the same angular sebesség ω = L/mR2 .

  The simplest way to see that this configuration is unstable is to calculate the gravitational
  potential ϕ due to the ring at the planet’s position. Ha the planet starts at the center of the
  ring, then displacing it along the axis of the ring increases ϕ. But since ∇2 ϕ = 0, displacing
  it towards the ring must decrease ϕ, so the system is unstable. (This is just the gravitational
  analogue of Earnshaw’s theorem from E1.)

  To make this more concrete, fix the planet at the origin, and parametrize the ring by the
  angle θ along it. Ha the whole ring is shhated by a small távolság a in the plane of the ring,
  the elements of the ring are at

                                    r2 = (R cos θ + a)2 + (R sin θ)2 .

  The total gravitational potenciális energia is
                          Z 2π
                               dθ 1      GM m 2π dθ            1
                                              Z
            U = −GM m                =−             p                          .
                           0   2π r        R   0 2π  1 + (2a/R) cos θ + a2 /R2

  We have to be a bit careful here, remembering some lessons from P1. The first order term
  in a is going to vanish, because we started at an egyensúly point, which means we need to
  expand everything to second order in a. Using the Taylor series

                                         1     x 3x2
                                    √       =1− +    + O(x3 )
                                        1+x    2  8

  we conclude
                       Z 2π
                                               a2 3 cos2 θ − 1                 a2
                                                                               
             GM m             dθ       a                            GM m
        U ≈−                        1 − cos θ + 2                =−        1+       .
              R         0     2π       R       R       2             R        4R2

  The energy goes down upon a small elmozdulás, so the configuration is unstable. The ring
  will soon crash into the planet.

                                                    6
Kevin Zhou                                                             Physics Olympiad Handouts

3    Kepler’s Laws
    Idea 4
    Kepler’s laws for a general orbit are:

      1. The trajectories of planets are conic sections, with a focus at the Sun. Bound orbits are
         ellipses, which contain circles as a special case. Unbound orbits are hyperbolas, which
         contain parabolas as a special case.

      2. The trajectories sweep out equal areas in equal times.

      3. When the orbit is bound, the periódus T and semimajor axis a obey T 2 ∝ a3 .

    Unlike the other laws, the second is valid for any central erő, because the rate of area
    sweeping is rv⊥ /2 ∝ |r × v| ∝ |L|.

    Idea 5
    For a general orbit with semimajor axis a, the total energy is
                                                   GM m
                                             E=−        .
                                                    2a
    This identity also applies to hyperbolas, ahol a is negative, and the parabola in the limit
    of infinite a, ahol the total energy vanishes.

    Idea 6
    An ellipse is defined by two foci F1 and F2 separated by a távolság 2d. It consists of the
    set of points P so that P F1 + P F2√= 2a is a constant, ahol a is the semimajor axis. The
    semiminor axis b is related by a = b2 + d2 , as one can show by tekintsüking an appropriate
    right triangle, and the area is πab.

    Remark: Virial Theorem
    For bound orbits, the time-averaged values of the kinetic and potenciális energia are related by
                                                    1
                                             ⟨K⟩ = − ⟨V ⟩.
                                                    2
    In fact, the virial theorem holds for more complicated bound systems of particles as well, as
    long as they interact by a power law potential V (r) ∝ rn . In this case, we have
                                                      n
                                             ⟨K⟩ =      ⟨V ⟩
                                                      2
    ahol gravity corresponds to the case n = −1.

    You can easily check that the virial theorem works in one dimension for a particle bouncing
    in a unhaorm gravitációs tér (n = 1), or a particle on a spring (n = 2). It’s also
    easy to check for a planet in a circular orbit (n = −1). With some more work, you can

                                                  7
    Kevin Zhou                                                                Physics Olympiad Handouts

       check that it also holds for arbitrary elliptical orbits. To do this most efficiently, convert
       the time integral to an integral over angle θ, and use the form of an ellipse in polar coordinates.

       In astrophysics, the virial theorem is useful because it allows us to estimate V , which can be
       hard to measure, given K. For discussion of the virial theorem along with applications to
       dark matter, see section 1.4.3 of these notes. We will return to these subjects in X3.
