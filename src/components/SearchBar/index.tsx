import { FC } from "react";

interface SearchBarProps {
    value?: string;
    onChange?: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
    const { value, onChange } = props;
    return (
        <div className="container mx-auto py-6 px-4">
            <div className="relative">
                <input
                    type="search"
                    className="bg-slate-100 w-full py-2 px-6 rounded-lg"
                    placeholder="جستجو"
                    value={value}
                    onChange={(ev) => onChange?.(ev.target.value)}
                />
                {value?.trim() !== "" && (
                    <button
                        className="absolute left-0 top-0 bottom-0 px-6 text-2xl font-light"
                        onClick={() => onChange?.("")}
                    >
                        &times;
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
