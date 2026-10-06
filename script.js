const STORAGE_KEY = "harish_switch_tracker_v1";
const TOTAL_DAYS = 90;

const ROADMAP = [
  ["Arrays Basics", "What is Scalability?", "OOP Principles"],
  ["Two Pointers", "Latency vs Throughput", "SOLID Principles"],
  ["Sliding Window (Fixed Size)", "Vertical vs Horizontal Scaling", "Java Basics: Types & Control Flow"],
  ["Strings Basics & Manipulation", "Load Balancer Basics", "Strings & StringBuilder"],
  ["Anagrams & Valid Anagrams", "Round Robin & Health Checks", "Collections: List & Set"],
  ["Palindromes (Two Pointer)", "CAP Theorem", "Collections: Map Interface"],
  ["Hashing Basics", "Consistent Hashing Basics", "ArrayList vs LinkedList Internals"],
  ["Two Sum & HashMap Problems", "Database Indexing Basics", "HashSet & TreeSet Internals"],
  ["Prefix Sum & Subarray Sums", "B-Tree & B+ Tree Indexes", "HashMap Internals"],
  ["Kadane's Algorithm (Max Subarray)", "SQL vs NoSQL", "Comparable vs Comparator"],
  ["Sorting Algorithms Basics", "ACID vs BASE Properties", "Iterators & Fail-Fast Behaviour"],
  ["Binary Search Basics", "Caching Basics (Cache-aside)", "Exception Handling"],
  ["Binary Search on Rotated Array", "Cache Invalidation Strategies", "Custom Exceptions & try-with-resources"],
  ["Linked List Basics & Traversal", "CDN Basics", "Lambda Expressions"],
  ["Linked List: Reverse & Cycle Detection", "DNS & How the Web Works", "Functional Interfaces"],
  ["Stack Basics & Implementations", "HTTP/HTTPS & REST Basics", "Stream API Basics"],
  ["Next Greater Element (Monotonic Stack)", "Rate Limiting Basics", "Streams: Intermediate & Terminal Ops"],
  ["Queue & Deque Basics", "Proxy vs Reverse Proxy", "Collectors & GroupingBy"],
  ["Recursion & Backtracking Intro", "Session Management & Statelessness", "Optional Best Practices"],
  ["Subsets & Permutations", "Database Replication Basics", "Java I/O & Serialization"],
  ["N-Queens & Combination Sum", "Primary-Secondary Replication", "Generics Basics"],
  ["Greedy: Fractional Knapsack, Activity Selection", "Sharding Basics", "Enums, Records & Immutability"],
  ["Matrix: Rotate, Spiral, Search", "Partitioning Strategies", "Git Branching & Workflow"],
  ["Priority Queue & Heap Basics", "Message Queue Basics", "Maven/Gradle & Project Structure"],
  ["Kth Largest & Top K Elements", "Pub/Sub Pattern", "JVM Architecture Overview"],
  ["Bit Manipulation Basics", "Redis Basics & Data Structures", "Class Loading & Memory Areas"],
  ["Math & Number Theory (GCD, Primes)", "Redis Persistence & Eviction", "Spring Core: IoC & Dependency Injection"],
  ["Sliding Window: Longest Non-Repeating Substring", "SQL Query Optimization", "Spring Bean Lifecycle & Scopes"],
  ["Mixed Foundation Problem Set", "Database Normalisation", "Spring Annotations Deep Dive"],
  ["Foundation Revision + Mock Set 1", "Case Study: Pastebin Design", "Foundation Java Revision + Quiz"],

  ["Linked List: Merge & Reorder Lists", "Deep Dive: Database Scaling Options", "Multithreading Basics & Thread Lifecycle"],
  ["LRU Cache (DLL + HashMap)", "Composite & Covering Indexes", "Synchronised & volatile"],
  ["Stack: Valid Parentheses & Expression Evaluation", "Query Plans & Slow Query Analysis", "wait/notify & Producer-Consumer"],
  ["Sliding Window Maximum (Deque)", "Connection Pooling", "Executors & Thread Pools"],
  ["Binary Search: Search-Space Problems", "Read Replicas & Write Bottlenecks", "CompletableFuture"],
  ["Median of Two Sorted Arrays", "Sharding: Hash vs Range vs Directory", "CountDownLatch, Semaphore, BlockingQueue"],
  ["Trees: Recursive Traversals", "Resharding & Hotspots", "Deadlocks & Concurrency Pitfalls"],
  ["Trees: Morris / Iterative Traversals", "Distributed ID Generation", "Atomic Classes & CAS"],
  ["Tree Height, Diameter & Level Order", "Delivery Semantics (At-least-once etc.)", "Virtual Threads (Java 21)"],
  ["Tree Views (Top, Bottom, Right)", "RabbitMQ: Exchanges, Queues, Ack", "Reflection & ClassLoaders"],
  ["BST: Insert, Delete, Validate", "Kafka: Topics & Partitions", "JVM Memory Model & Heap Tuning"],
  ["BST: Kth Smallest & LCA", "Kafka: Consumer Groups & Ordering", "Garbage Collection Algorithms"],
  ["Serialize & Deserialize Binary Tree", "Redis Caching Patterns", "GC Tuning & Tools (jmap, jstack)"],
  ["Merge K Sorted Lists (Heap)", "Redis Sentinel & Cluster", "JIT Compilation & Performance"],
  ["Median from Data Stream", "Redis Distributed Locks", "Spring Boot Auto-configuration"],
  ["Graph: BFS & Grid Traversal", "JWT vs Server-side Sessions", "Spring Boot Starters & Profiles"],
  ["Graph: DFS & Connected Components", "WebSocket & Real-time Systems", "@ConfigurationProperties"],
  ["Graph: Topological Sort", "Background Jobs & Schedulers", "REST Controllers & Input Validation"],
  ["Graph: Dijkstra's Algorithm", "Email Notification System", "@ControllerAdvice Exception Handling"],
  ["Graph: Union Find (DSU)", "Rate Limiter Algorithms", "JUnit 5 & Mockito Testing"],
  ["Graph: Bellman-Ford & Floyd-Warshall", "API Gateway Basics", "JPA Entities & Relationships"],
  ["DP: 0/1 Knapsack", "REST vs gRPC for Microservices", "JPQL, Native Queries & Projections"],
  ["DP: LIS & LCS", "Saga Pattern & Distributed Transactions", "Hibernate N+1 Problem & Fetch Types"],
  ["DP: Grid DP (Unique Paths, Min Path Sum)", "Service Discovery & Config Server", "Spring Data JPA Repositories"],
  ["DP: Coin Change & Unbounded Knapsack", "Observability: Logs, Metrics, Tracing", "@Transactional Deep Dive"],
  ["DP: Interval DP Introduction", "CI/CD Pipelines Basics", "Spring Security: Authentication Basics"],
  ["Backtracking: Sudoku Solver", "Docker Basics for Backend", "Spring Security: JWT Implementation"],
  ["Greedy: Huffman & Job Sequencing", "AWS: EC2, S3, RDS Essentials", "Spring Security: Roles & Method Security"],
  ["Advanced Sliding Window Variants", "Case Study: URL Shortener Design", "File Upload, Download & Pagination"],
  ["Intermediate Revision + Contest Day", "Case Study: Instagram Feed Design", "Intermediate Revision + Mock Interview"],

  ["Trees: LCA & Path Sum Variants", "Consensus: Paxos & Raft", "Spring Boot + Redis Integration"],
  ["Binary Tree: Boundary & Zigzag Traversal", "Logical Clocks: Lamport & Vector", "Spring Boot + RabbitMQ"],
  ["Tries: Insert, Search, Prefix", "Distributed Failures & Idempotency", "Spring Boot + Kafka"],
  ["Trie: Word Search II & Autocomplete", "Deep Dive: URL Shortener", "@Scheduled & @Async Jobs"],
  ["Kosaraju / Tarjan (Strongly Connected)", "Notification System Design", "Spring Boot Actuator & Monitoring"],
  ["MST: Kruskal & Prim", "Chat System Design (WhatsApp)", "Service-to-Service Security"],
  ["Advanced Shortest Path Problems", "File Storage System Design", "Circuit Breaker (Resilience4j)"],
  ["Bitmask DP", "Rate Limiter Full Design", "OpenAPI / Swagger Documentation"],
  ["DP on Trees / Digit DP Introduction", "Feed System Design", "Dockerising Spring Boot"],
  ["Partition DP & Subset Sum", "Video Streaming System Design", "AWS Deployment for Spring Apps"],
  ["Stock Buy/Sell DP Series", "Search Autocomplete Design", "Advanced JPA Specifications"],
  ["Edit Distance & Palindrome DP", "Shopping Cart Design", "Flyway / Liquibase Migrations"],
  ["KMP & Z-Algorithm", "Order & Payment Flow Design", "Spring Boot Performance Tuning"],
  ["Rabin-Karp & Rolling Hash", "Ride Booking System Design", "Centralised Logging (ELK basics)"],
  ["Backtracking: Hard Puzzles", "Ticket Booking (BookMyShow) Design", "OAuth2 / Social Login"],
  ["Segment Tree Basics", "Payment System Design", "WebFlux Reactive Basics"],
  ["Fenwick Tree (Binary Indexed Tree)", "Multi-region DB & Disaster Recovery", "Design Patterns: Singleton, Factory, Strategy"],
  ["Monotonic Stack: Hard Set", "Analytics Pipeline & Data Warehouse", "SOLID & Clean Code in Practice"],
  ["Two Pointers: 3Sum, 4Sum, Container", "Blue-Green & Canary Deployments", "Java Memory Leaks & Troubleshooting"],
  ["Predicate-based Binary Search", "OAuth2 & Security in Distributed Systems", "Load Testing with JMeter"],
  ["Heap: Task Scheduling & Merging", "CAP in Practice & Conflict Resolution", "Resume Project: Architecture & Bullets"],
  ["Interval Scheduling & Greedy Set", "MQ vs DB vs Stream Trade-offs", "Resume Project: Build Core Module"],
  ["Multi-source BFS & Grid Flood Fill", "4-Step System Design Framework", "Resume Project: Tests & Hardening"],
  ["Implement LRU & LFU (Interview Style)", "Mock SD: Design a CMS", "STAR Stories for Behavioural Rounds"],
  ["Company-tagged Easy Sprint", "Mock SD: Notification + URL Combo", "Mock Java Interview Round 1"],
  ["Medium Mixed Sprint", "Mock SD: URL Monitoring System", "Mock Java Interview Round 2"],
  ["Hard Mixed Sprint", "Mock SD: Ticket Booking Platform", "Hybrid Java + System Design Mock"],
  ["Timed Contest (3 problems / 90 min)", "Case Study Flashcards (15 systems)", "Weak Area Deep Dive"],
  ["Weak Topics Rapid-fire Revision", "Mock SD: Personal Choice + Feedback", "Java Cheat Sheet Revision"],
  ["Final DSA Mock + Full Revision", "Final System Design Mock", "Final Prep & Interview Checklist"]
];

