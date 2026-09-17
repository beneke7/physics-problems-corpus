---
id: solution-document-ipho-2008-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2008/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2008-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2008/T1_S.pdf."
---

39th International Physics Olympiad - Hanoi - Vietnam - 2008

                                  Theoretical Problem No. 1 /Solution



                                           Solution

1. The structure of the mortar
    1.1. Calculating the distance TG

   The volume of water in the bucket is V = 1000cm3 = 10−3 m3 . The length of the


bottom of the bucket is d = L − h tan 600 = ( 0.74 − 0.12 tan 600 ) m = 0.5322 m .

(as the initial data are given with two significant digits, we shall keep only two
significant digits in the final answer, but we keep more digits in the intermediate steps).
The height c of the water layer in the bucket is calculated from the formula:

                           c                (d 2 + 2 3V / b)1/ 2 − d
                V = bcd + b c tan 600 ⇒ c =
                           2                           3
Inserting numerical values for V , b and d , we find c = 0.01228 m .
When the lever lies horizontally, the distance, on the horizontal axis, between the rotation
                                                               d c
axis and the center of mass of water N, is TH ≈ a +             + tan 60o = 0.4714 m , and
                                                               2 4
TG = ( m / M ) TH = 0.01571m (see the figure below).

            R
                                         H                            T
            S           P
                                         N                   K


Answer: TG = 0.016 m .


   1.2. Calculating the values of α1 and α 2 .
  When the lever tilts with angle α1 , water level is at the edge of the bucket. At that

point the water volume is 10−3 m3 . Assume PQ < d . From geometry V = hb × PQ / 2 ,

from which PQ = 0.1111m . The assumption                      PQ < d is obviously satisfied
( d = 0.5322 m ).

   To compute the angle α1 , we note that tan α1 = h / QS=h /( PQ+ 3h ). From this

we find α1 = 20.6o .




                                                                                          1
                         39th International Physics Olympiad - Hanoi - Vietnam - 2008

                                         Theoretical Problem No. 1 /Solution


When the tilt angle is 30o , the bucket is empty: α 2 = 30o .




                                                                                              G
                                                                     h                    T


              R                  N

                                            I       Q
                                     P
                  S



  1.3. Determining the tilt angle β of the lever and the amount of water in the bucket
m when the total torque μ on the lever is equal to zero
  Denote     PQ = x (m) . The amount of water in the bucket is
              xhb
m = ρ water       = 9 x (kg) .
               2
    μ = 0 when the torque coming from the water in the bucket cancels out the torque
coming from the weight of the lever. The cross section of the water in the bucket is the
triangle PQR in the figure. The center of mass N of water is located at 2/3 of the meridian
RI, therefore NTG lies on a straight line. Then: mg × TN = Mg × TG or
           m × TN = M × TG = 30 × 0.1571 = 0.4714                (1)
Calculating TN from x then substitute (1) :
                       2         x                 x           x
           TN = L + a − ( h 3 + ) = 0.94 − 0.08 3 − = 0.8014 −
                       3         2                 3           3

which implies m × TN = 9 x (0.8014 − x / 3) = −3 x 2 + 7.213x                           (2)

So we find an equation for x :
        −3 x 2 + 7.213x = 0.4714                                     (3)
The solutions to (3) are x = 2.337 and x = 0.06723 . Since x has to be smaller than
0.5322, we have to take x = x0 = 0.06723 and m = 9 x0 = 0.6051kg .
                  h
    tan β =           = 0.4362 , or β = 23.57 o .
              x+h 3
Answer: m = 0.61kg and β = 23.6o .


2. Parameters of the working mode


                                                                                                  2
                         39th International Physics Olympiad - Hanoi - Vietnam - 2008

                                    Theoretical Problem No. 1 /Solution

   2.1.Graphs of μ (α ) , α (t ) , and μ (t ) during one operation cycle.
   Initially when there is no water in the bucket, α = 0 , μ has the largest magnitude
