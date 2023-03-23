/* JS */
// sélzction des éléments du DOM HTML
const inputTask = document.forms['frmTODO'].task;
const btAdd = document.forms['frmTODO'].btAdd;
const taskList = document.getElementById['taskList'];
const divNotification = document.getElementById['notification'];

// traitement des actions
btAdd.onclick = function(){
    //lecture des données
    let task = inputTask.value;

    //validation des données
    if(task!='' && task.length>=3){
        divNotification.innerHTML = "";
        
        //traitement des données
        taskList.innerHTML += '<li>'+task+'</li>';

    } else {
        divNotification.innerHTML = 'Veuillez entrer un tache d\'au moins 3 caractères';
    }
}