function toggleDarkMode() { 
    const body = document.body;
    const header = document.querySelector('header');
    const menuLinks = document.querySelectorAll('.menu-list a');
    const button = document.querySelector('.dark-mode-btn');

    // Alterna as classes para modo escuro
    const isDarkMode = body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');

    menuLinks.forEach(link => {
        link.classList.toggle('dark-mode');
    });

    // Atualiza o texto do botão com base no estado atual e na linguagem atual
    button.textContent = isDarkMode ? texts[currentLanguage].lightMode : texts[currentLanguage].darkMode;

    // Salva a preferência do usuário no Local Storage
    localStorage.setItem('darkMode', isDarkMode);
}

// Verifica a preferência de modo escuro no carregamento da página
function checkDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        toggleDarkMode();
    }
}

// Menu Responsivo
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');

// Adiciona evento de clique ao menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuList.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (para dispositivos móveis)
menuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menuList.classList.remove('active');
    });
});

// Verifica a preferência de modo escuro quando a página é carregada
document.addEventListener('DOMContentLoaded', checkDarkModePreference);

function sendEmail(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Contato de ${name}`;
    const body = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`;
    
    // Codifica o assunto e corpo para o URL
    const mailtoLink = `mailto:seuemail@exemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink; // Redireciona para o link de email
}

let currentLanguage = 'pt-br';

const texts = {
    'pt-br': {
        title: "Bem-vindo ao meu Portfólio",
        description: "Sou um desenvolvedor apaixonado por criar códigos incríveis...",
        aboutTitle: "Sobre Mim",
        aboutDescription: "Eu sou um desenvolvedor que ama resolver problemas e criar soluções eficazes.",
        contactTitle: "Contato",
        darkMode: "Modo Claro",
        lightMode: "Modo Escuro",
        projects: [
            {
                title: "Calculadora Interativa em C#",
                description: "Desenvolvi um código na linguagem C# que apresenta um menu com 10 opções, permitindo a realização de cálculos matemáticos.",
                link: "Visualizar Projeto"
            },
            {
                title: "Cálculos da Matéria Escura",
                description: "Desenvolvimento de um software utilizando Windows Forms para realizar cálculos referentes à massa ou densidade da matéria escura.",
                link: "Visualizar Projeto"
            }
        ]
    },
    'en': {
        title: "Welcome to my Portfolio",
        description: "I am a developer passionate about creating amazing code...",
        aboutTitle: "About Me",
        aboutDescription: "I am a developer who loves solving problems and creating effective solutions.",
        contactTitle: "Contact",
        darkMode: "Light Mode",
        lightMode: "Dark Mode",
        projects: [
            {
                title: "Interactive Calculator in C#",
                description: "I developed code in C# that presents a menu with 10 options, allowing for various mathematical calculations.",
                link: "View Project"
            },
            {
                title: "Dark Matter Calculations",
                description: "Development of software using Windows Forms to perform calculations regarding the mass or density of dark matter.",
                link: "View Project"
            }
        ]
    },
    'es': {
        title: "Bienvenido a mi Portafolio",
        description: "Soy un desarrollador apasionado por crear código increíble...",
        aboutTitle: "Sobre Mí",
        aboutDescription: "Soy un desarrollador que ama resolver problemas y crear soluciones efectivas.",
        contactTitle: "Contacto",
        darkMode: "Modo Claro",
        lightMode: "Modo Oscuro",
        projects: [
            {
                title: "Calculadora Interactiva en C#",
                description: "Desarrollé un código en C# que presenta un menú con 10 opciones, permitiendo realizar cálculos matemáticos.",
                link: "Visualizar Proyecto"
            },
            {
                title: "Cálculos de Materia Oscura",
                description: "Desarrollo de un software utilizando Windows Forms para realizar cálculos sobre la masa o densidad de la materia oscura.",
                link: "Visualizar Proyecto"
            }
        ]
    },
    'fr': {
        title: "Bienvenue dans mon Portfolio",
        description: "Je suis un développeur passionné par la création de code incroyable...",
        aboutTitle: "À Propos de Moi",
        aboutDescription: "Je suis un développeur qui aime résoudre des problèmes et créer des solutions efficaces.",
        contactTitle: "Contact",
        darkMode: "Mode Clair",
        lightMode: "Mode Sombre",
        projects: [
            {
                title: "Calculatrice Interactive en C#",
                description: "J'ai développé un code en C# qui présente un menu avec 10 options, permettant d'effectuer des calculs mathématiques.",
                link: "Voir le Projet"
            },
            {
                title: "Calculs de Matière Sombre",
                description: "Développement d'un logiciel utilisant Windows Forms pour effectuer des calculs concernant la masse ou la densité de la matière sombre.",
                link: "Voir le Projet"
            }
        ]
    },
    'it': {
        title: "Benvenuto nel mio Portfolio",
        description: "Sono uno sviluppatore appassionato di creare codice straordinario...",
        aboutTitle: "Chi Sono",
        aboutDescription: "Sono uno sviluppatore che ama risolvere problemi e creare soluzioni efficaci.",
        contactTitle: "Contatto",
        darkMode: "Modalità Chiara",
        lightMode: "Modalità Scura",
        projects: [
            {
                title: "Calcolatrice Interattiva in C#",
                description: "Ho sviluppato un codice in C# che presenta un menu con 10 opzioni, permettendo di eseguire calcoli matematici.",
                link: "Visualizza Progetto"
            },
            {
                title: "Calcoli della Materia Oscura",
                description: "Sviluppo di un software utilizzando Windows Forms per eseguire calcoli relativi alla massa o densità della materia oscura.",
                link: "Visualizza Progetto"
            }
        ]
    },
    'ar': {
        title: "مرحبا بكم في محفظتي",
        description: "أنا مطور متحمس لإنشاء كود مذهل...",
        aboutTitle: "عني",
        aboutDescription: "أنا مطور أحب حل المشكلات وإنشاء حلول فعالة.",
        contactTitle: "اتصل",
        darkMode: "الوضع الفاتح",
        lightMode: "الوضع المظلم",
        projects: [
            {
                title: "آلة حاسبة تفاعلية بلغة C#",
                description: "طورت كودًا بلغة C# يقدم قائمة تحتوي على 10 خيارات، مما يسمح بإجراء عمليات حسابية رياضية.",
                link: "عرض المشروع"
            },
            {
                title: "حسابات المادة المظلمة",
                description: "تطوير برنامج باستخدام Windows Forms لإجراء حسابات تتعلق بكتلة أو كثافة المادة المظلمة.",
                link: "عرض المشروع"
            }
        ]
    },
    'ru': {
        title: "Добро пожаловать в мое портфолио",
        description: "Я разработчик, увлеченный созданием удивительного кода...",
        aboutTitle: "Обо мне",
        aboutDescription: "Я разработчик, который любит решать проблемы и создавать эффективные решения.",
        contactTitle: "Контакт",
        darkMode: "Светлый режим",
        lightMode: "Темный режим",
        projects: [
            {
                title: "Интерактивный калькулятор на C#",
                description: "Я разработал код на C#, который предлагает меню с 10 вариантами для выполнения математических расчетов.",
                link: "Посмотреть проект"
            },
            {
                title: "Расчеты темной материи",
                description: "Разработка программного обеспечения с использованием Windows Forms для выполнения расчетов по массе или плотности темной материи.",
                link: "Посмотреть проект"
            }
        ]
    }
};

// Função para alternar a linguagem
function toggleLanguage() {
    const languages = Object.keys(texts);
    const currentIndex = languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    currentLanguage = languages[nextIndex];

    updateText();
}

// Função para atualizar o texto da página
function updateText() {
    const { title, description, aboutTitle, aboutDescription, contactTitle, darkMode, lightMode, projects } = texts[currentLanguage];

    document.querySelector('.hero-content h1').innerText = title;
    document.querySelector('.hero-content p').innerText = description;
    document.querySelector('.about-section h2').innerText = aboutTitle;
    document.querySelector('.about-section p').innerText = aboutDescription; // Adiciona descrição sobre mim
    document.querySelector('#contact h2').innerText = contactTitle;

    // Atualiza o texto do botão de modo escuro
    const button = document.querySelector('.dark-mode-btn');
    button.textContent = localStorage.getItem('darkMode') === 'true' ? lightMode : darkMode;

    // Atualiza os projetos
    const projectContainer = document.querySelector('.project-grid');
    projectContainer.innerHTML = ''; // Limpa projetos existentes

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <img src="proj${projects.indexOf(project) + 1}.png" class="about-image" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="#" download>${project.link}</a>
        `;
        projectContainer.appendChild(projectElement);
    });
}

// Chama a função de atualização de texto ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    checkDarkModePreference();
    updateText();
});