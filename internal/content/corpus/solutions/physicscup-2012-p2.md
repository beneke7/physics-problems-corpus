---
id: physicscup-2012-p2
problem: physicscup-2012-p2
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://web.archive.org/web/20120326163603/http://www.ipho2012.ee/physicscup/problem-no-2/solution/
selection_note: "Official editorial commentary by Jaan Kalda (Academic Committee of IPhO-2012). Full worked solutions existed only as scanned student submissions; per owner decision only Kalda's commentary is transcribed."
verification_status: unverified
figure_files: []
---

## Solution (editorial commentary)
*Jaan Kalda's editorial commentary on the Physics Cup (IPhO-2012) solutions, transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from the WP-LaTeX `alt` attributes. This is the official discussion of the intended approach and the best contestant solutions — the full worked derivations were published only as scanned student-solution images, which are NOT transcribed here.*

I expected this problem to be of the same difficulty level as the Problem No 1. However, it turned out to be more difficult – probably because typically in high schools, magnetism is not taught as well as mechanics. On the other hand, the problem, indeed, tests the knowledge of several things: (a) the property of magnetic materials to "attract" the magnetic field lines; (b) Ampere's law; (c) Gauss law; (d) the property of superconducting loops to conserve the magnetic flux; (e) the energy of magnetic fields.

Regarding the distribution of the award for the best solution: all the first three solutions are very good, with different strong points (which will be commented below). I decided to distribute the award between these three evenly, giving a small bias to Szabó Attila, who was the only one to solve the problem without any hints. So, the bonus factors are e0.4, e0.3 and e0.3. The next three solutions are also partially published – due to different reasons – and receive bonus factors of 1.1.

Let us start with the solution by Szabó Attila, which is almost perfect, including all the required components: (a) noting that the dominant part of the magnetic flux is kept inside the ferromagnetic (either using energy-based arguments, or applying Ampere's law — as is done here); (b) showing that B has the same order of magnitude both inside the slit and in the ferromagnetic — using the Gauss law; (c) recognizing that inside the ferromagnetic, B is not homogeneous and hence, the contribution of the segment residing inside the ferromagnetic brick to the circulation integral of the Ampere's law can only be estimated (and not calculated precisely); (d) applying the Ampere's law to show that inside the slit region surrounded by the current loop, B is homogeneous, and calculating the value of that B; (e) calculating the initial energy — as is done here, or via magnetic field energy; (f) applying the flux conservation law for the superconducting loop to calculate the final energy; (g) calculating work as a difference of energies. If there is anything to be desired then it would be a motivation that in the slit, B is perpendicular to the plane of the loop (it is only stated as a fact, without motivation). Note that there is a typo in his text – instead of $a\gg \mu d$ should be $a\ll \mu d$ .

The next solution is that of Nikita Sopenko. As compared with the first solution, it includes a proof of the formula $E=\Phi I/2$ (which is not mandatory as it is covered by the formula sheet). Further, his solution does not require a proof that in the slit, B is perpendicular to the current loop, because what is used here is only the perpendicular component of B (which enters both into the Ampere's law and the expression for the magnetic flux). Finally, he has nicely and explicitly shown the continuity of B at the slit boundary using the Gauss law (though, he does miss explicit proof that majority of the flux resides inside the ferromagnetic).

The solution of Ivan Tadeu Ferreira Antunes Filho is provided here as a .pdf file (it is too long to present page-by-page); it differs from the first two solutions in that the approach is based on the concept of reluctance. This is not as clear physically as the approach based on the direct application of the Ampere's law (in particular leaving open the question of why B is homogeneous in the slit); however, Ivan does manage to keep things correct (providing first a theoretical motivation of the method, and then calculating the reluctances in a correct way). The reason why he does receive a bonus is not motivated by his method, but by the fact that he does study, what will happen if L becomes so large (when made of a very thin wire) that the expression in the braces would become negative. In particular, he shows that then, the solution needs to be modified, and the work would be still positive. Also, he applies the formula for the loop inductance to estimate if it is realistic to have such large values of L which would be comparable to the initial inductance of the loop (surrounded by the ferromagnetic); the answer is "not really". Note that intuitively, all the other solutions just imply that the ferromagnetic makes the initial inductance much larger than the inductance L of the stand-alone loop.

Next, the solution of Jakub Šafin; what is worth highlighting, is his way of motivating, why in the slit, B is perpendicular to the plane of the current loop (while mathematically not as clear and correct as the magnetic field line refraction law described by Ilie Popanu, see below, intuitively and qualitatively these are very useful arguments):

"Now, we only need to fi nd the initial inductance M. For large $\mu$ , fi eldlines of B are attracted to the ferromagnetic; inside the slit, therefore, these fieldlines try to escape from the slit, so they'll be perpendicular to the loop (we can think of it as a deformation of magnetic field of the loop in vacuum). (This won't hold perfectly for fi eldlines close to the edge of the loop, though, because they're curved, but for large $\mu$ , this is negligible.)"

As mentioned above, the initial energy can be also calculated via the energy density of the magnetic field (for this method, it is important to understand that the magnetic field fills only the circular sub-region of the slit surrounded by the current loop). The first one to do so was Lars Dehlwes:

Finally, Ilie Popanu proved that in the slit, B is perpendicular to the slit using the refraction law for the magnetic field lines:
