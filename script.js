//your JS code here. If required
const input = document.elementById("fname")
input.addEventListener("blur", ()=>{
	input.value = input.value.toUpperCase()
})