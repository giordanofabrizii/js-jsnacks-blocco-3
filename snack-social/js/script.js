// Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:

// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0
// }
// {
//     "tab": ["Twitter", 'Facebook', "GitHub", "Gmail"],
//     "activeTab": 0
// }

// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

const tabs = [
    { nome: "Facebook", tipo: "social network" },
    { nome: "Twitter", tipo: "social network" },
    { nome: "LinkedIn", tipo: "social network" },
    { nome: "YouTube", tipo: "video streaming" },
    { nome: "Gmail", tipo: "email" },
    { nome: "Wikipedia", tipo: "informazione" },
    { nome: "Amazon", tipo: "e-commerce" },
    { nome: "Google Drive", tipo: "cloud storage" },
    { nome: "Reddit", tipo: "forum" },
    { nome: "Netflix", tipo: "video streaming" }
];

const nomiTabs = tabs.map(tab => tab.nome);

const browser = {
    'tab' : nomiTabs,
    activeTab : 3
};


