// =========================
// React Elements
// =========================
const h = React.createElement,
  { useState, useEffect, useRef } = React;

// =========================
// Variables
// =========================
const ST = {
  M: ["Mandatory", "hsl(var(--h) 95% 62%)"],
  O: ["Optional", "#4fd1c5"],
  E: ["Established", "#a29ebd"],
  U: ["Undecided", "#f5b041"],
};

// =========================
// Site Tabs
// =========================
const TABS = [
  ["Reference Sheet", []],
  [
    "Appearance",
    [
      [
        "Facial Shape",
        "The general face shape is the same on every Religy.",
        "M",
      ],
      ["Eyes", "Large eyes. Size and iris appearance can vary.", "M"],
      ["Eyebrows", "Optional.", "O"],
      ["Head Hair", "Optional. Any length or volume.", "O"],
      [
        "Body",
        "Furry, partly furred, or sleek. Skinny, chubby, muscular, or otherwise varied. Usually somewhat chubby. Normal proportions are the standard, but they can vary dramatically.",
        "O",
      ],
      [
        "Fur",
        "Short to extremely shaggy, including wire-haired. Exposed skin is allowed.",
        "O",
      ],
      ["Arms", "Two or four.", "O"],
      ["Fingers", "Four or five.", "O"],
      ["Toes", "Three, four, or five.", "O"],
      ["Claws", "Optional.", "O"],
      ["Paws", "Normal, star-shaped, or elliptical.", "O"],
      [
        "Ears",
        "Some fur, lots of fur, or sleek and pointy. Size and other traits can vary.",
        "O",
      ],
      [
        "Tails",
        "Some fur; lots of fur; spikes along the top; spikes along the sides; fur only on the underside; or a large club tail with spikes at the tip. Size and other traits can vary.",
        "O",
      ],
      ["Whiskers", "If present, they have no sensory function.", "O"],
      [
        "Chest Fluff",
        "Shown as the chest marking on the reference sheet. It isn’t necessarily a real marking.",
        "E",
      ],
    ],
  ],
  [
    "Color & Glow",
    [
      [
        "Color Range",
        "Practically any color: gradients, stripes, spots, patterns, multicolor, rainbow, and different colors on different body regions. Darker hues are common because of the caverns.",
        "O",
      ],
      [
        "Black & White",
        "Possible. White is commonly associated with albinism, and brightly colored individuals can also be albino.",
        "O",
      ],
      [
        "Metallic",
        "Exceptionally unusual. Metallic Religy may be treated as treasure by their species.",
        "O",
      ],
      ["Color Morphs", "Naturally occurring morphs exist.", "E"],
      [
        "Babies",
        "Pale versions of their adult color. It deepens as they mature.",
        "E",
      ],
      [
        "Glow",
        "Bright, neon-like versions of their natural color, as if the fur sits over an internal light. It can cover the whole body or individual parts, and it can express emotions and physical reactions. Religy don’t glow constantly.",
        "E",
      ],
      [
        "Bioluminescence",
        "Some individuals have naturally glowing patterns, or glow without a pattern. Their glow color can differ from their normal coloring.",
        "O",
      ],
    ],
  ],
  [
    "Habitat",
    [
      [
        "Caverns",
        "Shallow to moderately deep caverns, lit by crystals and other glowing formations. Not pitch black.",
        "E",
      ],
      [
        "Resources",
        "Precious metals, valuable minerals, and luminous, colorful crystals. Cavern crystals are inedible.",
        "E",
      ],
      ["Crystal System & Geography", "Not yet developed.", "U"],
    ],
  ],
  [
    "Mind & Society",
    [
      [
        "Intelligence",
        "Highly intelligent and sentient, creative, and curious. They can make mistakes like humans.",
        "E",
      ],
      [
        "Social Life",
        "Naturally social. They prefer large groups and live in colonies.",
        "E",
      ],
      [
        "Humans",
        "They enjoy human society and culture, and can interact with humans and other intelligent species.",
        "E",
      ],
      [
        "Territorial",
        "They can become territorial when threatened. Warrior types protect their species.",
        "E",
      ],
    ],
  ],
  [
    "Movement",
    [
      [
        "Walking",
        "Exactly two configurations: bipedal or quadrupedal, with nothing in between.",
        "E",
      ],
      [
        "Switching",
        "Whether an individual can switch between them is undecided.",
        "U",
      ],
      [
        "Strength",
        "Relatively stronger than humans, but it depends on the individual’s role in their colony and ecosystem. Strength also varies within each role: there are stronger and weaker builders, and stronger and weaker warriors, like any normal ecosystem.",
        "E",
      ],
      [
        "Speed",
        "On all fours, as fast as a cheetah, and they can hold that speed for up to 30 minutes. On two legs, faster than the average track or marathon athlete, and they can keep that pace for around 8 hours.",
        "E",
      ],
      [
        "Agility",
        "Quick turns, balancing on narrow ledges, and squeezing through tight spaces all come easily.",
        "E",
      ],
      [
        "Climbing",
        "Varies by role and individual. Hunters sometimes have sharper claws. Religy with longer, sharper claws climb far better than those with short, stubby ones, because sharp claws grip and dig into crystal and stone. Clawless Religy are usually poor climbers, but they can use their tail to get where they want to go. How well that works usually depends on their tail type. Clubbed or spiked tails are usually the most resourceful for it.",
        "E",
      ],
      [
        "Swimming",
        "They swim very well, faster than dolphins. Certain types can practically live underwater.",
        "E",
      ],
      [
        "Underwater Breathing",
        "Only certain types of Religy can breathe underwater, mostly those with a sleek body and sleek, pointy ears. How it works is not yet decided.",
        "U",
      ],
      [
        "Healing",
        "Ordinary healing is only slightly faster than human. They can regrow limbs: arms, legs, and tails. Regrowing a limb takes about 1–3 months. Younger Religy regrow faster, and it gradually slows with age, much as humans heal more slowly as they get older.",
        "E",
      ],
      [
        "Durability",
        "Far more durable than humans, though each individual has their own limit, as with human pain tolerance. Fur and role usually make no difference.",
        "E",
      ],
      [
        "Falls",
        "They can survive a fall of around 300 ft and walk away. Higher falls (500, 800, 1,000 ft) hurt more and more, roughly every extra 200 ft. A fall of around 5,000 ft is lethal.",
        "E",
      ],
      [
        "Cuts & Blows",
        "They handle them well, like trying to punch or cut through an armored vest.",
        "E",
      ],
      [
        "Extreme Temperatures",
        "Both extremes are deadly. They can withstand heat up to around the point where iron starts to melt (about 2,800°F), and cold down to around −40°F. Beyond that, extreme heat can boil them alive, and depending on the Religy, their bodies may implode or explode. Extreme cold is the reverse: they freeze internally and die.",
        "E",
      ],
    ],
  ],
  [
    "Diet",
    [
      [
        "Diet Type",
        "Mostly omnivores or herbivores. Pure carnivores are exceptionally rare.",
        "E",
      ],
      [
        "Acid Sensitivity",
        "Highly acidic food causes severe internal damage. Organs deteriorate over about a day, and it can be fatal. Acidic food is generally unpleasant, but taste isn’t a dependable warning.",
        "E",
      ],
      ["Spoiled Food", "They can see when food looks spoiled or rotten.", "E"],
      [
        "Favorites",
        "Fresh bread, fresh ice cream (vanilla, cookie dough), and Alfredo pizza. They commonly dislike sushi, fish, and seafood. Individuals vary.",
        "O",
      ],
    ],
  ],
  [
    "Reproduction",
    [
      ["Sexes", "Male and Female, plus a rare dual-sex condition.", "E"],
      [
        "Offspring",
        "Females carry and produce offspring. A dual-sex individual can reproduce only if they have breasts.",
        "E",
      ],
      [
        "Partners",
        "Other Religy, humans, and other species. Offspring are always Religy, never hybrids.",
        "E",
      ],
      ["Inheritance Mechanism", "Undecided.", "U"],
      ["Gender Identity & Social Gender", "Not yet established.", "U"],
    ],
  ],
  [
    "Life Cycle",
    [
      ["Ears & Tails", "Develop at about 1–3 years.", "E"],
      ["Glow", "Begins developing around age 10.", "E"],
      [
        "Maturity",
        "Sexual maturity at about 18–20. Adulthood at about 20, when development stops. Aging then resembles humans.",
        "E",
      ],
      ["Lifespan", "Normally at least about 132 years.", "E"],
    ],
  ],
  [
    "Senses",
    [
      [
        "Vision",
        "Far better than human: longer range, clearer, with excellent low-light vision, plus night-vision and thermal-vision modes. Human-like color perception. Exceptional depth perception, peripheral vision, and motion detection. They can see their own glow.",
        "E",
      ],
      [
        "Hearing",
        "Can hear about three miles away in suitable conditions, including ultrasonic frequencies (which strain them). Ears rotate toward sounds, with exceptional localization. They can detect sound and vibration through some materials, but very thick barriers block it.",
        "E",
      ],
      [
        "Telepathic Ear Communication",
        "Silent and inaudible to Humans. All Religy can use it, privately, with several individuals, or potentially a whole group. Humans can learn to take part. Mechanism, terminology, range, and limits are undecided.",
        "U",
      ],
      [
        "Smell",
        "Like the best scent-tracking dogs. They recognize individuals by scent, track people and objects, and use smell for family, colony, mate, food, and danger recognition. They can’t smell through solid barriers. They love fresh bread.",
        "E",
      ],
      ["Taste", "Essentially the same as Human Taste.", "E"],
      [
        "Touch",
        "Roughly Human, with some specialized, more sensitive regions. They can feel through Fur. Ears and Tails aren’t especially sensitive.",
        "E",
      ],
    ],
  ],
  [
    "Open Questions",
    [
      [
        "Physical Capabilities",
        "Strength, Speed, Jumping, Climbing, Swimming.",
        "U",
      ],
      [
        "Healing & Durability",
        "Regeneration, Toughness, Environmental Tolerances.",
        "U",
      ],
      ["Ear Receptors & Telepathy", "Anatomy and Mechanics.", "U"],
      ["Sensitive Body Regions", "Which areas, and how sensitive.", "U"],
      ["Reproductive Biology", "Detailed Mechanics.", "U"],
      [
        "Society",
        "Colony Organization, Leadership, Families, Child-Rearing, Customs, Language.",
        "U",
      ],
      ["History & Origins", "Not yet developed.", "U"],
      ["Ecology", "Cavern Ecology, Crystal Types, Mineral Systems.", "U"],
      ["Relationships", "With Humans and Other Species.", "U"],
    ],
  ],
];

