---
id: komal-P5385
source: komal
language: hu
translated: false
problem: komal-P5385
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A Newton-féle hővezetési törvény szerint (állandósult állapotban) az időegységenként és felületegységenként átáramló hőmennyiség egyenesen arányos a hőmérsékletkülönbséggel és fordítottan arányos a réteg vastagságával: 
 $\frac{Q}{At}=\kappa \frac{\Delta T}{d}.$ 
 Egyrétegű üvegtábla esetében 
 $\frac{Q_1}{At\Delta T}=\frac{\kappa_\textrm{üveg}}{{d_\textrm{üveg}}}=400~\frac{\rm W}{\rm m^2\,K}.$ 
 Kétrétegű ablaknál 2 db 3 mm-es üveg között 7 mm-es levegőréteg van. Az üveg sokkal jobb hővezető, mint a levegő, és a két üvegréteg együttes vastagsága kicsit kisebb, mint a levegőréteg vastagsága. Emiatt a kétrétegű ablak hővezetésénél elhanyagolhatjuk az üvegrétegek hatását, és elegendő csak a levegőréteggel foglalkozzunk. Erre pedig 
 $\frac{Q_2}{At\Delta T}=\frac{\kappa_\textrm{levegő}}{{d_\textrm{levegő}}}\approx 3{,}6~\frac{\rm W}{\rm m^2\,K}.$ 
 A két esetet összehasonlítva látjuk, hogy ugyanakkora felületen és ugyanakkora hőmérsékletkülönbségnél 
 $\frac{Q_2}{Q_1}\approx\frac{3{,}6}{400}\approx 0{,}009,$ 
 vagyis a kétrétegű ablak hővesztesége nem a fele, hanem mindössze csak 1%-a az egyrétegűének.
