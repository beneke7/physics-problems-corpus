---
id: kevin-zhou-notes-phy-ex076
source: kevin-zhou-notes
native_id: "phy Example 076"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex076
topic: [kvantumfizika]
subtopic: [operátorrendezés, úttintegrálok]
math_tools: [kalkulus, lineáris algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "8923-9010"
archive_layer: reference_notes
source_role: explanatory_example
---

Példa. Operátorrendezés az úttintegrálban. Kvantumszinten az operátorok általában nem kommutálnak,
és a sorrendjük befolyásolja a fizikát. Az úttintegrál minden változója azonban látszólag kommutál.
Kiderül, hogy az operátorrendezést a diszkretizálási eljárás határozza meg. Elektromágneses térben
lévő részecskére például a helyes fázistényező
                                                                                         
                     N −1                 2                                           
                  iϵ X      m(x j+1 − x j )    q x j+1 − x j      x j+1 + x j
           exp                              +               ·A                 − V (xj ) 
                  ℏ              2ϵ2           c      ϵ                2
                     j=0

ahol V-t szokásosan a kezdeti pontban értékeljük ki, A-t viszont a felezőpontban. Megmutatható, hogy
ez a helyes választás, ha ϵ szerint rendről rendre kifejtjük, ahogy korábban tettük. Bár V kiértékelési
pontja nem számít, A kiértékelési pontja biztosítja, hogy az úttintegrál p · A + A · p tagot tartalmazó
Hamilton-operátort írjon le.
    Naivan a kiértékelési pont nem számíthatna, mivel a kontinuumhatárban nem okoz különbséget. A
probléma az, hogy az úttintegrál útjai nem differenciálhatók, ahogy korábban láttuk, ξ = O(ϵ1/2 )
és nem ξ = O(ϵ). A felezőpontos kiértékelés O(ξ 2 ) = O(ϵ) rendben okoz különbséget, pontosan abban
a tagban, amely számít. Ezt a finomságot az úttintegrálok laza, kontinuumjelölése a szőnyeg alá söpri.
    Általában az operátorrendezésre többféle előírás létezik, köztük a normálrendezés (kvantumtér-
elméletben használatos) és a Weyl-rendezés, amely heurisztikusan minden lehetséges sorrend fölött
átlagol. Más olyan Hamilton-operátorral azonban az alábbiakban nem találkozunk, amelynél ez a finomság
fellépne.

 Megjegyzés. Ha az úttintegrált tekintjük elsődlegesnek, akkor a Hilbert-teret is definiálhatjuk vele,
„felnyitva” azt. Az úttintegrál szorzási tulajdonsága szerint
                                       Z            Z x(t′ )=x′               Z x(t)=xf
                                                ′                        iS
                    K(xf , x0 , t) =       dx                     Dx(τ ) e                 Dx(τ ) eiS .
                                                     x(0)=x0                   x(t′ )=x′

Az előálló dx′ integrál az elmélet Hilbert-terén vett integrál. Általánosabb helyzetben, például
 húrelméletben, az úttintegrált különböző módokon „felnyithatjuk”, és ugyanazon amplitúdó különböző
Hilbert-térbeli reprezentációit kaphatjuk. Ezt világfelület-dualitásnak nevezzük.
