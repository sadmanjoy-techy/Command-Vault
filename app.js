const commands = [
  {
    title: "Application upgrading",
    category: "Windows",
    description: "Upgrade all applications that WinGet can update.",
    command: "winget upgrade --all",
    keywords: "update apps application upgrade package manager windows",
  },
  {
    title: "Check application updates",
    category: "Windows",
    description: "List applications with available WinGet updates.",
    command: "winget upgrade",
    keywords: "update apps application upgrade list outdated",
  },
  {
    title: "Install an application",
    category: "Windows",
    description: "Install an application through WinGet.",
    command: "winget install <package>",
    keywords: "install app software windows package",
  },
  {
    title: "Search WinGet packages",
    category: "Windows",
    description: "Search available packages by name.",
    command: "winget search <name>",
    keywords: "find package app search software",
  },
  {
    title: "System information",
    category: "Windows",
    description: "Open detailed Windows system information.",
    command: "msinfo32",
    keywords: "system info hardware specifications",
  },
  {
    title: "Open environment variables",
    category: "Windows",
    description: "Open Windows environment variables.",
    command: "sysdm.cpl",
    keywords: "path environment variables windows",
  },
  {
    title: "Open Task Manager",
    category: "Windows",
    description: "Launch Windows Task Manager.",
    command: "taskmgr",
    keywords: "process cpu ram performance",
  },
  {
    title: "List files",
    category: "CMD",
    description: "Show files and folders in the current directory.",
    command: "dir",
    keywords: "list files folder directory",
  },
  {
    title: "Change directory",
    category: "CMD",
    description: "Move to another directory.",
    command: "cd <folder>",
    keywords: "directory folder navigate",
  },
  {
    title: "Clear terminal",
    category: "CMD",
    description: "Clear the current terminal screen.",
    command: "cls",
    keywords: "clear screen terminal",
  },
  {
    title: "Create a folder",
    category: "CMD",
    description: "Create a new directory.",
    command: "mkdir <folder>",
    keywords: "directory folder create",
  },
  {
    title: "Check IP configuration",
    category: "CMD",
    description: "Display network adapter IP information.",
    command: "ipconfig",
    keywords: "network ip wifi ethernet",
  },
  {
    title: "Ping a host",
    category: "CMD",
    description: "Test basic network reachability.",
    command: "ping <host>",
    keywords: "network internet connectivity server",
  },
  {
    title: "Find a command",
    category: "CMD",
    description: "Show the location of an executable.",
    command: "where <command>",
    keywords: "path executable locate python git node",
  },
  {
    title: "Create Python virtual environment",
    category: "Code Runners",
    description: "Create an isolated Python environment.",
    command: "python -m venv .venv",
    keywords: "python venv virtual environment setup",
  },
  {
    title: "Activate venv — Windows CMD",
    category: "Code Runners",
    description: "Activate a Python virtual environment in CMD.",
    command: ".venv\\Scripts\\activate",
    keywords: "python virtual environment activate cmd windows",
  },
  {
    title: "Activate venv — PowerShell",
    category: "Code Runners",
    description: "Activate a Python virtual environment in PowerShell.",
    command: ".\\.venv\\Scripts\\Activate.ps1",
    keywords: "python virtual environment activate powershell",
  },
  {
    title: "Install Python requirements",
    category: "Code Runners",
    description: "Install dependencies from requirements.txt.",
    command: "pip install -r requirements.txt",
    keywords: "python pip dependencies packages requirements",
  },
  {
    title: "Freeze Python dependencies",
    category: "Code Runners",
    description: "Save current Python dependencies.",
    command: "pip freeze > requirements.txt",
    keywords: "python pip requirements dependencies export",
  },
  {
    title: "Run Python file",
    category: "Code Runners",
    description: "Execute a Python script.",
    command: "python app.py",
    keywords: "python run execute script",
  },
  {
    title: "Run Streamlit app",
    category: "Code Runners",
    description: "Start a Streamlit application.",
    command: "streamlit run app.py",
    keywords: "streamlit python webapp run project",
  },
  {
    title: "Run FastAPI with Uvicorn",
    category: "Code Runners",
    description: "Start a FastAPI application with reload.",
    command: "uvicorn main:app --reload",
    keywords: "fastapi python api server uvicorn run",
  },
  {
    title: "Run Node project",
    category: "Code Runners",
    description: "Run the project start script.",
    command: "npm run start",
    keywords: "node npm javascript project run",
  },
  {
    title: "Run Vite project",
    category: "Code Runners",
    description: "Start a Vite development server.",
    command: "npm run dev",
    keywords: "vite javascript frontend dev server run",
  },
  {
    title: "Run React project",
    category: "Code Runners",
    description: "Start a React development server.",
    command: "npm start",
    keywords: "react javascript frontend run project",
  },
  {
    title: "Run Flask app",
    category: "Code Runners",
    description: "Start a Flask development server.",
    command: "flask --app app run --debug",
    keywords: "flask python webapp server run",
  },
  {
    title: "Clone repository",
    category: "Git",
    description: "Copy a remote Git repository locally.",
    command: "git clone <repository-url>",
    keywords: "git github clone repository download",
  },
  {
    title: "Check Git status",
    category: "Git",
    description: "See changed, staged and untracked files.",
    command: "git status",
    keywords: "git changes status files",
  },
  {
    title: "Stage all changes",
    category: "Git",
    description: "Stage all current changes for the next commit.",
    command: "git add .",
    keywords: "git stage add commit",
  },
  {
    title: "Commit changes",
    category: "Git",
    description: "Create a commit with a message.",
    command: 'git commit -m "message"',
    keywords: "git commit save changes",
  },
  {
    title: "Push current branch",
    category: "Git",
    description: "Upload local commits to the remote repository.",
    command: "git push",
    keywords: "git github upload push remote",
  },
  {
    title: "Pull latest changes",
    category: "Git",
    description: "Fetch and integrate remote changes.",
    command: "git pull",
    keywords: "git github download sync remote",
  },
  {
    title: "Show IP address",
    category: "Kali Linux",
    description: "Display network interface and IP information.",
    command: "ip addr",
    keywords: "kali linux ip network interface address",
  },
  {
    title: "Show network interfaces",
    category: "Kali Linux",
    description: "List available network interfaces.",
    command: "ip link",
    keywords: "kali linux network interfaces adapter",
  },
  {
    title: "Test connectivity",
    category: "Kali Linux",
    description: "Test reachability to a host.",
    command: "ping <host>",
    keywords: "kali linux network connectivity host",
  },
  {
    title: "List open ports locally",
    category: "Kali Linux",
    description: "Show listening TCP/UDP sockets on your machine.",
    command: "ss -tuln",
    keywords: "kali linux ports sockets network listening",
  },
  {
    title: "Trace network route",
    category: "Kali Linux",
    description: "Show the network path to a destination.",
    command: "traceroute <host>",
    keywords: "kali linux route network trace",
  },
  {
    title: "DNS lookup",
    category: "Kali Linux",
    description: "Query DNS records for a domain.",
    command: "dig <domain>",
    keywords: "kali linux dns domain lookup security",
  },
  {
    title: "Check active processes",
    category: "Kali Linux",
    description: "View running processes.",
    command: "ps aux",
    keywords: "kali linux processes system monitoring",
  },
  {
    title: "Live process monitor",
    category: "Kali Linux",
    description: "Interactively monitor running processes.",
    command: "top",
    keywords: "kali linux process cpu ram monitor",
  },
  {
    title: "List files with details",
    category: "Kali Linux",
    description: "Show hidden files and detailed permissions.",
    command: "ls -la",
    keywords: "kali linux files permissions directory",
  },
  {
    title: "Change file permissions",
    category: "Kali Linux",
    description: "Set file permissions using chmod.",
    command: "chmod 755 <file>",
    keywords: "kali linux chmod permissions file",
  },
  {
    title: "Search files",
    category: "Kali Linux",
    description: "Find files by name under a directory.",
    command: 'find <path> -name "<filename>"',
    keywords: "kali linux find search files directory",
  },
  {
    title: "Search text in files",
    category: "Kali Linux",
    description: "Search recursively for matching text.",
    command: 'grep -R "<text>" <path>',
    keywords: "kali linux grep search text files",
  },
  {
    title: "Update package lists",
    category: "Kali Linux",
    description: "Refresh package metadata.",
    command: "sudo apt update",
    keywords: "kali linux apt update packages",
  },
  {
    title: "Upgrade packages",
    category: "Kali Linux",
    description: "Upgrade installed packages.",
    command: "sudo apt full-upgrade",
    keywords: "kali linux apt upgrade packages update",
  },
  {
    title: "Install a package",
    category: "Kali Linux",
    description: "Install a package from configured repositories.",
    command: "sudo apt install <package>",
    keywords: "kali linux apt install package",
  },
  {
    title: "Start a service",
    category: "Kali Linux",
    description: "Start a systemd service.",
    command: "sudo systemctl start <service>",
    keywords: "kali linux systemctl service start",
  },
  {
    title: "Check service status",
    category: "Kali Linux",
    description: "View the status of a systemd service.",
    command: "sudo systemctl status <service>",
    keywords: "kali linux systemctl service status",
  },
];

