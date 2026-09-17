---
id: physicscup-wopho2013-p3
problem: physicscup-wopho2013-p3
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda; Attila Szabó
solution_source_url: https://physicscup.ee/archive/physics-cup-2013/
selection_note: "Jaan Kalda's official progressive hints and editorial discussion, plus Attila Szabó's contestant solution (clean LaTeX in the born-digital text layer; a best-solution awardee), from the WoPhO-2013 'Problem 8: gas bubble in water' PDF (contributed by Mihkel Kree). The other appended solutions (Edtmair, Kuo Pei-Cheng, David Stein, Jakub Šafin) are figure-heavy scans and not transcribed here. Szabó's two figures (optical setups at α=45° and α=−26.82°) are in the source and not yet extracted."
verification_status: unverified
figure_files: []
---

## Solution (official hints + editorial commentary + a contestant solution)
*WoPhO-2013 Problem 8 (= Physics Cup 2013 Problem 3), "gas bubble in water" (contributed by Mihkel Kree). Kalda's hints and editorial transcribed faithfully from the born-digital source; one clean contestant solution (Attila Szabó) included. Figures referenced below are in the source PDF and not yet extracted.*

**Hint (after 1st week).** If you have a glass ball, observe what you see when it is illuminated by a point source from the side. Alternatively study the photo at `en.wikipedia.org/wiki/File:Clayton_Anderson_zero_g.jpg` (where does the light come from?).

**Hint (after 2nd week).** We observe a regularly periodic system of diffraction stripes. Such a pattern arises for two-slit diffraction, but there are no slits here. A similar pattern occurs from the interference of light from **two coherent point sources**, provided the screen size is much smaller than its distance to the sources. (For a cylindrical screen with the two point sources on its axis, the pattern equals that of a two-slit pattern on a flat screen; straightening a small piece of the cylinder changes the pattern only slightly.) Hypothesis: the pattern is due to two point sources created by the light-scattering effects of the bubble. Since the minima are very dark, almost all the laser light reaching the lens comes exclusively from those two point sources, and they have nearly equal brightness.

**Hint (after 3rd week).** Three candidate point sources: (a) reflection from the convex bubble surface (a partially reflecting convex mirror); (b) refraction into the bubble, reflection on the concave inner surface, refraction back out; (c) two sequential refractions through the air–water interface. Closer inspection: via two sequential refractions the light cannot be diverted by as much as $90^\circ$ (that would need a larger refraction index). Note that the bubble is **not** an ideal lens: for a narrow beam hitting the bubble with impact parameter $a$, the image position (effective focal length) is a function of $a$. The final equation may need to be solved numerically.

### Editorial
The solutions divide into two classes: (a) based on optical path lengths, and (b) based on the distance between the two effective point sources created by reflections from the bubble's surface. Three solutions were submitted before any hints. Oliver Edtmair submitted his (a)-type solution by Monday night. David Stein's (b)-type solution was the first to show that a ray cannot reach the camera purely by refractions without a reflection (otherwise, with three rays reaching the camera, the diffraction pattern would be non-periodic). Best-solution awards ($e^{-1/5}$ each) went to **Attila Szabó** (first to do an error analysis) and **Jakub Šafin** (clearly documented every approximation).

> *Final words (JK): The Problems 7 and 8 were really difficult, and Problem 9 is difficult too. I promise Problem 10 will be a simpler one.*

### Contestant solution — Attila Szabó (Grade 12, Leőwey Klára High School, Pécs, Hungary)
Two phenomena produce rays going perpendicular to the incoming ones: reflection on the primary surface of the bubble; and refraction into the bubble, reflection on its inner surface, and refraction out. The two have nearly equal intensities, hence the sharp pattern.

**First (reflection) source.** A perpendicular reflection occurs when the angle of incidence is $\alpha = 45^\circ$. The reflected ray then intersects the optical axis at a distance $AI = R\cos\alpha = R/\sqrt2$ from the centre of the bubble. Since the image is formed by rays in a slightly rotated plane about the optical axis, this point is a good "point source" in this plane (Fig. 1).

**Second (refraction–reflection–refraction) source.** On refraction into the bubble, $\beta = \arcsin(n\sin\alpha)$ by Snell's law. As $OCD$ is isosceles, the angle of incidence (hence reflection) at $D$ is $\beta$, and likewise at $E$; by symmetry the refraction angle at $E$ is $\alpha$. For the quadrilateral $CDEM$ (with $M$ the intersection of the incoming and finally outgoing rays), the angles at $C$ and $E$ are $\beta-\alpha$, that at $D$ is $2\beta$, so the diversion angle at $M$ is $360^\circ - 4\beta + 2\alpha$; this must be $90^\circ$ or $270^\circ$ for the two rays to be perpendicular. There is no solution in $0 \le \alpha \le 90^\circ$ for $90^\circ$; the $270^\circ$ case gives $\alpha = 26.82^\circ$ (numerically). Letting the outgoing ray meet the axis at $K$, one finds $AEK\angle = \alpha$, $AKE\angle = 90^\circ$, so from the right triangle $AEK$, $K$ is $R\sin\alpha = 0.4512R$ from the centre, on the opposite side of $A$ from $I$ (Fig. 2).

**Combine.** The two apparent foci are separated by $d = AK + AI = 1.1583R$ (surface refraction changes only vertical distances, so this is the apparent distance seen by the camera). The diffraction pattern is then that of two slits of separation $d$, with angular spacing of neighbouring minima $\lambda/d$.

**Measurement.** The angular diameter imaged is $\beta = D/L$. The measured apparent diameter of the 5th spot (400% magnification in Adobe Reader) is $b = (235 \pm 3)$ mm; the apparent distance of 7 neighbouring minima is $7a = (195 \pm 5)$ mm, so $a = (28 \pm 1)$ mm. Using $a/b = (\lambda/d)/(D/L)$,
$$\frac{a}{b} = \frac{\lambda/d}{D/L} = 0.8634\,\frac{\lambda L}{RD} \quad\Rightarrow\quad R = 0.8634\,\frac{\lambda L}{D\,a} = (29 \pm 1.5)\ \mu\text{m},$$
so the bubble diameter is $\delta = 2R = (59 \pm 3)\ \mu\text{m}$.
