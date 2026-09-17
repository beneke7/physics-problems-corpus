---
id: ipho2012-mosaic-1
source: ipho2012-mosaic
handout: "Physics Solver's Mosaic"
section: "1. Minimum or maximum?"
kind: essay
author: Jaan Kalda
meta_technique: [extremization, stability-analysis]
example_problems: [physicscup-2012-p1]
figure_files: []
url: https://web.archive.org/web/20120326164824/http://www.ipho2012.ee/physicscup/physics-solvers-mosaic/1-minimum-or-maximum/
status: stable
---

# 1. Minimum or maximum?

It is well-known that a system is stable at the minimum of its potential energy. But why? Why is a minimum different from a maximum? For Fermat' principle it is clear: there is no longest optical path between two points – the ray could just go "zig-zag" -, but there is definitely one which is the shortest!

The reason is simple – at an equilibrium state, the kinetic energy has always minimum (as long as masses are positive). What we actually do need for a stability is a conditional extremum of one conserved quantity (such as the net energy), under the assumption that the other conserved quantities are kept constant (unconditional extremum is OK, too). Consider the motion of a body along x-axis and let us describe it on the phase plane, with coordinates x and p (the momentum). The overall energy is E = U(x)+p2/2m. Now, if we depict this energy as a surface in 3-dimensional space with coordinates x, p and E, the point describing the state of the system will  move along the intersection line of that surface with a horizontal plane E=Const. At the minimum of U(x), with p=0, this intersection line would be just a single point, because this is the lowest point of that surface. The near-by trajectories will be obtained if we ascend the horizontal plane a little, E =Emin+e, so that it no longer just touches the surface, but cuts a tiny ellips from it.  All the points of that trajectory (the ellips) are close to the equilibrium point, so the sate is, indeed, stable.

It appears that a system can be stable also because of a conditional maximum of the net energy: while an unconditional extremum of the kinetic energy can only be a minimum, things are different for conditional extrema.  Perhaps the simplest example is the rotation of a rigid body. Let us consider a rectangular brick with length a, width b, and thickness c (a>b>c). Let Ic be its moment of inertia for the axis passing its centre of mass and perpendicular to the (a,b)-plane; Ib and Ia are defined in a similar way. For a generic case, the moment of inertia I will depend on the orientation of the rotation axis, but it is quite clear that Ic >= I  >= Ia (it can be shown easily once you learn how to use tensor calculations). Now, let us throw the brick rotating into air and study the motion in a frame which moves together with the centre of mass of the brick (in that frame, we can ignore gravity). There are two conserved quantities: angular momentum L, and rotation energy K=L2/2I . We see that for a fixed L, the system has minimal energy for I = Ic (axis is parallel to the shortest edge of the brick), and maximal energy for  I = Ia (axis is parallel to the longest edge of the brick). You can easily check experimentally that both ways of rotation are, indeed, stable! Not so for the axis parallel to the third edge… This phenomenon is demonstrated in a video made by NASA on the International Space Station.

Well, actually the rotation with the minimal energy is still a little bit more stable than that of with the maximal energy; the reason is in dissipation. If we try to represent the motion of the system in the phase space (as described above), we would start with touching a top of an hill with a horizontal plane E =Emax (so that the intersection is just a point), but due to dissipation, the energy will decrease,  E =Emin – e, and the phase trajectory would be a slowly winding-out spiral. So, while you are probably used to know that dissipation draws a system towards a stable state, here it is vice versa, it draws the system away from the stable state!

—

Jaan Kalda, Academic Committee of IPhO-2012

---
*From Jaan Kalda's "Physics Solver's Mosaic", Academic Committee of IPhO-2012. Transcribed faithfully from the born-digital WordPress source (Wayback snapshot); inline math recovered from WP-LaTeX `alt` attributes.*
