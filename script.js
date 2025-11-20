// Prodotti
const productsData = [
    {id:1,title:"Prodotto 1", desc:"Descrizione 1", media:"media/prodotto1.jpg", price:10},
    {id:2,title:"Prodotto 2", desc:"Descrizione 2", media:"media/prodotto2.mp4", price:15},
    {id:3,title:"Prodotto 3", desc:"Descrizione 3", media:"media/prodotto3.jpg", price:20},
    {id:4,title:"Prodotto 4", desc:"Descrizione 4", media:"media/prodotto4.jpg", price:12},
    {id:5,title:"Prodotto 5", desc:"Descrizione 5", media:"media/prodotto5.jpg", price:18},
    {id:6,title:"Prodotto 6", desc:"Descrizione 6", media:"media/prodotto6.jpg", price:25}
];

let cart = [];
let currentProductId = null;

// Mostra prodotti
const productsContainer = document.getElementById("products");
productsData.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.onclick = () => showDescription(p.id);
    
    if(p.media.endsWith(".mp4")){
        div.innerHTML = `<video src="${p.media}" controls></video><h2>${p.title}</h2>`;
    } else {
        div.innerHTML = `<img src="${p.media}" alt="${p.title}"><h2>${p.title}</h2>`;
    }
    productsContainer.appendChild(div);
});

// Modal
function showDescription(id){
    currentProductId = id;
    const p = productsData.find(x=>x.id===id);
    document.getElementById("modal-title").innerText = p.title;
    document.getElementById("modal-desc").innerText = `${p.desc} - Prezzo: €${p.price}`;
    document.getElementById("description-modal").style.display = "block";
}

function closeModal(){
    document.getElementById("description-modal").style.display = "none";
}

// Carrello
function addToCart(id){
    const p = productsData.find(x=>x.id===id);
    cart.push(p);
    updateCart();
    closeModal();
}

function updateCart(){
    const ul = document.getElementById("cart-items");
    ul.innerHTML = "";
    let total = 0;
    cart.forEach(p=>{
        const li = document.createElement("li");
        li.innerText = `${p.title} - €${p.price}`;
        ul.appendChild(li);
        total += p.price;
    });
    document.getElementById("total").innerText = `Totale: €${total}`;
}

// Sfondo soldi che piovono
const canvas = document.getElementById("moneyCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const money = [];
for(let i=0;i<50;i++){
    money.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: Math.random()*20+10,
        speed: Math.random()*2+1
    });
}

function drawMoney(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "green";
    money.forEach(m=>{
        ctx.fillText("💵", m.x, m.y);
        m.y += m.speed;
        if(m.y>canvas.height)m.y=-20;
    });
    requestAnimationFrame(drawMoney);
}

ctx.font = "20px Arial";
drawMoney();

window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
