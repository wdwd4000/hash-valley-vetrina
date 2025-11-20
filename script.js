const products = {
    1: { title: "Prodotto 1", desc: "Descrizione del prodotto 1." },
    2: { title: "Prodotto 2", desc: "Descrizione del prodotto 2." },
    3: { title: "Prodotto 3", desc: "Descrizione del prodotto 3." },
    4: { title: "Prodotto 4", desc: "Descrizione del prodotto 4." },
    5: { title: "Prodotto 5", desc: "Descrizione del prodotto 5." },
    6: { title: "Prodotto 6", desc: "Descrizione del prodotto 6." },
};

function showDescription(id) {
    document.getElementById("modal-title").innerText = products[id].title;
    document.getElementById("modal-desc").innerText = products[id].desc;
    document.getElementById("description-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("description-modal").style.display = "none";
}
