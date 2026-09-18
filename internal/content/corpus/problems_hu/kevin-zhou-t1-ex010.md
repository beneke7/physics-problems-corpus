---
id: "kevin-zhou-t1-ex010"
source: "kevin-zhou"
native_id: "KZ-T1-EX010"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-t1-ex010"
topic: [termodinamika, statisztikus-fizika]
subtopic: [kinetikus gázelmélet, ekvipartíció, lendületmegmaradás]
math_tools: [valószínűségszámítás, algebra]
format: "explanation"
kind: "example"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/T1.txt"
source_url: "sources/kevin_zhou/site/handouts/T1.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

# KZ-T1-EX010

      10. példa

      Egy M tömegű dobozban sok részecskéből álló ideális gáz található, teljes tömege Mg . Határozzuk meg a doboz x tengely irányú sebességének ⟨Vx2 ⟩ négyzetes átlagát.

      Megoldás
      Ez a feladat megmutatja, hogy a kinetikus gázelmélet mennyire finom lehet még akkor is, ha nem kell részletes ütközési dinamikával foglalkoznunk. Először jegyezzük meg, hogy ha minden gázmolekula tömege m, akkor az energia ekvipartíciója miatt mindegyikre ⟨vx2 ⟩ = kB T /m. Most két egyszerű érvelés különböző választ ad.
         1. Ha magára a dobozra alkalmazzuk az energia ekvipartícióját, ⟨Vx2 ⟩ = kB T /M adódik.

         2. A doboz és a gáz együttes teljes lendülete nulla, ezért
                                                              N
                                                              X
                                                M Vx = −m           vx,i .
                                                              i=1

            Másfelől a P1-ben bevezetett hibaterjedési szabályok szerint
                                *       N
                                                !2 +
                                       X                    kB T
                                    m      vx,i      = m2 N       = kB T Mg
                                                             m
                                          i=1

            amiből
                                                            Mg
                                                 ⟨Vx2 ⟩ =      kB T.
                                                            M2


                                                     17


Kevin Zhou                                                                     Physics Olympiad Handouts



      Mi történik? Kiderül, hogy általában mindkét érvelés hibás, de különböző határesetekben mindegyik helyes.

  Az első érvelés problémája, hogy az energia ekvipartíciójának levezetése feltételezi, hogy minden szabadságfok független a többitől, vagyis figyelmen kívül hagyja, hogy amikor a doboz lendületet vesz fel, a gáznak ezt kiegyenlítő, ellentétes összlendülettel kell rendelkeznie. A második érvelés abból indul ki, hogy a molekulák sebességei függetlenek egymástól, ami szintén nem teljesen igaz.

  Vegyük észre, hogy a doboz energiája és lendülete az E = P 2 /2M összefüggéssel kapcsolódik. Ha a doboz nehéz, M ≫ Mg, akkor kis energia mellett is sok lendületet tárolhat, és fordítva, ha számottevő energiája van, óriási lendületének kell lennie. Ez utóbbi azt jelenti, hogy az első érvelés hibás. A második viszont működik, mert a doboz a lendület „nyelőjeként” szolgál. Például a gázmolekulák mind jobbra mozoghatnak, amit a doboz kissé balra mozgása könnyen kiegyenlít.

  Ha a doboz könnyű, M ≪ Mg, akkor elhanyagolható lendület mellett is sok energiája lehet. Ekkor az első érvelés működik, mert a doboznak soha nincs akkora lendülete, hogy lényegesen befolyásolja a gáz viselkedését. A második érvelés viszont hibás, mert ha a doboz nem tud sok lendületet hordozni, akkor a gázmolekulák lendületeinek lendületmegmaradás miatt szinte teljesen ki kell oltaniuk egymást, ami azt jelenti, hogy nem függetlenek.

  Az általános megoldás egy egyszerű trükkel megtalálható. Az ekvipartíciós érvelés problémája lényegében az, hogy a doboz Vx sebességét függetlennek tekintjük a gáz tömegközépponti sebességétől, v x . Ezért váltsunk a következő változókra:
                                     Mg v x + M V x
                             vCM =                  ,    vx,rel = Vx − v x .
                                      Mg + M
  Ez a két új változó független, mert a lendületmegmaradási feltétel csak annyit mond, hogy az előbbi mindig nullával egyenlő. Ezért biztonsággal alkalmazhatjuk az energia ekvipartícióját vrel-re. Az M6-ból felidézve a redukált tömeg fogalmát,
                                     1 2                   M Mg
                                  E ⊃ µvx,rel ,     µ=           .
                                     2                    M + Mg
  Az ekvipartíció tétele szerint
                                             2          kB T
                                           ⟨vx,rel ⟩=
                                                         µ
  a lendületmegmaradásból pedig azt kapjuk, hogy
                                        2
                        2        Mg         2        kB T Mg
                     ⟨Vx ⟩ =              ⟨vx,rel ⟩=
                               M + Mg                 M M + Mg
  ami a fent kapott két válaszra redukálódik a megfelelő határesetekben. Kiderül, hogy ez a feladat az asztrofizikában is releváns, ahol egy galaxisban található szupermasszív fekete lyuk dinamikájának játékmodellje. A kinetikus gázelmélet posztulátumaiból kiinduló teljes elemzésért lásd ezt a tanulmányt.


                                                  18


Kevin Zhou                                                            Physics Olympiad Handouts
