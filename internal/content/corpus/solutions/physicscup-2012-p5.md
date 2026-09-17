---
id: physicscup-2012-p5
problem: physicscup-2012-p5
source: physicscup
language: en
solution_language: en
solution_type: editorial-commentary
solution_author: Jaan Kalda
solution_source_url: https://web.archive.org/web/20120326164523/http://www.ipho2012.ee/physicscup/problem-no-5/solution/
selection_note: "Official editorial commentary by Jaan Kalda (Academic Committee of IPhO-2012). Full worked solutions existed only as scanned student submissions; per owner decision only Kalda's commentary is transcribed."
verification_status: unverified
figure_files: []
---

## Solution (editorial commentary)
*Jaan Kalda's editorial commentary on the Physics Cup (IPhO-2012) solutions, transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from the WP-LaTeX `alt` attributes. This is the official discussion of the intended approach and the best contestant solutions — the full worked derivations were published only as scanned student-solution images, which are NOT transcribed here.*

Those of you who know (a) how to find eigenvalues of a system of linear differential equations, and (b) solve electrical bridge circuits using node potential or loop current methods had an option of solving this problem with a "brute force": write down a complete set of differential equations for four unknown functions (currents or charges; four, because this is the number of degrees of freedom here), write the characteristic function for eigenfrequencies, and find the asymptotic solutions of it. This may sound easy, but mathematical work associated with this approach it is quite large; besides, the required mathematical techniques are typically taught only during university courses (this was supposed to be a problem solvable within the knowledge of the IPhO syllabus). Also, the characteristic equation for the squared frequency leads to a cubic algebraic equation here (actually a fourth order equation, but with one root being equal to zero), which cannot be solved directly. Well, there are the Cardano's formulae, which, however, lead to the casus irreducibilis (real roots are expressed via complex numbers in such a way that it cannot be simplified algebraically), the asymptotic simplification of which is a very-very difficult task. That's why the right procedure for this brute force approach is to apply asymptotic simplifications (small-root-approximations and large-root-approximations) to the equation itself, and then solve the resulting lower-order equations; in any case, there is a lot of math involved. Mathematical complexity of the brute force approach was actually intentional, the aim was to promote the high- and low-frequency simplifications of electrical circuits. For physicists, using such simplifications is a very important skill: even if you manage solving the problem by brute force, you can't grasp the qualitative features of the circuit unless you learn to simplify it for different frequency ranges; in particular, this is why the best solution awards were not given to brute-force-solutions.

The bonus for the best solutions was divided equally between two contestants – Lorenzo Comoglio and Nikita Sopenko. Lorenzo Comoglio was able to simplify the circuit correctly on the same day when the problem was published; however, he had not been taught how to solve systems of linear differential equations. Because of that, it took him a lot of time to correct the mathematical part. The award is given him because he was the only one who was able to simplify the electrical circuit before any hints. Below is his final version.

So, he obtains the natural frequencies as frequencies at which the impedance of an AC-circuit turns to zero. The reason why this method works can be explained as follows. Consider two arbitrary nodes of the circuit: one of these will be an input node for a vanishing AC current $I=0$ , the other node will be for the output of the same current. If there are free oscillations taking place in the circuit, we have still zero input current, but non-zero voltage oscillations between the two nodes. Due to Ohm's law, $I=U/Z$ , hence the free oscillations require $1/Z=0$ . If we apply this equation to the Lorenzo's high-frequency circuit, we have

$\displaystyle Z^{-1}=\frac 1{iL_1\omega+\frac 1{iC_1\omega}}+ iC_1\omega +\frac 1{iL_1\omega}=\frac 1x+x\frac {C_1}{L_1}=0 \Rightarrow x=\pm i\sqrt{\frac{L_1}{C_1}},$

where we have denoted

$\displaystyle x\equiv iL_1\omega+\frac 1{iC_1\omega}=\pm i\sqrt{\frac{L_1}{C_1}} \Rightarrow L_1C_1\omega^2 \pm \omega\sqrt{L_1C_1}-1=0\Rightarrow \omega=\frac{\sqrt 5\pm 1}{2\sqrt{L_1C_1}}.$

Note that we have kept here only the two positive roots. The result, while seemingly different, is actually identical to the one of Lorenzo.

Finally, what would have happened if another pair of nodes were chosen for writing the impedance? There would have been a slightly different expression for the impedance, but the final result would have been, of course, the same!

Next solution is that of Nikita Sopenko. Instead of solving the circuit problem, he decided to consider an equivalent mechanical problem. This can be done because if properly matched, an LC-circuit and a system of springs and masses are described by exactly the same system of differential equations. The basic rule is that a mass corresponds to an inductance, a spring – to a capacitor, and a displacement – to a relocation of a charge. His asymptotic simplification of the mechanical oscillator is essentially equivalent to Lorenzo's simplification of the electrical circuit.

Now let us have a look on the solution of Jakub Šafin. He simplified the circuit in the same way as Lorenzo did, but instead of considering current resonance (when negligible input current into a node leads to large loop currents), he studied the voltage resonance. To that end, a single wire of the circuit is chosen, and cut broken; as a result of cutting, two endpoints of the wire are formed, which are considered as input terminals of an AC voltage with zero amplitude, $U=0$ . This is compatible with the original unbroken circuit, too, because in that case the cut points coincide and hence, have the same potential. In the case of free oscillations, there is still a current in the circuit, which is compatible with $U=0$ only if $Z=0$ , which is the condition for the voltage resonance. Jakub's solution is given here as his original .pdf file.

Another solution based on the simplified circuits is provided by Ng Fei Chong. However, he does not make use of the resonance phenomenon; instead, he finds the natural frequencies via characteristic equation of a system of two differential equations.

Next solution is an example of the "brute force" approach (cf. the introduction paragraph) – as was perfectly executed by Szabó Attila; it is provided here as his original .pdf file. Note that most of those contestants who tried this method failed initially – because when simplifying the determinant and/or a fourth order algebraic equation, some neglected terms were actually important. However, Attila got everything right at his first attempt.

Finally, one of the contestants, Selver Pepić, took an "experimentalist's approach": he extended the circuit with small resistances and a voltage source, coined numerical values, and calculated resonance curves; the result is given below.
