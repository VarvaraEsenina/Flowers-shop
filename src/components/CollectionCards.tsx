import { useState, useEffect } from "react"
import Card from "./Card.tsx"
import axios from "axios"

interface BouquetObjectResponce {
    id: number,
    name: string,
    price: number,
    photo?: string
}


export default function CollectionCards() {
    const [cards, changeCards] = useState([]);

    function getBouquetsObjects() {
        let linkAPI: string = "https://68e94d4df1eeb3f856e3a923.mockapi.io/bouquets"
        axios.get(linkAPI).then(response => {
            console.log(response);
            changeCards(response.data);
        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        getBouquetsObjects();
    }, [])
    return (
        <div className="m-3">
            <h1 className="mt-1 mb-3 text-secondary text-center">Каталог</h1>
            <div className="container d-flex flex-row flex-wrap justify-content-between gap-3">
                {
                    cards.map((data: BouquetObjectResponce) => {
                        return <Card key={data.id} title={data.name} price={data.price}> </Card>
                    })
                }
            </div>
        </div>
    )

}