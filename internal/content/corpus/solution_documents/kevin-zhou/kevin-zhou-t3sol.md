---
id: solution-document-kevin-zhou-t3sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-t3-ex001, kevin-zhou-t3-ex002, kevin-zhou-t3-ex003, kevin-zhou-t3-p001, kevin-zhou-t3-p006, kevin-zhou-t3-p007, kevin-zhou-t3-p009, kevin-zhou-t3-p015]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Thermodynamics III
For more about surface tension, which can be quite tricky, see section 9.3 of Wang and Ricardo,
volume 1, or Kalda’s thermodynamics handout, which also covers humidity. Phase transitions
are covered clearly in section 4.5 of Wang and Ricardo, volume 2. For more detail, chapter 17 of
Blundell and Blundell covers various types of thermodynamic work, chapter 26 covers liquid-gas
phase transitions, and chapter 28 covers phase transitions in general. There is a total of 78 points.
1 Surface Tension
Thermodynamics applies to many systems that aren’t ideal gases, or even gases at all; in such
systems the work is not necessarily d̄W = −PdV . The most important example is surface tension,
which we saw in M2 and M7. We begin with the microscopic origin of surface tension.
Idea 1
For a liquid surface in air, there is an associated energy γA where A is the area of the surface.
This leads to a contribution to the work
d̄W = γ dA.
The surface tension γ is also the force per length exerted along the surface.
The energy γA comes from the fact that liquid molecules at the surface are “missing” neigh-
bors, and hence cannot lower their energy as much by forming cohesive bonds. (Technically,
the same is true for the air molecules too, but air is very sparse compared to liquid, so we
just ignore it.)
[3] Problem 1. Here, we use the above idea to very roughly estimate the surface tension of water.
(a) Estimate the spacing between water molecules. (Hint: you could use known atomic distance
scales, or reverse engineer this from the known density of water.)
(b) Estimate the energy of a hydrogen bond, which is a weak type of chemical bond.
(c) Using these results, estimate the surface tension of water, and compare this to actual value
γ = 0.073N/m.
(d) Estimate the typical height of a droplet of water on a flat surface.
Solution. (a) The size of one hydrogen atom is about 10−10 m, also known as an angstrom. Since
water is H2O and oxygen atoms are a bit bigger, we can estimate the distance between water
molecules to be 10−9 m.
(b) The typical maximum energy scale of chemical bonds is about 1eV. There are a few ways
to do this. You can remember that the binding energy of an electron in a hydrogen atom is
13.6eV, and the chemical bond energies are a bit smaller. Or, you can recall that the electrons
in batteries are pushed by chemical reactions, and a typical battery voltage is 1V. Hydrogen
bonds are particularly weak, so their energy is about 0.1eV.
1Kevin Zhou Physics Olympiad Handouts
(c) The number of water molecules per area 1m2 is about 1018, and the energy of each missing
bond is 0.1eV = 1.6 × 10−20 J, giving an estimate of about 0.01J/m2, within an order of
magnitude of the true value.
(d) By dimensional analysis, this must be h ∼
p
γ/gρ where ρ is the density of water. (This can
also be obtained by heuristically minimizing the sum of gravitational potential energy and
surface tension, where the first favors a small height and the second favors a large height.)
Plugging in numbers, we get h ∼ 3mm, which is quite reasonable.
Another way of saying this is that there’s only one dimensionless quantity you can build out
of the given variables, gρh2/γ. This is known as the Eotvos number, and quantifies the ratio
of the importance of gravitational and surface tension forces (just like the Reynolds number
you found in M7 quantifies the ratio of inertial and viscous forces). Since a droplet requires
these forces to balance, the Eotvos number should be of order 1, recovering the answer.
Next, we consider problems that combine surface tension with ideas in thermodynamics.
[2] Problem 2 (PPP 62). Two soap bubbles of radii R1 and R2 are joined by a straw. Air goes from
one bubble to the other and a single bubble of radius R3 is formed isothermally. The atmospheric
pressure is P.
(a) If R1 < R2, which bubble loses air and which bubble gains it?
(b) Show that if γ is zero, then R3
3 = R3
1 + R3
2.
(c) When γ is nonzero, the relation in part (b) is modified. Solve for γ in terms of R1, R2, R3,
and P. Is this a practical way to measure γ for typical soap bubbles?
Solution. We use the fact, derived in M2, that a bubble with radius R has excess pressure 4γ/R.
(a) The bubble with a smaller radius has a larger excess pressure. Thus when the bubbles are
connected, bubble 1 will lose air, and bubble 2 will gain it.
(b) All the bubbles have the same temperature, and the number of moles adds, so the ideal gas
law gives
P1V1 + P2V2 = P3V3.
If there is no surface tension, then all the Pi are equal to P, so V3 = V1 + V2.
(c) Accounting for the excess pressure, we have

P +
4γ
R1

R3
1 +

P +
4γ
R2

R3
2 =

P +
4γ
R3

R3
3
and solving for γ gives
γ =
P
4
R3
3 − R3
1 − R3
2
R2
1 + R2
2 − R2
3
.
Since γ is small, the numerator will be quite small relative to the radii of the bubbles, so
the answer will have a large relative error even if each length is determined precisely. So this
method isn’t very practical.
2Kevin Zhou Physics Olympiad Handouts
[2] Problem 3 (Cahn). A tightly closed jar is completely filled with water. At the bottom of the jar
are two small air bubbles. The pressure at the top of the jar is P0, the radius of each bubble is R0,
and the surface tension is γ. The two bubbles then merge isothermally. Calculate the new pressure
at the top of the jar.
Solution. Since the air-water surface has only one “side”, the excess pressure is ∆P = 2γ/R0. The
process is isothermal and the number of moles of gas stays the same, so by the ideal gas law,

