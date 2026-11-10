<!-- intent-skills:start -->
## Skill Loading

Use the repository’s installed Intent. If it is unavailable, report the missing dependency instead of downloading a replacement.
Before editing files for a substantial task:
- Run `pnpm exec intent list` from the workspace root to see available local skills.
- If a listed skill matches the task, run `pnpm exec intent load <package>#<skill>` before changing files.
- Use the loaded `SKILL.md` guidance while making the change.
- Monorepos: when working across packages, run the skill check from the workspace root and prefer the local skill for the package being changed.
- Multiple matches: prefer the most specific local skill for the package or concern you are changing; load additional skills only when the task spans multiple packages or concerns.
<!-- intent-skills:end -->

## Notion (source de vérité du suivi de projet)

Le suivi du portfolio vit dans Notion, workspace « Notion de Kentin Even » : page `To Do List - Productivité` > `Portfolio` > base `Kanban — Portfolio`.

- Page : https://app.notion.com/p/3c7916b65861800bb03addd1b55d63a2
- Base Kanban : https://app.notion.com/p/96388f04b63143d783f312f9f92c529c (data source `collection://d6a67af4-718b-4f7f-807d-49b897e0ba7e`)
- Propriétés : `Tâche` (titre), `Statut` (Backlog, À faire, En cours, En revue, Bloqué, Terminé), `Priorité` (Basse, Moyenne, Haute, Critique), `Type` (Feature, Bug, Amélioration, Dette technique, Tests, Documentation, DevOps), `Estimation (h)`, `Échéance`, `Issue / PR`.

Règles, via les outils MCP Notion (`notion-fetch`, `notion-query-data-sources`, `notion-update-page`, `notion-create-pages`) :
- Avant toute tâche non triviale, consulter le Kanban pour connaître les priorités et ce qui est déjà en cours ; ne pas dupliquer une carte existante.
- Passer la carte concernée en `En cours` quand le travail démarre, puis en `Terminé` (ou `En revue`) quand il est fini et vérifié ; renseigner `Issue / PR` si une PR existe.
- Tout travail nouveau ou découvert en route (bug, dette) devient une carte, avec statut, priorité, type et estimation.
- Ne jamais supprimer ni vider une carte sans demande explicite.
- Si Notion est indisponible, le dire et continuer ; ne pas inventer l'état du Kanban.
