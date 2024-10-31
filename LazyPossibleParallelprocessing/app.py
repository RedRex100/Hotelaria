from flask import Flask, render_template

app = Flask(__name__, template_folder= 'Arquivos')

@app.route('/')
def inicio():
    return render_template('inicio.html')

@app.route('/cadastro')
def cadastro():
    return render_template('cadastro.html')

@app.route('/reservas')
def reservas():
    return render_template('reservas.html')
    
@app.route('/servicos')
def servicos():
    return render_template('servicos.html')

@app.route('/pagamentos')
def pagamentos():
    return render_template('pagamentos.html')

@app.route('/frigobar')
def frigobar():
    return render_template('frigobar.html')

@app.route('/registros')
def registros():
    return render_template('registro.html')

@app.route('/sair')
def sair():
    return render_template('checkout.html')

if __name__ == '__main__':
    app.run(debug=True)