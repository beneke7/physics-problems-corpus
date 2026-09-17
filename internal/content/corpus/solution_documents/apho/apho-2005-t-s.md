---
id: solution-document-apho-2005-t-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2005_T_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [apho-2005-t-q1, apho-2005-t-q2, apho-2005-t-q3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2005_T_S.pdf."
---

THEORETICAL COMPETITION

                                  Questions and Solutions             FINAL VERSION


Question 1
1A. SPRING CYLINDER WITH MASSIVE PISTON (5 points)

Consider n=2 moles of ideal Helium gas at a pressure
P0, volume V0 and temperature T0 = 300 K placed in a
vertical cylindrical container (see Figure 1.1). A
moveable frictionless horizontal piston of mass m =
10 kg (assume g = 9.8 m/s2) and cross section A = 500
cm2 compresses the gas leaving the upper section of
the container void. There is a vertical spring attached
to the piston and the upper wall of the container.
Disregard any gas leakage through their surface
contact, and neglect the specific thermal capacities of
the container, piston and spring. Initially the system is
in equilibrium and the spring is unstretched. Neglect
the spring’s mass.                                               Figure 1.1
   a. Calculate the frequency f of small oscillation
      of the piston, when it is slightly displaced from equilibrium position.
      (2 points)
   b. Then the piston is pushed down until the gas volume is halved, and released with
      zero velocity. calculate the value(s) of the gas volume when the piston speed is

                                                                                (3 points)


Let the spring constant k = mgA/V0. All the processes in gas are adiabatic. Gas constant
R = 8.314 JK-1mol-1. For mono-atomic gas (Helium) use Laplace constant γ = 5/3.




                                            1/30
                            THEORETICAL COMPETITION

                                 Questions and Solutions             FINAL VERSION


Solution:

   a) Gas Volume

At the initial condition, the system is in equilibrium and the spring is unstreched;
therefore
                                           or                                          (1)
The initial volume of gas

                                                                                       (2)


The work done by the gas from ½ V0 to V




                                                                                       (3)
Equation (3) can also be obtained by calculating the internal energy change (without
integration)

                                                                                       (4)

where       is the temperature when the gas volume is V0/2.

The change of the gravitational potential energy



                                                                                       (5)




                                           2/30
                           THEORETICAL COMPETITION

                                Questions and Solutions   FINAL VERSION

The change of the potential energy of the spring




                                                                     (6)




The kinetic energy
                                                                     (7)
By conservation of energy, we have

                                                                     (8)




                                                                     (9)



                                                                    (10)


Let s = V/V0, so the above equation becomes




                                                                    (11)




                                          3/30
                          THEORETICAL COMPETITION

                                Questions and Solutions                 FINAL VERSION

With γ = 5/3 we get




                                                                                  (12)
Solving equation (12) numerically, we get

                      s1 = 0.74 and s2 = 1.30

Therefore                                     or V2 = 1.30V0=3.31 m3.




                                            4/30
                            THEORETICAL COMPETITION

                                  Questions and Solutions           FINAL VERSION

b) Small Oscillation (2 points)

The equation of motion when the piston is displaced by x from the equilibrium position
is

                                                                                   (13)

P is the gas pressure


                                                                                   (14)



Since           then we have                       , therefore




                                                                                   (15)




The frequency of the small oscillation is


                                                                                   (16)


Numerically f = 0.114 Hz.




                                            5/30
                          THEORETICAL COMPETITION

                                  Questions and Solutions   FINAL VERSION


[Marking Scheme]             THEORETICAL Question 1A

 Spring Cylinder with Massive Piston


  a. (3.0)     0.2     Initial Pressure P0 = mg/A
               0.2     Initial volume V0 = nRT0A/mg
               0.3
                       Work done by gas

               0.3
                       Gravitational Potential Energy

               0.3     Spring Potential Energy



               0.3     Conservation of energy

              0.9(*)   Equation

               0.3     V1= 0.74 V0 or V2 = 1.30 V0
               0.2     V1= 1.88 m3 or V2 = 3.31 m3

  b (2.0)      0.5     Force Equation
               0.3
                       Pressure

               0.2
                       Approximation

               0.5
                       Equation

               0.3


                0.2     f = 0.114 Hz
(*) Propagation errors reduce marks halved.




                                           6/30
                            THEORETICAL COMPETITION

                                 Questions and Solutions                FINAL VERSION

1B. THE PARAMETRIC SWING (5 points)

