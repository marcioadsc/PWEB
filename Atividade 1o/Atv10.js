var Aluno1 = {
    ra: '0030482023004',
    nome: 'Márcio Aurélio da Silva Calixto'
  }
  alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1.ra = '0030482022000';
  Aluno1.nome = 'Bernardo Belarmino';
  alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1['ra'] = '0030482023000';
  Aluno1['nome'] = 'Alexandre Alberto';
  alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);
