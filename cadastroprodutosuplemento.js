async function register() {
    const produtoField = document.getElementById('id_produtosuplemento');
    const descricaoField = document.getElementById('descricao');
    const marcaField = document.getElementById('marca');
    const datavalidadeField = document.getElementById('datavalidade');
    const quantidadeestoqueField = document.getElementById('quantidadeestoque');

    await fetch(
        'http://localhost:3000/api/auth/register', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'produtosuplemento': produtoField.value,
                'descricao': descricaoField.value, 
                'marca': marcaField.value, 
                'datavalidade': datavalidadeField.value, 
                'quantidadeestoque': quantidadeestoqueField.value, 
            }),
        });
}