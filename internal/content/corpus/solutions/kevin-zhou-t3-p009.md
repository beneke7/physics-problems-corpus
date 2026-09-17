---
id: kevin-zhou-t3-p009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t3-p009
solution_type: author
source_document: solution-document-kevin-zhou-t3sol
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

[3] Problem 9. Suppose that at pressure P0, a liquid-gas phase transition takes place at temperature
T0. Assume the gas obeys the ideal gas law, and neglect the volume of the liquid.
(a) Assuming the latent heat is temperature-independent, compute the coexistence curve P(T).
(b) In reality, the latent heat has a mild dependence on temperature, changing the results. As
a crude model, suppose that the latent heat per molecule for a monatomic liquid-gas phase
transition has two components: a fixed energy E0 required to break the bonds with other
molecules in the liquid, and the P dV work that must be done to “push” the rest of the gas
away, since the new gas molecule takes up space. Under these assumptions, what is the latent
heat per molecule, and qualitatively how does the dependence P(T) change?
(c) A closed container of constant volume contains both liquid and gas in equilibrium, at temper-
ature T. Let the latent heat of vaporization per mole be L, and neglect the volume of the
liquid. If the temperature is increased by a very small amount ∆T, by what factor does the
number of moles in gas form change?
Solution. (a) We have V2 = nRT/P and V1 can be ignored, so
dP
dT
=
L
nR
P
T2
.
Separating and integrating, Z P
P0
dP
P
=
Z T
T0
L
nRT2
dT
which gives
P(T) = P0e
− L
nR

1
T
− 1
T0

∝ e−L/nRT
.
(b) The latent heat per molecule is now
L = E0 + P ∆V
where ∆V is the change in volume due to that molecule. But ∆V = V/N, so
L = E0 +
PV
N
= E0 + kBT.
The total latent heat is L = NL. The Clausius–Clapeyron equation now looks like
dP
dT
=
E0
kB
P
T2
+
P
T
.
Separating and integrating gives
Z
dP
P
=
E0
kB
Z
dT
T2
+
Z
dT
T
which gives
P(T) = P0

T
T0

e
−
E0
kB

1
T
− 1
T0

.
In other words, compared to part (a) where we neglected the P ∆V contribution, there is now
an additional linear temperature dependence.
10
Kevin Zhou Physics Olympiad Handouts
(c) We apply the Clausius–Clapeyron equation to a small temperature change,
∆P
∆T
≈
L
TV
where L and V are the latent heat per mole and volume per mole. By the ideal gas, V = RT/P.
Then
∆P
∆T
=
L
RT2/P
which solves to give
∆P
P
=
L
RT
∆T
T
.
The ideal gas law tells us that P ∝ nT, which means for small changes,
∆P
P
≈
∆n
n
+
∆T
T
.
Combining these results,
n + ∆n
n
= 1 +
∆P
P
−
∆T
T
= 1 +
∆T
T

L
RT
− 1

