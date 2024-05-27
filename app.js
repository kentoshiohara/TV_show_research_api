const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    clearImages();
    const input = document.querySelector('#input');
    const config = {
        params: {
            q: input.value
        }
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    makeImages(res.data);
    input.value = '';
})

const makeImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

const clearImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.remove();
    })
}
