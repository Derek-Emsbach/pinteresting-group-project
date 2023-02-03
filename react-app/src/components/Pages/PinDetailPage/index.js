import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PinDetailPage() {
	const [pin, setPin] = useState([]);
  const {pinId} = useParams();

  useEffect(() => {
		if (!pinId) {
			return;
		}
		(async () => {
			const response = await fetch(`/api/pins/${pinId}`);
			const pin = await response.json();
			setPin(pin);
		})();
	}, [pinId]);

	if (!pin) {
		return null;
	}

	return (
		<ul>
			<div>
				<h1>PIN DETAIL PAGE</h1>
				<li><strong>User Id: </strong> {pinId}</li>
				<li><strong>Title: </strong> {pin.title}</li>
				<li><strong>Image Url: </strong> {pin.imageUrl}</li>
			</div>
		</ul>
	);
}

export default PinDetailPage;