.
In other words, while the pressure and temperature of the vapor both certainly go up, whether
the number of moles goes up or down depends on the specific substance! However, most
liquids obey Trouton’s rule, L ≈ 10RT, as explained in a remark above, so that L/RT − 1 is
positive and the number of moles of gas goes up.
Example 4: APhO 2004.3
A cylinder is divided into two parts by a mobile partition, which is free to move and conducts
heat well. One compartment contains one mole of water vapor, and the other contains
one mole of nitrogen gas. Initially, both compartments have volume V0, pressure 0.5atm,
and temperature 373K. A piston is then slowly inserted, compressing the system isothermally.
Sketch the P(V ) curve.
Solution
The answer is shown below.
11
Kevin Zhou Physics Olympiad Handouts
Initially, we just have an ordinary isothermal compression. Both the water vapor and nitrogen
gas compartments are compressed at the same rate, since they must have equal pressures and
temperatures. When the total volume is halved, the pressure in both reaches one atmosphere.
Now, water condenses at temperature 373K at pressure p = 1atm. Thus, as the volume
continues to decrease, the pressure stays constant, the nitrogen compartment’s volume stays
the same, and the water compartment shrinks, as the vapor gradually condenses to liquid.
This process completes once all the vapor is condensed, which is roughly when the total
volume has halved again. After this point, we again have ordinary isothermal compression,
of the nitrogen gas alone.
[3] Problem 10. NBPhO 2016, day 2, problem 2. A problem on phase transitions with data analysis.
[3] Problem 11.  ^ 1 0USAPhO 2015, problem A4. A heat engine with phase transitions.
In practice, water on Earth is more subtle because there are three substances at play: liquid water,
water vapor, and the rest of the atmosphere.
Idea 4: Humidity
Consider a box at constant temperature T containing only water, and let P(T) be the liquid
water-water vapor coexistence curve. In equilibrium, if we apply any pressure below P(T),
all of the water will be in vapor form, and if we apply any pressure above P(T), all of the
water will be in liquid form. Physically, applying a higher pressure forces the water vapor to
condense into liquid, as it packs the molecules closer together, and applying a lower pressure
forces the liquid to evaporate into vapor, as it cannot hold itself together against the thermal
motion of the molecules. Coexistence is impossible, except at exactly the pressure P(T).
However, in everyday life, the two easily coexist over a wide range of pressures. The subtlety
is that the total air pressure has two contributions,
Ptot = Patm + Pvap
where the first is the pressure due to atmospheric gases, such as nitrogen and oxygen, and the
second is the pressure due to water vapor in the air. In everyday conditions, Patm is about
100 times larger than Pvap, and the liquid water feels the pressure Ptot. But water vapor evap-
orates and condenses independently of the air, so Patm has no effect on it at all. As a result,
in equilibrium liquid water and water vapor can coexist, with the vapor having a pressure
12
Kevin Zhou Physics Olympiad Handouts
Pvap = P(T). The coexistence curve P(T) is thus also called the (equilibrium) vapor pressure.
The relative humidity ϕ is defined as
ϕ = Pvap/P(T)
and quantifies how saturated the air is with water vapor; under normal atmospheric conditions
ϕ < 1. The dew point Td satisfies
P(Td) = Pvap
and represents the temperature at which water would begin condensing out of a given parcel
of air, cooled at constant pressure. This determines, e.g. the height at which rising air turns
into a cloud, which explains why some clouds have flat bottoms.
The boiling temperature Tb satisfies
P(Tb) = Ptot.
This is the temperature at which a bubble of pure water vapor, which forms inside the
liquid, has a high enough pressure to push the liquid away and continue to expand. Beyond
this temperature, liquid water can’t exist; it all turns to vapor. When boiling water on
the stove, the produced water vapor flies away, so that Ptot ≈ Patm. In a sealed pressure
cooker, the vapor accumulates, increasing Ptot. This increases Tb, allowing food to cook faster.
At the interface between two liquids, boiling can start at a significantly lower temperature
than the boiling temperature of either liquid, because both of the liquids contribute to the
vapor pressure. This is called border boiling, and is treated in IZhO 2020, problem 2.
Example 5
How does alcohol distillation work?
Solution
Let alcohol and water have coexistence curves/equilibrium vapor pressures of Pa(T) and
Pw(T). The vapor pressure of alcohol is higher, with pure alcohol boiling at about 80◦ C.
Consider heating a mixture of alcohol and water, with mole fractions Xa and Xw, with
Xa + Xw = 1. If a small bubble of gas forms inside, then Raoult’s law states that both
alcohol and water vapor will be present, and contribute independently in proportion to their
mole fractions. Then the boiling point satisfies
XaPa(Tb) + XwPw(Tb) = Patm.
This is between the individual boiling points of alcohol and water. By the ideal gas law, the
ratio of mole fractions of alcohol and water in the vapor is the ratio of partial vapor pressures,
13
Kevin Zhou Physics Olympiad Handouts
so
X′
a
X′
w
=
Xa
Xw
Pa(Tb)
Pw(Tb)
>
X′
a
X′
w
since Pa(Tb) > Pw(Tb).
By the above logic, we could get completely pure alcohol by just repeating the distillation
procedure several times. Actually, it’s more complicated than that because the alcohol and
water molecules will interact, causing Raoult’s law to break down; our calculation above only
applies for an “ideal mixture”. For more about distillation, see these notes.
[3] Problem 12. Kalda Thermodynamics, problem 22. A problem on practically measuring humidity.
Solution. (a) The dry bulb thermometer is just at room temperature, T0 = 20◦C. Meanwhile,
the wet bulb thermometer is cooled down by evaporation. In this part, we are neglecting heat
conduction, so equilibrium is only reached when evaporation from the wet bulb stops. This
occurs when the relative humidity at the wet bulb thermometer itself reaches 100%.
Let ps(T) be the saturation pressure as shown in the graph. The vapor pressure of water
vapor in the room is
pa = rps(T0) = (0.9)(2.3kPa) = 2.07kPa
by reading off the graph. The wet bulb temperature T satisfies
pa = ps(T)
and from the graph we read off T = 18.5◦C. Thus, the difference is 1.5◦C.
(b) We balance the heat flowing in and out of the wet bulb thermometer,
a(T0 − T) = b(ps(T) − pa).
In this part, pa is zero, so we have
−65Pa/K =
ps(T)
T − T0
.
Therefore, to find T, we draw a line on the graph passing through p = 0 and T = 20◦C and
slope −65Pa/K. The solution is where this line intersects the curve ps(T), giving 6.5◦C.
14
Kevin Zhou Physics Olympiad Handouts
(c) The temperature we’re looking for satisfies
−65Pa/K =
ps(T) − rps(T0)
T − T0
.
The solution will be near T0 itself, which means it suffices to approximate ps(T) near T0 = 20◦C.
By reading off the graph again, we have the linear approximation
ps(T) ≈ 2.3kPa + (T − T0)(0.14kPa/◦
C).
Plugging in and simplifying, we find the temperature difference obeys
∆T ≈ (11◦
C)(1 − r).
Any answer within ∼ 15% of this is good enough.
(d) The way evaporation works is that every water molecule on the laundry has some probability
per time of jumping off, while every water molecule in the surrounding air has some probability
per time for sticking to the laundry. The two processes balance when the humidity is 100%.
Thus, the net rate of evaporation is proportional to 1 − r, which means the laundry in 80%
humidity dries 4 times faster than in 95% humidity.
[3] Problem 13. NBPhO 2006, problem 1. (Note that the comma in the density of air in part 4
denotes a decimal point.)
3 General Phase Transitions
In this section we’ll illustrate some of the ideas needed to analyze phase transitions in general.
Idea 5
A nonideal gas can be described by the van der Waals equation of state,

