// DATA DE LOS 34 SITIOS (Extraída del txt)

let currentTab = 'directory';
// Filter for Tinder Job: Only Bolsas, Freelance, Brands (bolsa, freelance, brand)
let tinderList = sites.filter(s => ['bolsa', 'freelance', 'brand'].includes(s.jobcat)).sort(() => Math.random() - 0.5);

// 1. PERFORMANCE ZEROREGRET: Intersection Observer for Async Rendering
if ('IntersectionObserver' in window) {
    window.cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dispara la animación
                entry.target.classList.add('visible');
                // Dejamos de observarlo para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-tab').forEach(n => n.classList.remove('active'));

    document.getElementById(`view-${tab}`).classList.remove('hidden');
    document.getElementById(`btn-${tab}`).classList.add('active');

    if (tab === 'directory') renderDirectory(sites);
    if (tab === 'tinder') renderTinder();
    if (tab === 'pins') renderPins();
}

function toggleSidebar() {
    const content = document.getElementById('sidebar-collapsible');
    const icon = document.getElementById('sidebar-icon');
    if (!content || !icon) return;

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.setAttribute('data-lucide', 'chevron-up');
    } else {
        content.classList.add('hidden');
        icon.setAttribute('data-lucide', 'chevron-down');
    }
    lucide.createIcons();
}

function filterBolsaSub(sub) {
    // Ensure we are in 'bolsa' context visually
    const filtered = sites.filter(s => s.jobcat === 'bolsa' && s.subtype === sub);
    renderDirectory(filtered);
}

function filterDir(cat) {
    // Toggle Sidebar
    const sidebar = document.getElementById('bolsa-sidebar');
    if (sidebar) {
        if (cat === 'bolsa') {
            sidebar.classList.remove('hidden');
        } else {
            sidebar.classList.add('hidden');
        }
    }

    const filtered = cat === 'all' ? sites : sites.filter(s => s.jobcat === cat);
    renderDirectory(filtered);

    // UI Button feedback
    document.querySelectorAll('.cat-btn').forEach(b => {
        // Reset all
        b.classList.remove('bg-black', 'text-white');
        b.classList.add('bg-white', 'text-black');

        // Active match based on text content approximation
        const txt = b.textContent.toLowerCase();
        const target = cat === 'all' ? 'todos' :
            cat === 'bolsa' ? 'bolsas' :
                cat === 'brand' ? 'marcas' : cat;

        if (txt.includes(target)) {
            b.classList.add('bg-black', 'text-white');
            b.classList.remove('bg-white', 'text-black');
        }
    });
}

