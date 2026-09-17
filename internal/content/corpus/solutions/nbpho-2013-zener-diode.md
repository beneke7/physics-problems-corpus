---
id: nbpho-2013-zener-diode
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2013-zener-diode
solution_type: official
source_document: solution-document-nbpho-2013-s
source_pdf: cache/phoxiv/nbpho/2013_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2013_S.pdf."
---

8. ZENER DIODE (7 points)
i) (1 point) Kirchoff's $2^{\text {nd }}$ law gives $L \dot{I}+$ $q / C=0$ or $\ddot{q}+\frac{1}{L C} q=0$. This is the equation of a simple harmonic oscillator with the frequency $\omega=\frac{1}{\sqrt{L C}}$ and we can immediately write $q(t)=q_{0} \cos \omega t$, while $I(t)=\dot{q}(t)=$ $-\omega q_{0} \sin \omega t$.

Note that

$$
q^{2}+\frac{1}{\omega^{2}} I^{2}=q_{0}^{2}\left(\sin ^{2} \omega t+\cos ^{2} \omega t\right)=q_{0}^{2}
$$

and therefore the phase diagram of the system is an ellipse centred at the origin, with semi-axes $q_{0}$ and $\omega q_{0}$. Alternatively, this relation comes directly from the conservation of energy:

$$
\frac{L I^{2}}{2}+\frac{q^{2}}{2 C}=E_{0}=\frac{q_{0}^{2}}{2 C} .
$$

By looking at $q$ and $I$ a quarter-period later from $t=0$, say, it's not hard to see that the system must evolve in a clockwise sense on the phase diagram. Note that in this instance, only $q=0$ is an equilibrium point: for all non-zero $q$ there will be never-ending oscillations in the circuit.
![](https://cdn.mathpix.com/cropped/171a4f99-da16-4277-8f84-ac5262b2531d-3.jpg?height=664&width=666&top_left_y=1097&top_left_x=784)
ii) (2 points) Now the sign of the voltage on the diode depends on the direction of the current, giving either of $L \ddot{q}+\frac{q}{C} \pm V_{d}=0$. We can summarize the equations as follows:

$$
\begin{array}{ll}
L \ddot{q}+\frac{q}{C}=V_{d} & \text { if } \dot{q}<0 \\
L \ddot{q}+\frac{q}{C}=-V_{d} & \text { if } \dot{q}>0
\end{array}
$$

Let us introduce the new variables $q_{1,2}$ such that $q_{1}=q-C V_{d}$ and $q_{2}=q+C V_{d}$. Then we can rewrite the two equations above in a more familiar form:

$$
\begin{array}{ll}
L \ddot{q}_{1}+\frac{q_{1}}{C}=0 & \text { if } \dot{q}<0 \\
L \ddot{q}_{2}+\frac{q_{2}}{C}=0 & \text { if } \dot{q}>0
\end{array}
$$

Thus the introduction of the diode only serves to shift the equilibrium points for the otherwise simple harmonic orbits. For $\dot{q}>0$, the equilibrium point is $q_{2}=0$ or $q=-C V_{d}$, while for $\dot{q}<0$ it is $q=C V_{d}$. So the orbit will consist of half-ellipses in the upper and the lower parts of the $I-q$ diagram, centred at $q=-C V_{d}$ for the upper half and at $q=C V_{d}$ for the lower half. As the evolution is continuous, these half-ellipses will join up at $I=0$.
![](https://cdn.mathpix.com/cropped/171a4f99-da16-4277-8f84-ac5262b2531d-3.jpg?height=666&width=662&top_left_y=1135&top_left_x=1477)
iii) (2 points) We can see on the diagram that there is a "dead zone" between $\pm C V_{d}$ (for $I=0$ ). If a trajectory reaches any of the points in that segment, it will stay there forever. The extent of that region is $2 C V_{d}$.
iv) (2 points) Let's use the phase diagram to figure this out. Suppose the capacitor initially has the charge $q_{0} \gg C V_{d}$. Then the charge will first swing to the other way of $C V_{d}$ and will become $q_{T / 2}=C V_{d}-\left(q_{0}-\right.$ $\left.C V_{d}\right)=2 C V_{d}-q_{0}$. Then it will perform the other half-oscillation around $-C V_{d}$ and the charge at the end of that is $q_{T}=-C V_{d}+$ $\left(-C V_{d}-\left(2 C V_{d}-q_{0}\right)\right)=q_{0}-4 C V_{d}$, and therefore $\Delta q=-4 C V_{d}$.

Note that we have the right to talk about half- and full periods because the oscillations still happen at the immutable frequency $\omega=\frac{1}{\sqrt{L C}}$. Therefore the time between the two maxima is just a full period of oscillation, $T=\frac{2 \pi}{\omega}$.

Once $q(t)$ has a zero derivative inside the region bounded by $\pm C V_{d}$, it will remain at that particular value forever. For a large initial $q_{0}$, we expect there to be approximately $\left|\frac{q_{0}}{\Delta q}\right|=\frac{\left|q_{0}\right|}{4 C V_{d}}$ total oscillations.

More exactly, the distance from the "dead zone" is initially $\left|q_{0}\right|-C V_{d}$ and decreases during each half-oscillation by $2 C V_{d}$. The total number of half-oscillations is $N=\left\lfloor\frac{\left|q_{0}\right|-C V_{d}}{2 C V_{d}}\right\rfloor$ and the total time $t=N \frac{T}{2}=N \frac{\pi}{\omega}=N \pi \sqrt{L C}$.
