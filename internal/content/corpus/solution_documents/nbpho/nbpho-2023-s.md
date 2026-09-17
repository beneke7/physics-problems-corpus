---
id: solution-document-nbpho-2023-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2023_S.pdf
extraction_method: pdftotext-layout
mapped_problems: [nbpho-2023-black-box, nbpho-2023-curling, nbpho-2023-force-sensor, nbpho-2023-nitrogen-explosion, nbpho-2023-stack-of-papers, nbpho-2023-string-coupled-masses, nbpho-2023-wobble]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2023_S.pdf."
---

NORDıC‐BALTıC PHYſıCſ OLYMPıAD 2023            Grading:                                             is given by                                      The total friction force can now be obtained
                                               • Integration of the expression for vs                                                                by integrating over the length element of size
                                                                                                                            µmg                      rdθ along the ring in contact with the ice,
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
3. WOBBLE (8 points) — Solution by Taavet ing in the same direction or the opposite dir‐                                                                    mA = M        = 5.1 × 1026 kg,
Kalda, grading schemes by ....                                                                          to be                                                       aA
                                                  ection. In other words, the distances are                            √                                                √
i) (2.5 points) The farther away a planet l1 = xB − xA and l2 = xB + xA . Rearran‐                                        2
                                                                                                                       3 TB GM                                               4π 2
is from the host star, the bigger its orbital ging, xA = (l2 − l1 )/2 = 6 × 104 km and                          aB =            = 1.0 × 109 km.             mB = M xB 3 2          = 3.9 × 1025 kg.
                                                                                                                          4π 2                                             TB GM
period. In a fixed period, we then expect xB = 2.2 × 105 km. To infer the masses, we
planet A to make more rotations around the need to study the dynamics of the system.                    Similarly to before, we get the mass as
star than planet B. The wobble effect comes                                                                               xB                                The first planet is once again a gas giant
from both the star and the planets orbiting           First, we can assume that the semi‐major                  mB = M        = 9.3 × 1026 kg.
                                                  axis of the planets are much bigger than x.                             aB                            (0.26 Jupiter masses) while the second one is
around their common barycentre (centre of                                                                                                               a “Super‐Earth” (6.4 Earth masses).
mass). The effect of one planet makes the Indeed, aA /xA = 4000 ≫ 1. Either from
star undergo a circular motion with some ra‐ force balance between gravity and centrifu‐                    Both of the planets are gas giants, similar Grading:
dius x and frequency ω. The effect of two gal force,          or through Kepler’s Third Law, we         to Jupiter (0.63 and 0.50 Jupiter masses re‐ • Finding T (0.4 pts)
planets is additive, so the overall motion is     have  4π 2
                                                             /(GM   ) = TA2 /a3A so the star’s mass     spectively). This makes sense, as this method • Finding TA (0.4 pts)
the sum of two circular motions with radius’ is                                                         is more sensitive to higher mass exoplanets • Finding MB (0.3 pts)
xA and xB with different angular frequencies                       4π 2 a3A                             with bigger orbits.                             • Finding mA (0.4 pts)
ωA and ωB .                                                M   =             = 4.4 × 1030 kg.           Grading:                                        • Finding mB (0.5 pts)
                                                                    GTA2
                                                  34.5 s.                                                                                obtain long enough relaxation times with an       parallel — excluded by (I); (b) all in series —
                                                  8
                                                                                                                                         inductor. Indeed, already the internal res‐       excluded by (II); (c) three elements in paral‐
                                                                                                                                         istance of the ammeter is around a hundred        lel, all together in series with the fourth ele‐
                                                  6                                                                                      of ohms, and characteristic time of about         ment — excluded by (I) and (IV); (d) 3+1 par‐
                                                                                                                                         20 seconds would mean that the inductance         allel chains (i.e. 3 elements in one chain,
                                                  4
                                                          ln(V/mV)                                                                       should be around kilohenry — even if such         and 1 element in the other chain) — excluded
                                                                                                                                         inductor exists, it would not fit into the box.   by (III) and (I); (d) one parallel pair in series
                                                                                                                                         Second, if there were a big inductor inside,      with another parallel pair — excluded by (IV)
                                                  2
                                                                                                                                         it cannot be a lone element connected to one      and (II); (e) 2+2 parallel chains; (f) 1+2 par‐
                                                                                                                                         of the terminals. Indeed, when the ammeter        allel chains, all together in series with the
                                                  0                                                                                      is connected to the terminals, a non‐zero cur‐    fourth element; (g) a pair in parallel, all to‐
                                                      0               50              100                150             200
                                                                                            t(s)                                         rent appears immediately, instead of starting     gether in series with the third and fourth ele‐
                                                                                                                                         from zero (what would be the case if there        ment.
                                                      2) After keeping the terminals open for a                                          were an inductor). So, it must form a closed
                                                  long enough time, release the short‐circuting                                                                                                With the option (e), battery and capacitor
                                                                                                                                         loop with a resistor and a battery. However,      need to be in different chains, due to (I), this
                                                  wire and measure the current I as a function                                           in that case, if we keep the terminals short‐
                                                  of time:                                                                                                                                 is the circuit A.
                                                    I (μA) t (s) I (12.3 μA) t (s)                                                       circuited for a while and then disconnect, the
                                                                                                                                         voltage at the terminals would jump discon‐           With the option (g), capacitor must be in
                                                       0      978        50       351                                                                                                      the parallel pair with a resistor, due to (V)
                                                       5      794        60       345                                                    tinuosly as the current through one of the
                                                                                                                                         resistors would need to jump (to keep the in‐     and (II), this is the circuit B.
4. BLACĸ BOX (12 points) — Solution by Jaan           10      636        70       341
                                                                                                                                         ductor current continuous).
