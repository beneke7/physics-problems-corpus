---
id: komal-G896
source: komal
language: hu
translated: false
problem: komal-G896
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) Az $R_3$ és az $R_4$ ellenállások sorba vannak kötve, tehát ezek eredője a kettő összege, vagyis $20\,\Omega$. Ezek párhuzamosan vannak kötve (a kapcsoló zárt állása esetén) az $R_5=20\,\Omega$-os ellenállással, tehát a három ellenállás együtt $10\,\Omega$-ot jelent, ami sorba van kötve az $R_2=50\,\Omega$-os ellenállással, tehát a négy ellenállás együtt $60\,\Omega$-ot jelent. Ez a négy ellenállás párhuzamosan van kötve az $R_1=40\,\Omega$-os ellenállással, vagyis zárt kapcsolóállásnál az $A$ és $B$ pontok között az eredő ellenállás $\tfrac{40\cdot60}{40+60}=24\,\Omega$. 
 Ha a kapcsoló nyitva van, akkor az $R_2$, $R_3$ és $R_4$ ellenállások sorba vannak kötve, eredőjük $70\,\Omega$, és ezek vannak párhuzamosan kötve az $R_1$ ellenállással. Tehát a kapcsoló nyitott állásánál (amikor az $R_5$ ellenálláson nem folyik áram, akár kivehető is lehet az áramkörből) az $A$ és a $B$ pontok közötti eredő ellenállás $\tfrac{40\cdot70}{40+70}=\tfrac{280}{11}\approx 25{,}45\,\Omega$. 

 b) A kapcsoló zárt állása esetén az áramkörben összesen 1 A áram folyik, hiszen a feszültség 24 V és az eredő ellenállás $24\,\Omega$. Az $A$ pontból kiindulva az első csomópontnál a párhuzamos kapcsolás miatt az ellenállásokkal fordított arányban oszlik meg az áram, vagyis az $R_1$ ellenálláson $0{,}6\,\mathrm{A}$, míg a másik két ágon összesen $0{,}4\,\mathrm{A}$ folyik, ami két egyenlő részre bomlik az a) részben leírtak miatt. Tehát az $R_4=10\,\Omega$-os ellenálláson $0{,}2\,\mathrm{A}$ áram folyik át, a rajta eső feszültség így 2 V, vagyis a teljesítménye a kapcsoló zárt állásánál $0{,}4\,\mathrm{W}$. 
 Ha kinyitjuk a kapcsolót, akkor a sorba kötött $R_2$, $R_3$ és $R_4$ ellenállások direktben megkapják az $A$ és $B$ pontok 24 V-os feszültségét, ami az ellenállások arányában oszlik el közöttük. Így az $R_4$ ellenállásra $\tfrac{10}{10+10+50}\cdot24\,\mathrm{V}=\tfrac{24}{7}\approx 3{,}43\,\mathrm{V}$ feszültség esik, ami $\tfrac{24}{70}\approx 0{,}343\,\mathrm{A}$ áramot hajt rajta keresztül. Tehát a kapcsoló kinyitása után az $R_4$ ellenállásra eső teljesítmény $\tfrac{24\cdot 24}{7\cdot 70}\approx 1{,}176\,\mathrm{W}$, vagyis az $R_4$ ellenállás teljesítménye $0{,}4\,\mathrm{W}$-ról $1{,}176\,\mathrm{W}$-ra nő. A növekedés $0{,}776\,\mathrm{W}$ (azaz a teljesítmény közel háromszorosára nő).
