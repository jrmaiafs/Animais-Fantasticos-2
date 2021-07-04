export default function fetchBitCoin(url, target) {
  async function fetchBCoin() {
    const response = await fetch(url);
    const json = await response.json();
    
    const price = document.querySelector(target);
    const brlBC = 100 / json.BRL.buy;
    price.innerText = brlBC.toFixed(5);
  }
  
  fetchBCoin();
}


