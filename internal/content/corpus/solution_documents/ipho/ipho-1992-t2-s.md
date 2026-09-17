---
id: solution-document-ipho-1992-t2-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/1992/T2_S.pdf
extraction_method: cached-mmd
mapped_problems: [ipho-1992-t2]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/1992/T2_S.pdf."
---

## PROBLEM 2 : THE LONGITUDINAL MOTION OF A LINEAR MOLECULE

In this problem you will analyze the longitudinal motion of a linear molecule, i.e., the motion along the molecular axis. The rotational motion and the bending of the molecule are not considered. The molecule is assumed to consist of $N$ atoms of mass $m_{1}, m_{2}$, ... $m_{N}$, respectively. Each atom is assumed to be connected to its neighbors by a chemical bond. Each bond is approximated by a massless spring which obeys Hooke's law with spring constants $k_{1}, k_{2}, \ldots k_{N-1}$. The molecule is shown in Fig. 1.

![](https://cdn.mathpix.com/cropped/2f1615f3-fa4d-4459-b8d4-0d7d25298069-01.jpg?height=190&width=677&top_left_y=845&top_left_x=696)
Fig.1. A linear molecule with N atoms.

Use the following facts when solving this problem: The longitudinal vibrational motion of a linear molecule consists of a superposition of separate vibrational motions called normal vibrations, or normal modes. In a normal mode all atoms vibrate in simple harmonic motion with the same frequency and pass through their equilibrium positions simultaneously.

## Questions

1) Let $x_{i}$ be the displacement of atom $i$ from its equilibrium position. Express the force $F_{i}$ acting on each atom $i$ as a function of the displacements $x_{1}, x_{2}, \ldots, x_{N}$ and the spring constants $k_{1}, k_{2}, \ldots, k_{N-1}$. What relationship is there among the forces $F_{1}, F_{2}, \ldots, F_{N}$ ? Using this relationship, derive a relationship between the displacements $x_{1}, x_{2}, \ldots, x_{N}$ and give a physical interpretation of this relationship.
2) Analyze the motion of a diatomic molecule AB (Fig. 2). The value of the spring constant is $k$. Derive an expression for the forces acting on atoms $A$ and $B$. Determine the possible types of motion of the molecule. Determine the corresponding vibrational frequencies and interpret the result. In particular, how is it possible for the atoms to vibrate with the same frequency even though their masses are not the same?

![](https://cdn.mathpix.com/cropped/2f1615f3-fa4d-4459-b8d4-0d7d25298069-01.jpg?height=286&width=250&top_left_y=2234&top_left_x=411)
Fig. 2. The diatomic molecule AB

3) Analyze the motion of the triatomic molecule $\mathrm{BA}_{2}$ (Fig. 3)
![](https://cdn.mathpix.com/cropped/2f1615f3-fa4d-4459-b8d4-0d7d25298069-02.jpg?height=536&width=1536&top_left_y=367&top_left_x=269)

Express the net force on each atom as a function of its displacement only. Deduce the possible motions of the molecule and the corresponding vibrational frequencies.
4) The frequencies of the two longitudinal modes of vibration of the $\mathrm{CO}_{2}$ molecule are $3.998 \times 10^{13} \mathrm{~Hz}$ and $7.042 \times 10^{13} \mathrm{~Hz}$, respectively. Determine a numerical value for the spring constant of the CO bond.

How well do you think this approximation for the bond structure of the molecule describes the vibrational motion of the real molecule?

The atomic mass of the carbon atom $=12$ amu and that of the oxygen atom $=16$ amu. The atomic mass unit $=1.660 \times 10^{-27} \mathrm{~kg}$.

## SOLUTION : PROBLEM 2

The solution is given as several basically equivalent versions. The problem is formulated in such a way that no knowledge of matrix theory as applied to problems of this kind is assumed. However, as many of the participants produced elegant and balanced solutions using matrix theory, a brief sketch of this kind of solution is also presented below.

