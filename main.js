

  let sum=document.querySelector('.sum');
  let btn=document.querySelector('button');
  let ost=document.querySelector('.ostatok');
  let pr=document.querySelector('.price');
  let prod=document.querySelector('.product');
  let mass=document.querySelector('.mass');
  let append = document.querySelector('.append_prod'); 
  let name_tranfer = document.querySelector('.name_tranfer');
  let price_tranfer = document.querySelector('.price_tranfer');
  let total_tranfer = document.querySelector('.total_tranfer')

    function Store (name,price,total){ 
      this.name=name;
      this.price=price;
      this.total=total;
      const self=this;
        btn.addEventListener('click', function() {
          this.name=prod.value;
          this.mass=mass.value;                                    
            if(this.name==self.name){
              pr.value=self.price;
              let b=self.total-this.mass;                        
              if(b<3){
                  ost.innerHTML='совсем мало'+' '+b;                
                }
                if(b<0){
                  ost.innerHTML='нет столько в наличи';
                } else{ost.innerHTML=b;                    
                    }
                sum.innerHTML=self.price*this.mass+' '+'$';   

            } 
        });

        append.addEventListener('click', function() {
            let arr = [];
            let listPr = document.querySelector('.list_product');
            let pricePr = document.querySelector('.price_product');
            let totalPr = document.querySelector('.total_product')
            listPr.innerHTML = ' ' + name_tranfer.value;
            pricePr.innerHTML = ' ' + price_tranfer.value;
            totalPr.innerHTML = ' ' + total_tranfer.value
             self.name=listPr.innerHTML;
             self.price=pricePr.innerHTML;
             self.total=totalPr.innerHTML;
             arr[arr.length]=self.name;
            arr[arr.length]=self.price;
            arr[arr.length]=self.total;
            console.log(self.name, self.price,self.total);
            console.log(arr);
        });
        
    };
    
  let silpo1=new Store('Пиво','10','50');
  let silpo2=new Store('Вино','70','40');
  let silpo3=new Store('Хамон','150','30'); 
  let auto1=new Store('BMW','55000','25');
  let auto2=new Store('Audi','42000','15');
  let auto3=new Store('Honda','23000','10'); 
  