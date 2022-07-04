#1 RAPPEL DE L'ENNONCE DU TEST :

Afin de disposer d’une base de discussion technique, nous souhaitons vous proposer l’exercice suivant :

En paie, nous travaillons avec des périodes.

La période mensuelle est la plus courante, notamment parce qu'elle correspond au rythme d'édition des bulletins de paie.
Elle commence le premier jour du mois à minuit (inclus) et termine le premier jour du mois suivant à minuit (exclu).

D'autres périodes existent dans le métier de la paie, par exemple les périodes d'absence comme les congés.

Etant donné qu'un salarié a posé des congés, nous avons besoin d’une fonction qui permette de savoir si la période de congés est incluse tout ou partie dans une période mensuelle. Si la période de congés est à cheval sur plusieurs périodes mensuelles, l’application devra découper la période de congés pour créer une période de congés par période mensuelle.

Travail attendu :
- Créer un projet Github dans le langage de votre choix. L’utilisation d’un framework est possible. L’utilisation d’une base de données n’est pas nécessaire,
- Implémenter la notion de période(s),
- Créer une fonction permettant de déclarer une période de congés,
- Créer une fonction de contrôle qui sera appelée pour vérifier si la période #1#1#1de congés est totalement incluse dans une période mensuelle donnée,
- Générer une écriture de la ou des période(s) de congés à enregistrer,
- Mettre en place un ou plusieurs test(s) unitaire(s),
- Fournir les explications permettant de comprendre et de tester le projet.


#2 EXPLICATION DU TRAVAIL REALISE :

Je n'avais jamais utilisé les fonctions de temps sous JS. J'ai commencé par me documenter. La manipulation des dates sous JS ne m'a pas apparu simple de prime abord. J'ai alors cherché s'il n'existait pas des librairies pour faciliter cette manipulation. J'ai découvert Moment.js, Date-fns et Luxon. Il n'est plus conseillé d'utiliser Moment.js désormais. Je me suis alors tourné vers Date-fns mais j'ai rencontré des problèmes à faire tourner Parcel que je ne connaissais pas non plus. J'ai alors décidé d'utiliser Luxon mais je ne comprenais pas comment le faire fonctionner avec Webpack.

Plutôt que de passer trop de temps à appréhender des librairies et des logiciels que je ne connais pas, je me suis résolu à répondre à la consigne directement avec les fonctions Date de JS. Finalement, après pas mal de lectures et de petites tentatives dans codeSandbox, j'ai commencé à assimiler leurs fonctionnements pour réussir à produire quelques algos qui répondent à la consigne.

Je me suis ensuite attaché à découvrir les tests unitaires car je n'en avais jamais fait auparavant. Rapidement, mes recheches m'ont conduit vers Jest. J'ai lu la documentation et je me suis entrainé en suivant les premiers pas de la doc et en regardant des tutos sur youTube. J'ai alors appris que normalement, j'aurais d'abord dû créer le test, en m'assurant dans un premier temps que mon test échoue pour m'assurer qu'il écrit correctement et seulement dans un second temps, j'aurais dû écrire mes algos. J'avoue que je ne vois pas maintenant comment écrire des tests pour les algos que j'ai écrits, sans les orienter pour obtenir à tous les coups le résultat que je recherche, afin de valider mon écriture...

Tout ce travail de recherche et d'écriture m'a pris l'équivalent d'une journée. Mais j'ai en réalité travaillé par plusieurs tranches de 1H30 / 2H, sur plusieurs jours ce qui me permet d'assimiler toutes ces découvertes et ces apprentissages tout en avançant sur mes autres projets, jusqu'à ce que des solutions se dessinent et que je parvienne à produire du code.