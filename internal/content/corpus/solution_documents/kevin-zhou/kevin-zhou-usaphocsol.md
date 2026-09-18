---
id: solution-document-kevin-zhou-usaphocsol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/USAPhOCSol.pdf
extraction_method: pdftotext-raw
mapped_problems: []
verification_status: flagged
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/USAPhOCSol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Practice USAPhO C
INSTRUCTIONS
DO NOT OPEN THIS TEST UNTIL YOU ARE TOLD TO BEGIN
• Work Part A first. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 90. Do not look at Part B during this time.
• After you have completed Part A you may take a break.
• Then work Part B. You have 90 minutes to complete all problems. Each problem is worth an
equal number of points, with a total point value of 90. Do not look at Part A during this time.
• Show all your work. Partial credit will be given. Do not write on the back of any page. Do not
write anything that you wish graded on the question sheets.
• Start each question on a new sheet of paper. Put your AAPT ID number, your proctor’s AAPT
ID number, the question number, and the page number/total pages for this problem, in the
upper right hand corner of each page. For example,
Student AAPT ID #
Proctor AAPT ID #
A1 – 1/3
• A hand-held calculator may be used. Its memory must be cleared of data and programs. You
may use only the basic functions found on a simple scientific calculator. Calculators may not
be shared. Cell phones, PDA’s or cameras may not be used during the exam or while the exam
papers are present. You may not use any tables, books, or collections of formulas.
• Questions with the same point value are not necessarily of the same difficulty.
• For this exam alone, you may use a ruler and a movable hard surface, such as a
portable whiteboard, an iPad, a cutting board, or anything similar. You may also
use a small mass, such as a paperweight or a book.
• In order to maintain exam security, do not communicate any information about the questions
(or their answers/solutions) on this contest.
Possibly Useful Information. You may use this sheet for both parts of the exam.
1

Kevin Zhou Physics Olympiad Handouts
Part A
Question A1
A solid homogeneous metal ball of radius R is dropped with its lowest point a height h above the
floor. It has zero initial velocity, and an initial angular velocity of ωx̂ about its center of mass.
After impact, the ball rebounds so that the maximum subsequent height of its lowest point is αh.
Assume the impact time is negligible, and let the mass of the ball be m, the acceleration due to
gravity be g, and the coefficient of kinetic friction between the ball and floor be µk.
1. Find the minimum value of ω so that the ball slips throughout the entire impact.
2. Assuming ω is above this minimum value, find the distance between the ball’s first and second
impact points.
Solution. This is half of IPhO 1991, problem 1. The answers are:
1.
ω =
7
2
µ
R
p
2gh(1 +
√
α)
2.
∆x = 4µh(α +
√
α)
Question A2
A spaceship starting at the center of the Milky Way begins to move away from it, perpendicular
to its plane, at a constant speed v. If one looks out from the window of the spaceship, one sees a
strangely distorted image of the galaxy. To understand this, suppose a light ray from the galaxy
intercepts the spaceship at an angle θ to the forward direction, as shown.
In the frame of the spaceship, the angle is instead θ′.
1. Using the relativistic velocity transformations
u′
x =
ux − v
1 − vux/c2
, u′
y =
uy
γ(1 − vux/c2)
find an expression for θ′.
2. Suppose light from the edge of the galaxy comes in at an angle θ = 150◦. How fast does the
spaceship have to be moving for this to correspond to an angle θ′ = 30◦? For all future parts,
assume the spaceship is moving at this speed.
2

Kevin Zhou Physics Olympiad Handouts
3. For what values of θ′ can light from the galaxy be seen?
4. Suppose there are pulsars distributed throughout the galaxy, which pulse with frequency 1Hz
in their rest frames. What pulse frequencies does an observer inside the spaceship see with
their eyes, from pulsars that are at the center of the galaxy, and at the edge?
5. Qualitatively, how does the image of the galaxy change as the spacecraft continues at constant
speed?
Solution. This is adapted from tutorial 36 of Physics to a Degree. The answers are:
1. Using ux = −ccosθ and uy = −csinθ, we have
tanθ′
=
u′
y
u′
x
=
uy/γ
ux − v
.
2. Plugging in numbers gives v = 4
√
3/7 = 0.9897c.
3. The galaxy occupies all θ′ > 30◦, with its outer part “wrapped around” the ship, and its
center appearing directly behind.
4. Let’s now set c = 1. There are many possible methods, but we can use the Lorentz transfor-
mation.
For a photon emitted from the center of the galaxy, we have pµ = (E,E,0,0) in the galaxy’s
frame. In the ship’s frame, E′ = γ(E − vE) =
p
(1 − v)/(1 + v)E = 0.072E. (You can also
just skip right to this step if you remember the relativistic Doppler shift.) Then f′ = 0.072Hz.
For a photon emitted from the edge of the galaxy, we have
pµ
= (E,
√
3E/2,E/2,0)
in the galaxy’s frame. We can now Lorentz transform to the ship’s frame explicitly, though
there’s a slick way to think about the result. In the ship’s frame, py′
= py = E/2, but we
also know that |py′
/px′
| = |py/px|, because θ′ = π − θ, so we know that px′
= −px. But since
E = |p| in all frames, we conclude that E′ = E, so f′ = 1Hz.
5. Over time, the edge of the galaxy moves to larger θ′, while redshifting more and more, to
match the frequency of light from the center.
Question A3
Devise and perform an experiment to find the coefficients of static friction between (1) paper and
paper, and (2) paper and graphite mixture, the residue left behind when one draws on paper with
a pencil, as accurately as possible. You may use a ruler, a movable hard surface, a mass, and the
pencil and paper you brought to this exam.
To receive credit, you should describe the method you used and justify why you have chosen it.
You do not have to do any graphing for this problem. State your results for the two coefficients of
friction along with uncertainties. (Most of the credit for this question is for producing a sensible
experimental method, not your final numeric results.)
3

