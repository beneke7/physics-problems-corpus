---
id: nbpho-2024-sticky-ball
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2024-sticky-ball
solution_type: official
source_document: solution-document-nbpho-2024-s
source_pdf: cache/phoxiv/nbpho/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2024_S.pdf."
---

3. STıCĸY BALL (4 points) — Solution by
Jaan Kalda, Tudor Plopeanu, grading schemes
by Eppu Leinonen.
Let the radius of the neck be ρ ≪ R thus
the force from surface tension at the contact
of the sphere is negligible (angle to the ho‐
rizontal ≈ 0). Then, the curvature radius
of the meniscus r ≪ ρ can be found from
the intersecting secants theorem applied on
a point C on the bottom edge of the neck re‐
lative to the ball and approximating that the
point T is (near) the intersection of CD and
the circle: 2r · 2R ≈ ρ2
. On the drawing,
AC2
≈ CT · CD and we approximate CT
as 2r, R + r as R, and AC as ρ. The pres‐
sure difference between the water and the
surroundingairis∆p = σ/r. Itstotalvertical
component is equal to its amplitude times
the vertical cross‐section S = πρ2
. As such,
the total vertical force on the ball difference
between the two cases (with and without wa‐
ter) is ∆F ≈ σπρ2
/r = 4πσR.
Grading: (preliminary) Note that differing
sign conventions are tolerated
• Stating that the meniscus is (roughly) in‐
verse spherical or usage of constant r
to characterise the meniscus as inverse
spherical (0.5pts)
• r ≪ ρ ≪ R (0.1pts)
• Statingthatsurfacetensionfromfromcon‐
tact is negligible or ∆F comes from the
pressure difference (either explicitly or im‐
plicitly) (0.5pts)
• 2r · 2R ≈ ρ2
(0.7pts) (if not found, partial
points can be earned as below)
– CT ≈ 2r (0.1pts)
– R + r ≈ R (0.1pts)
– AC ≈ ρ (0.2pts)
– AC2
≈ CT · CD or statement of inter‐
esecting secants theorems (0.3pts)
• ∆p = σ/r (1pts) (if not found, partial
points can be earned as below)
– ∆p = σ(1/r1 + 1/r2) or any attempt to
use a form of the Laplace‐Young equa‐
tion (0.2pts)
– ∆p = σ(1/ρ − 1/r) (0.3pts)
• S = πρ2
(correct effective are for pressure)
(0.5pts)
• ∆F = S∆p (0.5pts)
• ∆F ≈ 4πσR (0.2pts) (0.1 pts for each of
the following)
– ∆F > 0 or noting that the contact force
increases
– Correct dimensionless factor of 4π and
correct dimensions (only if approach is
correct)
Solution 2 by Eppu Leinonen
Thepositionofthemeniscuscanbepara‐
meterised using the angle θ = ̸ TOA. The
meniscus is small as the amount of water
is small. Thus |θ| ≪ 1 and the radii can
be approximated as ρ = Rsinθ ≈ Rθ and
2r ≈ R(1 − cosθ) ≈ Rθ2
/2. The change
in normal force due to surface tension is
∆Fσ = 2πσρsinθ ≈ 2πσRθ2
≈ 0. Using
the Young‐Laplace equation ∆p = σ(1/ρ −
1/r) ≈ σ(1/θ − 4/θ2
). Thus the total change
in normal force due to pressure difference is
∆Fp = −S∆P = −πρ2
∆P ≈ πσR(4 − θ) ≈
4πσR2
. I.e. ∆F = ∆Fp + ∆Fσ ≈ ∆Fp ≈
4πσR.
Grading: (preliminary) Note that differing
sign conventions are tolerated
• Stating that the meniscus is (roughly) in‐
verse spherical or usage of constant r
to characterise the meniscus as inverse
spherical (0.5pts)
• |θ| ≪ 1 (0.1pts)
• ρ ≈ Rθ (0.2pts)
• AC ≈ ρ (0.2pts)
• r ≈ Rθ2
/4 (0.3pts)
• ∆Fσ ∝ θ2
≪ ∆Fp oranystatementthatthe
force from surface tension is negligible or
∆F = ∆Fp (0.5pts)
• ∆p = σ/r (1pts) (if not found, partial
points can be earned as below)
– ∆p = σ(1/r1 + 1/r2) or any attempt to
use a form of the Laplace‐Young equa‐
tion (0.2pts)
– ∆p = σ(1/ρ − 1/r) (0.3pts)
• S = πρ2
(correct effective area for pres‐
sure) (0.5pts)
• ∆Fp = −S∆p (0.5pts)
• ∆F ≈ 4πσR (0.2pts) (0.1 pts for each of
the following)
– ∆F > 0 or noting that the contact force
increases
– Correct dimensionless factor of 4π and
correct dimensions (only if approach is
correct)
Note: A common approach was to use the
method of virtual displacement to solve for
the force caused by the meniscus. However,
it turns out that δAlg ∝
√
rδr (the area of
the meniscus‐air interface is roughly half of
a spherical toroid with radii ρ and r) which
means that the change in potential energy
due to the change in surface area is negli‐
gible (r ≪ R). Thus the virtual work done
by lifting the sphere only counteracts the vir‐
tual work done by the pressure, which re‐
duces the problem back to either solution 1
or solution 2. Thus no points are granted
for just mentioning this approach and telling
that δU = σδAlg.
Solution 3 using virtual displacement (by
JaanKalda). Letusdenotethecontactareaof
water and plate with A = πρ2
; then, the con‐
tact area of water and ball is also approxim‐
ately A. Let the ball touch initially the plate,
and then be raised by dx. Since the volume
of water is conserved, no work is made by
atmospheric pressure, and 2rdA = Adx,
where dA is the change of the contact area;
hence, dA
dx = A/2r. Meanwhile, for zero con‐
tact angle, the difference of surface energies
at the air‐solid interface, and at the water‐
solid interface equals to the surface energy
of the water‐air interface. This fact can be
expressed in terms of the three surface ten‐
sion coefficients denoted with σ1, σ2, and σ,
respectively: σ1 − σ2 = σ cosα = σ. During
our virtual displacement, the air‐water inter‐
face remains almost constant; meanwhile,
air‐solid interface is increased by 2dA (con‐
tributed equally by the ball and plate sur‐
faces). Therefore, the surface energy is in‐
creased by dU = (σ1 −σ2)2dA = 2σdA. Now
we can find force as F = dU
dx = 2σdA
dx =
σA/r. This is the same expression we ob‐
tained from Young‐Laplace equation. From
this point on, the solution follows the steps
made above.
Grading: (preliminary) Note that differing
sign conventions are tolerated.
• Onlythecontactareabetweenthesolidand
the liquid changes notably (0.5pts)
• dA
dx = A/2r (0.5pts)
• σ1 − σ2 = σ (0.2pts)
• dU = 2(σ1 − σ2)dA (0.3pts)
• F = dU
dx (only if A has been identified cor‐
rectly) (0.3pts)
• F = σA/r (0.2pts)
These replace noting that ∆Fσ ≈ 0, ∆p =
σ/r and∆F = S∆pfromtheothersolutions.
