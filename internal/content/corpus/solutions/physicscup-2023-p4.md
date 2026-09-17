---
id: physicscup-2023-p4
problem: physicscup-2023-p4
source: physicscup
language: en
solution_language: en
solution_type: student
solution_author: Gil Ronen
solution_source_url: https://physicscup.ee/wp-content/uploads/PC2023/PC4-best/Ronen-4.pdf
selection_note: "Selected as the top-ranked candidate (LaTeX-compiled, 4 pp, highest praise score). Kalda singled it out: the submissions of Gil Ronen et al. 'are so well written that it would be a shame not to publish them'. The relativistic-velocity-addition method is short and elegant, and the author independently re-derives the same condition with a second (Lorentz-matrix) method."
verification_status: unverified
rederivation_check: consistent
figure_files: []
---

## Solution
*Student solution by Gil Ronen, transcribed faithfully from the LaTeX source. The competition published no official solution. Natural units with $c=1$ are used throughout (so $v$ and $\beta$ are dimensionless speeds in units of $c$, and the requested answer is $v/c$). The author writes $\Lambda_{v\hat x}$ for the boost transformation of a velocity into a frame moving with velocity $v\hat x$. The author presents two independent methods that arrive at the same condition.*

### 1. Velocity addition

If a body is moving inside a 2D plane with a velocity $\boldsymbol v=(v_x,v_y)$, its velocity in a moving frame of reference moving with a velocity $v\hat x$ is:
$$ \Lambda_{v\hat x}\left(v_x,v_y\right)=\left(\frac{v_x-v}{1-vv_x},\;\frac{v_y}{1-vv_x}\sqrt{1-v^2}\right) $$
Where $\Lambda_{v\hat x}$ denotes the transformation under the change of reference frame which moves with velocity $v\hat x$ ("Boost"). This is a known basic result of special relativity. An analogy exists for transformations in the $y$ axis:
$$ \Lambda_{v\hat y}\left(v_x,v_y\right)=\left(\frac{v_x}{1-vv_y}\sqrt{1-v^2},\;\frac{v_y-v}{1-vv_y}\right) $$

### 2. The spaceship

If the spaceship experiences a constant proper acceleration $g$ for a proper time $\tau$, it will end up with a velocity $v$. We could work out the explicit expression $v(g,\tau)$ but it is not necessary at this point.

#### 2.1 $t=\tau$

We can calculate the velocity at $t=\tau$ by boosting the velocity vector by $-v\hat x$.
$$ \boldsymbol v(\tau)=\Lambda_{-v\hat x}(0,0)=(v,0) $$

#### 2.2 $t=2\tau$

In the boosted $\Lambda_{-v\hat x}(\cdot)$ frame, the spaceship starts from rest and then acquires a velocity $(0,v)$. Therefore at $t=2\tau$ the velocity w.r. to the earth is:
$$ \boldsymbol v(2\tau)=\Lambda_{-v\hat x}\left(\Lambda_{-v\hat y}(0,0)\right)=\Lambda_{-v\hat x}(0,v)=\left(v,\;v\sqrt{1-v^2}\right) $$

#### 2.3 $t=3\tau$

We now continue with the same reasoning. At the twice boosted frame $\Lambda_{-v\hat x}\left(\Lambda_{-v\hat y}(\cdot)\right)$ the velocity of the spaceship at $t=3\tau$ is $(-v,0)$, therefore its velocity w.r. to the earth is:
$$ \boldsymbol v(3\tau)=\Lambda_{-v\hat x}\left(\Lambda_{-v\hat y}\left(\Lambda_{v\hat x}(0,0)\right)\right)=\Lambda_{-v\hat x}\left(\Lambda_{-v\hat y}(-v,0)\right) $$
$$ =\Lambda_{-v\hat x}\left(-v\sqrt{1-v^2},\;v\right)=\left(\frac{v\left(1-\sqrt{1-v^2}\right)}{1-v^2\sqrt{1-v^2}},\;\frac{v\sqrt{1-v^2}}{1-v^2\sqrt{1-v^2}}\right) $$

#### 2.4 $t=4\tau$

