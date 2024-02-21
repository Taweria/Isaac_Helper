const urlAngel = '../json/angel_room.json';
const urlCurse = '../json/curse_room.json';
const urlDevil = '../json/devil_room.json';
const urlItem = '../json/item_room.json';
const urlPlanetarium = '../json/planetarium_room.json';
const urlSecret = '../json/secret_room.json';
const urlTrinkets = '../json/trinkets.json';
const urlShop = '../json/shop_room.json';
const urlBoss = '../json/boss_room.json';
const urlLibrary = '../json/library_room.json';

const angelButton = document.getElementById('angel');
    angelButton.addEventListener('click', () => {
        fetch(urlAngel)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });


    })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const curseButton = document.getElementById('curse');
    curseButton.addEventListener('click', () => {
        fetch(urlCurse)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const devilButton = document.getElementById('devil');
    devilButton.addEventListener('click', () => {
        fetch(urlDevil)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const itemButton = document.getElementById('item');
    itemButton.addEventListener('click', () => {
        fetch(urlItem)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const planetariumButton = document.getElementById('planet');
    planetariumButton.addEventListener('click', () => {
        fetch(urlPlanetarium)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const trinketsButton = document.getElementById('trinkets');
    trinketsButton.addEventListener('click', () => {
        fetch(urlTrinkets)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const shopButton = document.getElementById('shop');
    shopButton.addEventListener('click', () => {
        fetch(urlShop)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const secretButton = document.getElementById('secret');
    secretButton.addEventListener('click', () => {
        fetch(urlSecret)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const bossButton = document.getElementById('boss');
    bossButton.addEventListener('click', () => {
        fetch(urlBoss)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const libButton = document.getElementById('library');
    libButton.addEventListener('click', () => {
        fetch(urlLibrary)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            const img = document.getElementById('itemsImg');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.nom;

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.nom}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});