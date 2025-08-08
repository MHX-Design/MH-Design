// Other projects - Central project data and dynamic loader

const projectsData = [
  {
    slug: "ee-gaming",
    title: "EE Gaming",
    image: "../assets/Project tiles/Gaming-min.jpg",
    alt: "EE Gaming campaign hero image featuring gaming visuals and branding",
  },
  {
    slug: "digital-voice",
    title: "Digital Voice",
    image: "../assets/Project tiles/DV_Tile-min.jpg",
    alt: "Digital Voice explainer visuals showing broadband-powered home phone setup",
  },
  {
    slug: "bt-campaigns",
    title: "BT Campaigns",
    image: "../assets/Project tiles/BT-min.jpg",
    alt: "BT campaign visual showcasing mobile and broadband branding elements",
  },
  {
    slug: "itv-showreel",
    title: "ITV Showreel",
    image: "../assets/Project tiles/ITV-min.jpg",
    alt: "ITV Showreel montage featuring broadcast and set design highlights",
  },
  {
    slug: "bt-tv-recontract",
    title: "BT TV Re-contracting",
    image: "../assets/Project tiles/BTRCW-min.jpg",
    alt: "BT TV Re-contracting promotional material with entertainment packages imagery",
  },
  {
    slug: "ee-campaigns",
    title: "EE Campaigns",
    image: "../assets/Project tiles/EE-min.jpg",
    alt: "EE campaign visuals with dynamic digital content and mobile integration",
  },
  {
    slug: "view-from-stormont",
    title: "View from Stormont",
    image: "../assets/Project tiles/VFS-min.jpg",
    alt: "TV set design for View from Stormont, with political news backdrop visuals",
  },
  {
    slug: "covid-19-updates",
    title: "Covid-19 Updates",
    image: "../assets/Project tiles/Covid-min.jpg",
    alt: "Broadcast graphics and UI for Covid-19 updates across UK channels",
  },
  {
    slug: "mecca-cola",
    title: "Mecca Cola",
    image: "../assets/Project tiles/MC-min.jpg",
    alt: "Packaging design for Mecca Cola with bold branding and fluid effects",
  },
  {
    slug: "interior-design",
    title: "Corporate Let",
    image: "../assets/Project tiles/Interior-min.jpg",
    alt: "Interior design for corporate rental showing clean, modern living space",
  },
];

function getCurrentProjectSlug() {
  const path = window.location.pathname;
  const filename = path.split("/").pop();
  return filename.replace(".html", "");
}

function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy to avoid mutating original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function loadOtherProjects() {
  const currentSlug = getCurrentProjectSlug();
  const otherProjects = projectsData.filter(
    (project) => project.slug !== currentSlug
  );

  // Randomize the order of projects
  const randomizedProjects = shuffleArray(otherProjects);

  const container = document.getElementById("projectSlider");
  if (!container) return;

  container.innerHTML = randomizedProjects
    .map(
      (project) => `
    <a href="../projects/${project.slug}.html">
      <div class="other-card">
        <div class="op-img-container">
          <img src="${project.image}" alt="${project.alt}">
        </div>
        <h4 class="other-project-name mid-blue">${project.title}</h4>
      </div>
    </a>
  `
    )
    .join("");
}

// Load projects when DOM is ready
document.addEventListener("DOMContentLoaded", loadOtherProjects);
