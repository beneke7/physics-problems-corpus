---
id: solution-document-spot-2022-s
source: spot
kind: official_examiner_report
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2022_S.pdf
extraction_method: pdftotext-layout
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2022_S.pdf."
---

16 March 2022, 1:00pm–5:00pm




                   2022 Selection Test
     for the Asian and International Physics Olympiads



1. This is a four-hour test. Attempt all questions. The maximum total score is 90;
   marks allocated for each question part are indicated in square brackets.

2. Check that there are a total of 15 printed pages (including this cover page). The
   last page contains a table of physical constants that you may refer to and use.

3. Begin your answer for each question on a fresh sheet of paper, and present your
   working and answers clearly. Your answer sheets should be sorted according to the
   order of the questions.

4. Write your name on the top right hand corner of every answer sheet you submit.

5. Please complete and sign the declaration on page 2, which should be stapled
   together and submitted with your answer sheets.

6. You may use a standard (non-programmable) scientific calculator in accordance with
   the statutes of the International Physics Olympiad.

7. No books or documents relevant to the test may be brought into the examination
   room.




                                   Page 1 of 15


                                                               16 March 2022, 1:00pm–5:00pm

Declaration

I declare that I will be fully committed to the training for and participation in the Asian
Physics Olympiad and/or the International Physics Olympiad if selected. I will check first with
the MOE coordinator before taking on additional commitments not listed below.
   Potential limitations to my commitment in the period from now to end-July 2022 are de-
scribed exhaustively in the box below, such as other academic competitions, CCA commit-
ments (school-related or otherwise), travel plans, etc.




Name and signature:




      Question:     1      2      3      4       5      6      7      8      9    Total
      Points:       5      7      12     13     13      8     11      9     12      90
      Score:




                                         Page 2 of 15


                                                                16 March 2022, 1:00pm–5:00pm

1. Suppose that masses m1 and m2 separated by a distance r have an interaction potential
   energy given by

                           κm1 m2
                     U=           , where κ > 0 and n is a positive integer.
                             rn
  In this problem, consider a mass m confined to move along the line segment of length 2d
  between two identical particles of mass M . Assume that the two masses M are fixed in
  position.


                       M                        m                       M
                                    d                       d

   (a) State, with brief reasons, whether the interaction is an attractive or a repulsive force.      [1]
   (b) Determine, in terms of the symbols introduced, the angular frequency ω of small os-            [4]
       cillations of m around its equilibrium position (i.e. for displacement x ≪ d).


    Solution: Adapted from Problem 2.04 of [2].
    (a)
    1 - repulsive due to sign of κ and force being related to the potential gradient. (Note
    that the combined potential energy is a minimum at the equilibrium position. However,
    it would be a maximum for κ < 0 giving an unstable equilibrium if so.)
    (b)
    1 - general expression for potential energy for displacement x
    1 - Taylor expansion of PE to quadratic order in x
    1 - identifying the equivalent “spring constant”
                                              p
    1 - deriving the right expression for ω = 2κM n(n + 1)/dn+2
    [alternative approach using force and acceleration also credited]


                                                                                             Q1 total: 5


2. Consider a yo-yo made up of two uniform solid disks of radius R and each with mass M ,
   connected rigidly by a light cylindrical axle of radius r < R, such that the disks and axle
   all share a common axis. A thin light string is wound tightly around the axle.
  The free end of the string is held fixed and the yo-yo is released from rest. Assume that the
  string stays vertical as it is unwound from the axle. Let g be the gravitational acceleration.
   (a) By integrating over thin circular rings, show that the moment of inertia I of the yo-yo        [2]
       about its central axis is given by I = M R2 .
   (b) Determine, in terms of the symbols introduced, the downward acceleration a of the              [4]
       yo-yo when it is released from rest.
   (c) Determine, in terms of the symbols introduced, the tension T in the string when the            [1]
       yo-yo is released from rest.




                                        Page 3 of 15


                                                               16 March 2022, 1:00pm–5:00pm


    Solution: Adapted from Problem 2.11 of [2].
    (a)
    1 - correct expression for contribution of a ring of infinitesimal thickness
    1 - integrating over disk
    (b)
    1 - no-slip condition v = rω
    1 - expression for (constant) total energy (GPE + translational KE + rotational KE)
    1 - differentiating energy expression wrt time and setting to zero
                                                     R2
    1 - deriving the right expression for a = g/(1 + 2r 2)
    [alternative approach using force and torque also credited for this part and the next]
    (c)
    1 - use T = 2M (g − a)


                                                                                             Q2 total: 7


