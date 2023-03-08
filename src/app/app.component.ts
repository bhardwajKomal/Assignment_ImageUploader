import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'assignment_imageUpload';
  imageContainer = [
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },

  ];

 
  // upload image in imageContainer with sequences maintained from the particular position
  uploadImage(file, index, position) {
   
    let type = file[0].type
    if (type.match(/image\/*/) == null) {
      alert("please upload image")
      return;
    }


    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.imageContainer[index].img = reader.result?.toString()

    }

  if(index>=position){
    for(let i=position; i<this.imageContainer.length; i++){
      console.log("Updating image at a particular index")
       if(i==index && this.imageContainer[i].img.length > 0){
          reader.onload = () => {
            this.imageContainer[index].img = reader.result?.toString()
        }
        break;
      }
       else if (this.imageContainer[i].img.length > 0) {
         
          }        
        else{
              reader.onload = () => {
                        this.imageContainer[i].img = reader.result?.toString()
            
                      }
                      break;
            }
    }
  }
  }

  // this code will work for all the sequences

  // uploadImage(file, index){
  //   const position = 3;
  //   let type = file[0].type
  //   if (type.match(/image\/*/) == null) {
  //     alert("please upload image")
  //     return;
  //   }

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file[0]);
  //    for (let i = 0; i < this.imageContainer.length; i++) {

  //     const reader = new FileReader();
  //     reader.readAsDataURL(file[0]);
  //     reader.onload = () => {
  //       this.imageContainer[index].img = reader.result?.toString()

  //     }
  
  //       if (this.imageContainer[i].img.length > 0) {
          
  //       }
  //        else {

  //         reader.onload = () => {
  //           this.imageContainer[i].img = reader.result?.toString()

  //         }
  //         break;
  //       }

  //     }

  // }
   

    


  


  // delete image from imageContainer
  deleteImage(index) {

    for (let i = index; i < this.imageContainer.length; i++) {
      if (i == this.imageContainer.length - 1) {
        console.log("index " + i);

        this.imageContainer[i].img = "";
        break;
      }
      this.imageContainer[i].img = this.imageContainer[i + 1].img;
      this.imageContainer[i + 1].img = "";


    }


  }

  }
