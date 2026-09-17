---
id: solution-document-nbpho-2013-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2013_S.pdf
extraction_method: cached-mmd
mapped_problems: [nbpho-2013-burning-with-a-lens, nbpho-2013-cellphone-camera, nbpho-2013-friction-of-a-string, nbpho-2013-glass-cylinder, nbpho-2013-magnetic-dipoles, nbpho-2013-mission-to-mars, nbpho-2013-prism, nbpho-2013-resistive-heating, nbpho-2013-sphere-and-cylinder, nbpho-2013-zener-diode]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2013_S.pdf."
---

## Estonian-Finnish Olympiad 2013 Solutions

## 1. PRISM (8 points)

i) (4 points) The prism is acted on by three forces: reaction force $\vec{R}_{l}$ from the left-hand table, directed perpendicularly to the prism's face; reaction force $\vec{R}_{r}$ from the right-hand table, directed horizontally (with its point of action to be determined yet); and gravitational force $m g$, directed vertically and applied at the triangle's centre. (Considering a planar triangular cross-section of the prism is enough.)

On the verge of falling out, the force $\vec{R}_{r}$ is applied at the lower corner of the triangle. If a body in equilibrium is acted on by three forces, then their lines of action must intersect at one point. This is because otherwise the torque of one of those forces would not be zero with respect to the intersection of the lines of action of the two other forces.

As the distance between the triangle's centre and its side is $\frac{\sqrt{3}}{6} a$, the distance between the points of action of $\vec{R}_{l}$ and $\vec{R}_{r}$ is $\frac{\sqrt{3}}{6} a \cos 30^{\circ}=\frac{1}{4} a$. Thus, $d=\frac{1}{4} a \cos 30^{\circ}=\frac{\sqrt{3}}{8} a$.
![](https://cdn.mathpix.com/cropped/171a4f99-da16-4277-8f84-ac5262b2531d-1.jpg?height=640&width=633&top_left_y=1261&top_left_x=94)
ii) (4 points) Let the corners be denoted by $A$ and $B$, and the tip of the prism (at its equilibrium position) by $C$. Let us consider a small rotation of the prism (assuming it remains in contact with the corners). The trajectory of the tip is a circle ascribed around the triangle $A B C$ (it follows from the property of the inscribed angles because the $\angle A C B$ remains equal to 60°). The radius of that circle $r=l / \sqrt{3}$; its centre will be denoted by $O$. Once the prism rotates by angle $\alpha$, so that the new position of the tip will be $D$, the central angle $\angle C O D=2 \alpha$. Hence, the tip is raised by $r-r \cos (2 \alpha) \approx 2 r \alpha^{2}$. The height of the centre of mass $P$ of the prism is raised because the tip is raised, and lowered because the vertical projection of the segment $C P$ is reduced by $|C P|(1-\cos \alpha) \approx|C P| \alpha^{2} / 2$. Here, $|C P|=a / \sqrt{3}$. So, the original position is stable if $\frac{a}{\sqrt{3}} \alpha^{2} / 2<2 \frac{l}{\sqrt{3}} \alpha^{2}$, hence $l>\frac{1}{4} a$.
![](https://cdn.mathpix.com/cropped/171a4f99-da16-4277-8f84-ac5262b2531d-1.jpg?height=596&width=662&top_left_y=953&top_left_x=786)
2. CELLPHONE CAMERA (6 points) The distance $L$ is often called hyperfocal distance in photography and it was calculated more than one hundred years ago by Louis Derr (the figure is taken from his book Photography for students of physics and chemistry, published in 1906).

![](https://cdn.mathpix.com/cropped/171a4f99-da16-4277-8f84-ac5262b2531d-1.jpg?height=233&width=608&top_left_y=110&top_left_x=1503)
Fig. 49. Hyperfocal Distance.

Let's consider that the camera is focused to distance $L$ and the image is formed exactly on the sensor's plane. The object's distance $L$ and its image's distance $a$ (corresponds to $p^{\prime}$ on the figure) are related by the lens formula $\frac{1}{L}+\frac{1}{a}=\frac{1}{f}$, thus

$$
a=\frac{L f}{L-f}=\frac{L f}{L(1-f / L)} \approx \frac{L f}{L}\left(1+\frac{f}{L}\right)=f+\frac{f^{2}}{L},
$$

where the approximation $(1+x)^{-1} \approx 1-x$ (for small $x$ ) was used. Image's distance exceeds the focal length by $\Delta a=a-f=f^{2} / L$.
i) (4 points) The light coming from an infinitely far away object will pass the focal point F and form a cone which is cut by the sensor's plane. The diameter $d$ of the cut on the sensor's plane can be found from similar triangles $d / D=\Delta a / f$, thus $d=D f / L$. Taking into account the sharpness condition $d \leq \eta$, where $\eta=w / N$ is the size of a single element of the sensor, we find that the limiting value of $L$ is $L=D f / \eta=D f N / w \approx 5.5 \mathrm{~m}$.
ii) (2 points) We'll now find the shortest distance $s$ satisfying the sharpness condition. Object at distance $s$ will have an image at distance $b=f+f^{2} / s$ and the light passing the lens will converge behind the sensor's plane forming a cone. The diameter $d_{2}$ of the cone's cut with the sensor's plane can be calculated from similar triangles: $d_{2} / D=(b-a) / b$. Accounting for sharpness condition $d_{2}=\eta$, we can express $b=a /(1-\eta / D)$, and substituting the values of $a$ and $b$ gives

