const tweeter = Tweeter()
const renderer = Renderer()

const addPost = function(){
	const $input =$("#input")
	tweeter.addPosts($input.val())
	renderer.renderPosts(tweeter.getPosts())
	$input.val(" ") 
}

const toTwit = $("#post")
toTwit.on("click",addPost)


const removePost = function(){
	const $thisPost = $(this)
	tweeter.removePosts($thisPost.closest(".post-text").data().id)
	renderer.renderPosts(tweeter.getPosts())
}

const $container = $("#posts")
$container.on("click", ".delete", removePost)

const commentInputAndButton = function() {
	const $thisPost = $(this).closest(".post")
	const $newInput = $thisPost.find(".theNewInput").val()
	tweeter.addComments($thisPost.data().id, $newInput)
	renderer.renderPosts(tweeter.getPosts())
	$input.val(" ") 
}

$container.on("click", ".submit", commentInputAndButton )


const removeComment = function(){
	const $postId = $(this).closest(".post").data().id
	const $commentId = $postId.find(".comments").data().id
	tweeter.removeComments($postId, $commentId)
	renderer.renderPosts(tweeter.getPosts())
	console.log(this)
}

$container.on("click", ".delete-comment", removeComment)
