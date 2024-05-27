const form = document.querySelector('#searchForm');
const input = document.querySelector('#input');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`);
    console.log(res);
    makeImages(res.data);
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
