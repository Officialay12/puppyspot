// ===== PRELOADER =====
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
    document.body.style.overflow = "visible";
  }, 2500);
});

const PUPPIES = [
  {
    id: 1,
    name: "Charlie",
    breed: "Cavalier King Charles",
    image: "img/Cavalier king charles.jpg",
    price: 1800,
    age: "10 weeks",
    gender: "Male",
    badge: "Hot",
  },
  {
    id: 2,
    name: "Max",
    breed: "Cane Corso",
    image: "img/Cane corso.jpg",
    price: 2200,
    age: "12 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 3,
    name: "Rocky",
    breed: "Bulldog",
    image: "img/bulldog.jpg",
    price: 1500,
    age: "9 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 4,
    name: "Luna",
    breed: "Brittany",
    image: "img/Brittany.jpg",
    price: 1400,
    age: "8 weeks",
    gender: "Female",
    badge: "Available",
  },
  {
    id: 5,
    name: "Duke",
    breed: "Boxer",
    image: "img/boxer.jpg",
    price: 1300,
    age: "10 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 6,
    name: "Bella",
    breed: "Boston Terrier",
    image: "img/Boston terrier.jpg",
    price: 1200,
    age: "9 weeks",
    gender: "Female",
    badge: "Hot",
  },
  {
    id: 7,
    name: "Skye",
    breed: "Border Collie",
    image: "img/Border collie.jpg",
    price: 1600,
    age: "11 weeks",
    gender: "Female",
    badge: "Available",
  },
  {
    id: 8,
    name: "Bear",
    breed: "Bernese Mountain Dog",
    image: "img/Bernesee mountain dog.jpg",
    price: 2400,
    age: "12 weeks",
    gender: "Male",
    badge: "Last",
  },
  {
    id: 9,
    name: "Daisy",
    breed: "Beagle",
    image: "img/Beagle.jpg",
    price: 1100,
    age: "8 weeks",
    gender: "Female",
    badge: "Available",
  },
  {
    id: 10,
    name: "Ace",
    breed: "Australian Shepherd",
    image: "img/Australian shepherd.jpg",
    price: 1700,
    age: "9 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 11,
    name: "Coco",
    breed: "Yorkshire Terrier",
    image: "img/Yorkshire terrier.jpg",
    price: 1400,
    age: "10 weeks",
    gender: "Female",
    badge: "Hot",
  },
  {
    id: 12,
    name: "Loki",
    breed: "Siberian Husky",
    image: "img/siberian husky.jpg",
    price: 1600,
    age: "11 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 13,
    name: "Mochi",
    breed: "Shih Tzu",
    image: "img/Shih tzu.jpg",
    price: 1200,
    age: "9 weeks",
    gender: "Female",
    badge: "Available",
  },
  {
    id: 14,
    name: "Shep",
    breed: "Shetland Sheepdog",
    image: "img/Shetland sheep dog.jpg",
    price: 1500,
    age: "10 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 15,
    name: "Rex",
    breed: "Rottweiler",
    image: "img/Rottweiler.jpg",
    price: 1900,
    age: "12 weeks",
    gender: "Male",
    badge: "Last",
  },
  {
    id: 16,
    name: "Poppy",
    breed: "Poodle",
    image: "img/poodle.jpg",
    price: 1300,
    age: "9 weeks",
    gender: "Female",
    badge: "Available",
  },
  {
    id: 17,
    name: "Teddy",
    breed: "Pomeranian",
    image: "img/Pomeranian.jpg",
    price: 1500,
    age: "10 weeks",
    gender: "Male",
    badge: "Hot",
  },
  {
    id: 18,
    name: "Corgi",
    breed: "Pembroke Welsh Corgi",
    image: "img/Pembroke welsh corgi.jpg",
    price: 1800,
    age: "8 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 19,
    name: "Schnitzel",
    breed: "Miniature Schnauzer",
    image: "img/Miniature schnauzer.jpg",
    price: 1400,
    age: "11 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 20,
    name: "Buddy",
    breed: "Labrador Retriever",
    image: "img/Labrador retriever.jpg",
    price: 1200,
    age: "9 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 21,
    name: "Havana",
    breed: "Havanese",
    image: "img/Havanese.jpg",
    price: 1600,
    age: "10 weeks",
    gender: "Female",
    badge: "Available",
  },
  {
    id: 22,
    name: "Zeus",
    breed: "Great Dane",
    image: "img/great dane.jpg",
    price: 2200,
    age: "12 weeks",
    gender: "Male",
    badge: "Last",
  },
  {
    id: 23,
    name: "Goldie",
    breed: "Golden Retriever",
    image: "img/golden retriever.jpg",
    price: 1800,
    age: "8 weeks",
    gender: "Female",
    badge: "Hot",
  },
  {
    id: 24,
    name: "Rex",
    breed: "German Shepherd",
    image: "img/German shepherd.jpg",
    price: 1700,
    age: "9 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 25,
    name: "Frenchie",
    breed: "French Bulldog",
    image: "img/French bulldog.jpg",
    price: 2500,
    age: "10 weeks",
    gender: "Male",
    badge: "Hot",
  },
  {
    id: 26,
    name: "Springer",
    breed: "English Springer Spaniel",
    image: "img/english springer spaniel.jpg",
    price: 1500,
    age: "11 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 27,
    name: "Dobie",
    breed: "Doberman Pinscher",
    image: "img/Doberman pinscher.jpg",
    price: 2000,
    age: "12 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 28,
    name: "Wiener",
    breed: "Dachshund",
    image: "img/Dachshund.jpg",
    price: 1100,
    age: "9 weeks",
    gender: "Male",
    badge: "Available",
  },
  {
    id: 29,
    name: "Chico",
    breed: "Chihuahua",
    image: "img/Chihuahua.jpg",
    price: 900,
    age: "10 weeks",
    gender: "Male",
    badge: "Available",
  },
];

