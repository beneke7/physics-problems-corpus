---
id: solution-ocr-eupho-2025-e-s-e1
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2025_E_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2025-E1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## E1 - Deep Learning (10 pts)

Modern ANNs (artificial neural networks) are made of billions of neurons. Each neuron transforms its input(s) $x _ { 1 } , x _ { 2 } , \ldots , x _ { n }$ to an output $y$. First,

$$
z = w _ { 1 } x _ { 1 } + w _ { 2 } x _ { 2 } + \cdots + w _ { n } x _ { n } + b
$$

is calculated, with real numbered weights $w _ { i }$ and real numbered bias $b$. Then an activation function is applied to $z$ to produce the final output $y \left( x _ { 1 } , x _ { 2 } , \ldots \right)$. In the present problem you will investigate a physical model of a neuron with the electric voltages $x _ { 1 }$ and $x _ { 2 }$ as inputs, with the activation function being $A \sigma ( z )$, graphed below, where $\sigma ( z ) = 1 / ( 1 + \exp ( - z ) )$ is called sigmoid function.
![](../../../figures/solution-ocr/ad281081064ffcb40d0397e6.jpg)

## Equipment

Important! Do not switch off any power outlets.

(i) A box containing a voltage source, an electronic circuit that models the neuron, and two potentiometers (the A-potentiometer and the Bpotentiometer). The electric terminals on the box are denoted as follows:
    1 Two electrically connected GND terminals: the electrical ground serving as a common negative terminal for $+ \mathrm { V } , x _ { 1 } , x _ { 2 }$, and $y$.
    $2 + \mathrm { V }$ : the positive terminal of the voltage source.
    3 X1 and X2: the positive terminals of the neuron input voltages $x _ { 1 }$ and $x _ { 2 }$, respectively. The neuron output behaves unpredictably if either of these terminals has no input voltage.
    4 Y: the positive output terminal. It behaves like a real voltage source, consisting of an ideal voltage source of voltage $y$ and a series output resistor $R _ { \text {out } }$, and operates as shown below.

![](../../../figures/solution-ocr/0eb68031f703cbb9eede5714.jpg)

5 A1, A2, A3: terminals of the A-potentiometer. 6 B1, B2, B3: terminals of the B-potentiometer. 7 T: a terminal not to be used in this task.
(ii) Digital multimeter with two probe wires.
(iii) Wires with banana connectors. Two or more wires could be connected to the same terminal in the box by using the holes in the banana connectors. Using the banana connectors with the multimeter may form an unstable connection. Use the alligator clamp if needed.
(iv) Graph paper. You can ask for more if needed.

Task 1 (0.5 pts)
Terminals A1, A2, and A3 are connected to the Apotentiometer $R _ { P }$ and an additional load resistor $R _ { L }$.

Which of the schemes below corresponds to the circuit in the box? Determine the resistances $R _ { L }$ and $R _ { P }$; document the measurements made.
![](../../../figures/solution-ocr/f06046ce16a9d69b571c8843.jpg)
![](../../../figures/solution-ocr/2a4e7dd5bfbf425408ba4fcd.jpg)
![](../../../figures/solution-ocr/7b60b043d083aed4dd4b6c5e.jpg)

Note The B-potentiometer is connected to terminals B1, B2, B3 in exactly the same way with the same resistances $R _ { L }$ and $R _ { P }$, within manufacturing tolerances.

Task 2 - (0.5 pts)
Sketch how the terminals have to be connected so that the neuron input voltages can be varied with the widest possible range.

Task 3 - (1.5 pts)
Devise (and document) a strategy allowing you to find the combination of input voltages $x _ { 1 }$ and $x _ { 2 }$ that maximizes the output voltage $y$ with the least possible number of measurements, irrespectively of with which set of input voltages you start the search. Determine this maximal voltage $y _ { \text {max } }$ that will be henceforth used as an approximation for the amplitude $A$, and document your measurements.

Task 4 - (3.5 pts)
Determine the weights $w _ { 1 } , w _ { 2 }$ and the bias $b$. Describe your measurements and document your data in a table. Estimate $w _ { 1 } , w _ { 2 }$, and $b$ by using a graphical approach.
Training involves optimizing the network weights to achieve desired functionality. This allows ANNs to approximate arbitrary functions. For each of the following tasks you have to approximate a different function of a single input voltage using the given equipment. Make sure that the input and output that you define are clearly marked in your circuits.

