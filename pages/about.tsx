import Navigation from "@components/navigation";
export default function About() {
  return (
    <>
      <Navigation />
      <div style={{ margin: "2rem" }}>
        <header>
          <h1>Sobre:</h1>
        </header>
        <div>
          <p>
          Gustavo é natural de Teresópolis, nasceu em 10 de setembro de 1992, e hoje atua como desenvolvedor na Alterdata Software, na mesma cidade. Trabalhou como garçom e vendedor durante muito tempo e desde que decidiu ingressar na carreira como programador, quis compartilhar as suas experiências para tentar ajudar outras pessoas a trilharem novos rumos. Essa plataforma vai documentar os momentos da carreira, para acompanhar o crescimento e as dificuldades durante esse processo.
          </p>
          <p>
            Compartilhar essas experiencias aqui são uma forma de se manter
            desenvolvendo e de incentivaras pessoas a mudarem de vida em busca
            de algo melhor. A programação é difícil, mas não é impossível.
            Porém, diferente do que todos costumam fazer, colocando a
            programação como algo mágico e que resolverá todos os seus
            problemas, aqui vou compartilhar as partes boas e ruins dessa vida,
            os percalços e todas as dificuldades e problemas. Não farei isso
            para te desanimar, muito pelo contrário, isso é para que você
            justamente não desanime quando essas coisas acontecerem.
          </p>
        </div>
      </div>
    </>
  );
}