// =========================
// Ko-Fi Link
// =========================
const KOFI = window.KOFI || "https://ko-fi.com/rainbow_vis";

// =========================
// Ko-Fi Function
// =========================
function Kofi() {
  return KOFI
    ? h("a", { href: KOFI, target: "_blank", rel: "noopener" }, "Ko-Fi Page")
    : "Ko-Fi Page";
}

// =========================
// Marked Containers
// =========================
function Marked({ src, alt, cls, style }) {
  return h(
    "span",
    {
      className: "wm " + (cls || ""),
      style,
      onContextMenu: (e) => e.preventDefault(),
    },
    h("img", { src, alt, draggable: false }),
    h("span", { className: "wmo", "aria-hidden": "true" }),
  );
}

// =========================
// Site Rows
// =========================
function Row({ r, sec }) {
  const s = ST[r[2]];
  return h(
    "div",
    { className: "row" },
    h(
      "div",
      null,
      sec ? h("span", { className: "sec" }, sec) : null,
      h("h3", null, r[0]),
    ),
    h("p", null, r[1]),
    h("span", { className: "badge" }, h("i", { style: { "--c": s[1] } }), s[0]),
  );
}

// =========================
// Zoom Viewer Box
// =========================
function Viewer({ items, start, onClose }) {
  const [n, setN] = useState(start),
    [pct, setPct] = useState(100);
  
  const box = useRef(null),
    el = useRef(null),
    closeB = useRef(null),
    T = useRef({ s: 1, x: 0, y: 0 }),
    P = useRef(new Map()),
    G = useRef({}),
    last = useRef({ t: 0, x: 0, y: 0 });
  
  const MAX = 6;
  
  const clamp = () => {
    const t = T.current,
      b = box.current,
      e = el.current;
    if (!b || !e) return;
    const mx = Math.max(0, (e.offsetWidth * t.s - b.clientWidth) / 2),
      my = Math.max(0, (e.offsetHeight * t.s - b.clientHeight) / 2);
    t.x = Math.min(mx, Math.max(-mx, t.x));
    t.y = Math.min(my, Math.max(-my, t.y));
  };
  
  const ap = () => {
    clamp();
    const t = T.current;
    el.current.style.transform =
      "translate(" + t.x + "px," + t.y + "px) scale(" + t.s + ")";
    setPct(Math.round(t.s * 100));
  };
  
  const zoomAt = (ns, px, py) => {
    const t = T.current;
    ns = Math.min(MAX, Math.max(1, ns));
    const k = ns / t.s;
    t.x = px - (px - t.x) * k;
    t.y = py - (py - t.y) * k;
    t.s = ns;
    if (ns === 1) {
      t.x = 0;
      t.y = 0;
    }
    ap();
  };
  
  const rel = (cx, cy) => {
    const r = box.current.getBoundingClientRect();
    return [cx - r.left - r.width / 2, cy - r.top - r.height / 2];
  };
  
  const reset = () => {
    T.current = { s: 1, x: 0, y: 0 };
    ap();
  };
  
  const go = (d) => setN((v) => (v + d + items.length) % items.length);
  useEffect(() => {
    T.current = { s: 1, x: 0, y: 0 };
    if (el.current) ap();
  }, [n]);
  
  useEffect(() => {
    const prev = document.activeElement,
      ov = document.body.style.overflow;
    
    document.body.style.overflow = "hidden";
    
    if (closeB.current) closeB.current.focus();
    
    const b = box.current;
    
    const wh = (e) => {
      e.preventDefault();
      const q = rel(e.clientX, e.clientY);
      zoomAt(
        T.current.s * Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018)),
        q[0],
        q[1],
      );
    };
    
    b.addEventListener("wheel", wh, { passive: false });
    
    const kd = (e) => {
      const t = T.current,
        k = e.key;
      if (k === "Escape") onClose();
      else if (k === "+" || k === "=") zoomAt(t.s * 1.4, 0, 0);
      else if (k === "-" || k === "_") zoomAt(t.s / 1.4, 0, 0);
      else if (k === "0") reset();
      else if (k === "ArrowLeft" || k === "ArrowRight") {
        const d = k === "ArrowLeft" ? 1 : -1;
        if (t.s > 1) {
          t.x += d * 60;
          ap();
        } else go(-d);
      } else if (k === "ArrowUp" || k === "ArrowDown") {
        if (t.s > 1) {
          t.y += (k === "ArrowUp" ? 1 : -1) * 60;
          ap();
        }
      }
    };
    
    window.addEventListener("keydown", kd);
    
    window.addEventListener("resize", ap);
    
    return () => {
      b.removeEventListener("wheel", wh);
      window.removeEventListener("keydown", kd);
      window.removeEventListener("resize", ap);
      document.body.style.overflow = ov;
      if (prev && prev.focus) prev.focus();
    };
  }, []);
  
  const vals = () => [...P.current.values()];
  
  const dist = () => {
    const v = vals();
    return Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y);
  };
  
  const mid = () => {
    const v = vals();
    return rel((v[0].x + v[1].x) / 2, (v[0].y + v[1].y) / 2);
  };
  
  const base = () => {
    const t = T.current;
    if (P.current.size === 2) {
      const m = mid();
      G.current = {
        mode: "pinch",
        d0: dist() || 1,
        s0: t.s,
        q: [(m[0] - t.x) / t.s, (m[1] - t.y) / t.s],
        moved: 99,
      };
    } else {
      const v = vals()[0];
      G.current = {
        mode: "pan",
        sx: v.x,
        sy: v.y,
        x0: t.x,
        y0: t.y,
        moved: G.current.moved || 0,
      };
    }
  };
  
  const down = (e) => {
    box.current.setPointerCapture(e.pointerId);
    P.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (P.current.size === 1) G.current = { moved: 0 };
    base();
  };
  
  const move = (e) => {
    if (!P.current.has(e.pointerId)) return;
    P.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = G.current,
      t = T.current;
    if (g.mode === "pinch" && P.current.size === 2) {
      const ns = Math.min(MAX, Math.max(1, (g.s0 * dist()) / g.d0)),
        m = mid();
      t.s = ns;
      t.x = m[0] - ns * g.q[0];
      t.y = m[1] - ns * g.q[1];
      ap();
    } else if (g.mode === "pan" && P.current.size === 1) {
      const dx = e.clientX - g.sx,
        dy = e.clientY - g.sy;
      g.moved = Math.max(g.moved || 0, Math.hypot(dx, dy));
      if (t.s > 1) {
        t.x = g.x0 + dx;
        t.y = g.y0 + dy;
        ap();
      }
    }
  };
  
  const up = (e) => {
    if (!P.current.has(e.pointerId)) return;
    const g = G.current,
      was = P.current.size;
    P.current.delete(e.pointerId);
    if (was === 1 && (g.moved || 0) < 8) {
      const now = Date.now(),
        l = last.current;
      if (
        now - l.t < 320 &&
        Math.hypot(e.clientX - l.x, e.clientY - l.y) < 30
      ) {
        const q = rel(e.clientX, e.clientY);
        zoomAt(T.current.s > 1.05 ? 1 : 2.5, q[0], q[1]);
        last.current = { t: 0, x: 0, y: 0 };
      } else last.current = { t: now, x: e.clientX, y: e.clientY };
    }
    if (P.current.size > 0) {
      G.current.moved = 99;
      base();
    }
  };
  
  const bd = useRef(false);
  
  const it = items[n],
    many = items.length > 1;
  
  return h(
    "div",
    {
      className: "lb",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Image previewer",
      onPointerDown: (e) => {
        bd.current = e.target === e.currentTarget;
      },
      onClick: (e) => {
        if (bd.current && e.target === e.currentTarget) onClose();
      },
    },
    h(
      "div",
      { className: "lbcard" },
      h(
        "div",
        { className: "lbhead" },
        h(
          "div",
          { className: "lbtitle" },
          h("strong", null, it[1]),
          many ? h("span", null, n + 1 + " of " + items.length) : null,
        ),
        h(
          "button",
          {
            className: "chip",
            ref: closeB,
            onClick: onClose,
            "aria-label": "Close previewer",
          },
          "Close",
        ),
      ),
      h(
        "div",
        {
          className: "lbbox",
          ref: box,
          style: { cursor: pct > 100 ? "grab" : "zoom-in" },
          onPointerDown: down,
          onPointerMove: move,
          onPointerUp: up,
          onPointerCancel: up,
        },
        h(
          "div",
          { className: "vimg", ref: el },
          h(Marked, { src: it[0], alt: it[3] }),
        ),
      ),
      h(
        "div",
        { className: "lbfoot" },
        h(
          "div",
          { className: "lbtools" },
          many
            ? h(
                "div",
                {
                  className: "lbgroup",
                  role: "group",
                  "aria-label": "Switch image",
                },
                h(
                  "button",
                  {
                    className: "chip",
                    onClick: () => go(-1),
                    "aria-label": "Previous image",
                  },
                  "\u2039",
                ),
                h(
                  "button",
                  {
                    className: "chip",
                    onClick: () => go(1),
                    "aria-label": "Next image",
                  },
                  "\u203a",
                ),
              )
            : null,
          h(
            "div",
            { className: "lbgroup", role: "group", "aria-label": "Zoom" },
            h(
              "button",
              {
                className: "chip",
                onClick: () => zoomAt(T.current.s / 1.4, 0, 0),
                "aria-label": "Zoom out",
              },
              "\u2212",
            ),
            h("span", { className: "lbp" }, pct + "%"),
            h(
              "button",
              {
                className: "chip",
                onClick: () => zoomAt(T.current.s * 1.4, 0, 0),
                "aria-label": "Zoom in",
              },
              "+",
            ),
            h("button", { className: "chip", onClick: reset }, "Fit"),
          ),
        ),
        h(
          "p",
          { className: "lbh" },
          "Scroll/Pinch to Zoom. Double-Tap to Toggle. Drag to Move.",
        ),
      ),
    ),
  );
}