Task 5 - (1.5 pts)
Connect the terminal X1 directly to +V. Design a circuit to approximate the function $y _ { 5 } ( x ) =$ $A \sigma \left( w _ { 2 } x / 2 + b _ { 5 } \right)$, where $x$ is the voltage applied to your newly defined input terminal. Determine $b _ { 5 }$ theoretically. Implement the circuit, take measurements and verify that your setup works as expected. Validate the value of $b _ { 5 }$ from your data.

Task 6 - (2.5 pts)

a Determine the internal series output resistance $R _ { \text {out } }$ of the Y terminal. (0.5 pts)
b Design and implement a circuit to approximate the function $y _ { 6 } ( x ) = A _ { 6 } \cdot \sigma \left( w _ { 2 } x + b \right) + B _ { 6 }$, where $B _ { 6 } = 1.48 \mathrm {~V}$. Determine $A _ { 6 }$ theoretically. Implement the circuit and verify experimentally that your setup works as expected. Confirm the values of $A _ { 6 }$ and $B _ { 6 }$ from your data. (2.0 pts)


## E1- Solution

The term "neuron" has been chosen in analogy to the cells of the nervous system, which transmit electrochemical signals across the nerves (variable $y$ ) depending on the integral stimulus $( z )$ on their input extremities (variables $x _ { i }$ ). The theory behind the artificial neurons and artificial neural networks has been developed in a close analogy to basic physical concepts. In recognition of this fact, the Nobel Prize in physics in 2024 was awarded to John J. Hopfield and Geoffrey E. Hinton "for foundational discoveries and inventions that enable machine learning with artificial neural networks". The artificial neurons could also be real physical systems, which transform mechanical, electrical, or optical signals.

## Task 1

The multimeter is connected in an ohmmeter mode to the three possible pairs of output terminals of Apotentiometer. By turning the knob of the potentiometer we measure the maximum and minimum resistance for each pair:

| Terminals: | $R _ { \text {min } } ( \Omega )$ | $R _ { \text {max } } ( \Omega )$ |
| :--- | :--- | :--- |
| A1-A2 | 1000 | 1000 |
| A1-A3 | 222 | 1222 |
| A2-A3 | 222 | 1222 |

If the load resistor was connected to either A1 or A2, then the $R _ { \text {min } }$ for A1-A3 and A2-A3 pairs would close to zero, in contrast to measurements. Therefore the load resistor is connected between A3 and the potentiometer slider. In this case, for either of A1-A3 and A2-A3 pairs we have: $R _ { \text {min } } = R _ { L }$ and $R _ { \text {max } } = R _ { P } + R _ { L }$ and

$$
R _ { L } = 222 \Omega \quad R _ { P } = 1000 \Omega
$$

|  | Task 1 | Pts |
| :--- | :--- | :--- |
| A | States or shows in a drawing that the resistance between the three pairs of terminals has been measured. | 0.2 |
|  | Results for the resistances: |  |
| B | $R _ { P } \approx 1000 \Omega \pm 120 \Omega$ | 0.1 |
| C | $R _ { L } \approx 220 \Omega \pm 6 \Omega$ | 0.1 |
| D | Concludes that the resistor is connected to terminal 3. | 0.1 |
|  | Total on Task 1 | 0.5 |

## Task 2

The necessary connections are shown in Fig. 1.

|  | Task 2 | Pts |
| :--- | :--- | :--- |
| A | Potentiometers are connected to X1 and X2 | 0.2 |
|  | Correct connections to ground and supply -0.1 per wrong connection -0.2 fixed penalty for the specific case that X1 / X2 are connected to A1/A2 and V+ and GND on the remaining terminals of the potentiometer. This setup gives only limited variation of the input voltage (0V - 2.67V) -0.5 if only 2 terminals the potentiometers are connected. | 0.3 |
|  | Total on Task 2 | 0.5 |


![](../../../figures/solution-ocr/1dd72d809f75cfbd34608908.jpg)
Figure 1: Correct Setup Task 2

## Task 3

