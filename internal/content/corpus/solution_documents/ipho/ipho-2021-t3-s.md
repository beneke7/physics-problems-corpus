---
id: solution-document-ipho-2021-t3-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2021/T3_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2021-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2021/T3_S.pdf."
---

S3-1
                             Theoretical Question 3 – Solution                             ENGLISH


Particles and Waves (10 points)
Part A.     Quantum particle in a box (1.4 points)

A.1 (0.4 points)
The width of the potential well (𝐿) should be equal to the half of the wavelength of the de Broglie
standing wave 𝜆dB = ℎ/𝑝, here ℎ is the Planck’s constant and 𝑝 is the momentum of the particle.
Thus 𝑝 = ℎ/𝜆dB = ℎ/(2𝐿), and the minimal possible energy of the particle is

                                                    𝑝2   ℎ2
                                          𝐸 min =      =     .
                                                    2𝑚 8𝑚𝐿 2

A.2 (0.6 points)
                                                                                               (𝑛)
The potential well should fit an integer number of the de Broglie half-wavelengths: 𝐿 = 12 𝜆dB     · 𝑛,
                                                                                              (𝑛)
𝑛 = 1, 2, . . . . Therefore, particle’s momentum, corresponding to the de Broglie wavelength 𝜆dB is

                                                     ℎ         ℎ𝑛
                                            𝑝𝑛 =     (𝑛)
                                                           =      ,
                                                    𝜆dB        2𝐿

and the corresponding energy is

                                       𝑝𝑛2   ℎ 2𝑛 2
                                𝐸𝑛 =       =        ,          𝑛 = 1, 2, 3, . . . .                 (1)
                                       2𝑚 8𝑚𝐿 2

A.3 (0.4 points)
The energy of the emitted photon, 𝐸 = ℎ𝑐/𝜆 (here 𝑐 is the speed of light and 𝜆 is the photon’s
wavelength) should be equal to the energy difference Δ𝐸 = 𝐸 2 − 𝐸 1 , therefore

                                                  ℎ𝑐      8𝑚𝑐𝐿 2
                                        𝜆21 =           =        .
                                                𝐸2 − 𝐸1     3ℎ

Part B.     Optical properties of molecules (2.1 points)

B.1 (0.8 points)
Taking into account the Pauli exclusion principle, each energy level 𝐸𝑛 is occupied by two electrons
with spins oriented in the opposite directions. As a results, 10 electrons fill the lowest 5 states,
and the absorption of the photon of the longest wavelength corresponds to the transition of one
electron from the occupied 𝐸 5 to the unoccupied 𝐸 6 energy state:
                                                ℎ𝑐
                                                   = 𝐸 6 − 𝐸 5,
                                                𝜆
                                                                                                      S3-2
                                Theoretical Question 3 – Solution                                     ENGLISH


where 𝐸 6 and 𝐸 5 can be found from Eq. 1, where 𝑚 is replaced with the electron mass 𝑚 e . Hence
we obtain:
                           𝑐 · 8𝑚 e𝐿 2   10.52 · 8 𝑚 e𝑐𝑙 2 882 𝑚 e𝑐𝑙 2
                      𝜆=               =                  =            ≈ 647 nm.
                          ℎ (62 − 52 )      11       ℎ      11 ℎ
This result correspond precisely to the experimental value the peak position of the Cy5 absorption
spectrum.

B.2 (0.4 points)
In the similar model for the Cy3 molecule, there are 8 electrons in the box of length 𝐿 = 8.5𝑙,
thus photon’s absorption corresponds to the 𝐸 4 → 𝐸 5 transition. Taking into account the result of
question B1, we obtain
                                          8.52 · 8 𝑚 e𝑐𝑙 2
                                  𝜆Cy3 = 2                 ≈ 518 nm,
                                         (5 − 42 ) ℎ
i. e. the absorption spectrum of the Cy3 molecule is shifted by Δ𝜆 ≈ 129 nm to the blue comparing
                                                            (exp)
to that of the Cy5 molecule. The experimental value is 𝜆Cy3 = 548 nm, so that our model catches
general properties of these dye molecules rather well.

B.3 (0.7 points)
Let us assume
                                                𝐾 = 𝑘𝜀 0𝛼 ℎ 𝛽 𝜆𝛾 𝑑 𝛿 .                                     (2)
The SI units of the relevant quantities are:
                   A2 · s 4             kg · m2
        [𝜀 0 ] =            ,   [ℎ] =           ,       [𝜆] = m,         [𝑑] = A · s · m,    [𝐾] = s−1 .
                   kg · m3                 s
