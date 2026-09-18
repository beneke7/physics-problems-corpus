---
id: solution-ocr-kevin-zhou-e7sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e7-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3
Consider two charges $q$, at positions $r \hat { \mathbf { x } }$ and $r \hat { \mathbf { y } }$ respectively, both moving with speed $v$ towards the origin. Show that the magnetic forces between them are not equal and opposite. That is, electromagnetic forces do not obey Newton's third law.

Solution
In order to find the B field produced by each charge at the location of the other, we use the Biot-Savart law and the right-hand rule. Then we use the Lorentz force and the right-hand rule again to find the magnetic forces on each charge.

For example, the B field produced by the first charge at the location of the second is along - $\hat { \mathbf { z } }$. Then the magnetic force on the second charge is parallel to $\hat { \mathbf { x } }$. The magnetic force on the first charge is parallel to $\hat { \mathbf { y } }$. And the forces are definitely nonzero, so they can't be equal and opposite.

To explain this, we recall that the point of Newton's third law is just momentum conservation. This still holds, as long as one remembers that the field carries momentum of its own. (If we want to save some version of Newton's third law, we could say that the real action-reaction pairs are the forces between the charges and the field, not the charges with each other. But the real lesson is that Newton's third law is not fundamental, momentum conservation is.)

Idea 7
The momentum density of the electromagnetic field is

$$
\mathbf { p } = \frac { \mathbf { S } } { c ^ { 2 } } .
$$