1) The force on atom i can be deduced from Fig. 1. below.
![](https://cdn.mathpix.com/cropped/2f1615f3-fa4d-4459-b8d4-0d7d25298069-02.jpg?height=234&width=744&top_left_y=2350&top_left_x=593)
![](https://cdn.mathpix.com/cropped/2f1615f3-fa4d-4459-b8d4-0d7d25298069-02.jpg?height=79&width=533&top_left_y=2647&top_left_x=708)

## SOLUTION : PROBLEM

A positive displacement $x_{i-1}$ of atom $i-1$ causes a shortening of the spring $k_{i-1}$. That causes a force $k_{i-1} x_{i-1}$ (acting to the right) on atom $i$. Correspondingly, a displacement $x_{i}$ of atom $i$ causes a force $-k_{i-1} x_{i-1}-k_{i} x_{i}$ acting to the left on atom $i$. Finally, a displacement $x_{i+1}$ on atom $i$ causes a force $k_{i+1} x_{i+1}$ acting to the right on atom $i$. The forces on atom $i$ add up to

$$
F_{i}=-k_{i-1}\left(x_{i}-x_{i-1}\right)-k_{i}\left(x_{i}-x_{i+1}\right)
$$

Taking into account that atom 1 has no left neighbor and atom N no right neighbor, the forces can be written
$F_{1}=-k_{1}\left(x_{1}-x_{2}\right)$
$F_{2}=-k_{1}\left(x_{2}-x_{1}\right)-k_{2}\left(x_{2}-x_{3}\right)$
....
$F_{i}=\quad-k_{i-1}\left(x_{i}-x_{i-1}\right)-k_{i}\left(x_{i}-x_{i+1}\right)$
.....
$F_{N}=$

$$
-k_{N-1}\left(x_{N}-x_{N-1}\right)
$$

Adding up the forces gives the total force F acting on the molecule:
$\mathrm{F}=\mathrm{F}_{1}+\mathrm{F}_{2}+\ldots+\mathrm{F}_{\mathrm{N}}=0$

According to Newton's second law, this force equals the mass of the molecule multiplied by the acceleration of its center of mass:
$\mathrm{F}=\mathrm{Ma}=0$

Each separate force equals the mass of the corresponding atom multiplied by the acceleration of that atom:
$\mathrm{F}_{\mathrm{i}}=\mathrm{M}_{\mathrm{i}} \mathrm{a}_{\mathrm{i}}$
(3) and (5) together give
$m_{1} a_{1}+m_{2} a_{2}+\ldots .+m_{N} a_{N}=0$

Relation (6) gives
$m_{1} v_{1}+m_{2} v_{2}+\ldots+m_{N} v_{N}=M v_{0}=$ constant

## PROBLEM 2) : THE LONGITUDINAL MOTION OF A LINEAR MOLECULE

where $\mathrm{v}_{0}$ denotes the velocity of the center of mass. If the molecule is observed in a coordinate system moving with the center of mass, this velocity equals zero. Thus, we find the following relation between the displacements of the separate atoms:
$m_{1} x_{1}+m_{2} x_{2}+\ldots+m_{N} x_{N}=M x_{0}=$ constant

This constant can be set equal to zero, meaning that the origin coincides with the center of mass of the molecule and that the motion of the center of mass is not influenced upon by the internal forces of the molecule .
2) The molecule and the pertinent quantities are shown in the figure below:
![](https://cdn.mathpix.com/cropped/2f1615f3-fa4d-4459-b8d4-0d7d25298069-04.jpg?height=209&width=408&top_left_y=1096&top_left_x=792)

The forces on the atoms can be expressed as
$F_{A}=-k\left(x_{A}-x_{B}\right)=m_{A} a_{A}$
$F_{B}=-k\left(x_{B}-x_{A}\right)=m_{B} a_{B}$

Again,
$\mathrm{F}_{\mathrm{A}}+\mathrm{F}_{\mathrm{B}}=\mathrm{m}_{\mathrm{A}}+\mathrm{m}_{\mathrm{B}}=0$

In the center - of - mass system there correspondingly holds
$m_{A} x_{A}+m_{B} x_{B}=0$
and further
$x_{B}=-\frac{m_{A}}{m_{B}} x_{A}$

## SOLUTION : PROBLEM 2

Relations (9) can then be written
$F_{A}=-k\left(x_{A}+\frac{m_{A}}{m_{B}} x_{A}\right)=-k\left(\frac{m_{A}+m_{B}}{m_{A}}\right) x_{A}$
$F_{B}=-k\left(x_{B}+\frac{m_{B}}{m_{A}} x_{B}\right)=-k\left(\frac{m_{A}+m_{B}}{m_{B}}\right) x_{B}$

According to the formulation of the problem, the force on each atom is proportional to its displacement. This can be expressed as
$F_{A}=-r_{A} x_{A}$
$F_{B}=-r_{B} x_{B}$

The proportionality constants $\mathrm{r}_{\mathrm{A}}$ and $\mathrm{r}_{\mathrm{B}}$ are obtained by comparing (13) and (14):
$r_{A}=k\left(\frac{m_{A}+m_{B}}{m_{B}}\right) ; r_{B}=k\left(\frac{m_{A}+m_{B}}{m_{A}}\right)$

The crucial point in the solution is now to utilize the fact given in the formulation of the problem that the atoms vibrate with equal frequencies:
$\omega_{A}=\sqrt{\frac{r_{A}}{m_{A}}}=\sqrt{\frac{m_{A}+m_{B}}{m_{A} m_{B}}}=\omega_{B}$

The other solution to be deduced from Eqns. (9) and (11) is the trivial one corresponding to
$\mathrm{x}_{\mathrm{A}}=\mathrm{x}_{\mathrm{B}}$
giving $\mathbf{w}=0$, which corresponds to a uniform translation of the molecule without vibrational motion, or in the center-of-mass system, to a molecule at rest.
Another possible solution is obtained by assuming that $\mathrm{x}_{\mathrm{A}}$ and $\mathrm{x}_{\mathrm{B}}$ are proportional to each other, as can be inferred from the solution to Part 1 of the problem. Thus, we set
$\mathrm{x}_{\mathrm{B}}=\mathrm{cx}_{\mathrm{A}}$

Inserting (18) into (13) gives
$F_{A}=-k\left(x_{A}-c x_{A}\right)=-k\left(1-c_{B}\right) x_{A}=-r_{A} x_{A}$
$F_{B}=-k\left(\frac{1}{C} x_{B}-x_{B}\right)=-k\left(\frac{1}{c_{B}}-1\right) x_{B}=-r_{B} x_{B}$

## PROBLEM 2] : THE LONGITUDINAL MOTION OF A LINEAR MOLECULE

The vibrational angular frequencies are

$$
\omega_{A}=\sqrt{\frac{r_{A}}{m_{A}}}=\sqrt{\frac{k(1-c)}{m_{A}}}=\omega_{B}=\sqrt{\frac{r_{B}}{m_{B}}}=\sqrt{\frac{k\left(\frac{1}{c}-1\right)}{m_{B}}}
$$

Solving the resulting second-degree equation for c gives the earlier derived results

$$
c_{1}=1, c_{2}=-\frac{m_{A}}{m_{B}}
$$

The solution $\mathrm{c}_{1}=1$ directly gives $\mathrm{F}_{\mathrm{A}}=\mathrm{F}_{\mathrm{B}}=0$ without any further conditions on $\mathrm{x}_{\mathrm{A}}$ and $\mathrm{x}_{\mathrm{B}}$. The solution $c_{2}=-m_{A} / m_{B}$ corresponds to the genuine vibrational motion.
A third way of obtaining the solution is, of course, to use the full equations of motion

$$
\begin{aligned}
& F_{A}=m_{A} \ddot{x}_{A}=-k\left(x_{A}-x_{B}\right) \\
& F_{B}=m_{B} \ddot{x}_{B}=-k\left(x_{B}-x_{A}\right)
\end{aligned}
$$

and assuming harmonic solutions of the form

$$
x_{A}=x_{A 0} e^{i \omega t} ; x_{B}=x_{B 0} e^{i \omega t}
$$

(23) inserted in (22) leads to the linear system of equations

$$
\begin{aligned}
& \left(k-m_{A} \omega^{2}\right) x_{A O}-k x_{B O}=0 \\
& -k x_{A O}+\left(k-m_{B} \omega^{2}\right) x_{B O}=0
\end{aligned}
$$

Surprisingly many of the participants obtained the solution in this way, correctly utilizing the fact that the condition for a non-trivial solution is that the determinant of the coefficients of the unknowns equal zero:

$$
\left|\begin{array}{cc}
k-m_{A} \omega^{2} & -k \\
-k & k-m_{B} \omega^{2}
\end{array}\right|=0
$$

## SOLUTION : PROBLEM 2

The solution to this equation again retrieves the earlier results:
$\omega_{1}=0 ; \omega_{2}=\sqrt{\frac{k\left(m_{A}+m_{B}\right)}{m_{A} m_{B}}}$
with the amplitudes $\mathrm{x}_{\mathrm{A}}$ and $\mathrm{x}_{\mathrm{B}}$ obtained as before.
3) The molecule to be analyzed in the third part of the problem is illustrated in the following figure together with the pertinent quantities defined:
![](https://cdn.mathpix.com/cropped/2f1615f3-fa4d-4459-b8d4-0d7d25298069-07.jpg?height=291&width=730&top_left_y=1009&top_left_x=703)

The forces on the atoms are

$$
\begin{aligned}
& F_{1}=-k\left(x_{1}-x_{2}\right) \\
& F_{2}=-k\left(x_{2}-x_{1}\right)-k\left(x_{2}-x_{3}\right)=-k\left(-x_{1}+2 x_{2}-x_{3}\right) \\
& F_{3}=-k\left(x_{3}-x_{2}\right)
\end{aligned}
$$

Again we the displacements can be assumed proportional to each other, as the sum of the mass-weighted displacements is a constant:
$x_{2}=c_{2} x_{1} ; x_{3}=c_{3} x_{1}$
where $c_{2}$ and $c_{3}$ are constants to be determined. According to the formulation of the problem, the participants were supposed to proceed by trying to express the force acting on each atom as a function of the displacement of that particular atom only. Inserting (28) in (27) then gives
$F_{1}=-k\left(1-c_{2}\right) x_{1}=-r_{1} x_{1}$
$F_{2}=-k\left(-\frac{1}{c_{2}}+2-c_{3}\right) x_{2}=-r_{2} x_{2}$
$F_{3}=-k\left(1-\frac{c_{2}}{c_{3}}\right) x_{3}=-r_{3} x_{3}$

## PROBLEM 2]: THE LONGITUDINAL MOTION OF A LINEAR MOLECULE

The constants $c_{2}$ and $c_{3}$ can now be determined from the condition that the atoms vibrate with equal angular frequencies:

$$
\omega_{1}=\sqrt{\frac{r_{1}}{m_{A}}}=\omega_{2}=\sqrt{\frac{r_{2}}{m_{B}}}=\omega_{3}=\sqrt{\frac{r_{3}}{m_{A}}}
$$

Squaring the roots and using (29) gives the equations

$$
\frac{1-c_{2}}{m_{A}}=\frac{-\frac{1}{c_{2}}+2-\frac{c_{3}}{c_{2}}}{m_{B}}=\frac{1-\frac{c_{2}}{c_{3}}}{m_{A}}
$$

These equations must hold simultaneously, so that there hold the relations

$$
\begin{aligned}
& 1-c_{2}=1-\frac{c_{2}}{c_{3}} \\
& \frac{1-c_{2}}{m_{A}}=\left(2-\left(1+c_{3}\right) \frac{1}{c_{2}}\right) \frac{1}{m_{B}}
\end{aligned}
$$

The first of these equations has two different solutions:

1) $c_{2}=0 \& c_{3} \neq 0$
2) $c_{3}=1 \& c_{2} \neq 0$