Kalda, grading schemes by ....                        15      535        80       340                                                                                                          With the option (f), due to (V), the ca‐
                                                      20      468        90       339                                                        The first consideration is that there need    pacitor needs to be in the parallel section,
    Since there can be elements causing in‐           25      425       100       339                                                                                                      either (f1) as a single element, or (f2) paired
                                                                                                                                         to be two resistors because there are two dif‐
ertia — LR chains or RC chains, one has to            30      397       110       339                                                                                                      in series with a resistor, because of (I). In the
                                                                                                                                         ferent characteristic times (one resistor with
be patient when making measurements and               40      365       120       339                                                                                                      case of (f1), (III) tells us that battery must be
                                                                                                                                         two capacitors can produce still only one
wait for a long enough time to let the system                                                                                                                                              in the other parallel section (in series with
relax towards an equilibrium. There are two       These data are plotted as ln[(I − 339 μA)/μA]                                          characteristic time, because the capacitors,
                                                  versus time. One can see a fairly nice linear                                          either in parallel or in series, would com‐       a resistor), this is the circuit C. In the case
types of measurements which can be done.                                                                                                                                                   of (f2), combinatorics tells us that there are
                                                  plot which means that voltage is approach‐                                             bine effectively into one single capacitor).
1) After keeping the terminals short‐circuited    ing exponentially the limit value 339 μA. The                                          Next, the restriction (I): the battery and the    two positions for the battery — either as the
for a long enough time, release the short‐        characteristic time can be found as the re‐                                            capacitor cannot be in series, because they       single element in series which is the circuit
circuting wire and measure the voltage V as       ciprocal of the trend line (we discard the                                             would combine effectively into a single ca‐       (D), or in parallel with the capacitor‐resistor
a function of time:                               rightmost data points as there, the voltage                                            pacitor. Second, the restriction (II): the bat‐   series connection. The latter option, how‐
  V (mV) t (s) V (mV) t (s)                       changes are small, so the relative errors are                                          tery and the capacitor cannot be in paral‐        ever, means that the battery would always
     0       1073      90      2977               big), As a result we obtain τ1 = s.                                                    lel, either, because they would combine ef‐       maintain the same voltage on the capacitor‐
     5       1317     100      3049                                                                                                      fectively into a single battery. Then, restric‐   resistor series connection, i.e. the output
                                                          3
    10       1564     110      3073                                                                                                      tion (III): neither capacitor nor battery can     voltage and current would remain always
    15       1765     120      3091                                                                                                      be connected directly to the output terminals     constant.
    20       1950     130      3116                                                                                                      as in one case, the ammeter current would             Circuit (A):
    25       2109     149      3124                       2
                                                                                                                                         asymptotically approach zero when connec‐
    30       2248     159      3131                                                                                                      ted to the output, and in the other case,
    40       2465     160      3124                       ln(I/μA)
                                                                                                                                         the output voltage would be always constant.
    50       2629     170      3131                       1                                                                              This excludes automatically many possibilit‐
    60       2751     180      3135                                                                                                      ies, see below. Also, (IV): there should not be
    70       2850     210      3145                                                                                                      a direct path from one terminal to the other
    80       2921     400      3155                       0
                                                                                             t(s)
                                                                                                                                         going only through the capacitor and the bat‐
