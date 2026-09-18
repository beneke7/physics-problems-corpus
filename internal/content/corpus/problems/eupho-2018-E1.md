---
id: eupho-2018-E1
source: eupho
native_id: "EuPhO 2018 Experimental Problem"
name: "EuPhO 2018 – E1: Porous membrane"
origin: European-Physics-Olympiad-2018
author: European Physics Olympiad
year: 2018
language: en
translated: false
url: https://phoxiv.org/olympiads/eupho/2018
figure_files: [eupho-2018-E1-1.png, eupho-2018-E1-2.png, eupho-2018-E1-3.png, eupho-2018-E1-4.png]
has_figure: true
provenance_note: "Legacy EuPhO import; retained without re-OCR in this pass."
topic: [optics, measurement, fluid-mechanics]
subtopic: [knudsen-diffusion, thin-film-interference, birefringence, refractive-index, porosity]
math_tools: [calculus, geometry-trigonometry, dimensional-analysis]
format: open-ended
difficulty_norm: 5
core_ideas: []
techniques: [differential-element, graphical-reduction]
has_solution: true
verification_status: pending
---

**General remarks.** Provide detailed sketches of all the setups you use. Estimate errors only in part A. Depending on your method, you might be able to complete the tasks without using all the given equipment.

## Porous membrane

You are going to study a membrane of anodic aluminum oxide. The membrane is transparent; it has thickness $h$ and cylindrical channels of diameter $d$ as shown in the figure. Your goal is to determine parameters $h$, $d$ and porosity $p$ (the volume fraction of channels in the membrane). Assume the membrane to be optically homogeneous and please **do not touch** the surface of the membrane!

![figure](../../../../../sources/eupho/figures/eupho-2018-E1-1.png)

---

## A — Diffusion, 5 pts

**Equipment.** Airproof vessel with a membrane window and 2 connecting tubes with clamps (window diameter is $d_w = 13\,\text{mm}$), equipped with carbon dioxide ($\text{CO}_2$, molar mass $44\,\text{g/mol}$) concentration sensor with upper working limit of $0.5\%$; powerbank; 2 fans with battery block (insert the last battery to operate); glue pads. **Do not disassemble electrical connections of the setup.**

If $c$ denotes the concentration (number of molecules per volume) of $\text{CO}_2$ at one end of a channel and $c_0$ at the other end, the density of $\text{CO}_2$ flux in the channel is given by $j = D(c - c_0)/h$; $D$ is the diffusion coefficient. Since channels are narrower than the mean free path length, the diffusion rate is determined by the diameter of the channels: $D \approx vd/3$; $v$ is the root-mean-square speed of $\text{CO}_2$ molecules. The room temperature $T = (295 \pm 5)\,\text{K}$.

**Task.** Suggest a functional dependence of how $c - c_0$ changes in time, study it experimentally, determine the parameters of the dependence and estimate the errors.

**Instruction to the CO₂ sensor.** The sensor effectively measures the ratio of the number of $\text{CO}_2$ molecules to the total number of air molecules. Turn the sensor on by connecting it to the powerbank with a USB. Starting up takes a few minutes. If you turn the sensor off, **all data will be lost.**

Pressing button SELECT for a second switches the sensor between recording (r) and record-browsing (d) modes. In recording mode, a record is added every 20 s. Memory holds only the last 200 records. Switching to record-browsing mode stops adding new records but timer keeps going. In this mode, buttons UP and DOWN navigate through records. Switching back to recording mode resumes recording of new data.

Reset button RST deletes all the records and resets the timer. Buttons LEFT and RIGHT are not used.

---

## B — Interference, 6 pts

**Equipment.** Optical bench; membrane (identical to the one in part A) on a support; laser, $\lambda = 660\,\text{nm}$; 2 polarizers (axis of polarizer is marked with a line and forms $45°$ with the edge of the frame); photodiode (short-circuit current is proportional to the light intensity); multimeter; wires; clips; 2 rulers; glue pads; white paper.

The reflection intensity depends on the angle of incidence $\alpha$ due to interference of rays reflected from top and bottom surfaces of the membrane.

![figure](../../../../../sources/eupho/figures/eupho-2018-E1-2.png)

**Task.** Determine the thickness $h$ of the membrane. Assume the refractive index of the membrane to be $n_o = 1.50$. To avoid birefringence described in part C, incident light should have polarization perpendicular to the plane of incidence (plane of the figure). If the contrast of interference is too weak, try the other surface of the membrane.

---

## C — Birefringence, 7 pts

**Equipment.** The same as in part B.

The refractive index of the membrane depends on polarization and propagation direction of light. The membrane can be described with two refractive indices: $n_o$ and $n_e$; $|n_e - n_o| \ll n_o$. When a laser beam enters the membrane, it splits into two beams with different polarizations and velocities. Beam 1 is polarized normally to the plane of incidence; its refractive index $n_1 = n_o$ and doesn't depend on $\beta_1$. Beam 2 is polarized parallel to the plane of incidence; its refractive index $n_2$ depends on $\beta_2$:
$$\frac{1}{n_2^2} = \frac{\cos^2\beta_2}{n_o^2} + \frac{\sin^2\beta_2}{n_e^2}.$$

One can show that the optical path difference between the beams is $\delta = h(n_1\cos\beta_1 - n_2\cos\beta_2)$.

![figure](../../../../../sources/eupho/figures/eupho-2018-E1-3.png)

**Task.** Determine the difference $\Delta n = |n_e - n_o|$ of the membrane. Find the porosity $p$ using the given plot of $\Delta n(p)$.

![figure](../../../../../sources/eupho/figures/eupho-2018-E1-4.png)

---

## D — Coda, 2 pts

**Task.** Using results from previous parts and making additional measurements if necessary, estimate the diameter $d$.

*European Physics Olympiad 2018, Experimental Problem. Transcribed faithfully from the born-digital source PDF (via phoxiv.org); inline math normalized from Unicode to LaTeX. The 3D raster rendering of the membrane (apparatus photo) is omitted; the schematic cross-section above is the figure referenced in the problem text.*
