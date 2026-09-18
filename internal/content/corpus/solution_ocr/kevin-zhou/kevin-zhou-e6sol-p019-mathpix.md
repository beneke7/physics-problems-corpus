---
id: solution-ocr-kevin-zhou-e6sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 19. A resonant cavity of the form illustrated below is an essential part of many microwave oscillators. It is a single piece of metal, which can be treated like an LC circuit.
![](../../../figures/solution-ocr/e8ebf4153a8e8b45110a0fc4.jpg)
![](../../../figures/solution-ocr/18eb7f5f4cde6dace3a8b812.jpg)

(a) Assuming that $s \ll a , b , h$, estimate the lowest resonant angular frequency of the cavity by treating it as an $L C$ circuit. It may be helpful to sketch the magnetic and electric fields.
(b) One of the most common types of cavity is a cylindrical cavity, i.e. a hollow cylinder. (It corresponds to taking $s = h$ in the above setup.) Assuming that $h \approx b$, find a reasonable estimate of the lowest resonant angular frequency $\omega$.

Solution. (a) The top of the small internal cylinder forms a small parallel plate capacitor with the top, with capacitance

$$
C = \epsilon _ { 0 } \frac { \pi a ^ { 2 } } { s } .
$$

Meanwhile, the entire rest of the cavity looks like a toroidal solenoid with one turn, which we already know has an inductance of

$$
L = \frac { \mu _ { 0 } h } { 2 \pi } \log \frac { b } { a } .
$$

Therefore we have

$$
\omega = \frac { 1 } { \sqrt { L C } } = \frac { 1 } { \sqrt { \frac { \mu _ { 0 } h } { 2 \pi } \log ( b / a ) \epsilon _ { 0 } \left( \pi a ^ { 2 } \right) / s } } = \frac { c } { a } \sqrt { \frac { 2 s } { h \log ( b / a ) } }
$$

where $c$ is the speed of light. The fields are sketched below.
![](../../../figures/solution-ocr/293a95f1c4ad943d0a6dc9c8.jpg)

(b) If we just plug in $s = h$ above, we get
$$
\omega = \frac { c } { a } \sqrt { \frac { 2 } { \log ( b / a ) } } .
$$
However, this result is nonsense, because it depends on $a$, which has no physical meaning when $s = h$. The problem is that our heuristic picture in (a) of how the current and charge is distributed only makes sense for $s \ll h$.
A complete and rather complicated analysis would show that the lowest resonant angular frequency is
$$
\omega = c \min \left( 1.841 \left( \frac { 1 } { b ^ { 2 } } + \frac { 2.912 } { h ^ { 2 } } \right) ^ { 1 / 2 } , \frac { 2.405 } { b } \right) .
$$
In this case, we can get close by dimensional analysis, which tells us that $\omega \sim c / b$, since $b$ is the only length scale in the problem. (Recall that we assumed $h \approx b$.)


## Remark

In E3, we saw that for DC circuits, any system of resistors and ideal batteries with two ports is equivalent, from the perspective of anything connected across the ports, to either a single resistor and ideal battery in series (the Thevenin equivalent), or a single resistor and ideal current source in parallel (the Norton equivalent). From the ideas covered in this problem set, we also know that any system of resistors, inductors, and capacitors with two ports is equivalent, at a fixed angular frequency $\omega$, to a single lumped element with impedance $Z _ { \text {eq } }$. This in turn could be constructed out of a single resistor and inductor or capacitor in series.

This naturally leads to a more general question: it is possible to construct a simple "equivalent" circuit that has exactly the same $Z _ { \mathrm { eq } } ( \omega )$, for all $\omega$ ? The answer is yes. For example, consider the simple case of a circuit of only inductors and capacitors. Here's the rough idea: in this case, the equivalent impedance is always a pure imaginary, rational function of $\omega$, meaning a ratio of two polynomials in $\omega$. But rational functions can always be expanded in partial fractions. Assuming no multiple roots for simplicity, each term in the partial fraction decomposition can be mimicked with an LC circuit, and we get the sum by placing these circuits in series.

In electrical engineering, the general task of constructing a circuit with a prescribed $Z ( \omega )$ is called network synthesis; the above example is called Foster's synthesis. These techniques can be used to construct filters more elaborate than the ones you explored in problem 16.

## Remark