$$
\begin{aligned}
f+\frac{f^{2}}{s} & =\frac{f+\frac{f^{2}}{L}}{1-\eta / D}=f \frac{1+\eta / D}{1-\eta / D} \approx f\left(1+\frac{\eta}{D}\right)^{2} \\
& \approx f\left(1+\frac{2 \eta}{D}\right)
\end{aligned}
$$

Finally, $f^{2} / s=2 f \eta / D$, or $s=\frac{1}{2} D f / \eta=L / 2 \approx$ 2.75 m.

## 3. MISSION TO MARS (7 points)

i) (1 point) We can find the orbital period of Mars from Kepler's third law $R_{a}{ }^{3} / R_{g}{ }^{3}=$ $T_{a}{ }^{2} / T_{g}{ }^{2}$, giving $t_{t} \approx 1.87 \mathrm{yr}$.
ii) (1.5 points) Again, we can use Kepler's third law to calculate half of the orbital period.

$$
t_{t}=\frac{T_{g}}{2} \frac{\left(R_{a}+R_{g}\right)^{3 / 2}}{\left(2 R_{g}\right)^{3 / 2}} \approx 0.707 \mathrm{yr} .
$$

iii) (1.5 points) Background. $\Delta v$ is important, because the sum of all $\Delta v$ determines how much fuel is needed for a given mission. The fuel needed is exponential of total $\Delta v$ and is described by Tsiolkovsky rocket equation.

Kinetic energy per unit mass of such a transfer orbit where it intersects the Earth's orbit is $-\frac{G M_{s}}{R_{g}+R_{a}}+\frac{G M_{s}}{R_{g}}$. Using the orbital angular speed of Earth we can substitute $G M_{s}=\frac{4 \pi^{2} R_{g}^{3}}{T_{g}}$. The speed at the beginning of the transfer orbit becomes

$$
v_{t_{0}}=\sqrt{2 G M_{s}\left(\frac{1}{R_{g}}-\frac{1}{R_{g}+R_{a}}\right)} \approx 32.7 \mathrm{~km} / \mathrm{s}
$$

The speed in Earth's inertial frame is $v_{t_{0}}^{\prime}=v_{t_{0}}-v_{g} \approx 2.94 \mathrm{~km} / \mathrm{h}$. To achive that, we first need to escape Earth's gravity, so

$$
\Delta v_{1}=\sqrt{2\left(\frac{v_{t_{0}}^{\prime 2}}{2}+\frac{G M_{g}}{r_{g}}\right)} .
$$

Using the surface gravity of Earth we can substitute $\frac{G M_{g}}{r_{g}}=g_{g} r_{g}$ so $\Delta v_{1} \approx 11.2 \mathrm{~km} / \mathrm{s}$.
iv) (1.5 points) We can calculate the speed of the transfer orbit where it intersects the orbit of Mars from Kepler's second law $v_{t_{1}}=$ $v_{t_{0}} / 1.52 \approx 21.5 \mathrm{~km} / \mathrm{s}$. The speed of the spacecraft relative to Mars is $v_{t_{1}}^{\prime} \approx 3.25 \mathrm{~km} / \mathrm{s}$. The speed of the spacecraft once near Mars surface is

