---
id: eupho-2024-E1
source: eupho
native_id: "EuPhO 2024 Experimental Problem E"
name: "EuPhO 2024 – Experimental E: Physics of piezoelectricity"
origin: European-Physics-Olympiad-2024
author: European Physics Olympiad
year: 2024
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2024
figure_files: [eupho-2024-E1-1.png, eupho-2024-E1-2.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [measurement, electromagnetism, mechanics]
subtopic: [piezoelectricity, capacitance, collisions, rc-discharge]
math_tools: [calculus, numerical, probability-statistics, dimensional-analysis]
format: open-ended
difficulty_norm: 5
core_ideas: [kalda-mechanics-idea53]
techniques: [model-reduction, scaling-and-dimensional-analysis]
has_solution: true
verification_status: pending
---
# E – Physics of piezoelectricity (20 pts)

Some crystalline, electrically insulating materials, such as quartz and lead zirconate titanate, exhibit an electrical response when mechanical pressure is applied. In short, mechanical stress polarizes the crystals, which is called the piezoelectric effect. This phenomenon can be explained by the special structure of their molecules: the deformation gives each molecule an electric dipole moment. Conversely, mechanical stress is generated in the presence of an electric field, a phenomenon known as the reverse piezoelectric effect. However, in this problem, we will neglect the reverse piezoelectric effect.

This problem investigates a simple device that relies on piezoelectricity, the piezoelectric element. It consists of the piezoelectric material placed between two circular metallic plates. When a force, perpendicular to the metallic plates, is applied to the element, a force-dependent voltage appears between the plates.

## Equipment (see also Fig. 1)

- **A** Piezo element with electrical leads, attached to a wooden base plate and a cover plate with a small hole. The hole goes through the entire cover plate, such that a small part of the top electrode of the piezo element is visible through it. This electrode is thin and flexible.
- **B** Multimeter (inner resistances are given, refer to the important remarks on the next page).
- **C** 1.5 V AA battery with connector.
- **D** Capacitor of unknown capacitance, with a diode soldered to one leg (when a forward current flows through the diode, the voltage drop across it is 0.56 V).
- **E** 4 electric push-button switches (connected while pressed) on wires.
- **F** 6 crocodile clamps.
- **G** Digital scales (up to 10 kg).
- **H** Digital stop watch.
- **I** 2 different rubber balls.
- **J** Wooden stand with adjustable release mechanism.
- **K** 50 cm ruler.
- **L** Small, wooden sticks (diameter of 2 mm), in two different lengths.
- **M** Large metal screw.
- **N** Wooden clothes peg.
- **O** Pencil, pen and pencil sharpener.

![Figure 1: Overview of all the materials used in this experiment.](../../sources/eupho/figures/eupho-2024-E1-1.png)

![Figure 2: The most common circuit symbols: A - resistor, B - ammeter, C - voltmeter, D - ohmmeter, E - switch, F - battery, G - capacitor, H - diode, I - piezo element. Wires marked with a red star have a red coating.](../../sources/eupho/figures/eupho-2024-E1-2.png)

## Task E.1 — Elasticity of the ball (2.0 pts)

Of the two rubber balls you are provided with, one is more elastic than the other.

For the more elastic rubber ball, determine the fraction of kinetic energy which is lost during a collision with a solid surface. Determine this fraction for three different values of the initial kinetic energy.

## Task E.2 - Piezoelectric properties (10.0 pts)

**a** Measure the capacitance $C$ of the capacitor (Fig. 3b). (2.0 pts)

**b** The metallic plates on the sides of the piezo element also act as a capacitor. Find the capacitance $C_p$ of the piezo element. (2.5 pts)

**c** Measure and plot how the voltage between the plates of the piezo element depends on the total perpendicular force, which is evenly distributed over the surface of the piezo via its wooden cover plate. For low forces, the dependence is linear; find the slope $\beta$ in this regime. (4.0 pts)

**d** The molecules of the crystals can only have polarizations lower than a certain critical value. Find the maximal (saturation) voltage of the piezo, the pressure $p_\mathrm{sat}$ at saturation and the maximal surface density $\sigma_\mathrm{max}$ of the charge on the surface of the piezo element. (1.5 pts)

## Task E.3 - Small area behaviour (1.0 pts)

When a force is applied to a small region of the piezo crystal, due to electro-mechanical coupling, the crystal will try to curve. However, the wooden plates will prevent this, and as a result, mechanical stress will appear in other parts of the crystal, too.

How much will the electrical response change when the force is applied to a small area of the crystal? Consider only the linear range of the response.

## Task E.4 - Deformation of the ball (4.5 pts)

In this part you will be dropping the more elastic rubber ball on the piezo element. During the collision between the ball and the piezo, the ball experiences deformations. You can assume that the force $F$ acting on the ball depends on the ball's elastic deformation $x$ as a power law:

$$F = k x^{\alpha}. \tag{1}$$

Find the exponent $\alpha$ and the material constant $k$.

## Task E.5 - Interaction time (2.5 pts)

With the result from the previous task, it would be possible to determine the interaction time $\tau$ of the more elastic ball with the wooden surface. However, for the less elastic ball, there is no simple description such as Eq. 1. Alternatively, we can make the following assumption.

If, for a certain collision speed $v_0$, the force experienced by the ball as a function of time can be described as $F_0(t) = f(t)$, then for any other speed $v_1$, the time dependence takes a similar shape and we can express the force as:

$$F_1(t) = a_1 f(b_1 t). \tag{2}$$

Estimate and plot how the interaction time $\tau$ scales with the collision speed $v$ for collisions of the less elastic rubber ball with a solid surface.

## Important practical remarks

- It is expected that you provide circuit diagrams with all the electrical measurements you take. Use the symbols provided in Fig. 2.
- Be careful not to short the multimeter! The internal resistances given are only valid for DC voltage measurements.
- Do not exceed a total load of 100 N of force on the piezo element.
- To connect two wires, it is recommended to wrap them around each other and use the crocodile clamps to secure the connection (Fig. 3a).
- The diode's polarity is visible in Fig. 3b.
- You can adjust the height of the release mechanism via the two screws on the back (Fig. 4). You can also adjust the horizontal position by unscrewing the vertical nut at the release mechanism.
- Be careful not to let the bouncy ball escape.
- After a certain time of inactivity, the multimeter will start to beep and shut down; press any button to prevent shut-down.
- Be aware that some regions of your table may spring back under load. Use stable regions of your table for the bouncing experiment.
- For the evaluation of a series of measurements, you are expected to plot the data.
- Only those measurements and evaluation methods that promise the highest precision and accuracy are awarded full marks. However, no marks are awarded for error estimation.
- When measuring DC voltages with the multimeter in a range with the smallest digit resolution being $\delta U$, the uncertainty $\Delta U$ of the measured value $U$ can be estimated via:

$$\Delta U = 0.7\% \cdot U + 3 \cdot \delta U. \tag{3}$$

- The internal resistance of your multimeter in the DC voltmeter setting depends on the measurement range and model number (see Fig. 5 for the model number). The following table provides the internal resistances for two measurement ranges and all models:

| model number(s) | range | internal resistance |
|---|---|---|
| all models | 2 V | 11.1 MΩ |
| UT33B+ | 200 mV | 9.65 MΩ |
| UT33C+ | 200 mV | 9.91 MΩ |
| UT33D+ | 200 mV | 9.70 MΩ |

*European Physics Olympiad 2024, Experimental Problem E. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. Figures 3, 4 and 5 (equipment photographs and helpful remarks) are present in the source PDF but not reproduced here; Fig. 1 (equipment overview) and Fig. 2 (circuit symbols) are included.*
