const listaClientes = [{
    nome : "Joao",
    endereco : "Rua A, Centro, Registro - SP",
    cpf : 52443212300
},
{
    nome : "Jocieli",
    endereco : "Rua B, Centro, Registro - SP",
    cpf : 56378965411
},
{
    nome : "Kevin",
    endereco : "Rua C, Centro, Registro - SP",
    cpf : 12332454600
}]

listaClientes.forEach((cliente) => {
    document.write(`Nome: ${cliente.nome} ${cliente.endereco} ${cliente.endereco}<br>`);
})

listaClientes.push({
    nome : "Haimon",
    endereco : "Rua d, Centro, Registro - SP",
    cpf : 12345678900
})

listaClientes.forEach((cliente) => {
    document.write(`Nome: ${cliente.nome} ${cliente.endereco} ${cliente.endereco}<br>`);
})


listaClientes.unshift({
    nome : "Kaua",
    endereco : "Rua e, Centro, Registro - SP",
    cpf : 12345678900
})

listaClientes.forEach((cliente) => {
    document.write(`<br> Nome: ${cliente.nome} ${cliente.endereco} ${cliente.endereco}<br>`)
})

document.write(`<p>Numero de clientes : ${listaClientes.length}</p>`);