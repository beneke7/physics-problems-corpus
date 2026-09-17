---
id: kevin-zhou-notes-phy-ex004
source: kevin-zhou-notes
native_id: "phy Example 004"
origin: "Kevin Zhou personal physics notes"
language: en
translated: false
links_hu: kevin-zhou-notes-phy-ex004
topic: [classical mechanics]
subtopic: [small oscillations, normal modes]
math_tools: [linear algebra, differential equations]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "324-363"
archive_layer: reference_notes
source_role: explanatory_example
---

Example. Small oscillations with n degrees of freedom. Let’s start with the most general Lagrangian
up to second order in q and q̇. We can throw away constant terms, since they don’t do anything,
and q̇i terms, because they are total derivatives and don’t affect the equations of motion. If we
further suppose that q = 0 is an equilibrium point, then we rule out qi terms as well. Finally, qi q̇j
terms represent velocity-dependent forces, and for simplicity we’ll throw those out too. Then we
arrive at the Lagrangian
                                           1          1
                                     L = q̇T T q̇ − qT V q.
                                           2          2
Here, T and V can be taken symmetric with no loss of generality. The kinetic energy should always
be positive, so we further assume T is positive definite. Now the Euler–Lagrange equation is

                                              q̈ = T −1 V q

where the inverse exists since T is positive definite. The general solution to this linear equation of
motion can be found by superposing normal modes. Specifically, if we let q = q0 eiωt , then

                                         (T −1 V + ω 2 )q0 = 0.

Thus, the normal modes correspond to the eigenvectors of T −1 V . Since this matrix is symmetric,
there is a complete basis of normal modes, and all of the ω 2 are real, so ω is either real (representing
oscillations) or pure imaginary (representing exponential growth from an instability). We can avoid
the latter type of solution by demanding that V also be positive definite.
   To make the simplicity of the solutions more manifest, we may switch to “normal coordinates”.
Defining q = Aξ, the Lagrangian becomes
                                    1 T             1
                                 L = ξ̇ (AT T A)ξ̇ − ξT (AT V A)ξ.
                                    2               2
It is possible to simultaneously diagonalize T and V . To see this, let A = BC where C is orthogonal.
Then B can be chosen so that B T T B = I, by constructing B out of an orthogonal matrix that
diagonalizes T , and a diagonal matrix that scales its diagonal entries to one. We then have

                                AT T A = I,    AT V A = C T (B T V B)C.

Now B T V B is just another symmetric matrix, so C can be chosen to diagonalize it. Then
                                            1 T     1
                                         L = ξ̇ ξ̇ − ξT W ξ
                                            2       2
where W is the diagonal matrix with elements ωi2 . To relate this to the previous paragraph, note
that T −1 V A = AW , so that the columns of A contain the normal modes introduced above.
