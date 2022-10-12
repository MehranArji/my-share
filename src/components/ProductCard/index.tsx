import clsx from "clsx";
import { FC } from "react";
import ProductModel from "../../data/ProductModel";

interface ProductCardProps {
    product: ProductModel;
    amount?: number;
    onAmountChange?: (product: ProductModel, amount: number) => void;
}

const coefficients = [
    {
        label: "کامل",
        value: 1,
    },
    {
        label: "نصف",
        value: 0.5,
    },
    {
        label: "1/3",
        value: 1 / 3,
    },
    {
        label: "1/4",
        value: 1 / 4,
    },
];

const ProductCard: FC<ProductCardProps> = (props) => {
    const { product: item, onAmountChange, amount = 0 } = props;
    return (
        <div className="mb-6 p-4 flex flex-col">
            <div className="flex gap-2 items-baseline mb-3">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm font-bold text-slate-500 mr-auto">
                    <bdo dir="ltr">{item.price.toLocaleString()}</bdo>
                </p>
            </div>

            <div className="flex gap-2 items-center">
                <button
                    type="button"
                    className="text-xl border rounded-full w-10 h-10 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
                    disabled={amount <= 0}
                    onClick={() =>
                        onAmountChange?.(
                            item,
                            Math.max(0, amount - item.price * 0.25)
                        )
                    }
                >
                    -
                </button>
                <input
                    className="text-lg text-center truncate flex-1"
                    value={amount / item.price}
                    readOnly
                />
                <button
                    type="button"
                    className="text-xl border rounded-full w-10 h-10 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
                    onClick={() =>
                        onAmountChange?.(item, amount + item.price * 0.25)
                    }
                >
                    +
                </button>
                <button
                    type="button"
                    className="text-sm border rounded-full w-10 h-10 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
                    onClick={() => onAmountChange?.(item, item.price)}
                >
                    1
                </button>
                <button
                    type="button"
                    className="text-sm border rounded-full w-10 h-10 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300"
                    onClick={() => onAmountChange?.(item, item.price * 0.5)}
                >
                    1/2
                </button>
                <button
                    type="button"
                    className={clsx(
                        "text-lg border border-red-500 rounded-full w-10 h-10",
                        "disabled:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300 disabled:border-slate-200",
                        "bg-red-400 text-white"
                    )}
                    disabled={amount === 0}
                    onClick={() => onAmountChange?.(item, 0)}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
