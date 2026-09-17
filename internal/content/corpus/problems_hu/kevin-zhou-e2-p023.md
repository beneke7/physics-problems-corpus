---
id: "kevin-zhou-e2-p023"
source: "kevin-zhou"
native_id: "KZ-E2-P023"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-e2-p023"
topic: [Elektromágnesség]
subtopic: [egyenáramú áramkörök, eredő ellenállás, feszültségosztó, szimmetria]
math_tools: [algebra, szimmetriaérvek]
format: "explanation"
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

Példa 7

       Tekintsük az alábbi 3 × 3-as rácsot, amelynek minden élén egy R ellenállás található.




       Határozzuk meg az 1-es és 16-os csomópont közötti eredő ellenállást.

       Megoldás
       A fenti ötlet alapján a hálózat átlós szimmetriáját kihasználva két csomópontpárt rövidre zárhatunk. Ugyanezt az ötletet fordítva alkalmazva két csomópontot két-két részre is


                                                      14
    Kevin Zhou                                                               Physics Olympiad Handouts



       bonthatunk. Ez azért megengedett, mert a szétválasztott csomópontoknak az új hálózatban az átlós szimmetria miatt továbbra is azonos a potenciáljuk.




       Az áramkör így sorosan és párhuzamosan kapcsolt ellenállások kombinációira redukálódott. Az 1 és 2/3 közötti ellenállás R/2. A 2/3 és 14/15 közötti ellenállás három, párhuzamosan kapcsolt hálózat eredője, a 14/15 és 16 közötti ellenállás pedig R/2. Ezért,
                                                                 !
                                              1 1 1 −1 1
                                                        
                                        1                              13
                              Req =       +     + +          +     R = R.
                                        2     3 3 2            2        7


       Példa 8: PPP 23

       Egy fekete doboz ellenálláshálózatot tartalmaz, és két kivezetése van.




       Ha az első kivezetésre V feszültségű elemet kapcsolunk, a második kivezetésen mérhető feszültség V /2. Ha a második kivezetésre kapcsolunk V feszültségű elemet, az első kivezetésen mérhető feszültség V . Adjuk meg a dobozban lévő ellenállások egy lehetséges kapcsolását.

       Megoldás
       Két egyenlő ellenállás egyszerű kapcsolása megfelelő.




      Ha az elemre a II. kivezetésen keresztül kapcsolódunk, a vízszintes ellenállás nem játszik szerepet. Ha az elemre az I. kivezetésen keresztül kapcsolódunk, a két ellenállás feszültségosztót alkot.
