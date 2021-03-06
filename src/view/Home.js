import styled from "styled-components";
// COMPONENTS IMPORTATION
import ExpertiseCard from "../component/ExpertiseCard";
import ActivityCard from "../component/ActivityCard";
import DesignContent from "../component/DesignContent";
import IntegrationContent from "../component/IntegrationContent";
import FormationCard from "../component/FormationCard";
// STYLED COMPONENTS IMPORTATION
import BlackBigText from "../styles/styled-components/text/BlackBigText";
import WhiteBigText from "../styles/styled-components/text/WhiteBigText";

const ExpertiseContainer = styled.div`
    margin: 0.5rem;
    padding: 3rem 1rem 4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
        align-items: unset;
    };
`;

const TitleContainer = styled.div`
    padding-left: 2rem;

    @media only screen and (min-width: 1024px) {
        margin-left: 4rem;
    };
`;

const SecteurActiviteContainer = styled.div`
    padding: 3rem 1rem 6rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;

    @media only screen and (min-width: 768px) {
        align-items: unset;
    };
`;

const ActivitiesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormationContainer = styled.div`
    margin: 0.5rem;
    padding: 3rem 1rem 5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
        align-items: unset;
    };
`;

const Home = (props) => {
    const DesktopComponent = () => {
        return (
            <>
                <ExpertiseContainer id="expertise">
                    <TitleContainer>
                        <BlackBigText>Expertise</BlackBigText>
                    </TitleContainer>
                    <DesignContent
                        title={"Design"}
                        body={"Nous créeons des designs uniques pour vos sites internet et applications mobiles. Nos webdesigners sont à votre écoute afin de conceptualiser une application à votre image. Ecoute et réactivité sont les clefs de votre besoin."}
                        contact={"Contactez-nous"}
                        src={"../img/design-desktop.jpeg"}
                        alt={"Design picture"}
                    />
                    <IntegrationContent
                        title={"Intégration"}
                        body={"Nous donnons vie à vos idées. Notre équipe de développeurs sont à jours dans les nouvelles technologies (Javascript : React.JS, Next.JS, Vue.JS, Java, Python...) est prête à collaborer avec vous."}
                        contact={"Contactez-nous"}
                        src={"../img/integration-desktop.jpeg"}
                        alt={"Integration picture"} />
                </ExpertiseContainer>
                <SecteurActiviteContainer id="activity">
                    <TitleContainer>
                        <WhiteBigText>Secteurs d'activités</WhiteBigText>
                    </TitleContainer>
                    <ActivitiesContainer>
                        <ActivityCard
                            backgroundImage={"../img/bank.png"}
                            title={"B A N Q U E"}
                            alt={"Banque picture"}
                            isResponsive={props.isResponsive} />
                        <ActivityCard
                            backgroundImage={"../img/road.png"}
                            title={"T R A N S P O R T"}
                            alt={"Road picture"}
                            isResponsive={props.isResponsive} />
                        <ActivityCard
                            backgroundImage={"../img/industrie.png"}
                            title={"I N D U S T R I E"}
                            alt={"Industrie picture"}
                            isResponsive={props.isResponsive} />
                        <ActivityCard
                            backgroundImage={"../img/retail.png"}
                            title={"C O M M E R C E"}
                            alt={"Retail picture"}
                            isResponsive={props.isResponsive} />
                    </ActivitiesContainer>
                </SecteurActiviteContainer>
                <FormationContainer id="formation">
                    <TitleContainer>
                        <BlackBigText>Formations</BlackBigText>
                    </TitleContainer>
                    <FormationCard
                        source={"../img/formation.png"}
                        alt={"Formation picture"}
                        title={"Entreprises et écoles"}
                        body={"Nous proposons des formations sur mesure pour les entreprises et écoles. N'hésitez pas à nous contacter pour plus d'informations."}
                        contact={"Contactez-nous"}
                    />
                </FormationContainer>
            </>
        );
    };

    const MobileComponent = () => {
        return (
            <><ExpertiseContainer id="expertise">
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
                <SecteurActiviteContainer id="activity">
                    <WhiteBigText>Secteurs d'activités</WhiteBigText>
                    <ActivityCard
                        backgroundImage={"../img/bank.png"}
                        title={"B A N Q U E"}
                        alt={"Banque picture"}
                        isResponsive={props.isResponsive} />
                    <ActivityCard
                        backgroundImage={"../img/road.png"}
                        title={"T R A N S P O R T"}
                        alt={"Road picture"}
                        isResponsive={props.isResponsive} />
                    <ActivityCard
                        backgroundImage={"../img/industrie.png"}
                        title={"I N D U S T R I E"}
                        alt={"Industrie picture"}
                        isResponsive={props.isResponsive} />
                    <ActivityCard
                        backgroundImage={"../img/retail.png"}
                        title={"C O M M E R C E"}
                        alt={"Retail picture"}
                        isResponsive={props.isResponsive} />
                </SecteurActiviteContainer>
                <FormationContainer id="formation">
                    <BlackBigText>Formations</BlackBigText>
                    <FormationCard
                        source={"../img/formation.png"}
                        alt={"Formation picture"}
                        title={"Entreprises et écoles"}
                        body={"Nous proposons des formations sur mesure pour les entreprises et écoles. N'hésitez pas à nous contacter pour plus d'informations."}
                        contact={"Contactez-nous"}
                    />
                </FormationContainer></>
        );
    };

    return (
        <>
            {props.isResponsive ? <MobileComponent /> : <DesktopComponent />}
        </>
    );
};

export default Home;