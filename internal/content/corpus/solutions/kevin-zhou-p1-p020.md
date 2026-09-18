---
id: kevin-zhou-p1-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p020
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[2] Problem 20. Find a series approximation for xy, given that y is small and x positive, but neither
small nor exponentially huge. (Hint: to check if you have it right, you can try concrete numbers,
such as y = 0.01 and x = 10. The series expansion variable may look a bit unusual.)
Solution. Let’s write
xy
= ey log(x)
.
If y is small, then for any reasonable x (i.e. x not exponentially huge), y log(x) is also small. So we
can use the Taylor series for the exponential to get
xy
≈ 1 + y log(x) + O((y log(x))2
)
with further terms easily computed.
By the way, this shows you what logarithms really are: they are the limits of “zeroth” powers,
logx = lim
ϵ→0
xϵ − 1
ϵ
.
The power rule for integration,
R
xn dx = xn+1/(n+1)+C, breaks down for n = −1, where it would
give x0/0. Given the above result, it’s not surprising that in this case the integral is a logarithm.
23
Kevin Zhou Physics Olympiad Handouts
Remark
As you can see, there are lots of different types of series approximations, and many more we
haven’t even mentioned at all. For example, Fourier series will be important in W1, and the
Pade approximant is a twist on a Taylor series which instead approximates a function with a
ratio of polynomials. The number of ways one can approximate things is truly incredible. For
a comprehensive overview, see Advanced Mathematical Methods for Scientists and Engineers
by Bender and Orszag. For another perspective which is more useful for discrete math, see
Concrete Mathematics by Graham, Knuth, and Patashnik.
Remark
Just for fun, here are some more examples of tough series expansions. First, in the “Lindhard”
theory of electrical shielding in metals, one has to perform the small x expansion
1
2
+
x2 − 1
4x
log

1 + x
1 − x

≈
x2
3
+ O(x4
).
Since there’s a 1/x in front of the second term, you have to expand the logarithm to third
order to get the right prefactor, like in problem 15, but the algebra’s a lot messier.
The Soviet mathematician V.I. Arnold used to say that math has gone downhill since Newton,
because people in that time could supposedly quickly evaluate the limit
lim
x→0
sin(tan(x)) − tan(sin(x))
arcsin(arctan(x)) − arctan(arcsin(x))
.
The first terms that don’t cancel are O(x7), giving
lim
x→0
−55x7
1008 + 107x7
5040 + O(x9)
−341x7
5040 + 173x7
5040 + O(x9)
= 1.
This amazingly simple answer can be found with a very tricky geometric argument, of the
style common in Newton’s Principia, though it’s hard to make it totally rigorous.
Finally, as we will see in E2, the capacitance of two spheres of radius a separated by r ≫ a
can be written as an infinite series in a/r. In his Treatise on Electricity and Magnetism (1891,
section 146), Maxwell manually evaluated this series out to order (a/r)22! I don’t even know
what the point of that was, but it illustrates why physicists took decades to fully comprehend
the implications of Maxwell’s Treatise. Today, we teach the conceptual essentials of Newton
and Maxwell’s physics, but the reason they’re giants is because they put their theories to
work, in tough calculations we barely hear about today.
Remark
When a problem says α ≪ 1, what does it mean? Does it mean we are allowed to set
α = 0? Or perhaps that we should always expand to first order in α? As you’ve seen
from the above questions, it depends on the context. The rule is always that you want
24
Kevin Zhou Physics Olympiad Handouts
the simplest approximation that gives the essential physics for the problem you’re considering.
For example, let’s return to problem 18, where we consider an electric dipole with d/x ≪ 1.
If we just plugged in d = 0, we would get E(x) = 0 + O(d/x). That’s a mathematically
true statement which does have physical meaning (i.e. that the far fields of dipoles are much
smaller than those of individual charges), but in a problem it usually isn’t enough because
you want to use an expression for E(x) to do something else. So in the problem, we kept the
O(d/x) term. But if we had gone out to O(d2/x2), we would have found
E(x) = −
q
4πϵ0x2

2d
x
+
3d2
x2
+ O(d3
/x3
)

