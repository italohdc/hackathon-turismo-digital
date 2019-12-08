async function questions (phrase) {
    
    let find;
    const questions_and_answers = {
        'passeio':'Legal, qual tipo de passeio gostaria de fazer?',
        'lugar':'Bacana qual tipo de lugar você gosta?',
        'historico':'Temos algumas opções de passeios como a igreja xpto e casa da Joana',
        'museu':'Temos perto o museu do dia e o museu da pesca',
        'praca':'Por perto tem a praça dos passarinhos',
        'exposicao':'Temos a esposição do pintor João',
        'cultural':'Temos hoje a apresentação do grupo de dança xalalala',
        'teatro':'Hoje teremoras apresentação do grupo xololo',
        'praia':'A praia mais proxima é a da areia dourada',
        'lago':'O lago negro é o lago mais próximo da cidade',
        'parque':'O parque das árvores fica próximo a seu hotel',
        'almoço':'Temos algumas opções de restaurantes italianos e franceses proximos',
        'jantar':'Temos algumas opções de restaurantes italianos e franceses proximos',
        'italiano':'O restaurante da mama faz um grande sucesso, gostaria de ir la?',
        'frances':'O restaurante do Jaqckin faz um grande sucesso, gostaria de ir la?',
        'lanche':'A lanchonete da zeze fica proxima gostaria de ir la',
    };

    var find = Object.keys(questions_and_answers).some(function(key) {
        return phrase.test(key);
    });

    console.log(find);

    /* var find = Object.keys(questions_and_answers).some(function(key) {
        console.log(phrase.indexOf(key));
        return phrase.indexOf(key);
    });
 */

    /* keys = Object.keys(questions_and_answers);
    var containPhrase = (keys.indexOf(phrase) > -1);
    console.log(containPhrase); */

    /* find = Object.keys(questions_and_answers=> {
        console.log(phrase.contains(key));
        const regex = phrase.contains(key);
        if (regex) find = questions_and_answers[key];
    });
 */

    if (!find) find = "não entendi sua pergunta, poderia fazer novamente";

    return find;
}

exports.questions;