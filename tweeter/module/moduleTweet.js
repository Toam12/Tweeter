const Tweeter = function () {

	const posts = []

	let countPostId = 2
	let countCommentId = 6

	const getPosts = function () {
		return posts
	}

	const addPosts = function (text) {
		countPostId++
		const post = {
			text,
			id: "p" + countPostId,
			comments: []
		}		
		posts.push(post)
	}

	const removePosts = function (postId) {
		for (let pIndex in posts) {
			if (posts[pIndex].id === postId) {
				posts.splice(pIndex, 1)
			}
		}
	}

	const addComments = function (postId, text) {
		countCommentId++
		for (let pIndex in posts) {
			if (posts[pIndex].id === postId) {
				posts[pIndex].comments.push({ id: "c" + countCommentId, text, })
			}
		}
	}

	const removeComments = function (postId, commentId) {
		for(let pIndex in posts){
			if(posts[pIndex].id === postId){
				for(let cIndex in posts[pIndex].comments){
					if(posts[pIndex].comments[cIndex].id === commentId){
						posts[pIndex].comments.splice(cIndex,1)
					}
				}
			} 
		}
	}

	return {
		getPosts,
		addPosts,
		removePosts,
		addComments,
		removeComments,
	}
}