By turning the potentiometers' knobs one can establish that the input voltages change independently between 0 V and $\approx 3.25 \mathrm {~V}$ (Note that due to the protection circuit inside the box, this voltage decreases slightly with connected circuitry). Therefore, any combination of input voltages could be mapped to a point inside the shaded square area in the $x _ { 1 } - x _ { 2 }$ plane, as shown in Fig 2. Points corresponding to a

![](../../../figures/solution-ocr/cf358215afaaac55712a1095.jpg)
Figure 2: Task 3


| $x _ { 1 } ( V )$ | $x _ { 2 } ( V )$ | $y ( V )$ |
| :--- | :--- | :--- |
| 0.00 | 0.00 | 2.30 |
| 3.15 | 0.00 | 1.15 |
| 3.15 | 3.15 | 2.56 |
| 0.00 | 3.15 | 2.73 |

Table 1: Output voltage at the vertices

constant output voltage y satisfy the equation:

$$
w _ { 1 } x _ { 1 } + w _ { 2 } x _ { 2 } + b = \text { const } ,
$$

which defines a family of parallel straight lines, perpendicular to the vector $\vec { w } = \left( w _ { 1 } , w _ { 2 } \right)$ (see the dashed lines in Fig. 2). It is clear that for any set of weights, the maximum voltage $y _ { \text {max } }$ and the minimum voltage $y _ { \text {min } }$ are always met at the vertices of the rectangle. Therefore, only three corners need to be measured in order to determine the maximum voltage $y _ { \text {max } }$. First, two corners are measured, which are next to each other. Therefore, the maximum along the connecting edge can be found. Using the corner with the higher voltage, the other edge from that corner is followed to a third corner. Consequently, the highest voltage can be determined, as the fourth corner needs to be lower than the third measured corner. Table 1 summarizes the measurements of the output voltage at the four vertices. The maximum of the output voltage is:

$$
y _ { \max } = 2.73 \mathrm {~V}
$$

corresponding to the input voltages:

$$
x _ { 1 } = 0.00 \mathrm {~V} ; \quad x _ { 2 } = 3.15 \mathrm {~V} .
$$

|  | Task 3 | Pts |
| :--- | :--- | :--- |
| A | Strategy that three measurements are sufficient to obtain $y _ { \text {max } }$ | 0.7 |
|  | Penalty for four measurements No points for more than four measurements Note that turning the knob for $x _ { i }$ and watching the change of $y$ does count as at least 2 measurements per $x _ { i }$. For solutions where the knob is turned a little for $x _ { 1 }$, then the other for $x _ { 2 }$, the conclusion about the signs of the $w _ { i }$ is made and only then the input gets adjusted to reach $y _ { \text {max } }$, this counts as at least 5 measurements, which is awarded no points here. | -0.3 |
| B C | Lower bound of measurements < 0.02V | 0.1 |
|  | Upper bound of measurements > 3V | 0.2 |
|  | Note that to obtain these 0.1 + 0.2 points, the student must write its input values for $x _ { 1 }$ and $x _ { 2 }$ down explicitly, or, at least write that they are directly connected to GND or +V if that is the case. |  |
| D | Per measurement 0.1 up to 0.3 | 0.3 |
| E | Value for $y _ { \text {max } } = 2.73 \mathrm {~V} \pm 0.04 \mathrm {~V}$ | 0.2 |
|  | Penalty for more than three significant digits | -0.2 |
|  | Penalty for only one significant digit | -0.2 |
|  | Total on Task 3 | 1.5 |

## Task 4

The three parameters could be determined in two series of measurements of the output voltage by setting each of the input voltages constant and changing the other input voltage. The dependence of the output voltage on $x _ { 1 }$ and $x _ { 2 }$ can be linearized by transforming $y$ to the auxiliary variable:

$$
\begin{equation*}
z = \ln \frac { y } { A - y } \approx \ln \frac { y } { y _ { \max } - y } \tag{1}
\end{equation*}
$$

since:

$$
\begin{equation*}
z = w _ { 1 } x _ { 1 } + w _ { 2 } x _ { 2 } + b \tag{2}
\end{equation*}
$$