P1 +
2γ
R1

R3
1 = 2

P0 +
2γ
R0

R3
0.
Since water is incompressible, the volume of gas should also stay the same, R3
1 = 2R3
0, which gives
P1 = P0 +
γ
R0
(2 − 22/3
).
[3] Problem 4.  W 1 0USAPhO 2007, problem A3.
[3] Problem 5.  ^ 1 0IPhO 2014, problem 1B.
Idea 2
One can also have liquid, solid, and airin the same problem, which leads to some complications.
Let Al and As be the surface areas of the liquid and solid exposed to the air, and Asl be the
surface area of the liquid-solid interface. Then there are three terms in the work,
d̄W = γl dAl + γs dAs + γsl dAsl.
In other words, there are three surface tensions, one associated with each kind of interface.
Both γl and γs arise from the fact that cohesive liquid-liquid or solid-solid bonds are broken
to form a surface. However, γsl is determined by the adhesive forces between the liquid and
solid, which may lead to a positive or negative contribution to the energy.
Specifically, let’s define the energy of adhesion Usl to be the work needed, per area, to separate
a liquid from a solid, thereby turning a liquid-solid interface into a liquid-air and solid-air
interface. By the definitions above,
Usl = γl + γs − γsl.
Now, Usl can be computed in terms of microscopic chemical bond energies, like γl and γs,
so this result can also be thought of as a microscopic definition of γsl. When a liquid is in
contact with a solid, the solid exerts a force per length of Usl on the boundary of the liquid,
along the solid.
Example 1
The surface of a drop of water makes a contact angle θ with a solid, as shown.
3Kevin Zhou Physics Olympiad Handouts
When θ is acute, the surface is said to be hydrophilic. If θ is obtuse, it is hydrophobic. Find
an expression for θ in terms of the relevant surface tensions.
Solution
If the liquid drop expands outward by δx, the areas of various surfaces change, as shown.
The change in energy is
dU ∝ γsl δx + γl cosθδx − γs δx
and this must be equal to zero in equilibrium. Thus,
cosθ =
γs − γsl
γl
=
Usl
γl
− 1.
This is Young’s equation. The liquid surface tension γl must be positive; otherwise the
liquid could not exist stably at all, but rather would disperse into gas. Thus, the surface is
hydrophilic when Usl > γl and hydrophobic when Usl < γl.
As extreme cases, note that there is no solution for θ when Usl > 2γl. In this limit, the
surface is so hydrophilic that the liquid spreads out and coats the entire solid; this is
known as perfect wetting. There is also no solution when Usl < 0, in which case the liquid
disperses into many tiny nearly spherical drops, each with a tiny area of contact with the solid.
This derivation was in terms of energy, which is typically easier for surface tension. The
same result can be derived in terms of forces, but it’s more subtle than it looks; the standard
derivation in textbooks is wrong. For a clear derivation, see section 9.3 of Wang and Ricardo.
Example 2
A very thin, hollow glass tube of radius r is dipped vertically inside a container of water.
4Kevin Zhou Physics Olympiad Handouts
Find the equilibrium height of the water in the tube.
Solution
We first encountered this problem in M7, where we solved it by using Pascal’s principle,
giving an answer in terms of the contact angle. The derivation above of the contact angle
completes this solution. However, we can also solve the problem using energy or force.
In terms of energy, if we move the height of the water up by δh, then
dU = ρπr2
ghδh + (γsl − γs)2πrδh = 0
and solving gives
h =
2(γs − γsl)
ρgr
=
2γl cosθ
ρgr
using Young’s equation. Alternatively, in terms of force, consider the vertical forces acting
on the column of water inside the tube. There is an upward force of adhesion from the solid
wall of 2πrUsl, and a downward surface tension force from the liquid below of 2πrγl. Then
F = 2πr(Usl − γl) − ρπr2
gh = 0
which yields precisely the same result.
Example 3
Fill a dish with water, and sprinkle something small over it, such as ground pepper. If you
place a drop of detergent in the middle of the dish, then the pepper will “flee” away to the
edges. Why does this happen?
Solution
Detergent is a surfactant, meaning that it decreases the surface tension of water. When one
places the detergent in the middle of the dish, it diffuses outward, making the surface tension
temporarily higher near edges of the dish. This leads to an unbalanced surface tension force
on the pepper grains, pulling them to the edges.
5Kevin Zhou Physics Olympiad Handouts
This phenomenon is called the Marangoni effect. Of course, the force vanishes once the
detergent becomes uniformly distributed, and the surface tension is uniform again.
Remark
Here’s a neat fact: the number of atoms that fit into a drop of water is comparable to the
number of drops of water that fit inside the tallest mountains. We can show this using rough
estimates, in the style of P1. Let Eb be the energy of a typical chemical bond, let m be the
mass of an atom, and let d be the typical distance between atoms.
The size ℓ of a droplet of water, such as one that drips from a leaky ceiling, is the size where
surface tension forces balance gravitational ones. By dimensional analysis, we must have
ℓ ∼
p
γ/ρg
as we showed in M7. Now, ρ ∼ m/d3, and the logic of problem 1 implies γ ∼ Eb/d2, so
ℓ ∼
p
Ebd/mg.
Now consider the height H of the tallest mountains. The height of mountains is limited by
the rigidity of rock; if the pressure is too great, then the rock underneath the mountain will
deform, causing it to sink into the ground. Let’s consider an atom-thick column of this rock.
If it sunk down by a distance d, then the gravitational potential energy harvested would be
mgH. However, the atom at the bottom would have to break its chemical bonds with its
horizontal neighbors, which takes energy Eb. Balancing these gives a maximum height
H ∼ Eb/mg.
We have therefore shown that
ℓ ∼
√
Hd
which implies the original statement, within a few orders of magnitude.
2 Melting, Freezing, Boiling, Evaporation, and Condensation
Idea 3
A phase transition is a sudden, dramatic change in a system as thermodynamic variables
such as the temperature are varied. Most of the ones you’ll see have a latent heat
Q = mL.
For example, if ice is heated up, its temperature will gradually increase until it hits 0◦C. At
that point, the temperature will remain constant until all of the ice is melted, i.e. when the
full latent heat has been supplied.
6Kevin Zhou Physics Olympiad Handouts
Remark
We can roughly estimate the latent heats of melting and evaporation. In general, the latent
heat can go into either in breaking molecular bonds, or increasing the entropy.
When a solid melts into a liquid, the molecules stay right next to each other, so changing
bond energy isn’t the dominant effect. Instead, it’s the increase in entropy as the liquid
molecules become free to move and rotate. Let’s suppose that the molecules, each of mass
mmol, each gain a few extra possible quantum states. This corresponds to an entropy increase
per molecule ∆S ∼ kB, which means a latent heat per mass of
L =
T∆S
mmol
∼
kBT
mmol
=
RT
µ
where µ is the molar mass, or equivalently a latent heat per mole L ∼ RT. For water, we
get L ∼ 105 J/kg, which is of the same order of magnitude as the true value 3.3 × 105 J/kg.
When a liquid becomes a gas, the dominant effect is typically the huge increase in entropy
kB log(Vgas/Vliq) per molecule because they get much more space to move. The ratio inside
the logarithm is huge, which means that while the volumes per molecule Vgas and Vliq vary by
order-one amounts between phase transitions, the logarithm of their ratio is always around
the same value, which turns out to be about 10. This gives a latent heat per mass of
L ∼
10kBT
mmol
=
10RT
µ
.
This result is called Trouton’s rule, and it is surprisingly accurate for most liquids. However,
the latent heat of vaporization for water is noticeably higher, L = 2.26 × 106 J/kg. This is
because of the extra energy needed to break hydrogen bonds.
[3] Problem 6. The temperature T at which a phase transition happens depends on the pressure P,
yielding a “coexistence curve” P(T) where the two phases can be in equilibrium with each other.
The exact relationship is given by the Clausius–Clapeyron equation
dP
dT
=
L
T(V2 − V1)
where L is the total latent heat for some amount of material, and V2 and V1 are the corresponding
volumes of that material when it is in each of the phases. (Depending on convention, L could be
the latent heat per mole, in which case the Vi are volumes per mole, or both quantities could be per
unit mass, in which case the Vi become densities.) In this problem, you will derive this equation.
(a) Consider an infinitesimal Carnot cycle operating between temperatures T and T + dT, and
pressures P and P + dP, chosen so that the isothermal heating and cooling steps involve
supplying latent heat. Compute the work done by the cycle.
(b) Argue that we may ignore all heat transfer except for the latent heat.
(c) Derive the Clausius–Clapeyron equation by setting the efficiency equal to the Carnot efficiency.
This classic setup is also considered in the second half of USAPhO 2023, problem A3.
7Kevin Zhou Physics Olympiad Handouts
Solution. (a) Almost all the work is done in the isothermal processes, due to the changes in
volume in the phase transitions. (The adiabatic steps are negligible, because not only is the
temperature change infinitesimal, but the volume change is also infinitesimal!) The positive
work is thus (P + dP)(V2 − V1) and the negative work is P(V2 − V1), giving
W = (V2 − V1)dP.
(b) The non-latent heat transfer is infinitesimal compared to the latent heat, since it is proportional
to dT, so we only need to count the latent heat Qin = L. (This is also very nearly the same
as Qout, with the difference being the infinitesimal amount of work done.)
(c) The efficiency ϵ = W/Qin is equal to dT/T by expanding the Carnot efficiency, so
dT
T
=
(V2 − V1)dP
L
which is just what we want after a little rearranging.
[3] Problem 7. [A] In this exercise you’ll find a quicker, more advanced derivation of the Clausius–
Clapeyron equation.
(a) The Gibbs free energy is defined as G = U + PV − TS. Show that for reversible processes,
dG = V dP − S dT.
Two phases can only be in thermodynamic equilibrium if they have the same Gibbs free energy
per molecule. Otherwise, turning one phase to the other would reduce the Gibbs free energy,
which turns out to be equivalent to increasing the entropy of the universe. (For more details,
see section 16.5 of Blundell and Blundell.)
(b) Suppose that the Gibbs free energies per molecule G/N for two phases are equal at temperature
T0 and pressure P0. Derive the Clausius–Clapeyron equation by demanding this is also true
at temperature T0 + dT and P0 + dP.
Solution. (a) By the first law, we have d̄Q = dU + d̄W, where d̄W = PdV and, by reversibility,
d̄Q = TdS. Differentiating the definition of Gibbs free energy, we have
dG = dU + PdV + V dP − TdS − SdT = TdS − PdV + PdV + V dP − TdS − SdT
which simplifies to the desired answer.
(b) Consider a sample of the first phase with a given total particle number N. The change in
Gibbs free energy along the coexistence curve is
dG1 = V1 dP − S1 dT.
Similarly, for the second phase,
dG2 = V2 dP − S2 dT.
By the definition of the coexistence curve, these two must be equal, so
(V1 − V2)dP = (S1 − S2)dT.
We also know that S2 − S1 = L/T, so rearranging gives the desired result.
8Kevin Zhou Physics Olympiad Handouts
Remark: Thermodynamic Potentials
You might sometimes see the Clausius–Clapeyron equation written in terms of a difference in
enthalpy ∆H rather than a latent heat. The enthalpy is the state function H = U + PV , so
dH = V dP + d̄Q.
This is useful because many lab experiments happen at constant pressure, dP = 0, leaving
dH = d̄Q. That is, only heat changes the enthalpy, so the latent heat of a phase transition
must be the difference in enthalpies of the two phases, L = ∆H. That in turn is useful
because enthalpy is a state function, so given a new phase transition you can calculate L by
just looking up the enthalpy values for each of the phases in a table.
We’ve now covered all the classic “thermodynamic potentials”. As we just saw, the
enthalpy H is useful for bookkeeping heat. As we saw in T2, the Helmholtz free en-
ergy F is minimized in thermodynamic equilibrium, given constant temperature and
volume. (This is the relative of the statement that the system’s internal energy U is
minimized in equilibrium, given constant entropy and volume, which is just the usual
statement of mechanical equilibrium.) And as we saw in the problem above, the Gibbs free en-
ergy G is minimized in thermodynamic equilibrium, given constant temperature and pressure.
More generally, what’s going on is that the number of possibly useful potentials doubles
every time we add another pair of “thermodynamic conjugate variables”. Before learning
about thermodynamics, we just had U. When we learned about temperature and entropy,
we additionally cared about F. And now upon accounting for pressure and volume, we have
H and G. If we had another pair, such as magnetization and external magnetic field, we
could define 4 more potentials, which would each be useful in different situations.
[2] Problem 8. Ice skaters can move with little friction because they actually glide on a thin layer
of water. Estimate how heavy an ice skater has to be to melt ice by just standing on their skates,
assuming the ice is at temperature −5◦C.
Solution. To melt the ice, we need to apply enough pressure to reach the water-ice equilibrium
point, which we can find with the Clausius–Clapeyron equation. We need to reach 0◦C, so
∆T = 5◦
C = 5K, T = 273K.
The Clausius–Clapeyron equation gives
P =
∆T
T
L