The first solution inserted in (33) gives the result

$$
\frac{1}{m_{A}}=\left(2-\frac{1+c_{3}}{c_{2}}\right) \frac{1}{m_{B}}
$$

If $c_{2}$ is directly set $=0$ in the right-hand member, the expression diverges. For that not to occur, the expression $1+c_{3}$ must vanish, impying the result
$c_{3}=-1$

Thus, we have

$$
x_{2}=0, x_{3}=-x_{1}
$$

From (29) and (37) we obtain

$$
r_{1}=k ; \omega_{1}=\sqrt{\frac{k}{m_{A}}}
$$

The angular frequency $w_{3}$ is equal to $w_{1}$, because the solution actually was obtained on that condition. An additional complication is that the frequency $w_{2}$ comes out indeterminate, as atom 2 does not move at all in this particular vibrational mode. The participants were not supposed to analyze that fact any further; obtaining the result that the central atom does not move was enough.
The second solution in (34), i.e, $c_{3}=1$ and $c_{2} \neq 0$ gives inserted in (33)

$$
\frac{1-c_{2}}{m_{A}}=2\left(1-\frac{1}{c_{2}}\right) \frac{1}{m_{B}}
$$

This gives a second-degree equation for $\mathrm{c}_{2}$ :

$$
c_{2}^{2}+\left(\frac{2 m_{A}}{m_{B}}-1\right) c_{2}-\frac{2 m_{A}}{m_{B}}=0
$$

