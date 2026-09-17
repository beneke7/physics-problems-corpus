---
id: nbpho-2023-curling
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2023-curling
solution_type: official
source_document: solution-document-nbpho-2023-s
source_pdf: cache/phoxiv/nbpho/2023_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2023_S.pdf."
---

1. CURLıNG (8 points) — Solution by Jaan         (0.4 pts)                                                        dFx =         cos φdθ
Kalda, Oskar Vallhagen, grading schemes by Os­ • Solving for thit (0.4 pts)                                                  2π                      yielding, after simplifying and re‐inserting
kar Vallhagen.                                 • Inserting into expression for vs and final                                                          the expression for Ff′ ,
                                                                                                    Using the small parameter δ ≡ ωr/vs ≈
i) (1 point) As the stone is gliding over the    answer (0.2 pts)                                   ωr/v ≪ 1, we conclude that φ ≪ 1, hence                      ∫ 2π                  (       )
ice everywhere on the contact surface, the iii) (2 points) Consider the motion of a point           we can use approximation                                                               1
friction force is Ff x = µmg, i.e. the ac‐ at the ring in contact with the ice at an angle                                                              Ff x =          Ff′ x rdθ = µmg 1 − δ 2 .
                                                                                                                       (       )                                  0                        4
celeration is µg, directed in the negative x‐ θ from the x‐axis, moving at a velocity v as de‐                     µmg       1
direction (with the x‐direction pointing to‐ picted in the figure below. The components                     dFx ≈       1 − φ2 dθ.
                                                                                                                    2π       2
wards the target stone). Thus, we get          of this motion along the x and y axes can be                                                        Grading:
         dvs                                   seen to be vx = vs −ωr sin θ and vy = ωr cos θ,      The angle φ can be found from the sine • Understanding that the friction force is
             = −µg ⇒ vs = v0 − µgt.            respectively.                                        theorem
                                                                                                       (       )assuming sin    φ ≈ φ: φ ≈           everywhere antiparallel with the local ve‐
          dt                                                                                        sin π2 − θ ωrv ≈ cos θ vs ≡ δ cos θ. Alternat‐
                                                                                                                             ωr                      locity (0.4 pts)
                                                                                                    ively, a similarly accurate expression cab be  • Calculating the magnitude of the force per
Grading:                                                                                       vs                                                    unit length (0.3 pts)
                                                                         ωr         v               found by noting that
• Correct friction force (0.5 pts)                                                                                                                 • Correct expression for the x component
• Correct acceleration (0.2 pts)                                                ϕ                                                                    (0.2 pts)
                                                                                        vs                               vy     vy     ωr cos θ
• correct vs (0.3 pts)                                               θ−ϕ                                   φ ≈ tan φ =       ≈     =            .
                                                                                                                         vx     vs         vs      First solution:
ii) (1 point) The simplest way to obtain the                        y    r
                                                                                                                                                   • Approximate expression for Ff′ x or dFf x for
final velocity is to use energy conservation,                          θ                            Thus,
                                                                         x                                                                           small φ (0.3 pts)
noting that the friction force does a work                                                                               (                 )       • Expressing φ in terms of δ and θ (0.5 pts)
Wf = µmgs. Thus, we get                                                                                            µmg          δ2
                                                        R                                                   dFx =          1−      cos2 θ dθ.      • Correct integral and final answer (0.3 pts)
             2                    √                                                                                 2π           2
mv02     mvhit                                                                                                                                     Second solution:
      =        + µmgs ⇒ vhit = v02 − 2µgs.                                                                              ∫ 2π
  2        2                                                                                        Recognising that 0 cos θdθ = π, this can • Expressing Ff′ x or dFf x in terms of δ and θ
                                                                                                                                2

                                                                                                    be integrated to obtain                          (0.3 pts)
Grading:                                                                                                                                           • Approximate expression for Ff′ x or dFf x for
                                                                                                                             (            )
