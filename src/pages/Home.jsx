import React, {useState, useEffect} from "react";
import NavBar from "../components/Interface/NavBar";
import CardContainer from "../components/Interface/CardContainer";
import Filter from "../components/Forms/Filter";
import ChangePagination from "../components/Forms/ChangePagination";
import axios from "axios";
import { Card } from "@chakra-ui/card";

function Home() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(30);
    const [name, setName] = useState("");
    const [cardsName, setCardsName] = useState([]);
    const [rarety, setRarety] = useState("");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get(`https://api.magicthegathering.io/v1/cards?page=${currentPage}&pageSize=${pageSize}}`);
                setCards(response.data.cards);
                setFilteredCards(response.data.cards);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCards();
    }, [currentPage, pageSize]);

    if (cards.length === 0) return <div>Loading...</div>;

    return (
        <div>
            <NavBar/>
            <main className="flex flex-col items-center justify-center w-full h-full bg-gray-200">
                <h1 className="text-4xl">Magic The Gathering
                </h1>
                <Card className="w-4/5 m-12 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center w-4/5">
                        <ChangePagination pagination={currentPage} setPagination={setCurrentPage} pageSize={pageSize} setPageSize={setPageSize}/>
                        <Filter
                            name={name}
                            setName={setName}
                            nameList={cardsName}
                            setCards={setFilteredCards}
                            cards={cards}
                            setRarety={setRarety}
                            rarety={rarety}
                            setTypes={setTypes}
                            types={types}
                        />
                    </div>
                </Card>
                <CardContainer cards={filteredCards} cardsName={cardsName} setCardsName={setCardsName}/>
            </main>
        </div>
    );
}

export default Home;
