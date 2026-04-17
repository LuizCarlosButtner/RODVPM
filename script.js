// Banco de imagens de exemplo para os 8 cards
const imagePacks = [
    // Pack 0: Summit Towers
    [
        "img/maquetes_pro/summit_tower_01/1.JPG",
        "img/maquetes_pro/summit_tower_01/2.JPG",
        "img/maquetes_pro/summit_tower_01/3.JPG",
        "img/maquetes_pro/summit_tower_01/4.JPG",
        "img/maquetes_pro/summit_tower_01/5.JPG",
        "img/maquetes_pro/summit_tower_01/6.JPG",
        "img/maquetes_pro/summit_tower_01/7.JPG"
    ],
    // Pack 1: Horto Residence
    [
        "img/maquetes_pro/horto_residence_02/1.jpg",
        "img/maquetes_pro/horto_residence_02/2.jpg",
        "img/maquetes_pro/horto_residence_02/3.jpg",
        "img/maquetes_pro/horto_residence_02/4.jpg",
        "img/maquetes_pro/horto_residence_02/5.jpg",
        "img/maquetes_pro/horto_residence_02/6.jpg",
    ],
    // Pack 2: Ferraz Junqueira
    [
        "img/maquetes_pro/ferraz_junqueira_03/1.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/2.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/3.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/4.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/5.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/6.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/7.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/8.JPG",
        "img/maquetes_pro/ferraz_junqueira_03/9.JPG"
    ],
    // Pack 3: Soul Ipanema
    [
        "img/maquetes_pro/soul_ipanema_04/1.JPG",
        "img/maquetes_pro/soul_ipanema_04/2.JPG",
        "img/maquetes_pro/soul_ipanema_04/3.JPG",
        "img/maquetes_pro/soul_ipanema_04/4.JPG",
        "img/maquetes_pro/soul_ipanema_04/5.JPG"
    ],
    // Pack 4: Privilége
    [
        "img/maquetes_pro/privilege_05/1.JPG",
        "img/maquetes_pro/privilege_05/2.JPG",
        "img/maquetes_pro/privilege_05/3.JPG",
        "img/maquetes_pro/privilege_05/4.JPG",
        "img/maquetes_pro/privilege_05/5.JPG"
    ],
    // Pack 5: Serena Tucuruvi
    [
        "img/maquetes_pro/serena_tucuruvi_06/1.png",
        "img/maquetes_pro/serena_tucuruvi_06/2.png",
        "img/maquetes_pro/serena_tucuruvi_06/3.png",
        "img/maquetes_pro/serena_tucuruvi_06/4.png",
        "img/maquetes_pro/serena_tucuruvi_06/5.png",
        "img/maquetes_pro/serena_tucuruvi_06/6.png",
        "img/maquetes_pro/serena_tucuruvi_06/7.png",
        "img/maquetes_pro/serena_tucuruvi_06/8.png"
    ],
    // Pack 6: Centro Alimentício Maricá
    [
        "img/maquetes_pro/centro_alimenticio_marica_07/1.JPG",
        "img/maquetes_pro/centro_alimenticio_marica_07/2.JPG",
        "img/maquetes_pro/centro_alimenticio_marica_07/3.JPG",
        "img/maquetes_pro/centro_alimenticio_marica_07/4.JPG",
        "img/maquetes_pro/centro_alimenticio_marica_07/5.JPG",
        "img/maquetes_pro/centro_alimenticio_marica_07/6.JPG",
        "img/maquetes_pro/centro_alimenticio_marica_07/7.JPG"
    ],
    // Pack 7: Studio Alfa
    [
        "img/maquetes_pro/studio_alfa_08/1.png",
        "img/maquetes_pro/studio_alfa_08/2.png",
        "img/maquetes_pro/studio_alfa_08/3.png",
        "img/maquetes_pro/studio_alfa_08/4.png",
        "img/maquetes_pro/studio_alfa_08/5.png",
        "img/maquetes_pro/studio_alfa_08/6.png",
        "img/maquetes_pro/studio_alfa_08/7.png",
        "img/maquetes_pro/studio_alfa_08/8.png"
    ]
];