1
ρi
−
1
ρw
−1
≈ 6.76 × 107
Pa
where we used
ρi = 917kg/m3
, ρw = 1000kg/m3
, L = 334000J/kg.
Ice skate blades have a thickness of around 1mm and a length of around 25 cm, so the total area
with two feet will be around 5 × 10−4 m2. The weight PA needed will then be around 30,000N,
corresponding to a mass of about 3,000kg. Thus, unless you are incredibly massive, or the ice
is very close to melting already, pressure alone is not enough to melt the ice. Scientists are still
arguing over the true explanation; you can see a recent review here.
9Kevin Zhou Physics Olympiad Handouts
Now we focus on the specifics of liquid-gas phase transitions.
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
10Kevin Zhou Physics Olympiad Handouts
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
11Kevin Zhou Physics Olympiad Handouts
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
12Kevin Zhou Physics Olympiad Handouts
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
13Kevin Zhou Physics Olympiad Handouts
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
14Kevin Zhou Physics Olympiad Handouts
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
15Kevin Zhou Physics Olympiad Handouts
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
16Kevin Zhou Physics Olympiad Handouts
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
[4] Problem 15. [A] Here we’ll introduce a simple model fora ferromagnetic phase transition. Consider
N electrons, which may have spins si = ±1. The energy of a configuration is
E = −B
X
i
si −
J
2N
X
i̸=j
sisj.
The first term represents the effect of an external magnetic field B, while the second term represents
an interaction, with strength described by the constant J, which tries to make the spins parallel.
(In this simple model, we suppose all distinct pairs of spins interact equally. We could also make
spins only interact with their neighbors, but this would complicate the analysis.)
(a) Define the average magnetization as m =
P
i si/N. Find E(m), the energy in terms of m and
the other constants in the problem.
(b) For a fixed value of m, write down the number of states Ω(m) with that magnetization.
(c) The probability of having a given value of m is proportional to e−βE(m)Ω(m). Argue that this
probability is maximized for the value of m that minimizes the free energy
F = E − TS.
Hence the equilibrium configuration minimizes the free energy. This is the statistical mechan-
ical way to argue that F is minimized; the thermodynamic way was covered in T2.
(d) Assuming that N ≫ 1 and using the approximation for logN! mentioned in T2, show that
the free energy F(m) is minimized when
m = tanh(βB + βJm), β =
1
kBT
.
For a fixed B > 0, plot m(T). This should match with Curie’s law, which you proved in T1.
(e) For B = 0, show there exists a critical temperature Tc, above which m(T) is zero and below
which it is nonzero. Also, find an approximate expression for the magnetization just below Tc.
(f) For T = Tc, find an approximate expression for m for small B.
This is a phase transition where the material spontaneously becomes magnetized, and the simplest
example of a phase transition which can be understood analytically. Though the results in (e) and
(f) depend on the detailed parameters, the scalings found in these parts are universal, in the sense
that they also apply to a wide variety of similar models.
17Kevin Zhou Physics Olympiad Handouts
Solution. (a) The first term is easy,
−B
X
i
si = −NmB.
To do the second term, we note that
X
i̸=j
sisj =
X
i
X
j
sisj −
X
i
sisi =
X
i
si
!2
−
X
i
s2
i = N2
m2
− N.
We hence have
E = −NmB −
1
2
JNm2
+
1
2
J.
(b) Of all N electrons, N+ have si = +1 and N− have si = −1, where N+ + N− = N and
mN = N+ −N−. Thus N+ = N/2+mN/2 and N− = N/2−mN/2. The number of states is
N choose N+.
Ω(m) =
N!
N
2 (1 + m)

