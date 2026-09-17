---
id: kevin-zhou-notes-phy-ex029
source: kevin-zhou-notes
native_id: "phy Example 029"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex029
topic: [elektromágnesség]
subtopic: [dielektrikumok, polarizáció, mágneses anyagok]
math_tools: [elektrosztatika, magnetosztatika, Maxwell-egyenletek]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "2687-3101"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Tekintsünk egy R sugarú, egyenletesen polarizált P polarizációjú gömböt. Ez ekvivalens két, ±Q össztöltésű, egyenletesen töltött gömbbel, amelyeket d távolsággal toltunk el úgy, hogy Qd = (4πR3 /3)P. A héjtétel szerint a belső tér
                                                   P
                                           Ep = −
                                                  3ϵ0
a külső tér pedig pontosan dipólustér. Tegyük fel, hogy ez a dielektrikumgömb homogén térben van. A teljes tér
                                             E = E0 + Ep
ahol E0 az alkalmazott külső tér, továbbá tudjuk, hogy

                                                P = χe ϵ0 E.

A rendszert megoldva
                               3                   κ−1            χe
                         E=       E0 ,    P=3          ϵ0 E0 =           ϵ0 E0 .
                              κ+2                  κ+2         1 + χe /3

adódik. Kis χe esetén ez közel megegyezik a naiv P = χe ϵ0 E0 eredménnyel, de annál kisebb, mert maga a gömb árnyékolja az általa érzékelt teret. Ez fontos χe atomos mérésekhez való kapcsolásában. Egy atom polarizálhatóságát így definiáljuk:
                                                 p = αE0
ahol csak az alkalmazott E0 teret számítjuk, mivel az atom által létrehozott tér elhanyagolható. Ezután naivan, n atomsűrűségű közegre χe = nα/ϵ0 adódna. Ehelyett azonban
                                                   3ϵ0 κ − 1
                                            α=
                                                    n κ+2
adódik, amit Clausius–Mossotti-formulának, optikában pedig Lorentz–Lorenz-egyenletnek nevezünk. Felmerülhet, hogy ez az eredmény csak gömb alakú mintára érvényes, de minden atom köré képzelhetünk egy, az atom méreténél sokkal nagyobb gömbfelületet, és az érvelés akkor is működik.

Ezután áttérünk a mágneses terek analóg állításaira. Már a kiindulásnál van egy további finomság.

  • Amint korábban tárgyaltuk, egy mágneses dipólus „mechanikai” potenciális energiája

                                                Umech = −µ · B.

    Ez nem tartalmazza a mágneses dipólus m vagy a B tér fenntartásához szükséges energiát, amelyet például egy elektromágnes szolgáltathat, deriváltja azonban a dipólusra ható helyes mechanikai erőket adja.

  • A teljes térenergia-sűrűség B 2 /2µ0, ezért két árameloszlás kölcsönhatási energiája — amelyek közül az első egy dipólus —:
                                       Z                Z
                                    1
                            U12 =        dr B1 · B2 = dr J1 · A2 = µ1 · B2 .
                                    µ0
    Ez éppen Umech ellentettje.

52 2. Folytonos közegek mechanikája

 • A két eredmény összhangjának belátásához megmutatható, hogy a dipólus áramának fenntartásához szükséges munka U1 = µ1 · B2. Így U1 + Umech = 0, ami azt tükrözi, hogy a mágneses terek nem végeznek munkát. Hasonlóan, a külső tér fenntartásához szükséges munka U2 = µ2 · B1 = µ1 · B2 a kölcsönösség miatt. Ezért
                                       U12 = Umech + U1 + U2
    vagyis az U12 energia helyesen számolható, ha minden hozzájárulást figyelembe veszünk.

 • Összefoglalva: U12 a teljes kölcsönhatási energia, Umech viszont az az energia, amelyet a dipólusokra ható erők kiszámításához kell használni. Az itt megjelenő finomságoknak semmi közük a dielektrikumoknál tárgyaltakhoz. Ehelyett abból erednek, hogy a helyzet leírására rossz változókat használunk. Elektrosztatikában két vezető kölcsönhatását úgy írhatjuk le, hogy a feszültségeiket vagy a töltéseiket rögzítjük; az előbbi esetben további előjel jelenik meg, mert az elemeknek munkát kell végezniük a feszültségek fenntartásához. Hasonlóan, magnetosztatikában két árameloszlás kölcsönhatását az áramok vagy a fluxusok rögzítésével írhatjuk le. A fluxusok tökéletes vezetők feltételezésével szabadon rögzíthetők, az áramokat viszont elemekkel kell fenntartani.

 • Fogalmilag a teljes energiában megjelenő, elektromos dipólus esetéhez képesti ellentétes előjel annak köszönhető, hogy az elektromos és mágneses dipólusok belső terei ellentétesek. A mágneses térrel egyirányú mágneses dipólus növeli a teljes térenergiát, az elektromos dipólus pedig csökkenti.

