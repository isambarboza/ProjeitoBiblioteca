import React, { useContext, useEffect, useState } from 'react';
import { Image, View, Text, FlatList, TouchableOpacity, Modal, Button, StyleSheet,Alert} from 'react-native';
import { useBatteryLevel } from 'expo-battery';
import {UserContext} from './Context/UserContext';

const Livros = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "O pequeno príncipe", description: "O pequeno príncipe é um clássico da literatura infantil que narra a amizade entre um menino e um piloto de avião. O principezinho vem do asteroide B 612, e encontra o piloto no deserto do Saara. A obra fala de amor, amizade e sobre a sabedoria infantil.", image: require('../assets/Livro - O pequeno príncipe.webp') },
    { id: 2, title: "A cinco passos de você", description: "Stella não é uma adolescente comum. Por conta da fibrose cística, doença crônica que impede que seus pulmões funcionem como deveriam, ela vive a maior parte do tempo no hospital, seguindo à risca seu tratamento na esperança de conseguir um transplante.", image: require('../assets/A cinco passos de você.jpg') },
    { id: 3, title: "O menino do pijama listrado", description: "O menino do pijama listrado é uma fábula sobre amizade em tempos de guerra, e sobre o que acontece quando a inocência é colocada diante de um monstro terrível e inimaginável.", image: require('../assets/O menino do pijama listrado.jpg') },
    { id: 4, title: "É assim que começa", description: "Revelando mais sobre o passado de Atlas e acompanhando a jornada de Lily para abraçar a sua segunda chance, no amor enquanto lida com um ex-marido ciumento.", image: require('../assets/É assim que começa.jpg') },
    { id: 5, title: "A culpa é das estrelas", description: "Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial.", image: require('../assets/A culpa é das estrelas.jpg') },
    { id: 6, title: "Extraordinário", description: "A história de Auggie Pullman, um menino com uma severa deformidade facial que precisa enfrentar o estranhamento e o preconceito de crianças e adultos, se tornou uma ode à empatia, à tolerância e à gentileza.", image: require('../assets/Extraordinário.jpg') },
    { id: 7, title: "A filha perfeita", description: "Hannah e Christopher são o retrato de um casal feliz, com carreiras bem-sucedidas e um casamento em total harmonia. Só faltava um único item nesse cenário perfeito: uma criança.", image: require('../assets/A filha perfeita.webp') },
    { id: 8, title: "1808", description: "1808 narra a chegada da família real ao Rio de Janeiro, acossada pelas tropas do imperador francês Napoleão Bonaparte.", image: require('../assets/1808.webp') },
    { id: 9, title: "O duque e eu - ( Os Bridgertons ) - Livro 1", description: "Simon Basset, o irresistível duque de Hastings, acaba de retornar a Londres depois de seis anos viajando pelo mundo. Rico, bonito e solteiro, ele é um prato cheio para as mães da alta sociedade, que só pensam em arrumar um bom partido para suas filhas. Simon, porém, tem o firme propósito de nunca se casar.", image: require('../assets/O duque e eu – Edição Luxo (Os Bridgertons – Livro 1).jpg') },
    { id: 10, title: "O visconde que me amava - ( Os Bridgertons ) - Livro 2", description: "Ao que tudo indica, o solteiro mais cobiçado do ano será Anthony Bridgerton, um visconde charmoso, elegante e muito rico que, contrariando as probabilidades, resolve dar um basta na rotina de libertino e arranjar uma noiva. Ele logo decide que Edwina Sheffield, a debutante mais linda da estação, é a candidata ideal.", image: require('../assets/O visconde que me amava – Edição Luxo (Os Bridgertons – Livro 2).jpg/') },
    { id: 11, title: "Um perfeito cavalheiro - ( Os Bridgertons ) - Livro 3", description: "Benedict a salva das garras de um bêbado violento, mas, para decepção de Sophie, não a reconhece nos trajes de criada. No entanto, logo se apaixona por ela de novo. Como é inaceitável que um homem de sua posição se case com uma serviçal, ele lhe propõe que seja sua amante, o que para Sophie é inconcebível.", image: require('../assets/Um perfeito cavalheiro – Edição Luxo (Os Bridgertons – Livro 3).jpg') },
    { id: 12, title: "Os segredo de Colin Bridgerton - ( Os Bridgertons ) - Livro 4", description: "Há muitos anos Penelope Featherington frequenta a casa dos Bridgertons. E há muitos anos alimenta uma paixão secreta por Colin, irmão de sua melhor amiga e um dos solteiros mais encantadores e arredios de Londres.", image: require('../assets/Os segredos de Colin Bridgerton – Edição Luxo (Os Bridgertons – Livro 4).jpg') },
    { id: 13, title: "Para Sir Philliph, com amor - ( Os Bridgertons ) - Livro 5", description: "Eloise Bridgerton é uma jovem simpática e extrovertida, cuja forma preferida de comunicação sempre foram as cartas, nas quais sua personalidade se torna ainda mais cativante. Quando uma prima distante morre, ela decide escrever para o viúvo e oferecer as condolências.", image: require('../assets/Para Sir Phillip, com amor – Edição Luxo (Os Bridgertons – Livro 5).jpg') },
    { id: 14, title: "O conde enfeitiçado - ( Os Bridgertons ) - Livro 6", description: "Depois de anos colecionando conquistas amorosas sem nunca entregar seu coração, o libertino mais famoso de Londres enfim se apaixonou. Infelizmente, conheceu a mulher de seus sonhos no jantar de ensaio do casamento dela. Em 36 horas, Francesca se tornaria esposa do primo dele. Mas isso foi no passado.", image: require('../assets/O conde enfeitiçado – Edição Luxo (Os Bridgertons – Livro 6).jpg') },
    { id: 15, title: "Um beijo inesquecível - ( Os Bridgertons ) - Livro 7", description: "O livro narra a história da caçula da família, Hyacinth Bridgerton, uma ruiva cheia de opinião e com uma personalidade singular. Ela está na sua quarta temporada na vida social e sem grandes perspectivas a respeito de encontrar um marido, cansada da mesmice dos bailes e de pessoas que não a desafiavam intelectualmente.", image: require('../assets/Um beijo inesquecível – Edição Luxo (Os Bridgertons – Livro 7).jpg') },
    { id: 16, title: "A caminho do altar - ( Os Bridgertons ) - Livro 8", description: "A caminho do altar, oitavo livro da série Os Bridgertons, é uma história sobre encontros, desencontros e esperança no amor. De forma leve e revigorante, Julia Quinn nos mostra que tudo o que imaginamos sobre paixão à primeira vista é verdade – só precisamos saber onde buscá-la. –O que o senhor vai fazer agora?", image: require('../assets/A caminho do altar – Edição Luxo (Os Bridgertons – Livro 8).jpg/') },
    { id: 17, title: "E viveram felizes para sempre - ( Os Bridgertons ) - Livro 9", description: "lguns finais são apenas o começo... Era uma vez uma família criada por uma autora de romances históricos...A última página de um livro realmente tem que ser o fim da história? Julia Quinn acha que não e, em E viveram felizes para sempre, oferece oito epílogos extras, todos sensuais, engraçados e reconfortantes, e responde aos anseios dos leitores trazendo, ainda, um drama inesperado, um final feliz para um personagem muito merecedor e um delicioso conto no qual ficamos conhecendo melhor ninguém menos que a sábia e espirituosa matriarca Violet Bridgerton.", image: require('../assets/E Viveram Felizes para Sempre – Edição Luxo (Os Bridgertons – Livro 9).jpg') },
    { id: 18, title: "O diário de Hass - Volume 1", description: "Com apenas sete anos, Hass é assombrado por terríveis experiências sobrenaturais e pesadelos vívidos que aterrorizam suas noites.", image: require('../assets/O diário de Hass - Volume 1.jpg') },
    { id: 19, title: "O diário de Hass - Volume 2", description: "Um local onde crianças são obrigadas a enfrentar um complexo ritual, que decidirá para sempre o rumo de suas vidas. Hass se depara com a face mais sombria desse mundo novo e a cada dia que permanece vivo, precisa lidar com escolhas difíceis que colocam à prova o seu caráter.", image: require('../assets/O diário de Hass - Volume 2.jpg') },
    { id: 20, title: "Mitologia nórdica", description: "Fascinado por essa mitologia desde a infância, o autor compôs uma coletânea de quinze contos que começa com a narração da origem do mundo e mostra a relação conturbada entre deuses, gigantes e anões, indo até o Ragnarök, o assustador cenário do apocalipse que vai levar ao fim no mundo.", image: require('../assets/Mitologia nórdica.jpg') },
    { id: 21, title: "Nínguem vai te ouvir gritar", description: "A Academia Masters é um dos internatos mais prestigiados dos Estados Unidos. Escondido em uma ilha na costa da Flórida e cercado por muros impenetráveis, o internato recebe novas turmas anualmente. Mas, além dos alunos, abriga segredos sinistros e ameaças letais.", image: require('../assets/Ninguém vai te ouvir gritar.jpg') },
    { id: 22, title: "O homem de giz", description: "Em 2016, Eddie e seus amigos, já com certa idade, recebem uma carta com um desenho de um homem de giz enforcado. Ocorre, então, que um de seus amigos repentinamente aparece morto. Eddie não tem dúvidas de que precisa descobrir quem cometeu o crime e como isso se relaciona com o passado de 30 anos atrás.", image: require('../assets/O homem de giz.jpg') },
    { id: 23, title: "Se não fosse você", description: "Fala sobre família, primeiro amor, luto e traição em uma história emocionante que tocará os corações tanto de mães quanto de filhas. Morgan e Clara Grant são mãe e filha, e aparentemente não têm nada em comum.", image: require('../assets/Se não fosse você.webp') },
    { id: 24, title: "A espada de vidro", description: "O sangue de Mare Barrow é vermelho, da mesma cor da população comum, mas sua habilidade de controlar a eletricidade a torna tão poderosa quanto os membros da elite de sangue prateado. Depois que essa revelação foi feita em rede nacional, Mare se transformou numa arma perigosa que a corte real quer esconder e controlar.", image: require('../assets/A espada de vidro.jpg') },
    { id: 25, title: "Tempestade de guerra", description: "Mare Barrow aprendeu rápido que, para vencer, é preciso pagar um preço muito alto. Depois da traição de Cal, ela se esforça para proteger seu coração e continuar a lutar junto aos rebeldes pela liberdade de todos os vermelhos e sanguenovos de Norta.", image: require('../assets/Tempestade de guerra.jpg') },
    { id: 26, title: "Trono destruído", description: "Dois personagens inéditos se encontram em O mundo que ficou para trás: o jovem capitão Ashe, que faz contrabando nas Terras Disputadas, e Lyrisa, uma princesa foragida de Piedmont que vai fazer de tudo para escapar de um casamento arranjado.", image: require('../assets/Trono destruído.jpg') },
    { id: 27, title: " A prisão do rei", description: "Mare Barrow foi capturada e passa os dias presa no palácio, impotente sem seu poder, atormentada por seus erros. Ela está à mercê do garoto por quem um dia se apaixonou, um jovem dissimulado que a enganou e traiu. ", image: require('../assets/A prisão do rei.jpg/') },
    { id: 28, title: "A rainha vermelha", description: "A Rainha Vermelha é uma série de fantasia young adult escrita pela norte-americana Victoria Aveyard e se passa no ano de 320 da Nova Era em uma sociedade dividida pelos sangues vermelho (plebeus) e prateados (elite), conta a história de Mare Barrow, uma jovem de 17 anos que é vermelha e que descobre ter poderes de ... ", image: require('../assets/A rainha vermelha.jpg') },
    { id: 29, title: "Uma proposta irrecusável", description: "Em visita a um tio distante, ela descobre que seus antepassados um dia possuíram um poço de petróleo nos Estados Unidos e que talvez ainda valha algum dinheiro. O que seria a solução para os problemas financeiros de todos. Sem nada a perder, Sophie deixa a Inglaterra rumo a Nova York disposta a resolver esse mistério.", image: require('../assets/Uma proposta irrecusável.jpg') },
    /*{ id: 0, title: " ", description: " ", image: require('../assets/') },*/
  ]);


  const [selectedBook, setSelectedBook] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const {usuario} = useContext( UserContext );
  const batteryLevel = useBatteryLevel();
  const [bateria, setBateria] = useState();