let currentPack = [];
let currentIndex = 0;

const modal = document.getElementById('galleryModal');
const mainImg = document.getElementById('mainModalImage');
const counter = document.getElementById('modalCounter');
const thumbContainer = document.getElementById('thumbnailContainer');

// Função para abrir o modal
function openModal(packIndex) {
    currentPack = imagePacks[packIndex];
    currentIndex = 0;
    
    // Removendo display hidden do tailwind
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Impede rolagem do fundo
    document.body.style.overflow = 'hidden';

    updateModalContent();
}

// Função para fechar o modal
function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Restaura rolagem do fundo
    document.body.style.overflow = '';
}

// Função para atualizar a imagem, contador e miniaturas ativas
function updateModalContent() {
    // Atualiza imagem principal
    mainImg.src = currentPack[currentIndex];
    
    // Atualiza o contador (ex: "1 of 6")
    counter.innerText = `${currentIndex + 1} de ${currentPack.length}`;
    
    // Renderiza barra de miniaturas
    renderThumbnails();
}

// Navegação
function nextImage() {
    currentIndex = (currentIndex + 1) % currentPack.length;
    updateModalContent();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentPack.length) % currentPack.length;
    updateModalContent();
}

function setMainImage(index) {
    currentIndex = index;
    updateModalContent();
}