// ===== HOW IT WORKS STEPS =====
const STEPS = [
  {
    icon: "🔍",
    number: "Step 1",
    title: "Find Your Puppy",
    desc: "Browse our selection of healthy, happy puppies from trusted breeders.",
  },
  {
    icon: "💬",
    number: "Step 2",
    title: "Connect With Us",
    desc: "Reach out via phone or email and we'll answer every question you have.",
  },
  {
    icon: "✍️",
    number: "Step 3",
    title: "Reserve Your Pup",
    desc: "Place a small deposit to hold your chosen puppy while paperwork is prepared.",
  },
  {
    icon: "🏠",
    number: "Step 4",
    title: "Welcome Home",
    desc: "Pick up your puppy or arrange delivery — your new best friend awaits!",
  },
];

// ===== STATE MANAGEMENT =====
let searchQuery = "";
let breedFilter = "";
let maxPrice = Infinity;

// ===== INITIALIZE AOS ANIMATIONS =====
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: "ease-in-out",
});

// ===== FORMAT PRICE =====
function formatPrice(price) {
  return "$" + price.toLocaleString("en-US");
}

// ===== POPULATE BREED FILTER =====
function populateBreedFilter() {
  const select = document.getElementById("breedFilter");
  if (!select) return;

  const breeds = [...new Set(PUPPIES.map((p) => p.breed))].sort();
  breeds.forEach((breed) => {
    const option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  });
}

// ===== RENDER STEPS =====
function renderSteps() {
  const container = document.getElementById("stepsContainer");
  if (!container) return;

  container.innerHTML = STEPS.map(
    (step, index) => `
    <div class="step-card" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="step-icon">${step.icon}</div>
      <div class="step-number">${step.number}</div>
      <h3 class="step-title">${step.title}</h3>
      <p class="step-desc">${step.desc}</p>
    </div>
  `,
  ).join("");
}