Measurements close to the maximum output voltage should be avoided because of the large systematic error in calculated values of $z$ when approximating in equation (1) the unknown A with ymax. Therefore, the suitable set of measurements is along the path $( 0,0 ) - ( 3,0 ) - ( 3,3 ) \mathrm { V }$ in the $x _ { 1 } , x _ { 2 }$-plane. Tables 2 and 3 summarize the results of measurements along the lines $( 0,0 ) - ( 3,0 ) \mathrm { V }$ and $( 3,0 ) - ( 3,3 ) \mathrm { V }$ respectively. The values of the variable $z$ calculated by means of (1) are shown in the last column of the tables. Figure 3 shows the data in Table 2 in variables $z$ and $x _ { 1 }$ with the corresponding linear fit. The weight $w _ { 1 }$ corresponds to the slope of the fitting line:

$$
\begin{equation*}
w _ { 1 } = \frac { \Delta z } { \Delta x _ { 1 } } = - 0.62 \mathrm {~V} ^ { - 1 } \tag{3}
\end{equation*}
$$

Since $x _ { 2 } = 0.00 \mathrm {~V}$, the bias $b$ could be estimated by crossing point of the fitting line with the $z$-axis:

$$
\begin{equation*}
b = 1.67 \tag{4}
\end{equation*}
$$


| $x _ { 1 } ( V )$ | $y ( V )$ | $z$ |
| :--- | :--- | :--- |
| 0.00 | 2.31 | 1.68 |
| 0.26 | 2.24 | 1.50 |
| 0.59 | 2.15 | 1.29 |
| 0.83 | 2.08 | 1.15 |
| 1.09 | 2.00 | 0.99 |
| 1.32 | 1.92 | 0.85 |
| 1.72 | 1.76 | 0.59 |
| 1.98 | 1.65 | 0.41 |
| 2.20 | 1.57 | 0.29 |
| 2.53 | 1.44 | 0.10 |
| 2.88 | 1.29 | -0.12 |
| 3.02 | 1.23 | -0.21 |

Table 2: Measurements for $x _ { 2 } = 0.00 \mathrm {~V}$

| $x _ { 2 } ( V )$ | $y ( V )$ | $z$ |
| :--- | :--- | :--- |
| 0.00 | 1.23 | -0.21 |
| 0.22 | 1.38 | 0.01 |
| 0.51 | 1.56 | 0.28 |
| 0.81 | 1.74 | 0.55 |
| 1.06 | 1.88 | 0.78 |
| 1.37 | 2.04 | 1.07 |
| 1.75 | 2.21 | 1.43 |
| 1.99 | 2.30 | 1.65 |
| 2.22 | 2.38 | 1.89 |
| 2.53 | 2.47 | 2.21 |
| 2.74 | 2.52 | 2.44 |
| 3.02 | 2.57 | 2.72 |

Table 3: Measurements for $x _ { 1 } = 3.02 \mathrm {~V}$

The data for $z$ and $x _ { 2 }$ in Table 3, and the corresponding linear fit are shown in Figure 4. The slope of the fitting line gives the weight $w _ { 2 }$ :

$$
\begin{equation*}
w _ { 2 } = \frac { \Delta z } { \Delta x _ { 2 } } = 0.96 \mathrm {~V} ^ { - 1 } \tag{5}
\end{equation*}
$$

According to equation (2) the crossing point, -0, 22, of the fitting line with $z$ axis at $x _ { 1 } = 3.02 \mathrm {~V}$ satisfies the equation

$$
\begin{equation*}
- 0.22 = w _ { 1 } x _ { 1 } + b = - 1.87 + b \tag{6}
\end{equation*}
$$

Therefore, we obtain a second estimate for the bias $b = 1.65$. As a most likely estimate of $b$, the mean of the $b$-values obtained from the two graphs should be taken:

$$
\begin{equation*}
b = 1.66 \pm 0.01 \tag{7}
\end{equation*}
$$

