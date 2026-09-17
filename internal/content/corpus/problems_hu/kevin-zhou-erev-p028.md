---
id: "kevin-zhou-erev-p028"
source: "kevin-zhou"
native_id: "KZ-ERev-P028"
origin: "Kevin Zhou Physics Olympiad Handouts"
language: "hu"
translated: true
links_en: "kevin-zhou-erev-p028"
topic: [elektromágnesség]
subtopic: [töltéskonjugáció, paritás, időmegfordítás, poynting-vektor, theta-tag]
math_tools: [vektoralgebra]
format: "open-ended"
kind: "problem"
core_ideas: []
has_solution: false
has_figure: false
figure_files: []
verification_status: "pending"
source_file: "sources/kevin_zhou/text/handouts/ERev.txt"
source_url: "sources/kevin_zhou/site/handouts/ERev.pdf"
source_commit: "ebb627ccb7e27e541d64011f22d36766a6e97ecf"
provenance_note: "Hungarian translation of a candidate classified as Genuinely new in the Kevin Zhou overlap audit."
---

[A] Az elektromágnesesség invariáns a C töltéskonjugációval, a P paritással és a T időtükrözéssel szemben. Ez kifejezetten
    a következőt jelenti: legyenek ρ(r, t) töltés- és J(r, t) áram-sűrűségek, amelyek E(r, t) és B(r, t) tereket hoznak
    létre. Egy q próbatöltés e terek hatására x(t) pályán mozog. E szimmetriatranszformációk egyikét alkalmazva mindezek
    a mennyiségek megváltozhatnak, de az új tereknek továbbra is ki kell elégíteniük Maxwell egyenleteit, és a próbatöltés
    pályájának továbbra is eleget kell tennie az ma = q(E + v × B) Newton-féle második törvénynek.

      (a) Töltéskonjugáció esetén minden töltés előjele megfordul. Mekkora az új ρ′ (r, t) töltés- és J′ (r, t) áram-sűrűség?
          Mekkora az új E′ (r, t) és B′ (r, t) tér? A próbatöltés pályája továbbra is x′ (t) = x(t). Ellenőrizzük, hogy
          továbbra is eleget tesz a Newton-féle második törvénynek.

      (b) Időtükrözés esetén minden, ami t időpontban történik, most −t időpontban történik. Például ρ′ (r, t) =
          ρ(r, −t). Ellenőrizzük, hogy a próbatöltés új pályája továbbra is eleget tesz a Newton-féle második törvénynek.

      (c) Paritás esetén minden, az x helyen lévő dolog a −x helyre képeződik le. Például a próbatöltés új pályája
          x′ (t) = −x(t). Ellenőrizzük, hogy az új pálya továbbra is eleget tesz a Newton-féle második törvénynek.

      (d) Az S = (E × B)/µ0 Poynting-vektor az elektromágneses tér energiaáramlását írja le. Hogyan transzformálódik C,
          P és T alatt?

      (e) A kvantumtérelméletben fontos, de finom mennyiség a „theta-tag”,
                                          Z    Z
                                             dt dr E(r, t) · B(r, t)

          ahol az integrálok a teljes idő- és tértartományra vonatkoznak. Változatlan marad-e a theta-tag C, illetve P vagy
          T alatt? Mi a helyzet a CP és a CP T kombinált transzformációkkal?
