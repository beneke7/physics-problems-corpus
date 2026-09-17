---
id: physicscup-2024-p4
problem: physicscup-2024-p4
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Andrei Vila
solution_source_url: https://physicscup.ee/wp-content/uploads/2024/P4-best/h.Vila_.pdf
selection_note: "Selected as the top-ranked candidate (LaTeX-compiled, 4 pp, highest praise). Kalda's comment: awarded a bonus of 0.2 for nicely structured and well-documented solutions with concise proofs of the Runge–Lenz vector. The solution is clean and self-contained: it derives the satellite velocity from a Runge–Lenz-style integration, applies the triangle inequality + law of cosines for the maximum, and closes with the Kronecker-density argument that justifies the irrational period-ratio hypothesis."
verification_status: unverified
rederivation_check: consistent
figure_files: [physicscup-2024-p4-sol-1.png]
---

## Solution
*Student solution by Andrei Vila, transcribed faithfully from the LaTeX source. The competition published no official solution. The author titles the file "Physics Cup 2024, P2" but it is the P4 solution. Notation: the author writes the eccentricity as $\varepsilon$ (the problem statement uses $e$), and denotes the specific angular momentum by $h = L/m$ where $L$ here is the orbital angular momentum; the areal velocity (the problem's given $L_1,L_2$) equals $h/2$, so the substitution $h\to 2L$ is used in §3. The figure is the author's diagram.*

### §1 Specific angular momentum and areal velocity

Consider a satellite (of mass $m$) orbiting the Earth (of mass $M$). By Kepler's first law its trajectory is elliptical with the Earth in one focus, and as the gravitational force is central, angular momentum is conserved. Define the specific angular momentum
$$ \mathbf h = \mathbf r \times \mathbf v = \frac{L}{m}. $$
Since $\mathbf r = r\hat{\mathbf e}_r$ and $\mathbf v = \dot r\,\hat{\mathbf e}_r + r\dot\theta\,\hat{\mathbf e}_\theta$, we obtain
$$ \mathbf h = \begin{vmatrix} \hat{\mathbf e}_r & \hat{\mathbf e}_\theta & \hat{\mathbf k} \\ r & 0 & 0 \\ \dot r & r\dot\theta & 0 \end{vmatrix} = r^2\dot\theta\,\hat{\mathbf k}. $$

A related concept is the areal velocity, the rate at which a line segment connecting the satellite and the Earth's centre sweeps out area. Taking two very close points $P(t)$ and $P(t+dt)$,
$$ dA = \tfrac12\,|\mathbf r(t)\times\mathbf r(t+dt)| = \tfrac12\,|\mathbf r(t)\times(\mathbf r(t+dt)-\mathbf r(t))| = \tfrac12\,|\mathbf r(t)\times\mathbf v(t)|\,dt, $$
so
$$ \frac{dA}{dt} = \frac{|\mathbf r\times\mathbf v|}{2} = \frac{h}{2} = \frac{r^2\dot\theta}{2}. $$
As $h$ is constant, we have (more or less rigorously) deduced Kepler's second law: the areal velocity is constant and equal to half of the specific angular momentum.

### §2 The velocity of an orbiting satellite

Analyze the motion of a satellite orbiting the Earth (counterclockwise) on an elliptical trajectory of eccentricity $\varepsilon < 1$. Newton's second law gives
$$ \mathbf a = -\frac{GM}{r^2}\,\hat{\mathbf e}_r = -\frac{GM}{h}\,\dot\theta\,\hat{\mathbf e}_r = \frac{GM}{h}\,\dot{\hat{\mathbf e}}_\theta. $$
Integrating yields
$$ \mathbf v = \frac{GM}{h}\,\hat{\mathbf e}_\theta + \mathbf v_0, $$
where $\mathbf v_0$ is a constant vector of integration. Considering the velocity of the satellite at the perigee and apogee respectively, we see that both $\mathbf v$ and $\hat{\mathbf e}_\theta$ have vertical direction, so $\mathbf v_0 = v_0\hat{\mathbf j}$. Conserving the (specific) angular momentum,
$$ \mathbf h = a(1-\varepsilon)\hat{\mathbf i}\times\left(\frac{GM}{h}\hat{\mathbf j} + v_0\hat{\mathbf j}\right) = -a(1+\varepsilon)\hat{\mathbf i}\times\left(-\frac{GM}{h}\hat{\mathbf j} + v_0\hat{\mathbf j}\right) $$
$$ \iff (1-\varepsilon)\left(\frac{GM}{h} + v_0\right) = (1+\varepsilon)\left(\frac{GM}{h} - v_0\right). $$
Expanding the brackets will eventually give us $v_0 = \dfrac{GM\varepsilon}{h}$.

Therefore the velocity of the satellite is
$$ \mathbf v = \frac{GM}{h}\,\hat{\mathbf e}_\theta + \frac{GM\varepsilon}{h}\,\hat{\mathbf j}. $$

### §3 Maximum relative velocity

In our problem we are given $L_{1,2}$ and $\varepsilon_{1,2}$. Also, $\dfrac{T_1}{T_2}\in\mathbb R\setminus\mathbb Q$. We will see later why this assumption is crucial (and how the problem's conclusion should have been better rephrased).

Take $\hat{\mathbf j}_1$ and $\hat{\mathbf j}_2$ to be the two $y$-unit-vectors specific to the two elliptical trajectories. The condition on $\hat{\mathbf j}_1$ and $\hat{\mathbf j}_2$ is just $\hat{\mathbf j}_2 = \begin{pmatrix}\cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha\end{pmatrix}\hat{\mathbf j}_1$.

![The two elliptical orbits sharing the focus E (Earth). Satellite positions $S_1,S_2$ with radius vectors $\mathbf r_1(t),\mathbf r_2(t)$ and velocities $\mathbf v_1(t),\mathbf v_2(t)$; $\hat{\mathbf j}_1,\hat{\mathbf j}_2$ are the per-orbit $y$-axes, and $\alpha$ is the angle between the major axes.](../../sources/physicscup/figures/physicscup-2024-p4-sol-1.png)

Recalling that the areal velocity is $L = h/2$, i.e. $h = 2L$, the relative velocity is
$$ \mathbf v_{\mathrm{rel}} = \mathbf v_1 - \mathbf v_2 = \frac{GM}{2}\left(\frac{\hat{\mathbf e}_{\theta_1}}{L_1} - \frac{\hat{\mathbf e}_{\theta_2}}{L_2} + \frac{\varepsilon_1\hat{\mathbf j}_1}{L_1} - \frac{\varepsilon_2\hat{\mathbf j}_2}{L_2}\right). $$
By the triangle inequality,
$$ v_{\mathrm{rel}} = \frac{GM}{2}\left|\frac{\hat{\mathbf e}_{\theta_1}}{L_1} - \frac{\hat{\mathbf e}_{\theta_2}}{L_2} + \frac{\varepsilon_1\hat{\mathbf j}_1}{L_1} - \frac{\varepsilon_2\hat{\mathbf j}_2}{L_2}\right| \le \frac{GM}{2}\left(\frac{1}{L_1} + \frac{1}{L_2} + \left|\frac{\varepsilon_1\hat{\mathbf j}_1}{L_1} - \frac{\varepsilon_2\hat{\mathbf j}_2}{L_2}\right|\right). $$
By the law of cosines, we finally arrive at
$$ \boxed{\; v_{\max} = \frac{GM}{2}\left(\frac{1}{L_1} + \frac{1}{L_2} + \sqrt{\frac{\varepsilon_1^2}{L_1^2} + \frac{\varepsilon_2^2}{L_2^2} - \frac{2\varepsilon_1\varepsilon_2\cos\alpha}{L_1 L_2}}\,\right). \;} $$

For the particular version $L_1 = L_2 = L$ and $\alpha = 90^\circ$, we get
$$ \boxed{\; v_{\max} = \frac{GM}{L}\left(1 + \frac12\sqrt{\varepsilon_1^2 + \varepsilon_2^2}\,\right). \;} $$

We would normally end it here, but a question begs to be asked: can this maximum value be achieved? The equality case in the triangle inequality corresponds to when all three vectors are collinear and have the same orientation. So $\hat{\mathbf e}_{\theta_1}$ and $\hat{\mathbf e}_{\theta_2}$ must have the same orientation as $\frac{\varepsilon_1\hat{\mathbf j}_1}{L_1} - \frac{\varepsilon_2\hat{\mathbf j}_2}{L_2}$. So the maximum is achieved for exactly one position of each satellite.

This is where $\frac{T_1}{T_2}\in\mathbb R\setminus\mathbb Q$ comes in. Consider the natural bijection between a satellite's trajectory and $\mathbb R/T\mathbb Z$ (every point on the path corresponds to the moments in time $t_0, t_0+T, t_0+2T, \dots$). Therefore, when satellite 1 finds itself at position $P_0$, corresponding to moments $t_0 + nT_1$ for $n\in\mathbb Z$, satellite 2 is at a position corresponding to $t_0 + nT_1 \pmod{T_2}$ (in the quotient group). The key is thus to understand the set
$$ \{\,nT_1 \pmod{T_2} \mid n\in\mathbb Z\,\} \subset [0, T_2). $$
A theorem due to Kronecker states that

**Theorem 3.1 (Kronecker).** Let $\alpha\in\mathbb R\setminus\mathbb Q$. Then the sequence $(\{n\alpha\})_{n\ge 1}$ is dense in $[0,1)$.

It's clear how it also implies that the above set is dense in $[0, T_2)$. What this basically says is that when we find satellite 1 at a certain position $P_0$, satellite 2 can be almost anywhere, densely speaking. Therefore, when satellite 1 finds itself at the equality position for the maximum relative velocity, satellite 2 can get arbitrarily close to its equality position. Even though there are cases when both satellites can never both be at the equality position, their relative velocity can get arbitrarily close to $v_{\max}$.

Thus, the more correct problem conclusion should have been to find the *supremum* of the relative velocity of the satellites, rather than the maximum.

---
*Re-derivation check (consistent): From the Runge–Lenz integration $\mathbf v = \frac{GM}{h}\hat{\mathbf e}_\theta + \frac{GM\varepsilon}{h}\hat{\mathbf j}$ with $h = 2L$, each satellite contributes a fixed vector $\frac{GM\varepsilon}{2L}\hat{\mathbf j}$ plus a unit-magnitude turning term $\frac{GM}{2L}\hat{\mathbf e}_\theta$. The two turning unit vectors give a free contribution up to $\frac{GM}{2}(1/L_1+1/L_2)$ (achieved when antiparallel), and the fixed difference $\frac{GM}{2}|\varepsilon_1\hat{\mathbf j}_1/L_1 - \varepsilon_2\hat{\mathbf j}_2/L_2|$ evaluates by the law of cosines (angle $\alpha$ between $\hat{\mathbf j}_1,\hat{\mathbf j}_2$) to $\frac{GM}{2}\sqrt{\varepsilon_1^2/L_1^2 + \varepsilon_2^2/L_2^2 - 2\varepsilon_1\varepsilon_2\cos\alpha/(L_1L_2)}$, reproducing the boxed $v_{\max}$. Setting $L_1=L_2=L$, $\alpha=90^\circ$ collapses the radical to $\sqrt{\varepsilon_1^2+\varepsilon_2^2}/L$ and the prefactor sum to $2/L$, giving $v_{\max}=\frac{GM}{L}(1+\tfrac12\sqrt{\varepsilon_1^2+\varepsilon_2^2})$ — matches. The Kronecker-density argument (sup vs. max) is the author's.*
