    const noteContainer=document.createElement("div"); //建立所有note的容器
    noteContainer.id="noteContainer"
    document.body.appendChild(noteContainer);

  
    function newNote(){
        
        const note=document.createElement("div"); //建立單一note的容器
        note.id="note"
        noteContainer.appendChild(note);

        const featureContainer = document.createElement("div");//建立功能的容器
        featureContainer.id="featureContainer"
        note.appendChild(featureContainer);

        

        const featurePushpin  = document.createElement("i"); //建立放在功能容器裡的功能小圖示Bold
        featurePushpin.id = "featurePushpin";
        featurePushpin.classList = 'fa-solid fa-thumbtack'
        featureContainer.appendChild(featurePushpin);



        const featureEdit = document.createElement("i"); //建立放在功能容器裡的功能小圖示edit
        featureEdit.id = "featureEdit";
        featureEdit.classList = 'fa-solid fa-pen-to-square'
        featureContainer.appendChild(featureEdit);
        
                
        
        
        const featureDelete=document.createElement("i"); //建立放在功能容器裡的功能小圖示delete
        featureDelete.id="featureDelete";
        featureDelete.classList="fa-solid fa-trash-can"
        featureContainer.appendChild(featureDelete);        

        const noteContent=document.createElement("textarea"); //建立note的內容
        noteContent.id="noteContent"
        note.appendChild(noteContent);
      

        
        //唯讀功能
        featureEdit.addEventListener('click',function(){
            if(noteContent.hasAttribute("readOnly")){
                noteContent.removeAttribute("readOnly");
                featureEdit.style.color="#000000"
                
            }else{
                noteContent.readOnly= true;
                featureEdit.style.color="#eeeeee";                               
            }
        })
        //刪除功能
        featureDelete.addEventListener('click', function () {
                        
            note.remove();
        })
        
        //釘選功能
        featurePushpin.addEventListener('click',function(){
                if(note.style.order){
                    note.style.removeProperty('order');
                    featurePushpin.style.color="#000000";
                    featureContainer.style.background="#9CBE5D"
                }else{
                    note.style.order="-1";
                    featurePushpin.style.color="#ffffff";
                    featureContainer.style.background="#e84118"
                }
                    
                    
        })      
           
}




        