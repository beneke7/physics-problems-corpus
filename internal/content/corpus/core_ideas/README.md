# Core ideas

The solution-side taxonomy. Each idea is one file: `<idea_id>.md`. IDs are
anchored to Jaan Kalda's numbered ideas — do NOT invent a parallel scheme.

Naming: `kalda-<topic>-<NN>` where NN is Kalda's idea number in that booklet.
For ideas not in Kalda (rare, e.g. an original generated problem), use
`orig-<topic>-<NN>` and note it explicitly.

Each problem's frontmatter `core_ideas: [...]` references these IDs. Tagged at
Stage 5 (from the solution, not the statement).

## File format

```markdown
---
id: kalda-thermo-07
kalda_ref: "Thermodynamics booklet, idea 7"
topic: 2.7
short: "Choose the right thermodynamic potential for the natural variables"
---

When a process holds certain variables fixed, the potential whose natural
variables match (e.g. Gibbs G for fixed T,p) is the one that's minimized /
gives the cleanest condition. Identifying this BEFORE computing avoids a
mess of Maxwell-relation juggling.

Problems using this idea: (populated as the corpus grows)
```

## Status
Empty until the slice. Session 1 seeds the first thermo ideas from the Kalda
Thermodynamics booklet. See docs/SESSION_1.md step 7.
