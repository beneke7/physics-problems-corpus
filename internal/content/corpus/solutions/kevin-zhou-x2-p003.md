---
id: kevin-zhou-x2-p003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-x2-p003
solution_type: author
source_document: solution-document-kevin-zhou-x2sol
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/X2Sol.pdf."
---

[3] Problem 3. Consider the process by which an electron absorbs a single photon, e− + γ → e−.
(a) Show that this process is forbidden by energy-momentum conservation. By time reversal,
emission of a single photon should be forbidden as well. This is quite puzzling, since we already
know of many processes where something like absorption or emission seems to happen.
(b) Can an electron in an isolated atom absorb a single photon? If so, why doesn’t the reasoning
in part (a) work? If not, how can atoms absorb photons at all, as described in X1?
(c) Can an isolated nucleus emit single photons? If so, why doesn’t the reasoning in part (a)
work? If not, how can gamma decay occur?
(d) Can an isolated electron absorb or emit classical electromagnetic radiation? If so, why doesn’t
the reasoning in part (a) work? If not, how can Thomson scattering (covered in E7) happen?
Solution. (a) Let c = 1 and consider the reference frame where the electron was initially at rest
with mass m. After the collision with the photon with energy and momentum equal to Eγ,
the electron will have energy m + Eγ and momentum Eγ. However, since E2 = p2 + m2, we
get m2 +2Eγm+E2
γ = E2
γ +m2, reducing to 2Eγm = 0, which is a contradiction (neither the
mass of an electron nor the energy of the photon is 0).
(b) Yes, an electron in an atom can absorb a photon. The issue in part (a) is that to absorb a
photon, the rest mass of the system absorbing must increase (which doesn’t happen for a lone
electron). When an electron is orbiting an atom, it has potential energy associated with its
interaction with the nucleus, and when it absorbs a photon, the electron jumps to a higher
energy state, which increases the rest mass-energy of the atom.
(c) Yes, by the same logic as part (b). A nucleus is a composite object with internal energy levels,
and it can emit a gamma ray when it falls to a lower energy state.
(d) No, this process is impossible, because the same relativistic kinematics arguments hold whether
the radiation is classical or not. But it isn’t in contradiction with Thomson scattering, which
is the classical analogue of e− + γ → e− + γ. (Note that whenever we talked about the
absorption of electromagnetic radiation, it was in the context of electrons inside matter, where
the matter can absorb the excess momentum.)
Idea 4
Radioactive decay is a memoryless process: in an infinitesimal time interval dt, any nucleus has
a probability λdt of decaying, regardless of its previous history. As a result, the probability
5
Kevin Zhou Physics Olympiad Handouts
that a nucleus remains undecayed, provided that it hadn’t decayed at t = 0, falls exponentially,
p(t) = e−λt
.
The mean lifetime of the nucleus is τ = 1/λ.
If we have N0 ≫ 1 undecayed nuclei at time t = 0, the number of nuclei left is approximately
N(t) ≈ N0p(t) = N0e−λt
.
The activity A(t) is the rate of decay events, and also falls exponentially,
A(t) =
dN(t)
dt
= λN0e−λt
.
