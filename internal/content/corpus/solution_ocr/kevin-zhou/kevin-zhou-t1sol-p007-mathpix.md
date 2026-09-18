---
id: solution-ocr-kevin-zhou-t1sol-p007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 7. In this problem we'll make a simple model for the atmosphere.
    (a) Assume the atmosphere to be an ideal gas at constant temperature $T$ in mechanical equilibrium, with gas molecules of mass $m$. Show that the pressure depends on height as
$$
P ( h ) = P _ { 0 } e ^ { - m g h / k _ { B } T }
$$
by demanding that small parcels of gas be in mechanical equilibrium.
    (b) The assumption of constant temperature is not very accurate. Sunlight warms air near the ground, causing large parcels of it to slowly rise; simultaneously other parcels of air slowly fall. This results in a well-mixed atmosphere and, since heat conduction in air is poor, the rising and falling processes are approximately adiabatic, not isothermal. Assuming the air molecules are diatomic with mass $m$, show that the temperature varies linearly with height. Does the atmosphere get colder or hotter with increasing height?
    (c) Estimate the rate of temperature change with height numerically; is your result reasonable?
    (d) Now ignoring the mixing effect of the sun, argue that an atmosphere with a temperature gradient of larger or smaller magnitude than the result you found in part (c) will be unstable or stable against spontaneous convection, respectively. (Hint: see idea 4.)
    (e) ★ More generally, one might wonder how the total energy of the atmosphere, summed over all molecules, is divided into kinetic (i.e. thermal) and potential (i.e. gravitational) energy. Show that for any configuration in mechanical equilibrium (i.e. not necessarily adiabatic or isothermal), $E _ { \text {grav } } / E _ { \text {kin } }$ has the same value, and find this value. Assume the atmosphere is thin enough to treat $g$ as uniform, and set the potential equal to zero at the Earth's surface.

When "thermal inversion" occurs, the temperature gradient has the opposite sign to the natural one you found in part (b), causing the atmosphere to be very stable against convection. Such events can cause very high air pollution in cities, since the pollutants can't escape. For more about atmospheric physics, see chapter 37 of Blundell.

Solution. (a) The ideal gas law becomes $P V = N k _ { B } T$, and the density is $\rho = N m / V$, so $P m = \rho k _ { B } T$. By considering forces on a parcel of height $d h$ and cross sectional area $A$, we see

$$
A d P = - \rho g A d h
$$

which implies

$$
\frac { d P } { P } = - \frac { m g } { k _ { B } T } d h .
$$

Integrating yields the desired result.


(b) Since the expansion is adiabatic, $T ^ { \gamma } P ^ { 1 - \gamma }$ is constant, so $T \propto P ^ { 1 - 1 / \gamma }$. This implies
$$
\frac { d T } { T } = \frac { d P } { P } ( 1 - 1 / \gamma ) .
$$

