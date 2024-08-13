const dados = [
    {
        "nome": "Imediatismo + Insegurança + Síndrome do Impostor - Você está PRONTO(A)?",
        "descricao": "Uma conversa sobre carreira em TI do canal guia anonima",
        "link": "https://youtu.be/tOTmwBxP5p0?si=SO7q-QHaWHAVeE7X",
        "categoria": "Carreira"
    },
    {
        "nome": "Curso de Redes de Computadores",
        "descricao": "Curso de Redes de Computadores",
        "link": "https://youtube.com/playlist?list=PLucm8g_ezqNpGh95n-OdEk06ity7YYfvU&si=XA34YbMw0GdFo3zR",
        "categoria": "Redes"
    },
    {
        "nome": "Curso de Programação Competitivas",
        "descricao": "Curso de Programação Competitiva",
        "link": "https://youtube.com/playlist?list=PLU2KWF7n4KZzvYwAk7h2LAx4Td0kadh-T&si=q1ji2KR_YwmGxzmb",
        "categoria": "C"
    },
    {
        "nome": "CURSO COMPLETO JAVASCRIPT",
        "descricao": "POO javascript",
        "link": "https://youtube.com/playlist?list=PLTULYczsbNmoLrNyVESgaqJTxMUEPl9Gv&si=HvqzHuYezKqsie3K",
        "categoria": "Javascript"
    },
    {
        "nome": "Laravel para iniciantes",
        "descricao": "Laravel para iniciantes",
        "link": "https://youtube.com/playlist?list=PLInBAd9OZCzylabwvLeJIa9gxbS7MmzNY&si=5Ip7W7XiYdzFNw1u",
        "categoria": "Laravel"
    },
    {
        "nome": "Curso de POO Java",
        "descricao": "Curso de POO Java",
        "link": "https://youtube.com/playlist?list=PLHz_AreHm4dkqe2aR0tQK74m8SFe-aGsY&si=DsJqnlPIeLEb7uc5",
        "categoria": "Java"
    },
    {
        "nome": "Estruturas de dados em C",
        "descricao": "Estruturas de dados em C",
        "link": "https://youtube.com/playlist?list=PLqJK4Oyr5WSjQ584hwqaHJYDpDcYqS-HK&si=YywLZB6fZSRuHV7G",
        "categoria": "C"
    }
]

const res = document.getElementById('courses')
function fetchData() {
    // Usando forEach em vez de map para modificar o DOM
    dados.forEach(d => {
        res.innerHTML += `
            <article class="course">
                <h2>${d.nome}</h2>
                <p>${d.descricao}</p>
                <p>${d.categoria}</p>
                <a href="${d.link}" target="_blank">Assistir Curso</a>
            </article>
        `;
    });
}
function filters() {
    const inputElement = document.getElementById('input');
    const text = inputElement.value.trim(); 

    res.innerHTML = ''; 

    const filteredData = dados.filter(d => d.categoria.toLowerCase() === text.toLowerCase());

    if (filteredData.length === 0) {
        res.innerHTML = '<p>Nenhum curso encontrado para a categoria fornecida.</p>';
    } else {
        filteredData.forEach(d => {
            res.innerHTML += `
                <article class="course">
                    <h2>${d.nome}</h2>
                    <p>${d.descricao}</p>
                    <p>${d.categoria}</p>
                    <a href="${d.link}" target="_blank">Assistir Curso</a>
                </article>
            `;
        });
    }  
    inputElement.value = '';
}
fetchData();
  
