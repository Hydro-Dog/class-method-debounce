  class MyClass {
    private counter = 0;
    
    updateBtnBackgroundColor(e: any) {
    //method fires repetitively while cursor is dragged through palette
      this.counter++;
      setTimeout(() => {
        this.counter--;
        if (this.counter === 0) {
          this.emailTemplateFacade.changeStyleEmailTemplateRow(this.currentRowIndex, { background: e }, 'button');
        }
      }, 100);
    } 
  }
 
