let herois = [
  { nome: "Jean Licks", xp: 10001 },
];

for (let i = 0; i < herois.length; i++) {
  let Heroi = herois[i].nome;
  let Experiencia = herois[i].xp;

  if (Experiencia <= 1000) {
    console.log(`Herói de nome ${Heroi} está no nível Ferro`);
  } else if (Experiencia <= 2000) {
    console.log(`Heroi de nome ${Heroi} está no nível Bronze`);
  } else if (Experiencia <= 5000) {
    console.log(`Heroi de nome ${Heroi} está no nível Prata`);
  } else if (Experiencia <= 7000) {
    console.log(`Heroi de nome ${Heroi} está no nível Ouro`);
  } else if (Experiencia <= 8000) {
    console.log(`Heroi de nome ${Heroi} está no nível Platina`);
  } else if (Experiencia <= 9000) {
    console.log(`Heroi de nome ${Heroi} está no nível Ascendente`);
  } else if (Experiencia <= 10000) {
    console.log(`Heroi de nome ${Heroi} está no nível Imortal`);
  } else {
    console.log(`Heroi de nome ${Heroi} está no nível Radiante`);
  }
}
