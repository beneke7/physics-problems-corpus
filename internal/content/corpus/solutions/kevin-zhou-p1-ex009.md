---
id: kevin-zhou-p1-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex009
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 9
How does the maximum jump height of an animal depend on its length scale L? How about
the gravitational acceleration g?
Solution
The maximum jump height h satisfies E = mgh where E is the energy supplied by the
muscles. But both the total mass m and the animal’s muscle mass (which determines E)
scale as L3, so we have h ∝ L0. So the jump height doesn’t scale with size: a dinosaur
can’t jump much higher than a human – and indeed, we can’t jump much higher than fleas can!
The other half of the problem seems very simple: we must have h ∝ 1/g because neither
E or m depend on g. But this is completely wrong! In gravity 10g, a person wouldn’t be
able to jump at all; they’d be so crushed by their own weight that they wouldn’t even be
able to stand. Mathematically, the dimensional analysis argument fails here because the
answer depends on the detailed biomechanics of muscle and bone, which involve many more
dimensionful quantities. By contrast, the result h ∝ L0 works well because the animals
we were comparing all evolved so that their muscles would work reasonably well in Earth’s
gravity, releasing a decent fraction of their stored energy in the short time required for a
jump. So, as remarked above, you can’t solve every problem by just listing a few quantities
and doing dimensional analysis – you really have to understand the system each time.
16
Kevin Zhou Physics Olympiad Handouts
2 Approximations
Idea 4: Taylor Series
For small x, a function f(x) may be approximated as
f(x) = f(0) + xf′
(0) +
x2
2
f′′
(0) + ... +
xn
n!
f(n)
(0) + O(xn+1
)
where we will write O(xn) for an error term that shrinks as x → 0 at least as fast as xn.
(This will be convenient, though it’s the opposite of the usage in computer science, where
“big-O” notation denotes how fast terms can grow as x → ∞.)
There are a few Taylor series that are essential to know. The most important are
exp(x) = 1 + x +
x2
2
+
x3
6
+ O(x4
), log(1 + x) = x −
x2
2
+
x3
3
− O(x4
)
and the small angle approximations
sinx = x −
x3
6
+ O(x5
), cosx = 1 −
x2
2
+ O(x4
).
Another Taylor series you learned long before calculus class is
1
1 − x
= 1 + x + x2
+ x3
+ O(x4
).
Usually you’ll only need the first one or two terms, but for practice we’ll do examples with
more. If any of these results aren’t familiar, you should rederive them!
Example 10
Find the Taylor series for tanx up to, and including the fourth order term.
Solution
By the fourth order term, we mean the term proportional to x4. (Not the fourth nonzero
term, which would be O(x7).) Of course, tanx is an odd function, so the O(x4) term is
zero, which means we only need to expand up to O(x3). That means we can neglect O(x4)
terms and higher everywhere in the computation, subject to some caveats we’ll point out later.
By definition, we have
tanx =
sinx
cosx
=
x − x3/6 + O(x5)
1 − x2/2 + O(x4)
.
However, it’s a little tricky because we have a Taylor series in a denominator. There are
two ways to deal with this. We could multiply both sides by cosx, and expand tanx in
a Taylor series with unknown coefficients. Then we would get a system of equations that
will allow us to solve for the coefficients recursively, a technique known as “reversion of series”.
17
Kevin Zhou Physics Olympiad Handouts
A faster method is to use the Taylor series for 1/(1 − x). We have
1
1 − u
= 1 + u + O(u2
)
and substituting u = x2/2 − O(x4) gives
1
cosx
= 1 +
x2
2
+ O(x4
).
Therefore, we conclude
tanx = (x − x3
/6 + O(x5
))(1 + x2
/2 + O(x4
)) = x + x3
/3 + O(x5
).
Here I was fairly careful with writing out all the error terms and intermediate steps, but as
you get better at this process, you’ll be able to do it faster. (Of course, one could also have
done this example by just directly computing the Taylor series of tanx from its derivatives.
This is possible, but for more complicated situations it’s generally not a good idea, because
computing high derivatives of a complex expression tends to get very messy. It’s better to
just Taylor expand the individual pieces and combine the results, as we did here.)
Remark
Finding series up to a given order can be subtle. For example, if you want to compute an
O(x4) term, it is not always enough to expand everything up to O(x4), because powers of x
might cancel. To illustrate this, the last step here is wrong:
tanx =
x3 sinx
x3 cosx
=
x4 + O(x6)
x3 + O(x5)
̸= x + O(x5
).
[2] Problem 13. Find the Taylor series for 1/cosx up to and including the fourth order (O(x4)) term.
Solution. The derivatives of cos(x) at x = 0 are 0, −1, 0, 1, so
cosx = 1 −
x2
2
+
x4
4!
+ O(x6
).
To expand the inverse, note that
1
1 − u
= 1 + u + u2
+ O(u3
)
where in our case, u = x2/2 − x4/24. Plugging this in gives
1
cosx
= 1 + (x2
/2 − x4
/24) + (x2
/2 − x4
/24)2
+ O(x6
) = 1 +
x2
2
+
5x4
24
+ O(x6
).
[2] Problem 14. Extend the computation above to get the x5 term in the Taylor series for tanx.
Solution. From this point on we will start omitting the explicit O(xn) error terms. We have
(x − x3
/6 + x5
/120)(1 + x2
/2 + 5x4
/24) = x + x3
/2 + 5x5
/24 − x3
/6 − x5
/12 + x5
/120
giving the answer,
tan(x) = x +
x3
3
+
2x5
15
.
18
Kevin Zhou Physics Olympiad Handouts
