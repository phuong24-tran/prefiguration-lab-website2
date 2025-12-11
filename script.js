document.addEventListener("DOMContentLoaded", function () {
  const teamCards = document.querySelectorAll(".team-card");
  const bioBox = document.getElementById("bio-box");

  teamCards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.getAttribute("data-name");
      const role = card.getAttribute("data-role");
      const bio = card.getAttribute("data-bio");

      bioBox.innerHTML = `
        <h2>${name}</h2>
        <p><strong>${role}</strong></p>
        <p>${bio}</p>
      `;
      bioBox.style.display = "block";
      bioBox.scrollIntoView({ behavior: "smooth" });
    });
  });
});
