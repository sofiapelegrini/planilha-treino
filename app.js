const menu = [
    {
        id:1,
        title:"Exercício 1 - Agachamento",
        category:"Segunda",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/agachamento-com-barra.webp",
        desc: `1) Apoie o peso na região do trapézio e retire-o do suporte. 2) Com a coluna reta, estabilize o tronco, mantenha os pés paralelos aos ombros, as escápulas encaixadas para trás e o abdômen contraído. 3) Desça o tronco, flexione os joelhos e movimente o quadril para trás, durante esse movimento, o tronco se inclina para frente e a coluna permanece reta. 4) Eleve o tronco por meio da extensão dos joelhos, trazendo o quadril para frente. 5) Ao finalizar suas repetições, coloque a barra de volta ao seu suporte.`,
        
    },

    {
        id:2,
        title:"Exercício 2 - Leg Press 45°",
        category:"Segunda",
        number: "4 x 10",
        descanso: "60'",
        img: "./images/pernas-leg-press-45-tradicional.webp",
        desc: `1) Comece sentado no aparelho e com os pés no centro da plataforma e paralelos aos ombros. 2) Estenda os joelhos, empurrando a plataforma para frente, e destrave o peso. 3) Segure as alças do aparelho para auxiliar a estabilização e deixe as costas e a lombar fixadas no banco. 4) Desça o peso cuidadosamente, flexionando os joelhos em aproximadamente 90º. 5) Empurre a plataforma para frente com a força das coxas até estender os joelhos. 6) Ao término do exercício, trave os pesos e saia do equipamento.`,
    },

    {
        id: 3,
        title: "Exercício 3 - Panturrilha",
        category: "Segunda",
        number: "4 x 15",
        descanso: "60'",
        img: "./images/elevacao-de-panturillha-em-pe.webp",
        desc: `1) Comece em pé em cima de um bloco, posicione as pontas dos pés no objeto e mantenha as pernas paralelas aos ombros. 2) Pressione as pontas dos pés em cima do bloco, erguendo os calcanhares. 3) Faça uma pausa rápida, e retorne à posição inicial, alongando a panturrilha.`,
    },
    
    {
        id: 4,
        title:"Exercício 1 - Puxada pulley",
        category: "Terça",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/costas-puxada-aberta-1.webp",
        desc: `1) Na máquina pulley, segure a barra com uma pegada aberta, em uma distância maior que a largura dos ombros. 2) Com os braços estendidos, leve o tronco para trás formando um ângulo em torno de 30º, ao mesmo tempo em que cria uma leve curvatura na região lombar e estufe o peito. 3) Exale o ar e traga a barra para baixo. Ao atingir a posição de contração total, comprima os músculos das costas. 4) Segure a posição contraída por um segundo, comprimindo as escápulas. 5) Levante a barra lentamente, inalando o ar, até que os braços estejam totalmente estendidos.`,
    },
    
    {
        id: 5,
        title:"Exercício 2 - Remada sentado",
        category: "Terça",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/remada-sentado.webp",
        desc: `1) Sente-se na máquina de cabos e prenda o triângulo. 2) Estique os braços para pegar o acessório, puxando-o em direção à parte inferior do peitoral. 3) Volte com o acessório à posição inicial.`,
    },
    
    {
        id: 6,
        title: "Exercício 3 - Remada curvada ",
        category: "Terça",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/remada-curvada.webp",
        desc: `1) Para começar, fique em pé, com as pernas afastadas e os joelhos flexionados. 2) Segure a barra com as mãos paralelas aos ombros e com as palmas viradas para a frente. 3) Deixe a coluna reta e encaixe os ombros, incline o tronco para a frente, jogando o quadril para trás. 4) Mantenha os cotovelos estendidos até que a barra fique na altura das coxas, e contraia os bíceps. 5) Puxe a barra até a cintura, ao mesmo tempo em que flexiona os cotovelos. 6) Segure a contração por um momento e retorne à posição inicial.`,
    },
    
    {
        id: 7,
        title:"Exercício 1 - Peck deck ",
        category: "Quarta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/voador-no-aparelho.webp",
        desc: `1) Sente-se na máquina com as costas retas no suporte do equipamento. 2) Segure as alças de modo que os antebraços fiquem paralelos ao chão. 3) Movimente as alças para o centro de modo devagar, aproximando os braços e levando-os para o centro, ao mesmo tempo em que comprime o peito no meio e exala o ar. 4) Segure a contração por um segundo e volte lentamente ao posicionamento original até que o peito esteja completamente alongado, ao mesmo tempo em que inala o ar.`,
    },
    
    {
        id: 8,
        title:"Exercício 2 - Supino reto",
        category: "Quarta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/supino-reto.webp",
        desc: `1) Deite-se em um banco reto. 2) Os joelhos devem estar flexionados, os pés firmes no suporte ou chão e as costas levemente arqueadas. 3) Pegue a barra com as mãos posicionadas em uma distância maior do que a largura dos ombros. 4) Retire o peso do suporte, segurando-o na linha do peito com os cotovelos estendidos. 5) Desça a barra até o peito de maneira controlada com os punhos retos, fazendo o movimento de flexão dos cotovelos para baixo. 6) Faça uma pequena pausa e empurre a barra para cima. 7) Ao finalizar as repetições, devolva a barra ao suporte.`,
    },
    
    {
        id: 9,
        title: "Exercício 3 - Tríceps corda ",
        category: "Quarta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/triceps-corda.webp",
        desc: `1) Prenda uma corda a uma polia alta no equipamento de cabo e segure-a com uma pegada neutra. 2) Fique em pé, com o tronco reto e uma ligeiramente inclinado para frente. Os antebraços devem estar próximos ao corpo e perpendiculares ao chão. 3) Use o tríceps para abaixar a corda, levando cada lado do acessório até as coxas, ao mesmo tempo em que exala o ar. 4) Segure a posição contraída durante um segundo e lentamente erga a corda, retornando ao posicionamento original, ao mesmo tempo em que exala o ar.`,
    },
    
    {
        id: 10,
        title: "Exercício 1 - Deadlift",
        category: "Quinta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/deadlift.webp",
        desc: `1) Com a coluna vertebral reta e os cotovelos bloqueados, levante a barra até o nível dos quadris. 2)Depois, devolva lentamente a barra ao solo, retornando à posição inicial.`,
    },

    {
        id: 11,
        title: "Exercício 2 - Passada ",
        category: "Quinta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/avanco.webp",
        desc: `1) Fique em pé, com os pés afastados na largura dos ombros, segure um haltere fixo em cada mão e deixe os braços estendidos ao lado do corpo. 2) Leve um pé mais para a frente e flexione o joelho dessa perna em 90º. 3) Retorne à posição inicial, trazendo o pé de trás para a frente. Na próxima repetição, alterne o pé que fica na parte da frente do corpo. 4) Quando o corpo for projetado para frente, o tronco deve ficar reto e o peso do corpo deve ficar na perna que avançou.`,
    },

    {
        id: 12,
        title: "Exercício 3 - Coice no cabo",
        category: "Quinta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/coice.webp",
        desc: `1) Abaixe a alça do cabo até a altura do tornozelo. 2) Posicione-se em pé, de frente para a máquina com os pés a uma distância equivalente à largura dos quadris. 3) Prenda um dos pés na alça do cabo e segure a máquina com uma das mãos. 4) Com o peito elevado, use os glúteos para puxar o cabo, levando o pé preso na alça para trás. 5) Após fazer uma pausa, retorne à posição original e troque de pé.`,
    },

    {
        id: 13,
        title: "Exercício 1 - Desenvolvimento",
        category: "Sexta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/desenvolvimento.webp",
        desc: `1) Sente-se em um banco com as costas retas, segure um haltere em cada mão na altura dos ombros e com os cotovelos dobrados. 2) Em seguida, leve os halteres para cima no sentido vertical até esticar os braços. 3) Movimente os halteres para baixo, na altura dos ombros.`,
    },


    {
        id: 14,
        title: "Exercício 2 - Elevação lateral",
        category: "Sexta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/elevacao-lateral.webp",
        desc: `1) Fique em pé e posicione os seus pés paralelos aos ombros. 2) Segure um halter em cada mão, na altura das coxas e deixe os cotovelos levemente flexionados. 3) Eleve os halteres lateralmente, fazendo o movimento de abdução dos ombros, até os braços ficarem paralelos ao chão. 4) Contraia bem os músculos e desça lentamente os halteres e volte à posição original.`,
    },

    {
        id: 15,
        title: "Exercício 3 - Remada alta",
        category: "Sexta",
        number: "4 x 12",
        descanso: "60'",
        img: "./images/remada-alta.webp",
        desc: `1) Comece em pé e segure um halter em cada mão, com as palmas para frente. 2) Deixe os braços estendidos ao lado do corpo e os cotovelos levemente dobrados. 3) No início, os halteres ficam apoiados nas coxas, em seguida, levante os halteres com a lateral dos ombros, flexionando os cotovelos e exale o ar durante o movimento. 4) O movimento termina quando os halteres quase tocarem o queixo. 5) Logo depois, pare por uma segundo nessa posição e então volte devagar à posição inicial.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//load itens
window.addEventListener("DOMContentLoaded", function(){
   displayMenuItems(menu);
   displayMenuButtons();
});

//jquery
$(document).ready(function(){
    $("button").click(function(){
        $("button").removeClass("buttonClicked");
        $(this).addClass("buttonClicked");
    });
});

//map method: iteração, criação novo array  
function displayMenuItems(menuItems){
    let displayMenu= menuItems.map(function(item){

        //template string
        return `<article class="menu-item" >
            <img src=${item.img} class="photo" alt=${item.title}/>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="number">${item.number}</h4>
                    <h4 class="descanso" >${item.descanso}</h4>
                    <label class="check" id="checkbox">
                        <input type="checkbox" value="background" class="option__input">
                    </label>
                </header>
                <p class="item-text"> ${item.desc}</p>
            </div>
        </article>`    
    });
        displayMenu = displayMenu.join(""); //transformar em uma string
        sectionCenter.innerHTML = displayMenu; //inserindo novo conteúdo no HTML       
}


function displayMenuButtons() {
    //get only unique categories -> reduce (totalAcc, currentValue)
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) { //return T/F
          values.push(item.category); //adiciona
        }
        return values; //retorna valor acumulado
      },["Semana"] //valor inicial
    );

    //iterate and return buttons
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
    .join("");  

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    //filter itens: filter method returns a new array
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
        
        const category = e.currentTarget.dataset.id;//property dataset
    
        const menuCategory = menu.filter(function (menuItem) {    
            if (menuItem.category === category) {
                return menuItem;
            }
        });

        if (category === "Semana") {
            displayMenuItems(menu);
        }else {
            displayMenuItems(menuCategory);
        }
        });
    });
}


