---
title: "A Zero Knowledge Proof for Where's Wally"
date: "2018-02-25"
categories: ["Zero Knowledge", "Cryptography"]
description: "Using the classic puzzle book to explain zero knowledge proofs."
---

# A Zero Knowledge Proof for Where’s Wally

Published: 2018/02/25
Published At: https://medium.com/swlh/a-zero-knowledge-proof-for-wheres-wally-930c21e55399
Subtitle: In the Blockchain world, zero knowledge proofs are a hot topic.
Topics: Cryptography, Zero Knowledge

![Peggy the prover, Victor the verifier and a Where’s Wally puzzle. Wally image from [http://waldo.wikia.com/wiki/File:Character.Waldo.jpg](http://waldo.wikia.com/wiki/File:Character.Waldo.jpg)](https://miro.medium.com/max/700/1*r_YOE7IAZhYcb8JBlLp19Q.png)

Peggy the prover, Victor the verifier and a Where’s Wally puzzle. Wally image from [http://waldo.wikia.com/wiki/File:Character.Waldo.jpg](http://waldo.wikia.com/wiki/File:Character.Waldo.jpg)

In the Blockchain world, zero knowledge proofs are a hot topic.

**Smart contracts**, for example, could use a zero knowledge proof to conceal exactly how a contract has been satisfied, **whilst only revealing the fact that it has indeed been satisfied**. (This is useful if, say, the conditions of the contract are sensitive. More on this at the end.)

# **So what exactly is a zero knowledge proof?**

> A zero knowledge proof is a protocol between two parties, a prover and a verifier, where the prover, who makes some claim, can convince the verifier that their claim is valid, whilst revealing nothing more than the validity of their claim.
> 

Well, that is quite a mouthful!

So instead of trying to explain that straight away, let’s look at a nice visual story of a zero knowledge proof and come back to this paragraph later.

*In a previous [blog](https://hackernoon.com/zero-knowledge-proofs-a-tale-of-two-friends-d7a0ffac3185), I described a zero knowledge proof for a solution to a Rubik’s cube. In this blog, we shall see a zero knowledge proof for a solution to a Where’s Wally (or Waldo for readers in the US) puzzle. This idea was originally written about in a [paper](http://www.wisdom.weizmann.ac.il/~naor/PAPERS/waldo.pdf) by Naor, Naor and Reingold.*

# **Zero knowledge proof story**

The backdrop of a zero knowledge proof story is always the following.

1. A *problem* that is difficult to solve.
2. A *statement* of that problem.

In this story, these are…

1. *Problem*: Where’s Wally.
2. *Statement of the problem*: a particular Where’s Wally puzzle.

![The Where’s Wally puzzle](https://miro.medium.com/max/700/1*C0OL_Hv0Cni0nFgyni-_5Q.png)

The Where’s Wally puzzle

# **The characters**

Now we can introduce the main characters of our story. Firstly, we have **Peggy the prover.**

![Peggy the prover](https://miro.medium.com/max/700/1*h4ECVa7iq1wFjdAVzzPA2g.png)

Peggy the prover

Peggy the prover loves making *claims*. And, naturally, she wants people to believe her *claims* are valid. But this causes her an issue. She often doesn’t want to reveal the details that validate her *claims*, because that would give away her hard-earned knowledge.

The *claim* that Peggy has made in this story is the following:

# I have found Wally in the above Where’s Wally puzzle.

Our second character is **Victor the verifier.**

![Victor the verifier](https://miro.medium.com/max/700/1*DxWybiBdnav5PUEfC_7-9Q.png)

Victor the verifier

He likes listening to Peggy the prover’s *claims,* but **he also likes being sure that she isn’t making unfounded claims, because he doesn’t want to look like a fool. Right now, he would like to know if Peggy the prover has actually found Wally in the puzzle.

# **So…**

…at this point, we have a *claim* from Peggy the prover of a solution to the Where’s Wally puzzle (the *statement*) which she wants to show off to Victor the verifier.

Now, in a traditional proof (not a zero knowledge one), there is a very obvious way (or *protocol*) whereby Peggy the prover can validate her *claim*. She can simply point out the location of Wally in the puzzle.

In this case, Victor the verifier is entirely convinced that Peggy the prover was not lying when she made her *claim*. He is sure that she is trustworthy.

However, Peggy the prover isn’t happy with this approach since Victor the verifier then knows the location of Wally in the puzzle.

# **The zero knowledge approach**

What if Peggy the prover doesn’t trust Victor the verifier, or doesn’t want to reveal her secret knowledge? If Victor the verifier also knows where to find Wally then it devalues her knowledge of the solution. And she certainly doesn’t want him to go off and pretend to others that he has found Wally himself.

And so she thinks, is there a way in which I can still convince Victor the verifier that I know where Wally is in this puzzle but without revealing any information about his location? Can I convince him in *zero knowledge*?

# **So what does Peggy the prover need to hide?**

For any zero knowledge proof, it is often a good start to consider what Victor the verifier already knows.

In this case, Victor the verifier knows in advance that

1. Wally is somewhere in the puzzle,
2. Wally is equally likely to be at any location in the puzzle.

So Peggy simply needs to mask the location of Wally **equally** amongst all the other possible locations that Wally could occupy in the puzzle when she reveals her solution to Victor. So long as Peggy doesn’t give away anything more than what Victor already knows, she will be happy.

And so she comes up with the following scheme (or *protocol*).

# **The Protocol**

Peggy the prover goes off and finds a black piece of card that is at least twice the height and twice the width of the Where’s Wally puzzle. She then cuts a Wally shaped hole right in the middle of the card.

![](https://miro.medium.com/max/700/1*Wwx1NXSYc9uKVIDPtoiZsw.png)

She then takes the Where’s Wally puzzle (which is on a piece of paper) and tapes it to the back of the black card so that Wally is occupying the Wally shaped hole in the centre.

Importantly, Victor the verifier, from where he is standing in front of the black card, should not be able to see any of Wally’s surroundings in the puzzle while Peggy is taping it up.

However, once Peggy has fixed the puzzle in place, he can be sure that he is not being deceived because there is no way that Peggy the prover could have displayed Wally through the hole if she didn’t know exactly where Wally was.

(Clearly, there are some sneaky tricks that Peggy could use to try and deceive Victor, for example, by taping up a print-out of Wally hidden in her pocket. But let’s assume all such approaches have been accounted for by Victor.)

And so, when Victor the verifier sees Wally through the hole, he is confident that Peggy the prover’s *claim* is valid (this property of the protocol is called *soundness* in academic literature).

![](https://miro.medium.com/max/700/1*nvDLA3l74cKgeSqEB7LFAg.png)

The back and the front of the black card. Peggy can see the back, but Victor can only see the front.

And Peggy is happy too. The black card is big enough so that wherever Wally is located in the puzzle, she could tape the puzzle to the back of the black card without any of the puzzle sticking out from behind the black card.

And so, this *protocol* satisfies Peggy the prover’s wishes: she has been able to convince Victor the verifier that she knows the solution (called *completeness* in the literature) whilst revealing no further information about Wally’s location beyond what Victor already knew (called *zero knowledge*-*ness* in the literature).

![](https://miro.medium.com/max/700/1*Wce3t20YER0rJVHLplsYlA.png)

The black card is big enough to hide the whole puzzle regardless of the position of Wally.

She has validated her *claim* of a solution to a *statement* of the Where’s Wally *problem* in zero knowledge, a.k.a a *zero knowledge proof.*

I now hope that if you re-read the top paragraph it makes much more sense!

# **How can this be used in reality?**

Returning to where we started, a smart contract could, say, require someone to satisfy condition A or B or C, in order to fulfil the contract. But the “fulfiller” may not wish to give away exactly which of these conditions they do indeed satisfy. Perhaps this information is sensitive.

Well, this is analogous to dividing the Where’s Wally puzzle into N boxes that are the size of Wally, and Peggy proving in zero knowledge that she knows which box Wally is in: either box 1 or box 2 or box 3 or … or box N.

With a zero knowledge proof for the smart contract, the verifier does not learn any more information than they already knew beforehand when they see that the contract has been satisfied.

And why would someone wish to hide this contract-satisfying information? Well, perhaps it involves Peggy’s identity, her signature or some other sensitive attribute she possesses.