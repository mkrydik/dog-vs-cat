import './style.css';

const fetchDog = async () => {
  const dogElement: HTMLImageElement = document.getElementById('dog')! as HTMLImageElement;
  dogElement.src = './loading.png';
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await response.json();
    console.log('Fetch Dog', json);
    if(json.status !== 'success') throw new Error('Invalid Response');
    dogElement.src = json.message;
  }
  catch(error) {
    console.error('Fetch Dog : Error', error);
    dogElement.src = './error.png';
  }
};

const fetchCat = async () => {
  const catElement: HTMLImageElement = document.getElementById('cat')! as HTMLImageElement;
  catElement.src = './loading.png';
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
    const json = await response.json();
    console.log('Fetch Cat', json);
    if(json.length !== 1) throw new Error('Invalid Response');
    catElement.src = json[0].url;
  }
  catch(error) {
    console.error('Fetch Cat : Error', error);
    catElement.src = './error.png';
  }
}

fetchDog();
fetchCat();

document.getElementById('dog')!.addEventListener('click', fetchDog);
document.getElementById('cat')!.addEventListener('click', fetchCat);
