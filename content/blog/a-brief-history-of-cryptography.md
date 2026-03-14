---
title: "A Brief History of Cryptography"
date: "2026-03-14"
categories: ["Cryptography"]
description: "From Caesar's cipher to zero knowledge proofs - how humans have kept secrets across 2,000 years of history"
---

# A Brief History of Cryptography

![](/blog/history-cryptography/history-cryptography.png)

The history of cryptography is wilder than most people realise.

We begin in ancient times. Famously, Julius Caesar popularised a "cipher" to encrypt his messages. He would shift the letters by a fixed number. A shift of three, for example, would make A become D.

All his recipient needed to know was the secret shift number. Anyone who intercepted the message would simply read gobbledygook. Clever, but not too hard to crack if you knew the trick. Maybe Brutus had a more clever scheme, seeing how things played out.

Shifting and permuting letters continued to be the modus operandi right up until modern computers arrived. In the Second World War, Enigma machines operated with a random permutation of the 26 letters, changed every day. All recipients needed to know was that day's permutation.

Turing and others, both British and Polish, did the impossible and cracked the Enigma. The machine had 158 quintillion possible settings per day - which is why it seemed so uncrackable, and why the achievement was so remarkable. A less told story: the breaking of Enigma was kept secret for nearly 30 years and, it's been claimed, the British government distributed Enigma machines to colonies after the war, convincing them the machines were uncrackable, and secretly snooping on their messages!

But there's a fundamental problem with both the Caesar Cipher and the Enigma. It's all well and good if sender and recipient share the secret key, but how did they agree on it in the first place? If someone is intercepting all messages, how does the key get from one side to the other? The unsatisfactory answer was to share it even more secretly, in advance.

Fast forward to the 1970s. A group of mathematicians - Rivest, Shamir, Adleman - came up with a revolutionary and seemingly paradoxical solution: a public key. This seems counterintuitive, as is often the case with cryptography. How can a key be public?

I like to reason about it like this. Imagine every person on the internet has a postbox that anyone can drop post into, but only the owner has the key to open it. These postboxes are the public keys. Everyone has one, they are visible to all, and they let anyone send a message that only the recipient can unlock.  You can also think of the idea like a padlock - anyone can click it shut, but only the keyholder can open it. Actually not so counterintuitive after all.

At around the same time, Diffie and Hellman devised a different but related trick: a way for two parties to create a shared secret key by exchanging information only in the open, where anyone could intercept it. Again, seemingly impossible.

How does it work? Each party has their own private secret. They each derive a public key from that secret and share it openly. They then take each other's public key, mix in their own private secret, and both arrive at the same joint secret. Nobody watching the exchange can recreate it. Another incredible breakthrough.

One thing worth noting: modern computers are a necessity for both RSA and Diffie-Hellman. A Caesar Cipher can be done by hand. These cannot. Fast computation has massively expanded the scope of practical cryptography.

In practice, it is less about postboxes and more about prime numbers. Factoring a huge number is a very hard problem, but multiplying its prime factors together is easy. What are the prime factors of 8,633? Hard to work out. What is 89 x 97? Much easier - the answer is 8,633. The same asymmetry exists for computers at a far larger scale. Public keys are the big number. Private keys are the prime factors.

Public key cryptography - also called asymmetric cryptography - is now used every time you connect to a website with https rather than http. Every time you see the padlock icon in your browser, public key cryptography just ran in the background. This is particularly amusing given that, a few decades earlier, the mathematician Hardy was celebrating how utterly useless number theory was. Now it underpins the security of the entire internet.

Another question you may have: how do we know a message actually came from Caesar, and not a conspirator? Historically, wax seals and signatures served this purpose. In the age of modern cryptography, we have digital signatures. Think of it like a public notice board where only the owner holds the key to the back panel. Only they can open it and post a notice. Anyone can read it, but everyone knows who put it there. You see a message on a notice board, you know its owner posted it.

Then there are hash functions - a more modern invention with no historical equivalent. They let you verify that data hasn't been tampered with, producing only a small "digest" of the original. You may have encountered this without knowing it: when you download software, websites often display a short string of letters and numbers called a checksum. That's a hash. If anyone tampered with the file in transit, the checksum won't match, and you'll know.

Finally, the most paradoxical of all: the zero knowledge proof. These allow you to prove the validity of a statement without revealing anything beyond the fact that the statement is true. Want to prove you're over 21? You can do exactly that - no birthday, no age, no additional information revealed. Just a cryptographic proof that the statement holds.

All cryptographic primitives and protocols are counterintuitive, even magical, when you first encounter them. They underpin every interaction we have online. The security foundation of the internet. It started with shifting letters, and now it end-to-end encrypts almost all traffic on earth. What a story.

