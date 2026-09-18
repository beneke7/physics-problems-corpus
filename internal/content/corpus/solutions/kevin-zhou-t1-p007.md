---
id: kevin-zhou-t1-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p007
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[5] Problem 7. In this problem we’ll make a simple model for the atmosphere.
(a) Assume the atmosphere to be an ideal gas at constant temperature T in mechanical equilibrium,
with gas molecules of mass m. Show that the pressure depends on height as
P(h) = P0 e−mgh/kBT
by demanding that small parcels of gas be in mechanical equilibrium.
(b) The assumption of constant temperature is not very accurate. Sunlight warms air near the
ground, causing large parcels of it to slowly rise; simultaneously other parcels of air slowly
fall. This results in a well-mixed atmosphere and, since heat conduction in air is poor, the
rising and falling processes are approximately adiabatic, not isothermal. Assuming the air
molecules are diatomic with mass m, show that the temperature varies linearly with height.
Does the atmosphere get colder or hotter with increasing height?
(c) Estimate the rate of temperature change with height numerically; is your result reasonable?
(d) Now ignoring the mixing effect of the sun, argue that an atmosphere with a temperature
gradient of larger or smaller magnitude than the result you found in part (c) will be unstable
or stable against spontaneous convection, respectively. (Hint: see idea 4.)
(e) ⋆ More generally, one might wonder how the total energy of the atmosphere, summed over
all molecules, is divided into kinetic (i.e. thermal) and potential (i.e. gravitational) energy.
Show that for any configuration in mechanical equilibrium (i.e. not necessarily adiabatic or
isothermal), Egrav/Ekin has the same value, and find this value. Assume the atmosphere is
thin enough to treat g as uniform, and set the potential equal to zero at the Earth’s surface.
When “thermal inversion” occurs, the temperature gradient has the opposite sign to the natural
one you found in part (b), causing the atmosphere to be very stable against convection. Such
events can cause very high air pollution in cities, since the pollutants can’t escape. For more about
atmospheric physics, see chapter 37 of Blundell.
Solution. (a) The ideal gas law becomes PV = NkBT, and the density is ρ = Nm/V , so
Pm = ρkBT. By considering forces on a parcel of height dh and cross sectional area A, we see
AdP = −ρgAdh
which implies
dP
P
= −
mg
kBT
dh.
Integrating yields the desired result.
(b) Since the expansion is adiabatic, TγP1−γ is constant, so T ∝ P1−1/γ. This implies
dT
T
=
dP
P
(1 − 1/γ).
7
Kevin Zhou Physics Olympiad Handouts
Since the motion of the parcels of air is slow, hydrostatic equilibrium remains approximately
true. Using the equation derived in part (a) gives
dT
T
= −
mg
kBT
(1 − 1/γ)dh
which simply rearranges to
dT
dh
= −
mg
kB
(1 − 1/γ)
which is a linear decrease as desired.
(c) We have
dT
dh
= −
mg
kB
2
7
≈ −
2
7
(30g/mol)(9.8m/s2)
(8.314kgm2/(s2 K2 mol))
≈ −10K/km
which is reasonable. One reason it’s a bit unrealistically high is because air typically contains
water vapor, which increases the heat capacity.
(d) Suppose the temperature gradient is smaller in magnitude than the gradient we found above.
Consider a packet of air that is perturbed and moves upward. As it moves upward, it expands
adiabatically, lowering its temperature; since the existing temperature gradient is less than
in the well-mixed adiabatic atmosphere, the packet will end up colder than its surroundings.
However, it is also at the same pressure because mechanical equilibrium is quickly reached,
so since P ∝ ρT, the density is higher and it falls back down. Hence the situation is stable.
The same reasoning occurs in reverse for a larger temperature gradient.
(e) First, let’s get everything in a convenient set of variables. For a small mass dM of gas, where
m is the mass per gas molecule, we have
dEkin = βkBT dM/m, dEg = ghdM
where we defined β = CV /R. Using the ideal gas law ρ = mP/kBT and substituting in
dM = ρAdh, we have
dEkin = βPAdh dEg = ρghAdh
Now, the key idea is to relate these energies by integration by parts. For concreteness, suppose
the atmosphere ends at height H, so that P(H) = 0. (This isn’t a necessary assumption; we
could also take H → ∞ at the end.) Then we have
Ekin = βA
Z H
0
P dh = β −
Z 0
P(0)
hAdP
!
= β
 Z H
0
ρghAdh

= βEgrav
where we used the fact that dP = −ρg dh in mechanical equilibrium.
Thus, we conclude that
Egrav
Ekin
=
R
CV
.
For monatomic gases, this ratio is 2/3, while for diatomic gases like air, it’s 2/5.
By the way, this result is actually a corollary of the virial theorem, which we met in M6. The
virial theorem states that for particles interacting by a power law potential V ∝ rn in long-
term mechanical equilibrium, we have ⟨K⟩ = n
2 ⟨V ⟩ on average. In this case, the particles are
8
Kevin Zhou Physics Olympiad Handouts
the gas molecules and the Earth, which interact with n = 1, so that we expect ⟨V ⟩/⟨K⟩ = 2.
Here, ⟨V ⟩ corresponds to what we’ve called Egrav, but we need to be careful with ⟨K⟩. The
proof of the virial theorem doesn’t account for the energy of any degrees of freedom that aren’t
acted on by the force, which here includes the internal degrees of freedom of the gas, and
the horizontal translational degrees of freedom. We should therefore single out the vertical
translational kinetic energy, ⟨K⟩ = Ekin(R/2CV ), giving the expected result. (We also should
add on the vertical kinetic energy of the Earth, but this is negligible.) Thus, you could also
have solved this problem in one step using the virial theorem, which illustrates its power.
[3] Problem 8.   m 1 0USAPhO 1997, problem B2.
Remark
A Foehn is a hot, dry wind that comes down from a mountain range. This occurs in three
steps. First, warm air rises adiabatically up the opposite side of the mountain range. As the
air rises, it cools, causing the water vapor to condense and fall as rain. The now dry air then
falls adiabatically down the mountain range. Since the heat capacity is now lower, the falling
air heats up more than the rising air cooled down, becoming hot and dry at the bottom.
Idea 4
Consider an ideal gas in a container. In simple heat engine problems, we assume the gas stays
in equilibrium, meaning that it has a single, well-defined pressure and temperature through-
out. But in almost all real-world applications, there will be some deviations from equilibrium.
For example, suppose you started to heat the bottom of the container. Then the gas would
no longer be in thermal equilibrium, because it doesn’t have a uniform temperature, and
if the heating is sufficiently sudden, it wouldn’t be in mechanical equilibrium, because
it wouldn’t have a uniform pressure either. For a human-scale container, mechanical
equilibrium is usually reestablished quickly, by a readjustment of the density. Thermal
equilibrium is reestablished on a longer timescale, as energy spreads out through heat transfer.
In this simple example, we were able to talk about the temperature of individual parts of
the gas, even though the gas as a whole wasn’t in thermal equilibrium. That’s because each
piece of the gas is in thermal equilibrium with itself, so temperature can be defined locally.
In more violent situations, even that might not be possible.
In general, conservation laws are quite useful for nonequilibrium problems, because following
the detailed dynamics may be impossible.