|  | Task 4 | Pts |
| :--- | :--- | :--- |
| A | Linearizes the $y - x$ dependence by means of formulae (1) and (2) or equivalent | 0.4 |
| No points are awarded for the following parts B-Q if there is no documentation of a circuit that is able to provide varying voltages to the X1 and/or X2 terminals at all. |  |  |
| B | Avoiding $( 0,3 )$ corner (even without explicit reasoning) but award points only if two usable data-sets have been recorded | 0.3 |
|  | Raw measurement values of $y$ for varying $x _ { 1 }$ |  |
| C | Roughly linear distribution of $x _ { 1 }$ Number of Points $\leq 3$ | 0.1 |
|  | Number of Points $\leq 3$ | 0 |
| D | 4-5 | 0.1 |
|  | 6-7 | 0.2 |
|  | $\geq 8$ | 0.3 |
| E | Raw measurement values of $y$ for vary- |  |
|  | Roughly linear distribution of $x _ { 2 }$ | 0.1 |
|  | Number of Points $\leq 3$ | 0 |
|  | 4-5 | 0.1 |
|  | 6-7 | 0.2 |
|  | $\geq 8$ | 0.3 |
| G | Conversion of $y$ into $z$ | 0.2 |
| I <br> J | Plot for $z$ versus $x _ { 1 }$ Size \& Axes |  |
|  | Values in plot | 0.2 |
|  | Linear regression line (only if data is actually linear, which is not the case when plotting $y$ vs $x _ { 1 }$ ) | 0.2 |
| K <br> L <br> M | Plot for $z$ versus $x _ { 2 }$ |  |
|  | Size \& Axes | 0.2 |
|  | Values in plot | 0.2 |
|  | Linear regression line (only if data is actually linear, which is not the case when plotting $y$ vs $x _ { 2 }$ ) | 0.2 |
| N | Value for $w _ { 1 }$ between $- 0.6 \mathrm {~V} ^ { - 1 }$ and $- 0.65 \mathrm {~V} ^ { - 1 }$ | 0.2 |
| O | Value for $w _ { 2 }$ between $0.93 \mathrm {~V} ^ { - 1 }$ and $1.01 \mathrm {~V} ^ { - 1 }$ | 0.2 |
| P | Value for $b$ between 1.64 and 1.70 | 0.2 |
|  | Note that these boundaries are strict and outside no points are awarded here, even if they are close. |  |
| Q | Overall penalty for significant digits other than 2-3 (rare occasion only -0.2) | -0.4 |
|  | Total on Task 4 | 3.5 |

Task 5

Since X 1 is connected to + V , the input voltage $x$ must somehow be supplied through X2. Conveniently, the neuron that we have to build in this task requires a weight of $w _ { 2 } / 2$, which we can effectively achieve by reducing the input voltage on X2 by a factor of two. For this, one of the potentiometers can be used to halve the input voltage. To find the correct position, the resistance between terminals 1-2 and 2-3 is measured while adjusting the knob. Due to the non-linear


![](../../../figures/solution-ocr/86de37ada83270af6e9d29a1.jpg)
Figure 3: Graph of $x _ { 1 } ( V )$ vs $z$ for Task 4

![](../../../figures/solution-ocr/c49c77f0034438d1deec87cd.jpg)
Figure 4: Graph of $x _ { 2 } ( V )$ vs $z$ for Task 4

behavior of the potentiometer, the final position is not the physical middle position. Alternatively, if a voltage is applied to the potentiometer, this can be tuned with the voltmeter function. The circuit for the modified neuron is visible in Fig. 5.

For this circuit, the input voltage $x$ is converted to $x _ { 2 }$ via the following relation:

$$
x _ { 2 } = \frac { 1 } { 2 } x
$$

Therefore, the intermediate function $z$ becomes

$$
z = w _ { 1 } U _ { + V } + \frac { w _ { 2 } } { 2 } x + b .
$$

This means that our new bias $b _ { 5 }$ is the constant part, so

$$
b _ { 5 } = w _ { 1 } U _ { + V } + b \approx - 0.35 .
$$

Note that it is also possible and fully correct to connect the other end of the potentiometer to +V instead of the ground, which leads to the same effective weight but a different $b _ { 5 }$ of approximately 1.2.

![](../../../figures/solution-ocr/34adf70cf8f366a23647f4d3.jpg)
Figure 5

| $x ( V )$ | $y ( V )$ | $z$ |
| :--- | :--- | :--- |
| 0.00 | 1.13 | -0.36 |
| 0.20 | 1.19 | -0.27 |
| 0.40 | 1.25 | -0.18 |
| 0.60 | 1.32 | -0.08 |
| 0.80 | 1.39 | 0.02 |
| 1.00 | 1.46 | 0.12 |
| 1.20 | 1.51 | 0.20 |
| 1.40 | 1.58 | 0.30 |
| 1.60 | 1.63 | 0.38 |
| 1.80 | 1.69 | 0.47 |
| 2.00 | 1.77 | 0.59 |
| 2.20 | 1.82 | 0.67 |
| 2.40 | 1.87 | 0.75 |
| 2.56 | 1.93 | 0.86 |