A child builds up the motion of a swing by standing and squatting. The trajectory
followed by the center of mass of the child is illustrated in Fig. 1.2. Let ru be the radial
distance from the swing pivot to the child’s center of mass when the child is standing,
while rd is the radial distance from the swing pivot to the child’s center of mass when the
child is squatting. Let the ratio of rd to ru be 21/10 = 1.072, that is the child moves its
center of mass by roughly 7% compared to its average radial distance from the swing
pivot.

To keep the analysis simple it is assumed that the swing be mass-less, the swing
amplitude is sufficiently small and that the mass of the child resides at its center of mass.
It is also assumed that the transitions from squatting to standing (the A to B and the E to
F transitions) are fast compared to the swing cycle and can be taken to be instantaneous.
It is similarly assumed that the squatting transitions (the C to D and the G to H
transitions) can also be regarded as occurring instantaneously.




               ru
                                            rd




                                                                         Squating
                                                        Standing         g



                                           Figure 1.2

   How many cycles of this maneuver does it take for the child to build up the amplitude
   (or the maximum angular velocity) of the swing by a factor of two?




                                            7/30
                           THEORETICAL COMPETITION

                                Questions and Solutions               FINAL VERSION

Solution 1 (5 points)
   (1) The conservation of angular momentum (CAM) from A to B, C to D, E to F and
       G to H.

                                                                                      (1)

      m = mass of the child
      r = distance of the child’s center of mass to the swing’s pivot P
        = the swing’s angular velocity with respect to P

      A to B:
      Let and are the angular velocity at point A and B respectively, then
      according to CAM,

                                                                                      (2)

      so that,


                                                                                      (3)

      hence each time the swing repeat moving upward(A to B or E to F) its angular
      speed increases by factor of

   (2) The Conservation of Mechanical Energy (from B to C)

                                                                                      (4)
       The change of the potential energy (from B to C) is the same as the rotation
       energy at point B,
                                                                                      (5)
       Using the similar method, we could get the following equation for the transition
       from D to E,
                                                                                      (6)




                                          8/30
                    THEORETICAL COMPETITION

                           Questions and Solutions            FINAL VERSION

From equations (3), (5) and (6) we have,


                                                                                 (7)



For half a cycle we have                                                     (8)

For n complete cycles, the growth of angular velocity amplitude as well as the
angular amplitude     increases by a factor of

For            then with              one gets




                                    9/30
                            THEORETICAL COMPETITION

                                 Questions and Solutions                FINAL VERSION

ALTERNATE SOLUTION

The moment of inertia with respect to the swing pivot

                               I = Mr2                                         (1)

Since the A to B transition is fast one has by conservation of angular
momentum,

                                                                               (2)
The energy at point A is

                                                                               (3)
The energy at point B is

                                                                               (4)
where h = rd – ru is the vertical distance the child’s center of mass moves.

The energy at point C (conservation of energy)

                                                                               (5)
As the child squats at the C to D transition, the swing losses energy of the
amount Mgh so

                                                                               (6)
Energy at point E is equal to energy at point D (conservation energy)
                                                                               (7)
But we have also
                                                                               (8)
From equation (7) and (8) we have,
                                                                               (9)




                                           10/30
                            THEORETICAL COMPETITION

                                 Questions and Solutions                FINAL VERSION

Using equation(2) this equation yields,

                                                                           (10)


Where we have used IE = IA.
Using equation (1) one obtains from equation (10)


                                                                           (11)

From this one obtains,

                                                                           (12)


 This ratio gives the fractional increase in the amplitude for one half cycle of
the swing motion. The fractional increase in the amplitude after n cycles is
thus,

                                                                           (13)

Where        is the initial amplitude and      is the amplitude after n cycles.
Substitute the values,


                                                                           (14)
or,
                              n=5                                          (15)

Thus it takes only 5 swing cycles for the amplitude to build up by a factor of
two.




                                            11/30
                           THEORETICAL COMPETITION

                                  Questions and Solutions        FINAL VERSION

[Marking Scheme]             THEORETICAL Question 1B
 The Parametric Swing

   (5.0)       0.25    Moment of inertia     I = Mr2
               0.25    Conservation of angular momentum A to B
               0.25    Correct expression of energy at point A
               0.25    Correct expression of energy at point B
               0.25    Correct expression of energy at point C
               0.25    Correct expression of energy at point D
               0.25    Correct expression of energy at point E
               0.25    Conservation of angular momentum C to D
               0.50    Conservation of energy


               0.50    Conservation of energy


                0.5
                       Conservation of energy
                0.5
                       Conservation of energy
                0.5
                       Equation

                0.5
                       Equation


                1.0
                       Equation

                1.0
                       Equation

               0.25
                       Equation

               0.25    Equation
               0.25 n = 10/3
               0.25 n = 5