const QUOTES = [
  "Discipline beats motivation.",
  "Every solved problem increases your market value.",
  "Future Harish is watching.",
  "One switch can change your life.",
  "Consistency compounds. Show up daily.",
  "Small daily wins build massive career leverage.",
  "The grind you do in private becomes the offer you get in public.",
  "90 days of focus can buy 10 years of freedom.",
  "Don't count the days. Make the days count.",
  "Preparation meets opportunity = the offer.",
  "Your comfort zone is where your dreams go to die.",
  "Harish, your future self thanks you for today's session.",
  "One topic at a time. One day at a time.",
  "Skills you build today pay you for decades.",
  "Start where you are. Use what you have. Do what you can."
];

const state = { completed: new Set(), query: "" };

const el = (id) => document.getElementById(id);

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.completed)) {
      data.completed.forEach((d) => {
        if (Number.isInteger(d) && d >= 1 && d <= TOTAL_DAYS) state.completed.add(d);
      });
    }
  } catch (err) {
    console.warn("Could not load progress:", err);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: 1, updatedAt: new Date().toISOString(), completed: [...state.completed].sort((a, b) => a - b) })
    );
  } catch (err) {
    console.warn("Could not save progress:", err);
  }
}

function phaseOf(day) {
  if (day <= 30) return { key: "foundation", name: "Foundation", range: "Day 1 - 30", desc: "Build rock-solid fundamentals across DSA, System Design and Java." };
  if (day <= 60) return { key: "intermediate", name: "Intermediate", range: "Day 31 - 60", desc: "Level up with core interview topics: Trees, Graphs, DP, Concurrency and Spring." };
  return { key: "advanced", name: "Advanced / Interview Prep", range: "Day 61 - 90", desc: "Advanced problem sets, full system design case studies and mock interviews." };
}