Most bevezetjük a mágnesezettséget és a mágnesezőteret.

 • A mágnesezettséget M dipólusmomentum-sűrűségként definiáljuk. Lineáris közegben
                                                 1 χm
                                           M=              B.
                                                 µ0 1 + χm
    Ez nem teljesen analóg χe definíciójával, és később látni fogjuk, miért.

     – A diamágneses anyagokra −1 < χm < 0 jellemző.
     – A szupravezetők, vagyis az állandó diamágnesek χm = −1 értékűek, ezért B = 0. A szupravezetést nem szabad összekeverni a tökéletes vezetőképességgel, amely biztosítja, hogy egy szilárd test belsejében E = 0 legyen. Ez B-t állandóvá teszi, de az állandó nem feltétlenül nulla.
     – A paramágneses anyagokra χm > 0 jellemző.
     – A ferromágnesek esetén M ̸= 0 lehet még B = 0 mellett is.

    A diamágneseket a nagyobb B terű tartományok taszítják, a paramágneseket pedig vonzzák.

 • Vegyük észre, hogy a dielektrikumra χe > 0 teljesül, mégis a nagyobb E terű tartományok vonzzák. Ezek az előjelváltások ismét a belső terek különbségének következményei. Mind a dielektrikumok, mind a diamágnesek csökkentik a teret az anyag belsejében.

 • Az elektromos esethez hasonló átalakításokból látjuk, hogy a mágnesezettség felületi és térfogati áramokat eredményez:
                              Kbound = M × n̂, Jbound = ∇ × M.

 • Az Ampère-törvényben szereplő mágneses teret az összes áram kelti,
                                      ∇ × B = µ0 (Jfree + Jbound ).

53 2. Folytonos közegek mechanikája

    A H mágnesezőteret úgy definiáljuk, hogy azt csak a szabad áram keltse:
                                           1
                                     H=       B − M,      ∇ × H = Jfree .
                                           µ0

 • Lineáris közegben
                                M = χm H,       µ = µ0 (1 + χm ),     B = µH

    ahol µ az anyag permeabilitása. Vegyük észre, hogy χm definíciója különbözik χe definíciójától, amely ehelyett D és E kapcsolatát adja meg.

 • Az aszimmetria oka, hogy Jfree, és így H, könnyen mérhető az anyagon kívül elhelyezett ampermérővel. A voltmérő viszont közvetve E-t méri, amely a teljes ρ töltéstől függ, nem pedig ρfree-től. χm és χe definícióját tehát úgy választjuk meg, hogy könnyen mérhetők legyenek.

 • Általában H sokkal hasznosabb mennyiség, mint D, bár történeti okokból mindkettőt használjuk. Egyes források H-t tekintik alapvető mennyiségnek, és mágneses térnek nevezik; B-re ilyenkor mágneses indukcióként hivatkoznak.

 • Ahogy korábban, H-t úgy gondolhatjuk, mint a kizárólag Jfree által keltett mágneses teret, de ez félrevezető, mert ∇ · H ̸= 0. A peremfeltételek:
                 ∆B∥ = µ0 (K × n̂),      ∆B⊥ = 0,      ∆H∥ = Kf × n̂,          ∆H⊥ = −∆M⊥ .

 • A dielektrikumokhoz hasonlóan a belső energia definiálható úgy, hogy
                                        Z                Z
                                      1                1
                                 U=        dr H · B =      dr A · Jfree .
                                      2                2
    Erre ugyanazok a megjegyzések és korlátozások vonatkoznak, mint a dielektrikumok esetén.

Megjegyzés. Earnshaw tétele mágnesekre. Vákuumban ∇2 V = 0, ezért elektrosztatikus térrel nem lehet stabilan bezárni töltéseket. Hasonlóan felmerül a kérdés, hogy magnetosztatikus térrel bezárhatók-e mágneses anyagok.
   Az anyag által érzékelt effektív potenciál |B|-vel arányos, továbbá tudjuk, hogy ∇ · B = 0 és ∇ × B = 0. Ekkor a térerősség egy komponensének Laplace-operátora eltűnik:

                              ∂ 2 Bi = ∂j ∂j Bi = ∂j ∂i Bj = ∂i (∂j Bj ) = 0

ahol a második lépés a rotációmentességet használja. Így

                          ∂ 2 (B 2 ) = 2Bi ∂ 2 Bi + 2∂j Bi ∂j Bi = 2(∂j Bi )2 ≥ 0.

Ezért B 2, és így |B| lokális minimumot elérhet, de lokális maximumot nem. Mivel a diamágneseket a kis |B| értékű tartományok vonzzák, diamágnesek esetén stabil egyensúly lehetséges, paramágneseknél viszont nem.