These data are plotted as ln[(3155 mV −                       0   5        10   15   20     25      30    40   50   60         70   80
                                                                                                                                         tery as in that case, ammeter current would
V )/mV] versus time. One can see a fairly                                                                                                be very big, and the corresponding charac‐
nice linear plot which means that voltage             These data mean that inside, there should                                          teristic time would be very short. Finally,          Circuit (B):
is approaching exponentially the limit value      be a battery to maintain a voltage, a capa‐                                            (V): the capacitor can be only in a parallel
3155 mV. The characteristic time can be           citor to provide inertia — exponential decay                                           connection with something, because other‐
found as the reciprocal of the trend line (we     towards an equilibrium, and resistors. In                                              wise, there would be no capacitor current
discard the rightmost data points as there,       principle, one should consider also an op‐                                             when a voltmeter is connected to the output,
the voltage changes are small, so the relat‐      tion where there is an inductor instead of                                             hence, the voltage would remain constant.
ive errors are big), As a result we obtain τ1 =   the capacitor; however, it can be excluded
                                                  by various ways. First, it is not realistic to                                             Topologically, there are options (a) all in
                                                  remains unchanged, Ui = ER1 /(R1 + R2 ), so            after the recharging has begun; either
                                                  we can again check if everything fits: we ob‐          resistance of one of the resistors can be
                                                  tained R1 /(R1 + R2 ) = 0.347, and Ui /E =             found or the equation for both resistors
                                                  0.340; this is a fit within the uncertainties.         can be written (1 pts)
                                                      Now, τ1 = R2 C so that C = τ1 /R2 =             – R1 is found correctly (0.5 pts)
                                                  5.67 mF. Alternatively we can calculate the         – R2 is found correctly (0.5 pts)
                                                  same thing using τ2 = R1 R2 C/(R1 + R2 ),           Note: plausible resistance values are:
                                                  hence C = τ2 (R1 + R2 )/(R1 R2 ) = 5.84 mF.         9.31 kΩ, 4.94 kΩ, 3.23 kΩ, 6.08 kΩ.
   Circuit (C):                                   Again, there is a match of results within the     • The capacitance of the capacitor is found
                                                  uncertainties.                                      correctly:
                                                                                                      – Two tables of both voltage during the
                                                      Grading:                                           charging and current during the dis‐
                                                  • Black box circuit diagram is correct:                charge are present; give half, if only one
                                                    – The initial voltage U0 ̸= 0, which means           table is present (1.2 pts)
                                                       that the circuit contains battery of some      – The measurements of voltage or current
                                                       sort (0.5 pts)                                    are presented graphically (0.8 pts)
                                                    – The changing current suggests that the          – The method to find the capacitance is
                                                       circuit contains a capacitor or an in‐            found (0.8 pts)
   Circuit (D):                                                                                       – Correct capacitance C ≈ 2.5 mF or C ≈
                                                       ductor (0.3 pts)
                                                    – The use of an inductor is unrealistic for          5.7 mF is found (0.5 pts)
                                                       the provided black box, consequently             Note: the solution that uses a direct meas‐
                                                       the circuit must contain a capacitor         urement of resistance with a multimeter to
                                                       (0.2 pts)                                    be given 0, since the circuit contains a bat‐
                                                    – The discharging of the capacitor is not       tery; the solution that uses a direct measure‐
                                                       instantaneous, so there must be a res‐       ment of capacitance with a multimeter to be
                                                       istor between the capacitor and output       given 0.2, since the capacitance is outside of
                                                       terminals (1 pts)                            limits of the provided multimeter.
    In all four cases, the voltmeter reading,       – The recharging of the capacitor is not
when connected to the output, tends asymp‐             instantaneous, so must be a resistor
totically towards the electromotive force of           between the capacitor and the battery
the battery, so E = 3.155 V.                           (1 pts)
    For cases (A) and (D), the initial ammeter      – Correct circuit diagram is drawn (2 pts)
reading is I0 = E(R1−1 + R2−1 ) = 978 μA            – Additional notice: if the suggested cir‐
and the asymptotic ammeter reading is If =             cuit is such that one element would be
                                                       masked by another element (e.g. a ca‐
E/R2 = 339 μA; based on that we can cal‐               pacitor is parallel to a battery in which
culate R2 = E/If = 9.31 kΩ and R1 =                    case the capacitor would be always fully
(I0 /E − 1/R2 )−1 = 4.94 kΩ. For those cases,          charged and undetectable, or a capacitor
the initial voltage Ui = ER1 /(R1 + R2 ), so           is series with a battery in which case the
we can check if everything fits: we obtained           battery voltage would be compensated
R1 /(R1 +R2 ) = 0.347, and Ui /E = 0.340; this         by the capacitor and undetectable), the
is a fit within the uncertainties.                     marks for circuit will be reduced by 50%.
    For the very same cases, τ1 = (R1 + R2 )C     • Electromotive force of the battery is found
so that C = τ1 /(R1 + R2 ) = 2.42 mF. Altern‐       correctly based on the drawn circuit dia‐
atively we can calculate the same thing us‐         gram (1 pts)
ing τ2 = R1 C, hence C = τ2 /R1 = 2.50 mF.        • The resistance of both resistor is found cor‐
Again, there is a match of results within the       rectly (circuit diagram dependent):
uncertainties.                                      – When the capacitor is fully charged the
    Finally, for (B) and (C), the initial am‐          current doesn’t flow through it, or in
meter reading is I0 = E/R1 = 978 μA and the            other words RC = ∞; either sum of two
asymptotic ammeter reading is If = E/(R1 +             resistances or resistance of one of the
                                                       resistors can be found (1 pts)
R2 ) = 339 μA; based on that we can calculate       – Otherwise, when the capacitor is dis‐
R1 = E/I0 = 3.23 kΩ and R2 = (If /E − R1 =             charged RC = 0 in the first moments
6.08 kΩ. The expression for the initial voltage
NORDıC‐BALTıC PHYſıCſ OLYMPıAD 2023              Grading:                                             • Correct total resistance of the Wheatstone        so that
                                                                                                        circuit (0.5 pts)                                                  √           √
                                                 • Correct moment equation EI/r = F L/2 at                                                                          ω2 =    |ÿ/y| = ω1 1 + cos θ.
5. FORCE ſENſOR (5 points) — Solution by            the center of the beam (0.6 pts)                  • Assumes that the resistance of the Volt‐
Päivo Simson, grading schemes by ....            • Correct geometric relations for l±∆l based           meter is infinite (0.5 pts)
                                                                                                                                                   Grading:
                                                    on ∆s = r∆ϕ (0.6 pts)                             • Correctly calculating the potential differ‐
i) (2 points) To find the elongation ∆l, we                                                                                                        • Equation for a cylinder surface (0.4 pts)
                                                                                                        ence V as a function of the change in the