• Idea of using energy conservation (0.2 pts)                                                                                      ω2 r2             small δ (0.5 pts)
• Calculating the work done by the friction        The friction force per unit length has the                    Fx = µmg 1 −
                                                                                                                                    4vs2           • Correct integral and final answer (0.3 pts)
  force (0.3 pts)                                magnitude
• Correct total energy conservation equation                           µmg                                                                         iv) (2 points) For the torque τ ′ per unit length
                                                                 Ff′ =                              so that the final answer is                    (around the central axis of the stone), we see
  vs (0.3 pts)                                                         2πr
• Correct vhit (0.2 pts)                                                                                                     µmgω 2 r2             from the figure that the angle between the
                                                 everywhere on the circle in contact with the                     ∆Fx = −          2
                                                                                                                                         .         local force per unit length and the radius is
    Alternatively, one can first calculate the                                                                                  4vs                θ − φ, yielding
                                                 ice, as before, but is now directed opposite to
time thit before the stone hits the opponents    the local velocity v rather than the sliding ve‐
stone. Integrating the expression for vs up to                                                      The second way is by continuing
this time gives
                                                 locity vs . The component of the force density                                                                       τ ′ = Ff′ r sin (θ − φ).
                                                 in the x‐direction thus becomes                                     vx
                                                                                                         Ff′ x = Ff′
                             t2                                                         vx                           v                               From here on, there are again two ways to
             s = v0 thit − µg hit .                         Ff′ x = −Ff′ cos φ = −Ff′      .                              vs − ωr sin θ              continue. First, we can use Taylor series
                              2                                                         v                     = Ff′ √                                and keep only the linear term: sin (θ − φ) ≈
                                                                                                                      vs − 2vs ωr sin θ + ω 2 r2
                                                                                                                       2
Solving for thit , we get                                                                                                                            sin θ − φ cos θ; by using the previously ob‐
                        √                       From this point on, there are two ways                                    1 − δ sin θ                tained expression φ ≈ δ cos θ, we can express
                                                to work out the mathematical calculations.                    = Ff′ √                      .
                   v0      v02     2s           First, consider an infinitesimal arc of the                             1 − 2δ sin θ + δ 2
          thit =      −          −                                                                                                                                                               dθ
                   µg     µ2 g 2   µg           contact ring of central angle dθ; the friction                                                              dτ = µmgr(sin θ − δ cos2 θ)
                                                                                                    To second order in δ, we get, using the ap‐
                                                force exerted on it has magnitude dFf =             proximation suggested in the problem text
                                                                                                                                                                                                 2π
(the solution with the plus sign gives a negat‐ µmg dθ. The total force is obviously directed
                                                 2π
ive velocity). Inserting back into the expres‐ antiparallel                                         for x = −2δ sin θ + δ 2 and doing some ele‐      integration of which yields
                                                             to the velocity of the stone as y‐     mentary algebra,
sion for vs and simplifying gives               directional components of the acting on arcs
                     √                          at θ and π − θ cancel pairwise out. The pro‐                                  1                                                 µmgωr2
              vhit = v02 − 2µgs.                jection of the friction force acting on our arc               Ff′ x ≈ Ff′ (1 − δ 2 cos2 θ).                             τ =−           .
                                                                                                                              2                                                   2vs

   The second way is to write                   Ff x . Thus, the sliding speed vs has the same   • Correctly solving for d (0.3 pts)              Since we know the final pressure p2 , we can
                                                time dependenca as in part i). The equation      • Correct answer d = 1.5 mm (0.3 pts)            simply read the corresponding temperature
      τ ′ = Ff′ r sin (θ − φ)                   above can then be separated as                   ii) (1.5 points) The sphere will explode when    of the diagram:
        = Ff′ r(sin θ cos φ − cos θ sin φ)          ∫ ωhit          ∫ thit                       the pressure difference p2 − pa is such that          p2 = 1.1 · 106 Pa =⇒ T2 = 106 K.
                                                             dω                 r2   dt          the maximum tensile strength of the plastic
                      vx
        = Ff′ r(sin θ − cos θ ),
                                vy                              =            −µg 2         ⇒                                                      Grading:
                      v          v                   ω0       ω      0          R v0 − µgt       is reached. Let’s look at only one‐half of the
                                                                                                 sphere and study the balance of the forces.      • Correctly stating that the process 1 − 2 fol‐
                                                         ωhit  r2    v0 − µgthit
