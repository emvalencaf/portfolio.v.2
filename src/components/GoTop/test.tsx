import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import GoTop from ".";
import { theme } from "../../styles/theme";

describe("<GoTop />", () => {
	it("should render a go top button with big sizes", () => {
		renderTheme(<GoTop sizes="big" />);
		expect(screen.getByRole("link", { name: "Go to top" })).toHaveStyle({
			width: theme.font.sizes.huge,
		});
	});

	it("should render a go top button with small sizes", () => {
		renderTheme(<GoTop sizes="small" />);
		expect(screen.getByRole("link", { name: "Go to top" })).toHaveStyle({
			width: theme.font.sizes.large,
		});
	});

	it("should render a go to top button", () => {
		const { container } = renderTheme(<GoTop />);
		expect(
			screen.getByRole("link", { name: "Go to top" })
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Go to top" })).toHaveAttribute(
			"href",
			"#"
		);
		expect(container).toMatchInlineSnapshot(`
		.c0 {
		  position: fixed;
		  background: #0A1128;
		  color: #FFFFFF;
		  display: -webkit-box;
		  display: -webkit-flex;
		  display: -ms-flexbox;
		  display: flex;
		  -webkit-align-items: center;
		  -webkit-box-align: center;
		  -ms-flex-align: center;
		  align-items: center;
		  -webkit-box-pack: center;
		  -webkit-justify-content: center;
		  -ms-flex-pack: center;
		  justify-content: center;
		  width: height:4.0rem;
		  width: 4.0rem;
		  height: height:4.0rem;
		  width: 4.0rem;
		  bottom: 2rem;
		  right: 2rem;
		  border-radius: 100%;
		  z-index: 6;
		}

		.c0 svg {
		  -webkit-transition: all 350ms ease-in-out;
		  transition: all 350ms ease-in-out;
		}

		.c0:hover svg {
		  -webkit-transform: scale(1.2);
		  -ms-transform: scale(1.2);
		  transform: scale(1.2);
		  opacity: 0.8;
		}

		.c1 {
		  display: inline-block;
		  vertical-align: middle;
		  overflow: hidden;
		}

		<div>
		  <a
		    aria-label="Go to top"
		    class="c0"
		    href="#"
		    sizes="medium"
		    title="Go to top"
		  >
		    <svg
		      aria-hidden="true"
		      class="c1"
		      fill="currentColor"
		      focusable="false"
		      viewBox="0 0 24 24"
		      xmlns="http://www.w3.org/2000/svg"
		    >
		      <path
		        d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
		      />
		    </svg>
		  </a>
		</div>
	`);
	});
});