3. In this problem, we consider a minimal mechanical model of a bicycle moving along a
   horizontal surface.
  Model the wheels as two uniform solid disks of radius r, each of mass m and moment of
  inertia I about their centres. The wheels can rotate around their central axes and these
  axes are connected by a rigid bar of length L and mass M . This bar represents the bicycle
  frame and rider, and we assume the bar is always horizontal with the centre of mass of this
  bar located a distance x from the rear wheel (and thus a distance L − x from the front
  wheel).
  The rider exerts a pure torque τ on the rear wheel. The entire bicycle has linear acceleration
  a in the forward direction. Assume that the wheels do not slip.

                                                                  accelerating forward




                             r                                                r
                                                L

                   τ




  The free-body diagram of the bar (representing the frame and rider) is shown below. N1
  and T1 are the vertical and horizontal forces respectively exerted by the rear wheel on the
  bar, while N2 and T2 are exerted by the front wheel on the bar.




                                        Page 4 of 15


                                                              16 March 2022, 1:00pm–5:00pm

                 N1
                                                                        N2
                                  T1                          T2
                              x                         L−x




                                           Mg

(a) Write down an expression for acceleration a in terms of T1 , T2 and M .                       [1]
(b) Write down an expression for N2 in terms of N1 and M g.                                       [1]
(c) Draw separate free-body diagrams for each of the rear and front wheels. Label the             [3]
    normal contact and frictional contact forces with the ground as R1 = N1 + mg and f1
    respectively for the rear wheel, and R2 = N2 + mg and f2 for the front wheel.
(d) Determine an expression for a in terms of τ, r, m, M and I.                                   [4]
(e) Suppose the frictional forces are maximal, i.e. f1,2 = µR1,2 where µ is the coefficient       [3]
    of static friction (assumed to be the same for both wheels). Determine an expression
    for the ratio R1 /R2 in terms of r, m, M and I and show that R1 /R2 > 1.


 Solution: Adapted from [1].
 (a)
                                     −T2
 1 - horizontal forces on bar, a = T1M
 (b)
 1 - vertical forces on bar, N2 = M g − N1
 (c)
 1 - correct horizontal forces from bar (T1 , T2 )
 1 - correct vertical forces (N1 , R1 , mg and so on)
 1 - correct directions for frictional forces
 (d)
 1 - no slipping, a = rα
 1 - relate torque and angular acceleration for front wheel
 1 - relate torque and angular acceleration for rear wheel
 1 - find linear acceleration for system of wheels & bar, a = τ /(M r + 2mr + 2I r )
 common mistakes include sign errors and confusing a, α
 [alternative approach is to differentiate energy since this is constant over time]
 (e)
 1 - use f1 /f2 = R1 /R2
 1 - use results from earlier part
                            2
         R1
 1 - get R 2
             = 1 + (M +2m)r
                       I      > 1. Note that with these assumptions, the centre of gravity
 has to be closer to the wheel to which the powering torque is applied.


                                                                                        Q3 total: 12




                                       Page 5 of 15


                                                               16 March 2022, 1:00pm–5:00pm