which, using the above expressions for vx           ln        = 2 ln             ,                                                                  lows the phase transition line. (1.0 pts)
and vy , can be simplified to                            ω0    R         v0                                                                       • Reading the correct temperature from the
                                                                                                                                                    graph (0.5 pts)
                           sin θ − δ            which, recognising that v0 − µgthit = vhit ,
        τ ′ = Ff′ r √                      .    yields                                                                                            iv) (1.5 points) If p, V , and T are known, the
                        1 − 2δ sin θ + δ 2                           (     ) r2                                                                   mass of the nitrogen gas can be calculated
                                                                       vhit R2                                                                    using the ideal gas equation:
                                                           ωhit = ω0            .
Applying the same approximation as in the                               v0                                                                                    m                pV M
previous part and keeping only the first, now                                                                                                            pV =    RT =⇒ m =           .
leading, order terms in δ, we get             Grading:                                                                                                        M                 RT
                                              • Correct equation of motion for the rotation                                                       Since we know the initial and final states,
           τ ′ ≈ Ff′ r(sin θ − δ cos2 θ).       (0.5 pts)                                                                                         the mass ∆m of nitrogen that evaporated
                                              • Realising that vs is unaffected by the rota‐                                                      between these states is
Integrating to find the total torque, we get    tion to leading order (0.5 pts)                                                                            ∆m = m2 − m1 =
               ∫ 2π                           • Using separation of variabels (0.5 pts)     The resultant force due to pressure is (p2 −                      (
                                                                                                                                                              3
                                                                                                                                                                         )
                                 1            • Final answer (0.5 pts)                                                                               2πr M p2         p1
         τ=          τ ′ rdθ = − δµmgr.
                                                                                                   2
                                                                                            pa )πr . This must always be balanced by the          =                −        = 0.065 kg.
                                 2            2. NıTROGEN EXPLOſıON (8 points) — Solu­                                                                 3R       T2    T1
                0                                                                           elastic forces in the plastic. Right before the
                                              tion by Päivo Simson, grading schemes by Päivoexplosion, we have the equality                 Grading:
Grading:                                      Simson and ....                                                                               • The idea of calculating the mass of nitro‐
• Finding the angle between the local force i) (1.5 points) As shown in the first figure of              (p2 − pa )πr2 = σ2πrd,               gen gas in the initial and final state (0.3 pts)
  per unit length and the radius (0.5 pts)    the problem, the sphere floats so that exactly                                                • Realizing that ideal gas law can be used to
                               ′
• Correct expression for τ (0.4 pts)          half of it is submerged in water. When study‐ where 2πrd is the cross‐sectional area of the     calculate the mass of nitrogen gas (0.3 pts)
                                              ing buoyancy, the mass of nitrogen gas can    plastic. Now solving for p2 we get              • Correct ideal gas law (0.3 pts)
First solution:                               be considered negligibly small compared to                                                    • Correctly using the molar mass (0.3 pts)
• Approximate expression for τ ′ or dτ for the masses of liquid nitrogen and the plastic                        2σd                         • Correct calculation and correct final an‐
                                              sphere. According to Archimedes’ principle,            p2 = pa +       = 1.1 · 10 Pa.
                                                                                                                               6
                                                                                                                                              swer (0.3 pts)
  small φ (0.3 pts)                                                                                               r
• Expressing φ in terms of δ and θ (0.5 pts)  we have                                                                                       v) (2 points) Neglecting the heat capacity of
• Correct integral and final answer (0.3 pts)                                               Grading:                                        the plastic and the heat flux through the up‐
                                                             ρn Vn + ρp Vp = ρw Vw ,        • Qualitative understanding of the condi‐ per half of the sphere, we only need to con‐
