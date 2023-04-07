import React from 'react';
import axios from 'axios';
import {
    useParams,
} from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts/"

export default function Detail() {
	const params = useParams();

	const [post, setPost] = React.useState(null);

	React.useEffect(() => {
		axios.get(baseURL+params.postId)
		.then((response) => {
				setPost(response.data);
		})
	}, []);

	if (!post) return null;

	return (
		<div>
			<h1 className="text-5xl font-serif py-5">{post.title}</h1>
			{
				(function() {
					const list = [];
					for (let i=0; i<100; i++) {
						list.push(<p>{post.body}</p>);
					}
					return list;
				}())
			}
			<p>{post.body}</p>
		</div>
	)
}
