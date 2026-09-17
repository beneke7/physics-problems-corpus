---
id: solution-document-ipho-1999-e1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1999/E1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-1999-e1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1999/E1_S.pdf."
---

Experimental problem - Solution Page 1
Solution
The numerical values given in the text are those obtained in a preliminary test performed by a
student of the University of Bologna1, and are reported here only as a guide to the evaluation
of the student solutions.
1. and 2. The distance from the center of mass to the rotation axis is:
2 1
2 1 1 ) 2 / (
) (
M M
x M R M
x R
+
− +
=
A
(1)
and therefore, if we measure the position of the center of mass2
) ( 2 1 2 M M M +
as a function of x we obtain a
relationship between the system parameters, and by a linear fit of eq. (1) we obtain an angular
coefficient equal to , and from these equations, making use of the given total
mass M1 + M2 = 41.0 g ± 0.1 g, we obtain M1 and M2. The following table shows some
results obtained in the test run.
n x [mm] R(x) [mm]
1 204±1 76±1
2 220±1 83±1
3 236±1 89±1
4 254±1 95±1
5 269±1 101±1
6 287±1 107±1
7 302±1 113±1
8 321±1 119±1
Figure 6 shows the data concerning the position of the pendulum's center of mass together
with a best fit straight line: the estimated error on the length measurements is now 1 mm and
we treat it as a Gaussian error. Notice that both the dependent variable R(x) and the
independent variable x are affected by the experimental uncertainty, however we decide to
neglect the uncertainty on x, since it is smaller than 1%. The coefficients a and b in R(x) =
ax+b are
a = 0.366 ± 0.009
b = 2 mm ± 2 mm
1 Mr. Maurizio Recchi.
2 This can easily be done by balancing the pendulum, e.g. on the T-shaped rod provided.Experimental problem - Solution Page 2
(therefore b is compatible with 0)
R(x) [mm] vs. x[mm]
x[mm]
Figure 6: Graph of the position of the pendulum's center of mass (with respect to the rotation axis) as
a function of the variable x. The numbering of the data points corresponds to that mentioned in the
main text. The estimated error is compatible with the fluctuations of the measured data.
For computing the masses only the a value is needed; using the total pendulum mass we find:
M1 = 26.1 ± 0.4 g
M2 = 15.0 g ± 0.4 g
Even though many non-programmable pocket calculators can carry out a linear regression, it
is likely that many students will be unable to do such an analysis, and in particular they may
be unable to estimate the uncertainty of the fit parameters even if their pocket calculators
provide a linear regression mode. It is also acceptable to find a and b using several pairs of
measurements and finally computing a weighted average of the results. For each pair of
measurements a and b are given by
2 2
1 2
1 2
ax y b
x x
y y
a
− =
−
−
=
(2)
and the parameter uncertainties (assuming them gaussian) byExperimental problem - Solution Page 3
( ) ( )
∆
+
∆
+ ∆ = ∆
−
∆ + ∆
+
−
∆ + ∆
= ∆
2
2
2
2
2
2 2
2
2 2
2
2
2 1
2
2
2
1
2
2 1
2
2
2
1
a
a
x
x
x a y b
y y
y y
x x
x x
a a
(3)
In order to calculate (2) and (3) the data can be paired with a scheme like
{1,5},{2,6},{3,7},{4,8}, where "far" points are coupled in order to minimize the error on
each pair.
There may be other alternative and equally acceptable approaches: they should all be
considered valid if the order of magnitude of the estimated uncertainty is correct.
3. The pendulum's total moment of inertia is the sum of the moments of its two parts, and
from figure 3 we see that
+ + − = + = 2 2
1 2
2
2 2 1
3
) ( ) ( A A
M
I x M x M x I I x I (4)
4. The pendulum's equation of motion is
) ( ) ( 0 2
2
θ θ κ
θ
− − =
dt
d
x I (5)
if the rotation axis is vertical, while it's
θ θ θ κ
θ
sin x gR M M
dt
d
x I ) ( ) ( ) ( ) ( 2 1 0 2
2
+ + − − = (6)
if the rotation axis is horizontal.
5. and 6. When the system is at rest in an equilibrium position, the angular acceleration is
zero and therefore the equilibrium positions θe can be found by solving the equation
0 sin ) ( ) ( ) ( e 2 1 0 e = + + − − θ θ θ κ x gR M M (7)
If the value xi corresponds to the equilibrium angle θe,i, and if we define the quantity (that can
be computed from the experimental data) i e i i x gR M M y , 2 1 sin ) ( ) ( θ + = , then eq. (7) may be
written as
0 , κθ κθ − = i e i y (8)Experimental problem - Solution Page 4
and therefore the quantities κ and κθ0 can be found with a linear fit. The following table
shows several data collected in a trial run according to the geometry shown in figure 7.
n x [mm] h [mm] sinθ e= h/x θe y [N⋅µm]
1 204±1 40±1 0.196±0.005 0.197±0.005 6.1±0.3
2 220±1 62±1 0.282±0.005 0.286±0.005 9.4±0.4
3 238±1 75±1 0.315±0.004 0.321±0.005 11.3±0.5
4 255±1 89±1 0.349±0.004 0.357±0.004 13.4±0.5
5 270±1 109±1 0.404±0.004 0.416±0.004 16.4±0.6
6 286±1 131±1 0.458±0.004 0.476±0.004 19.7±0.7
7 307±1 162±1 0.528±0.004 0.556±0.004 24.3±0.8
8 321±1 188±1 0.586±0.004 0.626±0.004 28.2±0.9
Figure 7: Geometry of the measurements taken for finding the angle.
We see that not only the dependent but also the independent variable is affected by a
measurement uncertainty, but the relative uncertainty on θ e is much smaller than the relative
uncertainty on y and we neglect it. We obtain from such data (neglecting the first data point,
see figure 8):
κ = 0.055 N⋅m⋅rad-1 ± 0.001N⋅m⋅rad-1Experimental problem - Solution Page 5
κθ0 = -0.0063 N⋅m ± 0.0008N⋅m
Clearly in this case only the determination of the torsion coefficient κ is interesting. The fit of
the experimental data is shown in figure 8.
0 κθ κθ − = y [N⋅mm] vs. θ
θ [rad]
Figure 8: Fit of eq. (8) as a function of θ. In this case the estimated error is again compatible with the
experimental data fluctuations. However the data points show a visible deviation from straightness
which may be due to an error in the first measurement (the one at lowest θ).
7. The moment of inertia can be found experimentally using the pendulum with its rotation
axis vertical and recalling eq. (5); from this equation we see that the pendulum oscillates with
angular frequency
) (
) (
x I
x
κ
ω = and therefore
2
2
4
) (
) (
π
κ x T
x I = (9)
where T is the measured oscillation period. Using eq. (9) we see that eq. (4) can be rewritten
as
+ + − = − 2 2
1 2
2
2
2
2
3
) (
4
A A
M
I x M x M x T
π
κ
(10)Experimental problem - Solution Page 6
The left-hand side in eq. (10) is known experimentally, and therefore with a simple linear fit
we can find the coefficients A 2 M and + 2 2
1
3
A
M
I , as we did before. The experimental data
are in this case:
n x [mm] T [s]
1 204±1 0.502±0.002
2 215±1 0.528±0.002
3 231±1 0.562±0.002
4 258±1 0.628±0.002
5 290±1 0.708±0.002
6 321±1 0.790±0.002
The low uncertainty on T has been obtained measuring the total time required for 50 full
periods.
Using the previous data and another linear fit, we find
A = 230 mm ± 20 mm
I1 = 1.7⋅10-4 kg⋅m2 ± 0.7⋅10-4 kg⋅m2
and the fit of the experimental data is shown in figure 9.
2
2
2
2
) (
4
x M x T y − =
π
κ
[kg⋅m2] vs. x [m]
x [m]Experimental problem - Solution Page 7
Figure 9: Fit of eq. (10) as a function of x. In this case the estimated error is again compatible with the
experimental data fluctuations.
8. Although in this case the period T is a complicated function of x, its graph is simple, and it
is shown in figure 10, along with the test experimental data.
The required answer is that there is a single local maximum.
T [s] vs. x[m]
x [m]
Figure 10: The period T of the pendulum with horizontal axis as a function of x. In addition to the
experimental points the figure shows the result of a theoretical calculation of the period in which the
following values have been assumed: g = 9.81 m/s2; κ = 0.056 N⋅m/rad; M1 = 0.0261 kg; M2 =
0.0150 kg; M3 = 0.00664 kg; I1 = 1.0⋅10-4 kg⋅m2; A = 0.21 m; A3 = 0.025 m; a = 0.365; b = 0.0022
m (so that the position of the center of mass - excluding the final nut of length A3 - is R(x) = ax+b);
these are the central measured values, with the exception of κ, I1 and A which are taken one standard
deviation off their central value. Also, the value θ0 = 0.030 rad ≈ 1.7° has been assumed. Even though
the theoretical curve is the result of just a few trial calculations using the measured values (± one
standard deviation) and is not a true fit, it is quite close to the measured data.
