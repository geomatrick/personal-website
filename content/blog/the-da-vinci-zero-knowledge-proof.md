---
title: "The Da Vinci Zero Knowledge Proof"
date: "2018-03-08"
categories: ["Cryptography", "Zero Knowledge"]
description: "Explaining zero knowledge proofs through a story about the Mona Lisa at the Louvre."
---

# The Da Vinci Zero Knowledge Proof

Published: 2018/03/08
Published At: https://medium.com/swlh/the-da-vinci-zero-knowledge-proof-d6271363382b
Subtitle: Zero Knowledge Proofs are a hot topic in the Blockchain world. The following short story illustrates a technique that is often used in Zero Knowledge Proofs, namely, repeating a protocol multiple times to reduce its “soundness error”.
Topics: Cryptography, Zero Knowledge

![Which Mona Lisa is which? Image: [https://commons.wikimedia.org/wiki/Category:Mona_Lisa](https://commons.wikimedia.org/wiki/Category:Mona_Lisa)](https://miro.medium.com/max/700/1*iDEe2w6I9ysji-zDbIRQmQ.png)

Which Mona Lisa is which? Image: [https://commons.wikimedia.org/wiki/Category:Mona_Lisa](https://commons.wikimedia.org/wiki/Category:Mona_Lisa)

# **Story**

Peggy Pegg-Whistle was having tea in her cottage in Nether Bumpstead, Suffolk, UK, when the call came in from Interpol. She was needed at once at the Louvre. A helicopter was on its way.

Peggy was the world’s finest Art Historian and the go-to person when it came to Da Vinci. She had a feeling which painting this call concerned.

# **Paris**

A few hours later, she arrived at the Louvre. She was welcomed into a side room by a man named Victor.

It was immediately clear that Victor was in no mood for small talk. He didn’t waste any time before explaining what was going on.

“Thank you for coming to Paris, Ms Pegg-Whistle. We find ourselves in a strange situation here. Now this is top secret, but the Mona Lisa was stolen late last night. The police moved fast. There was a car chase down the Champs Élysées, round the Arc du Triomphe, towards the Bois Du Boulogne, and back across the Seine. We finally caught the art thief under the Eiffel Tower.

“However, when we looked inside the getaway van, there, in front of us, were two identical Mona Lisas! We had no option but to take both paintings and bring them back here.

“And here we find ourselves. Behind these two black sheets are the two Mona Lisa paintings, and we don’t know which one is the original.

“We couldn’t spot any differences between them and we didn’t know who else to call. I hear they call you Peggy the Prover, since you have never failed to spot a forgery.

“ Now, there’s an exhibition this evening for some of the biggest names in Paris. I need to know in the next 5 minutes which one of these paintings is the real one, so it can be re-hung in the gallery in time. So, please could you tell me, Ms Pegg-Whistle, which painting is the real Mona Lisa!”

He said the final line as he swooshed the black sheets off the two paintings, which were standing side-by-side against the wall.

Peggy looked at the two paintings for a while. They were indeed very similar. At first glance, they looked absolutely identical. She was amazed by the accuracy of the forgery.

She moved closer and inspected them both for a number of minutes. She looked at both paintings with her face no more than an inch from the canvasses.

Eventually, she backed away from the paintings… she had spotted a difference. She knew which one was the fraud.

She was about to relate exactly what had given it away, but something made her stop.

# **How could she trust this man Victor?**

She hadn’t seen any proof that he was an official at the Louvre or a member of the French Police. She had seen no evidence that he or anything he had said was authentic.

The 5 minute deadline seemed extremely short and suddenly she thought… what if Victor was in fact the criminal here?

And now she thought about it, there was something unbecoming, untoward, unsavoury and unusual about Victor, and Peggy’s intuitions were usually spot on.

Perhaps Victor had created the fake Mona Lisa and was in the act of replacing the real one with his forgery. His final check of its accuracy was to test Peggy the Prover, the world’s finest Art Historian, with the two painting side-by-side.

She tried to brush aside such sensational ideas, but there was something about him that she just didn’t like. The whole situation felt strange.

# **What should she do?**

Perhaps she should just say that the two paintings were identical… but then he would re-hang the forgery (for surely he knew which one was the forgery if he had created it, perhaps he had marked the back of the frame or something) and he would steal the real one, thinking that no one would ever know. She would then have to alert the police that the real Mona Lisa had been stolen.

Or… she should show him the difference between the paintings. But then he would learn from the world’s best Art Historian where the forgery could be improved. And if he had made a forgery as good as this one, and was then informed of the tiny difference she had spotted, it would instantly make him the best forger in the world!

She needed a way to prove that she could tell the paintings apart, so that he wouldn’t run off with the genuine painting. But she needed to do so **without revealing any knowledge about the difference** she had spotted, so that he didn’t learn anything from the best Art Historian in the world… at least until she could get someone in the room whom she trusted.

She needed to prove **in zero knowledge** that she knew the difference between the paintings.

# **She began…**

“I will prove to you that these two paintings are different, and thus I know which one is the real Mona Lisa. But I will not reveal what the difference is.”

Victor immediately showed his hand as not being as trustworthy as he was trying to make out.

“How on earth can you do that?! I’m sorry Peggy but we are in a real rush here. Please can you just tell me what the difference is,” he retorted.

# **The Protocol**

“This is what we shall do,” she began unflustered. “I will point at one of the paintings, and you must remember which one I have pointed at. Then you will blindfold me. Then you can either swap the paintings or leave them in their current positions. When you are ready, you can remove my blindfold and I will point once again at the painting at which I originally pointed.”

Victor interjected, “but that is just a 50–50, how do I know you are not just guessing?”

“You don’t,” she replied, “but then we will repeat this test 10 times. And, each time we do so, you will keep your eye on the painting at which I originally pointed, and I will be tested again whether I can point at the same painting. If I do indeed know of a difference between the paintings, then I will be able to point at the same painting every time.

“However, if I cannot tell the difference between them, then, over the 10 rounds combined, I will have a less than 1 out of 1000 chance of just guessing correctly. To be precise, the probability of guessing correctly is 1/2 to the power of 10, or 1 out of 1024.”

Victor considered his options but really had no choice but to go through with the protocol as laid out by Peggy. Over the 10 rounds of the protocol, she did indeed show, by pointing at the same painting every time, that, with very high probability (1023/1024 or 99.9%), she could tell the difference between the paintings, without revealing any information about the difference she had spotted.

# **What happened next?**

What’s more, Peggy’s intuitions had been correct! Victor already knew which one was the real Mona Lisa before she had arrived. He was a forger and was planning to steal the real painting. He had contacted Peggy as his final check to make sure that he would get away with it.

However, he watched bemused as, round after round, she pointed at the same painting, thus showing his forgery to be substandard, but not revealing what exactly had given the game away.

After the 10 rounds of the protocol, Peggy left the room and immediately called her friend who worked at the Louvre whom she trusted.

5 minutes later, she returned with her friend to the room to find that Victor and the real Mona Lisa had gone! He had clearly given up with the forgery and impatiently run off with the real painting.

Peggy immediately alerted the police and the hunt was on to find Victor!

*Zero knowledge proofs allow you to prove you know something without revealing any information you don’t want to reveal.*

*In the academic literature on zero knowledge proofs, a protocol is said to be perfectly “sound”, if the verifier can be 100% sure that the prover does indeed know of the secret. Often the zero knowledge property of a protocol is obtained at the expense of the soundness property of the protocol.*

*In the above protocol, each round of the protocol has a “soundness error” of 1/2, i.e. the verifier is only 50% sure that the prover knows the secret in each round.*

*Many zero knowledge proof protocols repeat the same test a number of times, where each round has a fixed soundness error. This repetition creates a much smaller soundness error.*