! N
2 (1 − m)

!
.
(c) The probability P(m) = e−βE(m)Ω(m) is found with Boltzmann’s theorem, where each state
has a probability of e−E/kBT , so β = 1/kBT. Maximizing P(m) is the same as maximizing
log(P(m)), which gives
log(P(m)) = −
E
kBT
+ log(Ω(m)).
Since we’re optimizing with respect to m, we can multiply both sides by −kBT and maximize
P(m) by minimizing −kBT log(P(m)).
−kBT log(P(m)) = E − TkB log(Ω(m)) = E − TS.
This is just the expression for free energy, thus minimizing free energy for a given value of m
will maximize the probability.
(d) Using logN! ≈ N logN − N gives
log
N!
N
2 (1 + m)

! N
2 (1 − m)

!
!
≈ N logN−
N
2
(1+m)log
N(1 + m)
2
−
N
2
(1−m)log
N(1 − m)
2
.
To simplify this, we can expand the logarithms to get
N

logN −
1 + m
2

logN + log
1 + m
2

−
1 − m
2

logN + log
1 − m
2

and various factors cancel to give
−N

1 + m
2
log
1 + m
2
+
1 − m
2
log
1 − m
2

.
Setting dF/dm to zero gives
0 = −NB − NJm − T
∂S
∂m
18Kevin Zhou Physics Olympiad Handouts
which is equivalent to
N(B + Jm) = −kBT
∂ logΩ
∂m
= NkBT

