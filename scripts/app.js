const h = React.createElement,
  { useState, useEffect } = React;

const ST = {
  M: ["Mandatory", "hsl(var(--h) 95% 62%)"],
  O: ["Optional", "#4fd1c5"],
  E: ["Established", "#a29ebd"],
  U: ["Undecided", "#f5b041"],
};

const TABS = [
  ["Reference sheet", []],
  [
    "Appearance",
    [
      [
        "Facial shape",
        "The general face shape is the same on every Religy.",
        "M",
      ],
      ["Eyes", "Large eyes. Size and iris appearance can vary.", "M"],
      ["Eyebrows", "Optional.", "O"],
      ["Head hair", "Optional. Any length or volume.", "O"],
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
        "Chest fluff",
        "Shown as the chest marking on the reference sheet. It isn’t necessarily a real marking.",
        "E",
      ],
    ],
  ],
  [
    "Color & glow",
    [
      [
        "Color range",
        "Practically any color: gradients, stripes, spots, patterns, multicolor, rainbow, and different colors on different body regions. Darker hues are common because of the caverns.",
        "O",
      ],
      [
        "Black & white",
        "Possible. White is commonly associated with albinism, and brightly colored individuals can also be albino.",
        "O",
      ],
      [
        "Metallic",
        "Exceptionally unusual. Metallic Religy may be treated as treasure by their species.",
        "O",
      ],
      ["Color morphs", "Naturally occurring morphs exist.", "E"],
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
      ["Crystal system & geography", "Not yet developed.", "U"],
    ],
  ],
  [
    "Mind & society",
    [
      [
        "Intelligence",
        "Highly intelligent and sentient, creative, and curious. They can make mistakes like humans.",
        "E",
      ],
      [
        "Social life",
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
        "Underwater breathing",
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
        "Cuts & blows",
        "They handle them well, like trying to punch or cut through an armored vest.",
        "E",
      ],
      [
        "Extreme temperatures",
        "Both extremes are deadly. They can withstand heat up to around the point where iron starts to melt (about 2,800°F), and cold down to around −40°F. Beyond that, extreme heat can boil them alive, and depending on the Religy, their bodies may implode or explode. Extreme cold is the reverse: they freeze internally and die.",
        "E",
      ],
    ],
  ],
  [
    "Diet",
    [
      [
        "Diet type",
        "Mostly omnivores or herbivores. Pure carnivores are exceptionally rare.",
        "E",
      ],
      [
        "Acid sensitivity",
        "Highly acidic food causes severe internal damage. Organs deteriorate over about a day, and it can be fatal. Acidic food is generally unpleasant, but taste isn’t a dependable warning.",
        "E",
      ],
      ["Spoiled food", "They can see when food looks spoiled or rotten.", "E"],
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
      ["Sexes", "Male and female, plus a rare dual-sex condition.", "E"],
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
      ["Inheritance mechanism", "Undecided.", "U"],
      ["Gender identity & social gender", "Not yet established.", "U"],
    ],
  ],
  [
    "Life cycle",
    [
      ["Ears & tails", "Develop at about 1–3 years.", "E"],
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
        "Telepathic ear communication",
        "Silent and inaudible to humans. All Religy can use it, privately, with several individuals, or potentially a whole group. Humans can learn to take part. Mechanism, terminology, range, and limits are undecided.",
        "U",
      ],
      [
        "Smell",
        "Like the best scent-tracking dogs. They recognize individuals by scent, track people and objects, and use smell for family, colony, mate, food, and danger recognition. They can’t smell through solid barriers. They love fresh bread.",
        "E",
      ],
      ["Taste", "Essentially the same as human taste.", "E"],
      [
        "Touch",
        "Roughly human, with some specialized, more sensitive regions. They can feel through fur. Ears and tails aren’t especially sensitive.",
        "E",
      ],
    ],
  ],
  [
    "Open questions",
    [
      [
        "Physical capabilities",
        "Strength, speed, jumping, climbing, swimming.",
        "U",
      ],
      [
        "Healing & durability",
        "Regeneration, toughness, environmental tolerances.",
        "U",
      ],
      ["Ear receptors & telepathy", "Anatomy and mechanics.", "U"],
      ["Sensitive body regions", "Which areas, and how sensitive.", "U"],
      ["Reproductive biology", "Detailed mechanics.", "U"],
      [
        "Society",
        "Colony organization, leadership, families, child-rearing, customs, language.",
        "U",
      ],
      ["History & origins", "Not yet developed.", "U"],
      ["Ecology", "Cavern ecology, crystal types, mineral systems.", "U"],
      ["Relationships", "With humans and other species.", "U"],
    ],
  ],
];