In other words, momentum density and energy flux density are just proportional. As you will see in R2, this is true in general in relativity. The angular momentum density is $\mathbf { r } \times \mathbf { p }$. For an explicit derivation that these definitions ensure the total momentum and angular momentum are conserved, see section 8.2 of Griffiths. (You might think the definitions come out of nowhere; the straightforward way to find them is to apply Noether's theorem, as you will learn in a more advanced class.)

Remark
We have already seen an example of electromagnetic field momentum at work. Back in E4, you found that in the presence of a magnetic monopole, the mechanical angular momentum $\mathbf { L }$ of a point charge was not conserved, but $\mathbf { L } - q g \hat { \mathbf { r } }$ was. In fact, this second term turns out to be exactly the angular momentum of the field, so this conservation law is simply the conservation of total angular momentum. (If you'd like to verify this explicitly, it's easiest to use spherical coordinates with the monopole at the origin and the charge along the $z$-axis, but be warned, it's fairly messy.)
[3] Problem 14 (Griffiths). A long coaxial cable of length $\ell$ consists of an inner conductor of radius $a$ and an outer conductor of radius $b$. The inner conductor carries a uniform charge per unit length


$\lambda$, and a steady current $I$ to the right; the outer conductor has the opposite charge and current.

(a) Find the electromagnetic momentum stored in the fields.
(b) In part (a) you should have found that the fields contain a nonzero momentum directed along the cable. However, this is puzzling because it appears that no net mass is transported along the cable. How is this paradox resolved? (Hint: it doesn't make sense to consider the cable in isolation, as nothing would be keeping the current going. Consider attaching a battery across the left end and a resistor across the right end.)

Solution. (a) Set up the obvious cylindrical coordinates, with $\hat { \mathbf { z } }$ directed to the right. In between the tubes the fields are

$$
\mathbf { E } = \frac { 1 } { 2 \pi \epsilon _ { 0 } } \frac { \lambda } { s } \hat { \mathbf { s } } , \quad \mathbf { B } = \frac { \mu _ { 0 } } { 2 \pi } \frac { I } { s } \hat { \boldsymbol { \phi } } ,
$$

and they are zero everywhere else. Therefore, the momentum is $\int \epsilon _ { 0 } ( \mathbf { E } \times \mathbf { B } ) d V$ or

$$
\mathbf { p } = \hat { \mathbf { z } } \frac { \mu _ { 0 } I \lambda } { 4 \pi ^ { 2 } } \int _ { a } ^ { b } \frac { 1 } { s ^ { 2 } } \ell 2 \pi s d s = \frac { \mu _ { 0 } I \lambda \ell } { 2 \pi } \log ( b / a ) \hat { \mathbf { z } }
$$

(b) As this process goes on, the battery loses energy and the resistor gains energy (i.e. heats up). Since $E = m c ^ { 2 }$, that means the resistor is gaining mass while the battery is losing mass. Thus, the momentum reflects the fact that the center of mass of the system is going to the right. (This is a concrete example of the statement of idea 7, i.e. that momentum is always accompanied by the flow of energy.)
You might also wonder about the momentum and kinetic energy carried by the electrons themselves; however, as described in a remark at the end of E5, for typical circuits this is negligible compared to the momentum and energy carried by the fields.

[3] Problem 15. In the early $20 ^ { \text {th } }$ century, physicists sought to explain the $E = m c ^ { 2 }$ rest energy in terms of electromagnetic field energy. As a concrete example, model a charged particle as a uniform spherical shell of radius $a$ and charge $q$.

(a) Find the radius $a$ so that the total field energy equals the rest energy associated with the electron mass $m$. Up to an $\mathcal { O } ( 1 )$ factor, this quantity is called the classical electron radius.
(b) If the shell moves with a small speed $v$, we expect to have $p = m v$, where $p$ is the total field momentum. Show that instead, we have $p = ( 4 / 3 ) m v$. You may use the result
$$
\mathbf { B } = \frac { \mathbf { v } } { c ^ { 2 } } \times \mathbf { E }
$$
which we will prove in R3. Many complicated ideas were put forth to explain this infamous "4/3 problem", as recounted in chapter II-28 of the Feynman lectures.

For more about the "radius" of an electron, see this blog post. For a modern discussion of the resolution of the 4/3 problem, see this paper.

Solution. (a) The electrostatic energy of a uniform spherical shell of radius $a$ is

$$
U = \frac { 1 } { 2 } q V = \frac { q ^ { 2 } } { 8 \pi \epsilon _ { 0 } a }
$$

where the factor of $1 / 2$ avoids double counting the energy. Setting $U = m c ^ { 2 }$ gives

$$
a = \frac { q ^ { 2 } } { 8 \pi \epsilon _ { 0 } m c ^ { 2 } } .
$$


(b) Note that
$$
\mathbf { S } = \frac { 1 } { \mu _ { 0 } } \mathbf { E } \times ( \mathbf { v } \times \mathbf { E } ) / c ^ { 2 } .
$$
Set up spherical coordinates where $\mathbf { v } \| \hat { \mathbf { z } }$. Letting $k = 1 / \left( 4 \pi \epsilon _ { 0 } \right)$, we then have
$$
\begin{aligned}
\int \mathbf { E } \times ( \mathbf { v } \times \mathbf { E } ) d V & = \int \left( \mathbf { v } \left( E ^ { 2 } \right) - \mathbf { E } ( \mathbf { v } \cdot \mathbf { E } ) \right) d V \\
& = ( k q ) ^ { 2 } \hat { \mathbf { z } } \int _ { a } ^ { \infty } \int _ { 0 } ^ { \pi } \int _ { 0 } ^ { 2 \pi } \left[ v / r ^ { 4 } - v \cos ^ { 2 } \theta / r ^ { 4 } \right] r ^ { 2 } \sin \theta d \phi d \theta d r \\
& = 2 \pi ( k q ) ^ { 2 } v \int _ { a } ^ { \infty } \frac { 1 } { r ^ { 2 } } \int _ { 0 } ^ { \pi } \left( \sin \theta - \cos ^ { 2 } \theta \sin \theta \right) d \theta d r \\
& = 2 \pi ( k q ) ^ { 2 } v \int _ { a } ^ { \infty } \frac { 4 } { 3 } \frac { d r } { r ^ { 2 } } = \frac { 8 } { 3 } \frac { ( k q ) ^ { 2 } \pi v } { a }
\end{aligned}
$$
The momentum is then
$$
p = \frac { 1 } { c ^ { 4 } \mu _ { 0 } } \frac { 8 } { 3 } \left( \frac { q } { 4 \pi \epsilon _ { 0 } } \right) ^ { 2 } \frac { \pi v } { a } = \frac { 4 } { 3 } \frac { 1 } { c ^ { 2 } } \frac { q ^ { 2 } } { 8 \pi \epsilon _ { 0 } a } v = \frac { 4 } { 3 } m v
$$
as stated.
[3] Problem 16 (Griffiths 8.6). A charged parallel plate capacitor is placed in a uniform magnetic field as shown.
![](../../../figures/solution-ocr/33875a08ca2c75f8a18b4771.jpg)
    (a) Find the electromagnetic momentum in the space between the plates.
    (b) Now a resistive wire is connected between the plates, along the $z$-axis, so that the capacitor slowly discharges. The current through the wire will experience a magnetic force; show the total impulse equals the stored momentum.
    (c) Alternatively, suppose we slowly reduced the magnetic field. Show that the total impulse delivered to the plates equals the stored momentum.

This calculation is standard and given in many textbooks, but it is actually completely wrong: we have ignored the fringe field, and when it is included the total electromagnetic momentum is half of what was naively calculated in part (a). The answer in part (b) is correct, but the other half of the impulse corresponds to a change in non-electromagnetic "hidden momentum". The most basic example of hidden momentum is covered in example 12.12 of Griffiths. For a detailed analysis of the hidden momentum in this setup, see this paper.


Solution. (a) Using the standard formula,

$$
\mathbf { p } = \epsilon _ { 0 } ( \mathbf { E } \times \mathbf { B } ) A d = \epsilon _ { 0 } E B A d \hat { \mathbf { y } } .
$$

(b) If $Q ^ { \prime }$ is the charge on the plates at any given moment, the impulse $\mathbf { j }$ is
$$
\mathbf { j } = \int _ { 0 } ^ { \infty } I ( \boldsymbol { \ell } \times \mathbf { B } ) d t = - ( d \hat { \mathbf { y } } ) \int _ { Q } ^ { 0 } B d Q ^ { \prime }
$$
Performing the integral, the total impulse is
$$
\mathbf { j } = B Q d \hat { \mathbf { y } } = \epsilon _ { 0 } E B A d \hat { \mathbf { y } }
$$
in agreement with part (a).
(c) By Faraday's law, a nonconservative electric field is generated in the setup, which pushes the plates with a net force. Note that when the situation is symmetric, the electric field is $\mathbf { E } ^ { \prime } = ( 1 / 2 ) \dot { B } d \hat { \mathbf { y } }$ at the bottom plate, and $- \mathbf { E } ^ { \prime }$ at the top plate. So the total impulse is
$$
\mathbf { j } = \int _ { 0 } ^ { \infty } \left( Q \mathbf { E } ^ { \prime } \right) + \left( ( - Q ) \left( - \mathbf { E } ^ { \prime } \right) \right) d t = \int _ { 0 } ^ { \infty } \dot { B } Q d \hat { \mathbf { y } } d t = B Q d \hat { \mathbf { y } } = \epsilon _ { 0 } E B A d \hat { \mathbf { y } }
$$
in agreement with parts (a) and (b). The answer is the same if the setup were asymmetric, i.e. if the fields had been $\mathbf { E } ^ { \prime } + \mathbf { E } _ { 0 }$ and $- \mathbf { E } ^ { \prime } + \mathbf { E } _ { 0 }$ at the top and bottom plates, because $\mathbf { E } _ { 0 }$ would not contribute to the net force.

[3] Problem 17. USAPhO 2004, problem B2. (The official solution is off by a sign in the last part. This classic setup also appears on USAPhO 2020, problem A1, and INPhO 2020, problem 2. However, the official solution to USAPhO 2020, problem A1 has factor of 2 errors.)

## 4 Electromagnetic Waves

Idea 8
Maxwell's equations have propagating wave solutions of the form

$$
\mathbf { E } = \mathbf { E } _ { 0 } e ^ { i ( \mathbf { k } \cdot \mathbf { r } - \omega t ) } , \quad \mathbf { B } = \mathbf { B } _ { 0 } e ^ { i ( \mathbf { k } \cdot \mathbf { r } - \omega t ) }
$$

where $\mathbf { E }$ and $\mathbf { B }$ are in phase, perpendicular in direction, and have magnitudes $E _ { 0 } = c B _ { 0 }$. The propagation direction k is along $\mathbf { E } \times \mathbf { B }$, and the wave speed is

$$
c = \frac { \omega } { k } = \frac { 1 } { \sqrt { \mu _ { 0 } \epsilon _ { 0 } } } .
$$

Example 4
Verify explicitly that in the absence of charges and currents, the electromagnetic field above satisfies Maxwell's equations.


Solution
First let's consider Gauss's law, $\nabla \cdot \mathbf { E } = 0$. Splitting everything explicitly into components,

$$
\begin{aligned}
\nabla \cdot \mathbf { E } & = e ^ { - i \omega t } \left( \frac { \partial } { \partial x } \left( E _ { 0 , x } e ^ { i \mathbf { k } \cdot \mathbf { r } } \right) + \frac { \partial } { \partial y } \left( E _ { 0 , y } e ^ { i \mathbf { k } \cdot \mathbf { r } } \right) + \frac { \partial } { \partial z } \left( E _ { 0 , z } e ^ { i \mathbf { k } \cdot \mathbf { r } } \right) \right) \\
& = e ^ { - i \omega t } \left( E _ { 0 , x } \frac { \partial } { \partial x } e ^ { i \mathbf { k } \cdot \mathbf { r } } + E _ { 0 , y } \frac { \partial } { \partial y } e ^ { i \mathbf { k } \cdot \mathbf { r } } + E _ { 0 , z } \frac { \partial } { \partial z } e ^ { i \mathbf { k } \cdot \mathbf { r } } \right) \\
& = e ^ { i ( \mathbf { k } \cdot \mathbf { r } - \omega t ) } \left( i E _ { 0 , x } k _ { x } + i E _ { 0 , y } k _ { y } + i E _ { 0 , z } k _ { z } \right) \\
& = i \mathbf { k } \cdot \mathbf { E } = 0
\end{aligned}
$$

since $\mathbf { k }$ is perpendicular to $\mathbf { E } _ { 0 }$. This is another example of a lesson we saw in M4. Namely, when everything is a complex exponential, differentiation is very easy. For an complex exponential in time, $e ^ { i \omega t }$, differentiation with respect to time is just multiplication by $i \omega$. Similarly, for a field which is a complex exponential in space, $e ^ { i \mathbf { k } \cdot \mathbf { r } }$, the divergence $( \nabla \cdot )$ becomes ( $i \mathbf { k } \cdot$ ).

By similar reasoning, Gauss's law for magnetism is satisfied. Next, we check Ampere's law,

$$
\nabla \times \mathbf { B } = \mu _ { 0 } \epsilon _ { 0 } \frac { \partial \mathbf { E } } { \partial t } .
$$

By the same logic as above, the curl becomes $( i \mathbf { k } \times )$, while the time derivative becomes multiplication by $- i \omega$, giving

$$
i \mathbf { k } \times \mathbf { B } = ( - i \omega ) \mu _ { 0 } \epsilon _ { 0 } \mathbf { E } .
$$

Because k, E, and B are all mutually perpendicular, the directions of both sides match. Then all that remains is to check the magnitudes,

$$
k B _ { 0 } = \omega \mu _ { 0 } \epsilon _ { 0 } E _ { 0 } .
$$

By plugging in results from above, this reduces to

$$
c ^ { 2 } = \frac { 1 } { \mu _ { 0 } \epsilon _ { 0 } }
$$

which matches what we said above. (Or, if we didn't know what $c$ was, this logic would have been a way to derive it, as Maxwell did.) The verification of Faraday's law is similar. Note that the displacement current term was essential; it wouldn't have been possible to get electromagnetic wave solutions without it.