1
2
log
1 + m
2
−
1
2
log
1 − m
2

.
Then we have
βB + βJm =
1
2
log
1 + m
1 − m
= tanh−1
m.
This matches Curie’s law at high temperature, and when plotted looks like this:
T
1
m(T)
B > 0
(e) With B = 0, for the magnetization to be nonzero, we need a non-zero solution to
m = tanh

Jm
kBT

.
Since the second derivative of tanh(ax), −2a2 sech2
(ax)tanh(ax) is always negative for x > 0,
that means that the slope of tanh(ax) will always be decreasing for x > 0. In order for the
graphs of x and tanh(ax) to intersect again after x = 0, the slope of tanh(ax) must be greater
than the slope of x, which is 1. Thus the critical value is where a = 1, so
Tc =
J
kB
.
To find what happens just below Tc, we Taylor expand the hyperbolic tangent about zero,
which is useful because m will be small,
tanh(x) = x −
x3
3
+ O(x5
).
Letting T = (1 − ϵ)Tc, we have Jm/kBT = m/(1 − ϵ), giving
m ≈
m
1 − ϵ
−
1
3
m3
(1 − ϵ)3
which means that at lowest order in epsilon,
m ≈
√
3ϵ =

3(Tc − T)
Tc
1/2
.
(f) In this case we have m = tanh(m + B/J), and using the same series expansion as above,
neglecting higher-order terms in B, we find m ≈ (3B/J)1/3.
[5] Problem 16.  h 1 0APhO 2011, problem 3. A nice problem on a real-world mechanical phase
transition. Some of the intuition you gained studying the van der Waals gas will be useful.
19Kevin Zhou Physics Olympiad Handouts
4 Thermodynamic Systems
Now that we know all about the different methods of heat transfer, as well as phase transitions, we
consider some questions involving a mix of these concepts as well as mechanics.
Example 6: IPhO 1967.3
Consider two identical homogeneous balls with the same initial temperatures. One of them
is at rest on a horizontal plane, while the other hangs on a thread.
The same quantity of heat is supplied to both balls. Which has the higher final temperature?
Solution
This infamous problem, which appeared on the first IPhO, was the original “troll” Olympiad
question. The balls are different because the one on the plane thermally expands upward,
while the one on a thread thermally expands downward. This tiny change in gravitational
potential energy means that the ball on the thread ends up hotter.
This is an incredible solution – in the sense that it is not credible. About fifty years after
it was written, physicists at Oxford showed that it is wrong! Suppose the logic above were
actually right. Then a heat engine can be constructed with these four steps:
1. Heat the ball on the plane, therefore raising its center of mass.
2. Attach the ball to a thread and remove the plane.
3. Cool the ball on the thread, therefore raising its center of mass.
4. Put a plane just under the ball’s new position and remove the thread.
This is a heat engine, where the work goes into raising the ball. If the ball is only heated
and cooled a tiny amount dT, then the heat supplied is proportional to dT, but the distance
through which the ball rises is also proportional to dT. Therefore, the efficiency of the cycle
becomes a constant as dT goes to zero, which exceeds the Carnot efficiency (which instead
goes to zero) and hence violates the second law of thermodynamics.
A real ball doesn’t violate the second law, because it also stretches while hanging on the
thread, and squashes while on the plane. The slick solution neglects these effects and considers
only thermal expansion, but the above argument shows that this assumption is inconsistent:
you can’t have the latter without the former. This is an example of how thermodynamic
considerations alone can, perhaps surprisingly, yield information about mechanical properties.
20Kevin Zhou Physics Olympiad Handouts
The paper linked above performs a careful analysis and shows that, for most materials, the
ball on the thread instead ends up colder.
Example 7
Why does a breeze cool you down, and why do clothes make you warmer?
Solution
Like most gases, air has a very small thermal conductivity, and enough viscosity so that you
carry around a thin layer of warm air with you wherever you go. (The main reason you
cool down is because this warm air rises away from you, by convection.) When a breeze is
blowing, it strips off this cushion of warm air, which is why you feel colder.
When you’re sweaty, the same logic applies. The layer of air you carry around is also moist,
saturated with water vapor from your sweat. Again, a breeze removes this layer, allowing
more evaporation to happen, cooling you down.
Clothing material itself actually has a higher thermal conductivity than air. Its real purpose
is to trap the layer of warm, moist air around you, preventing it from being blown away by
breezes or rising from convection. (That’s also how greenhouses keep plants warm: the sun
warms air near the ground, and the glass room prevents that air from rising away. Confusingly,
this has nothing to do with the atmospheric “greenhouse effect.”)
Example 8
Can you boil water in a pot by putting it into a bigger pot of boiling water?
Solution
No, because boiling is a phase transition that requires latent heat. The water in the small
pot can get heated up to boiling temperature, but it can’t start boiling, because at that point
it’ll be at the same temperature as the bigger pot, and no more heat can flow.
[1] Problem 17 (IPhO 1996). A thermally insulated piece of metal is heated under atmospheric
pressure by an electric current so that it receives a constant power P. The temperature is
T(t) = T0(1 + a(t − t0))1/4
where T0, t0, and a are constants. Find the heat capacity C(T).
Solution. By definition, C(T) = dQ/dT. With constant power P, dQ = P dt, and
dT
dt
=
P
C(T)
=
1
4
T0 (1 + a(t − t0))−3/4
a =
aT4
0
4T3
.
This gives the answer,
C(T) =
4T3P
aT4
0
.
21Kevin Zhou Physics Olympiad Handouts
[3] Problem 18. NBPhO 2011, problem 8. A tricky data analysis problem.
[3] Problem 19. NBPhO 2014, problem 9. A nice problem reviewing radiation and kinetic theory.
[4] Problem 20. @ 1 0EuPhO 2019, problem 1.
5 Thermodynamic Fluids
In this section, we focus on problems combining thermodynamics with fluids, as covered in M7.
We begin with some questions which only require fluid statics.
[5] Problem 21.  h 1 0IPhO 1998, problem 2. A very nice real-world fluids/thermodynamics question.
[5] Problem 22.  h 1 0APhO 2009, problem 3. Another nice, simple model of a real-world phenomenon.
Idea 6
In M7 we considered Bernoulli’s principle for incompressible liquids with no temperature.
However, in general fluids are compressible and carry internal energy. To derive Bernoulli’s
principle in this more general context, we apply conservation of energy to a tube of streamlines,
as one mole of ideal gas flows through it. We neglect gravity, since it typically is unimportant
for such rapid flows. The energy of a mole of gas at the entry of the tube is
1
2
µv2
1 + cV T1
where µ is the molar mass, and cV is the heat capacity per mole. Similarly, the energy of a
mole of gas at the other end is
1
2
µv2
2 + cV T2.
Assuming there’s no heat transfer, the difference must be the work done on the tube of fluid
as a mole of gas flows through,
p1δV1 − p2δV2 = R(T1 − T2)
where the δVi are the volumes of a mole of gas at the entry and exit, and we used the ideal
gas law. Combining and using cp = cV + R gives
1
2
µv2
+ cpT = const
along a streamline in steady flow.
Remark
You might also see Bernoulli’s principle in the form
1
2
v2
+ gh + cpT = const
where we’ve added on the contribution of gravitational potential energy. In this case, cp is
the heat capacity at constant pressure per unit mass, not per mole. Unfortunately, people
22Kevin Zhou Physics Olympiad Handouts
use the letter c or C to denote many different kinds of (specific) heat capacities. Whenever
doing a problem where a heat capacity is given, check the dimensions!
Example 9: Wang and Ricardo
A rocket propels itself by burning fuel to release diatomic gas of temperature T1 in its
combustion chamber, which has cross-sectional area A1. The gas then flows adiabatically
and is expelled out of the nozzle, which has a cross-sectional area A2, at a speed v2 relative
to the rocket, pressure p2 (which is equal to the ambient pressure), and temperature T2 < T1.
In the limit of steady flow, determine the thrust experienced by the rocket.
Solution
Since the flow is adiabatic and the gas is diatomic,
p1 = p2

