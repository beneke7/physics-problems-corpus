---
id: nbpho-2025-hot-plate
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2025-hot-plate
solution_type: official
source_document: solution-document-nbpho-2025-s
source_pdf: cache/phoxiv/nbpho/2025_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2025_S.pdf."
---

9. HOT PLATE (12 points) — Jaan Kalda.
i) (3 points) Both aluminium plates were
immersed in hot water until thermal equi‐
librium was reached, then removed, dried
with tissue paper, and measured using an
infrared thermometer. The plates have
identical thermal properties except for their
surface coating, so they should have reached
thesameactualtemperatureinthehotwater
bath. Experimental measurements:
Tpolished (°C) Tblack (°C) Troom (°C)
26.2 70.9 22.9
26.0 70.7 22.9
25.4 70.2 22.9
Theinfraredthermometermeasurestemper‐
ature based on thermal radiation and we
were told it is calibrated for emissivity ε =
1 (in reality, it is calibrated for ε = 0.95,
but this difference is not significant). We
were also told that the radiation power can
be linearized: Pthermal = P0 + αT. Objects
with ε < 1 radiate Pε = ε(P0 + αTε), but
they also reflect/scatter the radiation falling
onto it from the environment. If the room
is more or less at the thermal equilibrium at
temperature T0, the room is filled with the
photons at thermal equilibrium with walls
at temperature T0. If the plate were to be
black and also at temperature T0, it would be
in equilibrium with the radiation and emit
P = P0 + αTε; so, there must be as much
incident radiation from the surroundings re‐
gardless of its real emissivity and temperat‐
ure. Asitfollowsfromthesecondlawofther‐
modynamics, the reflectance must be 1 − ε,
so it reflects/scatters power equal to Pr =
(1 − ε)(P0 + αT0). This means that the total
power departing from it is Pε + Pr = P0 +
εαTε + (1 − ε)T0. The IR thermometer as‐
sumes this is a black body and equates this
power to P0 + αTreading, hence were density
as would have a room thermometer reading
is a weighted average:
Treading = ε · Tε + (1 − ε) · T0
Since the black plate has ε = 1, its reading
directly gives the actual temperature of both
plates. Rearranging to solve for emissivity:
ε =
Tpolished − T0
Tblack − T0
Calculating for each measurement:
ε1 =
26.2 − 22.9
70.9 − 22.9
= 0.069
ε2 =
26.0 − 22.9
70.7 − 22.9
= 0.065
ε3 =
25.4 − 22.9
70.2 − 22.9
= 0.053
Taking the average: ε = 0.069+0.065+0.053
3 =
0.062 ≈ 0.06 The emissivity of the polished
aluminium plate is ε = 0.06 ± 0.01.
Grading: (preliminary)
• The idea of heating the two plates to‐
gether in water (using alternative methods
doesn’t guarantee equal temperatures for
the plates well) 0.4pts
• Measuring the radiance of the plates in
a properly (plates are properly dried and
measurements are done in a timely man‐
ner) 0.4pts
• Making at least three measurements of the
black plate, the polished plate and the sur‐
roundingenvironment(0.2pforeachsetof
3, totalling) 0.6pts
• Understanding that the IR temperature
reading of the polished plate is affected not
only by the plate itself, but also by the re‐
flected radiation of the environment
Treading = ε · Tactual + (1 − ε) · Tambient
, not just
Treading = ε · Tactual
0.3pts
• Deriving a correct formula for emissivity,
expressed in terms of the three measured
temperatures 0.7pts
• Calculated value of emissivity in the range
from 0.03 to 0.12 0.6pts (for values from
0.02 to 0.2: 0.4 pts, for values from 0.01 to
0.3: 0.2 pts).
ii) (3 points) Solution 1. Here the main idea
is to heat the plate using the resistor. Once
thermal equilibrium is reached with plate’s
temperature T = Tf, the heating power
P = V 2
/R equals to the power dissipated
to the environment, H(Tf − T0) (with T0
denoting the room temperature), hence we
can determine the heat exchange coefficient
as H = V 2
/R(Tf − T0). The main diffi‐
culty with this approach is that the charac‐
teristic thermalization time is long, around 7
minutes, so for a more or less precise meas‐
urement, one should wait around half an
hour.
Grading: (preliminary)
• The idea of using resistive heating and
waiting for thermalization 0.5pts
• For waiting long enough, up to 0.8pts ;as
follows: foreachfiveminutesmissingfrom
more than 30 minutes, subtract 0.2 pts (so,
less than 30 minutes is 0.8 pts; less than 25
minutes is 0.6 pts ... etc).
• The voltage is maximized to have maximal
Tf (needed to reduce the relative error of
Tf − T0 0.4pts (the maximal allowed
voltage of 15V gives maximal points, each
missing volt subtracts 0.1 pts.
• Measuring the temperature and obtaining
a value that is reasonable for the given
voltage, i.e. difference is not bigger than
1°C 0.6pts
• Deriving a correct formula for H 0.5pts
• Evaluating correctly 0.2pts (any mistake,
either with units or arithmetic, leads to no
points)
Solution 2. In order to avoid long waiting
time, the following approach can be used.
Although it involves more complicated data
analysis, the analysis results are re‐usable by
part iii.
Theblackaluminiumplatewasplacedon
the foam plastic with the resistor beneath it,
providing continuous heating. Temperature
readings were recorded at one‐minute inter‐
vals (the first row shows time in minutes, the
second — the measured temperature in °C:
0 1 2 3 4 5 6
28.0 30.8 33.2 35.2 37.3 39.0 40.3
For heating with constant power, the
temperature evolution follows T = Tf −
θe−γt
, where Tf is the final equilibrium tem‐
perature, θ is a constant depending on the
initial temperature, and γ is the inverse of
the characteristic time constant. To determ‐
ine γ, we examine successive temperature
increments T(t+τ)−T(t) = θe−γt
(eγτ
− 1)
with τ = 1min, which should decrease expo‐
nentially, i.e. ln∆T ≡ ln[T(t + τ) − T(t)] =
−γt + const should be a linear function of
time.
t (min) ∆T(°C) ln(∆)T
0 2.80 1.0296
1 2.40 0.8755
2 2.00 0.6931
3 2.10 0.7419
4 1.70 0.5306
5 1.30 0.2624
Time (min)
ln[T(t+1)-T(t)]
0 1 2 3 4 5
0.2
0.4
0.6
0.8
1.0
Linear regression analysis of ln[T(t+1)−
T(t)] versus t yields:
ln[T(t + τ) − T(t)] = 1.0333 − 0.1378t
with R2
= 0.9209 indicating a good fit. Thus
we obtain γ = 0.1378 min−1
, corresponding
to the time constant of the thermal system
1/γ ≈ 7.3 minutes.
We now plot T versus e−γt
to find Tf as
the intercept when e−γt
= 0:
T = Tf − θe−γt
Computing e−0.1378nτ
, n = 0,...6 values
yields
e−γnτ
∈ {1.00,0.87,0.76,0.66,0.58,0.50,0.44};
the corresponding plot is provided below.
e^(-γt)
Temperature (°C)
0.0 0.2 0.4 0.6 0.8 1.0
25
30
35
40
45
50
T_f ≈ 49.9°C
0min
1min
2min
3min
4min
5min
6min
T = 49.9 - 22.0·e^(-0.1378t), R² = 0.9995
Linear regression of T versus e−γt
yields
Tf ≈ 49.9°C, as shown in the equation:
T = 49.9 − 22.0 · e−0.1378t
with R2
= 0.9995 indicating an excellent fit.
Atthermalequilibrium,thepowerdissipated
equals the power supplied:
P =
U2
R
= h · A · (Tf − T0) = H · (Tf − T0)
where h is the heat transfer coefficient per
unit area, H is the total heat transfer coef‐
ficient, A is the plate area, U is the applied
voltage, and R is the resistor’s resistance. Us‐
ing U = 15V, R = 220Ω, A = 40×40mm2
=
1.6 × 10−3
m2
, and T0 = 22.9°C we obtain
h =
U2
/R
A · (Tf − T0)
≈ 23.6 W/(m2
·K).
The total heat transfer coefficient H is found
as
H = h · A = 37.8mWK−1
.
Grading: (preliminary)
• Comingupwiththeideaofanalysingexpo‐
nentialdecayoftemperaturechangewitha
graph and deriving the heat transfer coeffi‐
cient from that 0.5pts
• Correct equation T(t) = Tf −θe−γt
. 0.3pts
• Plotting the data to a graph to determine
the γ and to confirm the validity of collec‐
ted data 0.3pts
• At least 5 datapoints used. 0.1pts
• Measure for at least 5 minutes. 0.1pts
• Calculating the slope and retrieving γ from
it. 0.2pts
• Finding the maximal temperature for used
voltageused,usingplotofT vse−γt
. 0.5pts
• Evaluating
P =
U2
R
= h · A · (Tf − T0) = H · (Tf − T0)
without errors 0.5pts
• Getting heat Transfer coefficient close to
expected value 0.5pts
iii) (2 points)Solution 1 To determine the heat
capacity, we can use the heating curve from
Part 2. During heating, the energy balance is
written as
Pin − Pout ≡ ∆P = C
dT
dt
,
where Pin = U2
/R is the input power, Pout =
H(T − T0) (where T0 = Troom is the room
temperature) is the power lost to the envir‐
onment, C is the heat capacity, and dT
dt is the
rate of temperature change. Using our expo‐
nential model T = Tf − θe−γt
, we find:
dT
dt
= θγe−γt
= γ(Tf − T)
Substituting into the energy balance:
Pin − H(T − T0) = Cγ(Tf − T).
This allows us to calculate the heat capacity
C as
C =
Pin − H(T − T0)
γ(Tf − T)
.
Now we need to use the values from Parts 1
and 2:
U = 15V, R = 220Ω, H = 3.78 × 10−2
WK−1
T0 = 22.9°C, Tf = 49.9°C, γ = 0.1378min−1
.
The input power is evaluated as
Pin =
U2
R
=
152
220
= 1.023 W.
For each time point, we can calculate:
t T Pout ∆P dT
dt C
min °C W W K/min JK−1
0 28.0 0.193 0.830 3.018 16.5
1 30.8 0.299 0.724 2.629 16.5
2 33.2 0.389 0.633 2.291 16.6
3 35.2 0.465 0.558 1.996 16.7
4 37.3 0.544 0.478 1.739 16.5
5 39.0 0.609 0.414 1.515 16.4
6 40.3 0.658 0.365 1.320 16.6
The heat capacity values are remark‐
ably consistent across different time points,
which validates our model. Taking the aver‐
age of the values in the tableˊyields
C ≈ 16.5 J/K.
Thisvaluerepresentstheheatcapacityofthe
aluminium plate. For reference, the specific
heat capacity of aluminium is approximately
cAl = 900Jkg−1
K−1
, which means the plate
has a mass of about C/cAl = 18.3g. This is
a reasonable value for a 40mm × 40mm alu‐
minium plate with a thickness of approxim‐
ately 2mm.
Solution 2. The calculated heat capacity
represents the effective heat capacity of the
system as observed in the experiment. This
includesthealuminiumplateandpotentially
some contribution from the heating resistor
and its mounting. Therefore, a little better
approach is to make an additional series of
measurements to obtain a cooling temperat‐
urecurve(similartothosewhatwill bemade
in the next section), because then we could
have let the plate cool on a flat part of the
foamplastic,excludingtherebythecontribu‐
tion of the resistor’s thermal capacity. If part
ii was solved using the solution 1, this is the
only viable way.
So, we heat the plate — the easier way is
by immersing into hot water — and measure
the time and temperature as it cools down.
Asaresult,weobtaindataaboutT(t); theen‐
ergy balance equation is
Pout = H[T(t)−T0] = −C
dT
dt
= γC[T(t)−T0],
hence
C = H/γ.
Similarly to the solution 1, we have used the
factthattheplatecoolsexponentiallyintime
and hence, dT
dt = γ[T(t)−T0]. The decayrate
can be found by plotting ln[T(t)−T0] against
t and determining the slope of the linear fit
line.
• The idea of using the T(t) dependence,
either for cooling or heating with the res‐
istor 0.2pts
• Measuring and tabulating at least 6 data
points 0.3pts (subtract 0.1 pts for each
missing)
• Data points cover at least 6 minutes 0.3pts
(subtract 0.1 pts for each missing minute)
• The idea of using log‐linear plot for data
linearization 0.2pts
• Correct data plotting 0.2pts
• Finding the slope of a fit line 0.2pts
• The idea of substituting time derivative
withmultiplicationbyγ 0.2pts(alternative
approach of calculating derivative by finite
difference ratio ∆T/δt is significantly less
accurate).
• Deriving a correct formula for C 0.2pts
• Obtainingareasonablenumericalvaluefor
C, i.e. from 13JK−1
to 20 — 0.2pts (else
from 10 to 25: 0.1 pts).
iv) (4 points)
For this part, cooling experiments were
conductedwiththealuminiumplatecovered
by different numbers of silicone rubber lay‐
ers. The plate was heated in water and then
allowed to cool, with temperature recorded
as a function of time.
t (s) 0 60 120 180 240 300
T1 layer (°C) 65.2 60.2 55.5 51.3 47.6 44.6
T2 layers (°C) * 35.3 34.0 32.9 31.9 30.8
T3 layers (°C) 45.4 43.1 41.6 40.0 38.9 37.3
*The data point at t = 0 for 2 layers is
excluded as it did not represent complete
thermal equilibrium across the silicone lay‐
ers. For a cooling process with constant am‐
bient temperature, the temperature follows
an exponential decay:
T(t) = T0 − (Tinitial − T0)e−γt
The time constant γ is related to the thermal
resistance R and heat capacity C by
γ =
1
RC
.
Taking the natural logarithm of the temper‐
ature difference from ambient yields
ln[T(t) − T0] = −γt + const
Time (s)
ln(T-T₀)
0 60 120 180 240 300
2.00
2.25
2.50
2.75
3.00
3.25
3.50
3.75 1 layer, γ = 0.00224 s⁻¹
2 layers, γ = 0.00185 s⁻¹
3 layers, γ = 0.00144 s⁻¹
Using linear regression on the logar‐
ithmic cooling curves, we obtain:
γ1 layer = 2.244 × 10−3
s−1
γ2 layers = 1.852 × 10−3
s−1
γ3 layers = 1.438 × 10−3
s−1
Using our previously determined heat capa‐
city C = 16.5 J/K, we calculate the total
thermal resistance for each case:
R1 layer =
1
γ1 layer · C
= 27.0 K/W
R2 layers =
1
γ2 layers · C
= 32.7 K/W
R3 layers =
1
γ3 layers · C
= 42.1 K/W
Thetotalthermalresistanceincludestheres‐
istance of the silicone layers and the thermal
resistance of convection and radiation. Each
additional layer adds a resistance ∆R =
δ/(κA), where δ is the layer thickness, κ is
the thermal conductivity, and A is the area.
The incremental resistances between layers
are:
∆R12 = R2 layers − R1 layer = 5.7KW−1
∆R23 = R3 layers − R2 layers = 9.4KW−1
Taking the average incremental resistance
per layer:
∆R =
∆R12 + ∆R23
2
= 7.6KW−1
With the silicone rubber pad thickness δ =
0.8 mm = 8 × 10−4
m and area A = 40 × 40
mm2
= 1.6 × 10−3
m2
, we can calculate the
thermal conductivity:
κ =
δ
∆R · A
= 0.066 W/(m·K)
The precision of this experiment can be
increased by longer runs and adding addi‐
tional silicon layers.
• The idea of letting the plate to cool down
while covering it with a different number
of silicon sheets and measuring the T(t)
dependencies, 0.3pts
• For the quantity of recorded data: within
each data series (i.e. a series with a differ‐
entnumberofsiliconsheets),atleast6data
points: 0.3 pts (subtract 0.1 for each miss‐
ing),withinuptothreedifferentdataseries
— in total up to 3 × 0.3pts, i.e. 0.9pts
• Data points in each data series cover at
least 6 minutes: 0.2 pts (0.1 pts if less than
6 but more than 4 minutes) — in total up to
0.6pts
• The idea of using log‐linear plot for data
linearization 0.2pts
• Correctlyplottingthedata: 0.1ptseach, up
to 0.3pts
• Calculating γ for each of the series, 0.1 pts
foreach(uptoforthreedataseries),intotal
up to 0.3pts
• Correctly expressing the heat conductivity
in terms of a difference of the γ values
0.7pts
• Finding conductivity on the basis of all the
γ values (eitherby pair‐wise calculation, or
plottingandfindingthefitlineslope0.4pts
(divide by two if only one pair of γ values
was used)
• Obtained value of κ within a reasonable
range, i.e from 0.05 to 0.1Wm−1
K−1
:
0.3pts(elseiffrom0.04to0.12: 0.2pts; else
from 0.02 to 0.14: 0.1 pts).
