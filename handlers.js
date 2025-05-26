function hello_handler(){
  return "world\n"
}

function sorry_handler(){
  return "sorry\n"
}

function fruit_handler(){
  return "banana\n"
}

module.exports = { hello_handler, sorry_handler, fruit_handler }
