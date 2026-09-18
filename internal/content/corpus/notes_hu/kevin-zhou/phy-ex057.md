---
id: kevin-zhou-notes-phy-ex057
source: kevin-zhou-notes
native_id: "phy Example 057"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex057
topic: [kvantumfizika]
subtopic: [Hilbert-terek, operátorok]
math_tools: [lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6548-6735"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Nem minden megszámlálhatóan végtelen dimenziós tér teljes: tekintsük a V teret, amely
végtelen vektorokból áll, és amelyeknek csak véges sok nem zérus komponense van. Ekkor a sorozat

                            (1, 0, . . .), (1, 1/2, 0, . . .), (1, 1/2, 1/3, 0, . . .), . . .

Cauchy-sorozat, de nem konvergál V-ben.

Most a Hilbert-téren értelmezett operátorokat vizsgáljuk.


 • Legyen A : V → W egy operátor. Ekkor definiálhatjuk az A∗ : W ∗ → V ∗ visszahúzott operátort
   a következőképpen:

                                        A∗ (⟨β|)|α⟩ = ⟨β|(A|α⟩).

   Mivel a visszahúzás mindig megkonstruálható (és ehhez még skalárszorzatra sincs szükség), célszerű
   úgy jelölni, hogy a fenti két oldal ugyanúgy nézzen ki. Dirac-jelölésben mindkettőt ⟨β|A|α⟩ alakban
   írjuk; A balra hatása a bra-kre egyszerűen a fenti A∗-beli hatás.

 • V = W esetén A Hermitikus adjungáltját, A†-t a következőképpen definiáljuk:

                                             A† |α⟩ ↔ ⟨α|A

   ahol a ↔ a skalárszorzatból származó bra/ket megfeleltetést jelenti. Az A|α⟩ = |Aα⟩ kethez
   tartozó bra-t ⟨Aα|-ként írva a fenti feltétel azt mondja, hogy ⟨A† α| = ⟨α|A.

 • Itt a Dirac-jelölés kissé nehézkes. A szokásos lineáris algebrai jelölésben a skalárszorzatokat
   explicitebbé tehetjük. A ⟨β|α⟩ = (β, α) jelöléssel A† definíciója

                                          (A† β, α) = (β, Aα).

   Ez formálisan bármely A : V → V leképezésre alkalmazható, de lineáris operátorok esetén mindig
   létezik egyértelmű, a fenti feltételt kielégítő A†.

 • Az adjungált Dirac-jelölésben való megadásának legegyszerűbb ekvivalens módja:

                                         (⟨β|A|α⟩)∗ = ⟨α|A† |β⟩.

   Mivel egy szám adjungáltja a komplex konjugáltja, ebből sejthető, hogyan kell egy általános
   kifejezés adjungáltját venni: konjugáljunk minden számot, cseréljük fel a bra-ket párokat, és
   vegyük az operátorok adjungáltját.

 • Azt mondjuk, hogy A Hermitikus, ha A = A†, bizonyos technikai feltételek mellett, amelyeket
   hallgatólagosan figyelmen kívül hagyunk. A megfigyelhető mennyiségek H-n értelmezett Hermitikus
   operátorok.

 • Azt mondjuk, hogy A izometria, ha A† A = 1, tehát A megőrzi a skalárszorzatokat; unitér, ha
   invertálható izometria, A† = A−1, amiből AA† = 1 is következik. Nem minden izometria unitér:
   ha |n⟩ ortonormált bázis n ∈ Z-vel, akkor az A|n⟩ = |n + 1⟩ eltolási operátor izometria, de
   AA† ̸= 1.

 • Az operátorok Dirac-jelöléssel is felírhatók. Például két |α⟩ és |β⟩ ketből megadhatjuk a
   |β⟩⟨α| operátort. Közönséges jelölésben ezt a T operátort a

                                         T (α, β)(γ) = β(α, γ)

   képlet definiálná. Ez egy matematikus számára világos lehet, de nem triviális műveletek esetén
   gyorsan zárójelek egymásba ágyazott tömege, jelölési rémálom keletkezne, amit a Dirac-jelölés
   hivatott elkerülni. A Dirac-jelölésből az is nyilvánvaló, hogy az adjungált |α⟩⟨β|.

 • A spektráltétel szerint ha A = A†, akkor A minden sajátértéke valós, és a különböző ai-khez
   tartozó sajátalterek ortogonálisak. Ha a tér szeparábilis, minden sajátaltér véges dimenziós,
   ezért Gram–Schmidt-eljárással ortonormált sajátbázist konstruálhatunk.


  • Egy A operátor projekció, ha A2 = A. Például az A = |α⟩⟨α| operátor akkor projekció, ha
    ⟨α|α⟩ = 1.
  • Egy |ϕi ⟩ bázis teljes, ha i |ϕi ⟩⟨ϕi | = 1. A projekciók összege az identitás.
                                P

  • Teljes ortonormált bázis esetén az operátorokat és vektorokat mátrixelemekre bonthatjuk. Például

                                                                                      
                         X                               ⟨ϕ1 |A|ϕ1 ⟩ ⟨ϕ1 |A|ϕ2 ⟩ . . .
                     A=        |ϕi ⟩⟨ϕi |A|ϕj ⟩⟨ϕj | ∼ ⟨ϕ2 |A|ϕ1 ⟩      ...     . . . .
                           i,j                               ...         ...     ...
    Ebben a mátrixos jelölésben A† a konjugált transzponált.
  • Végtelen dimenziós tereket tekintve nem minden Hermitikus operátornak van teljes sajátbázisa.
    Legyen H = L2 ([0, 1]) és A = x̂. Ekkor A-nak nincs sajátvektora H-ban. Ez aggasztó, mivel
    fizikailag olyan megfigyelhető mennyiségeket részesítünk előnyben, amelyeknek teljes sajátbázisuk
    van.
  • A-t korlátosnak nevezzük, ha
                                                     ⟨α|A|α⟩
                                              sup            < ∞.
                                          |α⟩∈H/{|0⟩} ⟨α|α⟩

    A-t kompakt operátornak nevezzük, ha minden korlátos {|αn ⟩} sorozat (ahol ⟨αn |αn ⟩ < β egy
    rögzített β-ra) tartalmaz olyan {|αnk ⟩} részsorozatot, amelyre {A|αnk ⟩} normában konvergens
    H-ban.
  • Megmutatható, hogy ha A kompakt, akkor korlátos is. A kompaktság elegendő ahhoz, hogy egy
    Hermitikus operátornak teljes sajátbázisa legyen, a korlátosság viszont sem nem szükséges, sem
    nem elégséges. Mindazonáltal olyan megfigyelhető mennyiségeket is figyelembe veszünk, amelyek
    sem korlátosak, sem kompaktak, ha ez hasznosnak bizonyul.
  • Ha |ai ⟩ és |bi ⟩ két teljes ortonormált bázis, akkor az U|ai ⟩ = |bi ⟩ összefüggéssel definiált U
    unitér. Ez adja a bázisváltás képletét:
                            X = Xij |ai ⟩⟨aj | = Ykl |bk ⟩⟨bl |,   Xij = Uik Ykl Ulj† .

  • A fenti képletet használva egy véges dimenziós Hermitikus mátrix mindig diagonalizálható egy
    unitér, vagyis ortonormált sajátbázisba vivő mátrix segítségével.
  • Ha A és B diagonalizálható, akkor pontosan akkor diagonalizálhatók egyszerre, ha [A, B] = 0;
    ekkor kompatibilisnek nevezzük őket. Az előre irány triviális. A megfordításban legyen
    A|αi ⟩ = ai |αi ⟩. Ekkor AB|αi ⟩ = ai B|αi ⟩, tehát B megőrzi A sajátalgebereit. Ezért A
    diagonalizálásakor B blokkdiagonális, és B diagonalizálható az A minden egyes sajátalterén belül.

A továbbiakhoz összegyűjtünk néhány hasznos kommutátorazonosságot.
  • A Hadamard-lemma szerint A és B operátorokra
                                                1               1
                    eA Be−A = B + [A, B] +         [A, [A, B]] + [A, [A, [A, B]]] + · · · .
                                                2!              3!
    Intuitívan ez egyszerűen A adjungált hatása B-n, amely infinitézimálisan az [A, B] kommutátor.
    Ezért az eA B-re gyakorolt művelete a kommutátorművelet exponenciálisa kell legyen. Az
    adA (B) = [A, B] definícióval ez azt jelenti, hogy
                                              eA Be−A = eadA B
    pontosan a kívánt azonosság.


 • Ennek közvetlenebb bizonyítása, ha definiáljuk

                                           F (λ) = eλA Be−λA

    és differenciálegyenletet keresünk F-re; ez ugyanaz az ötlet más jelöléssel.

 • Glauber tétele szerint ha [A, B] kommutál A-val és B-vel is, akkor

                                  A B                  1
                                 e e = exp A + B + [A, B] .
                                                       2
    Ennek belátásához definiáljuk

                           F (λ) = eλA eλB ,    F ′ (λ) = (A + eλA Be−λA )F (λ).

    Az előző tétel felhasználásával azonban

                                    F ′ (λ) = (A + B + λ[A, B])F (λ).

   Ezért a következő megoldást sejtjük:
                                                        λ2

                                  F (λ) = exp λ(A + B) + [A, B]
                                                        2
    Ez a megoldás akkor teljesíti a differenciálegyenletet, ha az exponenciális argumentuma kommutál
    a deriváltjával; ezt gyorsan ellenőrizhetjük. λ = 1-et választva megkapjuk az eredményt.

 • Glauber tételének speciális esete, hogy ha [A, B] = cI, akkor

                                     eA+B = eB eA ec/2 = eA eB e−c/2 .

    Ez megmutatja, hogyan kell összeszorozni olyan kifejezéseket, amelyek „majdnem kommutálnak”.

 • Általános [A, B] esetén eA eB még mindig egyetlen exponenciálisként írható fel bonyolultabb
   módon, a teljes Baker–Campbell–Hausdorff-tétel segítségével; ez a tétel Glauber tételét speciális
   esetként tartalmazza.

 • Vegyük észre, hogy egy A operátor exponenciálisa kétféleképpen definiálható: a P n
   n A /n! soron keresztül, vagy, ha A-nak teljes sajátbázisa van, a spektrális felbontáson keresztül.
   Ha A sajátértékei λi , akkor eA-nak ugyanazok a sajátvektorai, de a sajátértékei eλi . A fenti
   bizonyítások függetlenek a választott definíciótól, de a soros definíció egyszerű helyzetekben is
   divergens lehet; a spektrális felbontás megbízhatóbb Hermitikus operátoroknál.

Most készen állunk a kvantummechanika posztulátumainak kimondására.

  1. Egy rendszer állapotát t időpontban egy H Hilbert-térben lévő sugár adja meg. Megállapodás
     szerint az állapotokat egységnyi normára normáljuk.

  2. A megfigyelhető mennyiségek olyan Hermitikus operátoroknak felelnek meg, amelyek sajátállapotai
     teljesek. Ezek a mennyiségek kísérletben megmérhetők.

  3. A Hamilton-operátornak nevezett H megfigyelhető mennyiség az időfejlődést a
                                               d
                                          iℏ      |ψ(t)⟩ = H|ψ(t)⟩.
                                               dt
     egyenlettel definiálja.


   4. Ha az A megfigyelhető mennyiséget akkor mérjük, amikor a rendszer |α⟩ állapotban van, és
      A-nak |αi ⟩ sajátvektorokból álló ortonormált bázisa van ai sajátértékekkel, akkor az A = a
      mérési eredmény valószínűsége
                                X                                  X
                                    |⟨aj |α⟩|2 = ⟨α|Pa |α⟩, Pa =       |aj ⟩⟨aj |.
                                aj =a                                   aj =a

      A mérés után a rendszer (nem normált) állapota Pa |α⟩.
                                                                                           (i)
   5. Ha két egyedi rendszer Hilbert-terei H(i), ortonormált bázisaik pedig |ϕn ⟩, akkor a kettőt
      leíró összetett rendszer Hilbert-tere H(1) ⊗ H(2), ortonormált bázisa pedig
                       (1)     (2)
      |ϕij ⟩ = |ϕi ⟩ ⊗ |ϕj ⟩. Egy H(1)-en ható A operátor kiterjesztése A ⊗ I, és így tovább.

A negyedik posztulátumból következik, hogy egy rendszer állapota visszafordíthatatlan,
szakadásszerű módon változhat. Léteznek más formalizmusok, amelyekben ez nem így van, de itt ezt
igazságként fogadjuk el.
