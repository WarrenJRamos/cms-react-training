import React, {
    ChangeEventHandler,
    useContext,
    useEffect,
    useState,
} from "react";
import Context from "../../context/index-store";
import useRequest from "../../hooks/use-request";
import classes from "../../styles/Home/Filter.module.css";

const characterFilterOptions = [
    { value: "", text: "Character" },
    { value: "1009368", text: "Iron Man" },
    { value: "1009220", text: "Captain America" },
    { value: "1009664", text: "Thor" },
    { value: "1009268", text: "Deadpool" },
    { value: "1009562", text: "Scarlet Witch" },
    { value: "1009189", text: "Black Widow" },
    { value: "1009707", text: "Wasp" },
    { value: "1010763", text: "Gamora" },
];

const creatorFilterOptions = [
    { value: "", text: "Creator" },
    { value: "12787", text: "Kate Leth" },
    { value: "24", text: "Brian Michael Bendis" },
    { value: "30", text: "Stan Lee" },
    { value: "32", text: "Steve Ditko" },
    { value: "196", text: "Jack Kirby" },
];
export const Filter = () => {
    const {
        getMarvelComicsResourceUrl,
        fetchData,
        isLoading,
        setIsLoading,
        isSuccess,
        setIsSuccess,
        hasError,
        setHasError,
    } = useRequest();
    const [selectedCharacter, setSelectedCharacter] = useState<string>(
        characterFilterOptions[0].value
    );
    const [selectedCreator, setSelectedCreator] = useState<string>(
        creatorFilterOptions[0].value
    );
    const [didMount, setDidMount] = useState<boolean>(false);
    const context = useContext(Context);

    const onCharacterChange: ChangeEventHandler<HTMLSelectElement> = (
        event
    ) => {
        console.log(event.target.value);
        setSelectedCharacter(event.target.value);
    };

    const onCreatorChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        console.log(event.target.value);
        setSelectedCreator(event.target.value);
    };

    const fetchFilteredComics = () => {
        let path: string;
        if (selectedCharacter && selectedCreator) {
            console.log("Character and Creator Selected");
            path = getMarvelComicsResourceUrl(
                `https://gateway.marvel.com/v1/public/creators/${selectedCreator}/comics?characters=${selectedCharacter}&`
            );
        } else if (selectedCharacter) {
            console.log("Character Selected");
            path = getMarvelComicsResourceUrl(
                `https://gateway.marvel.com/v1/public/characters/${selectedCharacter}/comics?`
            );
        } else if (selectedCreator) {
            console.log("Creator Selected");
            path = getMarvelComicsResourceUrl(
                `https://gateway.marvel.com/v1/public/creators/${selectedCreator}/comics?`
            );
        }
        console.log(`Sending a request to ${path}`);
        fetchData({ endpoint: path })
            .then((data) => {
                console.log(data);
                context.setComics(data.data.results);
                setIsLoading(false);
                setIsSuccess(true);
            })
            .catch((error) => {
                setHasError(error);
                setIsSuccess(false);
                setIsLoading(false);
            });
    };

    const fetchDefaultComics = () => {
        fetchData({
            endpoint: getMarvelComicsResourceUrl(
                "https://gateway.marvel.com/v1/public/comics?"
            ),
        })
            .then((data) => {
                console.log(data);
                context.setComics(data.data.results);
                setIsLoading(false);
                setIsSuccess(true);
            })
            .catch((error) => {
                setHasError(error);
                setIsSuccess(false);
                setIsLoading(false);
            });
    };

    // Since useEffect always runs for the first time the component mounts, no matter the
    // dependency array, I have a didMount state to only check the filter select values
    // afterwards
    // If I don't have this, then the useEffect below will run again when this component
    // is initially rendered and mounted into the DOM even though I already fetched the
    // comics in <Home />
    useEffect(() => {
        setDidMount(true);
    }, []);

    useEffect(() => {
        if (didMount) {
            console.log(
                `Inside useEffect - Selected Character: ${
                    selectedCharacter || "N/A"
                }, Selected Creator: ${selectedCreator || "N/A"}`
            );
            if (selectedCharacter || selectedCreator) {
                fetchFilteredComics();
            }
            if (!selectedCharacter && !selectedCreator) {
                fetchDefaultComics();
            }
        }
    }, [selectedCharacter, selectedCreator]);

    return (
        <div className={`${classes["filter"]}`}>
            Filter by:
            <select
                value={selectedCharacter}
                onChange={onCharacterChange}
                className={`${classes["filter__dropdown"]}`}
            >
                {characterFilterOptions.map((charOption) => {
                    return (
                        <option value={charOption.value} key={charOption.value}>
                            {charOption.text}
                        </option>
                    );
                })}
            </select>
            <select
                value={selectedCreator}
                onChange={onCreatorChange}
                className={`${classes["filter__dropdown"]}`}
            >
                {creatorFilterOptions.map((creatorOption) => {
                    return (
                        <option
                            value={creatorOption.value}
                            key={creatorOption.value}
                        >
                            {creatorOption.text}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
