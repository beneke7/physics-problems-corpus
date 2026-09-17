---
id: physicscup-2021-p1
problem: physicscup-2021-p1
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Vlad-Ștefan Oros
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2021/P1/Vlad-P1-Revision-1.pdf
selection_note: "Selected as the most machine-readable + elegant of the published solutions (LaTeX-compiled, 4 pp). Kalda's comment: nice detailed explanations, and it estimates the charge-relaxation time — an important parameter of the problem."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Vlad-Ștefan Oros (Romania), transcribed faithfully from the LaTeX source. The competition published no official solution. $\mathcal{E}_{\text{ind}}$ denotes the induced EMF.*

Work in the centre-of-mass (CM) frame of the dumbbell.

**Lemma 1.** In the CM frame, an induced electric field appears,
$$ \mathbf E_0 = \mathbf v_0 \times \mathbf B, \tag{1} $$
where $\mathbf v_0$ is the velocity of the CM.

*Proof.* In the initial rest frame the force on a charge $q$ moving at $\mathbf v$ is $\mathbf F = q\,\mathbf v\times\mathbf B$. In a frame moving at $\mathbf v_0$, the magnetic field is unchanged (non-relativistic speeds) and so is the force, but an electric field may appear, so $\mathbf F = q(\mathbf E_0 + (\mathbf v-\mathbf v_0)\times\mathbf B)$. Equating the two forces for all $\mathbf v$ gives $\mathbf E_0 + (\mathbf v-\mathbf v_0)\times\mathbf B = \mathbf v\times\mathbf B$, i.e. $\mathbf E_0 = \mathbf v_0\times\mathbf B$. $\qquad\blacksquare$

Since $\mathbf v_0 \perp \mathbf B$ (the motion is in the plane perpendicular to $\mathbf B$), in magnitude
$$ E_0 = v_0 B. \tag{6} $$

In the CM frame the induced field can charge the balls: a component of $\mathbf E_0$ along the copper rod drives current from one ball to the other until the ball charges counteract the EMF (as in an RC circuit). The ball charges — hence potentials — are always opposite, since the total charge is zero. To check how fast equilibrium is reached, compute the wire resistance (copper resistivity $\rho \approx 0.0168\ \Omega\,\text{mm}^2\,\text{m}^{-1}$) and the two-sphere capacitance:
$$ R = \rho\frac{L}{\pi r^2} \approx 5.348\ \text{m}\Omega. \tag{7} $$
The potential difference between an uncharged sphere and the charged second sphere is
$$ V = \frac{Q}{4\pi\varepsilon_0}\left(\frac{1}{R} - \frac{1}{R+L}\right), \tag{8} $$
(approximate, as charge separation on the spheres themselves is neglected; the second denominator could equally be $1/L$ or $1/(2R+L)$). The inter-sphere potential difference is $2V$ (opposite charges), so
$$ C = \frac{Q}{2V} = 2\pi\varepsilon_0\frac{R(R+L)}{L} \approx 6.123\times10^{-12}\ \text{F}. \tag{9} $$
The time constant is
$$ \tau = RC \approx 1.809\times10^{-7}\ \text{s}, \tag{10} $$
extremely small, so all charging is essentially instantaneous: the ball charge always balances the induced EMF.

