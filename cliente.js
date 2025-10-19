// 🔹 Cargar productos desde localStorage (si existen)
let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 0,
    image: "image-path/aa-1.png",
    title: "Hamburguesa Mixta",
    price: 19000,
    description: "Pan Brioche, Carne, Jamón, Queso, Pollo desmechado, Papa Francesa, Salsita al gusto",
    inStock: true
  },
  {
    id: 1,
    image: "image-path/aa-2.png",
    title: "Hamburguesa Santandereana",
    price: 22000,
    description: "Pan Brioche, Carne, Jamón, Queso, Pollo desmechado, Arepa Amarilla, Vegetales frescos, Papas Francesa, Salsita al gusto",
    inStock: true
  },
  {
    id: 2,
    image: "image-path/aa-3.png",
    title: "Chory Burger",
    price: 22000,
    description: "Pan, Carne, Jamón, Queso, Pollo desmechado, Chorizo Caramelizado, Vegetales frescos, Papa a la francesa",
    inStock: true
  },
  {
    id: 3,
    image: "image-path/aa-4.png",
    title: "Papas Locas",
    price: 25000,
    description: "Carne picada, Chorizo picado, Jamón, Queso, Pollo desmechado, Papa a la francesa",
    inStock: true
  },
  {
    id: 4,
    image: "image-path/aa-5.png",
    title: "Hamburguesa doble carne Especial",
    price: 23000,
    description: "Pan Brioche, 2 Carnes, Doble Jamón, Doble Queso, Tocineta, Vegetales, Pollo desmechado, Papa a la francesa",
    inStock: true
  },
  {
    id: 5,
    image: "image-path/aa-6.png",
    title: "Chory Papa",
    price: 15000,
    description: "Papa, Chorizo, Salsa al gusto",
    inStock: true
  },
  {
    id: 6,
    image: "image-path/aa-7.png",
    title: "Pechuga a la plancha",
    price: 18000,
    description: "200 gramos de pechuga, Chorizo carfrisan, Papa a la francesa",
    inStock: true
  },
  {
    id: 7,
    image: "image-path/aa-8.png",
    title: "Mega Combo",
    price: 34000,
    description: "500 gramos de costillita, 6 porciones de alas, Papa a la francesa",
    inStock: true
  },
  {
    id: 8,
    image: "image-path/aa-9.png",
    title: "Hamburguesa doble carne Cryspy",
    price: 20000,
    description: "Pan Brioche, 2 Carnes, Jamón, Gratinado, Tocineta crispy, Papitas Francesa, Salsa al gusto",
    inStock: true
  },
  {
    id: 9,
    image: "image-path/aa-10.png",
    title: "Hamburguesa Campesita",
    price: 21000,
    description: "Carne, Jamón, Queso, Pollo desmechado, Maiz tierno, Tocineta, Vegetales, Papitas Francesa",
    inStock: true
  },
  {
    id: 10,
    image: "image-path/aa-11.png",
    title: "Picada Mixtas 2 personas",
    price: 37000,
    description: "200 Gramos de Carne, 200 Gramos de pechuga, Chorizo carfrisan, Cebolla Grillet, Papa a la Francesa, Rapi Yuca",
    inStock: true
  },
  {
    id: 11,
    image: "image-path/aa-12.png",
    title: "Hamburguesa Campesina",
    price: 21000,
    description: "Pan, Carne, Queso, Pollo desmechado, Maiz tierno, Tocineta, Vegetales, Papitas Francesa",
    inStock: true
  },
  {
    id: 12,
    image: "image-path/aa-13.png",
    title: "Perro Fuego",
    price: 21000,
    description: "Pan Brioche, Carne Picada, Jalapeños, Doritos Fuego, Queso Gratinado, Papas a la Francesa, Salsas al gusto",
    inStock: true
  },
  {
    id: 13,
    image: "image-path/aa-14.png",
    title: "Hamburguesa Sencilla",
    price: 21000,
    description: "Pan Brioche, Carne, Jamón, Queso, Vegetales, Papas a la Francesa",
    inStock: true
  }
];



