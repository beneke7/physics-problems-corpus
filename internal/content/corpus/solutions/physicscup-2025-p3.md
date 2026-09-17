---
id: physicscup-2025-p3
problem: physicscup-2025-p3
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Alexandru Bordei
solution_source_url: https://physicscup.ee/wp-content/uploads/2025/P3-sols/bordei.pdf
selection_note: "Top-ranked LaTeX-compiled candidate (4 pp), distinguished in Kalda's note by its pedagogical structure and detailed explanations, making it particularly clear and instructive. Self-contained kinetic-theory derivation with explicit integrals; no load-bearing figures."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Alexandru Bordei, transcribed faithfully from the LaTeX source. The competition published no official solution. Notation: $v$ denotes the **single-axis** (vertical) molecular speed component throughout the kinetic calculation, $T_n$ the temperature at the start of the $n$-th oscillation, $A$ the cross-section, $N$ the molecule number. One author typo is preserved verbatim and flagged in the re-derivation note (eq. (16), first line, drops a square root present in the surrounding prose).*

### 1. Qualitative description

**1.1 Change of internal energy.** The piston's oscillation makes the gas molecules that collide with it change their kinetic energy. The process is divided into two half-periods. The relation $\lambda \gg \frac{H^2}{vt}$ can be transformed into
$$ \frac{d}{H} \gg \frac{H}{\lambda}, \tag{1} $$
where $d = vt$ is the total distance done by a molecule (assuming average kinetic energy). This says that the order of the number of vertical travels (left) is much higher than the order of the number of collisions per travel (right).

From this we understand that the molecules mix up quickly within the cylinder, so we can add the obtained kinetic energy of one molecule, $\Delta E$, to the internal energy of the gas $U(T)$, thus changing the temperature of the whole gas, along with the velocities of the molecules:
$$ dU = N_{\text{collided}}\,\Delta E. \tag{2} $$

**1.2 Speed of the molecules.** Here $v$ signifies the speed of one molecule on the vertical axis of the cylinder, pointing upwards. To analyze the molecules hitting the wall, we use the Maxwell–Boltzmann distribution, i.e. the probability of one molecule having a velocity between $v$ and $v + dv$ on one axis:
$$ f(v)\,dv = \sqrt{\frac{m}{2\pi k_B T}}\; e^{\frac{-mv^2}{2k_B T}}\, dv. \tag{3} $$
Later, using this, we integrate over all possible velocities.

### 2. Quantitative solution

Constants: $A$ — cross-section of cylinder and piston; $N$ — total number of molecules; $m$ — mass of one molecule; $T_n$ — temperature of the gas at the start of one oscillation.

#### 2.1 First half-period (piston moves up with speed $u$)

**2.1.1 Change of kinetic energy.** The speed of a molecule that hits the piston becomes $v - 2u$, for every molecule with velocity $v > u$:
$$ \Delta E = \frac{m}{2}\big((v - 2u)^2 - v^2\big) = 2mu(u - v). \tag{4} $$

**2.1.2 Number of molecules that collide.** Molecules travelling towards the piston in time $dt$ sweep out a volume $A(v - u)\,dt$ in the piston's frame. The number colliding in time $dt$, with velocity between $v$ and $v + dv$, is
$$ dN_{\text{collided}}(v) = A(v - u)\,dt \cdot \frac{N}{V}\, f(v)\,dv. \tag{5} $$

**2.1.3 Differential equation for $T$.** From (4), (5) and $dU = \tfrac32 N k_B\, dT$:
$$ \frac32 N k_B\, dT = 2mu(u - v)\cdot \frac{N}{V}\,A(v - u)\,dt\, f(v)\,dv. \tag{6} $$
Accounting for every speed from $u$ to $\infty$, and with $V = Ah$,
$$ 3N k_B\, dT = -4mu\,\frac{dt}{h}\int_u^{\infty} (v - u)^2 f(v)\,dv. \tag{7} $$

#### 2.2 Second half-period (piston moves down with speed $u$)

The speed of a molecule that hits the piston becomes $v + 2u$, for every molecule with velocity $v > -u$:
$$ \Delta E = \frac{m}{2}\big((v + 2u)^2 - v^2\big) = 2mu(v + u), \tag{8} $$
$$ dN_{\text{collided}}(v) = A(v + u)\,dt \cdot \frac{N}{V}\, f(v)\,dv, \tag{9} $$
$$ 3N k_B\, dT = 4mu\,\frac{dt}{h}\int_{-u}^{\infty} (v + u)^2 f(v)\,dv. \tag{10} $$

#### 2.3 Solution to the integrals

Both differential equations contain similar integrals to be expressed as functions of $T$:
$$ \int_u^{\infty} (v - u)^2 f(v)\,dv = \sqrt{\frac{m}{2\pi k_B T}}\int_u^{\infty} (v - u)^2 e^{\frac{-mv^2}{2k_B T}}\,dv, $$
$$ \int_{-u}^{\infty} (v + u)^2 f(v)\,dv = \sqrt{\frac{m}{2\pi k_B T}}\int_{-u}^{\infty} (v + u)^2 e^{\frac{-mv^2}{2k_B T}}\,dv. \tag{11} $$

