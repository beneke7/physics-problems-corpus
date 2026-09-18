---
id: kevin-zhou-notes-phy-ex083
source: kevin-zhou-notes
native_id: "phy Example 083"
origin: "Kevin Zhou personal physics notes"
language: hu
translated: true
links_en: kevin-zhou-notes-phy-ex083
topic: [kvantumfizika]
subtopic: [spin]
math_tools: [lineáris-algebra]
format: explanation
kind: reference_example
has_solution: false
has_figure: false
figure_files: []
source_file: sources/kevin_zhou/text/notes/phy.txt
source_url: sources/kevin_zhou/site/notes/phy.pdf
source_commit: ebb627ccb7e27e541d64011f22d36766a6e97ecf
source_lines: "10054-10110"
archive_layer: reference_notes
source_role: explanatory_example
---
Példa. Az elektron spin- és térbeli szabadságfokainak kombinálása. A
|r, m⟩ bázissal rendelkező tenzorszorzat-térben kell dolgoznunk. A hullámfüggvények alakja

                                              ψ(r, m) = ⟨r, m|ψ⟩

amelyet gyakran a következő jelöléssel írunk:
                                                             
                                                       ψs (r)
                                                     ψs−1 (r)
                                              ψ(r) = 
                                                             
                                                         ..   
                                                         .   
                                                            ψ−s (r)

Ez minden spin-komponenshez külön hullámfüggvényt jelent, vagy ekvivalensen minden térbeli
pozícióhoz egy spinort. A belső szorzat
                                        XZ
                               ⟨ϕ|ψ⟩ =      d3 r ϕ∗ (r, m)ψ(r, m).
                                                m

Az elektron esetében a Hamilton-operátor az általunk korábban vizsgált térbeli és spin-Hamilton-
operátorok összege:
                                     1                                          g
                            H=         (p − qA)2 + qϕ − µ · B,               µ = µσ.
                                    2m                                          2

Ezt Pauli-Hamilton-operátornak nevezzük, a hozzá tartozó fejlődési egyenlet pedig a Pauli-egyenlet.
A gyakorlatban ez a ψ két komponensére vonatkozó két külön Schrodinger-egyenletnek látszik, amelyeket
a µ · B tag csatol össze.
   A Pauli-egyenlet a Dirac-egyenlet (v/c)2 rendig történő kifejtéséből adódik. A Dirac-egyenlet a g = 2
értéket is rögzíti. A további tagok szisztematikusan megkaphatók a Foldy–Wouthuysen-transzformációval,
ahogy itt le van írva. A (v/c)4 rendben ez visszaadja a finomszerkezeti korrekciókat, amelyeket később
fogunk vizsgálni.

Megjegyzés. A valószínűségi áram ebben az esetben a korábban látott módon definiálható:
                                                         1
                                 J = Re ψ † vψ,    v=      (−iℏ∇ − qA) .
                                                         m
Matematikailag J nem egyértelmű, mert megmarad akkor is, ha bármely divergenciamentes vektormezőt
hozzáadunk; különösen bármely rotáció is hozzáadható. A fizikailag érdekes kérdés azonban az, hogy
méréskor a lehetséges J-k közül melyik releváns. Az absztrakt „valószínűségi áram” megmérése értelmetlen,
abban az értelemben, hogy nincsenek hozzá csatolódó detektorok. Spin nélküli töltött részecske esetén
viszont mérhetjük az elektromos áramot, és a kísérletek szerint ez Jc = eJ, ahol J a fent definiált J;
ez J-t előnyben részesíti a többi lehetőséggel szemben.
    Ha azonban a részecskének spinje van, a helyzet más. Klasszikus analógia alapján az
M = ψ † µψ mennyiséget mágnesezettségnek tekintenénk. A mágnesezettség viszont kötött
Jb = ∇ × M áramot hoz létre, ezért az elektromos áram várhatóan

                                         Jc = eJ + ∇ × (ψ † µψ).

Ez kvantumtérelméletből levezethető, és egyezik a kísérleti tapasztalatokkal. Például a második tag
nélkül mágneses terek nem származhatnának a spinek rendeződéséből, pedig ferromágnesekben bizonyosan
származnak.
