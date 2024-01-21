 function calculateAge(){
                var date=new Date();
                var year=document.getElementById("year").value;
                year=parseInt(year);
                var curyear=date.getFullYear();
                var years1=curyear-year;
                var month=document.getElementById("month").value;
                month=parseInt(month);
                var curmonth=date.getMonth()+1;
                if(curmonth < month){
                         var month1= 12-(month - curmonth);
                        years1--;
                    }
                    else{
                    var month1=curmonth-month;
                    }

                
                
                var day=document.getElementById("day").value;
                day=parseInt(day);
                var curday=date.getDate();
                day1=curday-day;
                if (isNaN(year) || isNaN(month) || isNaN(day)){
                    document.getElementById("years").innerHTML=0;
                    document.getElementById("months").innerHTML=0;
                    document.getElementById("days").innerHTML=0;
                }
                else{
                    
                    document.getElementById("years").innerHTML=years1;
                   
                    document.getElementById("months").innerHTML=month1;
                    document.getElementById("days").innerHTML=day1;
                
                    
                }
                
            }