function renderDirectory(data) {
    const container = document.getElementById('grid-directory');

    if (data.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-20 font-black text-2xl uppercase opacity-30">No hay nada aquí, solo vacío existencial.</div>`;
        return;
    }

    // 2. Manipulación Eficiente del DOM: Usamos DocumentFragment
    container.innerHTML = ''; // Limpiamos rápido
    const fragment = document.createDocumentFragment();

    data.forEach((s, i) => {
        const div = document.createElement('div');
        // Quitamos las clases hover genéricas de Tailwind para manejar todo fluido por CSS con 'card-animate'
        div.className = "bg-white border-4 border-black p-4 rounded-xl shadow-[6px_6px_0px_black] group flex flex-col h-full card-animate";
        // 3. Batching de Animaciones: Inyeccion dinámina de index CSS
        div.style.setProperty('--index', Math.min(i, 15)); // Hasta 15 de retraso

        div.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <span class="category-tag bg-yellow-400 border border-black">${s.jobcat}</span>
                ${s.subtype ? `<span class="text-[12px] font-black uppercase bg-slate-200 px-2 py-0.5 rounded border border-black">${s.subtype}</span>` : ''}
                <div class="text-[12px] font-black opacity-50 uppercase tracking-tighter">REF #${s.id}</div>
            </div>
            <div class="h-32 mb-4 border-2 border-black rounded-lg overflow-hidden bg-slate-100 flex-none relative">
                <img src="${s.img}" loading="lazy" class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
            </div>
            <h3 class="text-xl font-black uppercase mb-2 leading-tight">${s.name}</h3>
            <p class="text-base leading-relaxed font-medium mb-4 italic opacity-90 flex-grow">
                ${s.desc}
            </p>
            <div class="flex flex-wrap gap-2 mb-4 flex-none">
                ${s.keywords.map(k => `<span class="text-sm font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-black/5">#${k}</span>`).join('')}
            </div>
            <a href="${s.url}" target="_blank" class="flex-none block w-full text-center bg-black text-white py-3 font-black uppercase text-sm rounded transition-colors hover:bg-yellow-400 hover:text-black">VISITAR PORTAL</a>
        `;

        fragment.appendChild(div);

        // Agregamos al observer asíncrono
        if (window.cardObserver) {
            window.cardObserver.observe(div);
        } else {
            div.classList.add('visible'); // fallback
        }
    });

    container.appendChild(fragment);
    lucide.createIcons({ root: container }); // Scoped a container
}

function renderTinder() {
    const stack = document.getElementById('tinder-stack');
    if (tinderList.length === 0) {
        stack.innerHTML = `<div class="p-10 text-center font-black uppercase">¡TE QUEDASTE SIN TRABAJO (Y SIN OPCIONES)!<br><button onclick="resetTinder()" class="mt-4 text-xs underline">Recargar mazo</button></div>`;
        return;
    }

    stack.innerHTML = tinderList.slice(-5).map((s, i, arr) => {
        const isTop = i === arr.length - 1;
        return `
                <div class="tinder-card" style="z-index:${i}; transform: scale(${0.9 + (i * 0.02)}) translateY(${i * -5}px);">
                    <div class="flex justify-between mb-2 flex-none">
                        <span class="bg-black text-yellow-400 px-3 py-1 text-xs font-black uppercase rounded">${s.jobcat}</span>
                    </div>
                    <div class="flex-grow flex flex-col min-h-0">
                        <div class="h-32 md:h-48 border-2 border-black rounded-lg mb-4 overflow-hidden flex-none relative bg-slate-100">
                            <img src="${s.img}" class="absolute inset-0 w-full h-full object-cover">
                        </div>
                        <div class="flex-grow overflow-y-auto custom-scrollbar pr-2 pb-2">
                            <h3 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter leading-tight">${s.name}</h3>
                            <p class="text-sm md:text-base font-bold leading-normal mt-2 opacity-90">"${s.desc}"</p>
                        </div>
                    </div>
                    <div class="mt-2 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest text-center flex-none">Swipe para decidir</div>
                </div>
                `;
    }).join('');
    lucide.createIcons();
}

function handleSwipe(direction) {
    if (tinderList.length === 0) return;

    const card = document.querySelector('.tinder-stack .tinder-card:last-child');
    const item = tinderList[tinderList.length - 1];

    if (direction === 'right') {
        // Match visual flash
        const overlay = document.getElementById('match-overlay');
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.style.display = 'none';
            window.open(item.url, '_blank');
        }, 150);
        card.classList.add('swipe-right');
    } else {
        card.classList.add('swipe-left');
    }

    setTimeout(() => {
        tinderList.pop();
        renderTinder();
    }, 300);
}

function resetTinder() {
    tinderList = sites.filter(s => ['bolsa', 'freelance', 'brand'].includes(s.jobcat)).sort(() => Math.random() - 0.5);
    renderTinder();
}

function renderPins() {
    const container = document.getElementById('pins-carousel');
    // TARGET_PIN_URL viene de constants.js

    container.innerHTML = pinData.map(p => `
                <div onclick="window.open('${TARGET_PIN_URL}', '_blank')" 
                     class="relative flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] h-[60vh] snap-center rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_black] cursor-pointer group hover:-translate-y-2 transition-transform duration-300">

                    <!-- Background Image -->
                    <img src="${p.img}" class="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-50 group-hover:scale-105 transition-all duration-700">

                    <!-- Text Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                        <span class="bg-yellow-400 text-black px-3 py-1 text-[10px] font-black uppercase w-fit mb-4 border-2 border-black transform -rotate-2 group-hover:rotate-0 transition-transform">Lectura Obligatoria</span>
                        <h3 class="text-3xl md:text-5xl font-black text-white uppercase leading-none mb-4 drop-shadow-lg">${p.t}</h3>
                        <p class="text-white text-sm md:text-base font-medium italic opacity-90 border-l-4 border-yellow-400 pl-4">${p.s}</p>
                    </div>
                </div>
            `).join('');
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-tab').forEach(n => n.classList.remove('active'));

    document.getElementById(`view-${tab}`).classList.remove('hidden');
    document.getElementById(`btn-${tab}`).classList.add('active');

    if (tab === 'directory') renderDirectory(sites);
    if (tab === 'tinder') renderTinder();
    if (tab === 'pins') renderPins();
}

function generatePrompt() {
    const role = document.getElementById('role-input').value.trim();
    if (!role) {
        alert("¡ESCRIBE UN PUESTO PRIMERO! (NO SOY ADIVINO)");
        return;
    }

    // getPromptTemplate viene de constants.js
    const prompt = getPromptTemplate(role);

    document.getElementById('prompt-text').textContent = prompt;
    document.getElementById('prompt-output').classList.remove('hidden');
}

function copyToClipboard() {
    const text = document.getElementById('prompt-text').textContent;
    // Utils viene de utils.js
    Utils.copyToClipboard(text, "¡PROMPT COPIADO! AHORA CORRE A PEGARLO EN TU ORÁCULO DE IA.");
}

window.onload = () => {
    // MAPPING SUBTYPES FOR BOLSA METER (viene de constants.js)
    // Enrich data
    sites.forEach(s => {
        if (s.jobcat === 'bolsa') {
            // Fuzzy match or exact match
            const sub = Object.keys(SUBTYPE_MAP).find(key => s.name.includes(key));
            s.subtype = sub ? SUBTYPE_MAP[sub] : 'suerte'; // Default to suerte (includes Freelance now)
        }
    });

    filterDir('bolsa'); // Set default view to Bolsa (and show sidebar)
    renderPins();
    lucide.createIcons();

    // 4. PERFORMANCE & UX: Auto-hide sidebar on mobile scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 1024) return; // Only mobile/tablet

        const sidebar = document.getElementById('bolsa-sidebar');
        if (!sidebar || sidebar.classList.contains('hidden')) return;

        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 200) {
            // Scrolling down -> Hide
            sidebar.style.transform = 'translateY(-20px)';
            sidebar.style.opacity = '0';
            sidebar.style.pointerEvents = 'none';
        } else {
            // Scrolling up -> Show
            sidebar.style.transform = 'translateY(0)';
            sidebar.style.opacity = '1';
            sidebar.style.pointerEvents = 'all';
        }
        lastScroll = currentScroll;
    });
}