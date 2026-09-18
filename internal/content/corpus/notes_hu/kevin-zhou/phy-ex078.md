---
id: kevin-zhou-notes-phy-ex078
source: kevin-zhou-notes
native_id: "phy Example 078"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex078
topic: [kvantumfizika]
subtopic: [adjungált reprezentáció, SO(3), SU(2), kvantumspin]
math_tools: [lineáris algebra, geometria]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "9028-9171"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Az adjungált reprezentáció változatai. A fentiek exponenciálásával a csoport adjungált
hatásának képlete:

                                   R0 R(n̂, θ)R0−1 = R(R0 (n̂), θ).

Levezethetjük egy algebra önmagára gyakorolt adjungált hatását is, ami a Lie-algebra egy reprezen-
tációját adja. Először tekintsük egy infinitézimális csoportelegyen végzett konjugálást:

                          A(1 + ϵh)A−1 = 1 + ϵAhA−1 ,       A ∈ G,    h ∈ g.

Ez megmutatja, hogy az adjungált hatás az algebraelemeket is konjugálja. Ha ezután A = 1 + ϵg,
ahol g ∈ g,

                              h → (1 + ϵg)h(1 − ϵg) = h + ϵ(gh − hg).

Az ϵ szerinti deriválással, hogy definiáljuk az algebra adjungált hatását, azt kapjuk, hogy g úgy hat
h-ra, hogy [g, h]-ba küldi. Mellékesen ez annak is bizonyítása, hogy a Lie-algebra zárt a kommutátor-
ra, mivel tudjuk, hogy az algebra zárt az adjungált hatásra.
   Közvetlen példaként tekintsük az SO(3) mátrixos Lie-csoportot. Mivel a művelet mátrixszorzás,
a fenti kommutátor éppen a mátrixkommutátor. Fenti számításaink azt mutatják, hogy a so(3) Lie-
algebra önmagára gyakorolt adjungált hatása a vektoriális szorzás.

Megjegyzés. A Lie-csoport nemkommutativitása nemtriviális Lie-zárójelet tükröz. Ennek első meg-
nyilvánulása az, hogy
                             etg eth e−tg e−th = 1 + t2 [g, h] + . . .

Ez azt jelenti, hogy a nemzérus Lie-zárójel miatt a megfelelő csoporte­lemek nem kommutálnak; egyszerű
példaként az x̂ és ŷ körüli kis forgatások kommutátora az x̂ × ŷ = ẑ körüli forgatás. Megfordítva,
ha a Lie-zárójel nulla, a kommutátor is nulla.
   A fenti állítás másik alakja a Baker–Campbell–Hausdorff-tétel, amely a következő mátrixazonosság:
                                        1         1               1
              eX eY = eZ ,   Z = X + Y + [X, Y ] + [X, [X, Y ]] + [Y, [Y, X]] + . . .
                                        2         12             12
ahol minden további tag kizárólag X és Y kommutátoraiból épül fel. Ezért ha ki tudjuk számítani az
algebra kommutátorát, akkor elvben a csoportbeli szorzást is kiszámíthatjuk.

   Az SO(3) csoport kompakt, összefüggő, háromdimenziós sokaság; egyben merev test konfigurációs
tere is, ezért a merev testek hullámfüggvényei az SO(3) sokaságán vannak definiálva. Hasznos tehát
koordinátákat választani hozzá; erre egy lehetőség az Euler-szögek rendszere.

Megjegyzés. Az Euler-szögek. Egy forgatás egy koordinátarendszer orientációjának felel meg; ezért egy
forgatást egyértelműen megadhatunk azzal, hogy definiáljuk azokat az x̂′, ŷ′, ẑ′ tengelyeket, amelyekbe
az eredeti tengelyeinket forgatni szeretnénk. Tegyük fel, hogy ẑ′ gömbi koordinátái az eredeti
rendszerben α és β. Ekkor az
                                           R(ẑ, α)R(ŷ, β)
forgatás az eredetileg ẑ irányába mutató vektort ẑ′ irányába viszi. Az x̂ és ŷ tengelyek azonban
nem a megfelelő helyre kerülnek. Ennek javításához a többi forgatás előtt ẑ körüli előforgatást
végezhetünk; ezért minden forgatás felírható:

                                  R(α, β, γ) = R(ẑ, α)R(ŷ, β)R(ẑ, γ).

Ez az Euler-szögek zyz-konvenciója. α és γ 0-tól 2π-ig, β pedig 0-tól π-ig változik. Az SO(3)
csoport sokasága azonban nem S 1 × S 1 × [0, π]. Ezt tükrözi, hogy a szögek szélsőértékeinél az
Euler-szögparaméterezés nem egyértelmű.

