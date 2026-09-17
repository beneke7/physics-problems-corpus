---
id: kalda-circuits-idea6
source: kalda
handout: circuits
section: "Circuits with resistors, batteries, ammeters and voltmeters"
kind: idea
meta_technique: [model-reduction]
example_problems: [kalda-circuits-pr4]
status: stable
---

If a bridge connection involves only an ideal ammeter (of zero resistance) or an ideal voltmeter (of infinite resistance), the bridge connection is only seemingly there, and can be essentially removed (for voltmeter) or short-circuited (for ammeter). Similarly, it can be removed if there is no current in the bridge connection due to symmetry. Once the simplified circuit is solved, it may be necessary to return to the original (non-simplified) circuit: in the case of an ammeter in a bridge connection, its current can be found from the Kirchoff's current law (written for the currents entering the node to which the ammeter is attached to); in the case of a voltmeter, its voltage can be found as the voltage difference between the nodes to which it is attached using the Kirchoff's voltage law and the voltages of the relevant resistors.