Defining $\mathbf L$ as the vector from sphere 1 to sphere 2, the EMF due to $\mathbf E_0$ is
$$ \mathcal{E}_{\text{ind}} = \int \mathbf E_0\cdot d\mathbf l = \mathbf E_0\cdot\mathbf L = E_0 L\cos\varphi, \tag{11} $$
with $\varphi$ the angle between $\mathbf L$ and $\mathbf E_0$. (EMF from the dumbbell's rotation has no net effect.) As for a capacitor,
$$ Q = C\,\mathcal{E}_{\text{ind}}. \tag{12} $$

**Forces and torques** (in the co-moving frame):
- the electric force from $\mathbf E_0$, opposite on the two oppositely-charged balls — equal magnitude, giving a torque but no net force (this force is magnetic in the rest frame);
- magnetic forces from the balls' rotation (negligible in the end);
- the magnetic force on the current-carrying rod — this drives the translation but gives no torque (acts homogeneously along the rod).

For final equilibrium the rod must have no torque and no net force, and must not rotate (rotation changes $\varphi$ in (11), driving current and a magnetic force). If the balls are stationary in the CM frame, $\mathbf L$ is constant, so $\mathcal{E}_{\text{ind}}$ can vary only through $E_0$ or $\varphi$, and by (1) $E_0$ varies only if $\mathbf v_0$ does. Hence a net force requires acceleration; but in equilibrium the acceleration is zero, so the net force vanishes automatically.

It remains to balance the torque, which here can only come from the electric forces on the balls. For zero torque, either $Q = 0$ or the force arm is zero ($E_0\neq0$, else (1) would mean the dumbbell stops):
- $Q = 0 \Rightarrow$ (via (12)) $\mathcal{E}_{\text{ind}} = 0$, i.e. $\varphi = \pi/2$; by (1) $\mathbf v_0 \parallel \mathbf L$ — the initial situation, **unstable** equilibrium.
- electric force along the rod $\Rightarrow \varphi = 0$; by (1) $\mathbf v_0 \perp \mathbf L$ — the **stable** equilibrium.

So we seek the state where the final speed is perpendicular to the final rod orientation, where
$$ \mathcal{E}_{\text{ind}} = E_0 L. \tag{13} $$

Now switch to the rest frame of the field.

**Lemma 2.** While moving through a homogeneous $\mathbf B$, the generalized momentum of a charge $q$,
$$ \mathbf P = m\mathbf v + q\,\mathbf B\times\mathbf r, \tag{14} $$
is conserved.

*Proof.* Newton: $m\,d\mathbf v/dt = q\,\mathbf v\times\mathbf B$. Using $\mathbf A\times\mathbf B = -\mathbf B\times\mathbf A$, $m\,d\mathbf v/dt + q\mathbf B\times d\mathbf r/dt = 0$, i.e. $\tfrac{d}{dt}(m\mathbf v + q\mathbf B\times\mathbf r) = 0$. $\qquad\blacksquare$

Treat the rod as two charged particles ($+Q$ and $-Q$). We must check that charge transfer between them does not change the total $\mathbf P$ (shown below). Choose axes so that initially the CM is at the origin and the $x$-axis is along the rod and its motion (the $y$-axis also lies in the plane $\perp\mathbf B$). Initially the dumbbell is uncharged, so
$$ \mathbf P = m\mathbf v = m v\,\mathbf e_x. \tag{17} $$
Finally,
$$ \mathbf P = m\mathbf u + Q\mathbf B\times\mathbf r_2 + (-Q)\mathbf B\times\mathbf r_1 = m\mathbf u + Q\mathbf B\times(\mathbf r_2-\mathbf r_1), $$
and with $\mathbf r_2 - \mathbf r_1 = \mathbf L$,
$$ \mathbf P = m\mathbf u + Q\,\mathbf B\times\mathbf L. \tag{19} $$
If $Q$ changes by $\Delta Q$, the second term changes by $\Delta Q\,\mathbf B\times\mathbf L$. But the net impulse on the rod is the magnetic force impulse,
$$ \Delta(m\mathbf v) = (I\mathbf L\times\mathbf B)\Delta t = \Delta Q\,\mathbf L\times\mathbf B, \tag{20} $$
which is exactly the opposite, so the two cancel: $\mathbf P$ is conserved for the whole dumbbell.

Equating initial and final $\mathbf P$,
$$ m\mathbf v = m\mathbf u + Q\,\mathbf B\times\mathbf L. \tag{21} $$
We require $\mathbf u \perp$ rod at the final time; $\mathbf B\times\mathbf L$ is also $\perp$ rod, so both right-hand terms are parallel, hence parallel to $\mathbf v$; since $\mathbf v$ is along $x$, $\mathbf u$ is along $x$ too. Then (21) is scalar, and the second term (using $B\perp L$ and (6),(12),(13)) is
$$ |Q\mathbf B\times\mathbf L| = (C\mathcal{E}_{\text{ind}})BL = C(E_0 L)BL = C(uB)BL^2 = uC(BL)^2, \tag{22} $$
so
$$ m(v-u) = uC(BL)^2 \;\Rightarrow\; u = v\,\frac{m}{C(BL)^2 + m}. \tag{23} $$
Substituting $C$,
$$ \boxed{\;u = v\,\frac{mL}{2\pi\varepsilon_0 R(R+L)(BL)^2 + mL}\;} \approx 6.09\times10^{-3}\ \text{m s}^{-1}. \tag{24,25} $$

**Remark 1.** Here $L$ is the centre-to-centre distance. If instead $L$ is the rod length (closest surface points), the centre distance is $L+2R$, giving
$$ u = v\,\frac{mL}{2\pi\varepsilon_0 R(R+L)\big(B(L+2R)\big)^2 + mL} \approx 4.24\times10^{-3}\ \text{m s}^{-1}. $$
Ball polarization (charge separation due to $\mathbf E_0$) is neglected.

**Remark 2.** The author did not track all cross-product signs but validates the $+$ sign: if it were $-$, the coefficient of $u$ would nearly vanish, forcing an unphysically large $u$ (violating energy conservation); hence the sign is $+$.

---
*Re-derivation check (consistent): from $C = 2\pi\varepsilon_0 R(R+L)/L$, $C(BL)^2 = 2\pi\varepsilon_0 R(R+L)B^2 L$, so $u = vm/(C(BL)^2+m) = vmL/\big(2\pi\varepsilon_0 R(R+L)(BL)^2 + mL\big)$, matching eq. (24).*
