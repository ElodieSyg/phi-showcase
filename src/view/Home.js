import styled from "styled-components";
// COMPONENTS IMPORTATION
import Card from "../component/Card";
// STYLED COMPONENTS IMPORTATION
import BlackBigText from "../styles/styled-components/text/BlackBigText";
import WhiteBigText from "../styles/styled-components/text/WhiteBigText";

const ExpertiseContainer = styled.div`
    margin: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SecteurActiviteContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
`;

const Home = () => {
    return (
        <>
            <ExpertiseContainer>
                <BlackBigText>Expertise</BlackBigText>
                <Card 
                    backgroundImage={"../img/design.png"}
                    title={"Design"}
                    body={"Nous créeons des designs uniques pour vos sites internet et applications mobiles. Nos webdesigners sont à votre écoute afin de conceptualiser une application à votre image. Ecoute et réactivité sont les clefs de votre besoin."}
                    contact={"Contactez-nous"}
                    alt={"Design picture"} />
                <Card 
                    backgroundImage={"../img/integration.png"}
                    title={"Intégration"}
                    body={"Nous donnons vie à vos idées. Notre équipe de développeurs sont à jours dans les nouvelles technologies (Javascript : React.JS, Next.JS, Vue.JS, Java, Python...) est prête à collaborer avec vous."}
                    contact={"Contactez-nous"} />
            </ExpertiseContainer>
            <SecteurActiviteContainer>
                <WhiteBigText>Secteurs d'activités</WhiteBigText>
            </SecteurActiviteContainer>
        </>
    );
};

export default Home;