T1
T2
7/2
.
As discussed in M7, mass conservation in steady flow means ρAv must be the same on both
sides of the nozzle. The ideal gas law tells us that ρ ∝ p/T, so
p1A1v1
T1
=
p2A2v2
T2
.
Combining these two gives a relation between the velocities,
v1 = v2
A2
A1

T2
T1
5/2
.
Bernoulli’s principle gives
1
2
µv2
1 +
7
2
RT1 =
1
2
µv2
2 +
7
2
RT2
where we neglected the gravitational energy. Combining with our previous relation gives
v2
2 =
7R(T1 − T2)
µ(1 − (A2/A1)2(T2/T1)5)
.
Finally, the thrust is
F =
dp
dt
= ρ2A2v2
2 =
µp2A2v2
2
RT2
=
7p2A2(T1 − T2)
T2(1 − (A2/A1)2(T2/T1)5)
.
Example 10
How does the Bernoulli’s principle above reduce to the incompressible one used in M7?
23Kevin Zhou Physics Olympiad Handouts
Solution
This is trickier than it seems. For simplicity, let’s neglect the gravitational contribution.
Then by the ideal gas law, the compressible Bernoulli’s principle derived above is
1
2
v2
+
γ
γ − 1
P
ρ
= const.
When the flow is incompressible, ρ is constant, but if we just multiply by ρ we get
1
2
ρv2
+
γ
γ − 1
P = const
which is not the expected result!
In fact, there’s something more troubling under the surface. The Bernoulli’s principle
derived in M7 applies to water flow, since water is incompressible. And the compressible
version derived above applies to ideal gas flow, since gas is compressible. But in M7, we
applied the incompressible Bernoulli’s principle to gas flow! How does that even make sense?
The resolution to the two questions is the same: the key assumption needed to get to the
original form of Bernoulli’s principle is not that an ideal gas is incompressible, because that’s
simply not true. Instead, the key assumption is that the gas flow is much slower than the speed
of sound, v2 ≪ c2
s ∼ P/ρ. In this limit, the kinetic energy term in the generalized Bernoulli’s
principle is much smaller than the internal energy term. Thus, in the course of subsonic
flow, the temperature, pressure, and density of the gas can only change by a small relative
amount. For example, the pressure is P(x) = P0 + ∆P(x) where ∆P ≪ P0. (To avoid some
confusion, remember that Bernoulli’s principle always assumes steady flow. The air in my
bike tires has ∆P ≈ 6P0, but that’s because the process of pumping a tire is not a steady flow.)
But if that’s true, then what went wrong with just multiplying our result above by ρ?
The point is that for very subsonic flows, the v2 term is much smaller than the P/ρ term,
so we need to evaluate the P/ρ term to a very good relative precision to get correct
results. (If my bank was careless and randomly misplaced 0.1% of its money, then that
might mean losing 100% of my savings, since my account’s value is small compared to its total.)
Now we’re ready to do the derivation properly. We start from the first equation above, but
we don’t multiply by ρ. Instead, we note that P/ργ is constant because the gas is compressed
adiabatically, since we neglected heat transfer, so we multiply by ρ0 = ρ(P0/P)1/γ, giving

