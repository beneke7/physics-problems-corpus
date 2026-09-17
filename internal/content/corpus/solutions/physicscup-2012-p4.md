---
id: physicscup-2012-p4
problem: physicscup-2012-p4
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://web.archive.org/web/20120326165503/http://www.ipho2012.ee/physicscup/problem-no-4/solution/
selection_note: "Official editorial commentary by Jaan Kalda (Academic Committee of IPhO-2012). Full worked solutions existed only as scanned student submissions; per owner decision only Kalda's commentary is transcribed."
verification_status: unverified
figure_files: []
---

## Solution (editorial commentary)
*Jaan Kalda's editorial commentary on the Physics Cup (IPhO-2012) solutions, transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from the WP-LaTeX `alt` attributes. This is the official discussion of the intended approach and the best contestant solutions — the full worked derivations were published only as scanned student-solution images, which are NOT transcribed here.*

This problem turned out to be a really good one, because the contestants came up with so many different solutions. This time, let us start with the solution, and at the end we'll count the points. The first step towards the solution is showing that all the rod tensions are equal; this is an unavoidable step, unless you derive the the relationship between the ball accelerations from the conservation of linear momentum – as was done by Ulyss Lojkine:

Another way of avoiding that first step is to apply Lagrangian formalism, as was done by Lars Dehlwes, Papimeri Dumitru, Cristian Zanoci and Dinis Cheian. This is a "brute force" approach, which is definitely a solid way of doing it, but be prepared for long calculations, where a single small mistake can invalidate your results (to be on a safe side, don't forget to check the absence of mistakes by checking the validity of the conservation laws!). In order to give you an idea about the amount work needed for this approach, here is a link to the Papimeri Dumitru's solution.

While most of the contestants, indeed, used the fact that the rod tensions are equal, very few cared to show it properly; the clearest (and simple) proof is provided by Ion Toloaca:

The next step is showing that initially, the connector is at rest; while most of the contestants implicitly assumed it (perhaps assuming it to be obvious), very few cared to prove it. This is, again, best done by Ion Toloaca:

The final and most difficult step is solving the force balance problem in the connector's frame of reference (which is non-inertial, moving with an acceleration $\vec a$ ), where the masses obtain centripetal acceleration due to the joint effect of the inertial force ( $-m\vec a$ ) and the rod tension. This can be done geometrically; an elegant way of doing it is once again provided by Ion Toloaca:

It can be also done by solving an algebraic system of equations, as was, for instance, done by Ng Fei Chong:

Alternatively, you can solve a trigonometric system of equation; example is contributed by Kohei Kawabata:

Finally, you can treat the force balance vectorially, and this is the advertised shortest solution! How it can be done is demonstrated by Ilie Popanu:

His writing, however, includes some redundant lines, so let us do it once again. Let us introduce unit vectors along the rods, $\vec e_1, \vec e_2, \vec e_3$ . Then, the Newton second law, as projected to the direction of the rod, can be written as

$\displaystyle \frac T{m_i}-\vec a\cdot \vec e_i=\frac{v_i^2}L,$

where $m_i$ are the ball masses ( $m_1=\frac{m_2}2=\frac{m_3}3=m$ ) and $v_i$ – the velocities ( $v_1=v_2=0, v_3=v_0$ ). Adding up these three equations and bringing $\vec a$ before the braces, we end up with

$\displaystyle T \left(\frac 1{m_1}+\frac 1{m_2}+\frac 1{m_3}\right)+\vec a\cdot \left(\vec e_1+\vec e_2+\vec e_3\right)=\frac{v_0^2}L.$

Now, since $\vec e_1+\vec e_2+\vec e_3 =0$ , we obtain immediately

$\displaystyle \frac Tm=a_1=2a_2=3a_3=\frac 6{11}\frac {v_0^2}L.$

So, what is the lesson from here? First, using vector calculus saves often a lot of mathematical work. Second, in order to preserve the symmetry of the problem, it may be helpful to use over-determined vector basis (two vectors would have been enough, but we used three, $\vec e_1, \vec e_2, \vec e_3$ ).

It should be noted that another person to apply efficiently vector calculus was Jakub Šafin, who actually solved a more general problem, when the masses and angles between the rods are arbitrary, and all the masses move.

This (and even more general) result can be actually obtained quite easily by generalizing the vector approach explained above. To begin with, we need to generalize the relationship between the rod tensions to the case when the angles are not equal. Bharadwaj Rallabandi has actually dug out an appropriate theorem, which is nothing more than a sine theorem for the triangle of vectors $\vec T_1+\vec T_2+\vec T_2=0$ (representing the force balance for the connector):

So, we can write $T_i=T\sin\alpha_i$ , where $T$ is the diameter of the circumcircle of the triangle of vectors $\vec T_1+\vec T_2+\vec T_3=0$ and $\alpha_i$ is the angle between the two rods excluding the i-th one. Similarly to what we did above, the force balance for the balls is written as

$\displaystyle\frac {T\sin\alpha_i}{m_i}-\vec a\cdot \vec e_i=\frac{v_i^2}L_i,$

and we want to eliminate $\vec a$ from this system of equations. We can use the same trick as above (adding equations), if we make use of the sine theorem, expressed in vector form as $\sum_{i=1}^3\vec e_i \sin\alpha_i=0$ . So, we multiply the equations by $\sin\alpha_i$ and add up, to obtain

$\displaystyle T\sum_{i=1}^3\frac {\sin^2\alpha_i}{m_i}=\sum_{i=1}^3\sin\alpha_i\frac {v_i^2}{L_i}\;\;\Rightarrow \;\; T=\frac{\sum_{i=1}^3\sin\alpha_i\frac {v_i^2}{L_i}}{\sum_{i=1}^3\frac {\sin^2\alpha_i}{m_i}}.$

Finally, the acceleration of the j-th body is given by

$\displaystyle a_j=\frac{T\sin\alpha_j}{m_j}=\frac{\sin\alpha_j}{m_j}\frac{\sum_{i=1}^3\sin\alpha_i\frac {v_i^2}{L_i}}{\sum_{i=1}^3\frac {\sin^2\alpha_i}{m_i}}.$

Before we proceed to counting the points, there are nice and very original solutions contributed by Nikita Sopenko and Hideki Yukawa. First, the solution of Nikita Sopenko:

Here he actually manages to solve the problem without using a non-inertial system of reference, and applies a nice trick of finding the projection of a vector to an axis while knowing its projection to two other directions. And finally, the solution of Hideki Yukawa:

Few comments are needed here. First, I added a red arrow indicating the acceleration of the connector in the $3m$ 's reference frame; in that frame of reference, the connector rotates, so the projection of its acceleration to the rod direction is $v_0^2/L$ , which happens to be the height of the triangle in his figure. Finally, the height equals to the sum of the connector's distances to the sides of the triangle because the triangle area can be represented as the sum of the areas of the three smaller triangles, formed by the connector and the triangle vertices.

And that's it, we are ready to count the points. The results are impressive, there are many candidates for the best solution: Ilie Popanu, Jakub Šafin, Hideki Yukawa, Nikita Sopenko, Ion Toloaca. One possibility would be to divide the bonus between them, but then there would be a problem: Ilie Popanu submitted his first solution quite early, but his short version was sent when there was no speed bonus left; as a result, for him a partial best-solution-bonus would be smaller than his original speed bonus. So I decided to give the full bonus of the best solution to Ilie Popanu; everyone else (mentioned in bold text above) will receive a bonus of 1.1.

—

Jaan Kalda, Academic Committee of IPhO-2012