// =========================
// Reference sheet gallery
// =========================
function Gallery() {
  const [open, setOpen] = useState(null);
  
  const items = [
    [
      IMG.sheet,
      "Reference Sheet",
      "Front & Back views, Tail, Expressions, Themed Color Picker (Lizzards), Full-Body Preview, and Lore & Info Boxes! Watermarked version.",
      "This is the Official Religy Reference Sheet made by StarKoi!",
    ],
    [
      IMG.art,
      "Full-Body Art",
      "Full-Body art-piece of a Religy. Watermarked version.",
      "This is an art-piece you can have of the Religy made by StarKoi!",
    ],
  ];
  
  return h(
    "div",
    { className: "gal" },
    items.map((i, k) =>
      h(
        "figure",
        { key: i[1] },
        h(
          "button",
          {
            className: "thumb",
            onClick: () => setOpen(k),
            "aria-label": "Open " + i[1] + " Full Screen",
          },
          h(Marked, { src: i[0], alt: i[3] }),
        ),
        h(
          "figcaption",
          null,
          h("b", null, i[1]),
          i[2],
          " Please get the original from my ",
          h(Kofi),
          ".",
        ),
      ),
    ),
    open !== null
      ? h(Viewer, { items, start: open, onClose: () => setOpen(null) })
      : null,
  );
}

