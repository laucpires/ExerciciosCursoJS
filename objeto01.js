let amigo = {
    nome: 'Jos�', 
    sexo: 'M', 
    peso: 85, 
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p;
    }}
    amigo.engordar(3);
    console.log(`O amigo ${amigo.nome} pesa ${amigo.peso}kg.`);