4. Starting from Maxwell’s equations for electromagnetism, we can identify the energy density
   (i.e. energy per unit volume of space) in an electromagnetic field as
                                        ϵ0 ⃗ ⃗   1 ⃗ ⃗
                                   u=      E·E+     B·B ,
                                        2       2µ0
  where ϵ0 is the vacuum electric permittivity, µ0 is the vacuum magnetic permeability, and
   ⃗
  E, B⃗ are the electric and magnetic field vectors respectively.
  Poynting showed that the energy flow S  ⃗ corresponding to changes in this energy density u
  is given by a vector cross product,
                                        ⃗ = ϵ0 c2 E
                                        S         ⃗ ×B
                                                     ⃗ ,

  which we now term the Poynting vector. In this expression, c is the speed of light in vacuum.
                  ⃗ over a closed surface gives the total energy flow in or out of the enclosed
  The integral of S
  volume.
   (a) Consider a propagating light wave with wavelength λ, given by
                                (
                                  ⃗    t) = E0 cos 2π

                                  E(x,               λ (x − ct) ŷ
                                  ⃗    t) = Ec0 cos 2π

                                  B(x,               λ (x − ct) ẑ

       where E0 is the amplitude of the electric field and ŷ, ẑ are the unit vectors in the
       y-direction and z-direction respectively.
                                                                           ⃗ · E.
         i. Determine an expression for ⟨E 2 ⟩, the time-averaged value of E   ⃗                   [1]
                                     √
        ii. Using the relation c = 1/ ϵ0 µ0 , show that the time-averaged value of the energy      [2]
            density u is given by
                                               ⟨u⟩ = ϵ0 ⟨E 2 ⟩ .
                                    ⃗ and show that the time-averaged magnitude S = |S|
        iii. State the direction of S                                                ⃗ is          [2]
             given by
                                              ⟨S⟩ = c⟨u⟩ .
                                                                    ⃗ as the energy flow due to
            Note that this is consistent with the interpretation of S
            the propagation of light.
   (b) Now consider a cylindrical section of conducting wire, with resistivity ρ, length L and
       radius r. Let the current through the wire be I.
          i. The magnetic field pattern is concentric around the wire. Write down, in terms        [1]
             of the symbols provided, the expression for B = |B| ⃗ at the curved surface of the
             wire.
         ii. Determine an expression for the potential difference V between the two ends of        [2]
             the wire in terms of the symbols provided.
                                                                                           ⃗ and
        iii. Assume that the electric field in the wire is uniform. State the direction of S       [3]
             determine an expression for S = | ⃗S| at the curved surface of the wire.
        iv. Hence determine an expression for the power P to the wire.                             [2]


    Solution: Poynting’s original paper is [3]. Feynman’s discussion of this is well worth
    a careful read, https://www.feynmanlectures.caltech.edu/II_27.html
    (a)(i)
    1 - ⟨E 2 ⟩ = 21 E02



                                        Page 6 of 15


                                                                   16 March 2022, 1:00pm–5:00pm


    (a)(ii)
    1 - obtaining ⟨u⟩ = 21 ϵ0 ⟨E 2 ⟩ + 12 µ10 ⟨B 2 ⟩
    1 - substituting µ10 ⟨B 2 ⟩ = ϵ0 ⟨E 2 ⟩ to get answer
    (a)(iii)
    1 - in the (positive) x-direction
                                    ⃗ and comparing with previous part to get answer
    1 - starting with definition of S
    (b)(i)
    1 - B = µ0 I/(2πr)
    (b)(ii)
    1 - resistance R = ρL/(πr2 )
    1 - V = IR = IρL/(πr2 )
    (b)(iii)
    1 - use E = V /L
    1-S ⃗ points radially inwards
    1 - remembering that ϵ0 c2 = 1/µ0 , get S = I 2 ρ/(2π 2 r3 )
    (b)(iv)
    1 - curved surface area 2πrL
    1 - multiply with S to get P = I 2 ρL/(πr2 ) in agreement with usual formula


                                                                                            Q4 total: 13


5. Two thin rigid circular loops share a common axis as shown. We can ignore the effects of
   gravity in this question.
  The larger loop is a conducting wire of radius R. This wire carries a constant current I,
  and slides up the axis at constant speed v ≪ c so that the distance z between the two loops
  increases linearly with time t.
  The other loop is a smaller insulating ring of radius r ≪ R, with a uniform positive linear
  charge density of +λ and a uniform linear mass density of ρ. The smaller loop can rotate
  freely around the central axis but cannot move up and down the axis.

                      top view                                side (perspective) view




                                    R
                                                       z                                I
                            r




                                             I




                                           Page 7 of 15


                                                                  16 March 2022, 1:00pm–5:00pm

At time t = 0, the loops are co-planar (i.e. z = 0) and the smaller loop is not rotating (i.e.
angular speed ω = 0).
(a) Briefly explain why the smaller loop starts spinning and whether the orientation of             [2]
    this rotation is in the same or opposite sense as the current I in the larger loop.
(b) The current I in the larger loop produces a magnetic field. Using the Biot-Savart               [3]
    law, show that at the centre of the smaller loop, the magnetic flux density due to this
    current is directed upwards along the axis and has a z-dependence given by
                                                   µ0 IR2
                                    BI (z) =                      ,                        (1)
                                               2 (z 2 + R2 )3/2
     where µ0 is the permeability of free space.
(c) The rotation of the smaller loop also contributes to the magnetic flux density at the           [3]
    centre of the smaller loop. Determine an expression, in terms of µ0 , λ, r and the angular
    speed ω, for this rotational contribution Bλ (ω).
(d) Assume that the magnetic field within the entire area of the smaller loop is approxi-           [5]
    mately constant and is the same as the field at the centre of the loop, such that the
    resultant magnetic flux density is B(z, ω) = BI (z) + Bλ (ω).
    Determine the angular speed ω∞ at long times t → ∞, in terms of µ0 , I, λ, ρ, r and R.


  Solution: Adapted from Question A1 of USAPhO 2020.
  (a)
  1 - Faraday’s law and Lenz’s law, induced e.m.f. and current to oppose change in flux
  1 - positive charge spins in same orientation as current I, since linked flux decreases as
  the larger loop moves away

  (b) derivation at http://hyperphysics.phy-astr.gsu.edu/hbase/magnetic/curloo.
  html#c4
  1 - contribution to B from infinitesimal element
  1 - resolving distance and component correctly
  1 - no other mistakes in derivation

  (c)
  1 - recognise that current due to rotation is charge x frequency = λ(2πr) · (ω/2π)
  1 - use previous equation with z = 0 and r in place of R
  1 - derive correct expression Bλ (ω) = 21 µ0 λω

  (d)
  1 - use Faraday’s law to relate integral of Etangential around loop to dB/dt
  1 - link torque due to qE to angular acceleration dω/dt
  1 - solve for ω using the first-order differential equation dω      λ dB
                                                               dt = − 2ρ dt
  1 - use correct boundary conditions for B at t = 0 and t → ∞
                                                         µ0 λI
  1 - rearrange to get correct expression for ω∞ = 4ρR+µ       2
                                                             0λ R




                                                                                          Q5 total: 13




                                      Page 8 of 15


                                                                16 March 2022, 1:00pm–5:00pm

6. For a certain circuit component shown below,




  the current I is given by

                                               −eV0          eV
                              I = I0 exp                exp     −1 ,
                                                kT           kT

  where I0 = 25 µA and V0 = 1.0 V, e is the elementary charge, k is the Boltzmann constant,
  T is the absolute (Kelvin) temperature, and V = VL −VR is the potential difference (positive
  V when VL > VR corresponds to current flowing from left to right).
  Throughout this problem, assume low temperature, i.e. kT ≪ eV0 .
   (a) Show some working and sketch a graph of I/I0 against V /V0 .                              [2]
   (b) In the circuit below, a sinusoidal input voltage is applied across VAB = VA − VB as
       shown in the graph. The resistance R = 5.0 Ω.




                                           Page 9 of 15


                                                              16 March 2022, 1:00pm–5:00pm

         i. Show some working and sketch VCD = VC −VD for the same time interval as shown        [3]
            for VAB . Assume that VAB has been running for a long time.
        ii. A capacitor C = 50 mF is now added to the circuit, as shown below.                   [3]




           Assume that the same sinusoidal input voltage VAB is applied as shown in the
           graph, and has been running for a long time. Show some working and sketch the
           graph for VCD as a function of time with the capacitor added.


    Solution: Adapted from Question A2 of USAPhO 2018.
    (a)
    1 - qualitatively correct shape
    1 - graph turns at approximately V = V0
    (b)(i)
    1 - idea of rectification
    1 - no current for |VAB | < 2V0
    1 - peak voltage of 3V
    (b)(ii)
    1 - idea of smoothing
    1 - calculate RC time constant
    1 - calculate and reflect approximate rate of discharge


                                                                                        Q6 total: 8


7. A vacuum system consists of a chamber of constant volume V connected to a pump mech-
   anism in the form of a cylinder with a piston that moves left and right. As the piston
   moves, the minimum volume in the pump cylinder (to the right of the piston) is V0 , and
   the maximum volume is V0 + ∆V . Assume that ∆V ≪ V .




  The cylinder has two valves. The inlet valve opens when the pressure inside the cylinder
  is lower than the pressure in the chamber, but closes when the piston moves to the right.


                                       Page 10 of 15


                                                              16 March 2022, 1:00pm–5:00pm

The outlet valve opens when the pressure inside the cylinder is greater than atmospheric
pressure Pa , and closes when the piston moves to the left.
A motor drives the oscillatory motion of the piston. Each such complete pumping cycle
takes a short time ∆t. The piston moves at such a rate that heat is not conducted in or out
of the gas contained in the cylinder during the pumping cycle. Assume that ∆t is a very
small quantity, but that ∆V /∆t ≡ α is finite.
The gas in the chamber is ideal monatomic and remains at a fixed temperature of Ta . At
time t = 0, the pressure inside the chamber is Pa . Start with the assumption that V0 = 0
with the piston all the way to the right. Assume that there are no leaks in the system.
(a) State, for an ideal monatomic gas, the value of the adiabatic gas constant                [1]
                                                 Cp
                                            γ=      ,
                                                 Cv
    where Cp is the heat capacity at constant pressure and Cv is the heat capacity at
    constant volume.
(b) Determine an expression for the chamber pressure P (t) at a later time t, and show        [3]
    that in the limit where ∆V /V vanishes, the pressure can be written as

                                    P (t) = Pa exp (−t/τ1 ) ,

    where τ1 is expressed in terms of variables introduced in the problem statement.
    Hint: You may use the following mathematical definition of Euler’s number,

                                       e = lim (1 + x)1/x
                                           x→0

(c) Determine an expression for the temperature Tout (t) of the gas as it is emitted from     [4]
    the pump cylinder into the atmosphere, and show that it can be written as

                                    Tout (t) = Ta exp (t/τ2 ) ,

    where τ2 is expressed in terms of variables introduced in the problem statement.
(d) Now assume that 0 < V0 < ∆V ≪ V . Determine an expression for the minimum                 [3]
    possible pressure Pmin that is achievable in the chamber. You may express your answer
    in terms of Pa , V0 and ∆V .


 Solution: Adapted from Question A3 of USAPhO 2018.
 (a)
 1 - 5/3 (by considering additional work done needed at constant pressure)
 (b)
                                  t/∆t
                             V
 1 - obtaining P (t) = Pa V +∆V
 1 - replacing ∆t with α and rewriting in terms of ∆V /V
 1 - using hint and obtaining τ1 = V /α
 (c)
 1 - idea of adiabatic compression until outlet valve opens when P (t) > Pa
 1 - use of pV γ = const.
 1 - replacing V with T using pV /T = const.
 1 - obtaining τ2 = 5V /2α



                                    Page 11 of 15


                                                               16 March 2022, 1:00pm–5:00pm


    (d)
    1 - idea that the gas has volume V0 and pressure Pa after outlet valve closes
    1 - idea of adiabatic expansion to lowest pressure Pmin when pump is no longer effective
    (inlet valve does not open)
                                                         −5/3
    1 - use of pV γ = const., to get Pmin = Pa 1 + ∆VV0



                                                                                            Q7 total: 11


8. A photon with wavelength λ scatters at an angle θ off an electron of mass m initially at
   rest, as shown in Fig. 1. Denote the wavelength of the scattered photon as λ′ .




                         Figure 1: By JabberWok, CC BY-SA 3.0
               https://commons.wikimedia.org/w/index.php?curid=2078004

   (a) Write down a relativistic expression for the electron energy E after the scattering event,     [1]
       in terms of its rest-mass m, the magnitude P of its momentum, and the speed of light
       in vacuum c.
   (b) By considering momentum conservation, show that                                                [3]

                               2    2   1      1     2 cos θ
                              P =h         +       −           ,
                                        λ2 (λ′ )2      λλ′

       where h is the Planck constant.
   (c) By also considering energy conservation, show that                                             [4]

                                       λ′ − λ = λC (1 − cos θ) ,

       where λC is known as the Compton wavelength. Determine an expression for λC in
       terms of fundamental constants.
   (d) Compton’s original experiment was based on X-rays bombarding a graphite target.                [1]
       He found that some X-rays experienced no wavelength shift despite being scattered
       through large angles. Suggest an explanation for this.


    Solution: A comprehensive discussion can be found at https://en.wikipedia.org/
    wiki/Compton_scattering
    (a)                                                √
    1 - from relativistic momentum-energy relation, E = P 2 c2 + m2 c4
    (b)
    1 - vector triangle for momentum conservation




                                         Page 12 of 15


                                                               16 March 2022, 1:00pm–5:00pm


    1 - using cosine rule or equivalent
    1 - using h/λ for photon momentum and obtaining answer
    (c)                        √
    1 - hc/λ + mc2 = hc/λ′ + P 2 c2 + m2 c4 from energy conservation
    1 - using previous expression for P 2 to simplify
    1 - showing properly how terms cancel to get final expression
    1 - λC = h/mc
    (d)
    1 - electrons not ejected, effective mass much greater than m so effective Compton
    wavelength much shorter (and unobservable).


                                                                                              Q8 total: 9


9. Quantum particles of integer spin are known as bosons. At low temperatures, a macroscopic
   number of bosons occupy the lowest energy quantum state, resulting in a collective quantum
   phase known as a Bose-Einstein condensate (BEC). The experimental achievement of BEC
   was honoured by the 2001 Nobel Prize in Physics.
  In this question, we will estimate the critical temperature for BEC based on comparability
  of the de Broglie wavelength and the particle separation.
   (a) By considering the average kinetic energy of translational motion, determine an expres-         [4]
       sion for the typical de Broglie wavelength λ of gas particles of mass m at temperature
       T . Use the symbol h for the Planck constant and k for the Boltzmann constant.
   (b) Determine the typical linear separation d of gas particles as a function of mass density        [3]
       ρ. You may use symbols introduced in the previous part.
   (c) Hence determine an expression for the critical temperature Tc for Bose-Einstein con-            [2]
       densation. You may use symbols introduced in the previous parts.
   (d) For a gas of Rubidium-87 atoms, a typical BEC temperature is Tc = 100 nK. For such a            [3]
       gas, calculate a numerical value for the ratio ρc /ρ0 , where ρc is the corresponding mass
       density for BEC and ρ0 is the density for a classical ideal gas at standard temperature
       and pressure T0 = 300 K, p0 = 105 Pa.


    Solution: This question is adapted from IPhO 2021 (Part C of T3).
    (a)
    1 - average particle energy ϵ = 23 kT
    1 - in terms of momentum, ϵ = p2 /2m
    1 - de Broglie
               √ wavelength λ = h/p
    1 - λ = h/ 3mkT
    (b)
    1 - d = (V /N )1/3 in terms of number of particles and volume
    1 - relate mass density ρ = N m/V
    1 - d = (m/ρ)1/3
    (c)
    1 - equate previous expressions
                       h2 ρ2/3
    1 - obtaining Tc = 3km 5/3 in terms of introduced symbols (i.e. should not have N or V )




                                        Page 13 of 15


                                                                    16 March 2022, 1:00pm–5:00pm


       (d)
       1 - rearrange from previous part, ρc = (3kTc )3/2 m5/2 /h3
       1 - get ρ0 = mp0 /kT0 from ideal gas equation p0 V0 = N kT0
       1 - substitute values correctly to get ρc /ρ0 = 6.6 × 10−8


                                                                                                  Q9 total: 12



References
[1]   Paulo Simeão Carvalho and Adriano Sampaio e Sousa. “Rotation in secondary school:
      teaching the effects of frictional force”. In: Physics Education 40.3 (Mar. 2005), pp. 257–
      265. doi: 10 . 1088 / 0031 - 9120 / 40 / 3 / 007. url: https : / / doi . org / 10 . 1088 / 0031 -
      9120/40/3/007.
[2]   Jay L. Nadeau, Ben Sauerwine, and Leila Cohen. Truly Tricky Graduate Physics Problems
      With Solutions. Bitingduck Press, 2014. isbn: 9781938463174.
[3]   J. H. Poynting and John William Strutt. “XV. On the transfer of energy in the electro-
      magnetic field”. In: Philosophical Transactions of the Royal Society of London 175 (1884),
      pp. 343–361. doi: 10.1098/rstl.1884.0016. eprint: https://royalsocietypublishing.
      org/doi/pdf/10.1098/rstl.1884.0016. url: https://royalsocietypublishing.org/
      doi/abs/10.1098/rstl.1884.0016.




                                            Page 14 of 15


                16 March 2022, 1:00pm–5:00pm




Page 15 of 15