// ===== FILTER PUPPIES =====
function getFilteredPuppies() {
  return PUPPIES.filter((puppy) => {
    const matchesSearch =
      searchQuery === "" ||
      puppy.name.toLowerCase().includes(searchQuery) ||
      puppy.breed.toLowerCase().includes(searchQuery);

    const matchesBreed = breedFilter === "" || puppy.breed === breedFilter;
    const matchesPrice = puppy.price <= maxPrice;

    return matchesSearch && matchesBreed && matchesPrice;
  });
}

// ===== RENDER PUPPIES =====
function renderPuppies() {
  const grid = document.getElementById("puppiesGrid");
  const resultsCount = document.getElementById("resultsCount");

  if (!grid) return;

  const filtered = getFilteredPuppies();

  // Update results count
  if (resultsCount) {
    resultsCount.textContent = `${filtered.length} puppy${filtered.length !== 1 ? "ies" : "y"} found`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No puppies found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((puppy, index) => {
      let badgeClass = "card-badge";
      if (puppy.badge === "Hot") badgeClass += " hot";
      if (puppy.badge === "Last") badgeClass += " last";

      return `
      <div class="puppy-card" data-aos="fade-up" data-aos-delay="${index * 50}">
        <div class="card-image-wrapper">
          <img src="${puppy.image}" alt="${puppy.name}" class="card-image" loading="lazy" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(puppy.breed)}'">
          <span class="${badgeClass}">${puppy.badge}</span>
        </div>
        <div class="card-body">
          <h3 class="card-name">${puppy.name}</h3>
          <div class="card-breed">${puppy.breed}</div>
          <div class="card-meta">
            <span class="card-meta-item"><i class="far fa-calendar-alt"></i> ${puppy.age}</span>
            <span class="card-meta-item"><i class="fas fa-${puppy.gender === "Female" ? "venus" : "mars"}"></i> ${puppy.gender}</span>
          </div>
          <div class="card-price">${formatPrice(puppy.price)}</div>
          <div class="card-actions">
            <button class="btn-view-details" onclick='openPuppyModal(${JSON.stringify(puppy).replace(/'/g, "\\'")})'>
              <i class="fas fa-info-circle"></i> View Details
            </button>
         <a href="https://wa.me/12566842882?text=Hi! I'm interested in ${encodeURIComponent(puppy.name)}, the ${encodeURIComponent(puppy.breed)} puppy. Can you provide more information?" target="_blank" class="btn-contact-card">
  <i class="fab fa-whatsapp"></i> Contact Us
</a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Refresh AOS for new elements
  AOS.refresh();
}

// ===== BIND FILTERS =====
function bindFilters() {
  const searchInput = document.getElementById("searchInput");
  const breedSelect = document.getElementById("breedFilter");
  const priceSelect = document.getElementById("priceFilter");
  const resetBtn = document.getElementById("resetFilters");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPuppies();
    });
  }

  if (breedSelect) {
    breedSelect.addEventListener("change", (e) => {
      breedFilter = e.target.value;
      renderPuppies();
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener("change", (e) => {
      const value = e.target.value;
      if (value === "") {
        maxPrice = Infinity;
      } else if (value === "2500") {
        maxPrice = Infinity;
      } else {
        maxPrice = parseInt(value);
      }
      renderPuppies();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchQuery = "";
      breedFilter = "";
      maxPrice = Infinity;

      if (searchInput) searchInput.value = "";
      if (breedSelect) breedSelect.value = "";
      if (priceSelect) priceSelect.value = "";

      renderPuppies();
    });
  }
}

// ===== ANIMATE STATS COUNTER =====
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const target = parseInt(stat.dataset.target);
    const duration = 2000;
    const step = 20;
    const increment = target / (duration / step);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      // Handle percentage display
      if (stat.querySelector(".stat-percent")) {
        stat.innerHTML =
          Math.floor(current) + '<span class="stat-percent">%</span>';
      } else {
        stat.textContent = Math.floor(current);
      }
    }, step);
  });
}

// ===== OBSERVE STATS FOR ANIMATION =====
function observeStats() {
  const statsSection = document.querySelector(".hero-stats");
  if (!statsSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(statsSection);
}

// ===== MOBILE NAVIGATION =====
function initMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navToggle.contains(e.target) &&
        !navMenu.contains(e.target) &&
        navMenu.classList.contains("active")
      ) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// ===== ACTIVE NAVIGATION LINK =====
function setActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ===== PUPPY DETAILS MODAL =====
function openPuppyModal(puppy) {
  // Remove existing modal if any
  const existingModal = document.querySelector(".modal-overlay");
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";

  // Determine badge class
  let badgeClass = "modal-badge";
  if (puppy.badge === "Hot") badgeClass += " hot";
  if (puppy.badge === "Last") badgeClass += " last";

  // Generate puppy details description based on breed
  const getPuppyDescription = (breed, name) => {
    const descriptions = {
      "Cavalier King Charles": `${name} is a gentle and affectionate Cavalier King Charles Spaniel. This breed is known for their sweet expression, silky coat, and loving nature. They make excellent companion dogs and are great with children and other pets.`,
      "Cane Corso": `${name} is a majestic and loyal Cane Corso. This Italian mastiff breed is known for their protective nature, intelligence, and strong bond with their family. They are confident, trainable, and make excellent guard dogs.`,
      Bulldog: `${name} is a charming and gentle Bulldog with a distinctive wrinkled face and pushed-in nose. They are known for their calm demeanor, courage, and friendly disposition. Bulldogs are excellent family pets and great with children.`,
      Brittany: `${name} is an energetic and intelligent Brittany Spaniel. This breed is known for their boundless energy, enthusiasm, and affectionate nature. They are great hunting companions and family dogs who love outdoor activities.`,
      Boxer: `${name} is a playful and energetic Boxer with a strong, muscular build. They are known for their patience, protective nature, and endless enthusiasm. Boxers are excellent with children and make wonderful family protectors.`,
      "Boston Terrier": `${name} is a friendly and intelligent Boston Terrier, often called the "American Gentleman" due to their tuxedo-like markings. They are compact, well-mannered, and adapt well to apartment living.`,
      "Border Collie": `${name} is a highly intelligent and energetic Border Collie. Known as one of the smartest dog breeds, they excel in obedience and agility. They are loyal, hardworking, and need plenty of mental and physical stimulation.`,
      "Bernese Mountain Dog": `${name} is a gentle giant Bernese Mountain Dog with a striking tri-color coat. They are calm, confident, and good-natured. Despite their large size, they are gentle with children and devoted to their family.`,
      Beagle: `${name} is a curious and friendly Beagle with an excellent sense of smell. They are merry, affectionate, and great with children. Beagles are pack dogs who love company and have a distinctive melodious bark.`,
      "Australian Shepherd": `${name} is an intelligent and energetic Australian Shepherd. These versatile dogs excel in herding, agility, and obedience. They are loyal, protective, and form strong bonds with their families.`,
      "Yorkshire Terrier": `${name} is a tiny but confident Yorkshire Terrier with a beautiful silky coat. Despite their small size, they have big personalities. They are affectionate, brave, and make excellent lap dogs.`,
      "Siberian Husky": `${name} is a beautiful and energetic Siberian Husky with striking blue eyes. They are friendly, outgoing, and love to run. Huskies are pack-oriented and have a playful, mischievous nature.`,
      "Shih Tzu": `${name} is a sweet and affectionate Shih Tzu with a luxurious flowing coat. Bred to be companion dogs, they are friendly, outgoing, and love nothing more than cuddling with their humans.`,
      "Shetland Sheepdog": `${name} is an intelligent and loyal Shetland Sheepdog, or "Sheltie." They are responsive, gentle, and excel in obedience. They are wonderful family dogs who are particularly good with children.`,
      Rottweiler: `${name} is a confident and powerful Rottweiler with a natural guarding instinct. They are loyal, courageous, and loving with their family. With proper training, they are excellent protectors and companions.`,
      Poodle: `${name} is an elegant and highly intelligent Poodle. Available in standard, miniature, and toy sizes, they are known for their hypoallergenic coat, trainability, and dignified demeanor.`,
      Pomeranian: `${name} is a tiny but spirited Pomeranian with a fluffy double coat. They are intelligent, curious, and bold despite their small size. They make lively companions and are full of personality.`,
      "Pembroke Welsh Corgi": `${name} is an adorable Pembroke Welsh Corgi with short legs and a big personality. They are intelligent, affectionate, and were originally bred as herding dogs. They are great with families and have a playful nature.`,
      "Miniature Schnauzer": `${name} is a friendly and intelligent Miniature Schnauzer with a distinctive beard and eyebrows. They are alert, spirited, and make excellent watchdogs. They are good with children and adapt well to various living situations.`,
      "Labrador Retriever": `${name} is a friendly and outgoing Labrador Retriever, consistently one of America's most popular breeds. They are energetic, loving, and great with children. Labs are versatile working dogs and wonderful family companions.`,
      Havanese: `${name} is a cheerful and sturdy Havanese, the national dog of Cuba. They are intelligent, easy to train, and have a silky coat. They are social butterflies who thrive on human companionship.`,
      "Great Dane": `${name} is a gentle giant Great Dane, one of the largest dog breeds. Despite their size, they are friendly, patient, and dependable. They are known as "gentle giants" and are great with children.`,
      "Golden Retriever": `${name} is a friendly and intelligent Golden Retriever with a beautiful golden coat. They are one of the most popular family dogs due to their patient, loving nature and eagerness to please.`,
      "German Shepherd": `${name} is a confident and courageous German Shepherd, one of the most versatile working breeds. They are loyal, protective, and highly trainable. They excel in police work, service, and as family protectors.`,
      "French Bulldog": `${name} is an adorable French Bulldog with distinctive bat ears and a compact build. They are playful, adaptable, and affectionate. Frenchies are excellent apartment dogs and love being the center of attention.`,
      "English Springer Spaniel": `${name} is an enthusiastic and friendly English Springer Spaniel. They are energetic, eager to please, and excel in field work. They are great family dogs who love outdoor adventures.`,
      "Doberman Pinscher": `${name} is an elegant and powerful Doberman Pinscher. They are loyal, fearless, and highly intelligent. Dobermans are protective of their family and excel in obedience and protection work.`,
      Dachshund: `${name} is a charming and brave Dachshund, also known as the "wiener dog" due to their long body. They are curious, clever, and have a big personality. They were bred to hunt badgers and are fearless.`,
      Chihuahua: `${name} is a tiny but confident Chihuahua with a big personality. They are loyal, alert, and form strong bonds with their owners. Despite their small size, they have a brave heart.`,
    };

    return (
      descriptions[breed] ||
      `${name} is a wonderful ${breed} puppy looking for their forever home. This breed is known for being loving, loyal, and great with families. They have been well-socialized, vet-checked, and are ready to bring joy to your home.`
    );
  };

  // Generate health features
  const healthFeatures = [
    { icon: "fa-syringe", text: "Vaccinations up to date" },
    { icon: "fa-microchip", text: "Microchipped" },
    { icon: "fa-stethoscope", text: "Vet examined" },
    { icon: "fa-bone", text: "Dewormed" },
    { icon: "fa-file-medical", text: "Health certificate" },
    { icon: "fa-shield-dog", text: "30-day health guarantee" },
  ];

  modalContainer.innerHTML = `
    <button class="modal-close"><i class="fas fa-times"></i></button>
    <img src="${puppy.image}" alt="${puppy.name}" class="modal-image" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(puppy.breed)}'">
    <div class="modal-content">
      <div class="modal-title">
        ${puppy.name}
        <span class="${badgeClass}">${puppy.badge}</span>
      </div>
      <div class="modal-breed">${puppy.breed}</div>

      <div class="modal-details-grid">
        <div class="modal-detail-item">
          <div class="modal-detail-icon"><i class="far fa-calendar-alt"></i></div>
          <div class="modal-detail-info">
            <h4>Age</h4>
            <p>${puppy.age}</p>
          </div>
        </div>
        <div class="modal-detail-item">
          <div class="modal-detail-icon"><i class="fas fa-${puppy.gender === "Female" ? "venus" : "mars"}"></i></div>
          <div class="modal-detail-info">
            <h4>Gender</h4>
            <p>${puppy.gender}</p>
          </div>
        </div>
        <div class="modal-detail-item">
          <div class="modal-detail-icon"><i class="fas fa-weight-scale"></i></div>
          <div class="modal-detail-info">
            <h4>Weight</h4>
            <p>${puppy.breed.includes("Great Dane") ? "15-20 lbs" : puppy.breed.includes("Chihuahua") ? "2-4 lbs" : puppy.breed.includes("York") ? "3-5 lbs" : puppy.breed.includes("Pomeranian") ? "4-6 lbs" : "8-12 lbs"} (est. adult)</p>
          </div>
        </div>
        <div class="modal-detail-item">
          <div class="modal-detail-icon"><i class="fas fa-calendar-check"></i></div>
          <div class="modal-detail-info">
            <h4>Born</h4>
            <p>${new Date().getMonth() + 1 - parseInt(puppy.age) / 4}/2025</p>
          </div>
        </div>
      </div>

      <div class="modal-description">
        <h4>About ${puppy.name}</h4>
        <p>${getPuppyDescription(puppy.breed, puppy.name)}</p>
        <p>This beautiful puppy comes from a reputable breeder, has been raised in a loving home environment, and has received excellent care since birth. They are well-socialized with children and other pets.</p>
      </div>

      <div class="modal-features">
        ${healthFeatures
          .map(
            (feature) => `
          <span class="modal-feature-tag">
            <i class="fas ${feature.icon}"></i> ${feature.text}
          </span>
        `,
          )
          .join("")}
      </div>

      <div class="modal-price">${formatPrice(puppy.price)}</div>

      <div class="modal-actions">
        <a href="https://wa.me/12566842882?text=${encodeURIComponent(`Hi! I'm interested in ${puppy.name}, the ${puppy.breed} puppy. Can you provide more information?`)}" target="_blank" class="modal-btn modal-btn-primary">
          <i class="fab fa-whatsapp"></i> WhatsApp Us
        </a>
        <a href="mailto:Puppyspot0p@gmail.com?subject=Inquiry about ${encodeURIComponent(puppy.name)}&body=${encodeURIComponent(`Hi! I'm interested in ${puppy.name}, the ${puppy.breed} puppy (${formatPrice(puppy.price)}). I'd like to know more about this puppy.`)}" class="modal-btn modal-btn-secondary">
          <i class="far fa-envelope"></i> Email Us
        </a>
      </div>
    </div>
  `;

  modalOverlay.appendChild(modalContainer);
  document.body.appendChild(modalOverlay);

  // Show modal with animation
  setTimeout(() => {
    modalOverlay.classList.add("active");
  }, 10);

  // Prevent body scrolling
  document.body.style.overflow = "hidden";

  // Close modal functions
  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      modalOverlay.remove();
    }, 300);
  };

  // Close button
  modalOverlay
    .querySelector(".modal-close")
    .addEventListener("click", closeModal);

  // Click outside to close
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Escape key to close
  const escHandler = (e) => {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", escHandler);
    }
  };
  document.addEventListener("keydown", escHandler);
}

// ===== IMAGE ERROR HANDLING =====
function handleImageErrors() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.src = "https://via.placeholder.com/800x600?text=Puppy+Image";
      this.classList.add("image-loading");
    });
  });
}

// ===== INITIALIZE EVERYTHING =====
function init() {
  populateBreedFilter();
  renderSteps();
  renderPuppies();
  bindFilters();
  observeStats();
  initMobileNav();
  initNavbarScroll();
  setActiveNavLink();
  initSmoothScroll();
  handleImageErrors();
}

// Start when DOM is ready
document.addEventListener("DOMContentLoaded", init);