need to know the curvature radius r of the • correctly solving for ∆l (0.6 pts)                                                                    • Equation for a sphere surface (0.4 pts)
                                                                                                        resistance (0.5 pts)
beam at x = L/2. The torque created by the • correctly expressing the final answer                                                                 • Both surface equations correct and co‐
                                                                                                      • Expressing the final answer in the form
force F at an arbitrary point x is F · (L − x).     (0.2 pts)
                                                                                                                                                     ordinates consistent (0.2 pts)
                                                                                                        given in the solution (0.5 pts)
This must be balanced by the bending mo‐ ii) (1 point) Let ρ and S be the resistivity and
ment M (x) of the beam. In the middle of the the cross‐sectional area of the wires, respect‐          6. STRıNG‐COUPLED MAſſEſ (5 points) —        • Realising x2 ‐ and z 2 ‐terms are negligible,
beam we have                                                                                          Solution by Aleksi Kononen and Jaan Kalda,     and not discarding y 2 (0.2 pts)
                                                 ively. The initial resistance R0 of all the wires                                                 • Solving z in terms of y (0.5 pts)
                                                 is                                                   grading schemes by Aleksi Kononen.
               EI       L           2EI                                                                                                            • Energy conservation between z and ẏ
        M=         =F       =⇒ r =       .                               ρl   ρl2                     i) (2 points) For in‐phase oscillations, the
                r       2            FL                           R0 =      =     ,                                                                  (0.3 pts)
                                                                         S     lS                     string connecting the masses always remains  • Solving relation between ÿ and y (0.6 pts)
It is easy to see that if the upper wires elong‐                                                      parallel to the x‐axis. In that case, the motion
                                                                                                                                                   • Correct expression for ω2 (0.3 pts)
ate by ∆l, the lower ones shorten by the where lS is the volume of the wire that re‐                  is confined to the yz‐plane and is identical to
                                                                                                                                                   • ω2 correctly in terms of ω1 (0.1 pts)
same amount. Now we need to relate the mains constant during the deformation. As‐                     a pendulum with length r sin θ hung from the
curvature radius r with the elongation ∆l. suming ∆l << l we have                                     axis of rotation:                                Alternative solution: Let one of the
                                                         ρ(l + ∆l)2    ρl(1 + 2∆l/l)                                         √                     masses (mass A) be displaced by y and the
                                                 R1 =                ≈                = R0 +∆R,                        ω1 =
                                                                                                                                   g               other by −y. Let T ′ be the tension in the
                                                             lS               S                                                 r sin θ            two outermost strings (equal magnitudes by
                                                    ρ(l − ∆l) 2
                                                                    ρl(1 − 2∆l/l)                                                                  symmetry) and T in the connecting string.
                                            R2 =                ≈                  = R0 −∆R,      Grading:                                         Newton’s law along the y‐axis for mass A then
                                                        lS                S                                ∑                                       yields
                                            where                                             • Stating      F  x =  0,  or stating  that the con‐                       y      y
                                                                                                necting string remains parallel to the x‐axis                      −T ′ − T = mÿ,
                                                           2ρ∆l          ∆l        F Lh         (0.6 pts)                                                                r       r
                                                   ∆R =           = 2R0       = R0       .
                                                             S            l        2EI        • Realising the effective pendulum length is i.e.
                                                                                                r sin θ, i.e. the axis of rotation is the line                                T′ + T
                                            Grading:                                                                                                                 ÿ = −            y.
                                                                                                connecting the wall points (0.8 pts)                                            mr
                                            • R = ρl/S (0.3 pts)                              • Correct expression for ω1 (0.6 pts)                Without oscillations, T0′ = mg/ sin θ and
                                            • Correct approximations (0.3 pts)                                                                     T0 = T ′ cos θ. Let us write T ′ = T0′ + ∆T ′
                                            • Correctly calculating the resistances and ii) (3 points) Now suppose one of the balls and T =0 T + ∆T , i.e.
                                               the change in resistance using the above re‐ moves along the y axis to a distance ym and
                                                                                                                                                               0

                                               lations (0.4 pts)                              the  other   ball —  by −y.   The  length of the ho‐
                                                                                                                                                                         1 + cos θ
                                                                                              rizontal string remains constant, hence y 2 +             T ′ + T = mg                  + ∆T ′ + ∆T.
                                            iii) (2 points)The total resistance R of the cir‐ (r − x)2 = r2 , where x denotes the displace‐                                 sin θ
                                            cuit is                                           ment of the ball in x‐direction. For small Let us make some estimates. Clearly, |∆T | ∼