Note: Propagation errors will not be considered here.
                                          12/30
                            THEORETICAL COMPETITION

                                 Questions and Solutions               FINAL VERSION


Question 2 MAGNETIC FOCUSING
There exist many devices that utilize fine beams of charged particles. The cathode ray
tube used in oscilloscopes, in television receivers or in electron microscopes. In these
devices the particle beam is focused and deflected in much the same manner as a light
beam is in an optical instrument.

Beams of particles can be focused by electric fields or by magnetic fields. In problem 2A
and 2B we are going to see how the beam can be focused by a magnetic field.

2A. MAGNETIC FOCUSING SOLENOID (4 points)

Figure 2.1 shows an electron gun situated inside (near the middle) a long solenoid. The
electrons emerging from the hole on the anode have a small transverse velocity
component. The electron will follow a helical path. After one complete turn, the electron
will return to the axis connecting the hole and point F. By adjusting the magnetic field B
inside the solenoid correctly, all the electrons will converge at the same point F after one
complete turn. Use the following data:
    • The voltage difference that accelerates the electrons V = 10 kV
    • The distance between the anode and the focus point F, L = 0.50 m
    • The mass of an electron m = 9.11x 10-31 kg
    • The charge of an electron e = 1.60 x 10-19 C
    •
    • Treat the problem non-relativistically

   a) Calculate B so that the electron returns to the axis at point F after one complete
      turn. (3 points)
   b) Find the current in the solenoid if the latter has 500 turns per meter. (1 point)




             Anode
                                                                F
                                       L

                                    Figure 2.1

                                           13/30
                             THEORETICAL COMPETITION

                                  Questions and Solutions                 FINAL VERSION

SOLUTION

a) In magnetic field, the particle will be deflected and follow a helical path.

Lorentz Force in a magnetic field B,


                                                                                             (1)


Where      is the transverse velocity of the electron, R is the radius of the path.

Since           (          is the particle angular velocity and T is the period), then,


                                                                                             (2)


To be focused, the period of electron T must be equal to       , where     is the parallel

component of the velocity.

We also know,

                                                                                             (3)
All the information above leads to


                                                                                             (4)
Numerically
                                        B = 4.24 mT

   b) The magnetic field of the Solenoid:

                                     B=µ0in                                                  (5)


                                                                                             (6)

Numerically
                                i = 6.75 A.

                                              14/30
                           THEORETICAL COMPETITION

                                  Questions and Solutions   FINAL VERSION


[Marking Scheme]             THEORETICAL Question 2A

 Magnetic Focusing Solenoid


  a. (3.0)      0.3
                       Lorentz force
                0.1    Transverse velocity
                0.1

                0.3
                       Equation
                0.2
                       Equation T =

                0.5
                       Conservation energy
                1.0
                       Formula
                0.5    Numerical value B = 4.23 mT
  b. (1.0)      0.5    B=µ0in
                0.3

               0.2     i = 6.75 A.
Note: Propagation errors will not be considered.




                                          15/30
                            THEORETICAL COMPETITION

                                  Questions and Solutions                FINAL VERSION

2B. MAGNETIC FOCUSING (FRINGING FIELD) (6 points)

Two pole magnets positioned on horizontal planes are separated by a certain
distance such that the magnetic field between them be B in vertical direction (see
Figure 2.2). The poles faces are rectangular with length l and width w. Consider
the fringe field near the edges of the poles (fringe field is field particularly
associated to the edge effects). Suppose the extent of the fringe field is b (see Fig.
2.3). The fringe field has two components Bx i and Bz k. For simplicity assume
that |Bx|= B|z|/b where z=0 is the mid plane of the gap, explicitly:
                 when the particle enters the fringe field Bx = +B z /b,
                 when the particle enters the fringe field after traveling through
                   the magnet, Bx =




       Fringe                                                    XZ
       Field                                                     Plane
                                      z

        θ                                 y
                                                                     x
                                                 B


                                  l                   w
 Narrow
 Beam of
 Particles



 Fig.2.2: Overall view (note that θ is very small).




                                              16/30
                              THEORETICAL COMPETITION

                                    Questions and Solutions           FINAL VERSION


                        z
                                                 x=b

                              Bz
                                                  x

                                      Bx

                      Figure 2.3. Fringe field