useEffect(()=> {
  setBateria((batteryLevel*100).toFixed(0))
  loadbateria();
},[batteryLevel])

    function loadbateria(){
        if(bateria > 20){
          Alert.alert(
            'Bateria Baixa',
            "Sua bateria está abaixo de 20%. Por favor, conecte seu dispositivo para carregar"
            )
        }
    }
  const handleBookPress = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleBookPress(item)} style={styles.bookItem}>
      <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text>Bem vindo: {usuario}</Text>
      <Text style={styles.heading}>Biblioteca de Livros</Text>
      <Text>{usuario}</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedBook ? selectedBook.title : ''}</Text>
            <Image source={selectedBook ? selectedBook.image : null} style={{ width: 200, height: 300, marginBottom: 10, alignItems: 'center', marginLeft: 70, /*tirar marginleft*/}} /> 
            <Text style={styles.modalDescription}>{selectedBook ? selectedBook.description : ''}</Text>

              <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}>FECHAR</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  btn: {
    width: 350, //alterar para porcentagem
    height: 45,
    borderRadius: 5,
    backgroundColor: "#1A237E",
    marginTop: 10,
},
btnText: {
    lineHeight: 45,
    color: "white",
    textAlign: "center",
    fontSize: 20,
},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 150,
    alignItems: 'center',
    marginRight: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 8,
    elevation: 5,
    minWidth: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default Livros;