Since the motion of the parcels of air is slow, hydrostatic equilibrium remains approximately true. Using the equation derived in part (a) gives
$$
\frac { d T } { T } = - \frac { m g } { k _ { B } T } ( 1 - 1 / \gamma ) d h
$$
which simply rearranges to
$$
\frac { d T } { d h } = - \frac { m g } { k _ { B } } ( 1 - 1 / \gamma )
$$
which is a linear decrease as desired.
(c) We have
$$
\frac { d T } { d h } = - \frac { m g } { k _ { B } } \frac { 2 } { 7 } \approx - \frac { 2 } { 7 } \frac { ( 30 \mathrm {~g} / \mathrm { mol } ) \left( 9.8 \mathrm {~m} / \mathrm { s } ^ { 2 } \right) } { \left( 8.314 \mathrm {~kg} \mathrm {~m} ^ { 2 } / \left( \mathrm { s } ^ { 2 } \mathrm {~K} ^ { 2 } \mathrm {~mol} \right) \right) } \approx - 10 \mathrm {~K} / \mathrm { km }
$$
which is reasonable. One reason it's a bit unrealistically high is because air typically contains water vapor, which increases the heat capacity.
(d) Suppose the temperature gradient is smaller in magnitude than the gradient we found above. Consider a packet of air that is perturbed and moves upward. As it moves upward, it expands adiabatically, lowering its temperature; since the existing temperature gradient is less than in the well-mixed adiabatic atmosphere, the packet will end up colder than its surroundings. However, it is also at the same pressure because mechanical equilibrium is quickly reached, so since $P \propto \rho T$, the density is higher and it falls back down. Hence the situation is stable. The same reasoning occurs in reverse for a larger temperature gradient.
(e) First, let's get everything in a convenient set of variables. For a small mass $d M$ of gas, where $m$ is the mass per gas molecule, we have
$$
d E _ { \text {kin } } = \beta k _ { B } T d M / m , \quad d E _ { g } = g h d M
$$
where we defined $\beta = C _ { V } / R$. Using the ideal gas law $\rho = m P / k _ { B } T$ and substituting in $d M = \rho A d h$, we have
$$
d E _ { \text {kin } } = \beta P A d h \quad d E _ { g } = \rho g h A d h
$$
Now, the key idea is to relate these energies by integration by parts. For concreteness, suppose the atmosphere ends at height $H$, so that $P ( H ) = 0$. (This isn't a necessary assumption; we could also take $H \rightarrow \infty$ at the end.) Then we have
$$
E _ { \text {kin } } = \beta A \int _ { 0 } ^ { H } P d h = \beta \left( - \int _ { P ( 0 ) } ^ { 0 } h A d P \right) = \beta \left( \int _ { 0 } ^ { H } \rho g h A d h \right) = \beta E _ { \text {grav } }
$$
where we used the fact that $d P = - \rho g d h$ in mechanical equilibrium.
Thus, we conclude that
$$
\frac { E _ { \text {grav } } } { E _ { \text {kin } } } = \frac { R } { C _ { V } } .
$$
For monatomic gases, this ratio is 2/3, while for diatomic gases like air, it's 2/5.
By the way, this result is actually a corollary of the virial theorem, which we met in M6. The virial theorem states that for particles interacting by a power law potential $V \propto r ^ { n }$ in longterm mechanical equilibrium, we have $\langle K \rangle = \frac { n } { 2 } \langle V \rangle$ on average. In this case, the particles are

the gas molecules and the Earth, which interact with $n = 1$, so that we expect $\langle V \rangle / \langle K \rangle = 2$. Here, $\langle V \rangle$ corresponds to what we've called $E _ { \text {grav } }$, but we need to be careful with $\langle K \rangle$. The proof of the virial theorem doesn't account for the energy of any degrees of freedom that aren't acted on by the force, which here includes the internal degrees of freedom of the gas, and the horizontal translational degrees of freedom. We should therefore single out the vertical translational kinetic energy, $\langle K \rangle = E _ { \text {kin } } \left( R / 2 C _ { V } \right)$, giving the expected result. (We also should add on the vertical kinetic energy of the Earth, but this is negligible.) Thus, you could also have solved this problem in one step using the virial theorem, which illustrates its power.
[3] Problem 8. USAPhO 1997, problem B2.
Remark
A Foehn is a hot, dry wind that comes down from a mountain range. This occurs in three steps. First, warm air rises adiabatically up the opposite side of the mountain range. As the air rises, it cools, causing the water vapor to condense and fall as rain. The now dry air then falls adiabatically down the mountain range. Since the heat capacity is now lower, the falling air heats up more than the rising air cooled down, becoming hot and dry at the bottom.

Idea 4
Consider an ideal gas in a container. In simple heat engine problems, we assume the gas stays in equilibrium, meaning that it has a single, well-defined pressure and temperature throughout. But in almost all real-world applications, there will be some deviations from equilibrium.

For example, suppose you started to heat the bottom of the container. Then the gas would no longer be in thermal equilibrium, because it doesn't have a uniform temperature, and if the heating is sufficiently sudden, it wouldn't be in mechanical equilibrium, because it wouldn't have a uniform pressure either. For a human-scale container, mechanical equilibrium is usually reestablished quickly, by a readjustment of the density. Thermal equilibrium is reestablished on a longer timescale, as energy spreads out through heat transfer.

In this simple example, we were able to talk about the temperature of individual parts of the gas, even though the gas as a whole wasn't in thermal equilibrium. That's because each piece of the gas is in thermal equilibrium with itself, so temperature can be defined locally. In more violent situations, even that might not be possible.

In general, conservation laws are quite useful for nonequilibrium problems, because following the detailed dynamics may be impossible.
