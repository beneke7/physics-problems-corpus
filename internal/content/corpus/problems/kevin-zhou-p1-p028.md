---
id: "kevin-zhou-p1-p028"
source: "kevin-zhou"
native_id: "KZ-P1-P028"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p1-p028"
topic: [mathematical-methods]
subtopic: [dimensional-analysis, geometry, differentials]
math_tools: [dimensional-analysis, calculus]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/P1.txt"
source_url: "sources/kevin_zhou/site/handouts/P1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

[2] Problem 28. Consider a triangle with side lengths a, b, and c. It turns out the area of its incircle
    can be expressed purely by multiplying and dividing combinations of these lengths. Moreover,
    the answer is the simplest possible one consistent with limiting cases, dimensional analysis, and
    symmetry. Guess it!
       While we won’t have more questions that are explicitly about dimensional analysis or limiting
    cases, these are not techniques but ways of life. For all future problems you solve, you should be
    constantly checking the dimensions and limiting cases to make sure everything makes sense.


5    Manipulating Differentials
You might have been taught in math class that manipulating differentials like they’re just small,
finite quantities, and treating derivatives like fractions is “illegal”. But it’s also very useful.

    Idea 8
    Derivatives can be treated like fractions, if all functions have a single argument.

    The reason is simply the chain rule. The motion of a single particle only depends on a single
    parameter, so the chain rule is just the same as fraction cancellation. For example,
                                       dv  d          dv dx
                                          = v(x(t)) =
                                       dt  dt         dx dt
    which shows that “canceling a dx” is valid. Similarly, you can show that
                                              dy dx
                                                    =1
                                              dx dy

    by considering the derivative with respect to x of the function x(y(x)) = x.

    As a warning, for functions of multiple arguments, the idea above breaks down. For example,
    for a function f (x(t), y(t)), the chain rule says

                                        df   ∂f dx ∂f dy
                                           =       +
                                        dt   ∂x dt   ∂y dt
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

    To illustrate the point, note that elementary school arithmetic is itself an “unrigorous” nota-
    tion that hides implementation details. If we wanted to be rigorous about, say, defining the
    number 2, we would write it as S(1) where S is the successor function, obeying properties
    specified by the Peano axioms. And 4 is just a shorthand for S(S(S(1))), so 2 + 2 = 4 means

                                     S(1) + S(1) = S(S(S(1))).

    Even this is not “rigorous”, because the Peano axioms don’t specify how the numbers or
    the successor function are defined, just what properties they have to obey. To go deeper,


  we could define the integers as sets, and operations like + in terms of set operations. For
  example, in one formulation, we start with nothing but the empty set ∅ and define

                   4 = S(S(S(1))) = {∅, {∅}, {∅, {∅}}, {∅, {∅}, {∅, {∅}}}.

  People have seriously advocated for 1st grade math to be taught this way, which has always
  struck me as insane. You can always add more arbitrary layers of structure underneath the
  current foundation, so such layers should only be added when absolutely necessary.

  Here’s another example, inspired by the physics education research literature. For uniformly
  accelerated motion
               √      starting from rest, v(t) = at, what is v(x)? Physics students would say
  that v(x) = 2ax by the kinematic equations, while math students would say v(x) = ax
  by the definition of a function. Who is correct? The point is that basic physics and math
  courses use functions differently. In introductory physics, we often denote several distinct
  mathematical functions with the same symbol, if they all represent the same physical
  quantity. (Otherwise, the simplest projectile motion problem would need half the alphabet.)
  By contrast, basic math courses carefully distinguish functions, but then denote distinct
  physical quantities with the same symbol: 1 m, 1 cm, and 1 s are all written as 1.

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

    • Most vectors flip sign under an inversion of space, r → −r and p → −p, but “axial vectors”
      such as L = r × p don’t. This also strikes many math students as a blatant inconsistency,
      but the reality is again that an axial vector is just a more advanced mathematical object
      they haven’t met yet, specifically a rank 2 differential form, as discussed in M8.

    • More generally, the “unrigorous” manipulations of differentials above, which we showed
      give you the right answer anyway, gain a rigorous footing in terms of differential forms.
      In fact, they become the preferred way to denote integration on general manifolds.


      Arguments about notation are mostly raised by beginning students, who see the one way
      they know as the only possible way. Professionals know it both ways, and adjust as needed.