const adicionalesDisponibles = [
  { nombre: "Salchicha Zenú", precio: 3000 },
  { nombre: "Aros de cebolla", precio: 2500 },
  { nombre: "Salchicha americana", precio: 4000 },
  { nombre: "Chorizo", precio: 4000 },
  { nombre: "Tocineta", precio: 4000 },
  { nombre: "Maíz tierno", precio: 3500 },
  { nombre: "Queso gratinado", precio: 4000 },
  { nombre: "Carne Hamburguesa", precio: 5000 },
  { nombre: "Porción de papa", precio: 12000 }
];




// Carrito
let cart = JSON.parse(localStorage.getItem("cartCliente")) || [];

// Render productos
function renderProductos() {
  document.getElementById('root').innerHTML = products.map((item, index) => {
    return `
      <div class='box' onclick='showDescription(${index})' style="
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 10px;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      " onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 0 15px rgba(212,175,55,0.2)';"
      onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 10px rgba(212,175,55,0.1)';">
        
        <div class='img-box' style="text-align:center;">
          <img class='images' src=${item.image} style="
            width: 100%;
            height: 140px;
            border-radius: 12px;
            object-fit: cover;
          ">
        </div>

        <div class='bottom' style="text-align:center; margin-top:8px;">
          <!-- 🔹 Nombre del producto (más pequeño) -->
          <p style="
            font-size: 16px;
            font-weight: 300;
            color: #fff;
            margin: 5px 0;
            line-height: 1.2;
          ">${item.title}</p>

          <!-- 🔹 Precio (más pequeño también) -->
          <h2 style="
            font-size: 12px;
            color: #f5c542;
            margin: 4px 0 6px 0;
          ">${item.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</h2>

          <button id="btn-${index}" 
            onclick='openCustomization(${index}); event.stopPropagation();' 
            ${item.inStock ? "" : "disabled"}
            style="
              background: ${item.inStock ? '#020202ff' : '#ffffffff'};
              color: black;
              font-weight: bold;
              border: none;
              border-radius: 8px;
              padding: 5px 12px;
              cursor: ${item.inStock ? 'pointer' : 'not-allowed'};
              transition: 0.2s ease;
            "
            onmouseover="if(this.disabled==false)this.style.background='#000000ff';"
            onmouseout="if(this.disabled==false)this.style.background='#000000ff';">
            ${item.inStock ? "🛒" : "Agotado"}
          </button>
        </div>
      </div>
    `;
  }).join('');
}


// Añadir al carrito
function addToCart(a) {
  if (!products[a].inStock) {
    alert("Este producto está agotado.");
    return;
  }

  const prod = products[a];
  const index = cart.findIndex(item => item.id === prod.id);

  if (index === -1) {
    cart.push({ ...prod, quantity: 1 });
  } else {
    cart[index].quantity += 1;
  }

  updateStorage();
  displayCart();
}

// Cambiar cantidad
function changeQuantity(a, type) {
  if (type === 'plus') {
    cart[a].quantity += 1;
  } else {
    cart[a].quantity -= 1;
    if (cart[a].quantity <= 0) {
      cart.splice(a, 1);
    }
  }
  updateStorage();
  displayCart();
}

