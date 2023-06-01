import React, {useState, useEffect} from "react";
import NavBar from "../components/Interface/NavBar";
import CardContainer from "../components/Interface/CardContainer";
import axios from "axios";

function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get("https://api.magicthegathering.io/v1/cards");
                setCards(response.data.cards);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCards();
    }, []);

    return (
        <div>
            <NavBar/>
            <h1>Home</h1>
            <p>Home page content</p>
            <CardContainer cards={cards}/>
        </div>
    );
}

export default Home;