function formatPercent(value) {
  if (value % 1 === 0) return value + "%";
  return value.toFixed(2) + "%";
}

function computeStreak() {
  let streak = 0;
  for (let i = 1; i <= TOTAL_DAYS; i++) {
    if (state.completed.has(i)) streak++;
    else break;
  }
  return streak;
}

function firstIncomplete() {
  for (let i = 1; i <= TOTAL_DAYS; i++) {
    if (!state.completed.has(i)) return i;
  }
  return null;
}

function buildRoadmap() {
  const root = el("roadmap");
  root.innerHTML = "";
  let currentPhase = null;
  let grid = null;
  let headerWrap = null;

  ROADMAP.forEach((topics, index) => {
    const day = index + 1;
    const phase = phaseOf(day);

    if (phase.key !== currentPhase) {
      currentPhase = phase.key;
      headerWrap = document.createElement("div");
      headerWrap.className = "phase-block";
      headerWrap.innerHTML =
        '<div class="phase-header phase-' + phase.key + '">' +
        "<h2>" + phase.name + "</h2>" +
        '<span class="phase-range">' + phase.range + "</span>" +
        '<span class="phase-line"></span>' +
        "</div>" +
        '<p class="phase-desc">' + phase.desc + "</p>";
      grid = document.createElement("div");
      grid.className = "days-grid";
      headerWrap.appendChild(grid);
      root.appendChild(headerWrap);
    }

    const searchable = ["day " + day, phase.name, topics[0], topics[1], topics[2]].join(" ").toLowerCase();

    const card = document.createElement("article");
    card.className = "day-card";
    card.dataset.day = String(day);
    card.dataset.search = searchable;
    card.innerHTML =
      '<div class="day-head">' +
      '<span class="day-num">DAY ' + day + "</span>" +
      '<span class="day-title">' + phase.name + "</span>" +
      '<span class="status-tag">Pending</span>' +
      "</div>" +
      '<div class="topics">' +
      '<div class="topic topic-dsa"><span class="topic-label">DSA</span><span class="topic-text">' + topics[0] + "</span></div>" +
      '<div class="topic topic-sd"><span class="topic-label">System Des.</span><span class="topic-text">' + topics[1] + "</span></div>" +
      '<div class="topic topic-java"><span class="topic-label">Java</span><span class="topic-text">' + topics[2] + "</span></div>" +
      "</div>" +
      '<div class="card-actions">' +
      '<label class="check"><input type="checkbox" /><span>Done</span></label>' +
      '<button type="button" class="complete-btn">Mark as Completed</button>' +
      "</div>";

    grid.appendChild(card);
  });
}

