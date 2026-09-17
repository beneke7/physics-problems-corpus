---
id: eupho-2024-T3
problem: eupho-2024-T3
source: eupho
language: en
solution_language: en
solution_type: official
solution_author: European Physics Olympiad
solution_source_url: https://phoxiv.org/olympiads/eupho/2024
verification_status: unverified
figure_files: []
---
## Solution

Throughout, we use a Cartesian coordinate system aligned so that the $x$ axis points along the normal to the mirrors. Let one mirror be positioned at $x = 0$ and the other at $x = L$, and suppose the beam approaches the interferometer from the negative-$x$ direction. Let regions I, II and III be defined by $x < 0$, $0 < x < L$ and $x > L$ respectively. The mirrors are assumed thin for convenience here, but this does not change the answers.

### Solution 1

**Part a.** Where the laser beam meets the first mirror, some light is reflected back towards the laser and the rest is transmitted into the space between the mirrors (region II). The transmitted light bounces back and forth between the mirrors; with every reflection, some light is transmitted and leaves the interferometer. Each region contains a superposition of infinitely many waves, but a superposition of any number of sinusoidal waves with the same frequency, wavelength and propagation direction can be represented by a single sinusoidal wave with those same properties. Therefore the electric field in the three regions takes the form

$$
\begin{aligned}
\text{Region I:} \quad & E(x,t) = A\,e^{i(kx - \omega t)},\\
\text{Region II:} \quad & E(x,t) = B\,e^{i(kx - \omega t)} + C\,e^{i(-kx - \omega t)},\\
\text{Region III:} \quad & E(x,t) = D\,e^{i(kx - \omega t)}.
\end{aligned}
$$

The condition that there is no back-reflected beam means there is no oppositely-propagating wave in region I.

Introduce an amplitude reflection coefficient $r$ and transmission coefficient $t$ for the mirrors (which may be complex). The ratio between the complex amplitude of the reflected wave and the incident wave is $r$; the ratio for the transmitted wave is $t$. We are interested in $\phi$, the relative phase between $r$ and $t$.

At the first mirror, the forward-propagating wave in region II is the transmitted part of the incident wave in region I plus the reflected part of the backwards-propagating wave in region II:

$$B = tA + rC. \tag{12}$$

For the backwards-propagating wave in region I to vanish:

$$0 = rA + tC. \tag{13}$$

Applying the same reasoning at the second mirror, using amplitudes evaluated at $x = L$:

$$D\,e^{ikL} = tB\,e^{ikL}, \tag{14}$$
$$C\,e^{-ikL} = rB\,e^{ikL}. \tag{15}$$

With $r$, $t$ and $A$ given, equations (12)–(15) contain four unknowns: $B$, $C$, $D$ and $k$. We find

$$e^{-2ikL} = r^2 - t^2. \tag{16}$$

This relation tells us the argument of the complex number $r^2 - t^2$ must be $-2kL$. It also constrains the magnitude:

$$|r^2 - t^2| = 1. \tag{17}$$

This is a condition $r$ and $t$ must satisfy for the setup (no back-reflected light) to be realizable.

With lossless mirrors there is an additional constraint. When a wave passes through one of these mirrors, the incident power must equal the sum of the reflected and transmitted powers. Since every wave has the same speed, power is proportional to the modulus squared of the complex amplitude. Therefore conservation of energy requires

$$|r|^2 + |t|^2 = 1. \tag{18}$$

Together, (17) and (18) imply that $r$ and $t$ cannot both be real; there must be some phase shift between the transmitted and reflected light. $\blacksquare$

**Part b.** Using conditions (17) and (18), the magnitude of $\phi$ is $90^\circ$.

*First method:* squaring both conditions and subtracting,

$$|r^2 - t^2|^2 = |r|^4 + |t|^4 - r^2 t^{*2} - r^{*2} t^2 = 1,$$
$$(|r|^2 + |t|^2)^2 = |r|^4 + |t|^4 + 2|r|^2|t|^2 = 1,$$
$$\implies 2|r|^2|t|^2 = r^2 t^{*2} + r^{*2} t^2.$$

