<template>
  <div class="teste container">
    <h1>Camisas</h1>
    <select name="select" id="select" v-model="filtroOrdem">
      <option disabled value="">Filtro</option>
      <option value="padrao">Padrao</option>
      <option value="menorPreco">Preco</option>
      <option value="alfabeto">Ordem alfabetica</option>

    </select>
    <div class="section1">
      <section
        v-for="(produto, index) in produtosTela" :key="index"
      >
      <img :src="(produto.foto)" :alt="produto.name">
      <div>{{produto.name}}</div>
      <span>R$ {{produto.preco}},00</span>
        
      </section>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "Teste",
  data() {
    return {
      produtosTela: [],
      filtroOrdem: "",
      arrayTeste: [],
      produtos: [
        {
          name: "Camisa 1 Palmeiras 2021",
          preco: 250,
          foto: "https://static.netshoes.com.br/produtos/camisa-palmeiras-i-2021-sn-torcedor-puma-masculina/60/NWG-0855-060/NWG-0855-060_zoom1.jpg?ts=1599854541",
          sexo: "Masculino"
        },
        {
          name: "Camisa 1 Corinthians 2021",
          preco: 240,
          foto: "https://images.lojanike.com.br/1024x1024/produto/camisa-nike-corinthians-i-202021-jogador-masculina-CD4194-100-1.jpg",
          sexo: "Masculino"
        },
         {
          name: "Camisa 1 São Paulo 2019",
          preco: 200,
          foto: "https://static.saopaulomania.com.br/produtos/camisa-sao-paulo-i-2021-sn-c-patrocinio-torcedor-adidas-masculina/24/NQQ-1065-024/NQQ-1065-024_zoom1.jpg?ts=1584616638",
          sexo: "Masculino"
        },
         {
          name: "Camisa 1 Santos 2020",
          preco: 220,
          foto: "https://static.netshoes.com.br/produtos/camisa-santos-i-2021-sn-torcedor-umbro-masculina/44/D21-6218-044/D21-6218-044_zoom1.jpg?ts=1591023858&ims=544x",
          sexo: "Masculino"
        },
      ]
    }
  },
  methods: {

  },
  watch: {
    filtroOrdem() {
      
      switch (this.filtroOrdem) {
        case "alfabeto":
          alert("Filtrar pelo alfabeto")
          this.produtosTela.sort(function(a,b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          })
          console.log(this.produtosTela)
          break;
        case "menorPreco":
          alert("filtrar pelo menor preco")
          this.produtosTela.sort(function(a,b) {
            return a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0;
          })
          console.log(this.produtosTela)
          break;
        case "padrao": 
          this.produtosTela = this.produtos;
          console.log("tela: "+ this.produtosTela)
          break;
        default:
      }
    }
  },
  created() {
    this.produtosTela = this.produtos
  }
}
</script>

<style>
img {
  max-width: 100%;
  display: block;
  height: 200px;
}
.teste {
  background-color: brown;
  text-align: center;
}
.section1 {
  display: flex;
  background-color: blueviolet;
}

</style>