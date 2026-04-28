---
title: "Three Frontiers of Tech. One Undergraduate Course."
date: "2026-03-26"
categories: ["Mathematics", "AI", "Cryptography", "Quantum Computing"]
description: "Neural networks, fully homomorphic encryption and quantum computing are arguably the most important frontiers in tech. All three are built on the same undergraduate maths course."
---

# Three Frontiers of Tech. One Undergraduate Course.

![](/blog/three-frontiers-of-tech/three-frontiers-of-tech.png)

The most important breakthroughs in AI, Cryptography and Quantum Computing all run on the same undergraduate mathematics course.

While recently learning how LLMs and attention blocks work under the hood, and finding myself manipulating matrices and tensors, it suddenly struck me that so many of the frontiers in tech are based on the same concepts.
 
Neural networks. LLMs. Fully homomorphic encryption. Post-quantum cryptography. Quantum computing. These are arguably the most important frontiers in information technology right now. All of them are built on Linear Algebra. A course most mathematics undergrads take in their first year.
 
That can't be a coincidence. So what's going on?
 
## The Easy Explanation
 
One answer is that Linear Algebra is just comparatively easy for humans to reason about. We all have a strong intuition for three-dimensional space. With a small stretch, we can extend that intuition to n-dimensional space. That gives us the ability to perform operations in a very large and rich mathematical "space," which in turn lets us model vast and complex real-world phenomena.
 
But this explanation doesn't hold up on its own.
 
If the dominance of Linear Algebra were purely about accessibility, you'd expect other well-understood branches of mathematics to yield similar breakthroughs. Elliptic curves, for example, underpin much of modern cryptography. But elliptic curve cryptography hasn't produced a fully homomorphic encryption scheme. It isn't resistant to quantum attacks either.
 
Lattice-based cryptography, rooted in Linear Algebra, gives us both. The hardness problem at its core, Learning With Errors (LWE), is what makes fully homomorphic encryption possible: the ability to compute on data without ever decrypting it, the ultimate guarantee for trustless computation. There are other post-quantum candidates, like isogeny-based cryptography, but the track record is telling. SIKE, the leading isogeny-based key encapsulation scheme, was broken entirely in 2022 by Castryck and Decru. The most prominent post-quantum candidate not rooted in Linear Algebra didn't work out.
 
Similarly, neural networks and the attention mechanism inside LLMs are built around scalars, vectors, matrices and tensors: the protagonists of Linear Algebra. Quantum computing is the same story. The prerequisite to any quantum information theory course is Linear Algebra. Bases, orthogonality, dimension, the rest.
 
So it isn't just that Linear Algebra is easy. Something deeper is happening.
 
## Linear Algebra With a Twist
 
Here's what I think the pattern actually is. In every case, the foundation is Linear Algebra, but the breakthrough comes from adding something on top of it.
 
**LWE** takes a lattice, a clean algebraic structure, and adds noise. You take a system of linear equations, add a small error term to each one, and ask the algorithm to recover the secret. Remove the error and you're left with a system of linear equations any undergraduate could solve. The noise is what makes the problem hard enough to base cryptography on.
 
**LLMs** take vectors, matrices and dot products and introduce non-linearities like softmax and GELU activation functions. Those non-linearities are what allow the network to model the complexity of language rather than just computing linear projections.
 
**Quantum computing** takes basis vectors and linear combinations and introduces complex amplitudes and probabilistic measurement. A qubit exists as a superposition of basis states: α|0⟩ + β|1⟩, where α and β are complex numbers. That is literally a linear combination of basis vectors with coefficients, textbook Linear Algebra. The "quantum weirdness" is that those coefficients live in the complex plane and that measurement collapses the state probabilistically. The structure is pure Linear Algebra. The strangeness comes from the rules layered on top.
 
In every case, Linear Algebra provides the stage. The twist is what makes the impossible possible. Add noise and you get cryptographic hardness. Add non-linearity and you get intelligence. Add complex amplitudes and you get quantum computation.
 
## Conclusion
 
So perhaps the frontiers of information technology are not converging on Linear Algebra by coincidence. They are converging on it because it is the most natural setting for representing and manipulating data in machines. And it turns out that the hardest problems in computing, from security to intelligence to the nature of information itself, can all be reduced to problems of structure in high-dimensional spaces.