By plugging these expressions into Eq. 2 we obtain a simple system of linear equations for the
unknown powers 𝛼, 𝛽, 𝛾, and 𝛿:

             2𝛼 + 𝛿 = 0,        −𝛼 + 𝛽 = 0,         4𝛼 − 𝛽 + 𝛿 = −1,          −3𝛼 + 2𝛽 + 𝛾 + 𝛿 = 0.

By solving this system we get:

                                   𝛼 = 𝛽 = −1,           𝛾 = −3,         𝛿 = 2,

so that the rate of spontaneous emission is
                                                      16𝜋 3 𝑑 2
                                                𝐾=                .                                        (3)
                                                        3 𝜀 0ℎ𝜆 3

B.4 (0.2 points)
By using the result of question B.2 and expressing transition dipole moment as 𝑑 = 2.4 𝑒𝑙, we obtain
from Eq. 3:
                                            3    𝜀 0ℎ
                                   𝜏Cy5 =                𝜆 3 ≈ 3.3 ns.
                                          16𝜋 2.42𝑙 2𝑒 2
                                              3
                                                                                                  S3-3
                                     Theoretical Question 3 – Solution                            ENGLISH


Part C.      Bose-Einstein condensation (1.5 points)

C.1 (0.4 points)
At temperature 𝑇 , the average kinetic energy of translational motion is 32 𝑘 B𝑇 . Equating this result
                                              √
to 𝑝 2 /(2𝑚), we obtain typical momentum 𝑝 = 3𝑚𝑘 B𝑇 and the de Broglie wavelength

                                                            ℎ     ℎ
                                                   𝜆dB =      =√        .
                                                            𝑝    3𝑚𝑘 B𝑇

C.2 (0.5 points)
The volume per particle 𝑉 /𝑁 is a good estimate for ℓ 3 . We obtain ℓ = 𝑛 −1/3 , with 𝑛 = 𝑁 /𝑉 and
equate ℓ = 𝜆dB to express 𝑇𝑐 = ℎ 2𝑛 2/3 /(3𝑚𝑘 B ).

C.3 (0.6 points)
Using the answer to the previous question, we express 𝑛𝑐 = (3𝑚𝑘 B𝑇𝑐 ) 3/2 /ℎ 3 . Equation of state for the
ideal gas gives 𝑛 0 = 𝑝/(𝑘 B𝑇 ). Numerical estimations yield 𝑛𝑐 ≈ 1.59 · 1018 m−3 and 𝑛 0 /𝑛𝑐 ≈ 1.5 · 107 .



Part D.      Three-beam optical lattices (5.0 points)

D.1 (1.4 points)
We sum the three electric fields (𝑧 components)
                                                             3
                                                            ∑︁                    
                                          𝐸 (®
                                             𝑟 , 𝑡) = 𝐸 0         cos 𝑘®𝑖 · 𝑟® − 𝜔𝑡 ,                   (4)
                                                            𝑖=1

and square the result

                                     ∑︁ 3
                                      3 ∑︁                                      
                𝐸 2 (®
                     𝑟 , 𝑡) = 𝐸 02             cos 𝑘®𝑖 · 𝑟® − 𝜔𝑡 cos 𝑘®𝑗 · 𝑟® − 𝜔𝑡
                                     𝑖=1 𝑗=1
                                     3 ∑︁
                                        3 n
                                                                                                        (5)
                               𝐸 02 ∑︁             h         i        h                  io
                           =                    cos 𝑘®𝑖 − 𝑘®𝑗 · 𝑟® + cos 𝑘®𝑖 + 𝑘®𝑗 · 𝑟® − 2𝜔𝑡 .
                               2 𝑖=1 𝑗=1

Time averaging gives
                                                       𝐸 02 3
                                                           ∑︁ 3
                                                              ∑︁    h         i
                                     ⟨𝐸 2 (®
                                           𝑟 , 𝑡)⟩ =             cos 𝑘®𝑖 − 𝑘®𝑗 · 𝑟® ,                   (6)
                                                       2 𝑖=1 𝑗=1
                                                                                                        S3-4
                                   Theoretical Question 3 – Solution                                   ENGLISH


we analyse the 9 terms and simplify to
                                                               3
                                                                                !
                                                            3 ∑︁             
                                     ⟨𝐸 2 (®
                                           𝑟 , 𝑡)⟩ = 𝐸 02    +    cos 𝑏®𝑗 · 𝑟® .                               (7)
                                                            2 𝑗=1