const state = { category: "Windows", query: "" };
const results = document.getElementById("results"),
  empty = document.getElementById("empty"),
  count = document.getElementById("count"),
  search = document.getElementById("search"),
  toast = document.getElementById("toast");
function normalize(v) {
  return v.toLowerCase().trim();
}
function score(item, q) {
  if (!q) return 0;
  const title = normalize(item.title),
    cat = normalize(item.category),
    text = normalize(`${item.description} ${item.keywords} ${item.command}`);
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 65;
  if (cat.includes(q)) return 45;
  if (text.includes(q)) return 25;
  return -1;
}
function filtered() {
  const q = normalize(state.query);
  return commands
    .filter((i) => state.category === i.category)
    .map((item) => ({ item, score: score(item, q) }))
    .filter((x) => !q || x.score >= 0)
    .sort(
      (a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title),
    )
    .map((x) => x.item);
}
function esc(v) {
  return v.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[c],
  );
}
function render() {
  const items = filtered();
  count.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
  results.innerHTML = items
    .map(
      (item) =>
        `<article class="card"><div class="card-content"><div class="card-top"><h2>${esc(item.title)}</h2><span class="tag">${esc(item.category)}</span></div><p class="description">${esc(item.description)}</p><code class="command">${esc(item.command)}</code></div><button class="copy" data-index="${commands.indexOf(item)}">Copy</button></article>`,
    )
    .join("");
  empty.classList.toggle("hidden", items.length !== 0);
}
async function copyCommand(i, b) {
  try {
    await navigator.clipboard.writeText(commands[i].command);
  } catch {
    const a = document.createElement("textarea");
    a.value = commands[i].command;
    document.body.appendChild(a);
    a.select();
    document.execCommand("copy");
    a.remove();
  }
  b.textContent = "Copied";
  b.classList.add("copied");
  toast.classList.add("show");
  setTimeout(() => {
    b.textContent = "Copy";
    b.classList.remove("copied");
    toast.classList.remove("show");
  }, 1100);
}
search.addEventListener("input", (e) => {
  state.query = e.target.value;
  render();
});
document.querySelectorAll(".filter").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelector(".filter.active")?.classList.remove("active");
    b.classList.add("active");
    state.category = b.dataset.category;
    render();
  }),
);
results.addEventListener("click", (e) => {
  const b = e.target.closest(".copy");
  if (b) copyCommand(+b.dataset.index, b);
});
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    search.focus();
    search.select();
  }
  if (e.key === "Escape" && document.activeElement === search) {
    search.value = "";
    state.query = "";
    render();
  }
});
render();
