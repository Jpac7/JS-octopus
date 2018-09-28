// Retrieving data from txt file
document.getElementById('button1').addEventListener('click', () => {
    fetch('./resources/file.txt')
        .then(res => {
            if (res.status !== 200) {
                console.log(`${res.status}}: ${res.statusText}`);
                return;
            }
            return res.text();
        }).then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(err => console.log(err));
})

// -------------------------------------------------------------------------------------------
// Helper functions
const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
}

const json = response => response.json()


// Retrieving data from json file
document.getElementById('button2').addEventListener('click', () => {
    fetch('./resources/albums.json')
        .then(status)
        .then(json)        
        .then(data => {                        
            let content = '';
            data.forEach(el => 
                content += `<li><p>${el.name}</p><p>Albums: ${el.albums.join(', ')}</p></li>`             
            );            
            document.getElementById('content').innerHTML = `<ul>${content}</ul>`;
        })
        .catch(err => console.log(err));
})

// Consuming data from Rest API
document.getElementById('button3').addEventListener('click', () => {
    fetch('https://picsum.photos/list', {mode: 'cors'})
        .then(status)
        .then(json)
        .then(data => {
            let content = '';
            data.forEach(el => 
                content += `<li>
                    <a target='_blank' href='${el.post_url}'>${el.filename}</a>
                    by ${el.author}                
                </li>`
            );
            document.getElementById('content').innerHTML = `<ul>${content}</ul>`;
        })
        .catch(err => console.log(err));
})