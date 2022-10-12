import { FC, useMemo } from "react";
import CartModel from "../../data/CartModel";

interface FooterPaneProps {
    cart: CartModel[];
}

const FooterPane: FC<FooterPaneProps> = (props) => {
    const { cart } = props;

    const total = useMemo(
        () => cart.reduce((prev, current) => prev + current.cost, 0),
        [cart]
    );

    return (
        <div className="sticky bottom-0">
            <div className="container mx-auto">
                <div className="bg-white/60 backdrop-blur-sm border-t px-6 py-4">
                    <p className="text-sm text-slate-500 mb-2">مجموع</p>
                    <p className="text-lg font-bold">
                        {total.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterPane;
