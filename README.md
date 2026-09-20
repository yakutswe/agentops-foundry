# AgentOps Foundry

An interview-ready product prototype for building, evaluating, deploying, and governing operational AI agents.

## Current milestone

The starter includes a responsive React/TypeScript control-plane dashboard with:

- Agent fleet status
- Shadow, canary, and production deployment stages
- Promotion gates
- Evaluation metrics
- Cost and policy-health indicators

## Run locally on Windows PowerShell

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed in the terminal, normally `http://localhost:5173`.

## Build check

```powershell
npm.cmd run build
```

## Product roadmap

1. Agent Manifest and validation
2. Tool and context registry
3. Sandbox execution runtime
4. Historical trace replay
5. Evaluation and promotion gates
6. Shadow and canary deployments
7. Agent observability and rollback

## Demo agent

**Release Guardian** evaluates production deployments using metrics, logs, service context, and deployment history. It recommends whether to continue, pause, or roll back a release while respecting approval and cost policies.
