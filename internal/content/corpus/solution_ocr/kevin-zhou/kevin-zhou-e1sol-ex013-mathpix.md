---
id: solution-ocr-kevin-zhou-e1sol-ex013
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e1-ex013]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 13

Consider an isolated neutral spherical conducting shell of radius $R$ with an arbitrary charge distribution inside, with total charge $Q$. Find the electric field outside the shell.

## Solution

Let $V$ be the volume outside the shell, and let $\phi = \phi _ { 0 }$ on the shell's surface. For a given value of $\phi _ { 0 }$, one possible solution is that the potential is that of a point charge at the origin, $\phi ( \mathbf { r } ) = \phi _ { 0 } R / r$. So by the uniqueness theorem, this is the only solution. In this case, the value of $\phi _ { 0 }$ is related to $Q$ by $\phi _ { 0 } = Q / \left( 4 \pi \epsilon _ { 0 } R \right)$, which implies $\mathbf { E } ( \mathbf { r } ) = Q \hat { \mathbf { r } } / \left( 4 \pi \epsilon _ { 0 } r ^ { 2 } \right)$.

The preceding two examples illustrate the general principle that a layer of conductor "shields" information from the other side. When you're inside, you can't know anything about what's going on outside, and when you're outside, you can only know the total charge inside.

Also, in this example, we weren't initially given Dirichlet or Neumann boundary conditions. We were told that the shell is a conductor, which tells us that $\phi = \phi _ { 0 }$ without the specific value of $\phi _ { 0 }$, and the total charge inside, which tells us the surface integral of $\mathbf { E } \cdot \hat { \mathbf { n } }$ but not the value of $\mathbf { E } \cdot \hat { \mathbf { n } }$ at any particular point. However, this combination of information was still enough to fix a unique solution, and it turns out this is true in general: if all the surfaces in a problem are conductors, then specifying either the potential or total charge on each one fixes a unique solution. You'll give a heuristic proof of this in problem 26.

Finally, if you were reading very carefully, you might be wondering why we need to specify the shell is "isolated." The reason is that whenever the volume $V$ is infinite, we also need to specify what is happening at the surface "at infinity." The default assumption is that the electric field and potential fall to zero at infinity. (As we've seen in problem 6, this becomes


more subtle when the charge distribution itself is infinite.)

[2] Problem 23 (Purcell 3.33). The shaded regions represent two neutral conducting spherical shells.
![](../../../figures/solution-ocr/56338da27ba3d32893d5328c.jpg)
Carefully sketch the electric field. What changes if the two shells are connected by a wire?
Solution. The results are shown below.
![](../../../figures/solution-ocr/96d3b9f33d119fe27134160d.jpg)

Whether or not there are any field lines coming from the charge outside the shell depends on how close that charge is to the shell. (The entire field configuration in this problem can be found exactly using the method of images, as shown in E2.) In the case that the two spheres are connected with a wire, the field in between the two spheres disappears, but nothing else changes.


[3] Problem 24. USAPhO 2014, problem A4.
[4] Problem 25 (MPPP 150). A solid metal sphere of radius $R$ is divided into two parts by a planar cut, so that the surface area of the curved part of the smaller piece is $\pi R ^ { 2 }$. The cut surfaces are coated with a negligibly thin insulating layer, and the two parts are put together again, so that the original shape of the sphere is restored. Initially the sphere is electrically neutral.
![](../../../figures/solution-ocr/e1c41447fba33162887a162b.jpg)
The smaller part of the sphere is now given a small positive electric charge $Q$, while the larger part of the sphere remains neutral. Find the charge distribution throughout the sphere, and the electrostatic interaction force between the two pieces of the sphere.
Solution. We know that distributing charge uniformly on the outer surface of the entire sphere will give a valid configuration, in the sense that the field is everywhere perpendicular to the conductors. Similarly, distributing equal and opposite charges uniformly on the two flat faces will give a valid configuration, since it acts like a parallel plate capacitor, making the field vanish everywhere outside.
Neither of these solutions have the right total charge on each piece, but we can fix this by superposing the two. By solving a system of two equations, we find the charge distribution is
    - total charge $Q$ distributed uniformly on the sphere,
    - charges $\pm ( 3 / 4 ) Q$ distributed uniformly on the flat surfaces.
The two flat faces attract each other and the two curved faces repel each other; there are no other forces by the shell theorem. The pressure on the flat faces is $\sigma ^ { 2 } / 2 \epsilon _ { 0 }$. With a little trigonometry, we find the area of the flat faces is $( 3 / 4 ) \pi R ^ { 2 }$, giving a force
$$
F _ { 1 } = \frac { 3 Q ^ { 2 } } { 8 \pi \epsilon _ { 0 } R ^ { 2 } } .
$$
As for the repulsive force, using the result of problem 11 we get
$$
F _ { 2 } = - \frac { 3 Q ^ { 2 } } { 128 \pi \epsilon _ { 0 } R ^ { 2 } } , \quad F _ { \text {tot } } = F _ { 1 } + F _ { 2 } = \frac { 45 } { 128 } \frac { Q ^ { 2 } } { \pi \epsilon _ { 0 } R ^ { 2 } } .
$$
[3] Problem 26. In this problem we'll work through a heuristic proof of a version of the uniqueness theorem. In particular, we will show that for a system of conductors in empty space, specifying the total charge on each conductor alone specifies the entire surface charge distribution.
    (a) Suppose for the sake of contradiction that two different charge distributions can exist, and consider their difference, which has zero total charge on each conductor. Argue that at least one conductor must have electric field lines both originating from and terminating on it.
    (b) Show that at least one of these field lines must originate from or terminate on another one of the conductors.