The roots of this equation are

$$
c_{2,1}=1 ; \quad c_{2,2}=-\frac{2 m_{A}}{m_{B}}
$$

The first solution corresponds to equal amplitudes for all atoms, again implying that no bonds are stretched and no vibrational motion occurs. The second root gives

$$
F_{1}=-k\left(1+\frac{2 m_{A}}{m_{B}}\right)=-r_{1} x_{1}
$$

with the corresponding vibrational angular frequency

$$
\omega_{1}=\sqrt{\frac{r_{1}}{m_{A}}}=\sqrt{k\left(\frac{2}{m_{B}}+\frac{1}{m_{A}}\right)}
$$

## PROBLEM 2 : THE LONGITUDINAL MOTION OF A LINEAR MOLECULE

As in part 2 of this problem, the solution can also be obtained from the vanishing of the determinant formed from the equations of motion. They are

$$
\begin{aligned}
& F_{1}=m_{A} \ddot{x}_{1}=-k\left(x_{1}-x_{2}\right) \\
& F_{2}=m_{B} \ddot{x}_{2}=-k\left(-x_{1}+2 x_{2}-x_{3}\right) \\
& F_{3}=m_{A} \ddot{x}_{3}=-k\left(x_{3}-x_{2}\right)
\end{aligned}
$$

