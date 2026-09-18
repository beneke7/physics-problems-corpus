---
id: "kevin-zhou-e2-p021"
source: "kevin-zhou"
native_id: "KZ-E2-P021"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e2-p021"
topic: [elektrosztatika]
subtopic: [kapacitás, vezetők, tükörtöltések módszere]
math_tools: [sorok, energiamegmaradási módszerek]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/E2.txt"
source_url: "sources/kevin_zhou/site/handouts/E2.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

Tekintsünk két, r sugarú vezető gömböt, amelyek egymástól a ≫ r távolságra vannak, és
    össztöltésük ±Q. A gömbökre egy kondenzátor két lemezeként is gondolhatunk.

      (a) Határozzunk meg egy egyszerű, a ≫ r esetén érvényes közelítést a C kapacitásra.

    A valóságban ennek a rendszernek a pontos kapacitása az r/a szerint felírt végtelen sorral adható meg. Tekintsük
    a kapacitás korrekcióinak meghatározására szolgáló két módszert.

      (b) A rendszer U = Q2 /2C energiáját felhasználva határozzuk meg a C első nemtriviális korrekcióját.

      (c) Másfelől gondolhatunk a gömbök töltéseloszlására is. Ha mindkét gömbön nulladrendű homogén töltéssűrűségből
          indulunk ki, ez a másik gömbben elsőrendű tükörtöltést indukál, amely további másodrendű tükörtöltéseket,
          majd azután újabbakat indukál, és így tovább. Ezután a C = Q/∆V mennyiséget az összes tükörtöltés, valamint
          az általuk létrehozott teljes feszültségkülönbség összegezésével számíthatjuk ki. E módszerrel határozzuk meg
          a C első nemtriviális korrekcióját.

      (d) ⋆ Kiderül, hogy az 1/C mennyiség valamivel kezelhetőbb, mint C. Az r/a melyik rendjében jelenik meg az
          1/C második nemtriviális korrekciója?

       Példa 6

       Határozzuk meg egy R sugarú, Q össztöltésű, vékony vezető korong töltéseloszlását.




                                                      12


Kevin Zhou                                                                Physics Olympiad Handouts


    Megoldás
    Általában nagyon kevés olyan eset van, amikor egy vezető töltéseloszlása explicit módon meghatározható. Amint
    láttuk, a legegyszerűbb példák közül néhány tükörtöltésekkel oldható meg. Néhány összetettebb, kétdimenziós példa
    a konform leképezés nevű matematikai módszerrel oldható meg. Ez a különleges példa pedig egy elegáns trükkel.

    Tekintsünk egy az origó középpontú, egyenletesen töltött gömbhéjat, valamint egy P pontot a héjon belül, az xy
    síkban. A P pontban az elektromos tér a gömbhéjtétel szerint nulla. Emlékezzünk rá, hogy a gömbhéjtétel szokásos
    bizonyításakor két, a P pontból ellentétes irányban kinyíló kúpot rajzolunk. Az egyes kúpokban található töltések
    kioltó elektromos tereket hoznak létre.

    Most képzeljük el, hogy a gömbhéjat az xy sík felé zsugorítjuk, így elliptikussá válik. A döntő felismerés az,
    hogy a fenti gömbhéjtételes érv az xy sík pontjaira továbbra is érvényes. Amikor a héjat teljesen az xy síkra
    lapítjuk, egy koronggá válik, amelyen az elektromos tér nulla. Ez tehát érvényes töltéseloszlás a korong alakú
    vezetőhöz, és az egyértelműségi tétel szerint ez az egyetlen ilyen eloszlás.

    A [r, r + dr] sugarú tartományba lapított töltés mennyiségét nyomon követve azt kapjuk, hogy σ(r) ∝√
    R/ R2 − r2 , a proporcionalitási állandót rögzítve pedig azt kapjuk, hogy

                                                     Q
                                        σ(r) =      √        .
                                                 4πR R2 − r2
    Ugyanezt megmutathatjuk az M6 „harmadik gömbhéjtételének” c, ϵ → 0 határértékével is. Vegyük észre, hogy ez a
    vékony korong mindkét oldalán érvényes felületi töltéssűrűség, ezért ha egy végtelenül vékony korong határértékét
    szeretnénk, az eredményt meg kell duplázni.