7.2     Az su(2) reprezentációi
Most a kvantumspint vizsgáljuk, a spin 1/2 esetre összpontosítva.

  • Egy hozzá tartozó Hilbert-térrel rendelkező kvantummechanikai rendszerben azt várjuk, hogy a
    forgatásokat R a téren ható unitér U (R) operátorok valósítják meg. Ésszerű feltenni, hogy
    R → U (R) csoporthomomorfizmus, így SO(3) reprezentációját kapjuk a Hilbert-téren.

  • Egy Lie-csoport reprezentációja automatikusan a Lie-algebra reprezentációját is adja. Pontosan
    definiáljuk
                                                   ∂U (θ)
                                           Jk = iℏ
                                                    ∂θk θ=0
      ahol U (θ) a θ̂ tengely és θ szög körüli forgatás. Ekkor

                                              [Ji , Jj ] = iℏϵijk Jk .

      Ez közvetlenül megmutatható az infinitézimális forgatások kommutátorának vizsgálatával.

 • A J operátorok forgatásokat generálnak, az i tényező Hermitikussá teszi őket, a ℏ tényező pedig
   a perdület dimenzióját biztosítja. Ezért J-t a rendszer perdületoperátorának definiáljuk.

 • Ezzel a definícióval az identitáshoz közeli forgatások alakja

                                    i                                     i
                     U (n̂, θ) = 1 − θn̂ · J + . . . ,   U (n̂, θ) = exp − θn̂ · J .
                                    ℏ                                     ℏ

   Mivel exponenciálással visszakaphatjuk a csoport reprezentációját, elegendő az algebra reprezen-
   tációit megtalálnunk, vagyis olyan mátrixhármasokat, amelyek kielégítik a fenti kommutációs
   relációkat.

 • Egy lehetséges reprezentáció
                                                         ℏ
                                                  J=       σ
                                                         2
   amelyben
                                                         θ                θ
                             U (n̂, θ) = e−iθn̂· σ/2 = cos − i(n̂ · σ) sin .
                                                         2                2
   Ez adja a spin 1/2 reprezentációját; megmutatja, hogyan transzformálódnak az állapotok forgatás
   alatt.

 • Noha egy spin 1/2 részecske perdülete nem vektor, mégis azt várjuk, hogy a perdület vektorként
   viselkedik forgatások alatt, abban az értelemben, hogy a ⟨J⟩ várható érték vektorként transzformálódik.
   Ekkor

                                ⟨U ψ|σ|U ψ⟩ = ⟨ψ|U † σU |ψ⟩ = R⟨ψ|σ|ψ⟩

   szükséges, amiből
                                               U † σU = Rσ.
   Ez közvetlenül ellenőrizhető a fenti explicit U-képlettel.

 • A fenti képlet ekvivalens korábbi adjungált képletünkkel. Inverzió és a-val való skalárszorzás után
   kapjuk:
                                      U (a · σ)U † = (Ra) · σ.
   Ez az adjungált hatás egy másik képlete; a csoport általi konjugálás a-t Ra-ba viszi.

 • A fenti explicit képletből észrevehetjük, hogy

                                              U (n̂, 2π) = −1.

   Ez a fázis fizikailag megfigyelhető; neutroninterferometriában úgy láthatjuk, hogy egy nyalábot
   kettéosztunk, relatív 2π forgatást végzünk, majd újraegyesítjük. Ekkor reprezentációnk valójában
   kettő az egyhez leképezés. Matematikailag ez azt jelenti, hogy SO(3) projektív reprezentációira
   van szükségünk, amelyekről kiderül, hogy ekvivalensek az SO(3) kétszeres fedésének, az SU (2)-nek
   a reprezentációival. Spin 1/2 esetén egyszerűen az SU (2) fundamentális reprezentációjával dolgozunk.

 • Az SU (2) definícióját használva minden U ∈ SU (2)-re
                                                        X
                                    U = x0 + ix · σ,       x2i = 1

   ezért SU (2) topológiailag S 3. Az xi-ket Cayley–Klein-paramétereknek nevezzük.

Megjegyzés. Az Euler-szögek felbontása spinorforgatásokra is működik:
                                                                                        −iθ/2
               cos θ/2   −i sin θ/2                 cos θ/2 − sin θ/2                  e        0
 U (x̂, θ) =                         , U (ŷ, θ) =                      , U (ẑ, θ) =                 .
              −i sin θ/2  cos θ/2                    sin θ/2 cos θ/2                     0    eiθ/2
Ezután egy általános forgatás felírható:
                                 U (α, β, γ) = U (ẑ, α)U (ŷ, β)U (ẑ, γ)
ahol α ∈ [0, 2π], β ∈ [0, π], γ ∈ [0, 4π]. γ kiterjesztett tartománya a kétszeres fedést veszi
figyelembe. Ennek belátásához vegyük észre, hogy a klasszikus R forgatások a ±I maggal rendelkező
U spinorforgatások reprezentációi. γ kiterjesztett tartományával, amely a −1-et is biztosítja,
mindent megkapunk.
