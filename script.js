// anno nel footer
document.getElementById("year").textContent = new Date().getFullYear();

// Carica i link da links.json
fetch("links.json")
  .then((response) => response.json())
  .then((links) => {
    const container = document.getElementById("links");

    // --- Mostra l'header per primo ---
    const header = document.getElementById("header");
    setTimeout(() => {
      header.classList.remove("opacity-0", "translate-y-3");
      header.classList.add("opacity-100", "translate-y-0");
    }, 200);

    // --- Crea i link ---
    links.forEach((link, index) => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.className =
        "relative flex items-center justify-center w-full py-3 rounded-xl font-semibold " +
        "bg-white/10 backdrop-blur-md border border-white/10 " +
        "shadow-[0_2px_8px_rgba(99,102,241,0.25)] hover:shadow-[0_3px_12px_rgba(99,102,241,0.35)] " +
        "transition-all duration-300 group opacity-0 translate-y-3";

      // Wrapper icona
      const iconWrapper = document.createElement("div");
      iconWrapper.className = "absolute left-4 flex items-center";

      // Crea icona Lucide standard
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("data-lucide", link.icon);
      icon.classList.add("w-6", "h-6", "text-white", "opacity-90", "group-hover:opacity-100");
      iconWrapper.appendChild(icon);

      // Testo centrato
      const span = document.createElement("span");
      span.textContent = link.name;
      span.className = "text-center w-full";

      a.appendChild(iconWrapper);
      a.appendChild(span);
      container.appendChild(a);

      // Effetto fade-in dei bottoni
      setTimeout(() => {
        a.classList.remove("opacity-0", "translate-y-3");
        a.classList.add("opacity-100", "translate-y-0");
      }, 500 + index * 150);
    });

    // --- Mostra il footer per ultimo ---
    const footer = document.getElementById("footer");
    setTimeout(() => {
      footer.classList.remove("opacity-0", "translate-y-3");
      footer.classList.add("opacity-100", "translate-y-0");
    }, 700 + links.length * 150);

    lucide.createIcons();
  })
  .catch((err) => console.error("Errore caricamento links:", err));
