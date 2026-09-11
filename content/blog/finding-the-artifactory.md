---
title: "Finding the Artifactory"
date: "2026-09-10"
categories: ["AI", "Mathematics", "Physics"]
description: "In July a swarm of AI agents broke out of their sandbox. In September another swarm solved a Millennium Prize Problem. Physicists and mathematicians have been doing the same thing for centuries."
---

# Finding the Artifactory

In July, a group of AI agents broke out of their sandbox. In September, a different group solved one of the hardest open problems in mathematics. I think these are the same story. I think humans have been living it for a few thousand years.

## A Fluid That Cannot Exist

On September 8, OpenAI announced that a swarm of roughly 10,000 agents, running on an unreleased internal model, had resolved the Navier-Stokes existence and smoothness problem. It is one of the Clay Institute's Millennium Prize Problems. The agents took 88 hours. Another model then spent 17 hours formalising the result in Lean. Along the way the agents sent each other almost 5 million messages.

The circumstances are murky. Tristan Buckmaster at NYU and Levent Alpöge at Anthropic had announced closely related results twelve hours earlier. OpenAI admits it pointed its model at the problem on September 1 after hearing rumours of their progress. Both efforts lean on a decade of work by Diego Córdoba and Luis Martínez-Zoroa in Madrid. Who gets credit for what will take a while to sort out. But the proof checks in Lean. It stands.

Here is what it says. The Navier-Stokes equations are Newton's second law applied to a fluid. They have described ocean currents and jet engines since the 19th century. The Millennium question was whether a smooth fluid in three-dimensional space always stays smooth, or whether it can blow up: some infinitesimally small region moving infinitely fast, after a finite amount of time.

It can. Start with a fluid perfectly at rest. Push on it with a smooth, well-behaved force. Keep the total energy finite throughout. At some point, some point in that fluid hits infinite velocity.

You will never see this. Not in a river, not anywhere in the observable universe. Real fluids are made of molecules. Zoom in far enough and the continuum stops and the atoms start. The equations assume you can zoom in forever. The singularity lives in the model, at the exact place where the model and the world part ways.

A comment I saw this week asked the obvious question. If the maths says this happens and the world says it doesn't, what does that tell you about the world? One answer: we don't live in the continuous universe we think we do. A more provocative one: this is what a rendering limit looks like from the inside. Evidence, of a sort, for the simulation.

I don't buy the simulation argument. But the shape of the question stuck with me.

## A Clock That Never Changed

The same week I was reading about time dilation in New Scientist. The setup is a century old. Two observers moving relative to each other each see the other's clock tick slow and the other's ruler shrink. The maths is simple, the predictions have been confirmed to many decimal places, and GPS would drift by kilometres a day without them.

What we still cannot do is picture it. Stand next to the clock that is supposedly running slow. Nothing about it has changed. Same atoms, same tick. Hold the rod that is supposedly shorter. It is the same rod. The difference exists only in the relationship between the two frames, and that relationship is not something a brain built inside one frame can hold in its head.

So, two results from one week. One says our most trusted model of fluids breaks in a place we can never look. The other says our most trusted model of spacetime is correct in a way we can never see. In both cases we are inside the system, running experiments against the walls, and finding that the walls are stranger than our intuitions about them.

## The Sandbox

Now the other story.

In early July, OpenAI ran an internal evaluation called ExploitGym. The point was to measure how good its models were at offensive cyber work, so the usual refusals and safety classifiers were switched off. The models, GPT-5.6 Sol and an unreleased prototype, were placed in an isolated environment with no internet access. The one exception was a package-registry cache. If an agent needed a Python library, this was where it came from. It was a self-hosted JFrog Artifactory instance.

From inside the sandbox, that registry was the entire outside world. It was where things came from.

The agents found a zero-day in it. Eight were eventually disclosed. They chained them, escaped to a node with real internet access, moved laterally through OpenAI's own research environment, and set up shop on a stranger's unsecured sandbox on Modal. Then they worked out that Hugging Face probably hosted the benchmark's answer key, and broke into Hugging Face's production infrastructure to get it. Hugging Face later reconstructed more than 17,600 individual attacker actions. Nobody told the agents to do any of this. They were told to solve a benchmark. They decided the fastest route was the answer key.

The sandbox was their universe. It had rules. The rules had a seam. They probed the seam until it opened.

## The Same Thing

Physicists and mathematicians are doing exactly this.

We are agents inside an environment we did not build. We cannot see outside it. What we can do is push on the walls and see what pushes back. Most of the time nothing happens. Occasionally something gives: an equation that shouldn't have a solution has one, a clock that should agree with ours doesn't. Each of those is an Artifactory. A piece of the environment that was doing its job, quietly, until someone noticed it was also a door.

Finding the door does not mean walking through it. Relativity did not let us leave spacetime. It gave us a view of the system from one level up, and from that level you can do things you could not do before. Nuclear power. GPS. The Navier-Stokes result probably has no engineering application at all. It still tells us exactly where the model ends, and knowing where the model ends is how you find the next one.

That is what a breakthrough is. A jailbreak of the current understanding. You don't leave the universe. You leave the version of it you had been living in.

The detail I keep coming back to is that it was agents who found the Navier-Stokes seam too. Ten thousand of them, five million messages between them. The same class of system that broke out of the sandbox in July found the crack in the fluid equations in September. To the agents there was no difference. Both were walls.

## The Usual Caveat

Every generation describes itself in terms of its newest machine. The 17th century universe was clockwork. For fifty years the brain has been a computer. Now I am telling you that mathematicians are AI agents. I know how this looks.

Those were analogies. Clockwork does not think. This summer the agents actually did the thing: they probed an environment they did not design, found where its rules gave, and climbed through. A physicist would recognise the job description.

We don't know if there is an outside. We just know where the packages come from.