Second solution:
                                                                                               tions for the sphere to explode ‐ result‐ sider the heat of evaporation:
• Expressing τ ′ or dτ in terms of δ and θ where Vn , Vp , and Vw are the volumes of li‐       ant pressure force equals the total tensile
  (0.3 pts)                                   quid nitrogen, plastic, and displaced water,     strength (0.4 pts)                                      Qe = λ∆m = 1,31 · 104 J,
• Approximate expression for τ ′ or dτ for respectively. We have                            • The idea of breaking the sphere in half and and the heat for raising the temperature of
  small δ (0.5 pts)                                                                            analysing the forces acting on only one side the liquid nitrogen:
• Correct integral and final answer (0.3 pts)     1 4πr3 ρn                     1 4πr3 ρw      of the sphere (0.4 pts)
                                                    ·           + d · 4πr2 ρp = ·         ,                                                             Ql = cv ml (T2 − T1 ) =
v) (2 points) The equation describing the ro‐     2       3                     2    3      • Correct condition for the sphere to ex‐
tation is, now expressed in terms of ω and vs                                                  plode: (p2 − pa )πr = σ2πrd (0.4 pts)
                                                                                                                   2                                2
rather than δ,                                and solving for d we get                      • Correct final expression and answer                 = πr3 ρn cv (T2 − T1 ) = 9,7 · 104 J.
                                                                                                                                                    3
                                                                                               (0.3 pts)
            dω           1         ω                        r  ρ w −  ρn
                                                                                                                                            The  heat for rising the temperature of the ni‐
          I     = τ = − µmgr2 ,                         d= ·             = 1.5 mm.          iii) (1.5 points) During boiling at constant trogen gas can be neglected, as the mass of
            dt           2        vs                        6      ρp                       pressure, the temperature of the liquid does the gas is very small compared to the mass
                                                                                            not change, even though the liquid is gaining of liquid nitrogen (≈ 1.7 kg). The total heat
where the moment of inertia is I ≈ 2 mR . As Grading:
                                     1    2
                                                                                            energy all the time. If however the pressure Qe + Ql is taken from the water through the
the correction to Ff x is only of second order • Archimedes’ principle (0.3 pts)            changes, as we have in our problem, then so plastic. The average temperature of nitrogen
in δ, to the first, leading order approxima‐ • Correct volumes of liquid nitrogen, plastic, does the boiling point, following exactly the is Tn = (T1 + T2 )/2 = 91.7 K, and the av‐
tion, we may neglect the effect of rotation on   and displaced water (0.6 pts)              phase transition line on the phase diagram. erage temperature difference between water

and nitrogen is Tw − Tn = 201.5 K. The heat           In the figure, we find the centre of cir‐            The planet’s mass can be inferred from      • Finding aB (0.5 pts)
flux through the plastic is                       cular motion of the star from the centre of           the property that planet and star rotate       • Finding mB (0.5 pts)
                                                  the envelope (by for example using a ruler            around their common centre of mass:            iv) (2 points) The equations describing the
                        Tw − Tn                   to find the diameter and then the centre‐             M xA = mA aA . Hence,
               q=k·             .                 point). From there, we measure that lower
                                                                                                                                                       system still hold, but reading off the fre‐
                           d                                                                                            xA                             quencies is trickier. Nevertheless, we can
                                                  frequency component covers an angle of α =                   mA = M      = 1.2 × 1027 kg.            still locate the origin and measure the ex‐
The total amount of heat carried through the 290° within the measurement period t =                                     aA
lower half of the sphere during time ∆t is        10 yr. The higher frequency component, in                                                            treme distances l1 = 1.20 × 105 km and
                                                  the meantime, undergoes 7.5 full rotations            Grading:                                       l2 = 1.85 × 105 km. We also note that the
            ∆Q = qA∆t = Qe + Ql ,                 with respect to the lower frequency compon‐                                                          higher frequency component (correspond‐
                                                                                                        • Expressing 4π 2 /(GM ) = TA2 /a3A (0.6 pts)  ing to planet A) has a bigger radius than the
                                                  ent. Hence, ωB t = α and (ωA − ωB )t/(2π) =           • Finding M (0.4 pts)
                 2