And again:
$$ \boldsymbol v(4\tau)=\Lambda_{-v\hat x}\left(\Lambda_{-v\hat y}\left(\Lambda_{v\hat x}\left(\Lambda_{v\hat y}(0,0)\right)\right)\right)=\Lambda_{-v\hat x}\left(\Lambda_{-v\hat y}\left(\Lambda_{v\hat x}(0,-v)\right)\right) $$
$$ =\Lambda_{-v\hat x}\left(\Lambda_{-v\hat y}\left(-v,\;-v\sqrt{1-v^2}\right)\right)=\Lambda_{-v\hat x}\left(\frac{-v\sqrt{1-v^2}}{1-v^2\sqrt{1-v^2}},\;\frac{v\left(1-\sqrt{1-v^2}\right)}{1-v^2\sqrt{1-v^2}}\right) $$
if we denote
$$ \alpha=\frac{1}{1-v^2\sqrt{1-v^2}} $$
$$ \Lambda_{-v\hat x}\left(-v\sqrt{1-v^2}\,\alpha,\;v\left(1-\sqrt{1-v^2}\right)\alpha\right)=\left(\frac{-v\sqrt{1-v^2}\,\alpha+v}{1-v^2\sqrt{1-v^2}\,\alpha},\;\frac{v\left(1-\sqrt{1-v^2}\right)\alpha\sqrt{1-v^2}}{1-v^2\sqrt{1-v^2}\,\alpha}\right) $$

#### 2.5 The speed at $t=4\tau$

This part is pure algebra:
$$ \alpha=\frac{1}{1-v^2\sqrt{1-v^2}} $$
$$ \boldsymbol v(4\tau)=\left(\frac{-v\sqrt{1-v^2}\left(\frac{1}{1-v^2\sqrt{1-v^2}}\right)+v}{1-v^2\sqrt{1-v^2}\left(\frac{1}{1-v^2\sqrt{1-v^2}}\right)},\;\frac{v\left(1-\sqrt{1-v^2}\right)\left(\frac{1}{1-v^2\sqrt{1-v^2}}\right)\sqrt{1-v^2}}{1-v^2\sqrt{1-v^2}\left(\frac{1}{1-v^2\sqrt{1-v^2}}\right)}\right) $$
$$ =\left(\frac{-v\sqrt{1-v^2}+v\left(1-v^2\sqrt{1-v^2}\right)}{1-2v^2\sqrt{1-v^2}},\;\frac{v\left(1-\sqrt{1-v^2}\right)\sqrt{1-v^2}}{1-2v^2\sqrt{1-v^2}}\right) $$
$$ =\left(\frac{-v\sqrt{1-v^2}\left(1+v^2\right)+v}{1-2v^2\sqrt{1-v^2}},\;\frac{v\left(\sqrt{1-v^2}-1+v^2\right)}{1-2v^2\sqrt{1-v^2}}\right) $$
$$ =v\left(\frac{-\sqrt{1-v^2}\left(1+v^2\right)+1}{1-2v^2\sqrt{1-v^2}},\;\frac{\sqrt{1-v^2}-1+v^2}{1-2v^2\sqrt{1-v^2}}\right) $$

$$ |\boldsymbol v(4\tau)|^2=v^2\frac{1}{\left(1-2v^2\sqrt{1-v^2}\right)^2}\Big(\left(1-v^2\right)\left(1+v^2\right)^2+1-2\sqrt{1-v^2}\left(1+v^2\right)+\left(1-v^2\right)+1+v^4-2v^2- \cdots\Big) $$
*(The original line is overfull and runs off the right page margin in the source PDF; the bracket is cut off after "$-2v^2-$". The author's simplified result on the next line is reproduced exactly.)*
$$ |\cdot|^2=v^2\frac{1}{\left(1-2v^2\sqrt{1-v^2}\right)^2}\left(\sqrt{1-v^2}\,(-4)-v^6+4-2v^2\right) $$
$$ |\cdot|^2=v^2\;\rightarrow\;\left(\sqrt{1-v^2}\,(-4)-v^6+4-2v^2+\right)=1+4v^4\left(1-v^2\right)-4v^2\sqrt{1-v^2} $$
$$ 3-2v^2-4v^4+3v^6-4\sqrt{1-v^2}\left(1-v^2\right)=0 $$
$$ \boxed{\left(\left(-3v^4+3+v^2\right)-4\sqrt{1-v^2}\right)\left(1-v^2\right)=0} \tag{1} $$

This equation has only one solution in the range $0<v<1$ which is
$$ \boxed{v=0.7862} $$
Solved numerically using Desmos graphing calculator.

### 3. Another method

The reference frame of the spaceship at $t=0$ is $I$. At $t=\tau$ it is
$$ \Lambda(v\hat x)=\begin{pmatrix} \gamma & -\beta\gamma & 0 \\ -\beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}. $$
At $t=2\tau$ the frame of reference is:
$$ \Lambda(v\hat x)\Lambda(v\hat y)=\begin{pmatrix} \gamma & -\beta\gamma & 0 \\ -\beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} \gamma & 0 & -\beta\gamma \\ 0 & 1 & 0 \\ -\beta\gamma & 0 & \gamma \end{pmatrix}. $$
At $t=3\tau$ it is $\Lambda(v\hat x)\Lambda(v\hat y)\Lambda(-v\hat x)$ and at $t=4\tau$ it is $\Lambda(v\hat x)\Lambda(v\hat y)\Lambda(-v\hat x)\Lambda(-v\hat y)$. To find the velocity of the spaceship in the rest frame at $t=4\tau$ we can observe how the transformation acts on a stationary point $\begin{pmatrix}1\\0\\0\end{pmatrix}\Delta t$.

