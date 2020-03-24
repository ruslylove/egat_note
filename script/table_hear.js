
        var txt = '';
        $.getJSON("http://202.162.78.246:3000/notes", function(result){
              $.each(result[0], function(key, value){         
                txt+='<th data-field="'+key+'">'+key+'</th>';
            });
        });
        
        
        document.getElementById("th_field").innerHTML = '<th data-field="_id">_id</th><th data-field="title">title</th><th data-field="content">content</th><th data-field="createdAt">createdAt</th><th data-field="updatedAt">updatedAt</th><th data-field="__v">__v</th><th data-field="_id">_id</th><th data-field="title">title</th><th data-field="content">content</th><th data-field="createdAt">createdAt</th><th data-field="updatedAt">updatedAt</th><th data-field="__v">__v</th>'; 
