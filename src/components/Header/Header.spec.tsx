import { renderComponent } from "../../tests/utils/component-renderer.tsx";
import { screen, waitFor } from "@testing-library/react";
import Header from "./Header.tsx";
import { userEvent } from "@testing-library/user-event";

const changeLanguageMock = vi.fn();

vi.mock("react-i18next", () => {
  return {
    useTranslation: () => ({
      i18n: {
        changeLanguage: changeLanguageMock,
      },
    }),
  };
});

describe("Header", () => {
  it("Should call changeLanguage when clicking on change language button", async () => {
    renderComponent(<Header />);

    const changeLanguageButton: HTMLElement = screen.getByText(
      "Language" || "Idioma",
    );
    userEvent.click(changeLanguageButton);

    await waitFor(() => {
      expect(changeLanguageMock).toHaveBeenCalledTimes(1);
    });
  });
});

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});
