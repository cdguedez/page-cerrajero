document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".animate-up");
  animatedElements.forEach((el) => observer.observe(el));
});

// Definición del Web Components
class ServiceCard extends HTMLElement {
  connectedCallback() {
    this.classList.add("service-card");
    this.style.cursor = "pointer";

    const icon = this.getAttribute("icon");
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");

    const customMessage = this.getAttribute("message");
    const message = customMessage
      ? customMessage
      : `Hola, necesito información sobre el servicio de: ${title}`;

    this.innerHTML = `
        <div class="card-icon">${icon}</div>
        <h4>${title}</h4>
        <p>${description}</p>
    `;

    this.addEventListener("click", () => {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/584242609790?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }
}

class WarrantyCard extends HTMLElement {
  connectedCallback() {
    this.classList.add("warranty-card");

    const icon = this.getAttribute("icon");
    const title = this.getAttribute("title");
    const description = this.getAttribute("description");

    this.innerHTML = `
        <div class="card-icon">${icon}</div>
        <h4>${title}</h4>
        <p>${description}</p>
    `;
  }
}

customElements.define("service-card", ServiceCard);
customElements.define("warranty-card", WarrantyCard);