function refreshCard(day) {
  const card = document.querySelector('.day-card[data-day="' + day + '"]');
  if (!card) return;
  const done = state.completed.has(day);
  card.classList.toggle("completed", done);
  card.querySelector("input").checked = done;
  card.querySelector(".status-tag").textContent = done ? "Completed" : "Pending";
  card.querySelector(".complete-btn").textContent = done ? "Completed ✓" : "Mark as Completed";
}

function updateStats() {
  const completed = state.completed.size;
  const remaining = TOTAL_DAYS - completed;
  const percent = (completed / TOTAL_DAYS) * 100;
  const streak = computeStreak();
  const next = firstIncomplete();

  el("progressPercent").textContent = formatPercent(percent);
  el("progressFill").style.width = percent + "%";
  el("completedLabel").textContent = completed + " / " + TOTAL_DAYS + " days completed";
  el("nextTarget").textContent = next ? "Next target: Day " + next : "All 90 days complete. Go get that offer.";

  el("daysRemainingBadge").textContent = "Days Remaining: " + remaining;
  el("currentDayBadge").textContent = next ? "Day " + next + " / 90" : "Day 90 / 90";

  el("statCompleted").textContent = completed;
  el("statRemaining").textContent = remaining;
  el("statProgress").textContent = formatPercent(percent);
  el("statStreak").textContent = streak;
}

