import { FC } from "react";

interface CategoryTitleProps {
    children: React.ReactNode;
}

const CategoryTitle: FC<CategoryTitleProps> = (props) => {
    const { children } = props;
    return (
        <h2 className="text-2xl font-bold bg-white/60 backdrop-blur-sm border-b text-center sticky top-0 py-4">
            {children}
        </h2>
    );
};

export default CategoryTitle;