This is equivalent to $(r t^* + r^* t)^2 = \dots$, i.e. $\dfrac{r}{t} + \dfrac{r^*}{t^*} = 0$. This says $r/t$ is purely imaginary, so $r$ and $t$ have arguments that differ by $\pm 90^\circ$.

*Alternatively:* let $a = r^2$ and $b = t^2$, so that (17) and (18) read $|a - b| = 1$ and $|a| + |b| = 1$. Denoting by $O$ the origin and by A, B the points $a$, $b$ in the complex plane, consider triangle OAB. The first condition implies $|\mathrm{AB}| = 1$; the second implies $|\mathrm{OA}| + |\mathrm{OB}| = 1$. Thus O, A, B are collinear with O between A and B, so $a$ and $b$ have arguments differing by $180^\circ$. Since $a$ and $b$ have twice the arguments of $r$ and $t$, $r$ and $t$ differ by $\pm 90^\circ$.

**Part c.** When the laser is rapidly switched off, after the time it takes light to travel from the laser to the first mirror, the incident wave is removed.

Since $|t| \ll |r|$, the amplitudes $|B|$ and $|C|$ are very large and the difference between them is small. Physically, the interferometer contains a large amount of electromagnetic energy in two waves of roughly equal intensity propagating in either direction, so the release is very nearly symmetrical: approximately the same amount of energy is released in each direction. So the energy in the pulse propagating towards the laser is about half the stored initial energy.

To find the stored energy, suppose the power in each wave (forward and backward) in region II is $P'$. The power transmitting through a mirror to leave the interferometer is $(1-R)P'$. Since this transmitted wave must perfectly cancel the wave reflecting off the first mirror, which has power $Rp \approx P$, we have $P' \approx P/(1-R)$. The initial stored energy is

$$U \approx \frac{2}{1-R}\frac{LP}{c}, \tag{19}$$

since the energies of the two waves travelling in either direction simply add. Therefore the energy in the pulse returning to the laser is

$$E \approx \frac{1}{1-R}\frac{LP}{c}.$$

**Part d.** The stored energy is initially given by (19). The Poynting flux out of the interferometer at the moment the incoming beam has just switched off all the way to the first mirror is roughly

