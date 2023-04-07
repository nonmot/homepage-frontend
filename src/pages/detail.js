import React from 'react';
import axios from 'axios';
import {
	Link
} from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

export default function Detail() {
	const [post, setPost] = React.useState(null);

	React.useEffect(() => {
		axios.get(baseURL)
		.then((response) => {
				setPost(response.data);
		})
	}, []);

	if (!post) return null;

	return (
		<div>
			<h1 className="text-2xl font-serif">{post.title}</h1>
			<p>{post.body}</p>
		</div>
	)
}
