import {
  Activity,
  Boxes,
  Bot,
  ChevronRight,
  CircleDollarSign,
  FlaskConical,
  Gauge,
  GitBranch,
  Plus,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const agents = [
  { name: "Release Guardian", version: "v1.4.0", status: "Canary", health: 98, runs: "1,284" },
  { name: "Error Investigator", version: "v2.1.2", status: "Production", health: 96, runs: "8,419" },
  { name: "Cost Optimizer", version: "v0.8.3", status: "Shadow", health: 91, runs: "642" },
];

const evaluations = [
  { label: "Decision accuracy", value: "94.2%", change: "+4.8%" },
  { label: "Evidence coverage", value: "97.1%", change: "+2.3%" },
  { label: "Unsafe tool attempts", value: "0", change: "Passed" },
  { label: "Average run cost", value: "$0.11", change: "-18%" },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><Bot size={20} /></div><span>AgentOps</span></div>
        <nav>
          <a className="active" href="#overview"><Gauge size={18} /> Overview</a>
          <a href="#agents"><Bot size={18} /> Agents</a>
          <a href="#tools"><Wrench size={18} /> Tool Registry</a>
          <a href="#evaluations"><FlaskConical size={18} /> Evaluations</a>
          <a href="#deployments"><GitBranch size={18} /> Deployments</a>
          <a href="#governance"><ShieldCheck size={18} /> Governance</a>
        </nav>
        <div className="workspace-card">
          <span className="eyebrow">WORKSPACE</span>
          <strong>Zee's AI Lab</strong>
          <span>Enterprise sandbox</span>
        </div>
      </aside>

      <main>
        <header>
          <div><span className="eyebrow">CONTROL PLANE</span><h1>Operational AI, under control.</h1><p>Build, evaluate, deploy, and govern agents from one platform.</p></div>
          <button className="primary"><Plus size={17} /> Create agent</button>
        </header>

        <section className="stats-grid">
          <article><div className="icon purple"><Bot size={19} /></div><span>Active agents</span><strong>12</strong><small>3 in production</small></article>
          <article><div className="icon blue"><Activity size={19} /></div><span>Runs this week</span><strong>10,345</strong><small className="positive">↑ 12.4%</small></article>
          <article><div className="icon green"><ShieldCheck size={19} /></div><span>Policy compliance</span><strong>99.8%</strong><small>All gates healthy</small></article>
          <article><div className="icon amber"><CircleDollarSign size={19} /></div><span>Average run cost</span><strong>$0.11</strong><small className="positive">↓ 18.0%</small></article>
        </section>

        <section className="content-grid">
          <article className="panel agents-panel" id="agents">
            <div className="panel-heading"><div><span className="eyebrow">AGENT FLEET</span><h2>Recently active</h2></div><button className="text-button">View all <ChevronRight size={16} /></button></div>
            <div className="agent-list">
              {agents.map((agent) => (
                <div className="agent-row" key={agent.name}>
                  <div className="agent-avatar"><Bot size={20} /></div>
                  <div className="agent-name"><strong>{agent.name}</strong><span>{agent.version} · {agent.runs} runs</span></div>
                  <span className={`status ${agent.status.toLowerCase()}`}>{agent.status}</span>
                  <div className="health"><span>{agent.health}%</span><div><i style={{ width: `${agent.health}%` }} /></div></div>
                  <ChevronRight size={17} />
                </div>
              ))}
            </div>
          </article>

          <article className="panel deployment-panel" id="deployments">
            <div className="panel-heading"><div><span className="eyebrow">LIVE DEPLOYMENT</span><h2>Release Guardian</h2></div><span className="live-dot">Live</span></div>
            <div className="deployment-flow">
              <div className="flow-step complete"><span>1</span><div><strong>Shadow</strong><small>1,000 runs</small></div></div>
              <div className="flow-line complete" />
              <div className="flow-step current"><span>2</span><div><strong>Canary</strong><small>10% traffic</small></div></div>
              <div className="flow-line" />
              <div className="flow-step"><span>3</span><div><strong>Production</strong><small>Awaiting gate</small></div></div>
            </div>
            <div className="gate"><ShieldCheck size={18} /><div><strong>Promotion gate</strong><span>5 of 6 evaluations passed</span></div><b>83%</b></div>
            <button className="secondary">Open deployment</button>
          </article>
        </section>

        <section className="panel evaluation-panel" id="evaluations">
          <div className="panel-heading"><div><span className="eyebrow">EVALUATION LAB</span><h2>Version comparison</h2></div><div className="comparison"><span>v1.3.2</span><b>vs</b><span className="selected">v1.4.0</span></div></div>
          <div className="evaluation-grid">
            {evaluations.map((metric) => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.change}</small></div>)}
          </div>
          <div className="trace-banner"><Boxes size={19} /><div><strong>250 historical traces replayed</strong><span>Checkout regressions, dependency failures, and false-positive alerts</span></div><button>View report <ChevronRight size={15} /></button></div>
        </section>
      </main>
    </div>
  );
}

export default App;