equal to gM × TG = 30 × 9.81× 0.01571 = 4.624 N ⋅ m . Our convention will be that
the sign of this torque is negative as it tends to decrease α .
   As water flows into the bucket, the torque coming from the water (which carries
positive sign) makes μ increase until μ is slightly positive, when the lever starts to
lift up. From that moment, by assumption, the amount of water in the bucket is constant.
     The lever tilts so the center of mass of water moves away from the rotation axis,
leading to an increase of μ , which reaches maximum when water is just about to

overflow the edge of the bucket. At this moment α = α1 = 20.6o .

   A simple calculation shows that
         SI = SP + PQ / 2 = 0.12 × 1.732 + 0.1111/ 2 = 0.2634 m .
                           2
         TN = 0.20 + 0.74 − SI = 0.7644 m .
                           3

         μmax = (1.0 × TN − 30 × TG ) g cos 20.6o

             = (1.0 × 0.7644 − 30 × 0.01571) × 9.81 × cos 20.6o = 2.690 N ⋅ m .

Therefore μ max = 2.7 N ⋅ m .
   As the bucket tilts further, the amount of water in the bucket decreases, and when
α = β , μ = 0 . Due to inertia, α keeps increasing and μ keeps decreasing. The

bucket       is        empty       when          α = 30o         ,        when          μ   equals


−30 × g × TG × cos 30o = −4.0 N ⋅ m . After that α keeps increasing due to inertia to

α 0 ( μ = − gM TG cos α 0 = −4.62 cos α 0 N ⋅ m ), then quickly decreases to 0
( μ = −4.62 N ⋅ m ).
   On this basis we can sketch the graphs of α (t ) , μ (t ) , and μ (α ) as in the figure
below




                                                                                                3
                       39th International Physics Olympiad - Hanoi - Vietnam - 2008

                                      Theoretical Problem No. 1 /Solution



                             μ
                      2.7 N.m                          A




                                                           23.6o
                             O                                           E        α
                                                   o
                                                20.6 B             30o       α0




                 -4.6 cosα0 N.m                                          D
                  -4.0 N.m                                          C
                  -4.6 N.m F



   2.2. The infinitesimal work produced by the torque μ (α ) is dW = μ (α )dα . The
energy obtained by the lever during one cycle due to the action of μ (α ) is

W = v∫ μ (α )dα , which is the area limited by the line μ (α ) . Therefore Wtotal is equal

to the area enclosed by the curve (OABCDFO) on the graph μ (α ) .
   The work that the lever transfers to the mortar is the energy the lever receives as it

moves from the position α = α o to the horizontal position α = 0 . We have Wpounding

equals to the area of (OEDFO) on the graph                                        μ (α ) . It is equal to
gM × TG × sin α 0 = 4.6 sin α 0          (J).

   2.3. The magnitudes of α 0 can be estimated from the fact that at point D the energy
of the lever is zero. We have
                   area (OABO) = area (BEDCB)
Approximating OABO by a triangle, and BEDCB by a trapezoid, we obtain:
         23.6 × 2.7 × (1/ 2) = 4.0 × [(α 0 − 23.6) + (α 0 − 30)] × (1/ 2) ,

which implies α 0 = 34.7 o . From this we find

                                  0

                                  ∫ − Mg × TG × cos α dα = 4.62 × sin 34.7 = 2.63
                                                                                             o
Wpounding = area (OEDFO) =
                                 34.76




                                                                                                       4
                          39th International Physics Olympiad - Hanoi - Vietnam - 2008

                                       Theoretical Problem No. 1 /Solution


Thus we find Wpounding ≈ 2.6 J.                                                     μ

3. The rest mode
    3.1.
         3.1.1. The bucket is always overflown
with water. The two branches of μ (α ) in the
                                                                              β          α
vicinity of α = β           corresponding to
increasing and decreasing α coincide with
each other.
    The graph implies that α = β is a stable
equilibrium of the mortar.
        3.1.2. Find the expression for the torque μ when the tilt angle is α = β + Δα
