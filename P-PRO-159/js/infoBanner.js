AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      "Target-Vader": {
        banner_url: "./assets/posters/Target-Vader-banner.jpg",
        title: "Star Wars: Target Vader",
        released_year: "2020",
        description:
          "Collects Star Wars: Target Vader #1-6. Darth Vader vs. bounty hunters! The Dark Lord of the Sith is on the hunt for a mysterious criminal syndicate operating outside of the Empire’s rule",
      },
      "Resistance": {
        banner_url: "./assets/posters/Resistance-banner.png",
        title: "Star Wars: Age Of Resistance",
        released_year: "2019",
        description:
          "Collects STAR WARS: AGE OF RESISTANCE — CAPTAIN PHASMA, GENERAL HUX, KYLO REN and SUPREME LEADER SNOKE. This is the Age of Star Wars — an epic series of adventures that unites your favorite characters from all three trilogies! The First Order takes center stage!",
      },
      "Dark-Visions": {
        banner_url: "./assets/posters/Dark-Visions-banner.jpg",
        title: "Star Wars: Vader - Dark Visions",
        released_year: "2019",
        description:
          "Collects Star Wars: Vader - Dark Visions #1-5. Who is Darth Vader? He has been many things: enforcer, commander, destroyer. He is, to many throughout the Galactic Empire, the ultimate symbol of power and fear. But there are those who have seen the Dark Lord in a different light.",
      },
      "Age-of-Republic": {
        banner_url: "./assets/posters/Age-of-Republic-banner.jpg",
        title: "Star Wars - Age of Republic",
        released_year: "2019",
        description:
          "Beginning the Age of Star Wars - epic adventures featuring your favorite characters from all three film trilogies! And first up are the heroes and villains of the days of the Old Republic!",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);

    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);

    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
  },
});