// Mostrar carrito
// 🔹 Mostrar carrito robusto (siempre muestra adicionales correctamente)
function displayCart() {
  let total = 0;

  // Contador total de ítems
  document.getElementById("count").innerHTML =
    cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  // Si no hay productos
  if (!cart || cart.length === 0) {
    document.getElementById("cartItem").innerHTML = "Tu carrito está vacío";
    document.getElementById("total").innerHTML = "$ 0";
    return;
  }

  // Renderizar cada producto
  document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
    const priceBase = Number(item.priceFinal || item.price) || 0;
    const subtotal = priceBase * (item.quantity || 1);
    total += subtotal;

    // 🔹 Asegurar que los extras existan correctamente
    let extras = Array.isArray(item.extras) ? item.extras.filter(e => e && e.nombre) : [];
    
    // 🔹 Crear HTML de adicionales (aunque se agreguen antes o después de quitar ingredientes)
    let extrasHTML = "";
    if (extras.length > 0) {
      extrasHTML = `
        <div class='extras-list' style="
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 6px;
          border-radius: 8px;
          margin-top: 4px;
          font-size: 9px;
          color: #d0d0d0;
          border-left: 2px solid #d4af37;
        ">
          <strong style="font-size: 9.5px; color: #f5c542;">Adicionales:</strong>
          <ul style="margin: 2px 0 0 12px; padding: 0; list-style-type: disc;">
            ${extras.map(ex => {
              const nombre = ex.nombre || "Adicional";
              const cantidad = ex.cantidad || 1;
              const subtotalExtra = Number(ex.subtotal) || 0;
              return `
                <li style="
                  margin-bottom: 1px;
                  line-height: 1.2;
                  color: #b8b8b8;
                ">
                  ${nombre} 
                  <span style="color: #f5c542;">x${cantidad}</span> 
                  <span style="color: #a8a8a8;">
                    (${subtotalExtra.toLocaleString('es-CO', { 
                      style: 'currency', 
                      currency: 'COP', 
                      minimumFractionDigits: 0, 
                      maximumFractionDigits: 0 
                    })})
                  </span>
                </li>
              `;
            }).join('')}
          </ul>
        </div>
      `;
    }

    // 🔹 Crear HTML de ingredientes removidos
    let removidosHTML = "";
    if (item.description && item.ingredientes) {
      const baseIng = item.description.split(",").map(i => i.trim());
      const removidos = baseIng.filter(i => !item.ingredientes.includes(i));
      if (removidos.length > 0) {
        removidosHTML = `
          <div class='removidos-list' style="
            margin-top: 5px;
            font-size: 10px;
            color: #ffb3b3;
            background: rgba(255, 0, 0, 0.08);
            border-radius: 8px;
            padding: 4px 6px;
          ">
            <strong style="color: #ff8080;">Sin:</strong> ${removidos.join(", ")}
          </div>
        `;
      }
    }

    // 🔹 Render del ítem completo
    return `
      <div class='cart-item' onclick="editCartItem(${index})" style="
        display: flex;
        gap: 10px;
        background: rgba(255, 255, 255, 0.07);
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 10px;
        align-items: center;
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.15);
        transition: 0.2s ease;
      ">
        <div class='row-img' style="flex-shrink: 0;">
          <img class='rowimg' src="${item.image}" style="
            width: 55px;
            height: 55px;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid rgba(212,175,55,0.4);
          ">
        </div>
        <div class='cart-details' style="flex: 1;">
          <!-- 🔹 Nombre del producto -->
          <p style='font-size:14px; font-weight:600; color:#fff; margin: 0;'>${item.title}</p>

          ${extrasHTML}
          ${removidosHTML}

          <!-- 🔹 Nota del cliente -->
          ${item.notas ? `<div style="margin-top:3px; font-size:10px; color:#cfcfcf;"><em>Nota: ${item.notas}</em></div>` : ""}

          <!-- 🔹 Precio -->
          <h2 style='font-size:12.5px; color:#f5c542; margin:6px 0;'>
            ${subtotal.toLocaleString('es-CO', { 
              style: 'currency', 
              currency: 'COP', 
              minimumFractionDigits: 0, 
              maximumFractionDigits: 0 
            })}
          </h2>

          <!-- 🔹 Controles de cantidad -->
          <div class="quantity-controls" onclick="event.stopPropagation();" style="
            display:inline-flex;
            align-items:center;
            gap:8px;
            background:rgba(255,255,255,0.05);
            border-radius:8px;
            padding:4px 8px;
          ">
            <span onclick="changeQuantity(${index}, 'minus')" style="
              cursor:pointer;
              font-weight:bold;
              color:#fff;
              padding:0 6px;
              background:rgba(255,255,255,0.1);
              border-radius:5px;
              transition:0.2s;
            " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">−</span>

            <span style="color:#f5c542; font-size:12px;">${item.quantity}</span>

            <span onclick="changeQuantity(${index}, 'plus')" style="
              cursor:pointer;
              font-weight:bold;
              color:#fff;
              padding:0 6px;
              background:rgba(255,255,255,0.1);
              border-radius:5px;
              transition:0.2s;
            " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">+</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // 🔹 Total general
  document.getElementById("total").innerHTML =
    total.toLocaleString('es-CO', { 
      style: 'currency', 
      currency: 'COP', 
      minimumFractionDigits: 0, 
      maximumFractionDigits: 0 
    });
}





// Vaciar carrito
function clearCart() {
  let confirmClear = confirm("¿Seguro que quieres vaciar el carrito?");
  if (confirmClear) {
    cart = [];
    updateStorage();
    displayCart();
  }
}

// Guardar en localStorage
function updateStorage() {
  localStorage.setItem("cartCliente", JSON.stringify(cart));
}

// Sidebar menú
function toggleMenu() {
  document.getElementById("menuSidebar").classList.toggle("active");
}

// Confirmar orden
function confirmarOrden() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const nombre = document.getElementById("nombreCliente").value.trim();
  const telefono = document.getElementById("telefonoCliente").value.trim();
  const direccion = document.getElementById("direccionCliente").value.trim();
  const metodoPago = document.getElementById("metodoPago").value;

  if (!nombre || !telefono) {
    alert("Por favor completa tu nombre y teléfono.");
    return;
  }

  let mensaje = `🌟 *Nuevo pedido recibido en Mao Burger* 🌟\n\n`;
  mensaje += `👤 *Nombre:* ${nombre}\n📞 *Teléfono:* ${telefono}\n`;
  if (direccion) mensaje += `🏠 *Dirección:* ${direccion}\n`;
  mensaje += `💳 *Método de pago:* ${metodoPago}\n\n🛒 *Detalle del pedido:*\n`;

  cart.forEach(item => {
    const baseIngredientes = item.description.split(",").map(i => i.trim());
    const personalizados = item.ingredientes || [];
    const removidos = baseIngredientes.filter(i => !personalizados.includes(i));

    mensaje += `\n🍔 *${item.title}* x${item.quantity}\n💰 ${((item.priceFinal || item.price) * item.quantity).toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0, maximumFractionDigits: 0 })}\n`;

    if (removidos.length > 0) {
      mensaje += `🧂 Sin: ${removidos.join(", ")}\n`;
    }

    if (item.extras && item.extras.length > 0) {
      mensaje += `➕ *Adicionales:*\n`;
      item.extras.forEach(ex => {
        mensaje += `   - ${ex.nombre} x${ex.cantidad} (${ex.subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0, maximumFractionDigits: 0 })})\n`;
      });
    }

    if (item.notas) {
      mensaje += `📝 Nota del cliente: ${item.notas}\n`;
    }
  });

  const total = document.getElementById("total").innerText;
  mensaje += `\n➡️ *Total a pagar:* ${total}\n🚚 ¡Gracias por tu compra!`;

  const mensajeCodificado = encodeURIComponent(mensaje);
  const numeroNegocio = "573123022548";
  window.open(`https://wa.me/${numeroNegocio}?text=${mensajeCodificado}`, "_blank");
}




// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderProductos();
  displayCart();
});

// 🔄 Refrescar productos cada 2 segundos desde localStorage
setInterval(() => {
  products = JSON.parse(localStorage.getItem("products")) || products;
  renderProductos();
}, 20000);


// Modal descripción
const modal = document.getElementById("descModal");
const closeModal = modal.querySelector(".close");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");

// Mostrar modal al hacer clic
function showDescription(index) {
  const item = products[index];
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalPrice.textContent = item.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  modal.style.display = "flex";
}


// 🔸 Modal Personalización
const customModal = document.getElementById("customModal");
const closeCustom = document.getElementById("closeCustom");
const customTitle = document.getElementById("customTitle");
const customOptions = document.getElementById("customOptions");
const customNotes = document.getElementById("customNotes");
const confirmCustom = document.getElementById("confirmCustom");

let selectedProduct = null;

// 🧠 Ingredientes base automáticos (se generan desde la descripción)
function openCustomization(index) {
  selectedProduct = products[index];
  customTitle.textContent = selectedProduct.title;

  // Ingredientes base
  const ingredientes = selectedProduct.description.split(",").map(i => i.trim());
  customOptions.innerHTML = `
    <h3>🧂 Ingredientes base</h3>
    ${ingredientes.map((ing, idx) => `
      <label>
        <input type="checkbox" checked id="ing-${idx}"> ${ing}
      </label>
    `).join("")}

    <hr>
    <h3>➕ Adicionales</h3>
    <div id="extrasContainer">
      ${adicionalesDisponibles.map((extra, i) => `
        <div class="extra-item">
          <span>${extra.nombre} (${extra.precio.toLocaleString('es-CO', {style:'currency',currency:'COP', minimumFractionDigits: 0, maximumFractionDigits: 0})})</span>
          <div class="extra-controls">
            <button class="extra-minus" data-index="${i}">-</button>
            <span id="extra-qty-${i}">0</span>
            <button class="extra-plus" data-index="${i}">+</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  // Eventos de los botones + y -
  document.querySelectorAll(".extra-plus").forEach(btn => {
    btn.onclick = () => {
      const idx = btn.dataset.index;
      const qtyEl = document.getElementById(`extra-qty-${idx}`);
      qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
    };
  });
  document.querySelectorAll(".extra-minus").forEach(btn => {
    btn.onclick = () => {
      const idx = btn.dataset.index;
      const qtyEl = document.getElementById(`extra-qty-${idx}`);
      const newQty = Math.max(0, parseInt(qtyEl.textContent) - 1);
      qtyEl.textContent = newQty;
    };
  });

  customNotes.value = "";
  customModal.style.display = "flex";
}




