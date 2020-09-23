function apicall()
{
  $.ajax({
     url:"https://elevate-be-staging.azurewebsites.net/best-of-luck.php",
     method:"POST",
     dataType:"JSON",
     success:function(data)
     {
       var obj=JSON.parse(data);
       var nobj=obj.length;
       var dep_sem=[];
       var source=[];
       for(var i=0;i<nobj;i++)
       {
          dep_sem[i]=obj[i].subCode_dept_sem;
          source[i]=obj[i].source;
       }
       var src=[];
       for(var i=0;i<nobj;i++)
       {
         src[i]=1;
       }
       for(var i=0;i<nobj;i++)
      {
         var cmp1=dep_sem[i];
         for( var j=0;j<nobj;j++)
            {
               if(i !== j) {
                 if(cmp1==dep_sem[j])
                   {
                       if(source[i]=="super")
                         {
                           src[i]=1;
                         }
                         else if (source[i]=="regular") {
                           src[i]=0;
                         }
                     }
                                   }
               }
       }
  var newjson=[];
  for(var i=0;i<nobj;i++)
  {
      if(src[i]==1)
          {
              newjson.push(obj[i]);
            }
  }
  var length = Object.keys(newjson).length;
  document.getElementById("HomeLayout").innerHTML="<select class='dropdown'  id='Year'></select>";
  document.getElementById("Year").innerHTML+='<option id="year">Choose year </option>';
  for(var i=0;i<length;i++){
      document.getElementById("Year").innerHTML+='<option id='+newjson[i].subCode_dept_sem+' value='+newjson[i].year+'>'+newjson[i].year+'</option>';
    }
     }
    })

}