The arc length of a circle is ∆s = r∆ϕ.                (R1 + R2 )(R1 + R2 )      R1 + R2      displacements, we can neglect the smallest |∆T ′ |. The maximum of ∆T ′ occurs when
Knowing this, we have from the above figure      R=                            =
                                                             2R1 + 2R2               2        term x2 , hence x = y 2 /2r. The length of the the mass swings by its lowest point with ve‐
                    (        )                                                                slanted string remains also constant, hence locity ẏ, where its trajectory has a radius of
                           h
           l + ∆l = r +         ∆ϕ,         Since both sides of the circuit have the same (r sin θ − z)2 + (r cos θ + x)2 + y 2 = r2 , where curvature R ∼ r sin θ. Moreover, small nor‐
                           2                total resistance R1 + R2 , the current is also z denotes the vertical displacement. Neglect‐ mal mode oscillations imply y = A cos ω2 t for
                    (        )              the same. The voltmeter reading is therefore ing here the smallest terms z 2 and x2 , we ob‐ some amplitude A ≪ r sin θ, i.e. |ẏ| ≤ Aω2 .
                           h
           l − ∆l = r −         ∆ϕ.                                                           tain 2rz sin θ = 2rx cos θ + y 2 = y 2 (1 + cos θ), Finally, assume ω2 = kω1 holds for some
                           2                            I       I         U
                                                  V = R2 − R1 =              (R1 − R2 ) =     hence                                                k ∼ 1. We have
By dividing the above equations, we get an              2       2        2R                                          y 2 1 + cos θ                                                            (         )2
equation for ∆l that is easily solved:                   R1 − R2         ∆R       F Lh                          z=                 .                   ′     mẏ 2      mk 2 A2 g                  A
                                                    =U             =U          =U       .                            2r sin θ                      |∆T   | ∼        ∼               =  k 2
                                                                                                                                                                                           mg              ,
                                                         R   + R         R         2EI                                                                        R         r2 sin2 θ               r sin θ
      l + ∆l    2r + h               lh                    1     2         0                  Now we can write down energy conservation
              =          =⇒ ∆l = .                                                            law: 21 ẏ 2 + gz = const, where dot denotes i.e. quadratically smaller in (A/r sin θ) than
      l − ∆l    2r − h               2r     From this, we finally have
                                                                      2EIV                    the time derivative. Differentiating this over T0′ . Thus, T ′ + T ≈ mg 1+cos            θ
                                                                                                                                                                                  sin θ and
Combining this with the expression for r we                                                   time we obtain
have                                                            F  =         .                                                                                   √
                                                                       LhU                                                                                                            √
                       F Llh                                                                                          gy 1 + cos θ                                  T′ + T
                ∆l =         .              Grading:                                                           ÿ = −                                      ω2 =                = ω1 1 + cos θ.
                        4EI                                                                                             r sin θ                                         mr
                         √
(The result shows k ≤ 2, i.e. the assump‐                                                       Grading:                                             pass x′ = 0 at t = ∆t, and reach x′ = −L/2
tion holds.) Grading:                                                                           • switching to the reference frame of the            at t = 2∆t. Therefore, t1 = 2∆t and the min‐
• Force equation, either along y or full vector                                                    bottom‐most sheet (0.4 pts)                       imal distance between the paper pack and
  form (0.4 pts)                                                                                • Correct normal forces with bottom‐most             the edge has to be
• Solving relation between ÿ and y in terms                                                       sheet and table (0.6 pts)                                                       (    )
                                                                                                                                                                        2u           Lω
  of tension forces (0.4 pts)                                                                   • Correct net force on pack (0.2 pts)                     l = ut1 − L =    tanh−1         −L
• Unperturbed values for T ′ and T (0.4 pts)                                                    • Identifying the spring coefficient (0.3 pts)                          ω            2u
                                                                                                                                                                (           (     )    )
• Reasonable estimate of |∆T ′ | (0.6 pts)                                                      • Conservation of energy equation (0.5 pts)                       2u           Lω
• Showing |∆T ′ | is quadratically smaller                                                      • Identifying critical point x = 0 (0.6 pts)                =L       tanh−1         −1 .
                                                                                                                                                                  Lω           2u
  than T ′ (0.8 pts)                                                                            • Deriving umin (0.4 pts)
• Correct expression for ω2 (0.3 pts)                                                           iii) (1 point) As before, conservation of en‐        Grading:
                                            Grading:
• ω2 correctly in terms of ω1 (0.1 pts)                                                         ergy holds. This means that when the bottom
• Remark: Accept solution with assumption   • Correct initial accelerations (0.2 pts)                                                                 • Stating the formula l = ut1 − L (0.2 pts)
                                                                                                sheet is separated at x′ = −L/2, the potential        • Stating the equation of motion a′ = kx′
  ∆T ′ /T ′ ≪ 1 without estimates           • Correct final accelerations (0.2 pts)
                                                                                                energy is the same as when x′ = L/2 so the
                                            • Correct durations of acceleration (0.4 pts)                                                                (0.2 pts)
7. A PACĸ OF PAPERſ (8 points) — Solution by                                                    speed of the pack is still −u. Surprisingly, the      • Solution for the equation of motion
                                            • Correct graph shapes (0.6 pts)
Taavet Kalda, grading schemes by Martin Rahe,                                                   final speed of the pack in the table frame is            (0.4 pts)
                                            • Physical explanations for the graph shapes
Isak Fleig and Joonas Kalda.                                                                    therefore 0.                                          • Correct values for x0 and ∆t (0.6 pts)
                                               (0.6 pts)
i) (2 points) Clearly, when u is very small,   (half of the points in each subsection are       Grading:                                              • Justification for t1 = 2∆t (0.3 pts)
the pack gets dragged along with the bottom‐   given for part (a) and half for part (b))        • Potential energy when the sheet is separ‐           • Correct result for the minimal distance l
most sheet, so the speed v of the pack starts                                                      ated is the same as when Sandra starts                (0.3 pts)‐
                                            ii) (3 points) The problem is most conveni‐