Power companies often transmit electricity with "three-phase power". This means that there are three "hot" electrical lines, carrying voltages

$$
V _ { 1 } ( t ) = V _ { 0 } \cos ( \omega t ) , \quad V _ { 2 } ( t ) = V _ { 0 } \cos ( \omega t + 2 \pi / 3 ) , \quad V _ { 3 } ( t ) = V _ { 0 } \cos ( \omega t + 4 \pi / 3 ) .
$$

There are several advantages to three-phase power, but one is that it supplies a constant power, as $V _ { 1 } ^ { 2 } + V _ { 2 } ^ { 2 } + V _ { 3 } ^ { 2 }$ is constant.

An ordinary American wall outlet has three holes, arranged like a face. The smaller eye is the "hot" one, with voltage $V _ { 1 } ( t )$, while the larger eye and the mouth are both grounded. Appliances are powered by the voltage difference between the eyes. Appliances that use significant power and have metal exteriors have three-prong plugs. Here, the mouth is connected directly to the exterior of the appliance, ensuring that it can't shock you, even if something goes wrong inside. If you live in an apartment building, you might also have special power outlets meant for very power-intensive appliances like dryers and heaters. In these outlets, one hole has voltage $V _ { 1 } ( t )$ and another has $V _ { 2 } ( t )$, giving an AC voltage difference of amplitude $\sqrt { 3 } V _ { 0 }$.


## 4 Normal Modes

Idea 4
A circuit with $n$ independent loops has $n$ normal modes. If we ignore resistances, the normal modes are pure sinusoids, though in all real circuits they exponentially damp over time. Just as in mechanics, the general solution for the behavior of a driven circuit is a superposition of normal mode currents and the response to the driving.

There are many ways to find the normal mode frequencies.

- One way is to pick any two points not directly connected by wires. We may imagine that across these points we have attached a current source $\tilde { I }$ which is doing nothing, $\tilde { I } = 0$. If a normal mode is present at angular frequency $\omega$, then we can have $\tilde { V } \neq 0$, even though $\tilde { I } = 0$ because current is merely sloshing around inside the circuit. Thus, the equivalent impedance $Z ( \omega )$ between these points is infinite.
- Another way is to pick two points directly connected by wires. We may imagine this wire is actually a voltage source $\tilde { V }$ which is doing nothing, $\tilde { V } = 0$. If a normal mode is present at angular frequency $\omega$, then we can have a current $\tilde { I } \neq 0$ through the wire even though $\tilde { V } = 0$, so the equivalent impedance $Z ( \omega )$ between these points is zero.
- Some LC circuits can be mapped to sets of masses and springs using the analogies in idea 1, which can help with guessing the normal modes.
- Finally, one may simply write down all of Kirchhoff's loop equations, plug in $e ^ { i \omega t }$ time dependence, and look for a solution. This boils down to solving a system of $n$ equations, or equivalently evaluating the determinant of an $n \times n$ matrix. This is rarely the best approach on an Olympiad.
- Not every problem benefits from using normal modes; for relatively simple circuits with special initial conditions, it may be better to solve Kirchhoff's loop equations directly.

Example 7: Kalda 89
Find the normal mode frequencies of the circuit below.
![](../../../figures/solution-ocr/7ba6d3b963bacde18ea50995.jpg)


Solution
There are four independent Kirchhoff's loop equations, so we expect four normal modes. One normal mode consists of current simply flowing uniformly along the outside, along the inductors. Since the capacitors aren't involved, this normal mode has $\omega _ { 0 } = 0$.

Now we apply the first technique listed above: we pick two points not directly connected with wires, and set the impedance to infinity. By symmetry, it's best to pick $A$ and $D$. By symmetry, if any voltage is applied between $A$ and $D$, the points $B$ and $E$ will be at the same voltage. Furthermore, this point will be at the same voltage as $O$, because the remaining circuit forms a balanced Wheatstone bridge, as introduced in E3. Identifying $B$, $E$, and $O$ straightforwardly gives a simple $L C$ circuit with $L _ { \text {eff } } = ( 3 / 2 ) L$ and $C _ { \text {eff } } = ( 2 / 3 ) C$, and resonant angular frequency $\omega _ { 1 } = 1 / \sqrt { L _ { \text {eff } } C _ { \text {eff } } } = 1 / \sqrt { L C }$.