// =========================
// Religy GL
// =========================
const GL = [
  ["~132+ years", "Average Lifespan"],
  ["~20yrs", "Adulthood"],
  ["~10yrs", "When a Religy\u2019s \u2019Glow\u2019 develops"],
  ["~15mph", "Top Speed: 2 limbs"],
  ["~75mph", "Top Speed: 4 limbs"],
];

// =========================
// Religy Species
// =========================
function Religy({ go }) {
  const [t, setT] = useState(0),
    [f, setF] = useState("A"),
    [q, setQ] = useState("");
  const isRef = TABS[t][0] === "Reference Sheet",
    qq = q.trim().toLowerCase();
  const all = [].concat(...TABS.map((x) => x[1].map((r) => [x[0], r])));
  const res = all.filter(
    (a) =>
      (f === "A" || a[1][2] === f) &&
      (a[1][0] + " " + a[1][1]).toLowerCase().includes(qq),
  );
  const rows = TABS[t][1].filter((r) => f === "A" || r[2] === f);
  const body = qq
    ? h(
        "div",
        null,
        h(
          "p",
          { className: "count" },
          res.length + (res.length === 1 ? " result" : " results"),
        ),
        res.map((a) => h(Row, { key: a[0] + a[1][0], r: a[1], sec: a[0] })),
      )
    : isRef
      ? h(Gallery)
      : h(
          "div",
          null,
          rows.length
            ? rows.map((r) => h(Row, { key: r[0], r }))
            : h(
                "p",
                { className: "empty" },
                "Nothing in this section has that status. Choose \u2019All\u2019 to see every entry.",
              ),
        );
  return h(
    "main",
    null,
    h(
      "button",
      { className: "back", onClick: () => go("home") },
      "\u2190 All species",
    ),
    h(
      "div",
      { className: "rh" },
      h("h1", null, "Religy"),
      h(
        "p",
        { className: "meta" },
        "Pronounced (\u2019Rell-ih-g\u2019). Owned by RainbowVis, Co-Owned by StarKoi.",
      ),
    ),
    h(
      "div",
      { className: "glance" },
      GL.map((g) =>
        h(
          "div",
          { className: "stat", key: g[1] },
          h("b", null, g[0]),
          h("span", null, g[1]),
        ),
      ),
    ),
    h("input", {
      className: "search",
      type: "search",
      placeholder: "Search all Religy entries",
      "aria-label": "Search all Religy entries",
      value: q,
      onChange: (e) => setQ(e.target.value),
    }),
    isRef && !qq
      ? null
      : h(
          "div",
          {
            className: "chips",
            role: "group",
            "aria-label": "Filter by status",
          },
          [
            ["A", "All"],
            ["M", "Mandatory"],
            ["O", "Optional"],
            ["E", "Established"],
            ["U", "Undecided"],
          ].map((c) =>
            h(
              "button",
              {
                key: c[0],
                className: "chip",
                "aria-pressed": f === c[0],
                onClick: () => setF(c[0]),
              },
              c[1],
            ),
          ),
        ),
    h(
      "div",
      { className: "rlayout" },
      h(
        "div",
        { className: "tabs", role: "tablist" },
        TABS.map((x, i) =>
          h(
            "button",
            {
              key: x[0],
              className: "tab",
              role: "tab",
              "aria-selected": t === i && !qq,
              onClick: () => {
                setQ("");
                setT(i);
              },
            },
            x[0],
          ),
        ),
      ),
      body,
    ),
    isRef || qq
      ? null
      : h(
          "p",
          { className: "note" },
          "Mandatory traits define a standard Religy. Optional traits are open to each character\u2019s creator. Statuses other than the face and eyes (Mandatory) and the ones you called optional are a first pass and need your confirmation.",
        ),
  );
}