Here
                           𝑏®1 = 𝑘®2 − 𝑘®3,    𝑏®2 = 𝑘®3 − 𝑘®1,       𝑏®3 = 𝑘®1 − 𝑘®2,
or in terms of the Levi-Civita symbol, 𝑏®𝑘 = 𝜀𝑖 𝑗𝑘 (𝑘®𝑖 −𝑘®𝑗 ). Incidentally, they are known as the reciprocal
lattice vectors.

D.2 (0.5 points)
Argument: Observe that rotation by 60◦ maps the three vectors 𝑏®1,2,3 into the relabelled triplet of
 ®
−𝑏’s.

D.3 (1.2 points)
We find
                               (
                                           √              √ !             √ !)
                                   3                  3𝑘𝑥 𝑘𝑦 3        3𝑘𝑥 𝑘𝑦 3
           𝑉 (𝑥, 𝑦) = −𝛼𝐸 02         + cos 𝑘𝑦 3 + cos    +      + cos    −       ,                             (8)
                                   2                   2    2          2    2

and deduce                                                                    
                                                                 5         3𝑘𝑥
                                        𝑉𝑋 (𝑥) = −𝛼𝐸 02            + 2 cos       .                             (9)
                                                                 2          2
The potential has a simple cosine form, and the origin in an obvious minimum. Its replica appear at
multiples of Δ𝑥 = 4𝜋/(3𝑘). In the midpoint between any two minima, e.g. at 𝑥 = Δ𝑥/2 = 2𝜋/(3𝑘),
the function 𝑉𝑋 (𝑥) has its maxima.
    Concerning the behaviour along the 𝑦 axis, we have
                                                                     √
                                                          
                                   2 3
                      𝑉𝑌 (𝑦) = −𝛼𝐸 0     + cos 2𝜑 + 2 cos 𝜑 ,    𝜑 = 3𝑘𝑦/2.                    (10)
                                       2

Looking for the extrema, we find the equation

                                                  sin 2𝜑 + sin 𝜑 = 0.                                         (11)

   ◦ 𝜑 = 0 (corresponding to 𝑦 = 0) is the ‘deep’ minimum – the lattice site;

   ◦ 𝜑 = 𝜋 (corresponding to 𝑦 = √2𝜋 ) is the ‘shallow’ minimum (later shown to be a saddle point
                                   3𝑘
     of 𝑉 (𝑥, 𝑦));
                                                                     4𝜋
   ◦ 𝜑 = 2𝜋/3 and 𝜑 = 4𝜋/3 (corresponding to 𝑦 =                     √   and 𝑦 = √8𝜋 , respectively) are maxima.
                                                                    3 3𝑘         3 3𝑘
                                                                                               S3-5
                               Theoretical Question 3 – Solution                              ENGLISH


D.4 (0.8 points)
                                                                                              √
We review the minima found in the previous question and eliminate the saddle point at (0, 2𝜋/3 3𝑘).
The actual minima of the 2D potential landscape 𝑉 (𝑥, 𝑦) are:

   ◦ (0, 0) – at the origin;

   ◦ (4𝜋/(3𝑘), 0) – nearest to the origin in the positive direction along the 𝑥 axis. On the grounds
     of symmetry we argue that there are six equivalent nearest minima in the directions 0◦ , ±60◦ ,
     ±120◦ , and 180◦ with respect to the 𝑥 axis.

   Distance between nearest minima (the lattice constant) 𝑎 = 4𝜋/(3𝑘). Given that the laser wave-
length is 𝜆las = 2𝜋/𝑘, we have 𝑎 = Δ𝑥 = 2𝜆las /3, thus 𝑎/𝜆las = 2/3.

D.5 (1.1 points)
The atom’s core electrons (all but the one promoted to to a state with a high principal quantum
number 𝑛) shield the electric field of the nucleus so that the effective potential for the outer electron
resembles that of a hydrogen atom. The attractive force acting on that electron, 𝐹 = 𝑒 2 /(4𝜋𝜀 0𝑟 2 ),
gives rise to its centripetal acceleration 𝑎 = 𝑣 2 /𝑟 . Equating 𝐹 = 𝑚 e𝑎 and using the expression
for the angular momentum 𝑚 e𝑣𝑟 = 𝑛ℏ to eliminate the velocity, we find the quantum number 𝑛
corresponding to the orbit with the radius 𝑟 = 𝜆las :
                                                √︄
                                               𝑒 𝑚 e𝜆
                                           𝑛=            ≈ 85.                                        (12)
                                               ℏ 4𝜋𝜀 0