( Δα is small ).
    The mass of water in bucket when the lever tilts with angle α                        is

                                  ⎛ 1        1 ⎞
m = (1/ 2) ρ bh PQ , where PQ = h ⎜      −      0 ⎟
                                                    . A simple calculation shows that
                                  ⎝ tan α tan 30 ⎠
when α       increases from        β     to   β + Δα , the mass of water increases by

           bh 2 ρ            bh 2 ρ
Δm = −              Δ α ≈ −           Δα . The torque μ acting on the lever when the tilt
          2 sin 2 α         2 sin 2 β
is β + Δα equals the torque due to Δm .

   We have μ = Δm × g × TN × cos ( β + Δα ) . TN is found from the equilibrium

condition of the lever at tilting angle β :
   TN = M × TG / m = 30 × 0.01571/ 0.605 = 0.779 m .
We find at the end μ = − 47.2× Δα N ⋅ m ≈ −47 × Δα N ⋅ m .
         3.1.3. Equation of motion of the lever
           d 2α
    μ=I           where μ = − 47 ×Δα , α = β + Δα , and I is the sum of moments
            dt 2
of inertia of the lever and of the water in bucket relative to the axis T. Here I is not
constant the amount of water in the bucket depends on α . When Δα is small, one can
consider the amount and the shape of water in the bucket to be constant, so I is
approximatey a constant. Consider water in bucket as a material point with mass 0.6 kg, a

simple    calculation     gives    I = 12 + 0.6 × 0.782 = 12.36 ≈ 12.4 kg m 2 . We have

                        d 2 Δα
− 47 × Δα = 12.4 ×             . That is the equation for a harmonic oscillator with period
                         dt 2


                                                                                             5
                        39th International Physics Olympiad - Hanoi - Vietnam - 2008

                                   Theoretical Problem No. 1 /Solution


         12.4
τ = 2π        = 3.227 . The answer is thereforeτ = 3.2s .
          47
  3.2. Harmonic oscillation of lever (around α = β ) when bucket is always overflown.
Assume the lever oscillate harmonically with amplitude Δα 0 around α = β . At time
t = 0 , Δα = 0 , the bucket is overflown. At time dt the tilt changes by dα . We are
interested in the case dα < 0 , i.e., the motion of lever is in the direction of decreasing
α , and one needs to add more water to overflow the bucket. The equation of motion is:
Δα = −Δα 0 sin( 2π t / τ ) , therefore d ( Δα ) = dα = −Δα 0 ( 2π / τ )cos( 2π t / τ )dt .

   For the bucket to be overflown, during this time the amount of water falling to the

                                  bh 2 ρ      2Δα 0π bh 2 ρ dt     ⎛ 2π t ⎞
bucket should be at least dm = −         dα =                  cos ⎜      ⎟            ;   dm is
                                 2 sin β        2τ sin β           ⎝ τ ⎠
                                      2               2




                              π bh 2 ρΔα 0
maximum at t = 0 ,      dm0 =              dt .
                               τ sin 2 β
   The amount of water falling to the bucket is related to flow rate Φ ; dm0 = Φdt ,

              π bh 2 ρΔα 0
therefore Φ =              .
               τ sin 2 β
   An overflown bucket is the necessary condition for harmonic oscillations of the lever,
therefore the condition for the lever to have harmonic oscillations with ampltude 1o or

2π/360 rad is Φ ≥ Φ1 with

                          π bh 2 ρ 2π
                    Φ1 =              = 0.2309 kg/s
                         360τ sin 2 β
   So Φ1 = 0.23kg/s .


   3.3 Determination of Φ 2
   If the bucket remains overflown when the tilt decreases to 20.6o , then the amount of
water in bucket should reach 1 kg at this time, and the lever oscillate harmonically with

amplitude equal 23.6o − 20.6o = 3o . The flow should exceed 3Φ1 , therefore

     Φ 2 = 3 × 0.23 ≈ 0.7 kg/s .
   This is the minimal flow rate for the rice-pounding mortar not to work.



                                                                                               6
