
fetch('http://localhost:5000/products')
.then(r=>r.json())
.then(data=>{
const c=document.getElementById('products');
data.forEach(p=>{
c.innerHTML += `<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.desc}</p>
<p class="price">$${p.price}</p>
<button>Buy Now</button>
</div>`
})
})
