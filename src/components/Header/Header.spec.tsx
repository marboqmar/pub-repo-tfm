import { renderComponent } from "../../tests/utils/component-renderer.tsx";
import { screen, waitFor } from "@testing-library/react";
import { Header } from "./Header.tsx";
import { userEvent } from "@testing-library/user-event";

const changeLanguageMock = vi.fn();

vi.mock("react-i18next", () => {
  return {
    useTranslation: () => ({
      t: vi.fn(),
      i18n: {
        changeLanguage: changeLanguageMock,
      },
    }),
  };
});

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Should call changeLanguage when clicking on change language button", async () => {
    renderComponent(<Header />);

    const changeLanguageButton: HTMLElement =
      screen.getByRole("languageButton");

    userEvent.click(changeLanguageButton);

    await waitFor(() => {
      expect(changeLanguageMock).toHaveBeenCalled;
    });
  });
});