Kevin Zhou Physics Olympiad Handouts
Solution. This is AuPhO 2013, problem 14. It’s an example of why I like the AuPhO, despite its
occasional typos and ambiguities.
There are many possible solutions. The most crucial point is that you shouldn’t use any method
that depends on the weight of the paper itself (e.g. just putting a scrap of paper on another piece of
paper and tilting), because it’s far too small to get reliable results. The normal and friction forces
will be overwhelmed by other, irrelevant forces, like air resistance or even electrostatic forces.
One possible method is to fold a little box out of paper and put other stuff in it to weigh it down.
Then, for the first part, put the box on another sheet of paper on a surface, tilt the surface until
sliding begins, measure the angle, and use µ = tanθ. For the second part, shade in the bottom of
the box with your pencil and repeat.
Another possible method is to directly apply an extra vertical force by pushing downward with
your pencil, taking care to keep your pencil as vertical as possible. For the first part, you push
the pencil on a scrap of paper which is on top of another sheet of paper on a tilted surface. For
the second part, you can directly press the pencil onto the sheet of paper, and see when the pencil
slips. For an effective measurement, you want to avoid the problem with normal forces at corners
mentioned in M2. That is, since a sharp tip might deform the paper, you should make sure the tip
of your pencil is blunt.
4

Kevin Zhou Physics Olympiad Handouts
Part B
Question B1
A homogeneous disc A of mass m and radius RA moves on a plane in the x̂ direction with speed v.
The center of the disc is at a distance b from the x-axis. It collides with a stationary homogeneous
disc B whose center is initially located at the origin. Disc B has mass m and radius RB. Both discs
are initially nonrotating. The plane is frictionless, but the discs have friction with each other.
The parameter b is such that the two discs collide. Assume that:
• The velocities of the discs at their point of contact, in the direction perpendicular to the line
joining their centers, are equal after the collision.
• The magnitudes of the relative velocities of the discs along the line joining their centers are the
same before and after the collision.
Determine the velocities v′
A and v′
B of the discs after the collision.
Solution. This is most of IPhO 1994, problem 3, and it’s admittedly a bit tedious. The answer is:
v′
A,x =
5
6
b2
(RA + RB)2
v, v′
A,y =
5
6
b
p
(RA + RB)2 − b2
(RA + RB)2
v.
where v′
B is simply given by momentum conservation,
v′
B,x = v − v′
A,x, v′
B,y = −v′
A,y.
The official solution has more steps, but also a minor typo.
Question B2
Consider two very long, tightly wound cylindrical solenoids with n turns per unit length, total
length L, and cross-sectional areas A1 > A2. The second solenoid is placed concentrically inside
the first, so that the centers of the two coils coincide. Both solenoids are hooked up to constant
current sources I, so that they generate magnetic fields in the same direction.
1. Compute the total magnetic field energy. You may ignore fringe fields.
Now suppose that the second solenoid is moved a distance x to the right along its symmetry axis,
so that the centers of the two solenoids no longer coincide. You may assume that
√
Ai ≪ x ≪ L.
5

Kevin Zhou Physics Olympiad Handouts
2. Compute the total magnetic field energy when both coils are held in place at this position.
3. Find the electromotive forces E1 and E2 generated on the coils when the second one is pulled
further out with a velocity v.
4. Now suppose again that both coils are held in place. Find the force F needed to hold the
second coil in place, and indicate its direction.
Solution. This is a modification of NBPhO 2015, problem 9. The answers are:
1.
U0 = µ0n2
I2
L

3
2
A2 +
1
2
A1

2.
U = U0 − µ0n2
I2
|x|A2
3. The signs of these emfs act to increase the current, and their magnitudes are
|E1| = |E2| = µ0n2
IA2v.
4. We use the method of virtual work. Suppose the coils have constant current sources attached.
Moving by dx changes the field energy by −µ0n2I2A2 dx. At the same time, the current
source in coil i supplies energy Ei dQi = I dΦi, for a total of
I(dΦ1 + dΦ2) = −2µ0n2
I2
A2 dx.
So the energy in the current sources goes up by 2µ0n2I2A2 dx, while the field energy goes
down by µ0n2I2A2 dx, so the total energy goes up by µ0n2I2A2 dx. This must be equal to
F dx, so we conclude that
F = µ0n2
I2
A2
pointing outward.
That is, the coils attract each other, even though getting closer would increase the field energy.
This tricky sign is the same as the one you found for a similar situation with capacitors in E2.
6
