import note from "../models/note.js";
export  async function getallnotes(_,res){
    try{
        const notes = await note.find().sort({createdAt:-1});
        res.status(200).json(notes);   
    }catch(error){
        console.error("error in getallnotes controller",error);
        res.status(500).json({message:"internal server error"});
    }
 }
    export  async function createnotes (req,res){
    try{
        const {title,content}=req.body
        const newnote=new note ({title,content})
        const savednote=await newnote.save();
        res.status(201).json(savednote); 

    }catch(error){
        console.error("error in createnotes controller",error);
        res.status(500).json({message:"internal server error"});
    }
    


}
export  async function updatenotes  (req,res){
    try{
        const{title, content}=req.body
        const updatednote= await note.findByIdAndUpdate(req.params.id,{title,content},{
            new:true,
        });
        if (!updatednote)return res.status(404).json({message:"note not found"});
        res.status(200).json({message:"note updated successfully"});
    }catch(error){
        console.error("error in updatenote controller",error);
        res.status(500).json({message:"internal server error"});
    }
}
export  async function deletenotes  (req,res){
    try{
        const deletednote = await note.findByIdAndDelete(req.params.id);
        if(!deletednote)return res.status(404).json({message:"note not found"});
        res.json({message:"note deleted successfully"});

    }catch(error){
        console.error("error in deletenote controller",error);
        res.status(500).json({message:"internal server error"});
    }
}

