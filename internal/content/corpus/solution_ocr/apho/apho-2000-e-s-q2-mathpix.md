---
id: solution-ocr-apho-2000-e-s-q2
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2000_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [apho-2000-e-q2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Solution to Problem 2

## Determination of Stefan-Boltzmann constant

## Theoretical Consideration

According to the theory of electromagnetic radiation of solids, the polished aluminum cylinder, which can be regarded as an ideal reflector, does not absorb nor emit any radiation. On the other hand, the same cylinder covered by a thin layer of candle's soot is assumed to behave as an ideal black body, which is a perfect absorber and emitter of thermal radiation.

Therefore, the hot polished cylinder is expected to lose its thermal energy by means of non-radiative mechanism, such as thermal conductivity and convection of surrounding air. In contrast, the hot blackened cylinder will lose its thermal energy by an additional process of thermal radiation according to Stefan-Boltzmann law.

Based on the different physical processes described above, 3 different methods of experiment can be formulated as follows:

1. Method of constant temperature
Assume that the cylinder is heated to the same temperature $T$ when it is unblackened (polished) and when it is blackened by the soot. The difference in the measured electric power needed to reach that same equilibrium temperature must be equal to power loss due to radiative process. In other words,
$$
P _ { r } ( T ) = P _ { t } ( T ) - P _ { n } ( T )
$$
where:
$\mathrm { P } _ { \mathrm { r } } ( \mathrm { T } ) =$ power loss of the blackened cylinder due to thermal radiation
$\mathrm { P } _ { \mathrm { t } } ( \mathrm { T } ) =$ total power loss of the blackened cylinder at $T$
$\mathrm { P } _ { \mathrm { n } } ( \mathrm { T } ) =$ power loss of the polished cylinder at $T$ due to nonradiative processes
Assuming the same $\mathrm { P } _ { \mathrm { n } } \mathrm { T } =$ in both cases (polished and blackened), one obtains
$$
\sigma = \frac { P _ { t } ( T ) - P _ { n } ( T ) } { S \left( T ^ { 4 } - T _ { 0 } ^ { 4 } \right) }
$$

where $T o$ is the surrounding (or room) temperature
Alternatively, although less accurately, other methods may also be formulated by explicitly assuming that $P n$ is proportional to ( $T - T _ { 0 }$ ), namely

$$
P _ { n } ( T ) = k \left( T - T _ { 0 } \right)
$$

where $k$ is a constant independent of T. On the basis of this relation, one can formulate the following two methods for the determination of $\sigma$.
2. Method of constant power

In this method, the power of heating $P$ is kept the same in both cases. Let the temperatures reached in equilibrium for the polished and blackened cylinder be denoted by $T p$ and $T b$ respectively. Then,

$$
\begin{aligned}
& P = k \left( T _ { p } - T _ { 0 } \right) \\
& P = k \left( T _ { b } - T _ { 0 } \right) + \mathrm { P } _ { r } \left( T _ { b } \right)
\end{aligned}
$$

Eliminating $k$ yields

$$
P _ { r } \left( T _ { b } \right) = \frac { \left( T _ { p } - T _ { b } \right) P } { \left( T _ { p } - T _ { 0 } \right) }
$$

Equating this to the radiative power expression of the Stefan-Boltzmann law, we Obtain

$$
\sigma = \frac { \left( T _ { p } - T _ { b } \right) P } { S \left( T _ { b } ^ { 4 } - T _ { 0 } ^ { 4 } \right) \left( T _ { p } - T _ { 0 } \right) }
$$

3. Method of two temperatures

In this case, the measurements are performed for the blackened cylinder only, but at two equlibrium temperatures $\mathrm { T } _ { 1 }$ and $\mathrm { T } _ { 2 }$. Let the heating powers required to reach
$\mathrm { T } _ { 1 }$ and $\mathrm { T } _ { 2 }$ be $\mathrm { P } _ { 1 }$ and $\mathrm { P } _ { 2 }$ respectively. Then we have

$$
\begin{aligned}
& P _ { 1 } = k \left( T _ { 1 } - T _ { 0 } \right) + \sigma S \left( T _ { 1 } ^ { 4 } - T _ { 0 } ^ { 4 } \right) \\
& P _ { 2 } = k \left( T _ { 2 } - T _ { 0 } \right) + \sigma S \left( T _ { 2 } ^ { 4 } - T _ { 0 } ^ { 4 } \right)
\end{aligned}
$$

Again, eliminating $k$ from the two equations above leads directly to the following


Expression

$$
\sigma = \frac { \left( T _ { 2 } - T _ { 0 } \right) - \left( T _ { 1 } - T _ { 0 } \right) P _ { 2 } } { S \left[ \left( T _ { 1 } ^ { 4 } - T _ { 0 } ^ { 4 } \right) \left( T _ { 2 } - T _ { 0 } \right) - \left( T _ { 2 } ^ { 4 } - T _ { 0 } ^ { 4 } \right) \left( T _ { 1 } - T _ { 0 } \right) \right] }
$$

## Remarks

The formulation of the first experimental method requires the insurance of the same $T$ in both cases. Since $P$ is proportional to $T ^ { 4 }$, a small difference in $T$ determined in two cases will result in great error. It is, however, not easy to satisfy the requirement mentioned above. One way of overcoming this difficulty is to measure the power $P t$ for heating up the blackened cylinder at two temperatures in the vicinity of the temperature reached by the unblackened cylinder, and interpolate the value of $P t$ at the right T.

It is also worth noting that due to the sensitivity of the measurement, a slight change in the surrounding of the cylinder is likely to affect the result significantly. The environment must therefore be kept constant during the experiment.

## Experimental Configuration

The experimental set-up is described in Figure 1. The heater is mounted on a porcelain base, and it is connected with a power supply and the measuring meters. The heater is entirely enclosed by the hollow cylinder which sits also on the same porcelain plate during the measurement. The thermocouple is permanently attached to the cylinder and connected to an mV-meter for the determination of the temperature by using a table listing the characteristics of the thermocouple. The size of the cylinder is 60 mm by length and 12.5 mm by its external diameter, leading to a surface area of $\mathrm { S } = 24.8 \mathrm {~cm} ^ { 2 }$. The wall of the cylinder is about 1 mm thick and the thickness of its base is about 3 mm. All electrical measuring meters are digital instruments.

The power supplied to the heater must be measured separately instead of being read off the power supply display panel, because the resistance of the heater varies somewhat with temperature. The reading of $V$ and $I$ should be done at thermal equilibrium between the cylinder and its surrounding, which will be reached in about 25-30 minutes. In order to avoid undesirable effects from the surrounding, the whole system should be kept at a distance from other objects in the laboratory.


## Results of measurement

In a set of experiments performed at room temperature of 298.8 K, the results obtained are represented by the sample data given in Table 1.

Table 1: The values of $\sigma$ found in a set of three measurements
| Code name for the data | Surface condition during measurement | Data |  |  |
| :--- | :--- | :--- | :--- | :--- |
|  |  | V | A | TK |
| $a$ | polished | 9.8 | 1.50 | 485.5 |
| $b$ | blackened | 9.8 | 1.50 | 433.5 |
| $c$ | blackened | 11.9 | 1.82 | 485.5 |


## Discussion

While the last two methods are supposed to be less accurate than the first one, this is not always confirmed by the experimental results, as the control of experimental condition is not perfect. The major factors affecting the accuracies of the experimental results are enumerated and discussed as follows:


1. The cylinder is not necessarily an ideal reflector when it surface is polished, nor is it an ideal black body when its surface is blackened by the candle's soot. In other words, the absorption coefficient is likely to be larger than 0 in the first case, and less than 1 for the second case. Both of these effects leads to lower value of s .
2. The heat losses via the porcelain base are out of control. Neglecting these losses will lead to deviation of $\sigma$ from its real value.
3. The resistivities of the connecting cables have been neglected also, leading to larger value of s.

Table 2: Results of $\sigma$ obtained by three different methods
| Method used | Data used | Experimental result $\sigma e x W m ^ { 2 } K ^ { 4 }$ | $\sigma _ { \mathrm { ex } } \sigma$ |
| :--- | :--- | :--- | :--- |
| constant $T$ | $a + c$ | 5.945 | 1.05 |
| constant $P$ | $a + b$ | 6.087 | 1.07 |
| two T;s | $b + c$ | 5.386 | 0.95 |


4. The assumption of equal non-radiative loss for the case with polished and blackened surfaces is at best an approximation. For instance, the difference between thermal conductivity of the soot and that of aluminium is neglected in this experiment, leading to lower value of s. The equality will also be violated due to uncontrollable heat losses via the porcelain base.
5. The influences of air convection in the surrounding of the cylinder due to motions of the experimentator and other objects are also possible sources of errors.


## Suggested Grading Scheme

## Theoretical part

1. Statement of non-radiative nature of the thermal energy loss in the case of cylinder with polished surface ( 1.0 p )
2. Recognition of non-radiative as well as radiative contributions to energy loss in the case of cylinder with blackened surface (1.5 p)
3. Assumption of equal non-radiative losses in both cases for the same final equilibrium temperature $T$ ( 2.0 p )
4. Derivation of formula for $\sigma$ (2.5 p)

## Remarks

In case the participants employ the second or the third method, the first three item in the grading scheme for the theoretical part should be accordingly adjusted and combined as folllows.

1. Statements on radiative and non-radiative processes of heat trans-fer

2. Assumption of linear dependence of non radiative loss on tem-perature difference (2.0 p)

## Experimental part

1. Description of the experimental set-up (4.0 p)
The wiring of measuring instruments (1.5 p)
Method and procedure of measurement (1.5 p)
The quantities to be measured (1.0 p)
2. Results of measurement (data of $V A$ and T) (3.0 p)
3. Value of $\sigma ( 1.0 \mathrm { p } )$
4. Accuracy of value of $\sigma$ (max 3.0 p)
within 10\% of the real value $\sigma = 5.67 \times 10 ^ { - 8 } \mathrm {~W} \mathrm {~m} ^ { - 2 } \mathrm {~K} ^ { - 4 }$ (3.0 p)
between $10 \%$ and $20 \%$ of the real value (2.0 p)
5. Estimation of uncertainties or errors (2.0 p)