A parallel narrow beam of particles, each of mass m and positive charge q enters the
magnet (near the center) with a high velocity v parallel to the horizontal plane. The
vertical size of the beam is comparable to the distance between the magnet poles. A
certain beam enters the magnet at an angle θ from the center line of the magnet and
leaves the magnet at an angle -θ (see Figure 2.4. Assume θ is very small). Assume that
the angle θ with which the particle enters the fringe field is the same as the angle θ when
it enters the uniform field.
                                                                             y




                                             l                                                x

                                         v
                                                                             w
      θ                                                                 θ
                                     B                          v




                            Figure 2.4. Top view




                                                 17/30
                            THEORETICAL COMPETITION

                                  Questions and Solutions             FINAL VERSION

The beam will be focused due to the fringe field. Calculate the approximate focal length
if we define the focal length as illustrated in Figure 2.5 (assume b<<l and assume that the
z-component of the deflection in the uniform magnetic field B is very small).




                      Figure 2.5. Side view

Solution:

The magnetic force due to the fringe field on charge q with velocity v is

                                                                                      (1)

The z-component of the force obtained from the cross product is

                                                                                      (2)


The vertical momentum gained by the particle after entering the fringe field


                                                                                      (3)


The particle undergoes a circular motion in the constant magnetic field B region


                                                                                      (4)


                                                                                      (5)

Therefore,
                                                                                      (6)

                                              18/30
                             THEORETICAL COMPETITION

                                   Questions and Solutions                 FINAL VERSION


After the particle exits the fringe field at the other end, it will gain the same
momentum.

The total vertical momentum gained by the particle is


                                                                                        (7)


Note that for small θ, we can approximate

Meanwhile, the momentum along the horizontal plane (xy-plane) is

                                           p = mv                                       (8)

From the geometry in figure 4, we can get the focal length by the following relation,


                                                                                        (9)




                                                                                    (10)




                                             19/30
                           THEORETICAL COMPETITION

                                  Questions and Solutions      FINAL VERSION

     [Marking Scheme]                              THEORETICAL Question 2B

 Magnetic Focusing (Fringing Field)


   (6.0)       0.25    Lorentz force
               0.25    z-component
               0.25
                       z-component
               0.5
                       z-component gained momentum

               0.75
               0.5
                       Equation

               0.25


               0.5                       (factor of 2)
               0.25

               0.5     Horizontal momentum p = mv
               1.0
                       Equation

               1.0


Note: No propagation error will be considered here.




                                          20/30
                             THEORETICAL COMPETITION

                                  Questions and Solutions                       FINAL VERSION


Question 3 LIGHT DEFLECTION BY A MOVING MIRROR
 Reflection of light by a relativistically moving mirror is not theoretically new.
 Einstein discussed the possibility or worked out the process using the Lorentz
 transformation to get the reflection formula due to a mirror moving with a velocity .
 This formula, however, could also be derived by using a relatively simpler method.
 Consider the reflection process as shown in Fig. 3.1, where a plane mirror M moves
 with a velocity          (where       is a unit vector in the x-direction) observed from
 the lab frame F. The mirror forms an angle with respect to the velocity (note that
         , see figure 3.1). The plane of the mirror has n as its normal. The light beam
 has an incident angle      and reflection angle which are the angles between and
 the incident beam 1 and reflection beam      , respectively in the laboratory frame F. It
 can be shown that,

                                                                                           (1)

                                                  1



                                                                n
                     M

                                              !
                                                      "                       1’

                         y             a


                                   x                                            v
                                                      #

                Figure 3.1. Reflection of light by a relativistically moving mirror




                                              21/30
                           THEORETICAL COMPETITION

                                Questions and Solutions                       FINAL VERSION

3A. Einstein’s Mirror (2.5 points)

About a century ago Einstein derived the law of reflection of an electromagnetic wave
by a mirror moving with a constant velocity             (see Fig. 3.2). By applying the
Lorentz transformation to the result obtained in the rest frame of the mirror, Einstein
found that:


                                                                                             (2)




Derive this formula using Equation (1) without Lorentz transformation!


                                        y
                    ?                       x
                    ?                 v                           "
                                                                                    n
                                                                      !
                    ?

                                                φ = 900

               Figure 3.2. Einstein mirror moving to the left with a velocity v.



3B. Frequency Shift (2 points)
In the same situation as in 3A, if the incident light is a monochromatic beam hitting
M with a frequency f, find the new frequency       after it is reflected from the surface
of the moving mirror. If              and              in figure 3.2, find frequency shift
in percentage of .




                                            22/30
                        THEORETICAL COMPETITION

                              Questions and Solutions               FINAL VERSION