Az előbbiek példái a szupravezető lebegtetés (mivel a szupravezetők tökéletes diamágnesek) és az atomgázak mágneses csapdái, ha az atomokat diamágnesesnek választjuk. Létezik egy kedves játék is, a levitron, amely egy pörgettyűként forgó állandó mágnes stabil lebegtetését valósítja meg. Az állandó mágnes abban az értelemben viselkedik paramágnesként, hogy igyekszik a mágneses térhez igazodva átfordulni, de a pörgettyű forgása a mágnest a térrel ellentétes irányban tartja, ezért diamágnesként viselkedik.
    Hasonlóan, egy polarizálható anyagra erő hat:
                                       F = −∇(−p · E) = α∇E 2
ahol α ≥ 0. Ugyanezen logika szerint elektrosztatikus térben E 2-nek nem lehet lokális maximuma, ezért polarizálható részecskéket nem lehet csapdázni. Időben változó terekben azonban lehetséges a csapdázás; ezen alapulnak a lézeres csipeszek.

Most a Maxwell-egyenleteket vizsgáljuk anyag jelenlétében.

  • A fő különbség, hogy az időfüggő elektromos polarizáció áramot kelt,
                                                          ∂P
                                                   Jp =
                                                          ∂t
    a kötött Jb áram mellett. Ezért az Ampère-törvény bonyolultabb alakot ölt:
                                                           
                                                        ∂P            ∂E
                           ∇ × B = µ0 J f + ∇ × M +           + µ0 ϵ0    .
                                                         ∂t           ∂t

  • Az Ampère-törvény jelentősen egyszerűsödik, ha H-ra és D-re váltunk:
                                                               ∂D
                                            ∇ × H = Jf +          .
                                                               ∂t
    A többi Maxwell-egyenlet:
                                                               ∂B
                                 ∇ · D = ρf ,    ∇×E=−            ,   ∇·B=0
                                                               ∂t
    és ennek a megfogalmazásnak az az előnye, hogy csak szabad töltéstől és szabad áramtól függ, ezért gyakran feltűnik elektromérnökök pólóin.

  • Szabad töltés vagy szabad áram nélküli helyzetben, például semleges szigetelőben:
                                                   ∂B                            ∂D
                       ∇ · D = 0,     ∇×E=−           ,   ∇ · B = 0,     ∇×H=       .
                                                   ∂t                            ∂t
    Lineáris közeget feltételezve, az elektromos és mágneses terekre visszatérve:
                                                   ∂B                                ∂E
                      ∇ · E = 0,     ∇×E=−            ,   ∇ · B = 0,    ∇ × B = µϵ
                                                   ∂t                                ∂t
    amelyek éppen az eredeti Maxwell-egyenletek általános µ és ϵ értékekkel. Így például
                                                           √
    c = 1/ µϵ ≡ c/n sebességgel terjedő síkhullám-megoldások vannak, E0 = vB0 mellett.

  • Más helyzetekben a szabad töltést és a szabad áramot nem hanyagolhatjuk el. Vezetőben Jf = σE, és lineáris közeget feltételezve a Maxwell-egyenletek:
                          ρf                    ∂B                                        ∂E
                 ∇·E=        ,    ∇×E=−            ,    ∇ · B = 0,     ∇ × B = µσE + µϵ       .
                           ϵ                    ∂t                                        ∂t
    A szabad töltés azonban exponenciálisan lecseng:
                                    ∂ρf                          σ
                                        = −∇ · Jf = −σ(∇ · E) = − ρf
                                     ∂t                          ϵ
    ami azt tükrözi, hogy a töltés a vezető határaira vándorol.

55 2. Elektromágnesség

 • Miután az összes szabad töltés lecsengett, az egyetlen új tag az µσE tag az Ampère-törvényben. Ha a szokásos módon, az Ampère- és Faraday-törvény rotációját véve próbáljuk levezetni a hullámegyenletet, akkor
                                     ∂2E      ∂E                 ∂2B      ∂B
                         ∇2 E = µϵ       + µσ    ,   ∇2 B = µϵ       + µσ    .
                                     ∂t2      ∂t                 ∂t2      ∂t
    Az új tag több hatást eredményez. Először: valós k esetén a síkhullám ω-ja komplex lesz, ezért idővel disszipálódik. Valós ω esetén k komplex, ami fizikailag azt jelenti, hogy a hullámok a vezető felszínéről visszaverődnek, a bőrhatásmélységnek nevezett hosszskálán. Végül a kvázisztatikus határban, ahol a ∂ 2 B/∂t2 tag elhanyagolható, a hullámegyenlet B-re diffúziós egyenletté egyszerűsödik, ami azt jelenti, hogy az indukált mágneses tér szétterjed.
