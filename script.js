axios.post({'https://crudcrud.com/Dashboard/a72a536aee164d8082199fad1bb7faf4'},submit.addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    console.log(e)
    todo.innerHTML = `
    <h1>${titlec} </h1>
    <p> ${descc}</p>
    `
    title.value = ""
    desc.value = ""
  }))
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = "";
  })
