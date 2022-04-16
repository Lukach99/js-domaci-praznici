const tekst =
  "Ivan je ucenik. Ucenje je njegova velika ljubav. njegova svrha je ucenje. Ivan ima 150 IQ. Ivan sudjeluje u natjecanju do 150 IQ. ivan je pametan. On je pobjednik.";

const bikonja = {
  ivan: "Bikonja",
  ucenik: "bik",
  ucenje: "korida",
  150: "850",
  iq: "kg",
  natjecanju: "razbadanju",
  pametan: "najjaci",
  pobjednik: "sampion",
};
const zekonja = {
  ivan: "Zekonja",
  ucenik: "bik",
  ucenje: "korida",
  150: "650",
  iq: "kg",
  natjecanju: "razbadanju",
  pametan: "slabic",
  pobjednik: "luzercina",
};

function capitalize(word) {
  return `${word.charAt(0).toUpperCase() + word.slice(1)}`;
}

function wordChange(text, translation) {
  const sentences = text.split(". ");
  const newSentences = [];

  sentences.forEach((sentence) => {
    const words = sentence.split(" ");
    const newWords = [];
    words.forEach((word) => {
      translation[word.toLowerCase()]
        ? newWords.push(translation[word.toLowerCase()])
        : newWords.push(word);
    });

    newSentences.push(capitalize(newWords.join(" ")));
  });

  return newSentences.join(". ");
}

console.log(wordChange(tekst, bikonja));
console.log(wordChange(tekst, zekonja));

/*   Ivan > Bikonja
Ucenik > Bik
Ucenje > Korida
150 > 850
IQ > kg
Natjecanju > Razbadanju
Pametan > Najjaci
Pobjednik > Sampion */
