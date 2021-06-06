import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <div className="sectionwrapper">
      <CardDeck className="carddeck">
        <Card className="card1">
          <Card.Img
            className="cardimg"
            variant="top"
            src="images/light2.jpg"
            alt="education"
            width="500px"
          />
          <Card.Body>
            <Card.Title className="carddtext">My Education</Card.Title>
            <Card.Title>
              2019 - 2021 "Noroff" Begen, Norway. "Front-end Developing".
            </Card.Title>
            <Card.Title>
              2002-2006: Hotell– og restaurantsvirksomhet; Institutt for ledelse
              og turisme, "Kyiv National University of Culture and Arts".
            </Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
