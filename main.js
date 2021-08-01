document.getElementById('button').onclick = function() {
	let bits = [0, 0, 0, 0, 0, 0]

	let curr = 0;	

	let code = document.getElementById("input").value.split('');

	document.getElementById("output").value = "";

	for(let i = 0; i < code.length; i++) {
		let cmd = code[i];
		
		if(cmd == '[') {
			curr += 1;
		} else if(cmd == ']') {
			curr -= 1;
		} else if(cmd == '(') {
			bits[curr] += 1;
		} else if(cmd == ')') {
			bits[curr] -= 1;
		} else if(cmd == '-') {
			document.getElementById("output").value += curr;
		} else if(cmd == ':') {
			document.getElementById("output").value += bits[curr];
		} else if(cmd == ';') {
			document.getElementById("output").value += String.fromCharCode(bits[curr]);
		}
	}
};