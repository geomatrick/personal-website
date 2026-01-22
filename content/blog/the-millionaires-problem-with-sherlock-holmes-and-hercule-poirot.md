---
title: "The Millionaire's Problem With Sherlock Holmes And Hercule Poirot"
date: "2018-09-06"
categories: ["Cryptography", "MPC"]
description: "Explaining the Socialist Millionaire's Problem through a fictional murder mystery featuring two famous detectives."
---

Originally Published At: https://medium.com/hackernoon/the-millionaires-problem-with-sherlock-holmes-and-hercule-poirot-930b1b7e960b

![Poirot vs. Holmes](https://miro.medium.com/max/700/1*nGIJNBep4KuJWb5vnqpiAg.png)

Poirot vs. Holmes

*The [Millionaire’s Problem](https://en.wikipedia.org/wiki/Yao%27s_Millionaires%27_Problem) asks whether two millionaires can learn who is richer, without revealing to one another how much money they each have.*

The [*Socialist Millionaires Problem](https://en.wikipedia.org/wiki/Socialist_millionaires) asks whether two [millionaires](https://hackernoon.com/tagged/millionaires) can learn whether they have the same amount of money, without revealing how much money they each have.*

*These are both examples of secure multiparty computation (SMC). SMC is an area of cryptography receiving lots of attention in [blockchain](https://hackernoon.com/tagged/blockchain) and internet-privacy companies, in attempts to protect personal data online.*

*This short story gives a non-technical variant of the Socialist Millionaire’s Problem disguised as a crime thriller!*

# **The Setting**

It was the crime case of the century. The famous Duchess of Bunbury had been found dead at her country home, Roqueby Hall.

Her privileged life had ended in the circular dining room, where she lay next to a candle and a stick.

On the day of the Duchess’ murder, there had been ten guests staying at the Hall and, due to extreme snowfall, there had been no way in or out of the Estate. The suspects were effectively trapped.

One of the guests, Count Harald, upon finding the Duchess slumped against the base of the dining room window, had immediately alerted the police by telephone.

However, in the wintery conditions, the police were unable to reach the Hall straight away.

Within a few days, and crucially before any suspects could make their escape, the police had sufficiently cleared a path across the Estate and were through the Hall’s enormous front doors.

The days of delay meant the police had come prepared. They had brought with them the world’s finest two detectives.

# **The Detectives**

This was the perfect case for the esteemed Belgian Detective Hercule Poirot. He specialised in murder cases involving a small number of people cut off from the rest of the world, on account of the weather or choice of transport.

But this case had also piqued the interests of Monsieur Poirot’s biggest rival, the veritable British detective Sherlock Holmes, and the UK was his home patch.

For both detectives, this case was enormous. It was all over the World’s newspapers and would lead to widespread recognition for the detective who solved it.

But, more importantly, this was finally a chance to determine who was the greater detective. These two titans had never worked on the same case.

# **The Research**

As soon as they both arrived at the sumptuous crime scene, they went about their work with a fervour and commitment that surprised even themselves, as they endeavoured to beat their arch-rival to the answer.

For two days straight, both detectives meticulously analysed the details, delicately gathered evidence, and carefully conducted interrogations of the ten guests, one of whom had to be the murderer.

For both detectives — although they would never admit it to the other — this was proving to be the hardest case they had ever encountered.

On the third day of non-stop investigation, they were exhausted. But they had both reached a conclusion.

Monsieur Poirot sent for Sherlock Holmes to meet him in the Drawing room.

# **The Drawing Room**

“Bonsoir, Monsieur Holmes,” Poirot began. “Please, take a seat.”

“Thank you, Poirot.” replied Holmes and complied. “Now, how are you getting on with your investigations, old boy?”

“In truth, I have found it très facile, Monsieur Holmes.” said Poirot, falsely and arrogantly. “I know who committed this ‘orrible murder.”

“Good Grief” replied Holmes, “I didn’t think you’d’ve cracked it yet. I’m very impressed, old fruit. But, I’m afraid to say, I’ve got it too.”

Poirot, who’d assumed that he was miles (or even kilometres) ahead of Holmes was taken aback. *Surely Holmes can’t have found the clue that gave it all away,* he thought to himself.

Holmes, who had actually worked it out minutes before he had received the call from Hercule, by allowing his subconscious to chew over the details, was equally as shocked that the moustachioed Belgian could possibly have navigated the logical rollercoaster that he had ridden to the solution. *How the devil has he worked this one out. This case has almost beaten me!*

They sat in silence for a few moments before Poirot began.

“Alors, Monsieur Holmes, it is time for you to tell me who you think committed this terrible crime.”

“You first, old chap. I’m not giving the game away that easily,” replied Holmes.

“Absolument non!” replied Poirot, “I cannot possibly say before you.”

“Well then, we’re a bit snookered, Hercule. Not really sure how we can proceed,” said Holmes.

“Oui, It is a tricky one, n’est pas… Perhaps we could both tell Hastings or Watson who we think is the culprit and they could inform us if we have reached the same conclusion” said Poirot, thinking out loud.

“But Hastings and Watson have allegiances,” replied Holmes. “I wouldn’t tell Hastings and you wouldn’t tell Watson. And we can’t confide in any of the suspects because they might have allegiances too, perhaps even to the murderer!”

“This is true, we can reveal our conclusions to no one. Nevertheless, we must find a way to determine if we have settled upon the same culprit,” said Poirot.

Both detectives sat there in deep thought by the roaring fire. Poirot, in a burgundy silk dressing gown, some embroidered slippers and a moustache net, sipping on a glass of Port. Sherlock, puffing on his pipe like mad.

# **The Solution: Secure Multiparty Computation**

It was Hastings who broke this silence. He was lurking by the fireplace.

“I know a way to work out whether or not you’ve both reached the same conclusion, BUT without revealing any further information!” he exclaimed.

“Hastings!” said Poirot “I had absolument no idea you were even in here. You must stop sneaking up on me like this, it is very strange. But, please, go on.”

“Ok, how about this!” began Hastings, enthusiastically. “So outside the Hall, on the Estate, there are ten cottages set in a row. Attached to the front door of each cottage is a wooden postbox with a slit in it for, well, the post.

![The cottages](https://miro.medium.com/max/700/1*VPrn27MSjbg_KGDUul4cnA.png)

The cottages

“The lid of each postbox is padlocked down. The lodger of each cottage possesses the key to their postbox’s padlock. When they want to collect their post, they can simply unlock the padlock and open the postbox’s lid.”

“Go on,” said Sherlock, who was starting to pay attention but was frustrated by how much time Hastings was taking over the details. This irritating man was clearly enjoying his moment in the spotlight.

Hastings continued. “Now, during my investigations — yes I’ve been carrying out a few of my own over the last few days — I noticed that all ten padlocks look the same, so you cannot distinguish between the sets of keys and padlocks.

“So, firstly, I write the name of each suspect on a piece of paper. Then I head off and gather the ten keys that fit the ten different padlocks. I also attach one of the pieces of paper with a suspect’s name on it to the outside of each postbox, and then I return here.

“Once I return, it is your turn, Hercule. I give you the ten keys for the ten postboxes. You must then go along the cottages and find out which key unlocks the postbox with your culprit’s name attached to it.

“You then return here and give me the nine keys that don’t unlock your culprit’s postbox.

“Then it is your turn, Mr Holmes. On nine pieces of paper, you write the word NO. On one piece of paper you write the word YES. Then you sign all ten pieces of paper.

“Then, Mr Holmes, you visit the cottages while myself and Monsieur Poirot remain here. Since all the keys and padlocks look identical, you cannot work out which padlock corresponds to the key Monsieur Poirot kept. You therefore learn nothing about Poirot’s choice of culprit.

“You proceed to drop the YES paper through the slit of the postbox of your chosen culprit, and you drop the NOs into the other nine boxes. You then return here.

“Once Mr Holmes has returned, it is once again your turn Hercule. You must return to the cottages. Since you only have the one key, you can only unlock your chosen postbox.

“Inside this box, you will find a piece of paper with Mr Holmes’ signature on it. It will either say YES or NO.

“You must return here with this piece of paper, and show us what it says. If it says NO, then you have not found the same murderer. But if it says YES, then you have chosen the same culprit.

“And that’s it! By doing these steps, you will learn nothing more than the answer to whether or not you have identified the same murderer.”

# **The Protocol**

Monsieur Poirot and Mr Holmes were both taken aback by Hastings’ idea.

“Why… it’s brilliant” they both exclaimed. “Aside from a few tweaks to ensure that neither of us can cheat, I think this will work!”

Ten minutes later, they had completed Hastings’ protocol. Monsieur Poirot revealed the paper note he had retrieved from his culprit’s postbox.

Written on the paper was the word NO.

The Hunt continues!

***“Secure multi-party computation (SMC)** is a subfield of cryptography with the goal of creating methods for parties to jointly compute a function over their inputs while keeping those inputs private.” — Wikipedia*
