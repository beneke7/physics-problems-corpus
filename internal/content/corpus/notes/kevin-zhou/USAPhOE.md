---
id: kevin-zhou/USAPhOE
source: Kevin Zhou Physics Olympiad Handouts
kind: handout
language: en
translated: false
bidirectional_links:
  hu: corpus/notes_hu/kevin-zhou/USAPhOE.md
source_file: sources/kevin_zhou/text/handouts/USAPhOE.txt
source_url: https://knzhou.github.io/handouts/USAPhOE.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
verification_status: pending
includes_solution_pdf: false
provenance_note: Complete extracted English Kevin Zhou Physics Olympiad Handouts USAPhOE; PDF headers and footers removed where present; solution PDFs excluded from this corpus note.
---

# Practice USAPhO E

## INSTRUCTIONS

DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN

- Work Part A first. You have 90 minutes to complete all problems. Each problem is worth an equal number of points, with a total point value of 60. Do not look at Part B during this time.

- After you have completed Part A you may take a break.

- Then work Part B. You have 90 minutes to complete all problems. Each problem is worth an equal number of points, with a total point value of 60. Do not look at Part A during this time.

- Show all your work. Partial credit will be given. Do not write on the back of any page. Do not write anything that you wish graded on the question sheets.

- Start each question on a new sheet of paper. Put your AAPT ID number, your proctor's AAPT ID number, the question number, and the page number/total pages for this problem, in the upper right hand corner of each page. For example,

  ```
  Student AAPT ID #
  Proctor AAPT ID #
       A1 – 1/3
  ```

- A hand-held calculator may be used. Its memory must be cleared of data and programs. You may use only the basic functions found on a simple scientific calculator. Calculators may not be shared. Cell phones, PDA's or cameras may not be used during the exam or while the exam papers are present. You may not use any tables, books, or collections of formulas.

- Questions with the same point value are not necessarily of the same difficulty.

- In order to maintain exam security, do not communicate any information about the questions (or their answers/solutions) on this contest.

## Possibly Useful Information

You may use this sheet for both parts of the exam.

---

## Part A

### Question A1

This problem describes a real situation once faced by Federal Aviation Administration engineers. In Florida, where there are frequent thunderstorms, the FAA experienced a large number of communications equipment failures. Suspecting lightning strikes, a power recording monitor was installed at one Florida site. After carefully studying the problem, the engineers concluded that the failures were the result of inductive coupling of energy into the communications system. They determined that a conducting loop (with dimensions of about 2 meters by 6 meters) was formed by the steel tower, the copper microwave waveguide, the steel equipment cabinet, and the ground (see sketch).

Using typical figures for the rise time of electric current in a lightning bolt, one can estimate that significant voltage would be induced in this loop, even by a lightning strike several kilometers away.

```
                    steel
                                     copper microwave steel cabinet
                    tower
                                              waveguide

                                           conducting
                       2m
                                              loop
                                                     ground
                                              6m
```

Let us model the process as follows.

1. Begin with the magnetic field produced by a straight, infinite line of steady current $I$. Use either the Biot–Savart or Ampere's law to obtain an expression for the magnetic field at distance $r$ from the current.

2. Although the result of part 1 holds rigorously only for a steady current, let us use it to estimate the time-dependent magnetic field produced by a lightning bolt. Let us model the lightning bolt as a straight, vertical, infinite line of current that rises linearly from zero to $1 \times 10^6\ \mathrm{A}$ in $5 \times 10^{-5}\ \mathrm{s}$. Let the lightning bolt strike one kilometer from the tower. Find the emf induced in the conducting loop while the lightning current increases. Describe any other approximations you make besides the ones we have already mentioned.

3. Suppose the conducting loop described above has a resistance of 50 Ohms. Inside the cabinet there is a solid state device that can survive a maximum current of 0.25 A. Could this device be damaged by the lightning strike described in part 2?

### Question A2

A large vessel is filled with an incompressible, electrically insulating liquid of mass density $\rho_m$, carrying a uniform charge density $\rho_e$, which is so small that any electric fields created by the liquid can be neglected. Let $z = 0$ at the initial surface level of the liquid. A point charge $-q$ is brought to the height $H$, and a bump forms on the liquid surface.

1. Find the maximum height of the bump.

2. If the charge is slowly lowered, at what height $H^*$ will the liquid start flowing to it?

### Question A3

A metallic rod of mass $m$ and length $L$ (thick line in the figure below) can slide without friction, with its ends attached to two perpendicular wires (thin lines in the figures). The entire arrangement is located in the horizontal plane. A constant magnetic field of magnitude $B$ exists perpendicular to this plane in the downward direction. The wires have negligible resistance compared to the rod whose resistance is $R$. Initially, the rod is along one of the wires so that one end of it is at the junction of the two wires (see Fig. (a)).

```
[Diagram showing rod configuration at different angles]
```