This procedure only gave one of the three remaining normal modes, so we must have missed the other two because they have zero voltage difference between $A$ and $D$. Therefore, to find the other two, we can join $A$ and $D$, leading to the simpler equivalent circuit below.
![](../../../figures/solution-ocr/037a2d679e5fef1e92240187.jpg)
We now apply the same procedure between points $B$ and $E$. This circuit is again a balanced Wheatstone bridge, so $O$ and $A$ are at the same voltage. We then have a simple $L C$ circuit with $L _ { \text {eff } } = ( 4 / 3 ) L$ and $C _ { \text {eff } } = C$, giving $\omega _ { 2 } = \sqrt { 3 / 4 L C }$.

Again, we've missed a normal mode, so that remaining mode must have zero voltage difference between $B$ and $E$. Joining them together leads to the final equivalent circuit below.
![](../../../figures/solution-ocr/f2480e24240c2ba7f1061ad7.jpg)
This is now a simple $L C$ circuit with $L _ { \text {eff } } = ( 1 / 3 ) L$ and $C _ { \text {eff } } = ( 12 / 7 ) C$, giving the final resonant angular frequency $\omega _ { 3 } = \sqrt { 7 / 4 L C }$.

[2] Problem 20 (Kalda). Consider the LC circuit below.

![](../../../figures/solution-ocr/2f7ca6111361d938da4ec823.jpg)
Show that the normal mode angular frequencies are $\omega = ( \sqrt { 5 } \pm 1 ) / 2 \sqrt { L C }$.
Solution. We set the impedance between the two ends of the bottom left wire to be 0, so

$$
i \omega L + \frac { 1 } { i \omega C } + \frac { 1 } { i \omega C + \frac { 1 } { i \omega L } } = 0
$$

Let $a = i \omega L$ and $b = \frac { 1 } { i \omega C }$. We have $a + b + 1 / ( 1 / a + 1 / b ) = 0$, so $( a / b ) ^ { 2 } + 3 ( a / b ) + 1 = 0$, so $\omega ^ { 2 } L C = - a / b = \frac { 3 \pm \sqrt { 5 } } { 2 }$. But note $( \sqrt { 5 } \pm 1 ) ^ { 2 } = 2 ( 3 \pm \sqrt { 5 } ) = 4 \omega ^ { 2 } L C$, which shows $\omega = ( \sqrt { 5 } \pm 1 ) / 2 \sqrt { L C }$.

[3] Problem 21 (IPhO 2014). Initially, the switch $S$ is open in the circuit shown below.
![](../../../figures/solution-ocr/f01f038e997e7381cccc9ddb.jpg)
The capacitor with capacitance $2 C$ is given a charge $q _ { 0 }$, and immediately begins to discharge. At the moment when the current through the inductors reaches its maximum value, the switch $S$ is closed. Find the maximum current through the switch thereafter.

Solution. See the official solution to IPhO 2014, problem 1(c).

[5] Problem 22 (Physics Cup 2012). Find the angular frequencies of the normal modes of the circuit below, where $C _ { 1 } \ll C _ { 2 }$ and $L _ { 1 } \ll L _ { 2 }$.
![](../../../figures/solution-ocr/0807e1fe7be9848ad6fd5d43.jpg)
You may give all of your answers to lowest order in $C _ { 1 } / C _ { 2 }$ and $L _ { 1 } / L _ { 2 }$.
Solution. See the solutions here.


## 5 Nonlinear Circuit Elements

In this section we'll introduce nonlinear circuit elements, focusing on diodes. More exotic circuit elements will be covered in E7.

Idea 5
Many nonlinear circuit elements can be described by a current-voltage characteristic $I ( V )$. Such circuit elements have trivial time dependence, just like resistors, and working with them basically amounts to using Kirchhoff's laws as usual, plugging in $I ( V )$ where necessary.

Since the implementation details of such elements can be very complicated, and many draw power from external sources, it generally isn't productive to think of them "physically"; they are more like miniature computers than physical objects. One just has to take $I ( V )$ as given and work directly with it. Some simple examples are:

