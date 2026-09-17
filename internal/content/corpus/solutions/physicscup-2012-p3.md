---
id: physicscup-2012-p3
problem: physicscup-2012-p3
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://web.archive.org/web/20111222122016/http://www.ipho2012.ee/physicscup/problem-no-3/solution/
selection_note: "Official editorial commentary by Jaan Kalda (Academic Committee of IPhO-2012). Full worked solutions existed only as scanned student submissions; per owner decision only Kalda's commentary is transcribed."
verification_status: unverified
figure_files: []
---

## Solution (editorial commentary)
*Jaan Kalda's editorial commentary on the Physics Cup (IPhO-2012) solutions, transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from the WP-LaTeX `alt` attributes. This is the official discussion of the intended approach and the best contestant solutions — the full worked derivations were published only as scanned student-solution images, which are NOT transcribed here.*

In the problem text, it was stated that all numeric prefactors are considered to be acceptable, and thus, the problem was graded generously. Actually, there were only two completely correct answers (by Szabó Attila and Jakub Šafin), and two answers which were also flawless – except that instead of the correct $\left\langle |v_x|\right\rangle=\sqrt{\frac{2}{\pi}\frac{kT}{m}}$, the approximation $\left\langle |v_x|\right\rangle\approx\sqrt{\left\langle v_x^2\right\rangle}=\sqrt{\frac{kT}{m}}$ was used (Petar Tadic and Krzysztof Markiewicz).

The most common mistake was not noticing that unlike in the case of a normal gas, both for the hot "faction" and cold "faction", the molecules move only in one direction. Hence, the ready formulae, such as $j=\frac14 n\left\langle|v|\right\rangle$, are two times smaller than needed, and the Maxwell velocity distribution function should be also multiplied by two. Other typical mistakes were that instead of the projection $\left\langle|v_x|\right\rangle$ or $\sqrt{\left\langle v_x^2\right\rangle}$, the modulus of the vector ($\left\langle|v|\right\rangle$ or $\sqrt{\left\langle v^2\right\rangle}$) was used. Meanwhile, the modulus $\sqrt{\left\langle v^2\right\rangle}$ should be used when calculating the transferred energy, but in some solutions, there was $\sqrt{\left\langle v_x^2\right\rangle}$ instead.

The best solutions were judged to be those of Szabó Attila and Jakub Šafin. However, Szabó Attila sent first an approximate solution, which he later corrected – late enough to lose his bonus points due to speed. If the best solution bonus would have been divided between these two, Szabó Attila would have got less points than when taking into account his speed bonus. Therefore, he was given his speed bonus, and additionally a double 1.1-factor-bonus – for using both his originally submitted and the revised solutions on this web page. And so, the best solution bonus goes entirely to Jakub Šafin; Petar Tadic and Krzysztof Markiewicz both receive a 1.1-factor-bonus. Finally, Lorenzo Comoglio recieves also a bonus of 1.1: he made a very nice visualization of the process.

There are two ways of calculating the frequency of collisions: (a) using the round-trip time, and (b) calculating first the densities of both "factions" of molecules (hot and cold). The solution of Szabó Attila follows method (a).

The solution of Jakub Šafin is based on calculating the densities of "factions". Also, he makes a very useful analysis of the results.

Finally, the initial solution of Szabó Attila: while incorrect, the idea itself is very nice, and the mistake is well hidden; so I judged it to be useful to display the first page, and analyse, why the prefactor will be wrong, if calculated in such a way.

Notice the nice trick of introducing $\beta$ and arranging the molecules according to the values of $\beta$ . Unfortunately, the trick does not work here: re-arranging the order of the molecule speeds does introduce false correlations. In such a way, we create molecules which are always faster than average, and the ones which are slower than average; the amount of transported heat is defined by $\beta$ after the hot wall, and the round-trip time is defined by $\beta$ after the cold wall; so, relatively large amount of heat would be transported in relatively shorter time, and therefore, the average of the product of the transported heat with the collision frequency would not be equal to the product of the respective averages; however, it would be equal if these two quantities were uncorrelated, as is actually the case!