function toggleDay(day) {
  if (state.completed.has(day)) state.completed.delete(day);
  else state.completed.add(day);
  saveProgress();
  refreshCard(day);
  updateStats();
}

function applySearch() {
  const q = state.query.trim().toLowerCase();
  const cards = document.querySelectorAll(".day-card");
  const blocks = document.querySelectorAll(".phase-block");
  let matches = 0;

  cards.forEach((card) => {
    const hit = !q || card.dataset.search.includes(q);
    card.classList.toggle("hidden", !hit);
    if (hit) matches++;
  });

  blocks.forEach((block) => {
    const visible = block.querySelectorAll(".day-card:not(.hidden)").length;
    block.style.display = visible === 0 ? "none" : "";
  });

  const status = el("searchStatus");
  const empty = el("emptyState");
  if (q) {
    status.hidden = false;
    status.textContent = matches + ' day' + (matches === 1 ? "" : "s") + ' matching "' + state.query.trim() + '"';
    empty.hidden = matches !== 0;
  } else {
    status.hidden = true;
    empty.hidden = true;
  }

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", q !== "" && chip.dataset.query.toLowerCase() === q);
  });
}

function exportProgress() {
  const completedDays = [...state.completed].sort((a, b) => a - b);
  const percent = (completedDays.length / TOTAL_DAYS) * 100;
  const payload = {
    app: "Harish Switch Tracker - 90 Day Roadmap",
    targetPackage: "12+ LPA",
    exportedAt: new Date().toISOString(),
    summary: {
      totalDays: TOTAL_DAYS,
      completedDays: completedDays.length,
      remainingDays: TOTAL_DAYS - completedDays.length,
      progressPercent: Number(percent.toFixed(2)),
      currentStreak: computeStreak()
    },
    completedDayNumbers: completedDays,
    roadmap: ROADMAP.map((topics, i) => ({
      day: i + 1,
      phase: phaseOf(i + 1).name,
      completed: state.completed.has(i + 1),
      dsa: topics[0],
      systemDesign: topics[1],
      java: topics[2]
    }))
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "harish-switch-tracker-progress.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function openResetModal() {
  const modal = el("resetModal");
  el("modalText").textContent =
    "This will clear all " + state.completed.size + " completed day" + (state.completed.size === 1 ? "" : "s") +
    " from this device. This action cannot be undone.";
  modal.hidden = false;
}

function closeResetModal() {
  el("resetModal").hidden = true;
}

function resetProgress() {
  state.completed.clear();
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn("Could not clear progress:", err);
  }
  document.querySelectorAll(".day-card").forEach((card) => refreshCard(Number(card.dataset.day)));
  updateStats();
  closeResetModal();
}

function showQuote() {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  el("quoteText").textContent = quote;
}

function init() {
  loadProgress();
  buildRoadmap();
  state.completed.forEach((day) => refreshCard(day));
  updateStats();
  showQuote();

  el("roadmap").addEventListener("click", (event) => {
    const btn = event.target.closest(".complete-btn");
    if (btn) toggleDay(Number(btn.closest(".day-card").dataset.day));
  });

  el("roadmap").addEventListener("change", (event) => {
    if (event.target.matches('.card-actions input[type="checkbox"]')) {
      toggleDay(Number(event.target.closest(".day-card").dataset.day));
    }
  });

  const searchInput = el("searchInput");
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    el("clearSearch").hidden = state.query === "";
    applySearch();
  });

  el("clearSearch").addEventListener("click", () => {
    searchInput.value = "";
    state.query = "";
    el("clearSearch").hidden = true;
    applySearch();
    searchInput.focus();
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const isActive = chip.classList.contains("active");
      searchInput.value = isActive ? "" : chip.dataset.query;
      state.query = searchInput.value;
      el("clearSearch").hidden = state.query === "";
      applySearch();
    });
  });

  el("exportBtn").addEventListener("click", exportProgress);
  el("resetBtn").addEventListener("click", openResetModal);
  el("cancelReset").addEventListener("click", closeResetModal);
  el("confirmReset").addEventListener("click", resetProgress);

  el("resetModal").addEventListener("click", (event) => {
    if (event.target === el("resetModal")) closeResetModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !el("resetModal").hidden) closeResetModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