P +
an2
V 2

(V − nb) = nRT.
You derived the pressure correction in T1 assuming weak attractive intermolecular forces;
the modification of the volume accounts for the fact that the molecules can’t overlap each
other. Remarkably, this equation of state also contains a liquid-gas phase transition!
To see this, consider a plot of the isotherms on a PV diagram.
15
Kevin Zhou Physics Olympiad Handouts
At low temperatures, the isotherms can have negative compressibility, meaning that the
pressure decreases as the volume decreases. This is unphysical, and means that the fluid is
unstable at these points: if you push on it, it’ll just keep shrinking, until it condenses into a
dense liquid. Therefore, parts of these isotherms should be replaced with horizontal lines;
along these horizontal parts liquid and gas coexist, in varying proportions.
Specifically, everything underneath the dotted line should be replaced with horizontal lines.
As described in more detail in section 26.1 of Blundell, this can be shown by demanding
that the liquid and gas have equal Gibbs free energy. As a result, the total area on the PV
diagram of the isotherm that goes underneath the horizontal line equals the area that goes
above it; this is called Maxwell’s equal area rule.
There is a critical isotherm marked in bold above. Above this temperature, there is no
liquid-gas phase transition at all; instead we just have one phase, called a supercritical fluid.
Specifically, this is the temperature of the first isotherm that no longer has a local minimum
in pressure, which means 
∂P
∂V

T
=

∂2P
∂V 2

T
= 0
at the critical temperature T = Tc. As you will see in problem 14, this occurs at
Vc = 3nb, Tc =
8a
27Rb
, Pc =
a
27b2
.
This point, marked above, is called the critical point.
16
Kevin Zhou Physics Olympiad Handouts
Remark
The van der Waals equation of state is accurate for a sparse gas with weak attractive inter-
actions; you shouldn’t expect it to be accurate for dense gases or the liquid state. However,
it still is extremely important because it is one of the simplest equations of state that gives
a liquid-gas phase transition. Moreover, if you zoom in near the critical point and write the
pressure, volume, and temperature as multiples of the critical pressures, volumes, and temper-
atures, it turns out that all equations of state give the same results! This deep phenomenon
is called universality, and is explained with the renormalization group.
[3] Problem 14. INPhO 2018, problem 6. A series of exercises on the van der Waals gas. Feel free to
look up definitions for part (a).
