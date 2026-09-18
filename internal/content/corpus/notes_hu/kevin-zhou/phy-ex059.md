---
id: kevin-zhou-notes-phy-ex059
source: kevin-zhou-notes
native_id: "phy Example 059"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex059
topic: [kvantumfizika]
subtopic: [bizonytalansági elv, kvantumalapok, hullámmechanika]
math_tools: [lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "6751-6849"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. A bizonytalansági elv. Egy A megfigyelhető mennyiség és |α⟩ állapot esetén definiáljuk a
∆A = A − ⟨A⟩ mennyiséget. Ekkor A varianciája
                                  ⟨∆A2 ⟩ = ⟨A2 ⟩ − ⟨A⟩2 .
Legyen most A és B két megfigyelhető mennyiség.

                                ⟨α|∆A2 |α⟩⟨α|∆B 2 |α⟩ ≥ |⟨α|∆A∆B|α⟩|2

a Schwartz-egyenlőtlenség alapján. Vegyük észre, hogy felírhatjuk
                                                1
                                  ∆A∆B =          ([∆A, ∆B], {∆A, ∆B}) .
                                                2
E két tag rendre ferde-Hermitikus és Hermitikus, ezért várható értékeik rendre képzetesek és valósak.
Így
                                               1
                          ⟨∆A2 ⟩⟨∆B 2 ⟩ ≥        |⟨[A, B]⟩|2 + |⟨{∆A, ∆B}⟩|2 .

A második tagot elhagyva kapjuk
                                                1
                                      σA σB ≥ |⟨[A, B]⟩|
                                                2
ahol σX a szórás. Ez a bizonytalansági elv.

5.2     Hullámmechanika
Most áttekintjük az egyenes mentén mozgó részecskék hely- és impulzusoperátorait.

 • Egy egyenes mentén mozgó részecske állapota a H = L2 (R) Hilbert-tér eleme, ahol ez az R-en
   négyzetesen integrálható függvények tere. Ez a tér szeparábilis, ezért megszámlálható bázisa van.

 • E tér tipikus megfigyelhető mennyiségei közé tartoznak a projekciók:

                              (P[a,b] f )(x) = f (x) for a ≤ x ≤ b, 0 otherwise.

      Ez a megközelítés azonban fizikailag kényelmetlen, mivel a legtöbb érdekes operátor (például
      x̂, p̂ = −iℏ∂x ) nem diagonalizálható H-ban, hiszen sajátfüggvényeik nem lennének normálhatók.

 • Mindezeket az operátorokat elfogadhatónak tekintjük, és formálisan akkor is felvesszük a saját-
   vektoraikat, ha nem tartoznak H-hoz. Ez erősen kibővíti a vizsgált teret, mivel x-nek és p-nek
   megszámlálhatatlan sajátbázisa van, miközben az eredeti térnek megszámlálható bázisa volt.
   Fizikailag ez nem jelenthet problémát, mert x minden tényleges mérése „elmosott”, és nem végtelenül
   pontos. Így a ténylegesen megmért megfigyelhető mennyiségek H-ban élnek, x pedig csak kényelmes
   formális eszköz.

 • Kezdjük azzal, hogy az x ∈ R esetén az |x⟩ ketek alkossanak x teljes ortonormált sajátbázisát,
   ahol
                                                          Z
                                         ′         ′
                         x̂|x⟩ = x|x⟩, ⟨x |x⟩ = δ(x − x),    dx|x⟩⟨x| = 1.

      A teljességet használva                 Z                   Z
                                  |ψ⟩ =       dx |x⟩⟨x|ψ⟩ =        dx ψ(x)|x⟩.

      A ψ(x) = ⟨x|ψ⟩ mennyiséget hullámfüggvénynek nevezzük.

 • Sok esetben egy kvantumelmélet a „kanonikus kvantálással” kapható meg: a klasszikus
   megfigyelhető mennyiségek Poisson-zárójeleit kvantumoperátorok kommutátoraival, iℏ-szeres
   tényezővel helyettesítjük. Hely és impulzus esetén ez [x̂, p̂] = iℏ.

 • Véges dimenziós Hilbert-térben a bal oldal nyoma a nyom ciklikus tulajdonsága miatt eltűnik,
   míg a jobb oldal nyoma nem. A ciklikus tulajdonság végtelen dimenziós Hilbert-terekben nem áll
   fenn, ezért ezek szükségesek a hely és az impulzus leírásához. Heurisztikusan ennek az az oka,
   hogy tr(x̂p̂) és tr(p̂x̂) egyaránt végtelen, így a kivonásuk nem értelmes.

 • Ha x̂-et úgy valósítjuk meg, hogy egy hullámfüggvényt x-szel szorzunk, akkor a Stone–von Neumann-
   tétel szerint p̂-et a kommutációs reláció, izomorfizmusoktól eltekintve, egyértelműen meghatározza:
                                                            ∂
                                                 p̂ = −iℏ      .
                                                            ∂x

 • Legyen |p⟩ a p̂ ortonormált bázisa:

                                                 p̂|p⟩ = p|p⟩.

      Ezután definiálhatunk impulzustérbeli hullámfüggvényt, és a kommutációs relációból azonnal
      következik a Heisenberg-féle bizonytalansági reláció: σx σp ≥ ℏ2.



  • Az |x⟩ és |p⟩ bázisokat az alábbi megjegyzéssel kapcsolhatjuk össze:

                                       −iℏ∂x ⟨x|p⟩ = p⟨x|p⟩,               ⟨x|p⟩ = N eipx/ℏ .

    Itt p-vel balról hatottunk a ⟨x| bra-ra. A normáláshoz vegyük észre, hogy
                         Z                       Z
                                                          ′
                ⟨p|p′ ⟩ = dx ⟨p|x⟩⟨x|p′ ⟩ = |N |2 dx eix(p −p)/ℏ = |N |2 (2πℏ)δ(p − p′ ).

    Ezért
                                                                        1
                                                      ⟨x|p⟩ = √             eipx/ℏ
                                                                        2πℏ
    ahol egy tetszőleges fázist eggyel egyenlőnek választottunk.

  • Formálisan az olyan állapotok, mint |x⟩ és |p⟩, egy „rigged Hilbert-térben” élnek. Ez egy valódi
    Hilbert-térből és olyan vektorok halmazából áll, amelyeknek egymással nincs jól definiált
    skalárszorzatuk, de a valódi Hilbert-tér minden elemével van. Másképpen: a matematikai formalizmust
    egyszerűen úgy definiáljuk, hogy a használt heurisztikus szabályok működjenek.