// 🧩 Editar producto existente del carrito
function editCartItem(index) {
  const item = cart[index];
  selectedProduct = { ...item };
  customTitle.textContent = item.title;

  // Ingredientes base
  const ingredientesBase = item.ingredientes && item.ingredientes.length > 0
    ? item.ingredientes
    : item.description.split(",").map(i => i.trim());

  // Mostrar checklist de ingredientes
  customOptions.innerHTML = item.description.split(",").map((ing, i) => {
    const limpio = ing.trim();
    const checked = ingredientesBase.includes(limpio) ? "checked" : "";
    return `<label><input type="checkbox" ${checked} id="ing-${i}"> ${limpio}</label>`;
  }).join("");

  // Mostrar extras actuales o inicializar
  const extrasContainer = document.createElement('div');
  extrasContainer.id = "extrasContainer";
  extrasContainer.innerHTML = adicionalesDisponibles.map((extra, i) => {
    const existente = item.extras?.find(e => e.nombre === extra.nombre);
    const qty = existente ? existente.cantidad : 0;
    return `
      <div class="extra-item">
        <span>${extra.nombre} (${extra.precio.toLocaleString('es-CO', {style:'currency',currency:'COP', minimumFractionDigits:0, maximumFractionDigits:0})})</span>
        <div class="extra-controls">
          <button class="extra-minus" data-index="${i}">-</button>
          <span id="extra-qty-${i}">${qty}</span>
          <button class="extra-plus" data-index="${i}">+</button>
        </div>
      </div>
    `;
  }).join("");
  customOptions.appendChild(document.createElement('hr'));
  customOptions.appendChild(extrasContainer);

  // Botones + y -
  document.querySelectorAll(".extra-plus").forEach(btn => {
    btn.onclick = () => {
      const idx = btn.dataset.index;
      const qtyEl = document.getElementById(`extra-qty-${idx}`);
      qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
    };
  });
  document.querySelectorAll(".extra-minus").forEach(btn => {
    btn.onclick = () => {
      const idx = btn.dataset.index;
      const qtyEl = document.getElementById(`extra-qty-${idx}`);
      qtyEl.textContent = Math.max(0, parseInt(qtyEl.textContent) - 1);
    };
  });

  // Mostrar nota
  customNotes.value = item.notas || "";
  customModal.style.display = "flex";

  // 🔹 Confirmar edición
  confirmCustom.onclick = () => {
    // Ingredientes seleccionados
    const checkboxes = document.querySelectorAll("#customOptions input[type='checkbox']");
    const ingredientesSeleccionados = Array.from(checkboxes)
      .filter(chk => chk.checked)
      .map(chk => chk.nextSibling.textContent.trim());

    // Extras seleccionados
    const extrasSeleccionados = [];
    adicionalesDisponibles.forEach((extra, i) => {
      const qty = parseInt(document.getElementById(`extra-qty-${i}`).textContent);
      if (qty > 0) {
        extrasSeleccionados.push({
          nombre: extra.nombre,
          precio: extra.precio,
          cantidad: qty,
          subtotal: qty * extra.precio
        });
      }
    });

    // Nota
    const notas = customNotes.value.trim();

    // Precio final
    const totalExtras = extrasSeleccionados.reduce((acc, e) => acc + e.subtotal, 0);
    const precioFinal = selectedProduct.price + totalExtras;

    // 🔹 Actualizar producto existente
    cart[index] = {
      ...selectedProduct,
      ingredientes: ingredientesSeleccionados,
      extras: extrasSeleccionados,
      notas: notas,
      priceFinal: precioFinal
    };

    updateStorage();
    displayCart();
    customModal.style.display = "none";
  };
}





