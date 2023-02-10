import { Container } from "react-bootstrap";
import Hero from "./hero";
import RescentlyAdded from "./rescentlyAdded";
import { Fragment } from "react";
import { PureComponent } from "react";
import CategoryList from "./categoryList";
import PlaningtoBuyPet from "./PlaningtoBuyPet";
import Testimonials from "./testimonials";
import RescentBlogs from "./rescentBlogs";
import BestSellingProducts from "./bestSellingProducts";

export default class Home extends PureComponent {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Fragment>
				<div className="background">
					<Container>
						<Hero />
					</Container>
				</div>
				<Container>
					<RescentlyAdded />
					<hr />
					<BestSellingProducts />
				</Container>
				<div className="bg-light">
					<Container>
						<CategoryList />
						<hr />
						<PlaningtoBuyPet />
					</Container>
				</div>
				<Container>
					<RescentBlogs />
				</Container>
				<div style={{ backgroundColor: "var(--dark)" }}>
					<Container className="py-4">
						<Testimonials />
					</Container>
				</div>
			</Fragment>
		);
	}
}
