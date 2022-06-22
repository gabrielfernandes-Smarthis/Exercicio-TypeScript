const spaceships = [];

function addSpaceShip(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  spaceships.push(spaceship);

  alert(`A nave ${spaceship.name} foi cadastrada`);
}

function findSpaceShip(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => ship.name === name);

  return spaceship;
}

function adicionarMembro(
  crewMember: string,
  spaceship: { name: string; crewLimit: number; crew: string[] }
) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert(`A nave ${spaceship.name} já está cheia`);
  } else {
    spaceship.crew.push(crewMember);
    alert(`Membro ${crewMember} foi adiocionado com sucesso`);
  }
}

function sendInMission(spaceship: {
  name: string;
  crewLimit: number;
  crew: string[];
  inMission: boolean;
}) {
  if (spaceship.inMission === true) {
    alert(`A nave ${spaceship.name} já está em uma missão`);
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`A nave ${spaceship.name} não pode ser enviada`);
  } else {
    spaceship.inMission = true;
    alert(`A nave ${spaceship.name} foi enviada em missão`);
  }
}
//Perguntas Menu
function adicionarNave() {
  const name = prompt("Qual o nome da sua nave");
  const pilot = prompt(`Qual o nome do piloto da ${name}`);
  const crewLimit = Number(prompt("Qual a quantidade limite de tripulantes"));

  addSpaceShip(name, pilot, crewLimit);
}

function adicionarNomeMembro() {
  const Membro = prompt("Digite o nome do membro que voce deseja adiocionar");
  const spaceshipName = prompt(
    `Voce quer adicionar o membro ${Membro} para qual nave ?`
  );

  const spaceship = findSpaceShip(spaceshipName);
  if (spaceship) {
    const confirmation = confirm(
      `Voce confirma adicionar o membro ${Membro} para a nave ${spaceshipName} ?`
    );

    if (confirmation) {
      adicionarMembro(Membro, spaceship);
    }
  }
}

function enviarNave() {
  const spaceshipName = prompt("Qual nave voce deseja enviar para missão");

  const spaceship = findSpaceShip(spaceshipName);

  if (spaceship) {
    const confirmation = confirm(
      `Voce confirma que quer mandar a nave ${spaceshipName} para uma missão ?`
    );
    if (confirmation) {
      sendInMission(spaceship);
    }
  }
}

function listarNaves() {
  let lista = prompt("Naves resgistragas:\n");

  spaceships.forEach(
    (spaceship: {
      name: string;
      pilot: string;
      crewLimit: number;
      crew: string[];
      inMission: boolean;
    }) => {
      lista += `
      Nave: ${spaceship.name}
      Piloto: ${spaceship.pilot}
      Em missão: ${spaceship.inMission ? "Sim" : "Nao"}
      Quantidade de tripulantes: ${spaceship.crew.length}
      Quantidade limite de tripulantes: ${spaceship.crewLimit}
      Membros:
      `;

      spaceship.crew.forEach((member) => {
        lista += `  - ${member}\n`;
      });
    }
  );

  alert(lista);
}

let numeroPergunta = 0;

while (numeroPergunta !== 5) {
  const pergunta = prompt(`
    1 - Adicionar Nave
    2 - Adicionar membro para uma nave
    3 - Enviar uma nave para uma missão
    4 - Listar naves
    5 - Sair
  `);

  numeroPergunta = Number(pergunta);

  switch (numeroPergunta) {
    case 1:
      adicionarNave();
      break;
    case 2:
      adicionarNomeMembro();
      break;
    case 3:
      enviarNave();
      break;
    case 4:
      listarNaves();
      break;
    case 5:
      alert("Fechando o sistema");
      break;

    default:
      break;
  }
}
