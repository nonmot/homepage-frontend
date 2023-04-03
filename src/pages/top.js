import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/"

function Top() {

	const [posts, setPosts] = React.useState(null);

	React.useEffect(() => {
		axios.get(baseURL)
		.then((response) => {
			setPosts(response.data);
		});
	}, []);

	if (!posts) return null;
	console.log(posts);

	var loop = () => {
		const  items = [];
		posts.forEach(function(post) {
			items.push(<p>{post.title}</p>);
		});
		return items;
	}

	return (
		<div className="Top">
			{loop()}
		</div>
	)
}

export default Top
