const unboxItems = [
  {
    title: "Walnut Keepsake Lid",
    description: "Hand-turned walnut lid with a brass inlay that signals the ritual has begun.",
    maker: "Soma Studio",
  },
  {
    title: "Deckle-edge Cotton Sheets",
    description: "4 sheets of rag cotton paper, naturally dyed with marigold petals in Jaipur.",
    maker: "Papier Atelier",
  },
  {
    title: "Porcelain Ink Well",
    description: "Wheel-thrown clay vessel sealed with beeswax for custom sumi ink mixes.",
    maker: "Kiln & Kindred",
  },
  {
    title: "Tactile Instruction Cards",
    description: "Letterpress cards guiding your fingers through every fold, stitch, and pause.",
    maker: "Analog Bureau",
  },
  {
    title: "Dried Cedar & Stone Powder",
    description: "A grounding sensory sachet to rest inside the kit once your session ends.",
    maker: "Field Notes Apothecary",
  },
];

const archiveKits = [
  {
    title: "Loomed Light",
    category: "textiles",
    description: "A tabletop frame loom kit weaving copper thread through fennel-dyed yarn.",
    image: "https://images.pexels.com/photos/4483778/pexels-photo-4483778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["Copper warp guide", "Herbal tone card", "Studio mixtape"],
  },
  {
    title: "Deckled Letters",
    category: "paper",
    description: "Hand-torn stationery with wax seal practice for meaningful correspondence.",
    image: "https://images.pexels.com/photos/5418307/pexels-photo-5418307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["Wax seal kit", "Botanical pigment", "Calligraphy prompts"],
  },
  {
    title: "Clay Reverie",
    category: "clay",
    description: "Small batch clay, carved wooden ribs, and a guided slow-fire finishing ritual.",
    image: "https://images.pexels.com/photos/3830746/pexels-photo-3830746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["Carving tool trio", "Mineral slips", "Slow firing log"],
  },
  {
    title: "Threaded Cartography",
    category: "textiles",
    description: "Embroidery maps inspired by night walks—complete with reflective floss.",
    image: "https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["Linen map panel", "Reflective thread", "Moonlight playlist"],
  },
  {
    title: "Pressed Botanicals",
    category: "paper",
    description: "Construct a cedar press and catalog native leaves with soy-based inks.",
    image: "https://images.pexels.com/photos/1029844/pexels-photo-1029844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: ["Portable press", "Archival sleeves", "Ink recipe zine"],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initUnboxing();
  initArchive();
});

function initUnboxing() {
  const button = document.getElementById("unboxBtn");
  const title = document.getElementById("unboxTitle");
  const desc = document.getElementById("unboxDescription");
  const maker = document.getElementById("unboxMaker");
  const progress = document.getElementById("unboxProgress");
  const status = document.getElementById("unboxStatus");

  let currentIndex = 0;

  button?.addEventListener("click", () => {
    if (currentIndex >= unboxItems.length) {
      status.textContent = "You've revealed every layer. Enjoy the quiet.";
      return;
    }

    const currentItem = unboxItems[currentIndex];
    title.textContent = currentItem.title;
    desc.textContent = currentItem.description;
    maker.textContent = `Crafted by ${currentItem.maker}`;

    const progressPercent = ((currentIndex + 1) / unboxItems.length) * 100;
    progress.style.width = `${progressPercent}%`;

    if (currentIndex + 1 === unboxItems.length) {
      button.textContent = "Kit complete";
      button.disabled = true;
      status.textContent = "All items revealed. Press the cedar sachet to close your ritual.";
    } else {
      status.textContent = `Layer ${currentIndex + 1} of ${unboxItems.length} opened.`;
    }

    currentIndex += 1;
  });
}

function initArchive() {
  const grid = document.getElementById("archiveGrid");
  const buttons = document.querySelectorAll('#archive .btn-group button');
  const modalEl = document.getElementById("archiveModal");
  const modal = modalEl ? new bootstrap.Modal(modalEl) : null;
  const modalTitle = document.getElementById("archiveModalLabel");
  const modalDescription = document.getElementById("archiveModalDescription");
  const modalImage = document.getElementById("archiveModalImage");
  const modalList = document.getElementById("archiveModalList");

  if (!grid) return;

  const render = (filter = "all") => {
    grid.innerHTML = "";
    const filtered = archiveKits.filter((kit) => filter === "all" || kit.category === filter);

    filtered.forEach((kit) => {
      const card = document.createElement("div");
      card.className = "col-md-6 col-xl-4";
      card.innerHTML = `
        <article class="archive-card h-100" data-kit="${kit.title}">
          <img src="${kit.image}" alt="${kit.title}" loading="lazy" />
          <div class="card-body">
            <span class="badge text-bg-light text-uppercase letter-spaced mb-2">${kit.category}</span>
            <h4>${kit.title}</h4>
            <p class="text-secondary mb-0">${kit.description}</p>
          </div>
        </article>
      `;

      card.querySelector(".archive-card").addEventListener("click", () => {
        if (!modal) return;
        modalTitle.textContent = kit.title;
        modalDescription.textContent = kit.description;
        modalImage.src = kit.image;
        modalImage.alt = kit.title;
        modalList.innerHTML = kit.highlights.map((detail) => `<li>${detail}</li>`).join("");
        modal.show();
      });

      grid.appendChild(card);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.getAttribute("data-filter");
      render(filter);
    });
  });

  render();
}