const KOFI = window.KOFI || "";

function Kofi() {
  return KOFI
    ? h("a", { href: KOFI, target: "_blank", rel: "noopener" }, "Ko-fi page")
    : "Ko-fi page";
}

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

function Gallery() {
  const [z, setZ] = useState(null),
    [big, setBig] = useState(false);
  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") setZ(null);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const items = [
    [
      IMG.sheet,
      "Reference sheet",
      "Front and back views, head, tail, expressions, and body silhouettes. Watermarked version.",
      "Religy reference sheet: front and back views, head, tail, expressions, and body silhouettes",
    ],
    [
      IMG.art,
      "Religy art",
      "Art piece of a Religy. Watermarked version.",
      "Art of a fluffy white Religy standing on its hind legs",
    ],
  ];
  return h(
    "div",
    { className: "gal" },
    items.map((i) =>
      h(
        "figure",
        { key: i[1] },
        h(
          "button",
          {
            className: "thumb",
            onClick: () => {
              setBig(false);
              setZ(i);
            },
            "aria-label": "Open " + i[1] + " full screen",
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
    z
      ? h(
          "div",
          { className: "lb", role: "dialog", "aria-label": z[1] },
          h(
            "div",
            { className: "lbbar" },
            h(
              "button",
              { className: "chip", onClick: () => setBig(!big) },
              big ? "Fit to screen" : "Zoom in",
            ),
            h(
              "button",
              { className: "chip", onClick: () => setZ(null) },
              "Close",
            ),
          ),
          h(
            "div",
            { className: "lbimg" },
            h(Marked, {
              src: z[0],
              alt: z[3],
              style: { width: big ? "260%" : "100%" },
            }),
          ),
        )
      : null,
  );
}

const GL = [
  ["132+ years", "Typical lifespan"],
  ["About 20", "Adulthood"],
  ["About 10", "Glow begins"],
  ["Cheetah-fast", "Top speed on all fours"],
];

function Religy({ go }) {
  const [t, setT] = useState(0),
    [f, setF] = useState("A"),
    [q, setQ] = useState("");
  const isRef = TABS[t][0] === "Reference sheet",
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
                "Nothing in this section has that status. Choose All to see every entry.",
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
        "Pronounced Rell-ih-g. Owned by RainbowVis, co-owned by StarKoi.",
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

function Home({ go }) {
  return h(
    "main",
    null,
    h(
      "section",
      { className: "hero" },
      h("p", { className: "eyebrow" }, "Universe encyclopedia"),
      h("h1", null, "Aveleiria"),
      h(
        "p",
        { className: "lede" },
        "An encyclopedia of original species, their bodies, homes, histories, and cultures. Drag the glow slider to light the page the way a Religy would.",
      ),
      h(
        "button",
        { className: "btn", onClick: () => go("religy") },
        "Open the Religy reference",
      ),
    ),
    h("h2", { className: "sh" }, "Species"),
    h(
      "button",
      { className: "card sp", onClick: () => go("religy") },
      h(Marked, {
        src: IMG.art,
        alt: "Art of a fluffy white Religy standing on its hind legs",
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
          "Reference sheet \u00b7 Biology \u00b7 Senses",
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