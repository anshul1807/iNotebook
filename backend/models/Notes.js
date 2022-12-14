const mongoose=require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        // just like a foreign key
        // kisi dusre model ki object id yahan rakhunga
       // yahan par user ko store kar skte hain
        type: mongoose.Schema.Types.ObjectId,
       ref:'user'
    },
   title:{
       type:String,
       required:true
   },
   description:{
       type:String,
       required:true,
   },
   tag:{
       type:String,
       default:"General"
   },
   date:{
       type:Date,
       default : Date.now
   }
});
module.exports=mongoose.model('notes',NotesSchema);