from 0, and ends up with u. Further, there                                                         pulling (0.6 pts)                                  8. CONNECTED CHARGEſ (8 points) — Solution
                                            ently analysed in a frame moving with the
is almost no slippage between the pack and                                                      • Correct final speed in the bottom‐most              by Jaan Kalda, grading schemes by Jānis Cīmurs.
                                            bottom‐most sheet with speed u. In the new
the bottom sheet. The acceleration of the top
                                            frame, v ′ = v − u and x′ = x − ut. Let                sheet reference frame (0.2 pts)                    i) (2 points) As the ball A enters the elec‐
sheet is then gµ as long as its being acceler‐                                                  • Correct final speed in the table reference
                                            the centre‐point of the bottom‐most sheet                                                                 tric field, the force qE is exerted on it, hence
ated, and 0 otherwise. The acceleration lasts
                                            be x′ = 0 and let’s track the movement of              frame (0.2 pts)                                    the acceleration of the system of two balls is
for a duration of u/(gµ).
                                            the pack using its right‐most edge which will       iv) (2 points)The goal is to find the overall dis‐    a1 = qE/2m; the acceleration remains con‐
                                            start at x′ = L/2 with a speed of v ′ = −u          tance by which the pack slides in the table          stant until the ball A exits the field. This
                                            and lose contact with the bottom sheet at           frame. Equivalently, we can find the dura‐                            when L = a1 t21 /2, hence t1 =
                                            x′ = −L/2.                                                                                               √ happen √
                                                                                                                                                     will
                                                                                                tion t1 for which it slides, because then it will         2L/a = 2 Lm/qE At that moment, the
                                                  When the pack is in contact with the bot‐     have shifted by −L in the paper frame, and            acceleration of the ball A becomes zero, but
                                            tom sheet and in the process of slipping, the       the paper frame has shifted by ut1 with re‐           at the very same moment, ball B enters the
                                            pack has a normal force of N1 = mg(L/2 +            spect to the table frame. The overall shift is        field. The force qE exerted on it will give it
                                            x′ )/L with the bottom‐most sheet, and N2 =         then l = ut1 − L.                                     twice as big an acceleration as before, a2 =
                                            mg(L/2 − x′ )/L with the table. Friction force           The equation of motion for the pack was          qE/m, and the string becomes loose. So, the
                                            will then result in a net force of F = N1 µ −       a′ = kx′ with k = 2gµ/L. The solution                speed of the ball B is now bigger than that
                                            N2 µ = 2mgµx′ /L. The acceleration of the           for this is, instead of sine and cosine, hyper‐      of the ball A, and so they will eventually col‐
                                            pack is thus a′ = 2gµx′ /L. Note that this          bolic sine and cosine. Seeing from the ini‐          lide. The time t2 spent by the ball B in the
   Conversely at very large v, the bottom‐ equation is that of a spring with a negative
most sheet gets pulled out so fast that the spring coefficient k = 2gµ/L (which we will         tial conditions, a possible solution could be        field can be√    expressed as t2 = (vf − vi )/a2 ,
pack ends with very little speed. As the still denote with a positive k value, only that        x′ = x0 sinh(ω(t − ∆t)). This indeed gives           where√   vi = qEL/m is its initial speed, and
sheets gets pulled from under, the accel‐ the force repels from the equilibrium). Nev‐          v ′ = ωx0 sinh(ω(t                      ′
                                                                                                                     √ − ∆t)) and a = ω x
                                                                                                                                               2 ′
                                                                                                                                                     v√         3qEL/m — the final speed. So, t2 =
                                                                                                                                                        f =
eration of the pack drops from u/(gµ) to ertheless, conservation of energy still holds,         such that ω =          k satisfies the equation                    √
                                                                                                                                                          Lm/qE( 3 − 1). At the moment when the
−u/(gµ) over a duration of L/u.             v ′2 /2 − kx′2 /2 = const. The most critical        of motion. We find the values for x0 and
                                                                                                ∆t from the initial conditions at t = 0 so            ball B exits the field, the distance between
                                            point to overcome is at x′ = 0 (after that the                                                            the√balls is s = L − (vf − vi )t2 /2 = vi t2 =
                                            force starts helping the pack), which makes         that x′ = −x0 sinh(ω∆t) = L/2 and v ′ =
                                                                                                x0 ω cosh(ω∆t) = −u. From here, we get                L( 3 − 1), and the difference between the
                                            sense because then most of the bottom‐most
                                            paper is out from underneath the pack, and                             1
                                                                                                                              (
                                                                                                                                Lω
                                                                                                                                    )                 velocities
                                                                                                                                                      √            √ the balls is ∆v = vf − vi =
                                                                                                                                                                   of
                                            the friction force from the table is dominant.                   ∆t = tanh−1              ,                   qEL/m( 3−1), hence the time √    remaining
                                            The condition for this is simply v ′2 − kx′2 > 0                       ω            2u                    until the collision t3 = s/∆v = Lm/qE.
                                            or in other words, u2 − kL2 /4 > 0. This gives                                L0                          Thus,√the moment
                                                                                                             x0 = −               .                                      √ of collision t = t1 + t2 +
                                                                 √       √                                           2 sinh(ω∆t)                      t3 = Lm/qE( 3 + 2).
                                                                   kL       gµL
                                                         umin =
                                                                   2
                                                                      =
                                                                             2
                                                                                .            Now, from the form of x′ , it’s clear that it will      Grading:
• Initially both charges move with the same    mass (it is nonlinear because the amplitude       i) (3 points) The focal length can be found by  • The result should be around R = 5.3 mm,
  acceleration (0.2 pts)                       is not small). The speed of the ball at t = T     adjusting the height of the plate holder; ad‐      but should later give accurate α value.
• When A escapes the field region A moves      can be found from the energy conservation         just the height so as to achieve a sharp im‐       (0.5 pts)
  with constant speed, B moves with higher     law. At t = 0, the speed is zero so that the      age of the ceiling lights at the screen (either • Correct idea for determining the water‐
  acceleration (0.2 pts)                       full energy is due to the potential energy in     a sheet of paper beneath the holder, or the        glass contact angle using previously calcu‐
• When B escapes, both move with constant      the homogeneous force field qE/2: ∆U =            surface of the cap inside the holder. The          lated values d and R. (0.5 pts)
  speed (0.1 pts)                                                         √        mv 2          height can be measured precisely by caliper.    • The result should be around α = 33.2°.
                                                2 (2 − 2 2) =      8 (2 −
                                               qE l      √l      qEL
• Correct a1 (0.2 pts)                                                      2) = 2 y , hence     The diameter of the drop can be also meas‐         Give max points for α = 28° − 38°. (0.5 pts)
                                                               √
                                                      4m (2 −
                                               vy2 = qEl         2) = 0.1800 qEL
• Correct t1 (0.2 pts)                                                         m . This gives
                                                                                                 ured by caliper, but it is more convenient to   iii) (3 points) Increase the surface area of wa‐
• Correct a2 (0.1 pts)                         us the velocity component in the y‐direction;     put the glass plate on top of the graph paper   ter covering the glass plate as much as pos‐
• Correct vi (0.2 pts)                         once we return to the laboratory frame, we        and take the diameter reading from the mil‐     sible — in that way the mistake in calcula‐
• Correct vf (0.2 pts)                         need to add the x‐component of the                limeter grid of the graph paper. A possible
• Correct t2 (0.2 pts)                                                               √frame’s    pair of data is f = 15.9 mm and d = 5.8 mm.
                                                                                                                                                 tions introduced by the edge effects (the wa‐
                                                                           qE
                                               velocity vx = a1 T = 2m 1.811 mL             =                                                    ter surface is not flat near the edges of the
• Correct s (0.2 pts)                                                                   qE
• Correct t3 and t (0.2 pts)                          √                  √              √        Grading:                                        water pool) is minimised. It is safe to let
                                               0.9055 qEL                  vx2 + vy2 = qEL                                                       the water reach the edges of the glass plate
                                                          m so that v =                    m .   • Correct idea of searching for the focal
ii) (2 points) First solution: The centre of                                                       length by adjusting the height of the plate   as long as there is a small part of the peri‐
mass moves with constant acceleration a1 =     Grading:                                            holder in order to achieve a sharp image of   meter where it does not reach the edge —
qE/2m, and√has travelled distance sCM =                                                            the ceiling lights (0.7 pts)                  this guarantees that the water surface at the
                                  2            • Horizontal speed vx (0.4 pts)                                                                   edges forms with the horizon an angle equal
L−l/2+l/(2 √ 2) = 0.8200L = a1 T /2, hence     • Use energy balance or something similar to      • student takes into consideration that the
                                                                                                                                                 to the contact angle. However, you shouldn’t
T = 1.811 qE .mL                                 find rotational speed vy (0.4 pts)                light source is at a finite length or mentions
                                                                                                   in solution that it can be considered that    let the water reach the edges of the plate over
                                               • Correct distance travelled (0.6 pts)                                                            its entire perimeter as in that case, the angle
Grading:                                       • Rotational speed vy (0.4 pts)                     the light source is at a very large distance
                                                                                                   away. (0.3 pts)                               formed by the water surface can become lar‐
                                               • Pythagorean theorem (0.2 pts)
• Use sCM = a1 T 2 /2 for centre of mass                                                         • Correctly taken height measurements with      ger than the contact angle, due to the fact
   (0.5 pts)                                   iv) (2 points) For the string to be parallel to     a caliper (0.5 pts)                           that at the edge, the direction of the glass
• Correct a1 (0.5 pts)                         the x‐axis, the system must perform n + 12        • Correctly taken diameter measurements of      plate’s surface normal changes discontinu‐
• Correct sCM (0.6 pts)                        half‐periods, where n is an integer. Since          the drop using the caliper or using the mil‐  ously; this would result in a thicker water
• Correct T (0.4 pts)                          now the amplitude is small, the oscillations        limeter grid on the graphing paper (0.5 pts)  layer (this cannot happen if there is a part of
• If you assume small angle oscillation to cal‐are harmonic,    and the circular frequency       • The results should be roughly f = 15.9 mm     the perimeter still not touching the edge as
   culate time necessary for the string to align       √                                                                                         in that case, instead of increasing the depth,
                                                         qE                                        and d = 5.8 mm, but should later give ac‐
   with the x‐axis. (up to 1.4 pts)            ω =       ml (we can use the formula for a          curate α value. (1 pts)                       the water would spread to fill the unoccupied
                                               pendulum of length l/2 and equivalent grav‐                                                       parts of the plate). It is also recommended to
iii) (2 points) First solution: Due to the con‐                                                  ii) (2 points) Lensmaker’s equation can
                                               ity field g = qE/2m).      So, the travel time                                                    avoid water reaching the matte area as that