.
If you then used this expression, in a problem that expects you to use only the O(d/x) term,
you would probably get annoyingly complicated expressions. So does that mean you should
always throw out quadratic terms? Of course not; sometimes they matter. For instance,
the quadratic term above would be the leading effect if we cared about the deviation of
the field of a finite-sized dipole from an ideal one. It is the “quadrupolar” part of the potential.
Students often desire a single magic rule they can apply mechanically, but in physics, you
really have to think through each case. However, if this sounds overwhelming, don’t worry.
90% of approximations on the USAPhO and IPhO are pretty simple, and just boil down to
sinx ≈ x, cosx ≈ 1 − x2
/2, (1 + x)n
≈ 1 + xn, ex
≈ 1 + x, log(1 + x) ≈ x.
These are the only results that you have to know by heart.
3 Numeric Solutions
Idea 6
In Olympiads, you may have to find numeric solutions for equations that can’t be solved
analytically. A simple but reliable method is to “guess and check”, starting with a reasonable
first guess (e.g. derived by solving an approximated version of the equation, or sketching the
graphs of both sides), plugging it into both sides, then proceeding with binary search.
[3] Problem 21. Sometimes, you can get an accurate numeric answer very quickly on a basic calculator
by using the method of iteration, which solves equations of the form x = f(x).
(a) Take a scientific calculator (in radians), put in any number, and press the “cos” button many
times. Convince yourself that the final number you get is the unique solution to x = cosx.
(b) What are the key features of the graphs of x and cosx that made this work? For example, why
doesn’t pressing cos−1 repeatedly give the same result? As another example, since x = sinx
has a unique solution, why does repeatedly pressing sin not work so well?
(c) Find a nonzero solution for x = tan(x/2).
(d) Find a nonzero solution for ex − 1 = 2x.
25
Kevin Zhou Physics Olympiad Handouts
(e) ⋆ Find a single iteration that can solve x = r(1 − x)2 for both r = 1/2 and r = 1.
Solution. (a) Well, just try it!
(b) What makes cosx work and arccosx fail is that at the solution to x = cosx, the magnitude
of the slope of cos(x) is less than 1, while that of arccos(x) is greater than 1.
Specifically, suppose x0 is a solution to x = f(x), and we start at x = x0 + ϵ for some small ϵ.
Under the tangent line approximation, iterating a function f will take us to x0 + f′(x0)ϵ. If
|f′(x0)| < 1, then we get closer to the answer, while if |f′(x0)| > 1, then we get further away.
Therefore, iterating cosx will let us converge to the answer exponentially.
Another, more global reason that cosx works so well is that it’s bounded. So whatever your
initial guess is, at the next stage it’ll be mapped to within [−1,1], and from then on it’ll
close in on the answer. Once you get close enough, the preceding paragraph kicks in and
convergence is exponential. But for many other functions, you’ll have to choose your initial
guess sufficiently close, or else you might get the wrong solution, or diverge to infinity.
The equation sinx = x has a unique solution x = 0, sinx is bounded, and the slope of sinx is
never greater than 1. So in principle iteration should work. However, near zero, the slope of
sine gets closer and closer to 1, which makes convergence very slow! If you play around a bit
with series, you can show that after n iterations, your answer starts shrinking as 1/
√
n, which
is much worse than the exponential convergence. This is an exotic case though; you probably
won’t see it in practice.
In general, iteration can “go wrong” in far weirder ways. For example, suppose you tried to
iterate x → rx(1 − x) for a constant r. This is called the logistic map, and it turns out that
if r is in the right range, the result is chaotic! The result bounces around in an unpredictable
way, never repeating itself, and you get a completely different result after a few iterations if
you start with a very slightly different number.
(c) Note that iterating x → tan(x/2) will lead to x = 0. In this case, the solution x = 0 is stable,
while the solution we actually want is unstable. To get the other solution, we use the inverse:
x → 2arctan(x). Concretely, type in a reasonable guess in your calculator like 3, and then
enter 2arctan(Ans), and keep pressing the “=” button. Eventually you’ll get x = 2.331 or
x = −2.331, depending on your initial guess.
(d) Iterating x → (ex − 1)/2 will also yield x = 0, so iterate x → ln(1 + 2x). That is, type in a
guess like 2, and type in ln(1 + 2Ans). Eventually you’ll get to x = 1.256.
By the way, here I’m writing ln because that’s what the button for natural logarithm says on
most calculators, but in the future, I’ll always denote the natural logarithm with log, which
is the standard for all advanced physics courses.
(e) Of course, you can just solve this quadratic exactly, but I include it here as an illustrative
example. Iterating x → r(1−x)2 will work for r = 1/2, but it’s unstable for r = 1. That also
means that using the inverse iteration x → 1 −
p
x/r won’t work, because it’ll be stable for
r = 1 but unstable for r = 1/2.
Instead, we need to play around with the expression. It turns out another possible iteration
is x → (2+1/r −x)−1, and this is stable for both r = 1/2 and r = 1, and in fact for all r > 0.
26
Kevin Zhou Physics Olympiad Handouts
