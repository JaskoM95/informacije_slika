
$(document).ready (function() {

    
    var img = $('img');
    var holder = $('#holder');
    var info = $('#info');
    var slika1Info ='Informacije o slici nisu dodate jos!';
    
    
    
    
    var brisacSlika =$('#holder').children().length;
    
    img.on ('click', function () {
    
        info.html('');
    
     
    
      var self= $(this); 
      
      var copy = self.clone (); 
    
    
      copy.css({
          'position':'absolute',
          'width' : self.width(),
          'height' :self.height(),
          'top': self.offset().top,
          'left': self.offset().left 
    
          })
    
    
        console.log (brisacSlika);
        
        if (brisacSlika<1) { 
    
            holder.html('');
            
            
    
        }
        
        $('#holder').append(copy);
       
    
      copy.animate ({
    
    
        'top' : holder.offset().top,
        'left' :holder.offset().left,
        'width' :holder.width(),
        'height' : holder.height()
    
    
    
      },1000,function(){
          
        info.append (slika1Info);
    
          
      });
    
    
      
    
    })
    
    
    });