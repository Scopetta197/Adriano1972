import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import App from "..";

describe("<App />", () => {
  it("renders", () => {
    const mockStore = {
      default: () => null,
      subscribe: () => null,
      dispatch: () => null,
      getState: () => ({ home: () => null }),
    };
    const mockRoute = {
      routes: [
        {
          path: "/",
          exact: true,
          component: () => (
            <div>
              <h1>Welcome Home!</h1>
            </div>
          ),
        },
      ],
    };

    const tree = renderer
      .create(
        // @ts-expect-error
        <Provider store={mockStore}>
          <MemoryRouter>
            <App route={mockRoute} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
