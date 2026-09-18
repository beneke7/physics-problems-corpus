---
id: solution-ocr-kevin-zhou-p1sol-p020
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p020]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 20. Find a series approximation for $x ^ { y }$, given that $y$ is small and $x$ positive, but neither small nor exponentially huge. (Hint: to check if you have it right, you can try concrete numbers, such as $y = 0.01$ and $x = 10$. The series expansion variable may look a bit unusual.)

Solution. Let's write

$$
x ^ { y } = e ^ { y \log ( x ) } .
$$

If $y$ is small, then for any reasonable $x$ (i.e. $x$ not exponentially huge), $y \log ( x )$ is also small. So we can use the Taylor series for the exponential to get

$$
x ^ { y } \approx 1 + y \log ( x ) + \mathcal { O } \left( ( y \log ( x ) ) ^ { 2 } \right)
$$

with further terms easily computed.
By the way, this shows you what logarithms really are: they are the limits of "zeroth" powers,

$$
\log x = \lim _ { \epsilon \rightarrow 0 } \frac { x ^ { \epsilon } - 1 } { \epsilon } .
$$

The power rule for integration, $\int x ^ { n } d x = x ^ { n + 1 } / ( n + 1 ) + C$, breaks down for $n = - 1$, where it would give $x ^ { 0 } / 0$. Given the above result, it's not surprising that in this case the integral is a logarithm.


Remark
As you can see, there are lots of different types of series approximations, and many more we haven't even mentioned at all. For example, Fourier series will be important in W1, and the Pade approximant is a twist on a Taylor series which instead approximates a function with a ratio of polynomials. The number of ways one can approximate things is truly incredible. For a comprehensive overview, see Advanced Mathematical Methods for Scientists and Engineers by Bender and Orszag. For another perspective which is more useful for discrete math, see Concrete Mathematics by Graham, Knuth, and Patashnik.

Remark
Just for fun, here are some more examples of tough series expansions. First, in the "Lindhard" theory of electrical shielding in metals, one has to perform the small $x$ expansion

$$
\frac { 1 } { 2 } + \frac { x ^ { 2 } - 1 } { 4 x } \log \left( \frac { 1 + x } { 1 - x } \right) \approx \frac { x ^ { 2 } } { 3 } + \mathcal { O } \left( x ^ { 4 } \right) .
$$

Since there's a $1 / x$ in front of the second term, you have to expand the logarithm to third order to get the right prefactor, like in problem 15, but the algebra's a lot messier.

The Soviet mathematician V.I. Arnold used to say that math has gone downhill since Newton, because people in that time could supposedly quickly evaluate the limit

$$
\lim _ { x \rightarrow 0 } \frac { \sin ( \tan ( x ) ) - \tan ( \sin ( x ) ) } { \arcsin ( \arctan ( x ) ) - \arctan ( \arcsin ( x ) ) }
$$

The first terms that don't cancel are $\mathcal { O } \left( x ^ { 7 } \right)$, giving

$$
\lim _ { x \rightarrow 0 } \frac { - \frac { 55 x ^ { 7 } } { 1008 } + \frac { 107 x ^ { 7 } } { 5040 } + \mathcal { O } \left( x ^ { 9 } \right) } { - \frac { 341 x ^ { 7 } } { 5040 } + \frac { 173 x ^ { 7 } } { 5040 } + \mathcal { O } \left( x ^ { 9 } \right) } = 1 .
$$

This amazingly simple answer can be found with a very tricky geometric argument, of the style common in Newton's Principia, though it's hard to make it totally rigorous.

Finally, as we will see in E2, the capacitance of two spheres of radius $a$ separated by $r \gg a$ can be written as an infinite series in $a / r$. In his Treatise on Electricity and Magnetism (1891, section 146), Maxwell manually evaluated this series out to order $( a / r ) ^ { 22 }$ ! I don't even know what the point of that was, but it illustrates why physicists took decades to fully comprehend the implications of Maxwell's Treatise. Today, we teach the conceptual essentials of Newton and Maxwell's physics, but the reason they're giants is because they put their theories to work, in tough calculations we barely hear about today.

Remark
When a problem says $\alpha \ll 1$, what does it mean? Does it mean we are allowed to set $\alpha = 0$ ? Or perhaps that we should always expand to first order in $\alpha$ ? As you've seen from the above questions, it depends on the context. The rule is always that you want


the simplest approximation that gives the essential physics for the problem you're considering.
For example, let's return to problem 18, where we consider an electric dipole with $d / x \ll 1$. If we just plugged in $d = 0$, we would get $E ( x ) = 0 + \mathcal { O } ( d / x )$. That's a mathematically true statement which does have physical meaning (i.e. that the far fields of dipoles are much smaller than those of individual charges), but in a problem it usually isn't enough because you want to use an expression for $E ( x )$ to do something else. So in the problem, we kept the $\mathcal { O } ( d / x )$ term. But if we had gone out to $\mathcal { O } \left( d ^ { 2 } / x ^ { 2 } \right)$, we would have found

$$
E ( x ) = - \frac { q } { 4 \pi \epsilon _ { 0 } x ^ { 2 } } \left( \frac { 2 d } { x } + \frac { 3 d ^ { 2 } } { x ^ { 2 } } + \mathcal { O } \left( d ^ { 3 } / x ^ { 3 } \right) \right) .
$$

If you then used this expression, in a problem that expects you to use only the $\mathcal { O } ( d / x )$ term, you would probably get annoyingly complicated expressions. So does that mean you should always throw out quadratic terms? Of course not; sometimes they matter. For instance, the quadratic term above would be the leading effect if we cared about the deviation of the field of a finite-sized dipole from an ideal one. It is the "quadrupolar" part of the potential.

