import React from 'react';
import axios from 'axios';
import {
    useParams,
} from 'react-router-dom';

import Introduce from '../components/Introduce';

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
		<section className="grid grid-cols-1 lg:grid-cols-4">
			<div className="col-span-3 p-5 mx-5 border border-gray-200 rounded-lg bg-gray-50">
				<h1 className="text-5xl font-serif py-5 mb-10">{post.title}</h1>
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
			<div className="grid-cols-1 order-first lg:order-last mx-5 mb-10">
				<Introduce userId={post.userId}/>
			</div>
		</section>
	)
}
