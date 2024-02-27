const urlAngel = './json/angel_room.json';
const urlCurse = './json/curse_room.json';
const urlDevil = './json/devil_room.json';
const urlItem = './json/item_room.json';
const urlPlanetarium = './json/planetarium_room.json';
const urlSecret = './json/secret_room.json';
const urlTrinkets = './json/trinkets.json';
const urlShop = './json/shop_room.json';
const urlBoss = './json/boss_room.json';
const urlLibrary = './json/library_room.json';
const urlRedChest = './json/red_chest.json';
const urlGoldChest = './json/golden_chest.json';



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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
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
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
            });
        });

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const red_chestButton = document.getElementById('red_chest');
        red_chestButton.addEventListener('click', () => {
        fetch(urlRedChest)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => { 
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
            });
        });


    })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
///////////////////////////////////////////
const golden_chestButton = document.getElementById('golden_chest');
        golden_chestButton.addEventListener('click', () => {
        fetch(urlGoldChest)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => { 
            // Tri ascendant par rapport à l'id
            data.sort((a, b) => a.id - b.id);
            const itemsDiv = document.getElementById('items');
            const descriptionDiv = document.getElementById('description');
            itemsDiv.innerHTML = '';
            descriptionDiv.innerHTML = '';


        data.forEach(item => {
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.classList.add('itemImg');

            const descDiv = document.createElement('div');
            descDiv.className = 'description'; 
            descDiv.innerHTML = `<h2>${item.name}</h2><p>Types : ${item.type}</p><p>${item.description}</p><p>Débloquer : ${item.unlock}</p>`;
            descDiv.style.display = 'none';

            
            itemsDiv.appendChild(img);
            descriptionDiv.appendChild(descDiv);

           
            img.addEventListener('mouseover', () => {
                descDiv.style.display = 'block'; 
            });

            img.addEventListener('mouseout', () => {
                descDiv.style.display = 'none';
            });

            img.addEventListener('click', () => {
                const modal = document.getElementById('modal');
                modal.style.display = 'block';
                const modalContent = document.getElementById('content');
                modalContent.innerHTML = `
                <div id="modal-title">
                    <img id="modal-img" src="${item.image}" alt="${item.name}"> 
                    <h2>${item.name}</h2>
                </div> 
                <div id="modal-text">
                    <p>Types : ${item.type}</p>
                    <p>${item.description}</p><p>Débloquer : ${item.unlock}</p>
                </div>`;
            });
        });


    })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

///////////////////////////////////////////

const close = document.getElementById('close');

close.addEventListener('click', () => {
    modal.style.display = 'none';
});