(c) By generalizing this reasoning, prove the desired result. (Hint: consider the conductors with nonzero surface charges that have the highest and lowest potentials.)

For a rigorous proof of this theorem using vector calculus, see section 3.1 of Griffiths.
Solution. (a) Since the overall charge distributions are different, at least one conductor $C$ must have different charge distributions in the two cases. So when we consider the difference, $C$ has areas of both positive and negative surface charge. Field lines come out of the former, and go into the latter.

(b) The field lines can't connect back to $C$, because by following the field line, one would prove that $C$ has a higher potential than itself, which is impossible. They also can't all go off to infinity, because we can consider "infinity" to just be a big, far away neutral conductor at zero potential. If lines both came from infinity to $C$ and from $C$ to infinity, then $C$ would again have a higher potential than itself, which is impossible. So some field line must go between $C$ and another conductor $C ^ { \prime }$.
(c) By assumption, at least some of the conductors have nontrivial surface charges on them. So among those conductors, consider the one with the highest potential $\phi _ { \text {max } }$. As we argued in part (a), this conductor has to have both field lines coming from it and going into it. Since potential decreases along field lines, the field lines going into it can't come from any of the other conductors, so they have come from infinity. Since infinity is at zero potential, we have $\phi _ { \text {max } } \leq 0$.
Now consider the conductor with the lowest potential $\phi _ { \min }$, which has nontrivial surface charges. Again, at least some field lines have to leave this conductor, but they can't go anywhere except for infinity. Since infinity is at zero potential, $\phi _ { \min } \geq 0$. This forces $\phi _ { \min } = \phi _ { \max } = 0$, so everything must be at zero potential, which means there aren't any electric field lines at all.

## Example 14: Griffiths 7.6

A wire loop of height $h$ and resistance $R$ has one end placed inside a parallel plate capacitor with electric field E, as shown.
![](../../../figures/solution-ocr/0b3643ced8288226c0728ce7.jpg)
The other end of the loop is far away, where the field is negligible. Find the emf in the loop.

## Solution

This is a trick question: if the answer were nonzero, the current would run forever, yielding a perpetual motion machine. Electrostatic fields always produce zero total emf along any loop. The $\sigma h / \epsilon _ { 0 }$ voltage drop inside the capacitor is canceled out by the voltage drop due to the fringe fields, which are small, but accumulate over a long distance. The point of this example is that, while we can ignore fringe fields for some calculations, they are often essential to get a consistent overall picture. We'll revisit the subtleties of fringe fields in E2.


[2] Problem 27 (Purcell 3.2). Spheres A and B are connected by a wire; the total charge is zero. Two oppositely charged spheres C and D are brought nearby, as shown.
![](../../../figures/solution-ocr/27345f2a5724a7808a46ea3e.jpg)
The spheres C and D induce charges of opposite sign on A and B. Now suppose C and D are connected by a wire. Then the charge distribution should not change, because the charges on C and D are being held in place by the attraction of the opposite charge density. Is this correct?
Solution. This isn't correct. To see this rigorously, we can use the uniqueness theorem. After connecting the wires, we have two conductors (A/B, and C/D), each with zero net charge. One possible solution is to have zero charge everywhere. By uniqueness, this is the only possible solution, so anything else cannot have been in equilibrium.
That is rigorous, but it might not be intuitive; after all, it looks like the charges on C are stuck where they are. However, though the charges on C are attracted towards A, they also strongly repel each other. It's this repulsion that causes charge on C to start flowing to D when the wire is connected.
[2] Problem 28 (PPP 149). A distant planet is at a very high electric potential compared with Earth, say $10 ^ { 6 } \mathrm {~V}$ higher. A metal space ship is sent from Earth for the purpose of making a landing on the planet. Is the mission dangerous? What happens when the astronauts open the door on the space ship and step onto the surface of the planet?
Solution. As the space ship approaches the planet, its potential gradually increases from that of the Earth, to that of the distant planet. Meanwhile, all the astronauts inside are doing just fine since the ship acts like a Faraday cage. Once the ship lands, it's already at the same potential as the planet, and when the astronauts step out, nothing happens. In other words, it's electric field that's dangerous, not potential, and the electric fields in this problem are always small.
Another way to see that there's no danger is to replace electric fields with gravitational fields, and thus electric potential with gravitational potential. An elevator in a skyscraper takes you from a low to a very high gravitational potential. But nothing violent happens when you get off!
Remark
We've considered many problems with uniformly charged spheres, cylinders, and planes. In these cases, all the electric field lines outside the charged region are straight. Is the converse true? That is, if all the electric field lines in some charge-free region are straight, do the field lines necessarily have spherical, cylindrical, or planar symmetry?
It seems intuitively plausible, and it's true, but it's tricky to prove. The simplest proof I know uses a bit of differential geometry. We consider the principal curvatures $k _ { 1 }$ and $k _ { 2 }$ of

adjacent equipotential surfaces. It turns out that the field lines can be straight only if

$$
k _ { 1 } k _ { 2 } \left( k _ { 1 } - k _ { 2 } \right) = 0
$$

which precisely corresponds to allowing spherical $\left( k _ { 1 } = k _ { 2 } \right)$, cylindrical $\left( k _ { 1 } = 0 \right)$, or planar $\left( k _ { 1 } = k _ { 2 } = 0 \right)$ symmetry. For a full derivation, see this paper.