Table 4

However, in this solution we only consider the case shown in Fig. 5.
When the circuit is assembled, we can use the Apotentiometer (connected to +V and GND) to supply a variable voltage to the input of the new neuron. This way, we can take a few measurements to confirm that our circuit behaves as desired, which leads to the data in Tab. 4.

By linearization via the inverse activation function

$$
z = - \left( \ln \frac { A } { y } - 1 \right)
$$

we can plot $z$ vs $x$ and determine the effective weight from the slope and the bias $b _ { 5 }$ from the intercept, see Fig. 6.

Experimentally, we obtain $b _ { 5 } \approx - 0.36$, which is close to the theoretical value and an effective weight of $0.47 \mathrm {~V} ^ { - 1 } \approx w _ { 2 } / 2$. Since the linear fit is also in good agreement with the data points, we have shown that our circuit fulfils the expectations.


![](../../../figures/solution-ocr/931409e8d12b40f9239f60ce.jpg)
Figure 6

|  | Task 5 | Pts |
| :--- | :--- | :--- |
| A | Idea and drawing of circuit | 0.3 |
| B | Theoretical derivation and calculation of $b _ { 5 }$ partial credit for just the formula $b _ { 5 } = w _ { 1 } U _ { + V } + b$ | 0.2 <br> 0.1 |
| No points are awarded for the following parts |  |  |
|  | Raw measurement values of $y$ for vary- |  |
| C | Usage of whole span for $x$ | 0.1 |
| D | Number of Points $\leq 2$ | 0 |
|  | 3-4 | 0.1 |
|  | $\geq 5$ | 0.2 |
|  | Plot for $z$ versus $x$ |  |
| E | Size \& Axes | 0.2 |
| F | Converted values in plot | 0.2 |
| G | Linear regression line | 0.2 |
| H | Comparison of $b _ { 5 }$ | 0.1 |
| I | Overall penalty for significant digits other than 2-3 | -0.2 |
|  | Total on Task 5 | 1.5 |

Task 6

a
To determine the internal series output resistance $R _ { \text {out } }$, we have (at least) two options. We can either set the output of the neuron to a known value and connect the $Y$ terminal via an ampere-meter directly to ground - essentially shorting it - and dividing the neuron output voltage by the measured short-circuit current.
Alternatively, we can set the neuron to a known opencircuit voltage $U _ { \text {open } }$ by connecting + V to X 2 , connect Y to ground via the potentiometer resistance $R _ { \mathrm { P } }$ and measure the voltage drop $U _ { \mathrm { P } }$ over it. This is the safer version, in case we do not know how small $R _ { \text {out } }$ is and we prevent dangerous currents. We measure:

$$
U _ { \text {open } } \approx 2.71 \mathrm {~V} , \quad U _ { \mathrm { P } } \approx 2.11 \mathrm {~V}
$$

This results in:

$$
R _ { \text {out } } = \left( \frac { U _ { \text {open } } } { U _ { \mathrm { P } } } - 1 \right) R _ { \mathrm { P } } \approx 284 \Omega
$$

b
We want our circuit to approximate the function

$$
y _ { 6 } ( x ) = A _ { 6 } \cdot \sigma \left( w _ { 2 } x + b \right) + B _ { 6 }
$$

with $B _ { 6 } = 1.48 \mathrm {~V}$. First, it is obvious that $w _ { 1 }$ does not influence $y _ { 6 }$, and therefore terminal X1 needs to be connected to ground. To increase the voltage of terminal Y, we need to add a voltage divider in the form of a potentiometer between terminal Y and the supply voltage, as shown in Fig. 7.

![](../../../figures/solution-ocr/df709b316cc0431fef94d9a5.jpg)
Figure 7

The output voltage can be expressed by

$$
y = ( 1 - \eta ) A \sigma \left( w _ { 2 } x + b \right) + \eta U _ { + V } ,
$$

where $\eta$ is the voltage division ratio of the $R _ { P }$ and $R _ { \text {out } }$ combined:

$$
\eta = \frac { R _ { \text {out } } + R _ { a } } { R _ { \text {out } } + R _ { P } }
$$

