// Function to handle the creation of a new post
async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                content,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
}

// Function to handle the deletion of a post
async function deletePostHandler(event) {
    event.preventDefault();

    const postId = event.target.getAttribute('data-id');
    console.log('Delete button clicked, postId:', postId);

    if (postId) {
        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                console.log('Post deleted successfully, redirecting to dashboard...');
                document.location.replace('/dashboard');
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error('Error occurred while deleting post:', error);
        }
    }
}

// Event listener for creating a new post
document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);

// Event listener for deleting a post
document.querySelectorAll('.delete-form').forEach((form) => {
    form.addEventListener('submit', deletePostHandler);
});