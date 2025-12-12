document.addEventListener("DOMContentLoaded", () => {
  // Set year in footer
  const yearEl = document.getElementById("pf-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Team card interactions
  const cards = Array.from(document.querySelectorAll(".pf-team-card"));
  const detail = document.getElementById("pf-team-detail");

  const detailName = document.getElementById("pf-detail-name");
  const detailRole = document.getElementById("pf-detail-role");
  const detailBio = document.getElementById("pf-detail-bio");
  const detailImg = document.getElementById("pf-detail-img");
  const detailLinkedIn = document.getElementById("pf-detail-linkedin");
  const detailEmail = document.getElementById("pf-detail-email");

  function clearActive() {
    cards.forEach(card => card.classList.remove("pf-team-card--active"));
  }

  function showFromCard(card) {
    const name = card.getAttribute("data-name");
    const role = card.getAttribute("data-role");
    const img = card.getAttribute("data-img");
    const bio = card.getAttribute("data-bio");
    const email = card.getAttribute("data-email");
    const linkedin = card.getAttribute("data-linkedin");

    if (detailName) detailName.textContent = name || "";
    if (detailRole) detailRole.innerHTML = role || "";
    if (detailBio) detailBio.textContent = bio || "";
    if (detailImg && img) {
      detailImg.src = img;
      detailImg.alt = `Profile photo of ${name}`;
    }

    // LinkedIn pill
    if (detailLinkedIn) {
      if (linkedin && !linkedin.startsWith("REPLACE_WITH_") && linkedin !== "#") {
        detailLinkedIn.href = linkedin;
        detailLinkedIn.style.display = "inline-flex";
      } else {
        detailLinkedIn.style.display = "none";
      }
    }

    // Email pill
    if (detailEmail) {
      if (email && !email.startsWith("REPLACE_WITH_")) {
        detailEmail.href = `mailto:${email}`;
        detailEmail.style.display = "inline-flex";
      } else {
        detailEmail.style.display = "none";
      }
    }

    if (detail) {
      detail.classList.add("pf-team-detail--visible");
    }

    clearActive();
    card.classList.add("pf-team-card--active");
  }

  // Attach click events
  cards.forEach(card => {
    card.addEventListener("click", () => {
      showFromCard(card);
      if (window.innerWidth <= 900 && detail) {
        detail.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Auto-load first person if exists
  if (cards.length > 0) {
    showFromCard(cards[0]);
  }
});
