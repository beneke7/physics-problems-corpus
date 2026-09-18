---
id: "kevin-zhou-m1-p003"
source: "kevin-zhou"
native_id: "KZ-M1-P003"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-m1-p003"
topic: [mechanics]
subtopic: [drag, differential-equations, harmonic-motion, linear-systems]
math_tools: [calculus, differential-equations, complex-numbers]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: true
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/M1.txt"
source_url: "sources/kevin_zhou/site/handouts/M1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Candidate classified as Genuinely new in the Kevin Zhou overlap audit."
solution_language: en
---

bounces elastically, experiencing the same quadratic drag as in problem 2. Find the maximum
    height to which it subsequently rises. (Hint: don’t try to use your results from problem 2.)
       Remark
       How does the top speed v of a rowboat depend on the number N of rowers? A light, fast-
       moving rowboat experiences quadratic friction, so that the drag force on it is proportional
       to v 2 A, where A is the submerged cross-sectional area of the boat. A boat designed for N
       rowers will have a submerged volume V ∝ N , and a streamlined shape so that A ∝ V 2/3 .
       Thus, the required power input is

                                             P = F v ∝ v 3 N 2/3 .

       The power output by the rowers scales as N , and combining these results gives the amazingly
       weak dependence v ∝ N 1/9 , which agrees decently with Olympic rowing times. This estimate
       is from the fun book 100 Essential Things You Didn’t Know About Sport by Barrow.

       Idea 1
       An ordinary differential equation is any equation involving a quantity x(t) and its derivatives.
       In physics, we are usually concerned with differential equations which are at most second-
       order, meaning it can contain x, its first derivative ẋ = v, and its second derivative ẍ = a,
       but no higher derivatives. This implies the solution can be determined by an initial position
       and initial velocity. (First-order differential equations require only an initial position, and
       can often be solved by separation and integration.)

       Here we will also focus on the case where the differential equation is also linear and homoge-
       neous, meaning that each term is directly proportional to x, ẋ, or ẍ. For example, a damped
       driven harmonic oscillator is described by
                                              mẍ = −bẋ − kx.
       Solutions to such differential equations obey the superposition principle: if x1 (t) and x2 (t)
       are both solutions, so is c1 x1 (t) + c2 x2 (t). The superposition principle still applies if the
       coefficients m, b, and k depend on time, but we’ll focus on the time-translation invariant case.

       If we added a driving force f (t) to the above equation, the differential equation would no
       longer be homogeneous. We’ll discuss this case further in M4.


                                                      2


    Kevin Zhou                                                              Physics Olympiad Handouts


       Idea 2
       Linear, homogeneous, time-translation invariant differential equations can all be solved by
       one method. First, note that we can promote x(t) to a complex variable x̃(t) and solve the
       differential equation over the complex numbers. As long as we have a complex solution, we
       can recover a real solution by taking the real part. We then guess a complex exponential

                                                 x̃(t) = eiωt .

       Plugging this into the differential equation will yield the allowed values of ω, and the general
       solution can be found by superposing the complex exponentials. This works for almost all
       such equations; you’ll handle the rest in problem 7.

       Example 2

       Solve the simple harmonic oscillator, mẍ + kx = 0, using the above principles.

       Solution
       First, we pass to a complex differential equation,

                                                ¨ + kx̃ = 0.
                                               mx̃

       We guess x̃(t) = eiωt . Plugging this in and using the chain rule gives

                                           m(iω)2 eiωt + keiωt = 0

       and canceling eiωt and solving gives two solutions,
                                                              p
                                         ω = ±ω0 ,     ω0 =    k/m.

       Since this is a second-order linear differential equation, the general solution is given by the
       superposition of these two complex exponentials,

                                          x̃(t) = Aeiω0 t + Be−iω0 t

       where A and B are general complex numbers. The real part of x̃(t) satisfies the original real
       differential equation ma + kx = 0, and is

                                     Re x̃(t) = C cos(ω0 t) + D sin(ω0 t)

       where C and D are real numbers, i.e. a general sinusoid with angular frequency ω0 .
