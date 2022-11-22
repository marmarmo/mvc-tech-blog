const commentFormEl = async function(event) {
	event.preventDefault();

	const postId = document.querySelector('input[name="post-id"]').value;
	const body = document.querySelector('textarea[name="post-body"]').value;

	if (body) {
		await fetch('/api/comment', {
			method: 'POST',
			body: JSON.stringify({
				postId,
				body
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		document.location.reload();
	}
};

document
.querySelector('#')
.addEventListener('submit', commentFormEl);