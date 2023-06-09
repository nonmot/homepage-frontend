import React from "react";
import axios from "axios";
import {
	Link
} from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts/"

export default function PostList() {
	const [posts, setPosts] = React.useState(null);

	React.useEffect(() => {
		axios.get(baseURL)
		.then((response) => {
			setPosts(response.data);
		});
	}, []);

	if (!posts) return null;

	var loop = () => {
		const  items = [];
		posts.forEach(function(post) {
			items.push(
			<div className="py-8 flex flex-wrap md:flex-nowrap">
			  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
			    <span className="font-semibold title-font text-gray-700">CATEGORY</span>
			    <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
			  </div>
			  <div className="md:flex-grow">
			    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
			    <p className="leading-relaxed">{post.body}</p>
			    <Link to={`/detail/${post.id}`} className="text-indigo-500 inline-flex items-center mt-4">Detail
			  	<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
			  	  <path d="M5 12h14"></path>
			  	  <path d="M12 5l7 7-7 7"></path>
			  	</svg>
			    </Link>
			  </div>
			</div>
			);
		});
		return items;
	}

	return (
		<section className="text-gray-600 body-font overflow-hidden">
		  <div className="container px-5 py-24 mx-auto">
			<div className="-my-8 divide-y-2 divide-gray-100">
				<h1 className="text-5xl mb-10 text-black">All Post</h1>
				{loop()}
			</div>
		  </div>
		</section>
	)
}