Students often desire a single magic rule they can apply mechanically, but in physics, you really have to think through each case. However, if this sounds overwhelming, don't worry. 90\% of approximations on the USAPhO and IPhO are pretty simple, and just boil down to

$$
\sin x \approx x , \quad \cos x \approx 1 - x ^ { 2 } / 2 , \quad ( 1 + x ) ^ { n } \approx 1 + x n , \quad e ^ { x } \approx 1 + x , \quad \log ( 1 + x ) \approx x .
$$

These are the only results that you have to know by heart.

## 3 Numeric Solutions

Idea 6
In Olympiads, you may have to find numeric solutions for equations that can't be solved analytically. A simple but reliable method is to "guess and check", starting with a reasonable first guess (e.g. derived by solving an approximated version of the equation, or sketching the graphs of both sides), plugging it into both sides, then proceeding with binary search.

[3] Problem 21. Sometimes, you can get an accurate numeric answer very quickly on a basic calculator by using the method of iteration, which solves equations of the form $x = f ( x )$.
    (a) Take a scientific calculator (in radians), put in any number, and press the "cos" button many times. Convince yourself that the final number you get is the unique solution to $x = \cos x$.
    (b) What are the key features of the graphs of $x$ and $\cos x$ that made this work? For example, why doesn't pressing $\cos ^ { - 1 }$ repeatedly give the same result? As another example, since $x = \sin x$ has a unique solution, why does repeatedly pressing sin not work so well?
    (c) Find a nonzero solution for $x = \tan ( x / 2 )$.
    (d) Find a nonzero solution for $e ^ { x } - 1 = 2 x$.

(e) ★ Find a single iteration that can solve $x = r ( 1 - x ) ^ { 2 }$ for both $r = 1 / 2$ and $r = 1$.

Solution. (a) Well, just try it!

(b) What makes $\cos x$ work and $\arccos x$ fail is that at the solution to $x = \cos x$, the magnitude of the slope of $\cos ( x )$ is less than 1 , while that of $\arccos ( x )$ is greater than 1 .
Specifically, suppose $x _ { 0 }$ is a solution to $x = f ( x )$, and we start at $x = x _ { 0 } + \epsilon$ for some small $\epsilon$. Under the tangent line approximation, iterating a function $f$ will take us to $x _ { 0 } + f ^ { \prime } \left( x _ { 0 } \right) \epsilon$. If $\left| f ^ { \prime } \left( x _ { 0 } \right) \right| < 1$, then we get closer to the answer, while if $\left| f ^ { \prime } \left( x _ { 0 } \right) \right| > 1$, then we get further away. Therefore, iterating $\cos x$ will let us converge to the answer exponentially.
Another, more global reason that $\cos x$ works so well is that it's bounded. So whatever your initial guess is, at the next stage it'll be mapped to within [-1, 1], and from then on it'll close in on the answer. Once you get close enough, the preceding paragraph kicks in and convergence is exponential. But for many other functions, you'll have to choose your initial guess sufficiently close, or else you might get the wrong solution, or diverge to infinity.
The equation $\sin x = x$ has a unique solution $x = 0 , \sin x$ is bounded, and the slope of $\sin x$ is never greater than 1. So in principle iteration should work. However, near zero, the slope of sine gets closer and closer to 1, which makes convergence very slow! If you play around a bit with series, you can show that after $n$ iterations, your answer starts shrinking as $1 / \sqrt { n }$, which is much worse than the exponential convergence. This is an exotic case though; you probably won't see it in practice.
In general, iteration can "go wrong" in far weirder ways. For example, suppose you tried to iterate $x \rightarrow r x ( 1 - x )$ for a constant $r$. This is called the logistic map, and it turns out that if $r$ is in the right range, the result is chaotic! The result bounces around in an unpredictable way, never repeating itself, and you get a completely different result after a few iterations if you start with a very slightly different number.
(c) Note that iterating $x \rightarrow \tan ( x / 2 )$ will lead to $x = 0$. In this case, the solution $x = 0$ is stable, while the solution we actually want is unstable. To get the other solution, we use the inverse: $x \rightarrow 2 \arctan ( x )$. Concretely, type in a reasonable guess in your calculator like 3, and then enter $2 \arctan ( \mathrm { Ans } )$, and keep pressing the "=" button. Eventually you'll get $x = 2.331$ or $x = - 2.331$, depending on your initial guess.
(d) Iterating $x \rightarrow \left( e ^ { x } - 1 \right) / 2$ will also yield $x = 0$, so iterate $x \rightarrow \ln ( 1 + 2 x )$. That is, type in a guess like 2 , and type in $\ln ( 1 + 2 \mathrm { Ans } )$. Eventually you'll get to $x = 1.256$.
By the way, here I'm writing ln because that's what the button for natural logarithm says on most calculators, but in the future, I'll always denote the natural logarithm with log, which is the standard for all advanced physics courses.
(e) Of course, you can just solve this quadratic exactly, but I include it here as an illustrative example. Iterating $x \rightarrow r ( 1 - x ) ^ { 2 }$ will work for $r = 1 / 2$, but it's unstable for $r = 1$. That also means that using the inverse iteration $x \rightarrow 1 - \sqrt { x / r }$ won't work, because it'll be stable for $r = 1$ but unstable for $r = 1 / 2$.
Instead, we need to play around with the expression. It turns out another possible iteration is $x \rightarrow ( 2 + 1 / r - x ) ^ { - 1 }$, and this is stable for both $r = 1 / 2$ and $r = 1$, and in fact for all $r > 0$.