$$ \begin{pmatrix} \gamma & -\beta\gamma & 0 \\ -\beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} \gamma & 0 & -\beta\gamma \\ 0 & 1 & 0 \\ -\beta\gamma & 0 & \gamma \end{pmatrix}\begin{pmatrix} \gamma & \beta\gamma & 0 \\ \beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} \gamma & 0 & \beta\gamma \\ 0 & 1 & 0 \\ \beta\gamma & 0 & \gamma \end{pmatrix}\begin{pmatrix}1\\0\\0\end{pmatrix}\Delta t $$
$$ =\begin{pmatrix} \gamma & -\beta\gamma & 0 \\ -\beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} \gamma & 0 & -\beta\gamma \\ 0 & 1 & 0 \\ -\beta\gamma & 0 & \gamma \end{pmatrix}\begin{pmatrix} \gamma & \beta\gamma & 0 \\ \beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix}\gamma\\0\\\beta\gamma\end{pmatrix}\Delta t $$
$$ =\begin{pmatrix} \gamma & -\beta\gamma & 0 \\ -\beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} \gamma & 0 & -\beta\gamma \\ 0 & 1 & 0 \\ -\beta\gamma & 0 & \gamma \end{pmatrix}\begin{pmatrix}\gamma^2\\\beta\gamma^2\\\beta\gamma\end{pmatrix}\Delta t $$
$$ =\begin{pmatrix} \gamma & -\beta\gamma & 0 \\ -\beta\gamma & \gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix}\gamma^3-\beta^2\gamma^2\\\beta\gamma^2\\-\beta\gamma^3+\beta\gamma^2\end{pmatrix}\Delta t $$
$$ =\begin{pmatrix}\gamma^4-\beta^2\gamma^3-\beta^2\gamma^3\\-\beta\gamma^4+\beta^3\gamma^3+\beta\gamma^3\\-\beta\gamma^3+\beta\gamma^2\end{pmatrix}\Delta t $$
Therefore the velocity in the rest frame is:
$$ v_x=\frac{-\beta\gamma^4+\beta^3\gamma^3+\beta\gamma^3}{\gamma^4-2\beta^2\gamma^3}=\beta\frac{\beta^2+1-\gamma}{\gamma-2\beta^2} $$
$$ v_y=\frac{\beta}{\gamma}\frac{1-\gamma}{\gamma-2\beta^2} $$
And the condition is $v_x^2+v_y^2=v^2=\beta^2$ so:
$$ \frac{\beta^2}{\gamma^2}\left(1-2\gamma+\gamma^2\right)+\beta^2\left(\beta^4+1+\gamma^2-2\gamma-2\gamma\beta^2+2\beta^2\right)=\beta^2\left(\gamma^2-4\gamma\beta^2+4\beta^4\right) $$
$$ \frac{1}{\gamma^2}\left(1-2\gamma+\gamma^2\right)-3\beta^4+1-2\frac{1}{\gamma}+2\beta^2=0 $$
$$ -3\beta^4+\beta^2+3-4\frac{1}{\gamma}=0 $$
Which is the same as equation 1.

---
*Re-derivation check (consistent): the boxed condition (1) factors the preceding line: expanding $\left(3+v^2-3v^4\right)\left(1-v^2\right)=3-2v^2-4v^4+3v^6$, and the $-4\sqrt{1-v^2}\left(1-v^2\right)$ term carries over, reproducing $3-2v^2-4v^4+3v^6-4\sqrt{1-v^2}\left(1-v^2\right)=0$. Since $1-v^2\neq0$, the physical root satisfies $3+v^2-3v^4=4\sqrt{1-v^2}$; numerically bisecting on $(0,1)$ gives $v=0.78615$, i.e. $v\approx0.7862\,c$, matching the author's boxed value. The second method's condition $-3\beta^4+\beta^2+3-4/\gamma=0$ with $\beta=v$, $1/\gamma=\sqrt{1-v^2}$ is identical to (1) divided by $(1-v^2)$. The physics (the chain of boosts implementing the proper-acceleration sequence) is the author's.*
