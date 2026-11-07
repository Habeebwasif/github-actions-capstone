![PR Pipeline](https://github.com/Habeebwasif/github-actions-capstone/actions/workflows/pr-pipeline.yml/badge.svg)
![Main Pipeline](https://github.com/Habeebwasif/github-actions-capstone/actions/workflows/main-pipeline.yml/badge.svg)
![Health Check](https://github.com/Habeebwasif/github-actions-capstone/actions/workflows/health-check.yml/badge.svg)

PR-Architecture:

PR opened/updated ──► build & test ──► pr-comment (PR checks pass)
                      (no Docker push)

Merge to main ──► build & test ──► short-sha ──► Docker build & push ──► deploy
                                                 notes-api               (environment: production,
                                                 notes-frontend           manual approval)
                                                 tags: sha-xxxxxxx, latest

Every 12 hours ──► health check: pull images → start stack → curl /health → summary → cleanup
(and manual)