// =========================
// Home Area
// =========================
function Home({ go }) {
  return h(
    "main",
    null,
    h(
      "section",
      { className: "hero" },
      h("p", { className: "eyebrow" }, "Universe Encyclopedia"),
      h("h1", null, "Aveleiria"),
      h(
        "p",
        { className: "lede" },
        "An encyclopedia of original species, their bodies, homes, histories, and cultures. Drag the glow slider to light the page the way a Religy would.",
      ),
      h(
        "button",
        { className: "btn", onClick: () => go("religy") },
        "Open the Religy Reference",
      ),
    ),
    h("h2", { className: "sh" }, "Species"),
    h(
      "button",
      { className: "card sp", onClick: () => go("religy") },
      h(Marked, {
        src: IMG.art,
        alt: "Full-Body Art-piece of the Religy",
        cls: "cardimg",
      }),
      h(
        "span",
        null,
        h("h3", null, "Religy"),
        h(
          "p",
          null,
          "Curious, social cavern dwellers whose fur glows over an inner light.",
        ),
        h(
          "span",
          { className: "pill" },
          "Reference Sheet \u00b7 Biology \u00b7 Senses",
        ),
      ),
    ),
    h(
      "p",
      { className: "empty" },
      "More species will appear here as they\u2019re documented.",
    ),
  );
}

// =========================
// App Function
// =========================
function App() {
  const [p, setP] = useState("home"),
    [hue, setHue] = useState(280);
  useEffect(() => {
    document.documentElement.style.setProperty("--h", hue);
  }, [hue]);
  const go = (x) => {
    setP(x);
    window.scrollTo(0, 0);
  };
  return h(
    "div",
    null,
    h(
      "header",
      { className: "top" },
      h(
        "button",
        { className: "mark", onClick: () => go("home") },
        h("img", { className: "logo", src: IMG.icon, alt: "" }),
        "Aveleiria",
      ),
      h(
        "label",
        { className: "glowc" },
        "Glow color",
        h("input", {
          type: "range",
          min: 0,
          max: 360,
          value: hue,
          onChange: (e) => setHue(+e.target.value),
        }),
      ),
    ),
    p === "religy" ? h(Religy, { go }) : h(Home, { go }),
    h(
      "footer",
      { className: "foot" },
      h("img", { className: "logo", src: IMG.icon, alt: "" }),
      h(
        "span",
        null,
        "Aveleiria is a Rainbow\u2019s Creations project. Religy created by RainbowVis, co-owned by StarKoi. Images here are watermarked; originals are on the ",
        h(Kofi),
        ".",
      ),
    ),
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
