---
id: "kevin-zhou-p1-p020"
source: "kevin-zhou"
native_id: "KZ-P1-P020"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "en"
translated: false
links_hu: "kevin-zhou-p1-p020"
topic: [mathematical-methods]
subtopic: [series-expansions, asymptotic-approximations]
math_tools: [calculus, series-complex]
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

[2] Problem 20. Find a series approximation for xy , given that y is small and x positive, but neither
    small nor exponentially huge. (Hint: to check if you have it right, you can try concrete numbers,
    such as y = 0.01 and x = 10. The series expansion variable may look a bit unusual.)
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
                                   1 x2 − 1                    x2
                                                         
                                                     1+x
                                     +         log          ≈     + O(x4 ).
                                   2      4x         1−x       3
       Since there’s a 1/x in front of the second term, you have to expand the logarithm to third
       order to get the right prefactor, like in problem 15, but the algebra’s a lot messier.


  The Soviet mathematician V.I. Arnold used to say that math has gone downhill since Newton,
  because people in that time could supposedly quickly evaluate the limit

                                      sin(tan(x)) − tan(sin(x))
                             lim                                      .
                            x→0 arcsin(arctan(x)) − arctan(arcsin(x))


  The first terms that don’t cancel are O(x7 ), giving
                                             7        7
                                         − 55x    107x      9
                                           1008 + 5040 + O(x )
                                   lim       7           7         = 1.
                                   x→0 − 341x    + 173x       9
                                          5040      5040 + O(x )

  This amazingly simple answer can be found with a very tricky geometric argument, of the
  style common in Newton’s Principia, though it’s hard to make it totally rigorous.

  Finally, as we will see in E2, the capacitance of two spheres of radius a separated by r ≫ a
  can be written as an infinite series in a/r. In his Treatise on Electricity and Magnetism (1891,
  section 146), Maxwell manually evaluated this series out to order (a/r)22 ! I don’t even know
  what the point of that was, but it illustrates why physicists took decades to fully comprehend
  the implications of Maxwell’s Treatise. Today, we teach the conceptual essentials of Newton
  and Maxwell’s physics, but the reason they’re giants is because they put their theories to
  work, in tough calculations we barely hear about today.

  Remark
  When a problem says α ≪ 1, what does it mean? Does it mean we are allowed to set
  α = 0? Or perhaps that we should always expand to first order in α? As you’ve seen
  from the above questions, it depends on the context. The rule is always that you want
  the simplest approximation that gives the essential physics for the problem you’re considering.

  For example, let’s return to problem 18, where we consider an electric dipole with d/x ≪ 1.
  If we just plugged in d = 0, we would get E(x) = 0 + O(d/x). That’s a mathematically
  true statement which does have physical meaning (i.e. that the far fields of dipoles are much
  smaller than those of individual charges), but in a problem it usually isn’t enough because
  you want to use an expression for E(x) to do something else. So in the problem, we kept the
  O(d/x) term. But if we had gone out to O(d2 /x2 ), we would have found

                                              2d 3d2
                                                                  
                                       q                     3   3
                          E(x) = −               + 2 + O(d /x ) .
                                    4πϵ0 x2 x       x

  If you then used this expression, in a problem that expects you to use only the O(d/x) term,
  you would probably get annoyingly complicated expressions. So does that mean you should
  always throw out quadratic terms? Of course not; sometimes they matter. For instance,
  the quadratic term above would be the leading effect if we cared about the deviation of
  the field of a finite-sized dipole from an ideal one. It is the “quadrupolar” part of the potential.

  Students often desire a single magic rule they can apply mechanically, but in physics, you
  really have to think through each case. However, if this sounds overwhelming, don’t worry.


         90% of approximations on the USAPhO and IPhO are pretty simple, and just boil down to

              sin x ≈ x,   cos x ≈ 1 − x2 /2,   (1 + x)n ≈ 1 + xn,         ex ≈ 1 + x,   log(1 + x) ≈ x.

         These are the only results that you have to know by heart.


    3      Numeric Solutions
         Idea 6
         In Olympiads, you may have to find numeric solutions for equations that can’t be solved
         analytically. A simple but reliable method is to “guess and check”, starting with a reasonable
         first guess (e.g. derived by solving an approximated version of the equation, or sketching the
         graphs of both sides), plugging it into both sides, then proceeding with binary search.
