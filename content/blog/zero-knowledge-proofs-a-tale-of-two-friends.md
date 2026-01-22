---
title: "Zero Knowledge Proofs: A Tale of Two Friends"
date: "2017-11-09"
categories: ["Cryptography", "Zero Knowledge"]
description: "Explaining zero knowledge proofs through a narrative featuring Peggy and Victor with a Rubik's cube."
---
Originally Published in Hackernoon [here](https://medium.com/p/d7a0ffac3185)

![Peggy the prover and Victor the verifier](https://miro.medium.com/max/1400/1*zxC8vRK3vGs61bBYZqAwAg.png)
*Peggy the prover and Victor the verifier*

In the [Blockchain](https://hackernoon.com/tagged/blockchain) world, [Zero Knowledge](https://hackernoon.com/tagged/zero-knowledge) Proofs often crop up. Think Zcash, Zerocoin.

But the problem with Zero Knowledge Proofs is that they are difficult to understand without getting into the nitty-gritty maths.

So, I am gonna to describe a Zero Knowledge Proof protocol as a story of two friends, in a setting which we can all relate to.

# **Zero knowledge proofs**

Like in any story, before we meet the protagonists, we have to set the scene. The backdrop of a zero knowledge proof story is the following.

1. A *problem* that is difficult to solve.
2. A *statement* of that problem

In this story, these are…

1. *Problem*: the Rubik’s cube.
2. *Statement of the problem*: the Rubik’s cube in its current unsolved state.

Now we can introduce the main characters. Firstly, we have **Peggy the prover.**

![Peggy the prover](https://miro.medium.com/max/1400/1*PK7xb2E91cjAUJVY9YzUwQ.png)
*Peggy the prover*

Peggy the prover is always making *claims*.

And, naturally, she wants people to believe her *claims*. She wants to prove to people that her *claims* are valid. However, this causes her an issue. She often doesn’t want to reveal the details that validate her *claims*, because that would give away her knowledge… and knowledge is power!

One such *claim* that Peggy has made is the following.

# I know how to solve the Rubik’s cube (the problem) from its current unsolved state (the statement).

…but naturally she doesn’t want to give away her knowledge of how to do it.

Our second character is **Victor the verifier.**

![Victor the verifier](https://miro.medium.com/max/1400/1*x--IAU2no_T-sqXxroCBGw.png)
*Victor the verifier*

He likes listening to Peggy the prover’s *claims*. They interest him. However, he just wants to always be sure that she is not making unfounded claims about what she knows, because he doesn’t want to look like a fool.

For example, he would like to know if Peggy the prover can solve the Rubik’s cube. It would really impress him if she could.

At this point, we have a *claim* from Peggy the prover of a solution to the Rubik’s cube (the *problem*) in its current state (the *statement*) which she wants to show off to Victor the verifier. And she really wants to let him know that she does indeed know of a solution that validates her *claim*, because she likes impressing Victor the verifier.

Now, in a traditional proof (not a zero knowledge one), there is a very obvious way (or *protocol*) whereby Peggy the prover can impress Victor the verifier and prove her *claim*. They can meet up and she can solve the Rubik’s cube in front of him… and that is it.

In this case, Victor the verifier is 100% convinced that Peggy the prover was not lying when she made her *claim*. He is convinced that she is trustworthy. This is fantastic! Peggy the prover has been able to show off her knowledge and Victor the verifier is convinced that Peggy the prover hasn’t made a fool out of him.

However, Peggy the prover isn’t happy with this approach….Victor the verifier may learn some information about how she solved the Rubik’s cube.

# **Zero Knowledge**

What if Peggy the prover doesn’t trust Victor the verifier, or what if she doesn’t want to reveal her secrets? If Victor the verifier can also do the Rubik’s cube then it devalues her knowledge of the solution, and she certainly doesn’t want him to go off and solve the puzzle in front of all their mutual friends before she has done it.

For Peggy the prover, this information (the solution) is valuable to her. She doesn’t want to reveal it… but she still really wants to prove to Victor the verifier that she knows a solution, because this is Peggy the prover, she is a show off.

And so she thinks, is there a way in which I can still convince Victor the verifier that I can solve the Rubik’s cube (her *claim*) but without revealing any information about how I solved it?

So what is it that Peggy the prover needs to hide? Clearly, it is the set of moves she is going to make to the cube in between its current state (the *statement*) and the solved state. She doesn’t want to reveal even a single move that she is going to make. Because, even if Victor the verifier sees one move in between these two states then she has given away some information about how she solved the cube. And Peggy the prover wants her proof to be a zero knowledge one, not a tiny-amount-of-knowledge one.

And so she comes up with the following scheme (or *protocol*).

![The zero knowledge proof protocol](https://miro.medium.com/max/1400/1*R0fKDNJA9PAplCSJZedE1g.png)
*The zero knowledge proof protocol*

# **The Protocol**

Victor the verifier goes off and finds a black box and places it on a stool. He cuts a hole in the top and a hole on either side. He then places the unsolved Rubik’s cube inside.

Peggy the prover then places her arms through the side holes and looks through the top hole. She solves the Rubik’s cube inside the box under the supervision of Victor the verifier. When she is finished she reveals the cube.

Importantly, Victor the verifier cannot see the moves she makes inside the box. However, he can be sure that he is not being deceived because there is no way Peggy the prover could have fooled him. There is no way she could have had, say, a second cube, fresh out of the packet in its solved state, ready to sneakily reveal as a trick. He is confident that the scheme (or *protocol*) that they have agreed upon is secure enough for him to accept Peggy the prover’s *claim* as true (this property of the protocol is called *soundness* in the literature)

And what’s more, this *protocol* satisfies Peggy the prover’s wishes: she has been able to convince Victor the verifier that she knows the solution (called *completeness* in the literature) whilst revealing nothing about her method (called *zero knowledge*-*ness* in the literature).

She has validated her *claim* of a solution to a *statement* of the Rubik’s cube *problem* in zero knowledge, a.k.a a zero knowledge proof!

![](https://miro.medium.com/max/1400/1*Eso60vreMiIseB_1FSUS1Q.png)

They are both happy with this protocol. Peggy the prover has shown off her knowledge and Victor the verifier is in awe of her. They decide to go for a drink afterwards and celebrate.

*In reality, the information that Peggy wants to hide could be her identity, her signature or some attributes she possesses.*
