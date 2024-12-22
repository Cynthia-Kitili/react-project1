import Fruit from "./Fruit";

export default function Fruits() {
    // const fruits = ["Apple", "Mango", "Banana", "Orange"]
    const fruits = [
        { name: "Apple", price: 10, emoji: "🍎", soldOut: true },
        { name: "Mango", price: 5, emoji: "🥭" , soldOut: false},
        { name: "Banana", price: 2, emoji: "🍌" , soldOut: true},
        { name: "Orange", price: 8, emoji: "🍊" , soldOut: false}
    ]
    return (
        <div>
            <ul>
                {fruits.map((fruit) => (
                    <Fruit
                        key={fruit.name}
                        emoji={fruit.emoji}
                        name={fruit.name}
                        price={fruit.price}
                        soldOut = {fruit.soldOut}
                    />
                ))}
            </ul>
        </div>
    )
}