P0
P
1/γ
1
2
ρv2
+
γ
γ − 1

P
P0
(γ−1)/γ
P0 = const.
Since the first term is the small one, we can approximate P0 ≈ P there without much error.
As for the second term, we expand (P/P0)(γ−1)/γ with the binomial theorem to get
1
2
ρv2
+
γ
γ − 1
P0 + ∆P = const
and subtracting the constant P0/(γ − 1) recovers the “incompressible” Bernoulli’s principle.
24Kevin Zhou Physics Olympiad Handouts
In conclusion, the Bernoulli’s principle derived in this problem set works for arbitrarily fast
gas flows, while the incompressible form in M7 only works for very subsonic flows. But that
doesn’t mean you should never use the latter. When the flow is subsonic, the incompressible
form is easy to use, while the more general form requires great care to get the correct result.
You should only use the general form when it’s actually necessary, i.e. for the very fast gas
flows considered in the following problems.
[3] Problem 23 (Feynman). Air with density ρ, pressure P, and adiabatic index γ flows at uniform
speed v through a smooth pipe of constant cross-sectional area A. It is heated as it passes a wire
grid, which offers negligible resistance to the flow, with a power Q̇. This is a simple model for a jet
engine. For simplicity, suppose the output pressure is also P, though this would not be true in a
practical engine.
(a) Find the speed v′ with which the air exits the tube, in terms of the given parameters.
(b) Find the thrust produced, in terms of v′ and the other parameters.
(c) In the limit of small Q̇, find the engine’s efficiency.
Next to rockets and computing chips, jet engines are some of the most difficult technologies humans
can build; see this article for a nice overview of the history.
Solution. (a) We will conserve mass and energy. Denote quantities that leave with a prime, and
let µ be the molar mass. The rate of mass flow in must match the rate out,
J = ρAv = ρ′
Av′
.
To apply energy conservation, we use a modified form of Bernoulli’s principle, which accounts
for the inflow of heat,
Q̇
J
=
1
2
(v′2
− v2
) +
cP
µ
(T′
− T).
The ideal gas law states
ρ =
µP
RT
which we can use to eliminate µ. Additionally using cp = γR/(γ − 1) gives
Q̇
J
=
1
2
(v′2
− v2
) +
P
ρT
γ
γ − 1
(T′
− T).
Since P = P′, combining the ideal gas law with mass conservation gives
v
T
=
v′
T′
.
Using this to eliminate T′ will give a quadratic equation for v′ in terms of known parameters,
1
2
v′2
+
c2
0
v
v′
−
1
2
v2
+ c2
0 +
Q̇
J
!
= 0, c2
0 =
γ
γ − 1
P
ρ
.
Using the quadratic equation and taking the physical root,
v′
=
q
(v + c2
0/v)2 + 2Q̇/J − c2
0/v.
As a check, note that v′ = v when Q̇ = 0.
25Kevin Zhou Physics Olympiad Handouts
(b) By conservation of momentum, the thrust must be
F = J∆v = ρAv(v′
− v).
(c) By applying the binomial theorem to the result of part (a), the efficiency is
Fv
Q̇
≈
1
1 + c2
0/v2
which is small for low v, and approaches an efficiency of 1 as v → ∞.
[3] Problem 24 (Wang 2.17). Consider an ideal gas with pressure p, density ρ, and adiabatic index
γ. A density pulse is set up in the gas, traveling along the −x direction with speed c. Inside the
pulse, the gas has local velocity v ≪ c in the lab frame, and a local density ρ + ∆ρ, where ∆ρ ≪ ρ.
(a) Transform to the reference frame where the pulse is at rest, and find three constraints, using
mass conservation, energy conservation, and the fact that the gas is compressed and expanded
adiabatically when it enters and leaves the pulse (i.e. heat conduction is negligible).
(b) Combine these relations to find c. Work to lowest order in the small quantities v/c and ∆ρ/ρ.
The quantity c is the adiabatic speed of sound in a gas, which we’ll derive in a different way in W3.
For more about sound waves, see chapter 31 of Blundell, or section 14.1 of Lautrup.
Solution. (a) We work in the reference frame moving to the left with speed c. In this frame, the
gas has velocity c everywhere, except at the pulse, where it has velocity c + v. The density
away from the pulse is ρ and the density at the pulse is ρ + ∆ρ.
Mass conservation gives
(c + v)(ρ + ∆ρ) = cρ.
Using cp = (γ/(γ − 1))R, Bernoulli’s principle gives
1
2
µc2
+
γ
γ − 1
RT =
1
2
µ(c + v)2
+
γ
γ − 1
R(T + ∆T).
Finally, since the gas is compressed adiabatically we have
T ∝ ργ−1
.
(b) Mass conservation gives the relation
∆ρ
ρ
≈ −
v
c
to lowest order. Bernoulli’s principle gives
µcv = −
γ
γ − 1
R∆T
to lowest order. Finally, the adiabatic condition to lowest order is
∆T
T
≈ (γ − 1)
∆ρ
ρ
.
26Kevin Zhou Physics Olympiad Handouts
Combining this with Bernoulli’s principle to eliminate ∆T gives
µcv ≈ −γRT
∆ρ
ρ
≈ γRT
v
c
.
Thus, solving for c, we conclude
c2
=
γRT
µ
=
γpV
µn
=
γp
ρ
which is the adiabatic speed of sound.
Example 11
Show that the kinetic and potential energy of a sinusoidal, adiabatic sound wave are equal.
Solution
First, we explicitly define our notation. The sound wave profile is
P = P0 + ∆P cos(kx − ωt), ρ = ρ0 + ∆ρ cos(kx − ωt)
and
v
c
=
v0
c
cos(kx − ωt), T = T0 + ∆T cos(kx − ωt).
In problem 24, you derived relations between the parameters (∆P)/P0, (∆ρ)/ρ0, v0/c, and
(∆T)/T0, which are all assumed small, and of the same order of magnitude. The total energy
density of the fluid, up to second order, is
u =
1
2
ρ0v2
+ cvρT
where here cv is the heat capacity per unit mass. The first term is the bulk kinetic energy
density, while the change in the second term is the potential energy density, where we’re
using the usual meaning of potential energy as any energy which isn’t kinetic.
This all looks pretty straightforward, but there’s a reason that most introductory textbooks
never write down this expression. You can see the issue by applying the ideal gas law to the
second term. Since P ∝ ρT, this term is proportional to P, but the average of P is just P0.
This suggests that sound waves have no potential energy density at all, which is wrong. For
instance, if you instantly take out all the macroscopic kinetic energy, setting v to zero, then
there is still energy remaining that can be harvested because the pressure is nonuniform.
Here’s the problem: energy is inherently a second order quantity. If ρ and T were both small
quantities, then it would be good enough to multiply them to get the answer to second
order. But instead, ρ and T are the quantities ρ0 and T0 shifted by small quantities ∆ρ and
∆T. That means that to get the quantity ρT correct to second order, we need to get both ρ
and T individually correct to second order, which is beyond the first order approximations
we started with! This is a conceptual issue that occurs whenever you have a perturbation
that shifts existing properties of a medium. (It doesn’t happen for waves on a string, which
we cover in W1, because those waves are parametrized by y, and y = 0 when there is no wave.)
27Kevin Zhou Physics Olympiad Handouts
It’s possible to fix this issue, but we need to be careful. First, let’s use the ideal gas law to
change variables to pressure, so we only have one quantity to deal with,
cvρT =
R
µ
1
γ − 1
ρT =
P
γ − 1
.
The key insight is that we can keep our expression for ρ the same. The reason is that for
the wave equation to continue to be satisfied at second order, we can only add second order
terms that are constant, or also sinusoids. Adding a constant to the density is not allowed
because we know the total number of particles is conserved, so the mass
R
ρdV is, and
adding a sinusoid can be absorbed by simply redefining ∆ρ.
Now, we know that P ∝ ργ, and letting δρ = ∆ρcos(kx − ωt) for convenience, we have
P
P0
=

