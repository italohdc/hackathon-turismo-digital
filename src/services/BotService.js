const phraseGenerator = (phrase) => {
  const availablePhrases = {
    passeio: 'Legal, qual tipo de passeio gostaria de fazer?',
    lugar: 'Bacana qual tipo de lugar você gosta?',
    historico: 'Temos algumas opções de passeios como a igreja xpto e casa da Joana',
    museu: 'Temos perto o museu do dia e o museu da pesca',
    praca: 'Por perto tem a praça dos passarinhos',
    exposicao: 'Temos a esposição do pintor João',
    cultural: 'Temos hoje a apresentação do grupo de dança xalalala',
    teatro: 'Hoje teremoras apresentação do grupo xololo',
    praia: 'A praia mais proxima é a da areia dourada',
    lago: 'O lago negro é o lago mais próximo da cidade',
    parque: 'O parque das árvores fica próximo a seu hotel',
    almoço: 'Temos algumas opções de restaurantes italianos e franceses proximos',
    jantar: 'Temos algumas opções de restaurantes italianos e franceses proximos',
    italiano: 'O restaurante da mama faz um grande sucesso, gostaria de ir la?',
    frances: 'O restaurante do Jaqckin faz um grande sucesso, gostaria de ir la?',
    lanche: 'A lanchonete da zeze fica proxima gostaria de ir la',
  };

  const phraseLowerCase = phrase.toLowerCase();
  const keyToReturn = Object.keys(availablePhrases)
    .find(key => phraseLowerCase.includes(key.toLowerCase()));

  if (keyToReturn) {
    return availablePhrases[keyToReturn];
  }

  return 'Não entendi sua pergunta. Você poderia perguntar de uma forma diferente?';
};

export default phraseGenerator;