$$\frac{dU}{dt} = -2P = -\frac{(1-R)c}{L}U, \tag{19'}$$

since the amplitudes of the waves propagating away in regions I and III are both roughly $|A|$. Assuming the stored energy decays exponentially, $U \propto e^{-t/T}$, the time constant is

$$T \approx \frac{1}{1-R}\frac{L}{c}.$$

Since this is an estimate, any order-unity prefactor is acceptable; the combination $L/c$ follows from dimensional analysis, and the marks are for the correct dependence on $R$.

### Solution 2 (geometric series)

**Part a.** Sum the infinite series of complex amplitudes for the light reflected once, twice, thrice, etc. With the incident amplitude $A$ at $x = 0$, the amplitude of the backwards-propagating beam (which must vanish) is

$$rA\left[1 + t^2\left(e^{2ikL} + r^2 e^{4ikL} + r^4 e^{6ikL} + \dots\right)\right].$$

The first term is light reflected immediately off the first mirror (factor $r$); the remaining terms are light that transmits in (one factor $t$), propagates and reflects $N$ times (factor $e^{2NikL}$ and $r^{2N-1}$), and transmits out (second factor $t$). Summing the geometric series,

$$rA\left(1 + \frac{t^2 e^{2ikL}}{1 - r^2 e^{2ikL}}\right) = 0,$$

which rearranges to the same condition (16). The rest proceeds as in Solution 1.

**Part b.** As in Solution 1.

**Part c.** After the incident beam has switched off all the way to the interferometer, the beam reflected immediately off the first mirror switches off; the other beams (light that bounces $N$ times) switch off slightly later. The backwards-reflected beam at $x = 0$ first becomes

$$rA\left[t^2\left(e^{2ikL} + r^2 e^{4ikL} + r^4 e^{6ikL} + \dots\right)\right] = -rA,$$

for time $\Delta t = 2L/c$. Then the wave that reflects once before leaving also switches off, after time $\Delta t$:

$$rA\left[t^2\left(r^2 e^{4ikL} + \dots\right)\right] = rA\frac{t^2 r^2 e^{4ikL}}{1 - r^2 e^{2ikL}} = rA\,r^2 e^{2ikL}$$

for the next $\Delta t$. Continuing, after time $n\Delta t$ the amplitude is $-rA\,r^{2n}e^{2nikL}$; the modulus decreases by a factor of $R$ every $\Delta t$ (each wave has reflected two more times than the previous one).

The energy in the backwards-propagating pulse is the sum of the energies during successive $\Delta t$ intervals:

$$P\Delta t\left(|r|^2 + |r|^6 + |r|^8 + \dots\right) = \frac{|r|^2}{1 - |r|^4}\frac{2LP}{c} \approx \frac{1}{1-R}\frac{LP}{c}.$$

**Part d.** Since the amplitude decays like $R^n = e^{-n\log(1/R)} = e^{-\log(1/R)\,t/\Delta t}$, the energy decays like $e^{-2\log(1/R)\,t/\Delta t}$. The time constant of this roughly-exponential energy decay is

$$T = \frac{\Delta t}{2\log(1/R)} \approx \frac{1}{1-R}\frac{L}{c}$$

for $1 - R \ll 1$.

### Solution 3 (single-mirror amplitudes, superposition)

**Parts a and b.** Consider the first mirror in isolation with a wave incident from the left of amplitude $A$. The reflected wave has amplitude $A\sqrt{R}$ with phase angle $\theta$ relative to the incident wave; the transmitted wave has amplitude $A\sqrt{1-R}$ with phase angle $\psi$. Considering also a wave incident from the right, and superposing the two scenarios, one finds that on the left the leftward waves cancel (phases differ by $\pi$), leaving a rightward wave of amplitude $A$ — exactly the interferometer condition.

Using that the mirror is lossless, the incoming energy flux equals the outgoing energy flux. With energy $\propto$ (field)$^2$,

$$I_\mathrm{in} = A^2 + A^2\frac{R}{1-R},$$
$$I_\mathrm{out} = A^2(1-R) + A^2\frac{R^2}{1-R} - 2A^2 R\cos\!\big(\pi + 2(\theta - \psi)\big).$$

Setting $I_\mathrm{in} = I_\mathrm{out}$ gives $\cos(\pi + 2(\theta - \psi)) = 0$, so $2(\theta - \psi)$ is a multiple of $\pi$ and $\theta - \psi = \pm\pi/2$. The reflected and transmitted waves are out of phase by $90^\circ$.

**Parts c, d.** As in Solutions 2 and (for c) the symmetry argument of Solution 1.

### Solution 4 (no complex numbers)

If one assumes the perpendicular electric field is continuous across each mirror (not the intended assumption, but credited since the problem says nothing about the mirror's internal workings), then $1 + r = t$. Combined with $|r|^2 + |t|^2 = 1$, if $r$ and $t$ are real these can only be satisfied by $(r,t) = (0,1)$ or $(-1,0)$. Since there is both reflected and transmitted light, $r$ and $t$ must be complex with nonzero imaginary part. By Pythagoras's theorem, the angle between $r$ and $t$ is $\pm 90^\circ$. Parts c and d proceed as in Solutions 2 and 3.

### Summary of answers

- **a)** $r$ and $t$ cannot both be real (from $|r^2 - t^2| = 1$ and $|r|^2 + |t|^2 = 1$); there must be a nonzero phase shift.
- **b)** $|\phi| = 90^\circ$.
- **c)** $E \approx \dfrac{1}{1-R}\dfrac{LP}{c}$.
- **d)** $T \approx \dfrac{1}{1-R}\dfrac{L}{c}$ (any order-unity prefactor acceptable).