with $R _ { a }$ being the fraction of $R _ { P }$ that lies in between B1 and B3. With this, we can use the given value of $B _ { 6 }$ to get $\eta$ :

$$
\eta = \frac { B _ { 6 } } { U _ { + V } } \approx 0.458 \Rightarrow \frac { R _ { a } } { R _ { P } } = \frac { 1 } { R _ { P } } \left( \frac { R _ { \text {out } } + R _ { P } } { 2 } - R _ { \text {out } } \right) \approx 0.389
$$

And thus we gain a theoretical value for $A _ { 6 }$ :

$$
\begin{equation*}
A _ { 6 } = A ( 1 - \eta ) = A \left( 1 - \frac { B _ { 6 } } { U _ { + V } } \right) \approx 1.5 \mathrm {~V} . \tag{8}
\end{equation*}
$$

To experimentally verify that our neuron behaves as expected, once again, the remaining potentiometer can be used to apply different input voltages $x$ and the output $y$ is recorded. The multimeter can be used to set the internal B-potentiometer to the right ratio - do not forget to measure in the ohmmeter mode only if there are no currents running through the potentiometer. To linearize the data, we rescale the $x$ values by applying the sigmoid function $\sigma ( z ( x ) )$ to it. The resulting numerical values can be seen in Tab. 5.

If one plots $\sigma \left( w _ { 2 } x + b \right)$ against $x$, one expects a linear function with slope $A _ { 6 }$ and intercept $B _ { 6 }$. The raw data is shown in Fig. 8 and the linear fit in Fig. 9.


| $x ( V )$ | $y ( V )$ | $A \sigma \left( w _ { 2 } x + b \right) ( V )$ |
| :--- | :--- | :--- |
| 0.00 | 2.73 | 1.38 |
| 0.15 | 2.76 | 1.48 |
| 0.30 | 2.78 | 1.58 |
| 0.45 | 2.80 | 1.68 |
| 0.60 | 2.83 | 1.78 |
| 0.75 | 2.85 | 1.87 |
| 0.90 | 2.86 | 1.96 |
| 1.20 | 2.89 | 2.11 |
| 1.50 | 2.91 | 2.25 |
| 1.80 | 2.92 | 2.36 |
| 2.10 | 2.94 | 2.45 |
| 2.40 | 2.95 | 2.52 |
| 2.70 | 2.96 | 2.58 |
| 3.00 | 2.96 | 2.62 |
| 3.23 | 2.97 | 2.65 |


![](../../../figures/solution-ocr/89e075e6f8b0c2f0acf73456.jpg)
Figure 9

![](../../../figures/solution-ocr/2345d4c026fd262f4da82f04.jpg)
Figure 8

From the fit, we read $A _ { 6 } \approx 1.53$ and $B _ { 6 } \approx 1.45$, which is in agreement with our theoretical values up to 2 significant digits. The fact that the linear fit function agrees well with the data points further confirms that the neuron behaves as intended.

|  | Task 6 | Pts |
| :--- | :--- | :--- |
| A | Idea for output resistance | 0.2 |
| B | Measurements | 0.2 |
| C | $R _ { \text {out } } = 284 \Omega \pm 15 \Omega$ | 0.1 |
| D | Idea and drawing of circuit | 0.5 |
| No points are awarded for the following parts E-L if the circuit used is the same as used in task 4 or task 5 or the only change is that X1 is connected to GND or if there is no documentation of a circuit that is able to provide varying voltages here or in previous tasks. |  |  |
| E | Derivation of $A _ { 6 }$ (8) | 0.4 |
|  | Penalty for neglecting $R _ { \text {out } }$ | -0.2 |
| F G | Raw measurement values of $y _ { 6 }$ for varying $x$ |  |
|  | Usage of whole span for $x$ | 0.1 |
|  | Number of Points <= 2 | 0 |
|  | 3-4 | 0.1 |
|  | >= 5 | 0.2 |
| H <br> H <br> I <br> J | Plot for $y _ { 6 }$ versus $\sigma ( z ( x ) )$ |  |
|  | Size \& Axes | 0.2 |
|  | Converted values in plot | 0.2 |
|  | Linear regression line | 0.2 |
| K | Alignment of measured and theoretical values | 0.2 |
| L | Overall penalty for significant digits other than 2-3 | -0.2 |
|  | Total on Task 6 | 2.5 |
