---
id: solution-document-ipho-2006-t1-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2006/T1_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [ipho-2006-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2006/T1_S.pdf."
---

SOLUTIONS to Theory Question 1
                                                             a
Geometry      Each side of the diamond has length L =            and the dis-
                                                           cos θ
                                      a
tance between parallel sides is D =       sin(2θ) = 2a sin θ. The area is the
                                    cos θ
product thereof, A = LD, giving

1.1                                     A = 2a2 tan θ .

The height H by which a tilt of φ lifts OUT1 above IN is H = D sin φ or


1.2                                   H = 2a sin θ sin φ .


Optical path length Only the two parallel lines for IN and OUT1 matter,
each having length L. With the de Broglie wavelength λ0 on the IN side and
λ1 on the OUT1 side, we have
                                                                  !
                           L   L      a        λ0
                   ∆Nopt =   −   =          1−    .
                           λ0 λ1   λ0 cos θ    λ1

The momentum is h/λ0 or h/λ1 , respectively, and the statement of energy
conservation reads
                                 !2                   !2
                      1     h            1       h
                                      =                    + M gH ,
                     2M     λ0          2M       λ1

which implies                         s
                           λ0                   gM 2 2
                              =           1−2       λ H.
                           λ1                    h2 0
Upon recognizing that (gM 2 /h2 )λ20 H is of the order of 10−7 , this simplifies
to
                          λ0           gM 2
                              = 1 − 2 λ20 H ,
                          λ1            h
and we get
                                      a gM 2 2
                       ∆Nopt =                  λH
                                  λ0 cos θ h2 0
or


                                            1


1.3                                    gM 2 2
                           ∆Nopt = 2       a λ0 tan θ sin φ .
                                        h2

A more compact way of writing this is

                                            λ0 A
1.4                               ∆Nopt =        sin φ ,
                                             V

where

1.4                   V = 0.1597 × 10−13 m3 = 0.1597 nm cm2

is the numerical value for the volume parameter V .
    There is constructive interference (high intensity in OUT1) when the optical
path lengths of the two paths differ by an integer, ∆Nopt = 0, ±1, ±2, . . ., and
we have destructive interference (low intensity in OUT1) when they differ by
an integer plus half, ∆Nopt = ± 21 , ± 32 , ± 52 , . . . . Changing φ from φ = −90◦
to φ = 90◦ gives
                                    φ=90◦          2λ0 A
                            ∆Nopt            =             ,
                                    φ=−90◦            V
which tell us that

                                                  2λ0 A
1.5                               ] of cycles =         .
                                                   V


Experimental data         For a = 3.6 cm and θ = 22.1◦ we have A = 10.53 cm2 ,
so that

                                19 × 0.1597
1.6                      λ0 =               nm = 0.1441 nm .
                                 2 × 10.53

And 30 full cycles for λ0 = 0.2 nm correspond to an area

                                30 × 0.1597
1.7                      A=                 cm2 = 11.98 cm2 .
                                  2 × 0.2



                                        2