Again assuming an complex exponential solution

$$
x_{i}=x_{i 0} e^{i \omega t}
$$

a linear system of equations is obtained by factoring out the exponential:

$$
\begin{aligned}
& \left(k-m_{A} \omega^{2}\right) x_{10}-k x_{20}=0 \\
& -k x_{20}+\left(2 k-m_{B} \omega^{2}\right) x_{20}-k x_{30}=0 \\
& k x_{20}+\left(k-m_{A} \omega^{2}\right) x_{30}=0
\end{aligned}
$$

The condition for the existence of a non-vanishing solution is again

$$
\left|\begin{array}{ccc}
k-m_{A} \omega^{2} & -k & 0 \\
-k & 2 k-m_{B} \omega^{2} & -k \\
0 & -k & k-m_{A} \omega^{2}
\end{array}\right|=0
$$

The roots for the determinant are obtained as
$\omega_{1}=0 ; \omega_{2}=\sqrt{\frac{k}{m_{A}}} ; \omega_{3}=\sqrt{k\left(\frac{2}{m_{B}}+\frac{1}{m_{A}}\right)}$
thus reproducing the earlier results. The amplitudes are trivially solved by inserting the roots in the equation system one at a time. This method of solution is, of course, much faster than the one suggested in the text, but it was not assumed that the participants would have to master the more advanced techniques. On the other hand, those who did it were rewarded for a correct solution, even though they took a shorter route demanding less physical reasoning than that suggested in the formulation of the problem.

## SOLUTION : PROBLEM 2

4) Within the realm of the model adopted, we note that $w_{3}>w_{2}$, so that the higher vibrational frequency, i.e $7.042 * 10^{13} \mathrm{~Hz}$, should be set to correspond to $\mathrm{w}_{3}$ and the lower one, $3.998 * 10^{13} \mathrm{~Hz}$, should be set to correspond to $\mathrm{w}_{2}$. First the correspondence between the angular frequency and the frequency is noted:

$$
\omega=2 \pi v
$$

Thus, there holds

$$
\omega_{2}=2 \pi v_{2} ; \omega_{3}=2 \pi v_{3}
$$

The estimates for $k$ come out as

$$
\begin{aligned}
& k_{2} \approx m_{A} \omega_{2}^{2} \approx 1670 \mathrm{~N} / \mathrm{m} \\
& k_{3} \approx\left(\frac{m_{A} m B}{2 m_{A}+m_{B}}\right) \omega_{3}^{2} \approx 1420 \mathrm{~N} / \mathrm{m}
\end{aligned}
$$

The agreement is reasonable. The participants were not expected to produce any further speculations as to the reasons for the discrepancy. This part of the problem was rather meant as an illustration of the degree of accuracy inherent in a simple model of the kind presented here.