$$
v_{t_{m}}=\sqrt{2\left(\frac{v_{t_{1}}^{\prime}}{2}+r_{a} g_{a}\right)} \approx 5.98 \mathrm{~km} / \mathrm{s}
$$

Since the speed of low Mars orbit is $v_{e_{a}}=$ $\sqrt{r_{a} g_{a}} \approx 3.55 \mathrm{~km} / \mathrm{s}$, we need to brake for $\Delta v_{2} \approx 2.43 \mathrm{~km} / \mathrm{s}$.
v) (1.5 points) The Earth-Sun-Mars angle $\alpha$ at the launch of the mission needs to be $\alpha=\pi-w_{a} t_{t} \approx 0.77$ for the spacecraft to reach Mars. Likewise for the return trip $\beta=\pi-w_{g} t_{t} \approx-1.301$. If we go to the corotating frame of referense with earth, we can see that the minimal time between those two angles is $\frac{2 \pi-\alpha+\beta}{w_{a}-w_{g}} \approx 1.96 \mathrm{yr}$. The minimal duration of the trip is therefore longer by $t_{t}$, giving 2.67 yr.

## 4. MAGNETIC DIPOLES (7 points)

i) (3 points) There is no torque on the square if $\theta=0$ or $\theta=\pi$, so one of them is stable and the other unstable. If we start from $\theta=0$ and turn the square to some $\theta$, but keep two sides of the square perpendicular to $\vec{B}$, Lorentz forces on these two sides give a torque $\tau=-B I a \cdot a \sin \theta=-B m \sin \theta$ towards decreasing $\theta$. By symmetry, we get the same result if we keep the other keep two sides of the square perpendicular to $\vec{B}$. It is possible to conclude that the torque depends only on $\theta$ (at least near $\theta=0$ ), not on the exact orientation of the square. Since torque acts to restore $\theta=0$, we find that $\theta_{s}=0$ and $\theta_{u}=\pi$. To find the work to get from $\theta_{s}$ to $\theta_{u}$, we can again keep two sides perpendicular to $\vec{B}$ - the answer cannot depend on the path, so we choose the simplest one. Integrating $\tau=B m \sin \theta$ from $\theta=0$ to $\pi$ gives us $w=2 B m$.
ii) (4 points) Let us denote the number of electrons (per unit volume) with magnetic moment projection $+\mu_{B}$ as $n_{+}$and the ones with $-\mu_{B}$ as $n_{-}$. Their sum is always the same, $n_{+}+n_{-}=n$. Also, in thermal equilibrium, their ratio is given by $\frac{n_{-}}{n_{+}}=$ $\exp \left(-\frac{2 \mu_{B} B}{k_{B} T}\right)$, where $k_{B}$ is Boltzmann's constant. Solving the equations, we can find $n_{+}$and $n_{-}$. The total magnetic moment per unit volume (in the direction of $\vec{B}$ ) is given by $M=\mu_{B}\left(n_{+}-n_{-}\right)$. After substituting,

$$
M=\mu_{B} N \frac{1-\exp \left(\frac{2 \mu_{B} B}{k_{B} T}\right)}{1+\exp \left(\frac{2 \mu_{B} B}{k_{B} T}\right)}=\mu_{B} n \tanh \left(\frac{\mu_{B} B}{k_{B} T}\right) .
$$

Additional comments. We see $B$ and $M$ always have the same sign, therefore $\vec{M}$ is parallel with $\vec{B}$. This makes sense, as we saw that $\theta=0$ ( $\vec{m}$ parallel to $\vec{B}$ ) orientation had lowest energy. The graph of $M$ vs $B$ goes to $\mu_{B} n$ for very large $B$ or to $-\mu_{B} n$ for very small $B$ (all spins aligned with $\vec{B}$ ). At $B=0$, $M=0$ as well, since both spin orientations have the same energy. Around zero, the curve is linear, as $\tanh x \approx x$ for small $x$ gives us $M \approx \frac{\mu_{B}^{2} n B}{k_{B} T}$.

## 5. FRICTION OF A STRING (8 points)

