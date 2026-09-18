---
id: kevin-zhou-notes-phy-ex096
source: kevin-zhou-notes
native_id: "phy Example 096"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex096
topic: [kvantumfizika]
subtopic: [atom–fény-kölcsönhatás, AC-Stark-eltolódás]
math_tools: [perturbációelmélet, differenciálegyenletek, effektív-Hamilton-operátorok]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "13937-14022"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Az AC Stark-eltolódás. Tekintsünk egy rezonancián kívül gerjesztett kétállapotú atomot:

                                 0       Ω cos(ωd t)
                    H=ℏ                               , ω1 − ωd = ∆.
                             Ω cos(ωd t)     ω1
Ha ∆ ≪ ω1 , akkor az atom közel van a rezonanciához, de amíg Ω ≪ ∆, a perturbáció nem tud jelentős átmeneteket okozni
|0⟩-ból |1⟩-be. A |1⟩ állapotban való végződés amplitúdója legfeljebb Ω/∆, ami (Ω/∆)2 valószínűségnek felel meg.
Kísérletekben ezzel általában nem törődünk; sokkal érdekesebb, hogy másodrendben a perturbáció Ω2 /∆ nagyságrendben
eltolja a két állapot oszcillációs frekvenciáját. Ez csekély mennyiség, de jelentős lehet, mert a gyakorlatban nagyon
jó frekvenciapontossággal rendelkezünk.
   A rendszer elemzéséhez a „gerjesztéssel együtt forgó” vonatkoztatási rendszerbe lépünk:

                                        −iωd t|1⟩⟨1|            0   Ω/2
                             UT (t) = e              , HT = ℏ
                                                               Ω/2 ∆
ahol a forgóhullám-közelítést is alkalmaztuk. Ezen a ponton triviális lenne diagonalizálni a mátrixot, de egy technika
szemléltetéséhez mást teszünk. Állandó perturbáció esetén azt találtuk, hogy az időfüggő perturbációelmélet másodrendig
terjedő eredménye csak a következő kombinációtól függ:
                                            X ⟨n|H1 |k⟩⟨k|H1 |i⟩
                                ⟨n|H1 |i⟩ +                      .
                                                   Ei − Ek
                                              k
Ezért ha olyan effektív H1,eff perturbációt tudnánk felépíteni, amelyre
                                                X ⟨n|H1 |k⟩⟨k|H1 |i⟩
                                ⟨n|H1,eff |i⟩ =
                                                      Ei − Ek
                                                  k
akkor annak elsőrendű eredményei megegyeznének az itt keresett másodrendű eredményekkel. Azt kapjuk, hogy
                                               −Ω2 /4∆

                                                            0
                                   H1,eff = ℏ
                                                  0     Ω2 /4∆
így a felhasadás ℏΩ2 /2∆. Természetesen ez az egzakt eredménnyel O(Ω2 ) rendig egyezik.

Ezután egy hatékony Hamilton-operátorok felépítésére szolgáló erős általános módszert tárgyalunk.

 • Sok helyzetben a dinamikának van egy gyorsan oszcilláló, számunkra érdektelen komponense és egy lassabb komponense,
   amelyet el szeretnénk különíteni. Vagyis az állapot ⟨ψ(t)⟩ időátlagára vagyunk kíváncsiak egy megfelelő τ időskálán,
   amely hosszabb a gyors dinamikánál, de rövidebb a lassú dinamikánál.

 • Az interakciós képben dolgozunk, ahol az időfejlődési operátor kielégíti

                          iℏ ∂t U (t, t0 ) = HI (t)U (t, t0 ),   |ψI (t)⟩ = U (t, t0 )|ψI (t0 )⟩

    és feltesszük, hogy HI kicsi. Olyan effektív Hamilton-operátort szeretnénk felépíteni, amely leírja ⟨ψI (t)⟩ fejlődését.
    Naivan ezt HI (t) egyszerű átlagolásával tehetnénk meg, de ez túl durva közelítés; például az előző példában így
    teljesen eldobtuk volna az AC Stark-eltolódást.

 • Ehelyett vegyük észre, hogy

                             iℏ ∂t ⟨|ψI (t)⟩⟩ = iℏ ∂t ⟨U (t, t0 )⟩|ψI (t0 )⟩
                                              = ⟨HI (t)U (t, t0 )⟩|ψI (t0 )⟩
                                              = ⟨HI (t)U (t, t0 )⟩⟨U (t, t0 )⟩−1 ⟨|ψI (t)⟩⟩

    ahol a fenti két egyenlet időátlagolt változatait használtuk. Ezért

                iℏ ∂t ⟨|ψI (t)⟩⟩ = Heff (t)⟨|ψI (t)⟩⟩,      Heff (t) = ⟨HI (t)U (t, t0 )⟩⟨U (t, t0 )⟩−1 .

 • U (t, t0 )-t most kifejthetjük a Dyson-sorfejtéssel, ami Heff perturbációs kifejtését adja. Számunkra elegendő HI
   másodrendjéig elmenni, és mivel Heff már tartalmaz egy HI tényezőt, U (t, t0 )-t elsőrendben fejthetjük ki:

                                                                  1 t ′
                                                                   Z
                          U (t, t0 ) = 1 + U1 (t), U1 (t, t0 ) =       dt HI (t′ ).
                                                                 iℏ t0
    Ezt a kifejtést elvégezve és a t0 argumentumot elhagyva

                             Heff (t) = ⟨HI (t)⟩ + ⟨HI (t)U1 (t)⟩ − ⟨HI (t)⟩⟨U1 (t)⟩.

 • Miközben |ψI (t)⟩ megtartja a normálását, ⟨|ψI (t)⟩⟩ nem teszi ezt, mert az átlagolás eltávolítja az amplitúdók gyorsan
   oszcilláló részeit. Ezért Heff (t) nem hermitikus. Mivel a gyorsan oszcilláló részekkel nem törődünk, ezt a problémát a
   hermitikus rész felvételével szüntetjük meg:
                                     †
                         Heff (t) + Heff (t)             1
            Heff (t) =                       = ⟨HI (t)⟩ + (⟨[HI (t), U1 (t)]⟩ − [⟨HI (t)⟩, ⟨U1 (t)⟩])
                                  2                      2
    ahol felhasználtuk, hogy U1 (t) antihermitikus.
