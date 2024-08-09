
import  express  from "express";

const servidor = express();
servidor.use(express.json());

servidor.get('/acai/:n1/:n2/:n3', (req,resp)=>{
    let tamanhoP = Number(req.params.n1);
    let tamanhoM = Number(req.params.n2);
    let tamanhoG = Number(req.params.n3);

    function calcular(x,y,z){
        x = Number(x)*5;
        y = Number(y)*7;
        z = Number(z)*10;

        let total = x+y+z
        return total
    }
    let total = calcular(Number(tamanhoP),Number(tamanhoM),Number(tamanhoG));

    resp.send({
        resultado: total
    });

})

servidor.get('/acai/calculo', (req, resp)=>{
    let tamanhoP = Number(req.query.n1);
    let tamanhoM = Number(req.query.n2);
    let tamanhoG = Number(req.query.n3);

    function calcular(x,y,z){
        x = Number(x)*5;
        y = Number(y)*7;
        z = Number(z)*10;

        let total = x+y+z
        return total
    }
    let total = calcular(Number(tamanhoP),Number(tamanhoM),Number(tamanhoG));

    resp.send({
        resultado: total
    });
} )

servidor.post('/acai/mandar', (req, resp)=>{
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    let n3 = req.body.n3;

    let total = (n1*5)+(n2*7)+(n3*10);
    resp.send({
        total:total
    });
} )

servidor.post('/treino/leituraLivro', (req, resp) =>{
           

    try{
        if((req.body.livro =! String)){
            throw new Error("o parametro está errado");
        }

        let livro = req.body.livro;

        let paginas = req.body.paginas;
        let tempoPorPg = req.body.tempoPorPg;
        let total = paginas*tempoPorPg;
    

        resp.send({
            total
        })

        }
        
    catch (err){{
        
        resp.send( {
            error : 'deu erro aqui em'
        }
        )
    }
    }
})

servidor.get('/treino/cores', (req, resp) =>{
    
        if((req.query.cor1 != String("amarelo")) && (req.query.cor1 !="azul") && (req.query.cor1 != "vermelho")){
            resp.status(400).send({
                mensagem: 'deu erro ai'
            })
        
        }
        if((req.query.cor2 != String("amarelo")) && (req.query.cor2 != "azul") &&(req.query.cor2 != "vermelho")){
            resp.status(400).send({
                mensagem: 'deu erro ai'
            })
        }
        let cor1 = req.query.cor1;
        let cor2 = req.query.cor2;

        if((cor1 == 'amarelo') && cor2 =='azul'){
            resp.send({
                corResultante: 'verde'
            })
        }
        else if((cor1 == 'amarelo') && cor2 =='vermelho'){
            resp.send({
                corResultante: 'laranja'
            })
        }
        else if((cor1 == 'azul') && cor2 =='amarelo'){
            resp.send({
                corResultante: 'verde'
            })
        }
        else if((cor1 == 'azul') && cor2 =='vermelho'){
            resp.send({
                corResultante: 'roxo'
            })
        }
        else if((cor1 == 'vermelho') && cor2 =='amarelo'){
            resp.send({
                corResultante: 'laranja'
            })
        }
        else if((cor1 == 'vermelho') && cor2 =='azul'){
            resp.send({
                corResultante: 'roxo'
            })
        }
}


)
servidor.post('/treino/cinema/validacao', (req, resp)=>{
    let idade = req.body.idade;
    let idade2 = req.body.idade2;
    let classificacao = req.body.classificacao;
    let podemAssistir = true

    if(classificacao > idade || classificacao>idade2){
        resp.status(400).send({
            mensagem: 'voces não podem em',
            podemAssistir: false
        })
    }
    else if(classificacao <idade || classificacao>idade2 || classificacao == 'livre'){
        resp.send({
            mensagem: 'voces podem ',
            podemAssistir: true
        })
    }
})
servidor.get('/treino/tabuada/:numero', (req, resp)=>{

    
    let numero = Number(req.params.numero);
    let num = [];
    if(isNaN(numero) == true){
        resp.send({
            mensagem:'erro string'
        })
    }
    else{
        for(let i = 0;i<=10;i++){
            num[i] = numero*i;
        }
        resp.send({
            tabuada: {num}
        })
    }
    


    
})

servidor.post('/treino/ordenacao', (req, resp)=>{

    let iper = req.body.iper;

    for(let i = 0; i<iper.lenght;i++){
          
    }
    


})
servidor.listen(
    5050,
    ()=> console.log('subiu ai')
)

