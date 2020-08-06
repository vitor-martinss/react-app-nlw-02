import express from 'express'

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, fitros, ordenação

const app = express()

app.use(express.json())


app.get('/', (request, response) => {
	return response.json([])
})

//localhost:3333/users
app.listen(3333)

