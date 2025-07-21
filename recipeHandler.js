const recipeImageUpload = async () => {
  console.log('in image upload after change')
  return { statusCode: 200, body: JSON.stringify({ message: 'Upload successful!' })}

}


module.exports = {
  recipeImageUpload
}