- An ideal diode acts like a wire in one direction and a break in the other, so it has
$$
I ( V ) = \begin{cases} \infty & V > 0 , \\ 0 & V < 0 . \end{cases}
$$
- Sometimes one instead takes the $I ( V )$ characteristic
$$
I ( V ) = \begin{cases} \infty & V > V _ { 0 } , \\ 0 & V < V _ { 0 } \end{cases}
$$
which means that it "costs" voltage $V _ { 0 }$ to go through the diode in the forward direction. More realistically, $I ( V )$ smoothly increases when $V$ passes $V _ { 0 }$, but you don't often see this in Olympiad problems because it makes the math very messy.
- Zener diodes can allow current in both directions. An idealized bidirectional diode has
$$
I ( V ) = \begin{cases} \infty & V > V _ { 0 } \\ 0 & - V _ { 0 } < V < V _ { 0 } , \\ - \infty & V < - V _ { 0 } \end{cases}
$$
- Many familiar objects such as fuses (wires which break when $I$ passes a threshold) and spark gaps (breaks that conduct when $V$ passes a threshold) can be thought of as nonlinear circuit elements in the same way.

Analytically, these three cases are easily handled by casework. For instance, a diode acts just like a wire for positive $V$, and just like a break for negative $V$. In each case, the circuit is no more complicated than an ordinary one with linear circuit elements. Then you put the cases together to get the full behavior.


Example 8
A capacitor of capacitance $C$ is charged so that its voltage is $V _ { c }$. The capacitor is placed in series with a resistor $R$ and a diode with $I ( V )$ characteristic

$$
I ( V ) = \begin{cases} \infty & V > V _ { 0 } , \\ 0 & V < V _ { 0 } . \end{cases}
$$

The diode is oriented so that the initial voltage across it is positive. How does the voltage across the capacitor change over time?

Solution
If $V _ { c } < V _ { 0 }$, the voltage on the capacitor is not enough to get current to flow through the diode, so nothing happens. If $V _ { c } > V _ { 0 }$, current flows, at the cost of a voltage drop $V _ { 0 }$ across the diode. Then we can simply replace the diode with a battery of $\operatorname { emf } V _ { 0 }$ oriented in the opposite direction. This system is equivalent to an ordinary RC circuit with battery, with the capacitor initially charged to higher than $V _ { 0 }$. The extra voltage exponentially decays,

$$
V ( t ) = \left( V _ { c } - V _ { 0 } \right) e ^ { - t / R C } + V _ { 0 }
$$

so that in the limit $t \rightarrow \infty$, the capacitor voltage approaches $V _ { 0 }$ and the current stops.

Idea 6
It is difficult to solve a nonlinear circuit analytically if $I ( V )$ is not very simple. In these cases:

- One can find the answer graphically as the intersection of $I ( V )$ and another curve.
- One can solve for the answer iteratively on a calculator.
- If $V$ stays within a narrow range, one can take a linear approximation to $I ( V )$. This effectively replaces the element with a battery in series with a resistor, so the problem can be solved just like those in E3.
[1] Problem 23 (Kalda). Find the current in the circuit given below.
![](../../../figures/solution-ocr/05fea12b1bca3069b29a87a8.jpg)
![](../../../figures/solution-ocr/2e5730cd60f232209d324f07.jpg)
The nonlinear element is a diode with the $I ( V )$ characteristic shown.
Solution. We simply draw the line $V ( I ) = 1.5 \mathrm {~V} - ( 100 \Omega ) I$ on the graph and find the intersection, which gives $I \approx 8 \mathrm {~mA}$.

Idea 7
The power delivered to any circuit element is still $P = I V$. However, some nonlinear circuit elements can be active, providing net power to the circuit, like batteries.

Example 9: Kalda 64
The circuit below containing an ideal diode makes it possible to charge a rechargeable battery of voltage $\mathcal { E } = 12 \mathrm {~V}$ with a direct voltage source of a voltage $V _ { 0 } = 5 \mathrm {~V} < \mathcal { E }$.
![](../../../figures/solution-ocr/7893804c8c6d485a8d379bb4.jpg)
To do this, the switch K is periodically opened and closed, with the opened and closed periods having equal length $\tau = 10 \mathrm {~ms}$. Find the average charging current assuming $L = 1 \mathrm { H }$.

Solution
This system is called a boost converter. The point is that, using an inductor and a switch, one can generate emfs larger than what we put in, because the current wants to keep flowing through the inductor when the switch is opened; this allows us to get enough emf to charge the battery. This idea is also used in the ignition coils of old-fashioned cars, where a voltage large enough to ionize air is produced, making a spark and starting the engine. There's also a fluid analogue, called the hydraulic ram, used to raise water. The diode's role is just to keep current from flowing backward during the other half of the cycle.

When the switch is closed, no current can flow through the battery, and the current through the inductor builds up linearly, since there is an emf $V _ { 0 }$ across the inductor. When the switch is opened, the emf across the inductor is $V _ { 0 } - \mathcal { E } = - 7 \mathrm {~V}$, causing its current to decrease while simultaneously charging the battery. After a time (5/7) $\tau$ with the switch open, the current through the inductor falls to zero, and the diode causes current to stop flowing.

Quantitatively, while the switch is closed, the current through the inductor builds up to $V _ { 0 } \tau / L$. When the switch is open, current flows for a time $( 5 / 7 ) \tau$, linearly falling to zero, so the total charge is

$$
Q = \frac { 1 } { 2 } \frac { V _ { 0 } \tau } { L } \frac { 5 } { 7 } \tau .
$$

A cycle takes time $2 \tau$, so

$$
\bar { I } = \frac { Q } { 2 \tau } = \frac { 5 } { 28 } \frac { V _ { 0 } \tau } { L } = 8.9 \mathrm {~mA} .
$$

By the way, your phone and laptop chargers probably have rectangular bricks containing a switched-mode power supply. This consists of one part that converts the AC wall power to DC, and a second part similar to the circuit above, but set up to output a lower DC voltage. You could also use a transformer to lower the AC voltage, but a switch-mode power supply is more space-efficient, and it easily copes with a range of input AC voltages and frequencies.


[3] Problem 24. NBPhO 2010, problem 9. You should assume that $U _ { i }$ and $U _ { o }$ are positive, and that in part (i) the currents are initially zero.
[3] Problem 25 (Kalda). An alternating voltage $V = V _ { 0 } \cos ( 2 \pi \nu t )$ is applied to the leads of the circuit shown below. Treat the diode as ideal.
![](../../../figures/solution-ocr/a313fa844ade362a5fd4f2de.jpg)
Assuming the current in the inductor begins at zero, what is the average current through the inductor at late times?

Solution. Since $\omega L \gg R$, the inductor's current changes very slowly, so we can neglect its change over any one cycle. During some cycle, let's write the steady state current in the inductor as

$$
\bar { I } _ { L } = \alpha \left( V _ { 0 } / R \right)
$$

where $\alpha = 0$ in the beginning. Let the current through the resistor be $I _ { R }$. The current through the diode is $I _ { D } = \bar { I } _ { L } + I _ { R }$. When the diode lets current through, $I _ { D } > 0$, the voltage across the inductor is

$$
V _ { L } = V _ { 0 } \cos ( 2 \pi \nu t ) .
$$

During this time, the current through the diode is a shifted sinusoid,

$$
I _ { D } = \bar { I } _ { L } + \frac { V _ { 0 } } { R } \cos ( 2 \pi \nu t )
$$

The diode blocks current once $I _ { D }$ falls to zero. Thus, for $\alpha = 0$ the diode is blocking half the time, while for $\alpha = 1$ the diode is never blocking. The situation for $\alpha \approx 0.5$ is shown below.
![](../../../figures/solution-ocr/39922c58fda1c45784c5d24e.jpg)

When the diode is blocking, the voltage across the inductor is

$$
V _ { L } = I _ { R } R = - \bar { I } _ { L } R .
$$

The net change in $\bar { I } _ { L }$ in one cycle is

$$
\Delta \bar { I } _ { L } = \frac { 1 } { L } \int _ { \text {cycle } } V _ { L } d t
$$


In the beginning, when $\alpha = 0$, this integral is positive because $V _ { L } ( t )$ looks like a sinusoid but with only the positive parts. As $\alpha$ increases, the integral begins to pick up part of the negative half of the sinusoid, but the overall integral is still positive, so $\alpha$ continues to increase. The final steady state is when $\alpha = 1$ and the current flows all the time. At this point, $\bar { I } _ { L } = V _ { 0 } / R = 1 \mathrm {~A}$.
[3] Problem 26. NBPhO 2008, problem 6.
[3] Problem 27. NBPhO 2013, problem 8. A circuit with a nice mechanical analogy.
[3] Problem 28. 3 IPhO 2001, problem 1c.
[3] Problem 29. USAPhO 2018, problem A2.
[4] Problem 30. EuPhO 2022, problem 2.