// Construir as miniaturas dinamicamente no rodapé do modal
function renderThumbnails() {
    thumbContainer.innerHTML = ''; // Limpar antigos
    
    currentPack.forEach((url, index) => {
        const isActive = index === currentIndex;
        
        const img = document.createElement('img');
        img.src = url;
        img.onclick = () => setMainImage(index);
        
        // Classes Tailwind para miniatura idêntica à referência
        img.className = `h-20 w-24 object-cover cursor-pointer transition-all duration-200 
                         ${isActive ? 'border-2 border-white opacity-100 scale-105 shadow-lg' : 'opacity-50 hover:opacity-100'}`;
        
        thumbContainer.appendChild(img);
    });
    
    // Faz a miniatura ativa rolar para o centro suavemente
    if(thumbContainer.children[currentIndex]) {
        thumbContainer.children[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

// Expondo as funções globalmente para que possam ser chamadas do HTML
window.openModal = openModal;
window.closeModal = closeModal;
window.nextImage = nextImage;
window.prevImage = prevImage;
window.setMainImage = setMainImage;

// ===== CARROSSEL DA GALERIA =====
const galeriaCarousel = document.getElementById('galeriaCarousel');
const galeariaDots = document.getElementById('galeariaDots');

// Dados dos cards da galeria
const galeriaCards = [
    {
        src: "img/maquetes_pro/summit_tower_01/1.JPG",
        alt: "Santorini Villa",
        titulo: "Summit Towers",
        constructor: "WE Construtora",
        modalIndex: 0
    },
    {
        src: "img/maquetes_pro/horto_residence_02/1.jpg",
        alt: "Swiss Chalet",
        titulo: "Horto Residence",
        constructor: "Construtora LIMAC",
        modalIndex: 1
    },
    {
        src: "img/maquetes_pro/ferraz_junqueira_03/1.JPG",
        alt: "Oceanfront Cabin",
        titulo: "Ferraz Junqueira",
        constructor: "Construtora Vilela Campos",
        modalIndex: 2
    },
    {
        src: "img/maquetes_pro/soul_ipanema_04/1.JPG",
        alt: "Forest Retreat",
        titulo: "Soul Ipanema",
        constructor: "On Construtora",
        modalIndex: 3
    },
    {
        src: "img/maquetes_pro/privillege_05/1.JPG",
        alt: "Desert Oasis",
        titulo: "Privilége",
        constructor: "On Construtora",
        modalIndex: 4
    },
    {
        src: "img/maquetes_pro/serena_tucuruvi_06/1.png",
        alt: "Tropical Resort",
        titulo: "Serena Tucuruvi",
        constructor: "",
        modalIndex: 5
    },
    {
        src: "img/maquetes_pro/centro_alimenticio_marica_07/1.JPG",
        alt: "Mountain Lodge",
        titulo: "Centro Alimentício",
        constructor: "",
        modalIndex: 6
    },
    {
        src: "img/maquetes_pro/studio_alfa_08/1.png",
        alt: "Lake View House",
        titulo: "Studio Alfa",
        constructor: "",
        modalIndex: 7
    }
];

// Inicializar carrossel da galeria
function initGaleriaCarousel() {
    if (!galeriaCarousel) return;
    
    galeriaCarousel.innerHTML = '';
    
    galeriaCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'carousel-item cursor-pointer relative w-full h-[400px] md:h-[500px] overflow-hidden group bg-black flex-shrink-0';
        cardElement.onclick = () => openModal(card.modalIndex);
        
        cardElement.innerHTML = `
            <img src="${card.src}" alt="${card.alt}" class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60">
            <div class="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/40 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                <svg class="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>
            </div>

            <div class="absolute bottom-0 left-0 w-full p-5 z-30 flex flex-col gap-2 transition-transform duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div>
                    <h3 class="text-white text-lg font-bold leading-tight">${card.titulo}</h3>
                    ${card.constructor ? `<p class="text-gray-300 text-xs font-light mt-1">${card.constructor}</p>` : ''}
                </div>
                <div class="flex items-center gap-1.5 mt-2">
                    <svg class="w-3.5 h-3.5 text-white/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <g transform="rotate(-45 12 12)">
                            <rect x="3" y="8" width="18" height="8" />
                            <path d="M6 16v-2.5 M9 16v-4 M12 16v-2.5 M15 16v-4 M18 16v-2.5" />
                        </g>
                    </svg>
                    <span class="text-white/80 text-xs font-medium">1:50</span>
                </div>
            </div>
        `;
        
        galeriaCarousel.appendChild(cardElement);
    });
    
    initGaleariaDots();
}

// Inicializar dots da galeria
function initGaleariaDots() {
    if (!galeariaDots) return;
    
    galeariaDots.innerHTML = '';
    
    galeriaCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => scrollToGaleriaItem(index);
        galeariaDots.appendChild(dot);
    });
}

// Atualizar dots da galeria baseado na posição do scroll
function updateGaleariaDots() {
    if (!galeriaCarousel) return;
    
    const scrollLeft = galeriaCarousel.scrollLeft;
    const itemWidth = galeriaCarousel.clientWidth;
    
    document.querySelectorAll('#galeariaDots .dot').forEach((dot, index) => {
        if (Math.abs(scrollLeft - index * itemWidth) < itemWidth / 2) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Navegar com setas na galeria
function scrollGaleria(direction) {
    if (!galeriaCarousel) return;
    
    const itemWidth = galeriaCarousel.clientWidth;
    const scrollAmount = itemWidth * direction;
    galeriaCarousel.scrollLeft += scrollAmount;
}

// Rolar para item específico na galeria
function scrollToGaleriaItem(index) {
    if (!galeriaCarousel) return;
    
    const itemWidth = galeriaCarousel.clientWidth;
    galeriaCarousel.scrollLeft = itemWidth * index;
}

// Expondo as funções globalmente para que possam ser chamadas do HTML
window.scrollGaleria = scrollGaleria;

// Atualizar dots ao rolar na galeria
if (galeriaCarousel) {
    galeriaCarousel.addEventListener('scroll', updateGaleariaDots);
}

// Inicializar carrossel da galeria na carga da página
document.addEventListener('DOMContentLoaded', initGaleriaCarousel);