Let's first calculate the difference of tension force $T$ between two ends of a sliding string arced over a cylinder by an angle $\alpha$. Furthermore, let's look at a short piece of the arc that subtends an angle $d \alpha$. On one hand, $d T=\mu d R$ is the friction force acting on the piece, where $d R$ is the reaction force. On the other hand, $d R \approx T d \alpha$, because both ends of the piece are pulled by a force with a radial component of $T \frac{d \alpha}{2}$ (where $\alpha$ is measured in radians). Therefore, we get a differential equation: $d T=\mu T d \alpha$ or $d \ln T=\mu d \alpha$, whence $T=T_{0} e^{\mu \alpha}$.

As a solution to the problem, we can measure the change of the tension force for different angles $\alpha$ (for example, $\frac{\pi}{2}, \pi, \frac{3 \pi}{2}, 2 \pi, \frac{5 \pi}{2}$ etc. for several turns; however, keeping the strings vertical offers better precision) and plot $\ln T$ with respect to $\alpha$. The slope of the graph is the $\mu$ to be measured.

Extra solution (not as exact). Those who cannot derive the necessary formula can still do the experiment by doing the same measurements and noting from the plot that the relationship between $\alpha$ and $T$ looks exponential. Thus, we can make an ansatz that $T=T_{0} X^{\mu \alpha}$ : as $\alpha=0$ must correspond to $T=T_{0}$, we cannot reasonably write the $\mu$ anywhere else without over-complicating the formula. Now, we can re-measure the given pencil (it may be reasonably enough approximated with a cylinder here; more exact approaches exist) and conclude that $X \approx 2.7$. From there on, the calculation is the same.

## 6. SPHERE AND CYLINDER (7 points)

i) (2 points) Since no energy is lost due to friction on sliding, the change in potential energy $\Delta E_{p}=m g H$ is transformed to kinetic energy consisting of both translational and rotational motion. Taking into account the rolling condition $v=\omega r$, we have

$$
\begin{aligned}
\Delta E_{p} & =E_{k}=\frac{1}{2} m v^{2}+\frac{1}{2} I \omega^{2} \\
& =\frac{1}{2} m v^{2}+\frac{1}{2} k m v^{2}=\frac{1}{2}(1+k) m v^{2},
\end{aligned}
$$

where general expression $I=k m r^{2}$ for moment of inertia is used. Therefore, $v^{2}=$ $2 g H /(1+k)$.

On the other hand, the bodies travel distance $x=H / \sin \alpha$ along the slope with a constant acceleration $a_{\|}$directed parallel to the surface. Let's express $a_{\|}$from the equation $v^{2}=2 a_{\|} x$ :

$$
a_{\|}=g \sin \alpha /(1+k) .
$$

The times are now easy to calculate as $t=$ $v / a_{\|}$, giving

$$
t=\sqrt{1+k}\left(\frac{2 H}{g \sin ^{2} \alpha}\right)^{\frac{1}{2}} .
$$

Replacing $k_{s}=\frac{2}{5}$ for sphere and $k_{c}=\frac{1}{2}$ for cylinder, we find that the sphere is faster by a relative factor

$$
\gamma=\sqrt{\frac{1+k_{c}}{1+k_{s}}}-1=\sqrt{\frac{15}{14}}-1 \approx 0.035 .
$$

ii) (2.5 points) As found in previous subpart, the acceleration's parallel component to the slope $a_{\|}$is smaller than the contribution by gravity $g \sin \alpha$. The difference is contributed by the friction force $F_{f}=m g \sin \alpha-m a \|_{\text {. }}$. Sliding starts, if the necessary friction reaches the maximal value $F_{\text {max }}=\mu N=\mu m g \cos \alpha$. Equating the two expressions gives

$$
\begin{gathered}
m g \sin \alpha-m g \sin \alpha /(1+k)=\mu m g \cos \alpha, \\
\tan \alpha=\mu \frac{1+k}{k} .
\end{gathered}
$$

For the cylinder the limiting angle is $\alpha_{0}=$ $\arctan (3 \mu)$.
iii) (2.5 points) When the maximal friction force is reached, the motion goes into rolling and sliding mode, where the total force component along the surface is given by the difference of gravity and friction:

$$
F_{\|}=m g \sin \alpha-F_{\max }=m g \sin \alpha-\mu m g \cos \alpha .
$$

We note that the acceleration in this mode does not depend on the moment of inertia any more.

Calculating the limiting angle of slipping mode also for the sphere $\alpha_{\text {sph }}=\arctan \left(\frac{7}{2} \mu\right)>$
$\alpha_{0}$ shows that for all angles larger than $\alpha_{m}=\alpha_{\text {sph }}$ both bodies are in the slipping mode and thus have equal accelerations and arrival times.
7. BURNING WITH A LENS (7 points) The solar energy flux which is focused by the lens to the image of the Sun can be calculated as $P=\frac{\pi}{4} d^{2} I$; the image of the Sun radiates according to the Stefan-Boltzmann law with the total power $P=\frac{\pi}{4}(\alpha f)^{2} \sigma T^{4}$. From the heat balance we obtain $\frac{\pi}{4} d^{2} I=\frac{\pi}{4}(\alpha f)^{2} \sigma T^{4}$, hence

$$
T=\sqrt{\frac{d}{\alpha f} \sqrt{\frac{I}{\sigma}}} \approx 4500 \mathrm{~K} .
$$

Due to the second law of thermodynamics, it is impossible to direct heat energy from a lower temperature body to a higher temperature body. Hence, the image temperature cannot exceed the temperature of the Sun. Now we can use the known temperature of Sun $T_{0}=6000 \mathrm{~K}$, but it is better to use the Stefan-Boltzmann law for solar radiation flux density: near the Sun's surface, $I_{0}=\sigma T_{0}^{4}$, with the total flux of $P_{t}=4 \pi R_{s}^{2} I_{0}$. Near the Earth, the total flux $P_{t}=4 \pi L^{2} I$; here, $R_{s}$ is the Sun's radius, and $L$ - the orbital radius of the Earth. From here we obtain $I=I_{0} R_{s}^{2} / L^{2}=\sigma T_{0}^{4} R_{s}^{2} / L^{2}$; using the previous result,

$$
T=T_{0} \sqrt{\frac{d}{\alpha f} \frac{R_{s}}{L}} .
$$

Let us note that $\alpha L=2 R_{s}$, hence

$$
T=T_{0} \sqrt{\frac{d}{2 f}} \leq T_{0},
$$

which means that $d \leq 2 f$.
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
9. GLASS CYLINDER (7 points) The axis of the half-cylinder is where the stripe and its image coincide (form a straight line). The front edge of the half-cylinder is at the $28{ }^{\text {th }}$ line, counting from the axis, hence the radius of the cylinder $R \approx 28$. Let us consider the refracting ray $s$ which is very close to a total internal reflection. One can see the images of 20 lines (ca 20.2, to be more precise), when counting from the central line upwards; the upper edge of the half-cylinder coincides with
the $42^{\text {nd }}$ line at the background.
So, the ray $s$ arrives at the camera at the angle $\alpha=\arcsin (28 / 42) \approx 41.8^{\circ}$ with respect to the plane of the paper. The projection of the refraction point to the paper surface lies at the distance $a=28 \sin \alpha=$ $28^{2} / 42 \approx 18.7$ lines from the axis. Therefore, before refraction, ray $s$ forms an angle $\beta=\arcsin [(20.2-18.7) /(28 \cos \alpha)] \approx 4.1^{\circ}$ with the perpendicular of the paper surface. The incidence angle of the ray $s$ is $\alpha+\beta \approx 45.9^{\circ}$, hence $n=1 / \sin (\alpha+\beta) \approx 1.39$.
10. RESISTIVE HEATING (8 points) After noting the temperature of the calorimeter, connect the batteries, resistor (in the calorimeter) and ammeter in series. Choose a convenient time interval $\Delta t$ and note the ammeter reading until batteries are depleted. Measure the temperature at the end, after waiting a bit or stirring the calorimeter. We want to get maximum temperature difference for precise measurement. Since $P=R I^{2}$,

$$
\begin{gathered}
\frac{Q}{R} \approx \sum_{n} \Delta t\left(I_{n} / 2+I_{n+1} / 2\right)^{2} \\
R=\frac{\left(c_{a} m_{a}+c_{w} m_{w}\right) \Delta T}{\sum_{n} \Delta t\left(I_{n} / 2+I_{n+1} / 2\right)^{2}}
\end{gathered}
$$

The resistance used was $R=0.47 \Omega \pm 5 \%$. In the described circuit the batteries were depleted in 10 to 15 minutes and the temperature of the calorimeter rose by 7 to 10 degrees.