ρ
ρ0
γ
= 1 +
γ δρ
ρ0
+
γ(γ − 1)
2

δρ
ρ0
2
.
When we integrate the first term, we get the internal energy of the fluid at rest. The second
term averages to zero, and so can be disregarded. The third term gives the desired result,
u =
1
2
ρ0v2
+
γP0
2

δρ
ρ0
2
.
Now that the energy is in terms of small quantities squared, we can relax and use first order
results. Using the results derived in problem 24, this can be simplified to
u =
1
2
ρ0v2
+
1
2
ρ0c2

δρ
ρ0
2
and the two contributions are equal, because v/c = δρ/ρ0.
As a check on this result, it is often true that the energy density is equal to the momentum
density times the wave speed, u = pc. (For example, this corresponds to E = pc for photons.)
The momentum density is p = ρv = (ρ0 + δρ)v. The first order term represents the overall
momentum of all of the gas, not the momentum due to the sound wave itself, so it can be
ignored. The second order term is
p = δρv =
ρ0v2
c
which is exactly the expected result.
Ironically, while we began this discussion by noting that the energy of a transverse wave
on a string is more straightforward, the longitudinal momentum of a transverse wave on a
string is far more confusing – how can there be any if the string moves only transversely?
Does the above identity u = pc break down for these waves, or do we just need to evaluate
p more carefully? (For one perspective in this ongoing debate, see this paper.) All of this is
too subtle to be relevant to Olympiads; even string theorists get confused about it. It’s just
a reminder that there are always subtleties lurking in even basic physics.
28Kevin Zhou Physics Olympiad Handouts
[3] Problem 25.  h 1 0IPhO 2012, problem 1B. A tricky real-world problem on fluids and condensation.
29
