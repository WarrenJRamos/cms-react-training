import "@testing-library/jest-dom";
import {
    render,
    cleanup,
    fireEvent,
    screen,
    waitForElement,
} from "@testing-library/react";
import { Comic } from "../components/Comic/Comic";
import { getDate, getCreators } from "../components/Comic/detail-utilities";

afterEach(cleanup)

const comicData = {
    id: 4444,
    thumbnail: {
        extension: "jpg",
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/5e3d7536c8ada",
    },
    title: "Test Comic",
    issueNumber: 5,
    dates: [
        {
            date: "2099-10-30T00:00:00-0500",
            type: "onsaleDate",
        }
    ],
    creators: {
        items: [
            {
                name: "Fake Creator"
            }
        ]
    },
}

describe("<Comic />", () => {
    it("should not render when no props are passed", () => {
        const { queryByTestId } = render(<Comic />);
        const comic = queryByTestId("comic");
        expect(comic).not.toBeInTheDocument();
    });

    it("should render appropriately when comic data is passed in as props", () => {
        const { queryByTestId } = render(<Comic comicData={comicData} />);

        const comic = queryByTestId("comic");
        const title = queryByTestId("title");
        const issue = queryByTestId("issue");
        const publishedDate = queryByTestId("published-date");
        const creatorNames = queryByTestId("creator-names");

        expect(comic).toBeInTheDocument();
        expect(title.textContent).toBe(`${comicData.title}`);
        expect(issue.textContent).toBe(`Issue: ${comicData.issueNumber}`);
        expect(publishedDate.textContent).toBe(`Published: ${getDate(comicData.dates[0].date)}`)
        expect(creatorNames.textContent).toBe(`Creators: ${getCreators(comicData.creators)}`);
        // debug();
    })
});
