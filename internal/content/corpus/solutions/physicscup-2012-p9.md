---
id: physicscup-2012-p9
problem: physicscup-2012-p9
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://web.archive.org/web/20120703051704/http://www.ipho2012.ee/physicscup/problem-no-9/solution/
selection_note: "Official editorial commentary by Jaan Kalda (Academic Committee of IPhO-2012). Full worked solutions existed only as scanned student submissions; per owner decision only Kalda's commentary is transcribed."
verification_status: unverified
figure_files: []
---

## Solution (editorial commentary)
*Jaan Kalda's editorial commentary on the Physics Cup (IPhO-2012) solutions, transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from the WP-LaTeX `alt` attributes. This is the official discussion of the intended approach and the best contestant solutions — the full worked derivations were published only as scanned student-solution images, which are NOT transcribed here.*

This problem had a record number of correct solutions, and the number of very good solutions was also high. So, it was really difficult to choose the best ones. Eventually I decided to give the award to those solutions, which used the least amount of algebraic math – which were based on the observation that (a) the momenta of the photons and the electron form a triangle, $\vec p_1 + \vec p_2=\vec p_0$ , and (b), the sum of the moduli of two involved vectors is constant $|\vec p_1|+ |\vec p_2|=\mbox{const}$ . Hence, if the vector $\vec p_1$ starts at the origin, its endpoint draws an ellipse. Prior to the publication of the hints on 10th June, there were only two such solutions – sent by Ulysse Lojkine and Teoh Yee Seng. There were also few such papers among these twelve solutions which were sent after the publication of hints. However, at that stage, it was already easier to solve the problem: in the case of equally good solutions, priority is given to the ones submitted before the hints.

Out of the two mentioned solutions, the one of Ulyss Lojkine (see below) was more concise and had logically better ordering of material, so he is awarded 2/3 of the award.

Pay attention how he avoids introducing the electron's velocity: instead, energy and momentum are used, and the Lorentz invariant plays the role of an additional equations. For relativistic problems, this is typically a wise way of solving; using velocities and the relativistic mass increase factor $\gamma = 1/\sqrt{1-v^2/c^2}$ leads to much more complicated mathematical calculations (see, for instance the solution contributed by Alexandra Vasileva - linked in .pdf format).

Next, the solution of Teoh Yee Seng (he receives the remaining part of the best solution bonus)

What the both solutions are actually missing, is a strict proof that the angle between two lines connecting the foci of an ellipse with an ellipse point $A$ is maximal when the point $A$ is at the shorter axis. This is, indeed, quite obvious; a formal proof below is taken from the solution of Shinjini Saha.

Algebraic approach to finding the requested minimum can be also quite simple – if done in an optimal way. Good examples are provided by the fastest solvers – Szabó Attila and Nikita Sopenko. First, the solution of Szabó Attila, which makes use of the inequality between algebraic and geometric averages.

Pay attention how simple the relativistic formulae become if the native system of units is used – in which case $c=1$ . You can always revert back to SI or CGSE using dimensional consideration (multiply the terms with proper powers of $c$ , so as to make the dimensions matching). Nikita Sopenko used the same simplification, as can be seen below.

The third fastest was Petar Tadic; his solution is actually very similar to the two previous ones, except that he used the SI system of units. What is less good in his solution is that he started with a non-basic formula, $p=\frac 1c\sqrt{T^2+2TE_0}$ . This not-so-easy-to-remember formula is easily substituted with the very basic equation, the expression for the Lorentz invariant. Furthermore, note that the concept of kinetic energy is not too useful in the case of relativistic problems – this is a concept which is not native to the theory of relativity (borrowed from the classical classical mechanics).

The solutions thus far have avoided taking derivative for finding the minimum, but taking derivative is also not too difficult: see, for instance, the solution of Adrian Nugraha Utama (linked in .pdf format), or the solution of Ivan Tadeu Ferreira Antunes Filho (below).

Using $c=1$ , for the eletron and positron system:

$m_0^2=E^2-P^2$ $E=m_0+eU$ $E_i= 2m_0+eU$ $P_i^2=E^2-m_0^2$ $eU= km_0$ $E_i^2=(2+k)^2m_0^2 = m_0^2(4 +4k +k^2)$ $P_i^2= (2m_0eU + (eU)^2) = (2k +k^2)m_0^2$

$E_i=E_f$ $P_i=P_f$

${m^{\prime}_0}^2 = E^2 - P^2 = 0$ $E=P$

$E_1+E_2=E_i$ $P_1^2+P_2^2 +2P_1P_2\cos(\alpha)=P_i^2$ $E_1^2+E_2^2 +2E_1E_2\cos(\alpha)=P_i^2$ $E_2=E_i-E_1$ $2E_1^2+E_i^2-2E_1E_i +2E_1E_i\cos(\alpha)- 2E_1^2 \cos(\alpha)=P_i^2$ $\cos(\alpha)=1+(P_i^2-E_i^2) / 2(E_1E_i-E_1^2)$ $d(\cos(\alpha)/d(E_1) =0\Rightarrow$ $cos(\alpha)((2E_1-E_i)/(E_1E_i-E_1^2)) =0$ $E_1 = E_i/2$

$\cos (\alpha) = (2P_i^2/E_i^2)-1$ $\cos (\alpha) = (2(2k +k^2)/(4 +4k +k^2))-1$ $\cos (\alpha) = (4k +2k^2)/(4 +4k +k^2))-1$

For $k=1:$

$\cos(\alpha) = -\frac 13$ $\alpha= 109.47^\circ$

Finally, there was one solution which considered the process in the frame of the centre of mass, and applied the Lorentz transform to return back to the laboratory frame of reference – the one contributed by Kohei Kawabata.
