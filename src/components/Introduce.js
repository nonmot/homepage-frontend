import React, { useState } from "react";
import axios from "../axios";

export default function Introduce(props) {
	const [user, setUser] = React.useState(null);

	const url = props==undefined ? `/users/${props.userId}` : `/users/1`;
	React.useEffect(() => {
		axios.get(url)
		.then((responce) => {
			setUser(responce.data);
		});
	}, []);

	if (!user) return null;

	return (
		<section className="">
			<div className="border border-gray-200 rounded-lg p-5 bg-gray-100">
				<div className="flex flex-row mb-5">

					<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
					<div className="mx-3">
						<h2 className="text-2xl">{user.name}</h2>
						<span className="text-gray-500">{user.company.bs}</span>
					</div>
				</div>
				
				<h3 className="text-xl font-bold underline underline-offset-4 mb-3">About me</h3>
				<p>Email: {user.email}</p>
				<p>Phone: {user.phone}</p>
				<p>Web site: {user.website}</p>
				<p>Company: {user.company.name}</p>
			</div>
		</section>
	);
}
