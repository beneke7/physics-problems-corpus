---
id: kevin-zhou-p1-p028
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p028
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[2] Problem 28. Consider a triangle with side lengths a, b, and c. It turns out the area of its incircle
can be expressed purely by multiplying and dividing combinations of these lengths. Moreover,
the answer is the simplest possible one consistent with limiting cases, dimensional analysis, and
symmetry. Guess it!
Solution. In the limiting case a = b + c, the triangle collapses and the area must be zero, which
means the answer must be proportional to b + c − a. But the answer should also be symmetric
between exchanging a, b, and c, so it must be proportional to (b + c − a)(c + a − b)(a + b − c). The
dimension of this quantity is one too high, so we need to divide by a length, and the only possibility
consistent with symmetry is a + b + c. Finally, the overall constant can be fixed using the special
case of an equilateral triangle, giving the result
A =
π
4
(a + b − c)(b + c − a)(c + a − b)
a + b + c
.
Incidentally, the area of the circumcircle is π(abc)2/((a + b + c)(a + b − c)(b + c − a)(c + a − b)).
While most of the denominator makes sense from limiting cases, the overall expression is certainly
32
Kevin Zhou Physics Olympiad Handouts
harder to guess, since powers of abc and a+b+c could cancel while preserving all the limiting cases
and symmetry. That just goes to show that limiting cases can only get you so far. In some sense,
“real” math starts once all the easy information accessible to methods like these has been accounted
for.
While we won’t have more questions that are explicitly about dimensional analysis or limiting
cases, these are not techniques but ways of life. For all future problems you solve, you should be
constantly checking the dimensions and limiting cases to make sure everything makes sense.
5 Manipulating Differentials
You might have been taught in math class that manipulating differentials like they’re just small,
finite quantities, and treating derivatives like fractions is “illegal”. But it’s also very useful.
Idea 8
Derivatives can be treated like fractions, if all functions have a single argument.
The reason is simply the chain rule. The motion of a single particle only depends on a single
parameter, so the chain rule is just the same as fraction cancellation. For example,
dv
dt
=
d
dt
v(x(t)) =
dv
dx
dx
dt
which shows that “canceling a dx” is valid. Similarly, you can show that
dy
dx
dx
dy
= 1
by considering the derivative with respect to x of the function x(y(x)) = x.
As a warning, for functions of multiple arguments, the idea above breaks down. For example,
for a function f(x(t),y(t)), the chain rule says
df
dt
=
∂f
∂x
dx
dt
+
∂f
∂y
dy
dt
where there are two terms, representing the change in f from changes only in x, and only
in y. Therefore, when we start studying thermodynamics, where multivariable functions are
common, we will treat differentials more carefully. But for now the basic rules will do.
Remark: Rigorous Notation
Math students tend to get extremely upset about the above idea: they say we shouldn’t use
convenient notation if it hides what’s “really” going on. And they’re right, if your goal is
to put calculus on a rigorous footing. But in physics we have no time to luxuriate in such
rigor, because we want to figure out how specific things work. The point of notation is to
help us do that by suppressing mathematical clutter. A good notation suppresses as much
as possible while still giving correct results in the context it’s used.
33
Kevin Zhou Physics Olympiad Handouts
To illustrate the point, note that elementary school arithmetic is itself an “unrigorous” nota-
tion that hides implementation details. If we wanted to be rigorous about, say, defining the
number 2, we would write it as S(1) where S is the successor function, obeying properties
specified by the Peano axioms. And 4 is just a shorthand for S(S(S(1))), so 2+2 = 4 means
S(1) + S(1) = S(S(S(1))).
Even this is not “rigorous”, because the Peano axioms don’t specify how the numbers or
the successor function are defined, just what properties they have to obey. To go deeper,
we could define the integers as sets, and operations like + in terms of set operations. For
example, in one formulation, we start with nothing but the empty set ∅ and define
4 = S(S(S(1))) = {∅,{∅},{∅,{∅}},{∅,{∅},{∅,{∅}}}.
People have seriously advocated for 1st grade math to be taught this way, which has always
struck me as insane. You can always add more arbitrary layers of structure underneath the
current foundation, so such layers should only be added when absolutely necessary.
Here’s another example, inspired by the physics education research literature. For uniformly
accelerated motion starting from rest, v(t) = at, what is v(x)? Physics students would say
that v(x) =
√
2ax by the kinematic equations, while math students would say v(x) = ax
by the definition of a function. Who is correct? The point is that basic physics and math
courses use functions differently. In introductory physics, we often denote several distinct
mathematical functions with the same symbol, if they all represent the same physical
quantity. (Otherwise, the simplest projectile motion problem would need half the alphabet.)
By contrast, basic math courses carefully distinguish functions, but then denote distinct
physical quantities with the same symbol: 1m, 1cm, and 1s are all written as 1.
The crucial point is that nobody is wrong. There is no One True Definition of notation, which
is ultimately just squiggly marks people make by dragging graphite cylinders against sheets
of wood pulp. Every community makes its own notation for its own needs. And any notation
system has to forget about something, or else it would be too clunky to do anything.
Remark: Advanced Notation
As an addendum to the previous remark, it turns out that as you get deeper into math and
physics, notation tends to converge. For example:
• The physicist’s “wrong” use of v(t) and v(x) can be formalized by differential geometry:
here v is a scalar field defined on the particle’s path, which is a one-dimensional manifold,
and v(t) and v(x) are parametrizations of it in different coordinate charts.
• In math classes, vectors are anything you can take linear combinations of, but in physics
classes we also require that they specify a direction in physical space, which math students
often criticize as wrong, or meaningless. But the physicist is actually using more advanced
math, which the math student doesn’t know yet: the physicist’s vector is an element of
a vector space carrying the fundamental representation of SO(3).
34
Kevin Zhou Physics Olympiad Handouts
• Most vectors flip sign under an inversion of space, r → −r and p → −p, but “axial vectors”
such as L = r×p don’t. This also strikes many math students as a blatant inconsistency,
but the reality is again that an axial vector is just a more advanced mathematical object
they haven’t met yet, specifically a rank 2 differential form, as discussed in M8.
• More generally, the “unrigorous” manipulations of differentials above, which we showed
give you the right answer anyway, gain a rigorous footing in terms of differential forms.
In fact, they become the preferred way to denote integration on general manifolds.
Arguments about notation are mostly raised by beginning students, who see the one way
they know as the only possible way. Professionals know it both ways, and adjust as needed.
Example 15
Derive the work-kinetic energy theorem, dW = F dx.
Solution
Canceling the mass from both sides, we wish to show
1
2
d(v2
) = adx.
To do this, note that
1
2
d(v2
) = v dv =
dx
dt
dv =
dv
dt
dx = adx
as desired. If you’re not satisfied with this derivation, because of the bare differentials floating
around, we can equivalently prove that F = dW/dx, by noting
dW
dx
= mv
dv
dx
= mv
dv
dt
dt
dx
= m
dv
dt
= F.
