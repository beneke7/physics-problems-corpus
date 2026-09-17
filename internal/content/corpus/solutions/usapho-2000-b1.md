---
id: usapho-2000-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2000-b1
solution_type: official
source_document: solution-document-usapho-2000-s
source_pdf: cache/phoxiv/usapho/2000_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2000_S.pdf."
---

B1a. Because the charge distribution is uniform, there is spherical symmetry and we can use Gauss's Law to calculate the electrostatic field. This yields

$$
\vec{E}=k \frac{q_{e n c}}{R^{2}} \vec{e}_{R}
$$

where $R=\sqrt{x^{2}+y^{2}+z^{2}} \cdot q_{\text {enc }}$ is the charge enclosed by a Gaussian surface of radius R , and $\vec{e}_{R}$ is a unit vector in the $\boldsymbol{R}$ direction.
Region I: A Gaussian surface of radius $R<b$ encloses no charge, so $\quad E_{j}=0$
Region II: A Gaussian surface of radius $c>R>b$ encloses $\quad q_{\text {enc }}=-Q$
Thus $\quad \bar{E}_{I f}=-k \frac{Q}{R^{2}} \dot{e}_{R} \quad$ or $\quad E_{I J}=k \frac{Q}{R^{2}} \quad$ radially inward.

Region III: A Gaussian surface of radius $R>c$ encloses

$$
\begin{gathered}
q_{e n c}=-Q-Q=0 \\
E_{H f}=0
\end{gathered}
$$

Therefore
b. Region III: Since the field is zero, the potential is a constant throughout the region. Its value at any point in III is the same as its value at infinity

$$
V_{i j}=0
$$

Region II:

$$
V_{l l}(R)-V_{l l}(c)=-\int_{c}^{R} \vec{E} \cdot \overrightarrow{d l}
$$

Using (B1.1), $\overrightarrow{d l}=\left(-\vec{e}_{R}\right)(-d R)=\vec{e}_{R} d R$, and noting $V_{I I}(c)=V_{I H}(c)=0$

$$
V_{t t}(R)=\int_{c}^{R} k \frac{Q}{r^{2}} d r=-\left.k \frac{Q}{r}\right|_{r=c} ^{R}=k \frac{Q}{c}-k \frac{Q}{R}=k Q\left(\frac{1}{c}-\frac{1}{R}\right)
$$

Region I: Since the field is zero, the potential is constant and is everywhere equal to its value on the boundary $V_{I}=V_{I I}$ at $R=b$.

Thus

$$
V_{l}=k Q\left(\frac{1}{c}-\frac{1}{b}\right) .
$$

c. In each region the total field can be obtained by superposition, adding vectorially the fields due to the individual spheres.

$$
\vec{E}=\vec{E}_{+Q}+\vec{E}_{-Q}
$$

Inside each uniformly charged sphere the field due to that sphere is zero.
Region 1: This region is inside both spheres so both contributions are zero and $\quad E_{I}=0$.

Region 11: The field due to the $+Q$ sphere is zero in this region. The field due to the $-Q$ is equivalent to that due to a $-Q$ point charge at $x-(1, y=0, z=$ b. Letting $\bar{R}=x \vec{i}+y \vec{j}+(z-b) \vec{k}$ represent the vector from this point charge to the arbitrary field point, we have

$$
E_{l f}=-k \frac{Q \vec{R}}{R^{3}}=k \frac{(\mathcal{P} x i+y i+(z-b) \vec{k})}{\left(x^{2}+y^{2}+(z-b)^{2}\right)^{3 / 2}}
$$

Region III: In this region both spheres contribute to the field. Adding to the previous result the contribution equivalent to a $+Q$ point charge at the origin, yields

$$
E_{/ / f}=-k \frac{Q(x \vec{i}+y \vec{j}+(z-h) \vec{k})}{\left(x^{2}+y^{2}+(z-b)^{2}\right)^{3 / 2}}+k \frac{Q(x \vec{i}+y \vec{j}+z \vec{k})}{\left(x^{2}+y^{2}+z^{2}\right)^{1 / 2}}
$$

d. Region III. Since the field here is the equivalent to that due to two point charges, so is the potential.

$$
V_{i i t}=k Q\left(\frac{1}{\sqrt{x^{2}+y^{2}+z^{2}}}-\frac{1}{\sqrt{x^{2}+y^{2}+(z-b)^{2}}}\right)
$$

Region II: In this region, the contribution due to the inner sphere is equivalent to that due to a point charge. The contribution due to the outer sphere is constant. To find this value, equate across the boundary with Region III.

$$
V_{H}=k Q\left(\frac{1}{c}-\frac{1}{\sqrt{x^{2}+y^{2}+(z-b)^{2}}}\right)
$$

Region I: Since the field is zero, the potential is constant. To find this value, equate across the boundary with Region II.

$$
v_{1}=k Q\left(\frac{1}{c}-\frac{1}{h}\right)
$$
