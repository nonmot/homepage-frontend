import PostList from "../components/PostList";
import Hero from "../components/hero";
import Introduce from "../components/Introduce";

function Top() {

	return (
		<div>
			<Hero />
			<div className="grid grid-cols-1 lg:grid-cols-4 mt-5 ">
				<div className="col-span-3">
					<PostList />
				</div>
				<div className="col-span-1 order-first lg:order-last lg:py-24">
					<Introduce />
				</div>
			</div>
		</div>
	)

}

export default Top
