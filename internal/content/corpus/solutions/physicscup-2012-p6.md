---
id: physicscup-2012-p6
problem: physicscup-2012-p6
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://web.archive.org/web/20120326164858/http://www.ipho2012.ee/physicscup/problem-no-6/solution/
selection_note: "Official editorial commentary by Jaan Kalda (Academic Committee of IPhO-2012). Full worked solutions existed only as scanned student submissions; per owner decision only Kalda's commentary is transcribed."
verification_status: unverified
figure_files: []
---

## Solution (editorial commentary)
*Jaan Kalda's editorial commentary on the Physics Cup (IPhO-2012) solutions, transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from the WP-LaTeX `alt` attributes. This is the official discussion of the intended approach and the best contestant solutions — the full worked derivations were published only as scanned student-solution images, which are NOT transcribed here.*

The first step towards solving the part (a) of this problem is figuring out the charge distribution – either based on qualitative arguments and intuition, or more rigorous and mathematically formulated condition. The next step is verifying if all the boundary conditions are satisfied, after which one can state that due to the uniqueness of the solution, the real charge distribution has been found. The statement about uniqueness was dropped in most of the contributed solutions – either because it was presumed to be obvious, or because the arguments used at the previous step left no room for other charge configurations. Parts (b) and (c) are less tricky and were included in order to teach useful techniques of interpreting electrostatic forces as pressure forces, and the electrostatic energy as the energy of the electric field. The best solution award was divided between those solutions in which the charge distribution was derived (or proved to be valid) in the most convincing way (each received a factor of $e^{1/4}$ ). Let us start with the solution of Kai-Chi Huang.

In the first section, Kai-Chi Huang calculates the height of the smaller piece of the sphere; to this end, he finds an expression for the surface area of the spherical cap as a function of height by integration, and equates it to $\pi R^2$ . Note that those of you who new a useful fact – the surface area of a spherical layer (cut from a sphere by two parallel planes) depends only on its height (and is proportional to it) – could have obtained the result immediately without integration. In the second section, he makes use of the fact that only a spherically symmetric surface charge provides $\vec E=0$ inside the sphere. Those of you who don't know this fact can derive it as follows: first, apply the Gauss law to a spherical surface of radius $r$. In the third section, he shows that when calculating the electrostatic force acting on a surface charge $q$ , the average electric field $\vec E/2$ needs to be used. Also, he makes use of the fact that such an electrostatic force is similar to a hydrostatic pressure force and avoid thereby integration of the force over the sphere. In the last section, he provides two ways of calculating the energy – via the formula for the energy of a capacitor, and via integrating the energy density of the electric field. 

Next, let us consider the solution of Aleksandra Vasileva, who deserved the award by showing that the surface charge density on the cut surface is constant. Note how this conclusion depends on the fact that the slit width is constant. Actually we can also consider the case when the slit width varies: for instance, let the width be $d_1$ over a half of the cut surface, and $d_2$ over the other half of it. Then, due to the circulation theorem, $E_1d_1=E_2d_2$ , hence the surface charge density varies also, and is inversely proportional to the width. While the net charge on the cut surface (given by $\int_S\sigma dS$ ) remains equal to $Q/4$ , the average electrostatic pressure is proportional to $\int_S\sigma^2 dS$ and is therefore increased.

Next solution is provided by Lars Dehlwes; in his case the award is motivated by his systematic application of the theory of electrical images.

Finally, Jakub Šafin got the award for generalising the solution to the case of a hollow sphere.

This closes the list of main awards; all the other solutions listed below receive 1.1-bonus factors . Next solution is contributed by Nikita Sopenko; this is to show how short a correct solution could be

.

Next is the solution of Szabó Attila, who has also provided a good motivation for the charge distribution, and calculates the cap height in the simplest possible way.

Finally, let us consider how to derive the fact that at the spherical surfaces, the charge has a constant density using the circulation theorem (from the solution of Ng Fei Chong).

Note that he has assumed that there is one constant surface density on one part of the sphere, and another constant surface density on the other part of the sphere; then, the circulation theorem is used to show that these two densities need to be equal. However, there was no need to make such an initial assumption about the surface density: the circulation theorem could have been used exactly in the same way to show that $\sigma$ is constant. It should be pointed out that in order to avoid the issue of a possible curvature of the field lines, the circulation contour needs to be kept close to the surface of the sphere, where the field is radial due to the boundary condition (so that the tangential segments of the contour will give no contribution to the circulation).