// Cerrar modal
closeCustom.onclick = () => (customModal.style.display = "none");
window.onclick = (e) => {
  if (e.target == customModal) customModal.style.display = "none";
};

// 🔹 Confirmar y agregar con personalización
confirmCustom.onclick = () => {
  if (!selectedProduct) return;

  // 🔹 Ingredientes seleccionados
  const checkboxes = document.querySelectorAll("#customOptions input[type='checkbox']");
  const ingredientesSeleccionados = Array.from(checkboxes)
    .filter(chk => chk.checked)
    .map(chk => chk.nextSibling.textContent.trim());

  // 🔹 Extras seleccionados
  const extrasSeleccionados = [];
  adicionalesDisponibles.forEach((extra, i) => {
    const qtyEl = document.getElementById(`extra-qty-${i}`);
    if (!qtyEl) return;
    const qty = parseInt(qtyEl.textContent);
    if (qty > 0) {
      extrasSeleccionados.push({
        nombre: extra.nombre,
        precio: extra.precio,
        cantidad: qty,
        subtotal: qty * extra.precio
      });
    }
  });

  // 🔹 Nota del cliente
  const notas = customNotes.value.trim();

  // 🔹 Calcular precio final (base + extras)
  const totalExtras = extrasSeleccionados.reduce((acc, e) => acc + e.subtotal, 0);
  const precioFinal = selectedProduct.price + totalExtras;

  // 🔹 Crear objeto de producto personalizado
  const customItem = {
    ...selectedProduct,
    ingredientes: ingredientesSeleccionados,
    extras: extrasSeleccionados,
    notas: notas,
    quantity: 1,
    priceFinal: precioFinal
  };

  // 🔹 Agregar al carrito
  cart.push(customItem);
  updateStorage();
  displayCart();

  // 🔹 Cerrar modal
  customModal.style.display = "none";
};




// Cerrar modal
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };


