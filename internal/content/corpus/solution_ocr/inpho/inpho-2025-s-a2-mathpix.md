---
id: solution-ocr-inpho-2025-s-a2
source: inpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/inpho/2025_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [inpho-2025-a2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2. Gearminator: Rise of the Machines

We consider a "thought experiment" involving a DC motor and a DC generator coupled mechanically through a gearbox, operating under idealized conditions, to explore the power output and efficiency of the system (see schematic figure below). The schematic gearbox assembly is also shown in the figure.
![](../../../figures/solution-ocr/1bb7472e71a68cc14e8525a0.jpg)

![](../../../figures/solution-ocr/f07271dde3068f92ff4be28d.jpg)
Gearbox

Both the motor and the generator have $N$ loops of area $A$ and rotate in a uniform magnetic field of strength $B$. As usual, both the motor and the generator use commutators (indicated by the blue blocks) to reverse the direction of current in each arm every half cycle, to ensure unidirectional output. The generator is connected to an external resistance $R$, and the motor is driven by a constant voltage $V _ { M }$ with an internal resistance $r$. The gearbox is idealized, with no energy loss due to friction or otherwise, and no slipping between the teeth of the gears. For a pair of meshing gears, as shown above, the angular speed ratio, also known as the gear ratio $X$, is defined as:

$$
X = \frac { \omega _ { M } } { \omega _ { G } } ,
$$

where $\omega _ { M }$ and $\omega _ { G }$ are the angular velocities of the motor and the generator, respectively. Let $\left\langle P _ { G } \right\rangle$, and $\left\langle P _ { M } \right\rangle$ be the time-averaged generator output power and the time-averaged motor input power, respectively, over one complete cycle.

(a) [ $\mathbf { 6 }$ marks] Derive the expression for $\omega _ { G }$ in terms of $X , R , r$, and the given parameters. For fixed values of $r$ and $R$, determine the expression of $X$ for which $\omega _ { G }$ is maximum.

Solution: First, we analyze motor equations:
Applying voltage $V _ { M }$ drives the motor. The current $I _ { M }$ and and the angular speed $\omega _ { M }$ are determined through the following equations.


- The circuit equation for motor with speed $\omega _ { M }$ is
$$
\begin{equation*}
V _ { M } - \epsilon _ { b M } - I _ { M } r = 0 \tag{2.1}
\end{equation*}
$$

where $\epsilon _ { b M } = N A B \omega _ { M } \sin \left( \omega _ { M } t \right)$ is the induced back emf. Thus, the current $I _ { M }$ is

$$
\begin{equation*}
I _ { M } = \frac { 1 } { r } \left( V _ { M } - N B A \omega _ { M } \sin \left( \omega _ { M } t \right) \right) \tag{2.2}
\end{equation*}
$$

- The magnetic torque on the coils carrying current $I _ { M }$ is

$$
\begin{align*}
\tau _ { M } & = N I _ { M } B A \sin \left( \omega _ { M } t \right)  \tag{2.3}\\
& = \frac { 1 } { r } \left( V _ { M } N B A \sin \left( \omega _ { M } t \right) - N ^ { 2 } B ^ { 2 } A ^ { 2 } \omega _ { M } \sin ^ { 2 } \left( \omega _ { M } t \right) \right) \tag{2.4}
\end{align*}
$$

The Gearbox is massless, and there is no loss of power. Thus,

$$
\begin{equation*}
\tau _ { M } \omega _ { M } = \tau _ { G } \omega _ { G } \Rightarrow \tau _ { G } = X \tau _ { M } \tag{2.5}
\end{equation*}
$$

For generator: Gearbox drives the motor with torque $\tau _ { G }$. The current $I _ { G }$ and and the angular speed $\omega _ { G }$ are determined through the following equations.

- The circuit equation for generator with speed $\omega _ { G }$ is
$$
\begin{equation*}
e _ { b G } - I _ { G } R = 0 \tag{2.6}
\end{equation*}
$$
where $\epsilon _ { b G } = N A B \omega _ { G } \sin \left( \omega _ { G } t \right)$ is the induced back emf. Thus, the current $I _ { G }$ is
$$
\begin{equation*}
I _ { G } = \frac { 1 } { R } N B A \omega _ { G } \sin \left( \omega _ { G } t \right) \tag{2.7}
\end{equation*}
$$

- The magnetic torque on the coils carrying current $I _ { G }$ is

$$
\begin{align*}
\tau _ { G } & = N I _ { G } B A \sin \left( \omega _ { G } t \right) \\
& = \frac { 1 } { R } N ^ { 2 } B ^ { 2 } A ^ { 2 } \omega _ { G } \sin ^ { 2 } \left( \omega _ { G } t \right) \tag{2.8}
\end{align*}
$$

Since there is no dissipation in the gearbox, from Eq. (2.5), we get

$$
\begin{equation*}
\left\langle \tau _ { G } \right\rangle = \left\langle \tau _ { M } \right\rangle X \tag{2.9}
\end{equation*}
$$

From Eq. (2.8)

$$
\begin{equation*}
\left\langle \tau _ { G } \right\rangle = \frac { N ^ { 2 } B ^ { 2 } A ^ { 2 } \omega _ { G } } { 2 R } \tag{2.10}
\end{equation*}
$$

Since $\left\langle \sin ^ { 2 } ( \omega t ) \right\rangle = 1 / 2$ over one complete cycle, and from Eq. (2.4)

$$
\begin{equation*}
\left\langle \tau _ { M } \right\rangle = \frac { 2 V _ { M } N B A } { \pi r } - \frac { N ^ { 2 } B ^ { 2 } A ^ { 2 } \omega _ { M } } { 2 r } \tag{2.11}
\end{equation*}
$$

Since $\left\langle \sin ^ { 2 } ( \omega t ) \right\rangle = 1 / 2$, and $\langle \sin ( \omega t ) \rangle = 2 / \pi$ over one complete cycle. Using Eq. (2.9), we obtain

$$
\begin{gather*}
\frac { \omega _ { G } } { R } = \frac { \left( 4 V _ { M } / \pi N B A \right) X } { r } - \frac { X ^ { 2 } \omega _ { G } } { r }  \tag{2.12}\\
\omega _ { G } \left( \frac { 1 } { R } + \frac { X ^ { 2 } } { r } \right) = \left( \frac { 4 V _ { M } } { \pi N B A } \right) \frac { X } { r }  \tag{2.13}\\
\omega _ { G } = \left( \frac { 4 V _ { M } } { \pi N B A } \right) \frac { 1 } { \left( \frac { r } { X R } + X \right) } \tag{2.14}
\end{gather*}
$$

To maximize $\omega _ { G }$, minimize the denominator $r / R X + X$. Differentiating:

$$
\begin{gather*}
\frac { d } { d X } \left( \frac { r } { R X } + X \right) = 0  \tag{2.15}\\
- \frac { r } { R X ^ { 2 } } + 1 = 0  \tag{2.16}\\
\Rightarrow X = \sqrt { \frac { r } { R } } \tag{2.17}
\end{gather*}
$$


(b) [3 marks] Derive the expression for the generator output power $\left\langle P _ { G } \right\rangle$ in terms of $X , R , r$, and the given parameters. For fixed values of $r$ and $R$, determine the expression of $X$ for which $\left\langle P _ { G } \right\rangle$ is maximum.
Solution: The generator output power is
$$
\begin{array} { r }
\left\langle P _ { G } \right\rangle = \frac { \left\langle \epsilon _ { G } ^ { 2 } \right\rangle } { R } = \frac { N ^ { 2 } B ^ { 2 } A ^ { 2 } \omega _ { G } ^ { 2 } } { 2 R } \\
\left\langle P _ { G } \right\rangle = \frac { 8 V _ { M } ^ { 2 } } { \pi ^ { 2 } R \left( \frac { r } { X R } + X \right) ^ { 2 } }
\end{array}
$$
To maximize $\left\langle P _ { G } \right\rangle$, differentiate with respect to $X$ and solve for $X$
$$
\begin{equation*}
X = \sqrt { \frac { r } { R } } \tag{2.18}
\end{equation*}
$$
(c) [5 marks] For fixed values of $r$ and $R$, determine the condition on $X$ for which the efficiency $\eta$ is maximum, where
$$
\eta = \frac { \left\langle P _ { G } \right\rangle } { \left\langle P _ { M } \right\rangle } .
$$
Calculate this maximum value of $\eta$.

Solution: The motor input power is:

$$
\begin{align*}
\left\langle P _ { M } \right\rangle & = \left\langle V _ { M } I _ { M } \right\rangle  \tag{2.19}\\
& = \left\langle \frac { V _ { M } } { r } \left( V _ { M } - N B A \omega _ { M } \sin \left( \omega _ { M } t \right) \right) \right\rangle  \tag{2.20}\\
& = \frac { V _ { M } } { r } \left( V _ { M } - \frac { 2 } { \pi } N B A X \omega _ { G } \right)  \tag{2.21}\\
& = \frac { V _ { M } ^ { 2 } } { r } \left( 1 - \left( \frac { 8 } { \pi ^ { 2 } } \right) \frac { 1 } { \left( \frac { r } { X ^ { 2 } R } + 1 \right) } \right) \tag{2.22}
\end{align*}
$$

and

$$
\begin{equation*}
\left\langle P _ { G } \right\rangle = \frac { 8 V _ { M } ^ { 2 } } { \pi ^ { 2 } R \left( \frac { r } { X R } + X \right) ^ { 2 } } \tag{2.23}
\end{equation*}
$$

The efficiency is given by:

$$
\begin{equation*}
\eta = \frac { \left\langle P _ { G } \right\rangle } { \left\langle P _ { M } \right\rangle } \tag{2.24}
\end{equation*}
$$

Substituting the expressions for $\left\langle P _ { G } \right\rangle$ and $\left\langle P _ { M } \right\rangle$, maximize $\eta$ with respect to $X$, we get

$$
\begin{equation*}
X _ { \max } \approx 1.52 \sqrt { \frac { r } { R } } \tag{2.25}
\end{equation*}
$$

At this $X$, efficiency $\eta$ is maximum. The maximum value of $\eta$ can be calculated by substituting value $X _ { \text {max } }$ in $\eta$.

$$
\begin{equation*}
\eta _ { \max } \approx 0.4 \tag{2.26}
\end{equation*}
$$