servation of y‐directional momentum, the y‐                     √                                be used to relate the focal length to the       part is not guaranteed to be clean and may
components of the balls are always equal. At   must be τ = π qE    ml
                                                                      (n + 12 ). On the other    curvature radius:                               have a different contact angle value. With
t = T , the string is parallel to the x‐axis;
                                                                                                          n−1                                    water volume V = 2.00 ml, the water fills al‐
since it is not stretchable, x‐components of hand,
                                                 √ √we can use the result from task ii: τ =          1
                                                                                                        =         ⇒ R = f (n − 1) ≈ 5.3 mm.      most the entire glossy part of the plate. By
                                                    qE 4λ − 2 + 2 cos ϕ, where λ = L/l < 1
the balls are equal, too, at that moment.           ml                                               f      R
                                                                                   √                                                             putting the glass plate on top of the graph pa‐
Hence, the speeds are equal, and energy con‐
servation   law  states EqL  = mv 2
                                    so that v  = and cos ϕ ≈ 1. So, π(n + 12 ) = 4λ. Since       Those who don’t know the lensmaker’s for‐ per, one can count the squares              of the grid,
√                                                λ < 1, this equality can only be satisfied      mula can derive it easily from Snell’s law      resulting   in A  =  12.7 cm 2
                                                                                                                                                                                . The thickness  of
                                                                                                 by considering a beam which falls onto the water layer is found as t = V /A ≈ 1.57 mm.
    qEL
     m .
                                                                            2
                                                 with n = 0, hence λ = π16 = 0.6169 so that
                                                                                                 lens parallel to the optical axis, and by using Grading:
Grading:                                         l = L/λ = 1.6211L.                              small angle approximation, sin x ≈ x. The
• Using energy conservation law (1.0 pts)        Grading:                                        water‐glass contact angle can be found using • Student understands that it is necessary to
• Kinetic energy of both masses (0.6 pts)                                                        trigonometry:                                      maximize the surface area of the water.
                                                 • Correct circular frequency (0.6 pts)                                                             (0.5 pts)
• Work done by electric field (0.2 pts)          • If circular frequency   deviates from the
• Correct v (0.2 pts)                                             √                                                         d                    • Student understands that the area of the
                                                   right by factor 2 (0.2 pts)                             α = 90° − acos      ≈ 33.2°              water should not extend to the edges of the
     Alternative solution: The time period • Correct rotation time with n (0.6 pts)                                        2R
                                                                                                                                                    glass plate. (0.5 pts)
0 < t < T is most conveniently analysed • Correct rotation time without n (0.2 pts)                                                              • If measurement of water volume V <
in the centre‐of‐mass frame. In that frame, • Correct travel time from ii (0.4 pts)              Grading:
                                                                                                                                                    2.5 ml. (0.5 pts)
there is a force of inertia equal to Fi = • Derivation of l (0.4 pts)                            • Correct idea of calculating the radius using • If measurement of the surface area of the
−ma1 = −qE/2. Hence, both balls perform                                                            the Lensmaker’s equation. Other methods          water. A < 13.5 cm2 (0.5 pts)
non‐linear oscillations around the centre of 9. SURFACE TENſıON (10 points) — Solution             (for example using direct thickness meas‐ • Correct formula to determine thickness of
                                                 by Jaan Kalda, grading schemes by ....            urement) only gives max 0.3 pts. (0.5 pts)
  the water layer. (0.5 pts)                       visibility.                                   dU /dt = 0, resulting in                      expression for total potential energy.
• The result should be around t = 1.57 mm.       iv) (2 points)Total potential energy of the wa‐                                               (0.4 pts)
  Give max points for t = 1.45 mm−1.70 mm.                                                                        ρgh2                       • Potention energy is shown in the expres‐
  (0.5 pts)                                      ter is U = σA(1 − cos α) + 2 V ρgt. If we plug
                                                                              1
                                                                                                         σ=                ≈ 0.077 N/m.        sion for total potential energy. (0.3 pts)
                                                 in A = V /t, we obtain                                       2(1 − cos α)
• if the thickness is measured directly max                                                                                                  • Minimum total potential energy is cor‐
  receivable points are 0.5 for a reasonable                     (                   )                                                         rectly found. (0.6 pts)
  result and 0.5 pts for a reasonable method                         1 − cos α ρgt               Grading:                                    • The result should be around σ              =
                                                          U =V σ               +       .
  if described as this has very poor precision                           t        2              • Surface energy is shown in the expression   0.077 N m−1 . Give max points for σ =
  because the caliper can not touch the wa‐                                                        for total potential energy. (0.3 pts)       0.060 N m−1 − 0.094 N m−1 . (0.4 pts)
  ter surface and the water surface has poor     Its minimum is easily found by equating • Ugw is taken into consideration in the
