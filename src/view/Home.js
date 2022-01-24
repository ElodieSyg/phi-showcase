import styled from "styled-components";
// COMPONENTS IMPORTATION
import ExpertiseCard from "../component/ExpertiseCard";
import ActivityCard from "../component/ActivityCard";
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

const FormationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Home = () => {
    return (
        <>
            <ExpertiseContainer>
                <BlackBigText>Expertise</BlackBigText>
                <ExpertiseCard
                    backgroundImage={"../img/design.png"}
                    title={"Design"}
                    body={"Nous créeons des designs uniques pour vos sites internet et applications mobiles. Nos webdesigners sont à votre écoute afin de conceptualiser une application à votre image. Ecoute et réactivité sont les clefs de votre besoin."}
                    contact={"Contactez-nous"}
                    alt={"Design picture"} />
                <ExpertiseCard
                    backgroundImage={"../img/integration.png"}
                    title={"Intégration"}
                    body={"Nous donnons vie à vos idées. Notre équipe de développeurs sont à jours dans les nouvelles technologies (Javascript : React.JS, Next.JS, Vue.JS, Java, Python...) est prête à collaborer avec vous."}
                    contact={"Contactez-nous"}
                    alt={"Integration picture"} />
            </ExpertiseContainer>
            <SecteurActiviteContainer>
                <WhiteBigText>Secteurs d'activités</WhiteBigText>
                <ActivityCard
                    backgroundImage={"../img/bank.png"}
                    title={"B A N Q U E"}
                    alt={"Banque picture"} />
                <ActivityCard
                    backgroundImage={"../img/road.png"}
                    title={"T R A N S P O R T"}
                    alt={"Road picture"} />
                <ActivityCard
                    backgroundImage={"../img/industrie.png"}
                    title={"I N D U S T R I E"}
                    alt={"Industrie picture"} />
                <ActivityCard
                    backgroundImage={"../img/retail.png"}
                    title={"C O M M E R C E"}
                    alt={"Retail picture"} />
            </SecteurActiviteContainer>
            <FormationContainer>
                <BlackBigText>Formations</BlackBigText>
                Blablabla
            </FormationContainer>
        </>
    );
};

export default Home;