import { FC, useMemo, useState } from "react";
import CategoryTitle from "./components/CategoryTitle";
import FooterPane from "./components/FooterPane";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import CartModel from "./data/CartModel";
import menu from "./data/liancaferestaurant.json";

const App: FC = () => {
    const [query, setQuery] = useState("");
    const [list, setList] = useState<CartModel[]>([]);

    const onItemAmountChange = (
        item: typeof menu[0]["items"][0],
        amount: number
    ) => {
        const index = list.findIndex((listItem) => listItem.id === item.id);

        // Insert new Item
        if (index === -1) {
            setList((list) => [
                ...list,
                { id: item.id, cost: amount, name: item.name },
            ]);
            return;
        }

        // Remove existing item
        if (list[index].cost === amount || amount === 0) {
            setList((list) =>
                list.filter((_listItem, listIndex) => listIndex !== index)
            );
            return;
        }

        // Update existing item with new cost
        setList((list) =>
            list.map((listItem, i) => ({
                id: listItem.id,
                cost: i === index ? amount : listItem.cost,
            }))
        );
    };

    const categories = useMemo(() => {
        if (query.trim() === "") {
            return menu;
        }
        return menu.filter((category) =>
            category.items.some((item) => item.name.includes(query))
        );
    }, [query]);

    return (
        <div className="flex flex-col min-h-screen">
            <SearchBar value={query} onChange={setQuery} />
            <div className="container mx-auto flex-1">
                {categories.length === 0 && (
                    <div className="py-10 text-center text-3xl text-slate-400">
                        🤷‍♂️🤷‍♀️
                    </div>
                )}

                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryTitle>{category.name}</CategoryTitle>

                        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                            {category.items
                                .filter((item) =>
                                    item.name.includes(query.trim())
                                )
                                .map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        product={item}
                                        amount={
                                            list.find(
                                                (listItem) =>
                                                    listItem.id === item.id
                                            )?.cost
                                        }
                                        onAmountChange={(product, amount) =>
                                            onItemAmountChange(product, amount)
                                        }
                                    />
                                ))}
                        </div>
                    </div>
                ))}

                {/* Sticky footer */}
            </div>
            <FooterPane cart={list} />
        </div>
    );
};

export default App;
