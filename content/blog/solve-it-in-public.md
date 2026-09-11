---
title: "Solve It in Public: How the Next Millennium Problem Should Fall"
date: "2026-09-11"
categories: ["AI", "Mathematics", "Open Science"]
description: "This week's Navier-Stokes result took a year in private and four days in public. The models are now doing most of the work. The fastest way to solve the next one is to let them train on everything, from the first prompt."
---

# Solve It in Public: How the Next Millennium Problem Should Fall

The fight over who solved Navier-Stokes is between humans. The proofs were written by machines.

## The Credit

Three groups of humans are in line for it. Diego Córdoba and Luis Martínez-Zoroa, whose construction both AI efforts built on. Tristan Buckmaster and Levent Alpöge, who announced their results twelve hours before OpenAI. OpenAI's own mathematicians. The only party crediting the machine is the company that owns it.

Buckmaster and Alpöge spent most of a year on the problem and made slow progress. From mid-August they worked with Codex and Claude, and it was done in weeks. Buckmaster describes one of his own papers as "AI slop." OpenAI ran 10,000 agents on an unreleased model for 88 hours. The humans chose the problem and pressed go.

Without the models there is no result this year, and probably not this decade. Some of the credit belongs to the labs, whether or not the labs are gracious about it.

## The Murk

Buckmaster put every draft of the project into Codex sessions. All of it, for the whole year. When OpenAI announced a competing result, he asked whether their model had been trained on those sessions. He was told the model did not look up user data. He asked again, specifically about training. He did not get an answer.

OpenAI's public statement eventually got closer: it is unlikely, but they cannot rule out that de-identified data from his usage helped improve their models.

That sentence is the whole problem. A mathematician spent a year feeding his working notes into a tool sold by a company that was, from September 1, racing him to the answer. He cannot prove they used his work. They cannot prove they didn't. The tool that made the result possible is owned by a competitor, and it has a memory.

## One Fix: Seal the Sessions

Run the model inside a trusted execution environment. The prompts are encrypted in transit, decrypted only inside the enclave, and never visible to the provider. Attestation lets the researcher verify, before sending a single line, that the code running is the code they were promised and that nothing is being retained for training. The lab cannot train on what it cannot see.

This is what I work on, and it is the right answer whenever priority is the thing you are protecting: a company's edge, a patent, shareholders who paid for the research. A pen doesn't remember your drafts. Neither should the model.

But it fixes one problem, the leak. The Navier-Stokes story exposed a second one, which is how slowly private work moves.

## The Other Fix: Open Everything

My years at Protocol Labs were spent on things that were open source by default: IPFS, libp2p, Filecoin, the retrieval tooling my team built. The point was compounding. The next team picks up a finished block and builds on it instead of rebuilding it. Work compounds when it is shared. It sits still when it isn't.

Look at the Navier-Stokes timeline through that lens. Córdoba and Martínez-Zoroa published their cascade construction in 2023. Buckmaster and Alpöge picked it up and spent most of a year pushing it forward in private. OpenAI heard a rumour on September 1 and re-derived the finish in a week. Three groups, one idea, and the handoffs between them ran through arXiv and gossip. That is a slow way to compound.

So run it the other way. If the models are doing most of the work, let them train on everything from the first prompt. Run the Millennium problems as open working groups. Every partial result and every failed approach goes into the model the moment it exists, and the model is better for the next person by the next morning. Buckmaster and Alpöge's August progress would have been in the weights by September, for everyone.

Two mathematicians working privately took a year. Ten thousand agents took under four days. A model that had been learning from every mathematician in the field in real time might have taken an afternoon.

Would anyone sign up? More than you'd expect. Buckmaster's objection was to not knowing. If the deal were explicit, everything you type trains the model and the model is shared, I think a meaningful number of researchers would type anyway. Open science has been asking for this for decades. The models make the payoff immediate.

## Who Gets Credit

This also settles the credit question, at least on the open track.

Credit stops being about who had the idea alone in a room, because nobody does anymore. It becomes membership plus provenance. You were in the working group, and every prompt is logged, timestamped and attributed. The result belongs to everyone whose sessions fed the model that produced it, plus the model, the way a CERN paper lists three thousand names and the detector.

The log goes further than an author list, though. If the construction that closed the proof first appeared in your session on a Tuesday afternoon, the record shows it. Credit can be traced back through the result to whoever introduced each idea, and divided in proportion to what actually happened instead of fought over after the fact.

Buckmaster's problem was that he didn't know who was in his room. In an open working group you know exactly who was there and what each of them said. The list is the credit. The log is the receipt.

## No Middle

So there are two consistent positions. Fully private: your sessions are sealed, the model learns nothing from you, and your priority is yours. Fully open: your sessions are training data, you know it, the group is named, and everyone's model is better by morning.

What doesn't work is the middle. A tool that feels private, isn't quite, and is owned by someone who might be racing you. That is where the Navier-Stokes fight happened, and it is where most people are typing right now.

The direction of travel is not in doubt. I don't think we will see another major result in mathematics that isn't a mathematician working with a model. The only question left is whether the model was working for one person, or for everyone.
