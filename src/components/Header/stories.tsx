// types and component
import { Meta, Story } from "@storybook/react/types-6-0";
import { useState } from "react";
import Header, { HeaderProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "Header",
	component: Header,
	args: mock,
	parameters: {
		layout: "fullscreen",
	},
} as Meta<HeaderProps>;

export const Template: Story<HeaderProps> = (args) => {
	// states
	const [lastScrollYCoord, setLastScrollYCoord] = useState(window.scrollY);
	const [visible, setVisible] = useState(true);

	// handler functions
	const handleScroll = () => {
		lastScrollYCoord < window.scrollY
			? setVisible(true)
			: setVisible(false);

		setLastScrollYCoord(window.scrollY);
	};

	// set handler functiion
	window.addEventListener("scroll", handleScroll);

	return (
		<div>
			<Header {...args} visible={visible} />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
				cumque ut totam adipisci optio fugit veritatis, excepturi
				deleniti autem perferendis harum eius aliquam esse, magnam
				eligendi sapiente fuga ea eaque.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
				veniam accusantium, laborum aut maxime ex debitis! Nulla,
				cupiditate? Debitis, quae quaerat iusto amet laudantium
				molestiae deleniti omnis dolorum atque voluptatem!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
				accusantium tenetur distinctio aliquid libero delectus officiis
				maiores rem, neque quod perferendis magnam necessitatibus
				possimus a alias quaerat, labore, nulla expedita!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
				optio eos pariatur repellendus eligendi consequuntur, aspernatur
				totam nostrum omnis delectus dolor illum minima sit, doloremque
				eveniet nihil! Dolorum, incidunt cumque?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
				nemo libero praesentium est rem? Beatae, natus nulla quia,
				dignissimos cumque deserunt consequatur deleniti obcaecati
				harum, hic dolorem ipsum non asperiores!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
				dicta officia repudiandae porro optio debitis non, beatae sunt
				amet quas, maxime dolorem atque modi nostrum blanditiis odio,
				ipsum aliquid minima.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quisquam autem ab iusto modi eius mollitia culpa tempore
				architecto ratione. Hic voluptatem explicabo reprehenderit, ad
				excepturi recusandae accusantium doloribus quis illo!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Accusantium quaerat, ab quis dolorem, voluptatibus excepturi
				nihil minima fugit ipsam suscipit cum enim eos corporis sint quo
				non. Libero, commodi harum?
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
				laboriosam, aspernatur sunt dolores ratione, fuga quibusdam
				veniam error cum sed velit, quam cumque commodi accusamus! Quo
				molestias asperiores mollitia quasi. Lorem ipsum dolor, sit amet
				consectetur adipisicing elit. Odio temporibus harum voluptatibus
				animi repellendus velit molestiae minima debitis, maxime aut!
				Voluptas sunt voluptatibus explicabo ad eveniet dignissimos?
				Nemo, modi assumenda? Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Doloribus, ducimus commodi cum quia fugiat
				magnam ut. Optio quidem aliquid excepturi. Voluptas excepturi
				suscipit sapiente, minima totam dicta corrupti ut soluta.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Voluptatem quisquam exercitationem explicabo quam at? Assumenda
				vel repellat, iste dolore quae excepturi commodi esse in, porro
				officia ab nobis, repellendus tenetur.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Nesciunt optio, amet quisquam ratione rerum delectus in atque
				iste non maiores. In necessitatibus pariatur explicabo voluptate
				voluptas rem temporibus cumque sunt!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
				possimus voluptatem culpa quas hic, soluta eaque, nulla fuga
				deserunt dolores saepe ducimus. A, doloribus aliquid culpa
				labore enim consequatur quae.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Veritatis sunt eum, atque sequi nesciunt, corrupti debitis aut
				quas, possimus dolores vel animi ab. Sint necessitatibus
				voluptatum distinctio reprehenderit expedita reiciendis!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>

			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
				tempora quasi enim officiis nesciunt, ducimus fugiat esse
				nostrum quo! Possimus voluptatibus inventore vitae minus
				reprehenderit labore ipsum, cum alias quos. Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Ipsum, tempore totam
				doloremque nesciunt architecto officia consequatur blanditiis
				maxime rerum dicta possimus optio accusamus ratione quae
				provident iusto aliquid sint molestiae? Lorem ipsum dolor sit
				amet, consectetur adipisicing elit. Quas reiciendis, culpa hic
				dolor, tenetur distinctio repudiandae quisquam corporis, illo
				eius nam ipsam vero non ratione omnis voluptas eos. Temporibus,
				obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Reprehenderit, officia animi eum, pariatur id rerum
				eveniet, enim eius nisi odit tempora nostrum aliquam nesciunt
				inventore dolorem nam facilis cumque! Voluptas. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. Laborum quam quo
				expedita placeat saepe iste officia nihil! Dolores quo optio
				dolorum! Magni iste saepe corrupti hic facere tempore obcaecati
				architecto! lorem
			</p>
		</div>
	);
};
