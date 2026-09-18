---
id: usapho-2012-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2012-a3
solution_type: official
source_document: solution-document-usapho-2012-s
source_pdf: cache/phoxiv/usapho/2012_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2012_S.pdf."
---

Question A3
This problem inspired by the 2008 Guangdong Province Physics Olympiad
Two infinitely long concentric hollow cylinders have radii a and 4a. Both cylinders are insulators;
the inner cylinder has a uniformly distributed charge per length of +λ; the outer cylinder has a
uniformly distributed charge per length of −λ.
An infinitely long dielectric cylinder with permittivity   = κ 0, where κ is the dielectric constant,
has a inner radius 2a and outer radius 3a is also concentric with the insulating cylinders. The
dielectric cylinder is rotating about its axis with an angular velocity ω
 c/a, where c is the speed
of light. Assume that the permeability of the dielectric cylinder and the space between the cylinders
is that of free space, µ0.
a. Determine the electric field for all regions.
b. Determine the magnetic field for all regions.
Solution
a. Consider a Gaussian cylinder of radius r and length l centered on the cylinder axis. The
electric field is radial, so Gauss’s Law states that
I
E · dA =
qin
 0
⇒ 2πrEl =
λinl
 0
where λin is the linear charge density enclosed in the cylinder, so
E =
λin
2πr 0
r̂.
The field due to the hollow cylinders alone is therefore
Eapplied =
λ
2πr 0
r̂ ×

 
 
0 r < a
1 a < r < 4a
0 r > 4a.
However, the field within the dielectric is reduced by a factor κ, so that in total
E =
λ
2πr 0
r̂ ×

      
      
0 r < a
1 a < r < 2a
1/κ 2a < r < 3a
1 3 < r < 4a
0 r > 4a.
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part A 8
b. We can apply the results of the previous section to obtain the enclosed charge density λin as
a function of radius,
λin =

      
      
0 r < a
λ a < r < 2a
λ/κ 2a < r < 3a
λ 3 < r < 4a
0 r > 4a.
Defining
λi =

1 −
1
κ

λ
we conclude that a charge density −λi exists on the inner surface of the dielectric, a charge
density λi exists on the outer surface, and there is no charge on the interior.
As with the case of a very long solenoid, we expect the magnetic field to be entirely parallel
to the cylinder axis ẑ, and to go to zero for large r. Consider an Amperian loop of length l
extending along a radius, the inner side of which is at radius r and the outer side of which is
at a very large radius. We have on this loop
I
B · dl = µ0Iin.
Letting B be the magnitude of the magnetic field at radius r, we find
B =
µ0Iin
l
.
For r > 3a, Iin = 0, since the charge on the hollow cylinders is not moving. For 2a < r < 3a,
the loop now encloses the outer surface of the dielectric. In time 2π
ω a charge λil passes
through the loop, so the current due to the outer surface is
Iout =
λilω
2π
and thus this is Iin for 2a < r < 3a. For r < 2a, the loop now encloses both surfaces of the
dielectric; the inner surface contributes a current that exactly cancels the outer one, so again
Iin = 0. Putting this together,
B =
µ0ωλi
2π
ẑ ×

 
 
0 r < 2a
1 2a < r < 3a
0 r > 3a.
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part A 9
