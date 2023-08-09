from flask import Flask, jsonify, request

app = Flask(__name__)

livros = [
    {
        'id': 1,
        'titulo': 'Livro 1',
        'autor': 'Tokien'
    },
    {
        'id': 2,
        'titulo': 'Livro 2',
        'autor': 'Mario'
    },
    {
        'id': 2,
        'titulo': 'Livro 2',
        'autor': 'João'
    },
]

@app.route('/livros')
def obter_livros():
    return jsonify(livros)

app.run(port=5000, host='localhost', debug=True)