3C. Moving Mirror Equation (5.5 Points)




                                               φ
                                               φ
                                       Figure 3.3.

Figure 3.3 shows the positions of the mirror at time       and . Since the observer is
moving to the left, the mirror moves relatively to the right. Light beam 1 falls on point
a at and is reflected as beam . Light beam 2 falls on point d at and is reflected
as beam     . Therefore,       is the wave front of the incoming light at time     . The
atoms at point are disturbed by the incident wave front    and begin to radiate a
wavelet. The disturbance due to the wave front        stops at time    when the
wavefront strikes point d.

By referring to figure 3.3 for light wave propagation or using other methods, derive
equation (1).




                                       23/30
                            THEORETICAL COMPETITION

                                  Questions and Solutions               FINAL VERSION


Solution:

a) EINSTEIN’S MIRROR

By taking           and replacing     with       in Equation (1) we obtain
                                                                                         (3)


This equation can also be written in the form of


                                                                                         (4)


The square of this equation can be written in terms of a squared equation of             , as
follows,



                                                                                         (5)
which has two solutions,


                                                                                         (6)


and


                                                                                         (7)



However, if the mirror is at rest (     ) then                ; therefore the proper solution
is


                                                                                         (8)




                                             24/30
                          THEORETICAL COMPETITION

                                  Questions and Solutions           FINAL VERSION


b) FREQUENCY SHIFT

The reflection phenomenon can be considered as a collision of the mirror with a beam of
photons each carrying an incident and reflected momentum of magnitude

                        and               ,                                          (9)

The conservation of linear momentum during its reflection from the mirror for the
component parallel to the mirror appears as


                                                                                    (10)


Thus


                                                                                    (11)


   For         and            ,


                                                                                    (12)

   so that


                                                                                    (13)


   Thus, there is a decrease of frequency by 50% due to reflection by the moving mirror.




                                          25/30
                           THEORETICAL COMPETITION

                                 Questions and Solutions              FINAL VERSION



c) RELATIVISTICALLY MOVING MIRROR EQUATION

Figure 3.3 shows the positions of the mirror at time         and . Since the observer is
moving to the left, system is moving relatively to the right. Light beam 1 falls on point a
at and is reflected as beam . Light beam 2 falls on point d at and is reflected as
beam    . Therefore,      is the wave front of the incoming light at time   . The atoms at
point are disturbed by the incident wave front    and begin to radiate a wavelet. The
disturbance due to the wave front    stops at time when the wavefront strikes point d.
As a consequence
                                                                                  (14)

From this figure we also have          , and


                                       ,                     .                        (15)


Figure 3.4 displays the beam path 1 in more detail. From this figure it is easy to show
that
                                                                                      (16)

and
                                                                                      (17)




                                           26/30
                          THEORETICAL COMPETITION

                               Questions and Solutions                             FINAL VERSION

From the triangles aeo and afo we have                                       and             . Since
           , then

                                                                                                (18)

  By substituting Equations (14), (16), (17), and (18) into Equation (15) we obtain



                                                                                                (19)


                                                   %


                    t!             t                                 '
                                            *
                                                   +                         %&

                                           # "               )


                                       (                                                 v
                                                         d
                                            !                            !
                                                             v t   t!
                                                              "###!####\$

                                           Figure 3.4.

  and



                                                                                                (20)


  Eliminating             from the two Equations above leads to




                                           27/30
                       THEORETICAL COMPETITION

                            Questions and Solutions   FINAL VERSION


                                                                (21)


By collecting the terms containing      we obtain


                                                                (22)

or
                                                                (23)




                                     28/30
                         THEORETICAL COMPETITION

                                 Questions and Solutions            FINAL VERSION


  [Marking Scheme]                THEORETICAL Question 3

Relativistic Mirror


 A. (3.0)     0.5
                      Equation:
             0.25
                      Equation

              0.5

             0.75




              0.5     Recognize the mirror is at rest (    ) then

              0.5




 B(2.0)      0.25
             0.25     Know how to calculate sinβ
             0.25
             0.75


              0.5




                                         29/30
                         THEORETICAL COMPETITION

                                Questions and Solutions          FINAL VERSION

For part C, if the students is not able to prove the equation maximum point is 2.5.


  (5.0)       1.0    Equation
              1.0




              0.5




              2.5

Propagation error can be considered but the maximum point is 2.5.




                                        30/30
