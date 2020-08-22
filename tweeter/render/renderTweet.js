const Renderer = function(){

	const createPosts = function (postId, text){
		return `<div id=${postId} class='post post-text' data-id='${postId}'>${text}<span class='delete'>Delete</span></div>`
	}

	const createComments = function(commentId, text){
		return `<div class="comments" id="${commentId}" data-id="${commentId}"  ><span class="delete-comment" >X</span>${text}</div>`
	}

	const addInputs = function (){
		return `<input  type="text" class="theNewInput"  placeholder="comments!">`
	}

	const addButtons = function(){
		return `<button class="submit">Submit</button>`
	}

	const renderPosts = function(posts){
		const $container = $("#posts")
		$container.empty()
		for(let pIndex in posts){
			$container.append(createPosts(posts[pIndex].id, posts[pIndex].text))
			for(let cIndex in posts[pIndex].comments){
				$container.append(createComments(posts[pIndex].comments[cIndex].id, posts[pIndex].comments[cIndex].text))
			}

			let findPost = $container.find(`#${posts[pIndex].id}`)
			let addTheInputs = findPost.append(addInputs())
			let addTheButtons = findPost.append(addButtons())
			return{
				addTheButtons,
				addTheInputs
			}
		} 
		
	}
	
	return {
		renderPosts,
	}
}	