**2.3.1 Approximating the integrals.** Expanding $(v \pm u)^2 = v^2 + u^2 \pm 2uv$ gives a sum of three integrals of the form
$$ \int x^2 e^{-ax^2}\,dx;\qquad \int x e^{-ax^2}\,dx;\qquad \int e^{-ax^2}\,dx. $$
We change the lower bounds from $u$ and $-u$ to $0$, ignoring molecules with velocity in $(0, u)$ and $(-u, 0)$. This is allowed because $v \gg u$.

**2.3.2 Solving through Feynman's trick.** The solution of these integrals is therefore
$$ \sqrt{\frac{m}{2\pi k_B T}}\int_{-u}^{\infty} (v \pm u)^2 e^{\frac{-mv^2}{2k_B T}}\,dv = \frac{k_B T}{2m} \pm 2u\sqrt{\frac{k_B T}{2\pi m}} + \frac{u^2}{2} \approx \alpha T \pm \beta\sqrt{T}. \tag{12} $$
Because $v \gg u$ and the order of the first two terms is $v^2$ and $v$, we ignore the third term $u^2/2$. Here
$$ \alpha = \frac{k_B}{2m}, \qquad \beta = 2u\sqrt{\frac{k_B}{2\pi m}}. $$

#### 2.4 Final differential equations

Plugging (12) into (7) and (10):
$$ \int_{T_n}^{T'} \frac{3k_B\, dT}{\alpha T - \beta\sqrt{T}} = -4mu \int_0^{\frac{a}{u}} \frac{dt}{H + ut}, $$
$$ \int_{T'}^{T_{n+1}} \frac{3k_B\, dT}{\alpha T + \beta\sqrt{T}} = 4mu \int_0^{\frac{a}{u}} \frac{dt}{H + ut}. \tag{13} $$
From which we solve for $T_{n+1}(T_n)$, where $c = \left(\frac{H+a}{H}\right)^{-1/3}$:
$$ \sqrt{T'} = \frac{\alpha c\sqrt{T_n} + \beta(1 - c)}{\alpha}, $$
$$ \alpha c\sqrt{T_{n+1}} + \beta c = \alpha\sqrt{T'} + \beta, $$
$$ \alpha c\sqrt{T_{n+1}} = \alpha c\sqrt{T_n} + 2\beta(1 - c), $$
$$ \frac{1}{c} = \left(\frac{H + a}{H}\right)^{\frac13} \approx 1 + \frac{a}{3H}, $$
$$ \sqrt{T_{n+1}} = \sqrt{T_n} + \frac{2\beta a}{3\alpha H}. \tag{14} $$
Therefore, after $n$ oscillations,
$$ \sqrt{T} = \sqrt{T_0} + \frac{2\beta a n}{3\alpha H}. \tag{15} $$
Since $v \propto \sqrt{T}$, it doubles when $\sqrt{T} = 2\sqrt{T_0}$, with $\sqrt{T_0} = v\sqrt{\frac{m}{3k_B}}$:
$$ v\frac{m}{3k_B} = \frac{2\beta a n}{3\alpha H}, $$
$$ n = \frac{\sqrt{6\pi}\,vH}{8au}, $$
$$ t = \frac{2a}{u}\,n = \frac{\sqrt{6\pi}\,vH}{4u^2}, $$
$$ \boxed{\; t \approx 1.085\,\frac{vH}{u^2}. \;} \tag{16} $$

---
*Re-derivation check (consistent): with $\alpha = k_B/2m$, $\beta = 2u\sqrt{k_B/2\pi m}$, the per-oscillation step (14) gives $\Delta\sqrt{T} = \frac{2\beta a}{3\alpha H}$. Doubling requires $\frac{2\beta a n}{3\alpha H} = \sqrt{T_0} = v\sqrt{m/3k_B}$. Using $\sqrt{(m/3k_B)/(k_B/2\pi m)} = (m/k_B)\sqrt{2\pi/3}$, one gets $n = v\sqrt{m/3k_B}\cdot\frac{3\alpha H}{2\beta a} = \frac{\sqrt{6\pi}}{8}\frac{vH}{au}$, hence $t = \frac{2a}{u}n = \frac{\sqrt{6\pi}}{4}\frac{vH}{u^2} \approx 1.085\,\frac{vH}{u^2}$ — exactly the author's boxed coefficient ($\sqrt{6\pi}/4 = 1.0854$). NOTE: the author's eq. (16) first line is written $v\frac{m}{3k_B} = \dots$ without the square root, contradicting the prose statement $\sqrt{T_0} = v\sqrt{m/3k_B}$ just above and his own boxed answer; it is a transcription/typo and the correct $\sqrt{T_0} = v\sqrt{m/3k_B}$ is what reproduces the result. The kinetic-theory setup (the $\alpha T \pm \beta\sqrt T$ closure and the geometric $H \to H+a$ volume factor) is the author's.*