where A = 2πr is half of the surface area of 7.5. This yields                                                                                          lower frequency one (planet B). Hence, l1 =
                                                                                                        • Realising that the position of the centre of x − x and l = x + x , and so x =
the sphere. Finally, solving for ∆t, we have                                                                                                             A      B       2     A      B          A
                                                                                                          mass of A and M is conserved (with respect (l + l )/2 = 1.5 × 105 km, x = (l − l )/2 =
the estimated time it takes for the sphere to                                                                                                            1    2                     B     2   1
                                                                                                          to B) (0.5 pts)
                                                                                                        • Inferring equation M xA = mA aA (0.5 pts) 3.3 × 10 km.
explode:                                                                                                                                                        4
                                                                 2π       2πt
                                                         TB =         =        = 12.4 yr,               • Finding xA from the trajectory (0.3 pts)         The higher frequency component does 3
                d · (Qe + Ql )                                   ωB         α
       ∆t =                     =  15.5 s.                                                              • Finding mA (0.2 pts)                         full turns and, measuring from the figure,
              2πr2 k (Tw − Tn )                          TA =
                                                                 2π
                                                                      = 1
                                                                              1
                                                                                     = 1.20 yr.                                                        an extra 280° on top of it. This gives TA =
                                                                 ωA              7.5
                                                                           TB +   t                                                                    t/(3 + 280°/360°) = 2.65 yr. The lower fre‐
Grading:                                                                                                                                               quency component, meanwhile, starts and
• Understanding that Qe + Ql must be equal                                                                                                             ends from the farthest away point, and os‐
  to the total heat received from the water Grading:                                                                                                   cillates through the closest point 3 times.
  (0.3 pts)                                       • Realising that the higher frequency com‐                                                           Hence it goes through 3 full rotations. Thus,
• Correct heat of evaporation (0.2 pts)             ponent is due to planet A and the lower                                                                          (          )
• Correct heat for rising the temperature of        frequency component is due to planet B                                                                             2π    2π
                                                                                                                                                                          −       t = 6π,
  liquid nitrogen (0.2 pts)                         (0.5 pts)                                                                                                          TA   TB
• Correctly using the average temperature of • The higher frequency component under‐
  nitrogen (0.2 pts)                                goes 7.5 full rotations (0.4 pts)                                                                    and so
• Correctly using the average temperature • The lower frequency component covers
                                                                                                                                                                            1
                                                                                               9 · 2π
  difference (0.2 pts)                              an angle of 290°, or alternatively, 7.5                                                                        TB =            = 12.9 yr.
                                                                                                                                                                          TA − t
• Correct expression for the heat flux q                                                                                                                                   1   3
                                                    (0.4 pts)
  though the plastic (0.3 pts)                    • Finding TA (0.8 pts)
• Correct expression for the total heat ∆Q re‐ • Finding TB (0.4 pts)
  ceived through the plastic (0.3 pts)                                                                                                                      By using the equations from the previous
• Correct final expression for calculating the ii) (2.5 points) From the figure, we meas‐                                                                parts, we get
  time till explosion (0.3 pts)                   ure the extrema of the distance of the star
  Give full points for this part if the final ex‐ from the origin as l1 = 1.6 × 10 km and
                                                                                            5                                                                    4π 2 a3A
                                                                                                                                                             M=            = 6.8 × 1029 kg,
  pression and the answer are correct.            l2 = 2.8 × 10 km. The extrema corresponds
                                                                 5
                                                                                                        iii) (1 point) Once again, from Kepler’s Third            GTA2
                                                  to when the two circular motions are point‐           law, we get the semi‐major axis of planet B                xA