The rod is given an initial angular speed $\Omega$ such that it slides with its two ends always in contact with the two wires (see Fig. (b)), and just comes to rest in an aligned position with the other wire (see Fig. (c)). Determine $\Omega$. Neglect the self-inductance of the system.

### Question A4

A conductive liquid of resistivity $\rho$ flows at speed $v$ through a square metal pipe, which is placed in a uniform electric field $E$ and magnetic field $B \gg E/c$. The velocity, electric field, and magnetic field are all perpendicular.

```
[Diagram showing magnetohydrodynamic drive setup]
```

This is a "magnetohydrodynamic drive", which uses electrical energy to push the liquid forward.

1. Find the force per volume acting on the liquid in the direction of the pipe. Neglect any fields created by the flow of current.

2. Find the flow speed $v$ that maximizes the power per volume delivered to the liquid. At this flow speed, what is the efficiency of the pump?

---

## Part B

### Question B1

Mechanical and electrical processes are sometimes strongly coupled. Very important examples are systems containing piezoelectric materials, e.g. quartz resonator. Here we investigate a somewhat simpler situation.

```
[Diagram showing two metal plates with springs]
```

There are two metal plates with area $S$ and mass $m$. One plate is situated atop of the other one. Plates are connected to each other with springs, whose total spring constant is $k$ and which are made of insulator. The lower plate is mounted on a steady base. The equilibrium distance between the plates is $X_0$.

1. Let us assume that there is a small vertical shift $x$ of the upper plate from its equilibrium position. Find the acceleration $\ddot{x}$ of $x$ in terms of system parameters. What is the angular frequency $\omega_0$ of the small vertical oscillations of the upper plate?

2. The plates are now connected to a constant high voltage source, so that they form a capacitor. The electrostatic force between the plates causes an additional shift of the upper plate. The equilibrium distance between the plates is now $X_1$. Derive expression for the electrical attractive force $F_e$ and the voltage applied to the plates $U$ in terms of $X_0$, $X_1$, $S$, $m$, and $k$.

3. The system is set to oscillate again, keeping the voltage $U$ constant. Let $x$ still stand for the small shift from the equilibrium position. Derive an expression for the acceleration $\ddot{x}$ of $x$ in terms of $X_0$, $X_1$, $S$, $m$, $k$, and the shift $x$. What is the angular frequency $\omega_0'$ of the upper plate's small vertical oscillations?

4. Let us modify the situation of the previous question and connect an inductor with inductance $L$ in series to the capacitor and voltage source. In equilibrium, the distance between the plates is $X_1$, and the charge on the capacitor is $Q$. Now consider a small shift of both quantities, so that the distance and charge become $X_1 + x$ and $Q + q$. Derive expressions for the accelerations $\ddot{x}$ and $\ddot{q}$ in terms of $X_1$, $Q$, $S$, $L$, $m$, $k$, $x$, and $q$.

5. Find the possible angular frequencies of harmonic oscillation of the system, in terms of $X_0$, $X_1$, $\omega_0$, and $\omega_1 = \sqrt{X_1 / \epsilon_0 SL}$.

6. What is the maximum value of $X_0 / X_1$ for which the system is stable?

### Question B2

Among the first successes of the interpretation by Ampere of magnetic phenomena, we have the computation of the magnetic field $B$ generated by wires carrying an electric current, as compared to early assumptions originally made by Biot and Savart. A particularly interesting case is that of a very long wire, carrying a constant current $i$, made out of two straight sections and bent into the form of a "V", with angular half-span $\alpha$.

```
[Diagram showing V-shaped wire configuration]
```

According to Ampere's computations, the magnitude $B$ of the magnetic field at point $P$, a distance $d$ from the vertex, is proportional to $\tan(\alpha/2)$. Ampere's work was later embodied in Maxwell's electromagnetic theory, and is universally accepted.

1. Find the direction of $B$ at $P$.

2. Given that the magnitude of the field at $P$ is $B = k \tan(\alpha/2)$, find the constant $k$.

3. Let $P^*$ be the reflection of $P$ about the vertex of the V. Compute the field $B$ at $P^*$.

4. To measure the magnetic field, we place at $P$ a small magnetic needle with moment of inertia $I$ and magnetic dipole moment $\mu$. It oscillates about a fixed point in a plane containing the direction of $B$. Compute the period of small oscillations of this needle as a function of $B$.

5. In the same conditions Biot and Savart had instead assumed that the magnetic field at $P$ might have been $B = \mu_0 i \alpha / \pi^2 d$. In fact, they attempted to decide between the two expressions using an experiment, by measuring the oscillation period of the magnetic needle as a function of $\alpha$. To distinguish experimentally between the two predictions, we need a significant difference in period. For approximately what range of $\alpha$ is Ampere's prediction at least 10% larger than Biot and Savart's?

It may be useful to use the tangent half angle identity,

$$\tan\left(\frac{\alpha}{2}\right) = \frac{\sin \alpha}{1 + \cos \alpha}$$
