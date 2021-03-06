+++
title = "Flux RSS avec feedpushr"
description = "Utilisation de feedpushr pour intégrer des flux RSS"
weight = 2
+++

![](images/feedpushr.png)

[Feedpushr](https://github.com/ncarlier/feedpushr) est un puissant aggrégateur Open Source de flux RSS capable de traiter et envoyer les articles vers des serices tiers.
Et parmi ces services, nous avons readflow.

Pour utiliser readflow avec feedpushr, vous devez utiliser et configurer son plugin:

```bash
$ # Configurer l'URL de readflow
$ export APP_READFLOW_URL=https://api.readflow.app
$ # Configurer la clé d'API
$ export APP_READFLOW_API_KEY=d70*************456
$ # Lancer feedpushr
$ feedpushr --log-pretty --plugin ./feedpushr-readflow.so --output readflow://
```

ou avec Docker:

```bash
$ cat conf.env
APP_PLUGINS=feedpushr-readflow.so                                           
APP_READFLOW_URL=https://api.readflow.app
APP_READFLOW_API_KEY=<YOUR API KEY>
APP_OUTPUTS=readflow://
APP_FILTERS=fetch://#fetch,minify://#minify
APP_LOG_PRETTY=true
```

```bash
$ docker run -d --name feedpushr -p 8080:8080 --env-file=conf.env ncarlier/feedpushr-contrib
```

Vous devriez voir ceci sur [l'IHM de feedpushr](http://localhost:8080/ui) :

![](images/feedpushr-ui.png)

Vous pouvez ensuite importer vos abonnements OPML dans feedpushr et voir vos articles arriver dans readflow.
