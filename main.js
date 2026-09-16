document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Lógica del Menú Móvil (Hamburguesa) ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            // Alterna entre mostrar y ocultar el menú
            if (mobileMenu.style.display === 'none') {
                mobileMenu.style.display = 'block';
                mobileMenuBtn.innerHTML = '✕'; // Cambia ícono a 'cerrar'
            } else {
                mobileMenu.style.display = 'none';
                mobileMenuBtn.innerHTML = '☰'; // Cambia ícono a 'hamburguesa'
            }
        });

        // Cerrar el menú al hacer clic en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.display = 'none';
                mobileMenuBtn.innerHTML = '☰';
            });
        });
    }

    // --- 2. Manejo básico del envío del formulario de cotización ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const textoOriginal = btn.innerHTML;

            // Estado de interacción de envío
            btn.innerHTML = 'Enviando...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert("¡Solicitud enviada! Un especialista de FleetProof se comunicará contigo.");
                form.reset();
                btn.innerHTML = textoOriginal;
                btn.style.opacity = '1';
            }, 1500);
        });
    }
});