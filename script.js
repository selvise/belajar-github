const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Pilih produk
const productButtons = document.querySelectorAll(".add-button");
const favoriteSelect = document.getElementById("favorite");
const selectionMessage = document.getElementById("selectionMessage");

productButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const productName = button.dataset.product;

        favoriteSelect.value = productName;
        selectionMessage.textContent =
            productName + " dipilih! Kamu bisa mengisi Guest Book di bawah.";

        document.getElementById("guestbook").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Guest Book
const guestForm = document.getElementById("guestForm");
const guestEntries = document.getElementById("guestEntries");

guestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const favorite = favoriteSelect.value;
    const message = document.getElementById("message").value.trim();

    if (!guestForm.reportValidity()) {
        return;
    }

    const emptyMessage = guestEntries.querySelector(".empty-message");

    if (emptyMessage) {
        emptyMessage.remove();
    }

    const entry = document.createElement("article");
    entry.classList.add("guest-entry");

    const guestName = document.createElement("h4");
    guestName.textContent = name;

    const guestFavorite = document.createElement("p");
    guestFavorite.classList.add("entry-favorite");
    guestFavorite.textContent = "Favorite: " + favorite;

    const guestMessage = document.createElement("p");
    guestMessage.textContent = message;

    entry.append(guestName, guestFavorite, guestMessage);
    guestEntries.appendChild(entry);

    guestForm.reset();

    selectionMessage.textContent = "";

    entry.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});