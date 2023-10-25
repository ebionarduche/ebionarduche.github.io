import projectRecipesApp from './images-projects/imagem-recipes-app.png';
import projectTFC from './images-projects/image-tfc.png'; 
import projectPort from './images-projects/image-port.png';

const projects = [
    {
        image: projectRecipesApp,
        screen: 'mobile-img',
        projectName: 'Recipes App (Mobile)',
        subTitle: 'Front-end',
        description: 'Receitas App é um aplicativo mobile que permite acessar uma ampla variedade de receitas, incluindo refeições e drinks. Com ele, você pode pesquisar por nome de alimentos e nome de receitas.',
        skills: ['JavaScript', 'React', 'CSS', 'BrowserRouter', 'ContextAPI', 'RTL', 'Redux', 'Bootstrap'],
        Rlink: 'https://github.com/ebionarduche/App-De-Receitas-Mobile',
        Plink: 'https://app-de-receitas-psi.vercel.app/',
    },
    {
        image: projectTFC,
        screen: 'desktop-img',
        projectName: 'Table Futebol Club',
        subTitle: 'Back-end',
        description: 'Este projeto inclui uma API desenvolvida em Node.js que permite criar, editar, excluir e selecionar partidas.',
        skills: ['TypeScript', 'NodeJs', 'POO', 'Sequelize', 'MySql', 'Sinon', 'Mocka', 'Docker', 'JWT' ],
        Rlink: 'https://github.com/ebionarduche/TFC',
        Plink: null,
    },
    {
        image: projectPort,
        screen: 'desktop-img',
        projectName: 'Portfolio',
        subTitle: 'Front-end',
        description: 'lorel lorelm isoppos lorem lorem loem lorem loremmm loerks poaklsdl çpl.',
        skills: ['JavaScript', 'React', 'CSS', 'ContextAPI' ],
        Rlink: 'https://github.com/ebionarduche/App-De-Receitas-Mobile',
        Plink: 'https://app-de-receitas-psi.vercel.app/',
    },
];

export default projects;
