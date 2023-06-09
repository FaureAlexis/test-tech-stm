import React, {useState, useEffect} from "react";
import NavBar from "../components/Interface/NavBar";
import CardContainer from "../components/Interface/CardContainer";
import Filter from "../components/Forms/Filter";
import ChangePagination from "../components/Forms/ChangePagination";
import axios from "axios";
import { getCachedData, setCachedData } from "../utils/cache";
import { Card, useDisclosure } from "@chakra-ui/react";
import ItemDrawer from "../components/Interface/ItemDrawer";
function Home() {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(30);
    const [name, setName] = useState("");
    const [cardsName, setCardsName] = useState([]);
    const [rarety, setRarety] = useState("");
    const [types, setTypes] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCard, setSelectedCard] = useState({});
    

    useEffect(() => {
        const cachedData = getCachedData();
        if (cachedData && cachedData.length === pageSize) {
            setCards(cachedData);
            setFilteredCards(cachedData);
            return;
        }
        const fetchCards = async () => {
            try {
                const response = await axios.get(`https://api.magicthegathering.io/v1/cards?page=${currentPage}&pageSize=${pageSize}}`);
                setCards(response.data.cards);
                setFilteredCards(response.data.cards);
                setCachedData(response.data.cards);
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
                <h1 className="text-4xl mt-12">Magic The Gathering
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
                <CardContainer cards={filteredCards} cardsName={cardsName} setCardsName={setCardsName} onOpen={onOpen} setSelectedCard={setSelectedCard}/>
            </main>
            <ItemDrawer isOpen={isOpen} onClose={onClose}>
                <div className="flex flex-col justify-center items-center">
                    <img src={selectedCard.imageUrl} alt={selectedCard.name} className="w-1/2"/>
                    <h1 className="text-2xl">{selectedCard.name}</h1>
                    <p className="text-xl">{selectedCard.type}</p>
                    <p className="text-xl">{selectedCard.rarity}</p>
                    <p className="text-xl">{selectedCard.text}</p>
                </div>
            </ItemDrawer>
        </div>
    );
}

export default Home;
